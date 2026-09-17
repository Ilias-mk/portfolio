import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {year} Ilias</span>
        <span>{t.footer.built}</span>
      </div>
    </footer>
  )
}
