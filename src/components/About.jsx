import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function About() {
  const { t } = useLanguage()

  return (
    <section className="section section-alt" id="about" aria-labelledby="about-heading">
      <div className="container about-grid">
        <div className="about-text">
          <h2 id="about-heading" className="section-heading">{t.about.heading}</h2>
          {t.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <aside className="skills">
          <h3 className="skills-heading">{t.about.skillsHeading}</h3>
          <dl className="skill-groups">
            {t.about.skillGroups.map((group) => (
              <div key={group.name} className="skill-group">
                <dt>{group.name}</dt>
                <dd>{group.items.join(', ')}</dd>
              </div>
            ))}
            <div className="skill-group">
              <dt>{t.about.spokenHeading}</dt>
              <dd>{t.about.spoken}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}
