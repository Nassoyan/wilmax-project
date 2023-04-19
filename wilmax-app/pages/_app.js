import "@/styles/globals.scss";
import "@/styles/header.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/topslider.scss";
import "@/styles/newProductSlider.scss";
import "@/styles/description.scss";
import "@/styles/toppslider.scss";
import "@/styles/footer.scss";
import "@/styles/about.scss";
import "@/styles/brands.scss";
import "@/styles/eachbrand.scss";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
