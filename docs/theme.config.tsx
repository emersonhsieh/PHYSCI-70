import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span className="logo">Pallas Chou</span>,
  useNextSeoProps() {
    const { asPath } = useRouter();
    return {
      titleTemplate: asPath === "/" ? "Pallas Chou" : "%s – Pallas Chou",
    };
  },
  project: {
    link: "https://github.com/emersonhsieh/PHYSCI-70",
  },
  head: (
    <>
      <meta property="title" content="Pallas Chou" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  docsRepositoryBase:
    "https://github.com/emersonhsieh/PHYSCI-70/tree/main/docs",
  footer: {
    text: "2024 Pallas Chou",
  },
  primaryHue: {
    dark: 190,
    light: 190,
  },
  primarySaturation: {
    dark: 100,
    light: 80,
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
  search: {
    placeholder: "Search my website",
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
  gitTimestamp: null,
};

export default config;
