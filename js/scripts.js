// initiate ParticleJS
particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#8F2AA3"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#8F2AA3"
        }
      },
      "opacity": {
        "value": 0.75,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#8F2AA3",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": false
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      }
    },
    "retina_detect": true
  }
);

// initiate ParticleJS1
particlesJS('particles-js1',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#8F2AA3"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#8F2AA3"
        }
      },
      "opacity": {
        "value": 0.75,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#8F2AA3",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": false
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      }
    },
    "retina_detect": true
  }
);

// typewriterjs
var typed = document.getElementById('typed');
var typewriter = new Typewriter(typed, {
  loop: true
});

typewriter.typeString("I'm a Full Stack Developer.")
  .pauseFor(2000)
  .deleteChars(21)
  .typeString("JavaScript Tinkerer.")
  .pauseFor(2000)
  .deleteChars(20)
  .typeString("Bug Squasher.")
  .pauseFor(2000)
  .deleteChars(13)
  .typeString("Googlefu Master.")
  .pauseFor(2000)
  .deleteChars(16)
  .typeString("Caffeine Lover.")
  .pauseFor(2000)
  .start()

//scrollreveal
window.sr = ScrollReveal();
sr.reveal('.icon-img');
sr.reveal('.project-card');
sr.reveal('.icon-img-c');

