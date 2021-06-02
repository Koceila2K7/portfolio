import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger';

ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause"
});

export const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
        duration: .8,
        height: 0,
        transformOrigin: 'right top',
        skewY: 2,
        ease: "power3.inOut",
        stagger: {
            amount: 0.1
        }
    })
}

export const fadeInUp = (node) => {
    gsap.from(node, {
        y: 60,
        duration: 1,
        delay: .2,
        opacity: 0,
        ease: "power3.inOut"
    })
}

export const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
        duration: .8,
        y: 100,
        delay: .1,
        ease: "power3.inOut",
        stagger: {
            amount: 0.3
        }
    })
}

export const changeBackground = (node, background) => {
    gsap.to(node, {
        duration: 0,
        background: `url(${background}) center center`,
    })
    gsap.to(node, {
        duration: .4,
        opacity: 1,
        ease: "power3.inOut"
    })
    gsap.from(node, {
        duration: .4,
        skewY: 2,
        transformOrigin: "right top"
    })
}

export const resetBackground = (node) => {
    gsap.to(node, {
        duration: .4,
        opacity: 0,
    })
}

export const linkHover = node => {
    gsap.to(node, {
        duration: .3,
        y: 3,
        skewX: 4,
        ease: "power3.inOut"
    })
}


export const linkExitHover = node => {
    gsap.to(node, {
        duration: .3,
        y: -3,
        skewX: 4,
        ease: "power3.inOut"
    })
}

/**
 * 
 * @param {Array<Node>} rights 
 * @param {Array<Node>} lefts 
 */
export const animateProjects = (rights, lefts) => {
    gsap.registerPlugin(ScrollTrigger);

    //Rights projects
    let tl = gsap.timeline();


    let n = rights[0]
    let titre = n.children[0].children[0]
    let paragraphe = n.children[0].children[1]
    let image = n.children[1].children[0]
    tl.from(image, {
        x: 500,
        opacity: 0,
        duration: 2,
        delay: .2,
        ease: "power3.inOut",
        scrollTrigger: {
            trigger: image,
        }
    })
        .from(image, 2, { scale: 1.6, ease: "power3.inOut" },)
        .from(titre, {
            y: -180,
            opacity: 0,
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: titre,
            }
        }, 0.5)
        .from(paragraphe, {
            x: -180,
            opacity: 0,
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: paragraphe,
            }
        }, 0.5);


}


export const animateFrom = (elem, direction) => {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
    }


    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

export const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });

}

export const anime = () => {
    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
        hide(elem); // assure that the element is hidden when scrolled into view
        ScrollTrigger.create({
            trigger: elem,
            onEnter: function () {
                animateFrom(elem)
            },
            onEnterBack: function () { animateFrom(elem, -1) },
            onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
        });
    });
}
        //Left Projects

