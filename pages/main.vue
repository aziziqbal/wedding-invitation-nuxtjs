<template>
  <div style="width:;">
    <!-- <fullscreen ref="fullscreen" @change="fullscreenChange"> -->

    <vuetify-audio :file="file" :autoPlay="true" style="position:fixed;left:0px;top:50%;z-index:20;"></vuetify-audio>
    <home class="bg-body" />
    <couple class="bg-body" />
    <event class="bg-body" />
    <locations class="bg-body" style="margin-bottom:20px;" />
    <wish class="bg-body" />
    <bottom-navbar />
    <!-- </fullscreen> -->
    <vs-dialog class="" style="paddding:0px;margin:0px;" not-padding overflow-hidden auto-width v-model="active">
      <!-- <carousel class="bg-body"  paginationActiveColor="#42b983" paginationColor="#b2ebd1" paginationSize="10" :autoplay="false" :navigationEnabled="false" :perPage="1"> -->
        <!-- <slide class="dialog-card1"> -->
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
        <!-- </slide> -->
      <!-- </carousel> -->
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

export default {
  components: {
    BottomNavbar,
    Home,
    Couple,
    Event,
    Locations,
    Wish,
    VuetifyAudio: () => import('vuetify-audio')
  },
  data() {
    return {
      data: {},
      name: '',
      file: 'https://www.aziziqbal.com/audio.mp3',
      fullscreen: true,
      active: true,
    }
  },
  mounted() {
    this.name = this.$router.currentRoute.query['to']
    var self = this;

            setTimeout(function() {
                self.active = false;
            }, 15000);
  },
  methods: {
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
    background:url("../static/white_bg.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    width:100%;
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
