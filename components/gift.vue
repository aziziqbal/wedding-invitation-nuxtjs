<template>
  <section id="rsvp">
    <v-layout class="bg-img">
      <v-row align="center" justify="center" class="text-center fill-height pa-md-5 pa-3 mx-0">
        <v-col cols="12" md="7">
          <div class="title-wed">
            Konfirmasi Kehadiran
          </div>
          <v-row align="center" justify="center">
            <v-col cols="12" md="6">
              <div class="judul" style="">
                Nama :
              </div>
              <div>
                <input
                  v-model="name"
                  style="color:white;border:1px solid white;width:100%;
    height: 38px;
    border-radius: 2px;padding-left:10px;"
                ></input>
              </div>
            </v-col>
          </v-row>
          <!-- <v-row align="center" justify="center">
            <v-col cols="12" md="6">
              <div class="judul" style="">
                Catatan :
              </div>
              <div>
                <v-textarea
                  v-model="catatan"
                  outlined
                  hide-details
                  dense
                ></v-textarea>
              </div>
            </v-col>
          </v-row> -->
          <v-row align="center" justify="center">
            <v-col cols="12" md="6">
              <div class="judul" style="">
                Konfirmasi :
              </div>
              <div>
                <v-radio-group
                  v-model="status"
                  column
                  dark
                >
                  <v-radio
                    label="Iya, saya akan datang"
                    value="akan datang"
                  ></v-radio>
                  <v-radio
                    label="Saya masih ragu"
                    value="masih ragu"
                  ></v-radio>
                  <v-radio
                    label="Maaf, saya tidak bisa datang"
                    value="tidak bisa datang"
                  ></v-radio>
                </v-radio-group>
              </div>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" md="6">
              <v-btn block @click="kirim()">
                Kirim
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-layout>
    <v-layout class="bg-img">
      <v-row align="center" justify="center" class="text-center fill-height pa-md-5 pa-3 mx-0">
        <v-col cols="12" md="7">
          <div class="title-wed">
            Kirim Hadiah
          </div>
          <v-row>
          <v-col cols="12" md="6">
            <div class="box-pembayaran" data-aos="fade-right" data-aos-delay="500">
              <div class="img-logo">
                <v-img :src="require('../static/bni.png')" contain  style="margin-left:auto;margin-right:auto;padding-top:40px;"/>
              </div>
              <div class="garis-logo" />
              <div class="detail-logo">
                0749004049  <br>
                a/n
                Deana Annisa Aziz
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="box-pembayaran" data-aos="fade-right" data-aos-delay="500">
              <div class="img-logo">
                <v-img :src="require('../static/bri.png')" contain  style="margin-left:auto;margin-right:auto;height:90px"/>
              </div>
              <div class="garis-logo" />
              <div class="detail-logo">
                3765 0101 2521 506 <br>
                a/n
                Fauzia Nur Amrulloh
              </div>
            </div>
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
      snackbar: true,
      data: {},
      name: '',
      catatan: '',
      status: '',
      time: {},
      resp: ''
    }
  },
  mounted () {
    this.resp = ''
    this.name = localStorage.getItem('name');
    if(this.name === 'undefined') {
      this.name = ''
    }
    console.log(this.name)
    var countDownDate = new Date("May 16, 2021 15:37:25").getTime();
  },
  methods: {

     kirim() {
      window.open("https://wa.me/6285741112534?text=Bismillah, Assalamu’alaikum Warahmatullahi Wabarakaatuh. InsyaAllah saya " + this.name + " " + this.status + " di Walimatul 'Urs Fauzi dan Deana", "_blank");
    }
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
  .judul {
    text-align:left;
    margin-bottom:10px;
    font-family: Lora-Medium;
    color:white;
  }
  .box-pembayaran {
    border: 1px solid #ddd;
    width:100%;
    height:100%;
    border-radius:4px;
    padding-bottom:20px;
    padding-top:20px;
    color:white;
  }
  .img-logo {
    margin-left: auto;
    margin-right: auto;
    width:200px;
    height: 100px;
    border-bottom: 1px solid #ddd;
  }
  .detail-logo {
    font-family: Lora-Regular;
    font-size:16px;
    margin-top:20px;
    color:white;
  }
  .title-wed2 {
    font-family: Lora-Regular;
    color:white;
    font-size:16px;
    margin-top:20px;
  }
  .sub-wed2 {
    margin-top:5px;
    color:white;
    font-family: Lora-Regular;
    font-size:16px;
    margin-bottom:10px;
  }
  .title-wed {
    font-family: Rancho-Regular;
    color:white;
    font-size:40px;
    margin-bottom:30px;
  }
  .sub-wed {
    color:white;
    margin-top:10px;
    font-family: Lora-Medium;
    font-size:15px;
  }
  .title2-wed {
    margin-top:20px;
    color:white;
    font-family: Sweet;
    font-size:60px;
  }
  .tanggal-wed {
    color:white;
    margin-top:10px;
    font-family: Lora-Medium;
    font-size:20px;
  }
  .bg1 {
    width:100px;
  }
  .bg-img {
    padding-top:50px;
    padding-bottom:50px;
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
  }
</style>
