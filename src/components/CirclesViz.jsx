import { useCountUp } from '../hooks/useCountUp'

const AVATARS = [
  {
    src: 'https://polo-pecan-73837341.figma.site/_assets/v11/aa51718fb3af3637e6d666b6543fc27a175fada6.png',
    orbit: 1,
    deg: 270,
    radius: 177,
    size: 58,
    shape: 'sq20',
    glow: 'purple',
    delay: '0.6s',
  },
  {
    src: 'https://polo-pecan-73837341.figma.site/_assets/v11/ca755f7f93c1126fb8bdbf99ab364a33aa9ab272.png',
    orbit: 2,
    deg: 60,
    radius: 251,
    size: 58,
    shape: 'round',
    glow: 'yellow',
    delay: '0.8s',
  },
  {
    src: 'https://polo-pecan-73837341.figma.site/_assets/v11/dc01064c7093dcc32674876ee3cf5e41c4a485c6.png',
    orbit: 2,
    deg: 180,
    radius: 251,
    size: 78,
    shape: 'round',
    glow: 'pink',
    delay: '1.0s',
  },
  {
    src: 'https://polo-pecan-73837341.figma.site/_assets/v11/d5470a58b02388336141575048720f19a50de832.png',
    orbit: 2,
    deg: 300,
    radius: 251,
    size: 58,
    shape: 'sq20',
    glow: 'blue',
    delay: '1.2s',
  },
  {
    src: 'https://polo-pecan-73837341.figma.site/_assets/v11/018736aa5d0275c4ce56cfebaf2ae3007d81ca1e.png',
    orbit: 3,
    deg: 130,
    radius: 325,
    size: 88,
    shape: 'round',
    glow: 'pink',
    delay: '1.4s',
  },
  {
    src: 'https://polo-pecan-73837341.figma.site/_assets/v11/c76d8a0b99676de31c014344bfaf75bad090758d.png',
    orbit: 4,
    deg: 30,
    radius: 399,
    size: 58,
    shape: 'round',
    glow: 'purple',
    delay: '1.6s',
  },
  {
    src: 'https://polo-pecan-73837341.figma.site/_assets/v11/7b1b5f039de7b54cc9913e96c1923c3b15a157fa.png',
    orbit: 4,
    deg: 95,
    radius: 399,
    size: 88,
    shape: 'sq24',
    glow: 'orange',
    delay: '1.9s',
  },
  {
    src: 'https://polo-pecan-73837341.figma.site/_assets/v11/9ae171d8895199349755c43fbff00e122221a027.png',
    orbit: 4,
    deg: 220,
    radius: 399,
    size: 88,
    shape: 'sq24',
    glow: 'pink',
    delay: '2.1s',
  },
  {
    src: 'https://polo-pecan-73837341.figma.site/_assets/v11/926c9eb7b4bc1df846fa0e39f0b0dc3fefd80671.png',
    orbit: 4,
    deg: 320,
    radius: 399,
    size: 58,
    shape: 'round',
    glow: 'purple',
    delay: '2.3s',
  },
]

function Avatar({ src, deg, radius, size, shape, glow, delay }) {
  return (
    <div
      className="orbit-avatar-slot"
      style={{
        transform: `translate(-50%, -50%) rotate(${deg}deg) translate(${radius}px) rotate(${-deg}deg)`,
      }}
    >
      <div
        className={`orbit-avatar glow-${glow} ${shape} fly-in`}
        style={{ width: size, height: size, animationDelay: delay }}
      >
        <img src={src} alt="" />
      </div>
    </div>
  )
}

export default function CirclesViz() {
  const count = useCountUp(20, 2000, 1200)

  return (
    <div className="circles-wrap scale-in">
      <div className="circles">
        <div className="orbit orbit-4 spin-left-60">
          {AVATARS.filter((a) => a.orbit === 4).map((a) => (
            <Avatar key={a.src} {...a} />
          ))}
        </div>
        <div className="orbit orbit-3 spin-right-50">
          {AVATARS.filter((a) => a.orbit === 3).map((a) => (
            <Avatar key={a.src} {...a} />
          ))}
        </div>
        <div className="orbit orbit-2 spin-right-40">
          {AVATARS.filter((a) => a.orbit === 2).map((a) => (
            <Avatar key={a.src} {...a} />
          ))}
        </div>
        <div className="orbit orbit-1 spin-left-30">
          {AVATARS.filter((a) => a.orbit === 1).map((a) => (
            <Avatar key={a.src} {...a} />
          ))}
          <div className="orbit-center counter-rotate-30">
            <div className="count-value">
              {count}k<span>+</span>
            </div>
            <div className="count-label">Specialists</div>
          </div>
        </div>
      </div>
    </div>
  )
}
