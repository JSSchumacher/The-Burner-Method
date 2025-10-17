const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/The-Burner-Method' : '',
  assetPrefix: isProd ? '/The-Burner-Method/' : '',
};