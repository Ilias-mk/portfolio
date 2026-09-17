import { useLanguage } from '../i18n/LanguageContext.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading" className="contact-heading">{t.contact.heading}</h2>
        <p className="contact-text">{t.contact.text}</p>
        <div className="contact-links">
          <a className="button button-primary" href={`mailto:${profile.email}`}>{t.contact.email}</a>
          <a className="button button-on-dark" href={profile.linkedin} target="_blank" rel="noreferrer">{t.contact.linkedin}</a>
          <a className="button button-on-dark" href={profile.github} target="_blank" rel="noreferrer">{t.contact.github}</a>
        </div>
      </div>
    </section>
  )
}
