import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from 'gsap'
import arrow from "../images/arrow.svg"
import koceila from "../images/dallas.jpg";
import kireche from "../images/image2.jpeg";
import "../style/home.scss";
import heroInformations from '../data/heroinformations';

const Home = ({ handleClique }) => {
  const app = useRef(null);
  const images = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    let rightImage = images.current.firstElementChild;
    let leftImage = images.current.lastElementChild;

    let headLineFirst = content.current.children[0].children[0]
    let headLineSecond = content.current.children[0].children[1]
    let contentP = content.current.children[1];
    let contentButton = content.current.children[2];
    const tl = new TimelineLite({ delay: .8 });


    TweenMax.to(app.current, 0, { css: { visibility: 'visible' } })

    tl.from(rightImage, 1.2, { y: 1280, ease: Power3.easeOut }, 'Start')
      .from(rightImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .2)
      .from(leftImage, 1.2, { y: -1080, ease: Power3.easeOut }, .2)
      .from(leftImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .2)

    tl.staggerFrom([headLineFirst.children, headLineSecond.children], 1, {
      y: 44,
      ease: Power3.easeOut,
      delay: .8
    }, .15, 'Start')
      .from(contentP, 1, { y: 22, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { x: -50, opacity: 0, ease: Power3.easeOut }, 1.6)

  }, []);
  return (
    <div className='container'>
      <div className="hero-home" ref={app}>
        <div className="container-home">
          <div className="hero-inner-home">
            <div className="hero-content-home" id="hch">
              <div className="hero-content-inner-home" ref={content}>
                <h1>
                  <div className="hero-content-line-home">
                    <div className="hero-content-line-inner-home">
                      {heroInformations.prenom}
                    </div>
                  </div>
                  <div className="hero-content-line-home">
                    <div className="hero-content-line-inner-home">
                      {heroInformations.nom}
                    </div>
                  </div>
                </h1>
                <p>
                  {heroInformations.description}
                </p>
                <div className="btn-row-home">
                  <button onClick={handleClique} className="explore-button-home">
                    explore
                    <div className="arrow-icon-home">
                      <img src={arrow} alt="arrow" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="hero-images-home" id="hiih">
              <div className="hero-images-inner-home" ref={images}>
                <div className="hero-image-home koceila">
                  <img src={koceila} alt="koceila" />
                </div>
                <div className="hero-image-home kireche">
                  <img src={kireche} alt="koceila kireche" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;