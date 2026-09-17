import { useLanguage } from '../i18n/LanguageContext.jsx'
import { projects } from '../data/profile.js'
import PhoneVisual from './visuals/PhoneVisual.jsx'
import ApiVisual from './visuals/ApiVisual.jsx'

const visuals = { phone: PhoneVisual, api: ApiVisual }

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <h2 id="projects-heading" className="section-heading">{t.projects.heading}</h2>
        <p className="section-lead">{t.projects.lead}</p>

        <div className="project-list">
          {projects.map((project) => {
            const text = t.projects.items[project.id]
            const Visual = visuals[project.visual]
            return (
              <article key={project.id} className="project">
                <div className="project-visual">
                  <Visual />
                </div>
                <div className="project-body">
                  <h3 className="project-title">{text.title}</h3>
                  <p className="project-summary">{text.summary}</p>
                  <ul className="project-points">
                    {text.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  <ul className="stack-list" aria-label="Tech stack">
                    {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
                  </ul>
                  <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">
                    {t.projects.code}
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
