import Image from "next/image";
import wilmaxLogo from "../../public/images/logo/Wilmax_square.jpg";
import pasabahceLogo from "../../public/images/logo/pasabahce_logo_2.png";
import agaLogo from "../../public/images/logo/agaLogo.jpg";
import bormioliLogo from "../../public/images/logo/download.png";
import promsizeLogo from "../../public/images/logo/promsize.jpg";
import Link from "next/link";

function Header() {
  return (
    <div className="header_wrapper">
      <div className="header_color">
        <div className="container">
          <div className="header_each_div">
            <span>Mon-Sat:</span>
            <span>10:00 AM - 18:30 PM</span>
          </div>
          <div className="header_each_div">
            <span>
              Visit our showroom in Yerevan Trade Center: D61 showroom{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="laportiva_ltd">
            <h2>Laportiva LTD</h2>
            <div className="header_each_div">
              <span>Call Us: +(374) 94 34 00 01</span>
            </div>
      </div>
      {/* <div className="header_belowside ">
        <div className="header_logo_box">
          Bormioli
          <Image
            src={bormioliLogo}
            alt="img"
            layout="intrinsic"
            loading="lazy"
            objectFit="cover"
            width={90}
            height={1}
          />
        </div>
        <div className="header_logo_box">
          Pasabahce
          <Image
            src={pasabahceLogo}
            alt="img"
            layout="intrinsic"
            loading="lazy"
            objectFit="cover"
            width={95}
            height={95}
          />
        </div>
        <div className="header_logo_box">
          Wilmax
          <Image
            src={wilmaxLogo}
            alt="img"
            layout="intrinsic"
            loading="lazy"
            objectFit="cover"
            width={95}
            height={95}
          />
        </div>
        <div className="header_logo_box">
          AgA
          <Image
            style={{ paddingTop: 0 }}
            src={agaLogo}
            alt="img"
            loading="lazy"
            width={133}
            height={135}
          />
        </div>
        <div className="header_logo_box">
          Gus Xrustal
          <Image
            style={{ paddingBottom: "40px" }}
            src={promsizeLogo}
            alt="img"
            width={110}
            height={135}
          />
        </div>
      </div> */}
      <hr></hr>
      <div className="header_titles">
        <div className="header_title_inner_box">
          <Link href="/">Գլխավոր</Link>
          <span></span>
        </div>
        <div className="header_title_inner_box">
          <a>Տեսականի</a>
          <span></span>
        </div>
        <div className="header_title_inner_box">
          <Link href="/brands">Բրենդեր</Link>
          <span></span>
        </div>
        <div className="header_title_inner_box">
          <a>Տեսադարան</a>
          <span></span>
        </div>
        <Link href="/about" className="header_title_inner_box">
          <p>Մեր մասին</p>
          <span></span>
        </Link>
        <div className="header_title_inner_box">
          <a>Կապ մեզ հետ</a>
          <span></span>
        </div>
      </div>
      {/* <hr></hr> */}
    </div>
  );
}

export default Header;
