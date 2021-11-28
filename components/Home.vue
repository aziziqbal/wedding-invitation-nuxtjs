<template>
  <section id="home">
    <v-layout class="bg-img">
      <v-img data-aos="fade-down" data-aos-delay="500" position="right top" :src="require('../static/decor.png')" contain class="atas" />
      <v-img data-aos="fade-top" data-aos-delay="500" position="right bottom" :src="require('../static/flower-2.png')" contain class="bawah" />
      <v-img data-aos="fade-down" data-aos-delay="500" position="left" :src="require('../static/flower-1.png')" contain class="kiri" />
      <v-row data-aos="zoom-in-up" data-aos-delay="500" align="center" justify="center" class="text-center fill-height pa-md-5 pa-3 mx-0" >
        <v-col cols="12" md="7">
          <div class="title-wed">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </div>
          <div class="sub-wed">
            Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.
          </div>
          <div class="sub-wed">
            [Qur'an Surat Ar-Rum ayat 21]
          </div>
          <div class="title2-wed">
            Iqbal dan Syifa Wedding
          </div>
          <v-row align="center" justify="center" class="text-center" style="">
            <v-col cols="auto">
              <v-row align="center" justify="center" class="card-border text-center">
                <div class="border-wed" />
                <div class="day-wed">
                  SABTU
                </div>
                <div class="border-wed" />
              </v-row>
            </v-col>
            <v-col cols="2" style="padding-top:20px;">
              <div class="date-wed">
                5
              </div>
              <div class="year-wed">
                2021
              </div>
            </v-col>
            <v-col cols="auto">
              <v-row align="center" justify="center" class="card-border text-center">
                <div class="border-wed" />
                <div class="day-wed">
                  JUNI
                </div>
                <div class="border-wed" />
              </v-row>
            </v-col>
          </v-row>
          <div class="sub-wed">
            24 Syawwal 1442 H
          </div>
          <vs-button @click="googleCalendar()" size="small"
           upload shadow color="dark" style="margin-left:auto;margin-right:auto;margin-top:15px;">
            <v-icon color="black" style="margin-right:10px;font-size:16px;">mdi-calendar</v-icon> Google Kalendar
          </vs-button>
        </v-col>
      </v-row>
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
    var countDownDate = new Date("May 16, 2021 15:37:25").getTime()
  },
  methods: {
    googleCalendar() {
      window.open('https://calendar.google.com/calendar/u/0/r/eventedit?text=Acara+Pernikahan+Syifa+dan+Iqbal&details=Resepsi+pernikahan+Syifa+dan+Iqbal&dates=20210605T070000/20210605T120000&location')
    },
  }
}
</script>

<style scoped>
  @font-face {
    font-family: Sweet;
    src: url(../static/sweet.ttf) format("truetype");
  }
  @font-face {
    font-family: Lora-Regular;
    src: url(../static/lora/Lora-Regular.ttf) format("truetype");
  }
  @font-face {
    font-family: Lora-Medium;
    src: url(../static/lora/Lora-Medium.ttf) format("truetype");
  }
  .title-wed {
    font-family: Lora-Medium;
    font-size:20px;
  }
  .sub-wed {
    margin-top:15px;
    font-family: Lora-Medium;
    font-size:15px;
  }
  .title2-wed {
    margin-top:30px;
    font-family: Sweet;
    line-height: 1em;
    font-size:60px;
  }
  .card-border {
    width:100px;
  }
  .border-wed {
    border:solid 1px black;
    width:100%;
  }
  .day-wed {
    margin-top:9px;
    margin-bottom:9px;
    font-family: Lora-Medium;
    font-size:20px;
  }
  .date-wed {
    /* font-family: Lora-Medium; */
    font-family: Sweet;
    font-size:50px;
    /* padding-top:30px; */
  }
  .year-wed {
    font-family: Lora-Medium;
    font-size:20px;
  }
  .bg1 {
    width:100px;
  }
  .bg-img {
    position: relative;
    width:100%;
    height:100vh;
  }
  .atas {
    position: absolute!important;
    right: 0px;
    top: 0px;
    z-index: 0!important;
  }
  .atas2 {
    position: absolute!important;
    left: 0px;
    top: 0px;
    z-index: 0!important;
  }
  .bawah {
    position: absolute!important;
    right: 0px;
    bottom: 5vh;
    height:30%;
    z-index: 0!important;
  }
  .kiri {
    position: absolute!important;
    left: 0px;
    bottom: 40vh;
    height:30%;
    z-index: 0!important;
  }
  @media only screen and (min-width: 1264px) {
    .atas {
      height:20vh;
    }
    .atas2 {
      height:20vh;
    }
  }
  @media only screen and (max-width: 1263px) {
    .atas {
      height:11vh;
    }
    .sub-wed {
      margin-top:15px;
      font-family: Lora-Medium;
      font-size:12px;
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
