import Description from "@/components/homepageComponents/Description";
import EachBrand from "@/components/homepageComponents/EachBrand";
import Footer from "@/components/homepageComponents/Footer";
import Header from "@/components/homepageComponents/Header";
import NewProdSlider from "@/components/homepageComponents/NewProdSlider";
import ToppSlider from "@/components/homepageComponents/TopSLider";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header/> */}
      <ToppSlider />
      <NewProdSlider />
      <Description />
      <EachBrand/>
      {/* <Footer/> */}
    </>
  );
}
