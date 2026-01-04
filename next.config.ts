const isProd = process.env.NODE_ENV === "production";
export default {
  output: "export",
  basePath: isProd ? "/entek" : "",
  assetPrefix: isProd ? "/entek" : "",
  trailingSlash: true,
  images: { unoptimized: true },
};
