<template>
  <section id="home" class="hide-overflow" style="overflow: hidden">
    <v-layout>
        <v-img
        class="gambar"
          :src="require('../static/flower.jpg')"
          gradient="to bottom, rgba(21, 26, 30, 0.8), rgba(21, 26, 30, 0.59)"
          height="100vh" style="">
          <v-row data-aos="fade-up" align="center" justify="center" class="text-center fill-height pa-md-5 pa-3 mx-0">
            <v-col cols="12">
              <v-img height="230" :src="require('../static/foto_bg2.png')" contain />
              <div class="title-wed">
                Iqbal dan Syifa Wedding
              </div>
              <div class="sub-wed">
                Kepada Bapak/Ibu/Saudara/i
              </div>
              <div v-if="name === null" class="pas-wed">
               <!-- {{ name }} -->
               Fulan / Fulanah
              </div>
              <div v-else class="pas-wed">
               {{ name }}
              </div>
              <div class="sub-wed">
                Mohon maaf bila ada kesalahan pada penulisan nama/gelar
              </div>
              <v-btn @click="toHome()" class="btn-wed text-capitalize primary--text" outlined color="transparent"  style="color:white;">
                Buka Undangan
              </v-btn>
            </v-col>
          </v-row>
        </v-img>
    </v-layout>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      name: ''
    }
  },
  mounted() {
    // this.data = this.$store.state.data
    // console.log(this.data)
    this.name = this.$router.currentRoute.query['to']
    // this.toHome()
  },
  methods: {
    toHome () {
      this.$router.push({ name: 'main' })
      this.$root.$refs.A.openFullscreen()
    }
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
  @media only screen and (min-width: 1024px) {
    .title-wed {
      font-family: Sweet;
      font-size:65px;
      color:white;
      line-height: 1em;
      margin-bottom:20px;
    }
  }

  @media only screen and (max-width: 1023px) {
    .title-wed {
      font-family: Sweet;
      font-size:55px;
      color:white;
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
    color:white;
    font-family: Lora-Medium;
    width: 200px;
    border: 1px solid white;
    border-style: solid;
    /* border-width: 2px 2px 2px 2px; */
    border-radius: 5px 5px 5px 5px;
    padding: 16px 40px 16px 40px;
  }

  @-webkit-keyframes zoom {
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
  }


.gambar {
    -webkit-animation: zoom 50s;
    animation: zoom 50s;
}
</style>
