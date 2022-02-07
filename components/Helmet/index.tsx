import React from 'react';
import Head from 'next/head'

const seoDescription =
  "Craig Lewis' personal website, computer science student at the University of Waterloo";

export interface HelmetProps {
  pageTitle?: string;
  description?: string;
}

const Helmet: React.FC<HelmetProps> = ({
  pageTitle,
  description = seoDescription,
}) => (
  <Head>
    <meta charSet="utf-8" />
    <title>{pageTitle}</title>
    <meta name="description" content={description} />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
    <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
    <meta property="og:description" content={description} />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:type" content="website" />
  </Head>
);

export default Helmet;
