// A simplified illustration of the PictoDía agenda screen (not a screenshot).
const steps = [
  { label: 'Frukost', icon: 'breakfast' },
  { label: 'Buss', icon: 'bus' },
  { label: 'Skola', icon: 'school' },
  { label: 'Hem', icon: 'home' },
]

function Icon({ type }) {
  switch (type) {
    case 'breakfast':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <circle cx="20" cy="22" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="20" cy="22" r="5" fill="#F2C14E" />
        </svg>
      )
    case 'bus':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <rect x="8" y="8" width="24" height="22" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
          <line x1="8" y1="19" x2="32" y2="19" stroke="currentColor" strokeWidth="3" />
          <circle cx="14" cy="33" r="2.5" fill="currentColor" />
          <circle cx="26" cy="33" r="2.5" fill="currentColor" />
        </svg>
      )
    case 'school':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path d="M6 18 L20 8 L34 18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <rect x="10" y="18" width="20" height="14" fill="none" stroke="currentColor" strokeWidth="3" />
          <rect x="17" y="24" width="6" height="8" fill="#F2C14E" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path d="M8 20 L20 9 L32 20 V32 H8 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <rect x="16" y="23" width="8" height="9" fill="#F2C14E" />
        </svg>
      )
  }
}

export default function PhoneVisual() {
  return (
    <div className="phone" role="img" aria-label="Illustration of the PictoDía schedule screen">
      <div className="phone-screen">
        <p className="phone-input">”Efter frukost tar vi bussen till skolan och sen går vi hem.”</p>
        <ol className="phone-agenda">
          {steps.map((step) => (
            <li key={step.label}>
              <span className="picto"><Icon type={step.icon} /></span>
              <span>{step.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
