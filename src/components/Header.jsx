import BorderButton from './BorderButton'

const NAV = ['Your Team', 'Solutions', 'Blog', 'Pricing']

export default function Header() {
  return (
    <header className="header fade-down">
      <div className="header-left">
        <a href="/" className="logo" aria-label="Marketeam">
          <img
            src="https://polo-pecan-73837341.figma.site/_assets/v11/17ae538989a509947a8de3892c644664895e69b1.png"
            alt="Marketeam"
            height={32}
          />
        </a>
        <nav className="nav">
          {NAV.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="nav-link">
              {item}
            </a>
          ))}
        </nav>
      </div>
      <div className="header-right">
        <a href="#login" className="login-link">
          Log In
        </a>
        <BorderButton href="#join">Join Now</BorderButton>
      </div>
    </header>
  )
}
