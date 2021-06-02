import React from "react"
import "../style/aboutme.scss";
import { formation } from "../data/fomrations"

const FormationElement = ({ logo, titre, description }) => {
    return (
        <li>
            <div className="formation-inner-container">
                <div className="formation-image-container" >
                    <img className="formation-image" src={logo} alt={"logo" + titre} />
                </div>
                <div className="formation-text-container">
                    <h3 className="formation-titre">{titre}</h3>
                    <p className="formation-description">{description}</p>
                </div>
            </div>
        </li>
    )
}


function Competences() {
    return (
        <section className="container">
            <section>
                <h2>A prorpos de moi</h2>
                <article>
                    <p>
                        Je suis Koceila KIRECHE, âgé de 20 ans, je suis passionné par l’informatique dès mon plus jeune âge.
                        Attiré par le data science et le Génie Logiciel, je me suis consacré au développement de solutions informatiques basé sur
                        le traitement de données.
                            <br /><br />
                        J’ai veillé durant ma formation à faire grandir ma stack technique en maîtrisant plusieurs langages
                        et technologies (Java, C, Kotlin, PHP, Python, Scheme, Javascript, Typescript, ReactJs, React Native,
                        Vue Js, Développement android avec java et kotlin, Java Fx, Java Swing , ....), et à apprendre les
                        bonne pratique de programmation tel que l’application de design patterns (Observers, Composite,
                        Decorator, Iterator, State, Strategy, MVC, Factory, Builder, Commande, MVC, MVVM, MVP …) tout en
                        associant les bonne technique de développement ( Code Driven, Model Driven, Round Trip, Test driven ).
                    </p>
                </article>
            </section>
            <section>
                <h2>Mes formations</h2>
                <div>
                    <ul className="formation-list">
                        {formation.map((f, i) => <FormationElement {...f} key={String(i)} />)}
                    </ul>
                </div>
            </section>
        </section>
    );
}

export default Competences