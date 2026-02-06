import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Port3Hub',
    icon: FaGithub
  }
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-gh-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gh-text-secondary hover:text-gh-accent transition-colors"
                  aria-label={link.name}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          {/* Footer Text */}
          <div className="text-center">
            <p className="text-gh-text-secondary text-sm mb-1">
              {t('footer.builtWith')}
            </p>
            <p className="text-gh-text-secondary text-xs">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
