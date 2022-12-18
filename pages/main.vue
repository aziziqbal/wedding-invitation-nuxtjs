<template>
  <div style="overflow-x:none;">
          <div id="particles-js"></div>
    <vuetify-audio :file="file" :autoPlay="true" style="position:fixed;left:0px;top:50%;z-index:20;"></vuetify-audio>
    <home class="bg-body"  />
    <couple class="bg-body" />
    <event class="bg-body" />
    <locations class="bg-body" />
    <gift class="bg-body" />
    <wish class="bg-body" />
    <bottom-navbar />
    <!-- </fullscreen> -->
    <vs-dialog class="" style="paddding:0px;margin:0px;" not-padding overflow-hidden auto-width v-model="active">
          <v-row align="center" justify="center" class=" dialog-card1 text-center">
            <v-col cols="12" class="title-card">
               <span style="font-size:15px;font-weight:normal;line-height:12px;">Acara ini dilaksanakan dengan menerapkan </span><br>
               Protokol Kesehatan
            </v-col>
            <v-col cols="4">
              <v-img :src="require('../static/protokol/masker.png')" contain class="icon-wed" />
              <div class="sub-wed">Memakai Masker</div>
            </v-col>
            <v-col cols="4">
              <v-img :src="require('../static/protokol/cuci.png')" contain class="icon-wed" />
               <div class="sub-wed">Mencuci Tangan</div>
            </v-col>
            <v-col cols="4">
              <v-img :src="require('../static/protokol/suhu.png')" contain class="icon-wed" />
               <div class="sub-wed">Mengecek Suhu</div>
            </v-col>
            <v-col cols="4">
              <v-img :src="require('../static/protokol/jarak.png')" contain class="icon-wed" style="" />
               <div class="sub-wed">Menjaga Jarak Aman</div>
            </v-col>
            <v-col cols="4">
              <v-img :src="require('../static/protokol/jabat-tangan.png')" contain class="icon-wed" />
               <div class="sub-wed">Tidak Berjabat Tangan</div>
            </v-col>
            <v-col cols="4">
              <v-img :src="require('../static/protokol/handsanitizer.png')" contain class="icon-wed" />
              <div class="sub-wed">Disarankan Membawa Handsanitizer</div>
            </v-col>
            <v-col cols="12" class="detail-card">
              Tanpa mengurangi rasa hormat demi mengurangi penyebaran pandemi, mohon untuk tetap mengikuti Protokol Kesehatan dan datang tepat waktu sesuai dengan jam yang sudah tertera di undangan
            </v-col>
            <!-- <vs-button
              block
            >
              <i class='bx bxs-paint-roll' ></i> Pindah Slide
            </vs-button> -->
          </v-row>
    </vs-dialog>
  </div>
</template>

<script>
import BottomNavbar from '~/components/BottomNavBar.vue'
import Home from '~/components/Home.vue'
import Couple from '~/components/Couple.vue'
import Event from '~/components/Event.vue'
import Locations from '~/components/Locations.vue'
import Wish from '~/components/Wish.vue'
import gift from '~/components/gift.vue'

export default {
  components: {
    BottomNavbar,
    Home,
    Couple,
    Event,
    Locations,
    Wish,
    gift,
    VuetifyAudio: () => import('vuetify-audio')
  },
  data() {
    return {
      data: {},
      name: '',
      file: "https://walimahansyari.com/lalan.mp3",
      fullscreen: true,
      active: true,
    }
  },
  mounted() {
    // this.initParticles()
    this.name = this.$router.currentRoute.query['to']
    var self = this;

            setTimeout(function() {
                self.active = false;
            }, 15000);
  },
  methods: {
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
    },
    toHome () {
      this.$router.push({ name: 'home' })
    },

      fullscreenChange (fullscreen) {
        this.fullscreen = fullscreen
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
  /* ..vs-dialog__content.notFooter {
    padding:0px;
  } */
  .dialog-card1 {
    height:100%;
    max-width:360px;
    margin-left:20px;
    margin-right:20px;
    padding:10px;
  }
  .dialog-card2 {
    height:100%;
    padding-left:10px;
    width:250px;
  }
  .title-card {
    font-size:20px;
    margin-bottom:20px;
    text-align: center;
    margin-left:auto;
    margin-right:auto;
    font-weight:bold;
  }
  .detail-card {
    font-size:14px;
    /* margin-bottom:20px; */
    text-align: center;
    margin-left:auto;
    margin-right:auto;
    font-weight:normal;
  }
  .sub-wed {
    font-size:14px;
    line-height:20px;
    padding-top:10px;
  }
  .icon-wed {
    /* height:100px; */
    width:100%
  }
  .icon-wed2 {
    height:60px;
  }
  .bg-body {
    background:url("../static/tomy_bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    width:100%;
    overflow: hidden;
  }
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}

  @media only screen and (max-width: 424px) {

    .dialog-card1 {
      height:100%;
      width:100%;
      margin-left:0px;
      margin-right:0px;
      padding:10px;
    }
    .icon-wed {
      width:60vh;
    }
  }

</style>
