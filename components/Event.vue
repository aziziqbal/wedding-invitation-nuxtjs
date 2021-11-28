<template>
  <section id="event">
    <v-layout class="bg-img">
      <v-img data-aos="fade-top" data-aos-delay="400" position="right bottom" :src="require('../static/flower-2.png')" contain class="bawah" />
      <v-img data-aos="fade-down" data-aos-delay="400" position="left" :src="require('../static/flower-1.png')" contain class="kiri" />
      <v-row  align="center" justify="center" class="text-center fill-height pa-md-5 pa-3 mx-0">
        <v-col cols="12" md="7">
          <v-img data-aos="zoom-in-up" data-aos-delay="400" position="center" contain :src="require('../static/bottom-decor.png')" class="atas" />
          <vue-countdown-timer
            data-aos="zoom-in-up" data-aos-delay="400"
            @start_callback="startCallBack('event started')"
            @end_callback="endCallBack('event ended')"
            :start-time="'2018-10-10 00:00:00'"
            :end-time="1622851932"
            :interval="1000"
            :start-label="'Until start:'"
            :end-label="''"
            label-position="begin"
            :end-text="'Alhamdulillah, acara telah dilaksanakan.'"
            :day-txt="'Hari'"
            :hour-txt="'Jam'"
            :minutes-txt="'Menit'"
            :seconds-txt="'Detik'">
            <template slot="start-label" slot-scope="scope">
              <span style="color: red" v-if="scope.props.startLabel !== '' && scope.props.tips && scope.props.labelPosition === 'begin'">{{scope.props.startLabel}}:</span>
              <span style="color: blue" v-if="scope.props.endLabel !== '' && !scope.props.tips && scope.props.labelPosition === 'begin'">{{scope.props.endLabel}}:</span>
            </template>

            <template slot="countdown" slot-scope="scope">
              <span class="hari">{{scope.props.days}} </span><span class="sub-hari">{{scope.props.dayTxt}}</span>
              <span class="hari">{{scope.props.hours}} </span><span class="sub-hari">{{scope.props.hourTxt}}</span>
              <span class="hari">{{scope.props.minutes}} </span><span class="sub-hari">{{scope.props.minutesTxt}}</span>
              <span class="hari">{{scope.props.seconds}} </span><span class="sub-hari">{{scope.props.secondsTxt}}</span>
            </template>

            <template slot="end-label" slot-scope="scope">
              <span style="color: red" v-if="scope.props.startLabel !== '' && scope.props.tips && scope.props.labelPosition === 'end'">{{scope.props.startLabel}}:</span>
              <span style="color: blue" v-if="scope.props.endLabel !== '' && !scope.props.tips && scope.props.labelPosition === 'end'">{{scope.props.endLabel}}:</span>
            </template>

            <template slot="end-text" slot-scope="scope">
              <span style="color: green">{{ scope.props.endText}}</span>
            </template>
          </vue-countdown-timer>
          <v-row align="end" justify="center" class="text-center" style="background-color:;">
            <v-col data-aos="zoom-in-right" data-aos-delay="400" cols="12" md="6" align="center" class="judul">
              Akad Nikah
              <br>
              <span class="jam">08:00 – 09:00 WIB</span>
            </v-col>
            <v-col data-aos="zoom-in-left" data-aos-delay="400" cols="12" md="6" align="center" class="judul">
              Walimatul 'Urs
              <br>
              <span class="jam">09:00 – 12:00 WIB dan </span>
              <span class="jam">13:00 – 15:00 WIB</span>

            </v-col>
            <v-col data-aos="zoom-in-up" data-aos-delay="400" cols="12" align="center" class="alamat">
              <span style="font-weight:bold">Desa Karanglewas</span>
              <br> RT 10 RW 05, Kutasari, Purbalingga
            </v-col>
            <v-col data-aos="flip-up" data-aos-delay="400" cols="5">
              <vs-button @click="goMaps()" size="medium"
              upload shadow color="dark" style="margin-left:auto;margin-right:auto;margin-top:10px;">
                <v-icon color="black" style="margin-right:10px;font-size:16px;">mdi-map</v-icon> Lihat Peta
              </vs-button>
            </v-col>
            <!-- <v-btn
              class="ma-2 tombol"
              outlined
              normal
              style="text-transform: capitalize"
            >
              <v-icon left>mdi-map</v-icon>
              Lihat Peta
            </v-btn> -->
          </v-row>
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
  },
  methods: {
    startCallBack: function(x) {
      console.log(x);
    },
    endCallBack: function(x) {
      console.log(x);
    },
    goMaps() {
      window.open('https://www.google.com/maps/place/-7.367326,109.344691/data=!4m6!3m5!1s0!7e2!8m2!3d-7.3673258!4d109.34469089999999?utm_source=mstt_1&entry=gps')
    }
  },
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
  .hari {
    font-family: Lora-Medium;
    font-size:40px;
  }
  .sub-hari {
    font-family: Lora-Medium;
    font-size:20px;
  }
  .tanggal {
    font-family: Lora-Medium;
    font-size:30px;
  }
  .tahun {
    font-family: Lora-Medium;
    font-size:20px;
  }
  .judul {
    font-family: Rancho-Regular;
    font-size:25px;
    line-height:30px;
    margin-top:10px;
  }
  .jam {
    font-family: Lora-Regular;
    font-size:15px;
    margin-top:10px;
  }
  .alamat {
    font-family: Lora-Regular;
    font-size:17px;
    line-height:30px;
    /* margin-top:10px; */
  }
  .tombol {
    font-family: Lora-Medium;
    width:150px;
    margin-top:40px;
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
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:30px;
    width:250px;
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
