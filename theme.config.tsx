import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700 }}>edu-workflows.ai</span>,
  project: {
    link: 'https://github.com/phillipalcock/pbl-ai-prompting-library',
  },
  docsRepositoryBase: 'https://github.com/phillipalcock/pbl-ai-prompting-library',
  footer: {
    text: 'edu-workflows.ai — A course for educators designing project-based learning with AI tools.',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="edu-workflows.ai — Learn to design project-based learning using AI tools" />
      <meta name="og:title" content="edu-workflows.ai" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – edu-workflows.ai',
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  navbar: {
    extraContent: (
      <>
        <a
          href="/about"
          style={{
            padding: '6px 12px',
            fontSize: '14px',
            fontWeight: 500,
            color: '#fff',
            background: '#3b82f6',
            borderRadius: '6px',
            textDecoration: 'none',
            marginRight: '8px',
          }}
        >
          About
        </a>
        <a
          href="/coaching"
          style={{
            padding: '6px 12px',
            fontSize: '14px',
            fontWeight: 500,
            color: '#fff',
            background: '#8b5cf6',
            borderRadius: '6px',
            textDecoration: 'none',
            marginRight: '8px',
          }}
        >
          Coaching
        </a>
        <a
          href="https://aiforbeginners.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '6px 12px',
            fontSize: '14px',
            fontWeight: 500,
            color: '#fff',
            background: '#f97316',
            borderRadius: '6px',
            textDecoration: 'none',
            marginRight: '8px',
          }}
        >
          Blog
        </a>
        <a
          href="https://www.linkedin.com/in/phillipalcock/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '6px 12px',
            fontSize: '14px',
            fontWeight: 500,
            color: '#fff',
            background: '#0a66c2',
            borderRadius: '6px',
            textDecoration: 'none',
            marginRight: '8px',
          }}
        >
          LinkedIn
        </a>
        <a
          href="https://eduaiworkflows.gumroad.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '6px 12px',
            fontSize: '14px',
            fontWeight: 500,
            color: '#fff',
            background: '#6366f1',
            borderRadius: '6px',
            textDecoration: 'none',
            marginRight: '8px',
          }}
        >
          Gumroad Store
        </a>
        <a
          href="mailto:phil@pblfuturelabs.com"
          style={{
            padding: '6px 12px',
            fontSize: '14px',
            fontWeight: 500,
            color: '#fff',
            background: '#10b981',
            borderRadius: '6px',
            textDecoration: 'none',
            marginRight: '8px',
          }}
        >
          Email Me
        </a>
      </>
    ),
  },
}

export default config
