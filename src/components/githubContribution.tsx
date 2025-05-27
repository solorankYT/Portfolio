import { useEffect, useState } from 'react';
import { ActivityCalendar } from 'react-activity-calendar';
import type { ThemeInput } from 'react-activity-calendar';

interface Contribution {
  date: string;
  count: number;
  level: number;
}

const greenTheme: ThemeInput = {
  light: ['#000033', '#f6e05e', '#ecc94b', '#d69e2e', '#b7791f'],
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

        const contributions2025 = (json.contributions as unknown[])
          .filter(
            (day: unknown): day is { date: string; count: number; level: number } =>
              typeof day === 'object' &&
              day !== null &&
              'date' in day &&
              typeof (day as Record<string, unknown>).date === 'string' &&
              'count' in day &&
              typeof (day as Record<string, unknown>).count === 'number' &&
              'level' in day &&
              typeof (day as Record<string, unknown>).level === 'number' &&
              typeof (day as Record<string, unknown>).date === 'string' &&
              typeof (day as Record<string, unknown>).date === 'string' &&
              ((day as Record<string, unknown>).date as string).startsWith('2025-')
          )
          .map((day) => ({
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
     
      <div className="text-gray-400 bg-gray-900 p-6 rounded-lg shadow-lg">
        <ActivityCalendar data={data} theme={greenTheme} />
      </div>
    </div>
  );
}
