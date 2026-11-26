import { ArrowUpRight } from "lucide-react";

export default function GitHubProfile() {
  return (
    <a
      className="github-profile-link"
      href="https://github.com/solorankYT"
      target="_blank"
      rel="noopener noreferrer"
    >
      View GitHub profile
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}
