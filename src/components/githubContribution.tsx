import React, { useEffect, useState } from 'react';
import { ActivityCalendar } from 'react-activity-calendar';
import type { ThemeInput } from 'react-activity-calendar';

interface Contribution {
  date: string;
  count: number;
  level: number;
}

const greenTheme: ThemeInput = {
  light: ['#000033', '#a8d5a2', '#70b958', '#439632', '#255b12'],
  dark: ['#ebf4ea', '#a8d5a2', '#70b958', '#439632', '#255b12'],
};

export default function SolorankContributions() {
  const [data, setData] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContributions() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://github-contributions-api.jogruber.de/v4/SolorankYT');
        if (!response.ok) throw new Error('Failed to fetch');
        const json = await response.json();

        const contributions2025 = json.contributions
          .filter((day: any) => day.date.startsWith('2025-'))
          .map((day: any) => ({
            date: day.date,
            count: day.count,
            level: day.level,
          }));

        setData(contributions2025);
      } catch (e) {
        setError('Failed to load contributions');
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, []);

  if (loading) return <p>Loading contributions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-yellow-400 mb-6">Github Contributions</h1>
      <div className="text-gray-400 bg-gray-900 p-6 rounded-lg shadow-lg">
        <ActivityCalendar data={data} theme={greenTheme} />
      </div>
    </div>
  );
}
