export default function BorderButton({
  children,
  className = '',
  fillFrom = 'left',
  href = '#',
}) {
  return (
    <div className="btn-border-wrap">
      <a href={href} className={`pill-btn ${className} fill-${fillFrom}`}>
        <span className="pill-btn-label">{children}</span>
      </a>
    </div>
  )
}
