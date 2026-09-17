import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand">Ilias</a>
        <nav aria-label="Main">
          <ul className="nav-list">
            <li><a href="#projects">{t.nav.projects}</a></li>
            <li><a href="#about">{t.nav.about}</a></li>
            <li><a href="#contact">{t.nav.contact}</a></li>
          </ul>
        </nav>
        <div className="language-switch" role="group" aria-label={t.languageSwitch}>
          {['en', 'sv'].map((code) => (
            <button
              key={code}
              type="button"
              className={language === code ? 'is-active' : ''}
              aria-pressed={language === code}
              onClick={() => setLanguage(code)}
            >
              {code === 'en' ? 'EN' : 'SV'}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
