import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "AI Fundamentals with IBM SkillsBuild",
    issuer: "IBM",
    year: "2024",
  },
  {
    title: "Unix and Linux Essentials",
    issuer: "Oracle",
    year: "2026",
  },
    {
    title: "Oracle Database 19c: SQL and PL/SQL Fundamentals",
    issuer: "Oracle",
    year: "2026",
  },
  {
    title: "Oracle cloud Infrastructure (OCI) Foundations 2025 Certified Associate",
    issuer: "Oracle",
    year: "2025",
  },
];

export default function Certificate() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {certificates.map((cert, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 bg-gray-900 border border-gray-700 rounded-xl p-4 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300"
        >
          <div className="flex items-start gap-2">
            <Award className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
            <p className="text-sm font-medium text-white leading-snug">
              {cert.title}
            </p>
          </div>
          <div className="flex items-center justify-between pl-6">
            <span className="text-xs text-gray-500 truncate">{cert.issuer}</span>
            <Badge
              variant="outline"
              className="text-[10px] px-1.5 py-0 border-gray-700 text-gray-400 shrink-0 ml-1"
            >
              {cert.year}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
}