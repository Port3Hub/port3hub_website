import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gh-text-primary mb-4">
          {t('hero.title')}
        </h2>
        <p className="text-lg sm:text-xl text-gh-text-secondary max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
      </div>
    </section>
  );
}
