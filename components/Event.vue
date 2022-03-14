<template>
  <section id="event">
    <v-layout class="bg-img">
      <v-img data-aos="fade-top" data-aos-delay="400" position="right bottom" :src="require('../static/flower-2.png')" contain class="bawah" />
      <v-img data-aos="fade-down" data-aos-delay="400" position="left" :src="require('../static/flower-1.png')" contain class="kiri" />
      <v-row  align="center" justify="center" class="text-center fill-height pa-md-5 pa-3 mx-0">
        <v-col cols="12" md="7">
          <v-img data-aos="zoom-in-up" data-aos-delay="400" position="center" contain :src="require('../static/sketch1645876112997.png')" class="atas" />
          <vue-countdown-timer
            data-aos="zoom-in-up" data-aos-delay="400"
            @start_callback="startCallBack('event started')"
            @end_callback="endCallBack('event ended')"
            :start-time="'2018-10-10 00:00:00'"
            :end-time="1648342800000"
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
            <v-col data-aos="zoom-in-up" data-aos-delay="400" cols="12" md="12" align="center" class="judul">
              Akad
              <br>
              <span class="jam"> 09.00 WIB - selesai <br> <span style="font-weight:;">Masjid Al-Busroh Polres Lamongan</span></span>
            </v-col>
            <v-col data-aos="zoom-in-left" data-aos-delay="400" cols="12" md="12" align="center" class="judul">
              Walimatul 'Urs
              <br>
              <span  class="jam"> 10.00 WIB - 13.00 WIB <br> <span style="font-weight:500;">Jalan Veteran No 112 A Lamongan <br>(depan kantor catatan sipil Lamongan)</span></span>
            </v-col>
            <!-- <v-col data-aos="zoom-in-up" data-aos-delay="400" cols="12" align="center" class="alamat">
              <span style="font-weight:bold">Rumah Mempelai Wanita</span>
              <br>Alamat Jalan Veteran No 112 A Lamongan (depan kantor catatan sipil Lamongan)
            </v-col> -->
            <v-col data-aos="zoom-in-up" data-aos-delay="400" cols="12" style="margin-top:100px;">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d494.8792635646094!2d112.4221153!3d-7.1220452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77f0acb18ba6bf%3A0xd43b168b825ddacc!2sJl.%20Veteran%20No.51%2C%20Jetis%2C%20Kec.%20Lamongan%2C%20Kabupaten%20Lamongan%2C%20Jawa%20Timur%2062211!5e0!3m2!1sid!2sid!4v1647254079894!5m2!1sid!2sid" height="450" style="border:0;width:100%" allowfullscreen="" loading="lazy"></iframe>
            </v-col>
            <v-col data-aos="flip-up" data-aos-delay="400" cols="5">
              <vs-button @click="goMaps()" size="medium"
               shadow color="dark" style="margin-left:auto;margin-right:auto;margin-top:10px;border:1px solid black">
                <v-icon color="black" style="margin-right:10px;font-size:16px;">mdi-map</v-icon> Lihat Peta
              </vs-button>
            </v-col>
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
    var countDownDate = new Date("November 12, 2021 09:00:00").getTime();
  },
  methods: {
    startCallBack: function(x) {
      console.log(x);
    },
    endCallBack: function(x) {
      console.log(x);
    },
    goMaps() {
      window.open('https://goo.gl/maps/f12b2MgLDcM3SopN6')
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
    height:100%;
    padding-bottom:100px;
    padding-top:100px;
  }
  .atas {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:20px;
    width:300px;
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
