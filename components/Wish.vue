<template>
  <section id="wish">
    <v-layout class="bg-img">
      <v-row align="center" justify="center" class="text-center fill-height pa-md-5 pa-3 mx-0">
        <v-col cols="12" md="7">
          <!-- <div class="title-wed">
            Kirim Hadiah
          </div>
          <v-row>
          <v-col cols="12" md="6">
            <div class="box-pembayaran" data-aos="fade-right" data-aos-delay="500">
              <div class="img-logo">
                <v-img :src="require('../static/bni.png')"  style="margin-left:auto;margin-right:auto;"/>
              </div>
              <div class="garis-logo" />
              <div class="detail-logo">
                0237750476 <br>
                a/n
                Achmad Abdurrazzaq
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="box-pembayaran" data-aos="fade-left" data-aos-delay="500">
              <div class="img-logo">
                <v-img  :src="require('../static/bpd.png')"  style="margin-left:auto;margin-right:auto;"/>
              </div>
              <div class="garis-logo" />
              <div class="detail-logo">
                3027303292 <br>
                a/n
                 Maratu Latifa
              </div>
            </div>
          </v-col>
          </v-row> -->
          <div class="title-wed" style="margin-top:100px;">
            Doa untuk kedua mempelai
          </div>
          <div class="title-wed2" style="margin-bottom:20px;">
            بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِى خَيْرٍ
          </div>
          <div class="sub-wed2" style="margin-bottom:50px;">
            “Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah, serta semoga Allah mempersatukan kalian berdua dalam kebaikan”
          </div>
          <div class="title-wed">
            Ucapan
          </div>
          <div style="height: 80v;margin-bottom:100px;overflow: scroll;" class="powr-comments" id="f54360a9_1644841734"></div><script src="https://www.powr.io/powr.js?platform=html"></script>
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
  .box-pembayaran {
    border: 1px solid #ddd;
    width:100%;
    height:100%;
    border-radius:4px;
    padding-bottom:20px;
    padding-top:20px;
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
  }
  .title-wed2 {
    font-family: Lora-Regular;
    font-size:16px;
    margin-top:20px;
  }
  .sub-wed2 {
    margin-top:5px;
    font-family: Lora-Regular;
    font-size:16px;
    margin-bottom:10px;
  }
  .title-wed {
    font-family: Rancho-Regular;
    font-size:40px;
    margin-bottom:30px;
  }
  .sub-wed {
    margin-top:10px;
    font-family: Lora-Medium;
    font-size:15px;
  }
  .title2-wed {
    margin-top:20px;
    font-family: Sweet;
    font-size:60px;
  }
  .tanggal-wed {
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
