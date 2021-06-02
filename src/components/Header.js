import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Hamburger from './Hamburger'
const Header = ({ history, state, setState }) => {


  const [disabled, setDisabled] = useState(false)

  const handleMenu = (e) => {
    disableMenu();
    e.preventDefault();
    if (state.initial === false) {
      setState({
        initial: true,
        clicked: true,
        menuName: "Close"
      })

    }
    if (state.clicked === true) {
      setState(e => ({ ...e, menuName: "Menu", clicked: false }))

    } else {
      setState(e => ({ ...e, menuName: "Close", clicked: true }))
    }

  }


  useEffect(() => {
    history.listen(() => {
      setState(e => ({ ...e, clicked: false, menuName: "Menu" }));
    })
  }, [history, setState])

  //Pour désactiver le button Menu durant la transition
  const disableMenu = () => {
    setDisabled(e => !e)
    setTimeout(() => {
      setDisabled(false)
    }, 1200);
  }

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/portfolio">KOCEILA.</Link>
            </div>
            <div className="menu">
              <button
                disabled={disabled}
                onClick={handleMenu}>{state.menuName}</button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>);
};

export default withRouter(Header);
