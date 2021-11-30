<template>
  <section id="home" class="hide-overflow" style="overflow: hidden">
    <v-layout>
        <v-img
        class="gambar"
          :src="require('../static/new/bg_4.jpg')"
          height="100vh" style="">
          <v-row data-aos="fade-up" align="center" justify="center" class="text-center fill-height pa-md-5 pa-3 mx-0">
            <v-col cols="12">
              <v-img height="200" :src="require('../static/new/user2.png')" contain />
              <div class="title-wed">
                Razzaq and Tifa Wedding
              </div>
              <div class="sub-wed">
                Kepada Bapak/Ibu/Saudara/i
              </div>
              <div v-if="name === undefined" class="pas-wed">
               Fulan / Fulanah
              </div>
              <div v-else class="pas-wed">
               {{ name }}
              </div>
              <v-btn dark @click="toHome()" class="btn-wed text-capitalize" outlined color="black">
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
    this.name = this.$router.currentRoute.query['to']
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
#tsparticles{
  position: absolute;
  background-size: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: hidden;
  z-index: 0;
}
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
      color:#be7976;
      line-height: 1em;
      margin-bottom:20px;
      margin-top:20px;
    }
  }

  @media only screen and (max-width: 1023px) {
    .title-wed {
      font-family: Sweet;
      font-size:55px;
      color:#be7976;
      margin-top:10px;
      line-height: 1em;
      margin-bottom:20px;
    }
  }
  .sub-wed {
    font-family: Lora-Regular;
    font-size:16px;
      color:#be7976;
  }
  .pas-wed {
    font-family: Lora-Regular;
    font-size:18px;
      color:#be7976;
    font-weight:600;
  }
  .btn-wed {
    margin-top:20px;
    /* color:#be7976; */
    font-family: Lora-Medium;
    width: 200px;
    border: 1px solid #be7976;
    border-style: solid;
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
    -webkit-animation: zoom 20s;
    animation: zoom 20s;
}
</style>
