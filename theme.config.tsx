import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700 }}>Build PBL with AI</span>,
  project: {
    link: 'https://github.com/phillipalcock/pbl-ai-prompting-library',
  },
  docsRepositoryBase: 'https://github.com/phillipalcock/pbl-ai-prompting-library',
  footer: {
    text: 'Build PBL with AI — A course for educators designing project-based learning with AI tools.',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Build PBL with AI — Learn to design project-based learning using AI tools" />
      <meta name="og:title" content="Build PBL with AI" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Build PBL with AI',
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
}

export default config
