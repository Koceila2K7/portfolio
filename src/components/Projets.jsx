import React, { useEffect } from 'react'
import "../style/project.scss";
import { anime } from "../animations/index";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import pinBoard from "../images/pinBoard.png"
import pathfinding from "../images/pathfinding.png";
import paintwars from "../images/paintwars.png";
import twisster from "../images/twisster.png";
import dls from "../images/dls.png"
import reseau from "../images/reseau.png"
gsap.registerPlugin(ScrollTrigger)
function Projets() {

    useEffect(() => {
        anime();
    }, [])

    return (
        <div className="container" id="fp">

            <div className="cInnerContent">
                <h1 className="header-section gs_reveal ipsType_center">Voici une liste de quelques projets réalisé</h1>

                <div className="features">

                    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                        <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
                            <div className="card">
                                <img width="479" height="479" src={reseau} alt="" />
                            </div>
                        </div>

                        <div className="ipsGrid_span7 ipsType_left">
                            <h2 className="heading_large gs_reveal">Analyseur de Protocoles Reseau Offline  (Java / JavaFX)</h2>
                            <p className="gs_reveal">
                                L’objectif de ce projet est de programmer un analyseur de protocoles réseau
                                ‘offline’. Il prend en entrée un fichier trace contenant les octets capturés préalablement
                                sur un réseau Ethernet. Le programme peut s’exécuter dans une interface graphique.
                                <a rel="noopener noreferrer" href="https://github.com/Koceila2K7/Analyseur-de-Protocoles-Reseau-Offline" target="_blank" >Lien GIT</a>.
                              </p>
                        </div>
                    </div>

                    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                        <div className="ipsGrid_span7 ipsType_right">
                            <h2 className="heading_large gs_reveal">Logiciel de dessin (Java / JavaFX)</h2>
                            <p className="gs_reveal">
                                Le but du projet est de développer un éditeur de dessins vectoriels, sur le modèle d’Adobe Illustrator
                                ou Inkscape. Bien sûr, notre éditeur ne possédera qu’un nombre très réduit de fonctionnalités.
                                Nous compensons cela en mettant l’accent sur une conception extensible, permettant d’ajouter
                                facilement des fonctionnalités. La conception est basée sur les principes de délégation,
                                de programmation vis-à-vis d’interfaces et l’emploi des <strong> design patterns</strong>.
                                Pour la partie interface graphique (GUI), j'ai utilisé l’API <strong>JavaFX</strong>.
                                <a rel="noopener noreferrer" href="https://github.com/Koceila2K7/pinboard" target="_blank" >Lien GIT</a>.
                            </p>
                        </div>

                        <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
                            <div className="card">
                                <img width="479" height="479" src={pinBoard} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                        <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
                            <div className="card">
                                <img width="479" height="479" src={pathfinding} alt="" />
                            </div>
                        </div>

                        <div className="ipsGrid_span7 ipsType_left">
                            <h2 className="heading_large gs_reveal">Cooperative path-finding, (multiagent) (Python)</h2>
                            <p className="gs_reveal">
                                L'objet de ce projet est d'étudier une version adversariale du cooperative path-finding:
                                plusieurs équipes d'agents sont en compétition et cherchent à atteindre leurs destinations
                                avant leurs adversaires. On se limitera dans ce projet à deux équipes. Afin d'éviter les
                                situations de blocage, on fixera à l'avance une limite sur le nombre de tours du jeu. On
                                constate qu'au niveau global, on peut donc voir ce problème comme un jeu à 2 joueurs dans
                                lequel chaque équipe est un meta-joueur. En effet, les actions au sein de chaque équipe
                                peuvent éventuellement être coordonnées, comme c'est le cas dans l'algorithme de cooperative
                                path-finding mentionné précédemment.
                                <a rel="noopener noreferrer" href="https://github.com/Koceila2K7/projet-adv-coop-multiagent-pathfinding" target="_blank" >Lien GIT</a>.

                                 </p>
                        </div>
                    </div>

                    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                        <div className="ipsGrid_span7 ipsType_right">
                            <h2 className="heading_large gs_reveal">Paint Wars (Python)</h2>
                            <p className="gs_reveal">
                                Deux équipes de 8 robots ("red team" et "blue team") s'affrontent pour visiter au mieux une arène
                                découpée en cases. Une case appartient à l'équipe qui l'a visitée en dernier. Le temps est limité
                                et l'équipe qui possède le plus de cases après 2000 itérations gagne. Il s'agit là d'une variation
                                compétitive du problème de la patrouille multi-agents, un problème classique en robotique.
                                <a rel="noopener noreferrer" href="https://github.com/Koceila2K7/paintwars" target="_blank" >Lien GIT</a>.
                             </p>

                        </div>

                        <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
                            <div className="card">
                                <img width="479" height="479" src={paintwars} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                        <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
                            <div className="card">
                                <img width="300" height="479" src={dls} alt="" />
                            </div>
                        </div>

                        <div className="ipsGrid_span7 ipsType_left">
                            <h2 className="heading_large gs_reveal">Derrière Le Slogan (Android Studio /Java /PHP)</h2>
                            <p className="gs_reveal">
                                Projet de fin d'étude pour la licence ISIL, une application Android qui permet de noter
                                un produit cosmétique en scannant les ingrédients qui le compose, dotée d'un système
                                de recommandation elle permet de recommander des produits aux utilisateurs, et grâce
                                au système de traduction l'utilisateur peut traduire la notice de produit juste en la scannant.
                                <br />
                                Ps: ce projet n'est pas disponible en public pour plus d'informations contactez-moi
                                 </p>
                        </div>
                    </div>

                    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                        <div className="ipsGrid_span7 ipsType_right">
                            <h2 className="heading_large gs_reveal">Twisster (ReactJs/ React Native/ Node Js Express)   </h2>
                            <p className="gs_reveal">
                                Twisster est une copie du réseau social Twitter faite en react js pour le client web en utilisant:
                                React-Redux, React-Router, Material UI, Scoket.io-Client (pour les messages en temps réel), concernant l'application
                                mobile j'ai utilisé (ReactNavigation,Scoket.io-Client, React-Redux ...), coté back (ExpressJs, JWT, MongoDB, SocketIo, ...).
                                J'ai hébergé le server sur Heroku, et le client sur Netlify
                                <a href="https://608f83850b164ed14b689b66--twisster.netlify.app/" rel="noopener noreferrer" target="_blank" >Lien Twisster</a>.
                                <a href="https://github.com/Koceila2K7/Twisster.git" rel="noopener noreferrer" target="_blank" >Lien GIT</a>.

                             </p>
                        </div>

                        <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
                            <div className="card">
                                <img width="479" height="479" src={twisster} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>);
}

export default Projets;