import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Oracle Database SQL Certified Associate",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F48C08D594ADA2515717124E534D1E640D674F5F6A57EE93955B839A5237AD60",
  },
  {
    title: "Oracle Database PL/SQL Certified Professional",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5B4DD06F9F1FAC6E2EBCF934EF539793A149FD7BD68CCDCE8729DA9C29614CCD",
  },
  {
    title: "Oracle Cloud Infrastructure Foundations Certified Associate",
  },
  {
    title: "Oracle Cloud Infrastructure AI Foundations Certified Associate",
  },
];

const cardClassName = "flex h-full flex-col gap-3 rounded-xl border border-gray-700 bg-gray-900 p-4";

export default function Certificate() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" role="list">
      {certificates.map(({ title, link }) => {
        const content = (
          <>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2">
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" aria-hidden="true" />
                <p className="text-sm font-medium leading-snug text-white">{title}</p>
              </div>
              {link && (
                <ExternalLink className="h-4 w-4 shrink-0 text-gray-500 transition-colors group-hover:text-yellow-400" aria-hidden="true" />
              )}
            </div>

            <div className="flex items-center justify-between pl-6">
              <span className="truncate text-xs text-gray-400">Oracle</span>
              <time dateTime="2026" className="inline-flex shrink-0 items-center rounded-full border border-gray-700 px-2 py-0 text-[10px] font-medium text-gray-400">
                2026
              </time>
            </div>
          </>
        );

        return (
          <li key={title}>
            {link ? (
              <a
                className={`${cardClassName} group transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400`}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <div className={cardClassName}>{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
