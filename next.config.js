/** @type {import('next').NextConfig} 
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Ajoutez la règle pour html-loader
    config.module.rules.push({
      test: /\.html$/,
      use: 'html-loader',
    });
    // Ajoutez la règle pour les fichiers CSS
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });

    // D'autres configurations Webpack si nécessaire...

    return config;
  },
};

module.exports = nextConfig;

