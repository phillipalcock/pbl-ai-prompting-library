import React, { useState, useEffect } from 'react'

const links = [
  { href: '/about', label: 'About', bg: '#3b82f6', external: false },
  { href: '/coaching', label: 'Coaching', bg: '#8b5cf6', external: false },
  { href: 'https://aiforbeginners.substack.com', label: 'Blog', bg: '#f97316', external: true },
  { href: 'https://www.linkedin.com/in/phillipalcock/', label: 'LinkedIn', bg: '#0a66c2', external: true },
  { href: 'https://eduaiworkflows.gumroad.com/', label: 'Gumroad Store', bg: '#6366f1', external: true },
  { href: 'mailto:phil@pblfuturelabs.com', label: 'Email Me', bg: '#10b981', external: false },
]

const linkStyle = (bg: string): React.CSSProperties => ({
  padding: '6px 12px',
  fontSize: '14px',
  fontWeight: 500,
  color: '#fff',
  background: bg,
  borderRadius: '6px',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
})

export default function NavLinks() {
  const [open, setOpen] = useState(false)

  // Close menu on route change or escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  // Close when clicking outside
  useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.nav-links-wrapper')) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [open])

  return (
    <div className="nav-links-wrapper" style={{ position: 'relative' }}>
      {/* Desktop: show inline links */}
      <div className="nav-links-desktop">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            style={{ ...linkStyle(link.bg), marginRight: '8px' }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile: show menu button + dropdown */}
      <div className="nav-links-mobile">
        <button
          onClick={() => setOpen(!open)}
          aria-label="Navigation links"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            border: '1px solid #555',
            borderRadius: '6px',
            background: 'transparent',
            color: 'inherit',
            cursor: 'pointer',
            fontSize: '18px',
          }}
        >
          {open ? '\u2715' : '\u2630'}
        </button>
        {open && (
          <div
            style={{
              position: 'absolute',
              top: '44px',
              right: 0,
              background: 'var(--nextra-bg, #111)',
              border: '1px solid #333',
              borderRadius: '8px',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              zIndex: 50,
              minWidth: '160px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                onClick={() => setOpen(false)}
                style={{
                  ...linkStyle(link.bg),
                  display: 'block',
                  textAlign: 'center',
                  marginRight: 0,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
