import React from "react";
import { contact } from "../data/contact"
import "../style/contact.scss";

const ContactElement = ({ nom, description, isNavigable, lien, logo }) => {


    let el = (
        <div className="contact-element">
            <div className="contact-text-container">
                <h3>{nom}</h3>
                <p>{description}</p>
            </div>
            <div className="contact-image-container">
                <img src={logo} alt={nom} />
            </div>
        </div>)


    return (

        <li key={nom}>
            { isNavigable ?
                (<a href={lien} rel="noopener noreferrer" target="_blank">
                    { el}
                </a>)
                : el
            }
        </li>
    )
}


function Contact() {
    return (
        <section className="container">
            <h2>Vous pouvez me retrouver ici:</h2>
            <div className="contact-list">
                <ul>
                    {contact.map(c => <ContactElement {...c} key={c.nom}/>)}
                </ul>
            </div>
        </section>
    );
}
export default Contact