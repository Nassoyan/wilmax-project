import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { newProductData } from "@/public/data/slideData";
import Heart from "@/public/svg/Heart";

function NewProdSlider() {
  function SampleNextArrow(props) {
    const { onClick } = props;

    return (
      <span className="SliderNextArrow">
        <svg
          onClick={onClick}
          width={13}
          height={22}
          viewBox="0 0 13 22"
          fill="none"
        >
          <path d="M1 21l10-10L1 1" stroke="#1F1F24" strokeWidth={2} />
        </svg>
      </span>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;

    return (
      <span className="SliderPrevArrow">
        <svg
          onClick={onClick}
          width={13}
          height={22}
          viewBox="0 0 13 22"
          fill="none"
        >
          <path d="M12 1L2 11l10 10" stroke="#1F1F24" strokeWidth={2} />
        </svg>
      </span>
    );
  }

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {newProductData.map((el) => {
        return (
          <div key={el.id} className="each_prod_slider">
            <div>
              <Image
                src={`/${el.img}`}
                alt="/"
                layout="responsive"
                width={300}
                height={300}
              />
            </div>
            <div className="newprod_text">{el.text}</div>
            <div>{el.oldPrice}</div>
            <div>{el.currentPrice}</div>
          </div>
        );
      })}
    </Slider>
  );
}

export default NewProdSlider;
