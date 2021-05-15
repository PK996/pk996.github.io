import React, { Component } from "react";
import Particles from "react-tsparticles";

class BackgroundParticles extends Component {
    constructor(props) {
      super(props);
  
      this.particlesInit = this.particlesInit.bind(this);
      this.particlesLoaded = this.particlesLoaded.bind(this);
    }
  
    particlesInit(main) {
      console.log(main);
    }
  
    particlesLoaded(container) {
      console.log(container);
    }
  
    render() {
      return (
        <Particles
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={{
            "autoPlay": true,
            "background": {
              "color": {
                "value": "#000000"
              },
              "opacity": 1
            },

            "fullScreen": {
              "enable": true,
              "zIndex": -1
            },
            "detectRetina": true,
            "fpsLimit": 60,
            
            "interactivity": {
              "detectsOn": "window",
              "events": {
                "onClick": {
                  "enable": false,
                  "mode": []
                },
                "onDiv": {
                  "selectors": [],
                  "enable": false,
                  "mode": [],
                  "type": "circle"
                },
                "onHover": {
                  "enable": false,
                  "mode": "repulse",
                  "parallax": {
                    "enable": false,
                    "force": 2,
                    "smooth": 10
                  }
                },
                "resize": true
              },
              "modes": {
                "trail": {
                  "delay": 0.005,
                  "quantity": 5,
                  "particles": {
                    "color": {
                      "value": "#ff0000",
                      "animation": {
                        "enable": true,
                        "speed": 4,
                        "sync": true
                      }
                    },

                    "move": {
                      "outMode": "destroy",
                      "speed": 5,
                      "angle": {},
                      "attract": {
                        "rotate": {}
                      },
                      "gravity": {},
                      "noise": {
                        "delay": {
                          "random": {}
                        }
                      },
                      "outModes": {},
                      "trail": {}
                    },
                    "size": {
                      "value": 5,
                      "animation": {
                        "enable": true,
                        "speed": 5,
                        "minimumValue": 1,
                        "sync": true,
                        "startValue": "min",
                        "destroy": "max"
                      },
                      "random": {}
                    },
                  }
                }
              }
            },
            "particles": {              
              "color": {
                "value": "#4e3b97",
                "animation": {
                  "enable": true,
                  "speed": 7,
                  "sync": true
                }
              },
              "move": {
                "direction": "bottom",
                "distance": 0,
                "enable": true,
                "gravity": {
                  "acceleration": 9.81,
                  "enable": false,
                  "maxSpeed": 2
                },
                "outModes": {
                  "default": "out",
                  "bottom": "out",
                  "left": "out",
                  "right": "out",
                  "top": "out"
                },
                "random": false,
                "size": true,
                "speed": 2,
                "straight": true,
                "trail": {
                  "enable": true,
                  "length": 200,
                  "fillColor": {
                    "value": "#000766"
                  }
                },
                "vibrate": false,
                "warp": false
              },
              "number": {
                "density": {
                  "enable": true,
                  "area": 800,
                  "factor": 1000
                },
                "limit": 0,
                "value": 75
              },
              "reduceDuplicates": true,
              "shape": {
                "options": {},
                "type": "circle"
              },
              "size": {
                "random": {
                  "enable": true,
                  "minimumValue": 1
                },
                "value": 26,
                "animation": {
                  "destroy": "none",
                  "enable": false,
                  "minimumValue": 1,
                  "speed": 3,
                  "startValue": "min",
                  "sync": true
                }
              },
              
            },
            "pauseOnBlur": true,
            "pauseOnOutsideViewport": true,
            "themes": []
          }}
        />
      );
    }
  }
  
  export default BackgroundParticles;