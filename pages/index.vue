<template>
  <section id="home" class="hide-overflow" style="overflow: hidden">
    <v-layout>
        <v-img
        class="gambar"
          :src="require('../static/bg.jpeg')"
          height="100vh" style="">
          <div id="particles-js"></div>
          <v-row data-aos="fade-up" align="center" justify="center" class="text-center fill-height pa-md-5 pa-3 mx-0">
            <v-col cols="12">
              <v-img height="300" :src="require('../static/sony.png')" contain />
              <div class="title-wed">
                Sony dan Ika
              </div>
              <div class="sub-wed">
                Kepada Bapak/Ibu/Saudara/i
              </div>
              <div v-if="name === undefined" class="pas-wed">
               Tamu Undangan
              </div>
              <div v-else class="pas-wed">
               {{ name }}
              </div>
              <v-btn dark @click="toHome()" class="btn-wed text-capitalize" outlined color="white">
                Buka Undangan
              </v-btn>
            </v-col>
          </v-row>
        </v-img>
    </v-layout>
  </section>
</template>

<script>
import 'particles.js'
export default {
  data() {
    return {
      data: {},
      name: ''
    }
  },
  mounted() {
    this.name = this.$router.currentRoute.query['to']
    this.initParticles()
  },
  methods: {
    toHome () {
      this.$router.push({ name: 'main' })
      localStorage.setItem('name', this.name)
      this.$root.$refs.A.openFullscreen()
    },
    initParticles() {
      window.particlesJS("particles-js", {
                "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 3,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.7,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 50,
      "color": "#ffffff",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "bottom",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 300,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode":  "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 200,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
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
            })
    }
  }
}
</script>

<style scoped>
#particles-js{
  position: absolute;
  background-size: contain;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: hidden;
  z-index: 0;
}
  @font-face {
    font-family: Sweet;
    src: url(../static/creation.otf) format("truetype");
  }
  @font-face {
    font-family: Lora-Regular;
    src: url(../static/lora/Lora-Regular.ttf) format("truetype");
  }
  @font-face {
    font-family: Lora-Medium;
    src: url(../static/lora/Lora-Medium.ttf) format("truetype");
  }
  @media only screen and (min-width: 1024px) {
    .title-wed {
      font-family: Sweet;
      font-size:65px;
      color:white;
      line-height: 1em;
      margin-bottom:20px;
      margin-top:20px;
    }
  }

  @media only screen and (max-width: 1023px) {
    .title-wed {
      font-family: Sweet;
      font-size:55px;
      color:white;
      margin-top:10px;
      line-height: 1em;
      margin-bottom:20px;
    }
  }
  .sub-wed {
    font-family: Lora-Regular;
    font-size:16px;
      color:white;
  }
  .pas-wed {
    font-family: Lora-Regular;
    font-size:18px;
      color:white;
    font-weight:600;
  }
  .btn-wed {
    margin-top:20px;
    /* color:#be7976; */
    font-family: Lora-Medium;
    width: 200px;
    border: 1px solid white;
    border-style: solid;
    border-radius: 5px 5px 5px 5px;
    padding: 16px 40px 16px 40px;
  }

  /* @-webkit-keyframes zoom {
    from {
    	-webkit-transform: scale(1);
    }
    to {
    	-webkit-transform: scale(1.1, 1);
    }
  }
  @keyframes zoom {
    from {
    	-webkit-transform: scale(1);
    }
    to {
    	-webkit-transform: scale(1.1, 1);
    }
  } */


.gambar {
    -webkit-animation: zoom 20s;
    animation: zoom 20s;
}
</style>
