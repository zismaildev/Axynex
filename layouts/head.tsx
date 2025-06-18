import React from "react";
import NextHead from "next/head";

import { siteConfig } from "@/config/site";

export const Head = () => {
  return (
    <NextHead>
      {/* Title */}
      <title>{siteConfig.name} - {siteConfig.description.slice(0, 50)}...</title>

      {/* Meta Description */}
      <meta name="description" content={siteConfig.description} />

      {/* Viewport */}
      <meta
        name="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      {/* Favicon */}
      <link href="/favicon.ico" rel="icon" />

      {/* Open Graph */}
      <meta property="og:title" content={siteConfig.name} />
      <meta property="og:description" content={siteConfig.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://axynex.vercel.app" /> {/* ปรับตามโดเมนจริง */}
      {/* <meta
        property="og:image"
        content="https://axynex.com/og-image.png"
      /> ใส่ภาพ preview */}

      {/* Twitter Card */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteConfig.name} />
      <meta name="twitter:description" content={siteConfig.description} />
      <meta
        name="twitter:image"
        content="https://axynex.com/og-image.png"
      />
       */}

      {/* Canonical URL */}
      <link rel="canonical" href="https://axynex.vercel.app" />

    </NextHead>
  );
};
