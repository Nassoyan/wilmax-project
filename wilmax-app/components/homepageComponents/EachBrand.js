import Image from "next/image";
import React from "react";
import colorboom from "../../public/images/bannerSlideImage/Color_boom.png";
import wilmaxLogo from "../../public/images/logo/Wilmax_square.jpg";
import pasabahceLogo from "../../public/images/logo/pasabahce_logo_2.png";
import bormioliLogo from "../../public/images/logo/download.png";
import promsize from "../../public/images/logo/promsize.jpg";

function EachBrand() {
  return (
    <div className="eachbrand_container">
      <div className="eachbrand_each_box">
        <Image
          className="each_brand_image"
          src={colorboom}
          alt="/"
          layout="fill"
          loading="lazy"
          objectFit="cover"
        />
        <div className="each_brand_inner">
          <h1 className="each_brand_inner_h1">Wilmax Color-boom</h1>
        </div>
      </div>
      <div className="eachbrand_each_box">
        <Image
          className="each_brand_image"
          src={colorboom}
          alt="/"
          layout="fill"
          loading="lazy"
          objectFit="cover"
        />
        <div className="each_brand_inner">
          <h1 className="each_brand_inner_h1">Wilmax Color-boom</h1>
        </div>
      </div>
      <div className="eachbrand_each_box">
        <Image
          className="each_brand_image"
          src={colorboom}
          alt="/"
          layout="fill"
          loading="lazy"
          objectFit="cover"
        />
        <div className="each_brand_inner">
          <h1 className="each_brand_inner_h1">Wilmax Color-boom</h1>
        </div>
      </div>
      <div className="eachbrand_each_box">
        <Image
          className="each_brand_image"
          src={colorboom}
          alt="/"
          layout="fill"
          loading="lazy"
          objectFit="cover"
        />
        <div className="each_brand_inner">
          <h1 className="each_brand_inner_h1">Wilmax Color-boom</h1>
        </div>
      </div>
    </div>
  );
}

export default EachBrand;
