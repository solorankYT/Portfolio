import { ArrowUpRight, Award } from "lucide-react";
import "../credentials.css";

const certificates = [
  {
    title: "Oracle Database SQL Certified Associate",
    badgeUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F48C08D594ADA2515717124E534D1E640D674F5F6A57EE93955B839A5237AD60",
  },
  {
    title: "Oracle Database PL/SQL Certified Professional",
    badgeUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5B4DD06F9F1FAC6E2EBCF934EF539793A149FD7BD68CCDCE8729DA9C29614CCD",
  },
  {
    title: "Oracle Cloud Infrastructure Foundations Certified Associate",
  },
  {
    title: "Oracle Cloud Infrastructure AI Foundations Certified Associate",
  },
];

export default function Certificate() {
  return (
    <ul className="credential-list" role="list">
      {certificates.map(({ title, badgeUrl }) => (
        <li key={title} className="credential-card">
          <span className="credential-icon" aria-hidden="true">
            <Award size={21} strokeWidth={1.6} />
          </span>
          <div className="credential-body">
            <h3>{title}</h3>
            <p className="credential-issuer">
              Oracle · <time dateTime="2026">2026</time>
            </p>
            {badgeUrl && (
              <a
                className="credential-link"
                href={badgeUrl}
                aria-label={`View badge for ${title}`}
              >
                View badge <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
