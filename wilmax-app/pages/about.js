import Image from "next/image";
import React from "react";
import { useState, useEffect, useRef } from "react";
import agaLogo from "../public/images/logo/agaLogo.jpg";
import Search from "@/public/svg/Search";
import Car from "@/public/svg/descCar";

function About() {
  const [showDesc, setShowDesc] = useState(false);
  const descWrapperRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowDesc(true);
        } else {
          setShowDesc(false);
        }
      });
    }, options);

    observer.observe(descWrapperRef.current);

    return () => {
      if (descWrapperRef.current) {
        observer.unobserve(descWrapperRef.current);
      }
    };
  }, []);
  return (
    <div className="about-wrapper">
      <div>
        <div className="about_container">
          <div>
            <span>
              <span style={{ color: "grey", cursor: "pointer" }}>Home /</span>{" "}
              about
            </span>
            <h1>Մեր մասին </h1>
            <hr></hr>
          </div>
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
              metus ut arcu congue suscipit non id magna. Nunc sit amet tortor
              quis nisl dapibus rhoncus. Fusce lacinia lectus tellus, non porta
              quam pellentesque non. Nulla facilisi. Suspendisse potenti. Mauris
              sit amet lorem vel enim lobortis efficitur. Fusce lobortis nibh
              dolor. Vestibulum in dui rutrum, iaculis sem et, elementum dolor.
              Praesent sollicitudin ornare velit id tristique. Sed facilisis sit
              amet magna bibendum auctor. Curabitur sed fermentum quam, vitae
              semper tellus. In hac habitasse vitae egestas risus lacinia et.
              Vivamus ac lectus elit. In iaculis eu orci tempor sodales. Proin
              eu velit et lectus hendrerit aliquet sit amet vitae mauris. Nam at
              aliquam ante, sed mattis massa. Aenean et lacinia felis. Nam
              maximus odio vel malesuada porta. Vestibulum rhoncus tortor ut
              nunc consectetur sodales. Maecenas et ipsum eu elit facilisis
              sollicitudin scelerisque eu justo.
            </p>
            <div className="image-container">
              <Image
                src={agaLogo}
                alt="/"
                layout="responsive"
                width={1}
                height={1}
                loading="lazy"
              />
            </div>
          </div>
          <div
            className={`desc_wrapper ${showDesc ? "visible" : ""}`}
            ref={descWrapperRef}
          >
            <div className="container description">
              <div className="each_desc_container">
                <Search />
                <span> ԼԱՅՆ ԸՆՏՐՈՒԹՅԱՆ ՀՆԱՐԱՎՈՐՈՒԹՅՈՒՆ</span>
              </div>
              <div className="each_desc_container">
                <Car />
                <span> ԱՌԱՔՈՒՄ ՀՀ ԲՈԼՈՐ ՈՒՂՂՈՒԹՅՈՒՆՆԵՐՈՎ</span>
              </div>
              <div className="each_desc_container">
                <div className="check_sign"><span>&#x2713;</span></div>
                <span> ՈՐԱԿԻ ԵՐԱՇԽԱՎՈՐՈՒՄ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
