/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "http",
        hostname: "localhost:8000",
      },
      {
        protocol: "https",
        hostname: "http2.mlstatic.com",
      },

      {
        protocol: "https",
        hostname: "www.mercadopago.com",
      },
    ],
  },
  env: {
    DOMAIN_PROD: "http://localhost:8000/api/v1",
    // DOMAIN_PROD: "https://closetwithoutgender-dev-kagk.3.us-1.fl0.io/api/v1",
    PUBLICKEY_DEV: "TEST-4bac8b08-bec1-4b53-a00e-2bf582723423",
    ACCESSTOKEN_DEV:
      "TEST-6054423779591114-080814-dd2bb30d858fd936f6d5cbd1b3e7d253-513027242",
  },
};

module.exports = nextConfig;
