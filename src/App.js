import React, { useEffect, useRef, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Competences from "./components/Competences";
import Projets from "./components/Projets";
import Contact from "./components/Contact";
import gsap from 'gsap'


const message = "Si vous êtes entrain de lire ce message, c’est que vous êtes intéressé par mon travail, je vous prie de me contacter pour plus d’informations"


function App() {
  const cursor = useRef(null);
  const cursorFollower = useRef(null);
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });

  useEffect(() => {
    console.log(message)
  }, [])
  useEffect(() => {
    let posX = -100,
      posY = -100;

    let mouseX = -100,
      mouseY = -100;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    })

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        gsap.set(cursorFollower.current, {
          css: {
            left: posX - 12,
            top: posY - 12,
            display: "block"
          }
        });

        gsap.set(cursor.current, {
          css: {
            left: mouseX,
            top: mouseY,
            display: "block"

          }
        });
      }
    });

  }, [])



  const handleClique = () => setState(e => ({ ...e, clicked: true }))
  return (
    <Router>
      <div className='App'>
        <div className="cursor" ref={cursor}></div>
        <div className="cursor-follower" ref={cursorFollower}></div>
        <Header state={state} setState={setState} />
        <div className='container'>
          <div className='wrapper'>
            <div className='home'>
              <Switch>
                <Route exact path='/aboutme' component={Competences} />
                <Route exact path='/projets' component={Projets} />
                <Route exact path='/contact' component={Contact} />
                <Route path='/portfolio' component={() => <Home handleClique={handleClique} />} />

              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}







export default App;
