if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'cms.cooperatie-museum.nl',
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
    domains: [process.env.WORDPRESS_URL, "secure.gravatar.com"],
  },
};
