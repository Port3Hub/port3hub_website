import { useTranslation } from 'react-i18next';
import { FiExternalLink } from 'react-icons/fi';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <a
      href={project.website}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-gh-border rounded-lg p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        <img
          src={project.logo}
          alt={`${project.name} logo`}
          className="w-16 h-16 rounded-lg flex-shrink-0"
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-gh-text-primary">
              {project.name}
            </h3>
            <FiExternalLink className="text-gh-text-secondary flex-shrink-0 mt-1" />
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="inline-block px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>

          <p className="text-gh-text-secondary text-sm leading-relaxed">
            {t(project.description)}
          </p>
        </div>
      </div>
    </a>
  );
}
