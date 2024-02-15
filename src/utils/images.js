const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../assets", true, /\.(png|jpe?g|svg|webp|avif)$/)
);

export default images;