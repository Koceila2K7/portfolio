import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from 'gsap'
import {
  staggerReveal, staggerText,
  changeBackground, resetBackground, linkHover, linkExitHover
} from "../animations/index";
import { navigations } from "./navigation"
import dallas from "../images/dallas.jpg";
import austin from "../images/image2.jpeg";
import newyork from "../images/newyork.webp";
import sanfrancisco from "../images/sanfrancisco.webp";
import beijing from "../images/beijing.webp";
const images = [
  { name: 'JAVA', image: dallas },
  { name: 'JS', image: austin },
  { name: 'C', image: newyork },
  { name: 'PHP', image: sanfrancisco },
  { name: 'Kotlin', image: beijing },
  { name: 'Python', image: austin },
  { name: 'Scheme', image: newyork },
  { name: '....', image: sanfrancisco },
]

const Hamburger = ({ state }) => {
  const menu = useRef(null)
  const revealMenu = useRef(null);
  const revealMenuBackground = useRef(null);
  const cityBackground = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);


  useEffect(() => {
    if (state.clicked === false) {
      gsap.to([revealMenu.current, revealMenuBackground.current], {
        duration: .8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07
        }
      });
      gsap.to(menu.current, {
        duration: 1,
        css: {
          display: "none"
        }
      })
    } else if (state.clicked === true) {
      gsap.to(menu.current, {
        duration: 0,
        css: {
          display: "block"
        }
      })
      gsap.to([revealMenuBackground.current, revealMenu.current], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(revealMenuBackground.current, revealMenu.current);
      //fadeInUp(info.current)
      staggerText(line1.current, line2.current, line3.current)
    }
  }, [state])

  const onMouseEnter = (name) => {
    changeBackground(cityBackground.current, name);
  }
  const onMouseDown = () => {
    resetBackground(cityBackground.current)
  }

  const handleHover = e => {
    linkHover(e.target)
  }

  const handleHoverExit = e => {
    linkExitHover(e.target)
  }

  const getRef = index => {
    switch (index) {
      case 0: return line1;
      case 1: return line2;
      case 2: return line3;
      default: return line3
    }
  }
  return (
    <div className='hamburger-menu' ref={menu}>
      <div className="menu-secondary-background-color" ref={revealMenuBackground}></div>
      <div className="menu-layer" ref={revealMenu}>
        <div className="menu-city-background" ref={cityBackground}>

        </div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  {navigations.map((el, index) => <li key={index + ""}>
                    <Link onMouseEnter={handleHover}
                      onMouseOut={handleHoverExit}
                      ref={getRef(index)}
                      to={el.path}  >{el.name}</Link></li>)}
                </ul>
              </nav>

              <div className="locations">
                Langage :
                {images.map(e => <span key={e.name}
                onMouseEnter={() => { onMouseEnter(e.image) }}
                onMouseOut={onMouseDown}>{e.name}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
};

export default Hamburger;
