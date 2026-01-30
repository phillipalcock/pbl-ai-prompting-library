import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import NavLinks from './components/NavLinks'

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
    defaultMenuCollapseLevel: Infinity,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  navbar: {
    extraContent: <NavLinks />,
  },
}

export default config
