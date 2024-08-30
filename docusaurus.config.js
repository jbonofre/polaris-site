// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apache Polaris',
  tagline: 'Welcome to Apache Polaris',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://polaris.apache.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'apache', // Usually your GitHub org/user name.
  projectName: 'polaris-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        logo: {
          alt: 'Apache Polaris (incubating)',
          src: 'img/polaris-brandmark.png',
        },
        items: [
          {to: '/', label: 'Apache Polaris', position: 'left'},
          {href: 'https://polaris-catalog.zulipchat.com/', html: '<img src="https://img.shields.io/badge/Zulip-Chat-blue?color=3d4db3&logo=zulip&style=for-the-badge&logoColor=white" alt="Zulip"/>', position: 'right'},
          {href: 'https://github.com/apache/polaris/actions/workflows/gradle.yml?query=branch%3Amain', html: '<img src="https://img.shields.io/github/actions/workflow/status/apache/polaris/gradle.yml?branch=main&label=Main%20CI&logo=Github&style=for-the-badge" alt="Build Status"/>', position: 'right'},
          {type: 'doc', docId: 'overview', position: 'right', label: 'Documentation'},
          {to: 'community', label: 'Community', position: 'right'},
          {href: 'https://github.com/apache/polaris', label: 'GitHub', position: 'right'},
          {
            type: 'dropdown',
            label: 'ASF',
            position: 'right',
            items: [
              {label: 'Foundation', to: 'https://www.apache.org/'},
              {label: 'License', to: 'https://www.apache.org/licenses/'},
              {label: 'Events', to: 'https://www.apache.org/events/current-event.html'},
              {label: 'Privacy', to: 'https://privacy.apache.org/policies/privacy-policy-public.html'},
              {label: 'Security', to: 'https://github.com/apache/polaris/blob/main/SECURITY.md'},
              {label: 'Sponsorship', to: 'https://www.apache.org/foundation/sponsorship.html'},        
              {label: 'Thanks', to: 'https://www.apache.org/foundation/thanks.html'}
            ]
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        logo: {
          width: 200,
          src: "/img/apache-incubator.svg",
          href: "https://incubator.apache.org/",
          alt: "Apache Incubator"
        },
        copyright: `<div>
        <p>
          Apache Polaris is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.
        </p>
        <p>
          Copyyright © 2024 The Apache Software Foundation, Licensed under the Apache License, Version 2.0. <br/>
          Apache Polaris, the names of other Apache projects, and the ASF logo are either registered trademarks or trademarks of the Apache Software Foundation in the United States and/or other countries.
        </p>
        </div>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
