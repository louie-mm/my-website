import Particles from 'react-particles-js';
import React from 'react';
import './background.css'

function Background() {
    const styles = {
        root: {
            fontFamily: "sans-serif",
            textAlign: "center",
            height: "100%",
            width: "100%",
            background: "#2B2B2B"
        }
    };



    return (
        <div id={"background"} style={styles.root}>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 10,
                            "density": {
                                "enable": false,
                                "value_area": 80
                            }
                        },
                        "color": {
                            "value": "#DC3522"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 5,
                                "color": "#DC3522"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 0.2,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 2,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 80,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 300,
                            "color": "#ffffff",
                            "opacity": 0.1,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 12,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "push"
                            },
                            "resize": false
                        },
                        "modes": {
                            "grab": {
                                "distance": 800,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 800,
                                "size": 80,
                                "duration": 2,
                                "opacity": 0.8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 150,
                                "duration": 0.2
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                }}
            />
        </div>
    )
}

export default Background
