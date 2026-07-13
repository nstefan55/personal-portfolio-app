import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    // Not resolved against metadataBase — must be absolute.
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
