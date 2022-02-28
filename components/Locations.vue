<template>
  <section id="adab" style="margin-bottom:0px;">
    <v-layout class="bg-img" style="margin-bottom:0px;">
      <v-row align="center" justify="center" class="text-center fill-height" style="width:100%">
        <v-col cols="12" md="7" style="">
          <div class="title-wed" data-aos="zoom-in-up" style="margin-bottom:30px;">
            Adab Menghadiri Pernikahan
          </div>
          <v-row class="text-center" cols="12" align="" justify="" style="padding:10px;" data-aos="zoom-in-up">
            <v-col cols="6" md="4" align="center" justify="center">
              <v-img :src="require('../static/protokol/mosque.png')" contain class="icon-wed" />
              <div class="sub-wed">Memperhatikan waktu shalat dan tidak melalaikan shalat</div>
            </v-col>
            <v-col cols="6" md="4">
              <v-img :src="require('../static/protokol/dua-hands.png')" contain class="icon-wed" />
              <div class="sub-wed">Mendoakan kedua mempelai</div>
            </v-col>
            <v-col cols="6" md="4">
              <v-img :src="require('../static/protokol/no-pictures.png')" contain class="icon-wed" />
              <div class="sub-wed">Tidak mengambil gambar tanpa izin kedua mempelai</div>
            </v-col>
            <v-col cols="6" md="4">
              <v-img :src="require('../static/protokol/cutlery.png')" contain class="icon-wed" />
              <div class="sub-wed">Memperhatikan adab makan dan minum</div>
            </v-col>
            <v-col cols="6" md="4">
              <v-img :src="require('../static/protokol/no-handshake.png')" contain class="icon-wed" />
              <div class="sub-wed">Tidak berjabat tangan dengan yang bukan mahram</div>
            </v-col>
            <v-col cols="6" md="4">
              <v-img :src="require('../static/protokol/cloth.png')" contain class="icon-wed" />
              <div class="sub-wed">Berpakaian sopan dan untuk wanita muslim memakai hijab dan pakaian longgar</div>
            </v-col>
          </v-row>
        <!-- <div class="mapouter"><div class="gmap_canvas">
          <iframe
            id="gmap_canvas"
            style="width:100%;height:calc(90vh - 150px);"
            src="https://maps.google.com/maps?q=-7.367326,109.344691&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe>
          </div>
        </div> -->
        </v-col>
      </v-row>
      <!-- <v-row align="center" justify="center" class="text-center">
            <v-col cols="12" class="title-card">
               Adab Menghadiri Pernikahan
            </v-col>
            <v-col cols="3">
              <v-img :src="require('../static/protokol/mosque.png')" contain class="icon-wed2" />
            </v-col>
            <v-col cols="9" align="start">
              <span>Memperhatikan waktu shalat dan tidak melalaikan shalat</span>
            </v-col>
            <v-col cols="3">
              <v-img :src="require('../static/protokol/dua-hands.png')" contain class="icon-wed2" />
            </v-col>
            <v-col cols="9" align="start">
              <span>Mendoakan kedua mempelai</span>
            </v-col>
            <v-col cols="3">
              <v-img :src="require('../static/protokol/no-pictures.png')" contain class="icon-wed2" />
            </v-col>
            <v-col cols="9" align="start">
              <span>Tidak mengambil gambar tanpa izin kedua mempelai</span>
            </v-col>
            <v-col cols="3">
              <v-img :src="require('../static/protokol/cutlery.png')" contain class="icon-wed2" />
            </v-col>
            <v-col cols="9" align="start">
              <span>Memperhatikan adab makan dan minum</span>
            </v-col>
            <v-col cols="3">
              <v-img :src="require('../static/protokol/no-handshake.png')" contain class="icon-wed2" />
            </v-col>
            <v-col cols="9" align="start">
              <span>Tidak berjabat tangan dengan yang bukan mahram</span>
            </v-col>
            <v-col cols="3">
              <v-img :src="require('../static/protokol/cloth.png')" contain class="icon-wed2" />
            </v-col>
            <v-col cols="9" align="start">
              <span>Berpakaian sopan dan untuk wanita muslim memakai hijab dan pakaian longgar</span>
            </v-col>
          </v-row> -->
    </v-layout>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      name: '',
      time: {}
    }
  },
  mounted () {
    var countDownDate = new Date("May 16, 2021 15:37:25").getTime();

    // // Update the count down every 1 second
    // var x = setInterval(function() {

    //   // Get today's date and time
    //   var now = new Date().getTime()

    //   // Find the distance between now and the count down date
    //   var distance = countDownDate - now

    //   // Time calculations for days, hours, minutes and seconds
    //   var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    //   var seconds = Math.floor((distance % (1000 * 60)) / 1000)
    //   this.time = seconds
    // }, 1000)
  }
}
</script>

<style scoped>
  @font-face {
    font-family: Rancho-Regular;
    src: url(../static/Rancho-Regular.ttf) format("truetype");
  }
  @font-face {
    font-family: Lora-Regular;
    src: url(../static/lora/Lora-Regular.ttf) format("truetype");
  }
  @font-face {
    font-family: Lora-Medium;
    src: url(../static/lora/Lora-Medium.ttf) format("truetype");
  }
  .icon-wed {
    width:40%;
    margin-left: auto;
    margin-right: auto;
  }
  .title-wed {
    font-family: Rancho-Regular;
    font-size:40px;
    margin-bottom:20px;
  }
  .sub-wed {
    padding-top:20px;
    font-family: Lora-Medium;
    font-size:14px;
  }
  .bg-img {
    position: relative;
    width:100%;
    height:100%;
  }
  .atas {
    position: absolute!important;
    right: 0px;
    top: 0px;
    z-index: 0!important;
  }
  .bawah {
    position: absolute!important;
    right: 0px;
    bottom: 0px;
    height:30%;
    z-index: 0!important;
  }
  .kiri {
    position: absolute!important;
    left: 0px;
    bottom: 0px;
    height:30%;
    z-index: 0!important;
  }
  @media only screen and (min-width: 1264px) {
    .atas {
      height:30%;
    }
  }
  @media only screen and (max-width: 1263px) {
    .atas {
      height:20%;
    }
    .bawah {
      position: absolute!important;
      right: 0px;
      bottom: 5vh;
      height:15%;
      z-index: 0!important;
    }
    .kiri {
      position: absolute!important;
      left: 0px;
      bottom: -3vh;
      height:12%;
      z-index: 0!important;
    }
  }
</style>
