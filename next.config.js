module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    theme: "DEFAULT",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },
};
