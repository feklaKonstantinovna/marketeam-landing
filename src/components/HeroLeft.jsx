import TypewriterHeading from './TypewriterHeading'
import BorderButton from './BorderButton'

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4 9h10M10 5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CursorPointer() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5.5 3.2 19.2 12.1l-6.4 1.6 3.2 6.7-3.3 1.6-3.2-6.8-4.2 4.1V3.2Z"
        fill="#A068FF"
      />
    </svg>
  )
}

export default function HeroLeft() {
  return (
    <div className="hero-left fade-up">
      <TypewriterHeading />
      <div className="hero-cta">
        <BorderButton className="start-btn" fillFrom="right" href="#start">
          Start Project
          <ArrowIcon />
        </BorderButton>
      </div>
      <div className="cursor-badge">
        <CursorPointer />
        <span className="david-pill">David</span>
      </div>
    </div>
  )
}
