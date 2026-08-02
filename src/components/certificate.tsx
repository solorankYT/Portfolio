import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const certificates = [
  {
    title: "Oracle Database 19c: SQL Associate Certified",
    issuer: "Oracle",
    year: "2026",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F48C08D594ADA2515717124E534D1E640D674F5F6A57EE93955B839A5237AD60",
  },
  {
    //
    title: "Oracle Database 19c: PL/SQL Professional Certified",
    issuer: "Oracle",
    year: "2026",
    link: "https://your-certificate-link.com",
  },
  {
    title: "Unix and Linux Essentials",
    issuer: "Oracle",
    year: "2026",
    link: "https://your-certificate-link.com",
  },
  {
    title: "Oracle Cloud Infrastructure (OCI) Foundations 2026 Certified Associate",
    issuer: "Oracle",
    year: "2026",
    link: "https://your-certificate-link.com",
  },
  {
    title: "Oracle Cloud Infrastructure AI Foundations 2026 Certified Associate",
    issuer: "Oracle",
    year: "2026",
    link: "https://your-certificate-link.com",
  },
];

export default function Certificate() {
  const [expanded, setExpanded] = useState(false);

  const visibleCertificates = expanded
    ? certificates
    : certificates.slice(0, 4);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleCertificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-xl border border-gray-700 bg-gray-900 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2">
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
                <p className="text-sm font-medium leading-snug text-white">
                  {cert.title}
                </p>
              </div>

              <ExternalLink className="h-4 w-4 shrink-0 text-gray-500 transition-colors group-hover:text-yellow-400" />
            </div>

            <div className="flex items-center justify-between pl-6">
              <span className="truncate text-xs text-gray-500">
                {cert.issuer}
              </span>

              <Badge
                variant="outline"
                className="border-gray-700 px-2 py-0 text-[10px] text-gray-400"
              >
                {cert.year}
              </Badge>
            </div>
          </a>
        ))}
      </div>

      {certificates.length > 4 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-yellow-500 hover:text-yellow-400"
          >
            {expanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                View More
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}