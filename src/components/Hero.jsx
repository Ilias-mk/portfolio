import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="hero-greeting">{t.hero.greeting}</p>
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-intro">{t.hero.intro}</p>
        <p className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          {t.hero.status}
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">{t.hero.ctaProjects}</a>
          <a className="button button-secondary" href="#contact">{t.hero.ctaContact}</a>
        </div>
      </div>
    </section>
  )
}
