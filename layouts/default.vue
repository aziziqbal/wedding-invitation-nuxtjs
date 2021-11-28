<template>
  <v-app>
    <v-main class="example" style="max-width: 100%;
    overflow-x: hidden;">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Media from '@dongido/vue-viaudio'

export default {
  components: {
    Media
  },
  data () {
    return {
      // someSound
      fullScreenMode: false,
      fullscreen: true
    }
  },
   watch:{
    fullScreenMode() {
      if(this.fullScreenMode == true){
        this.openFullscreen();
      }
      else{
        this.closeFullscreen();
      }
    }
  },

  // beforeMount () {
  //   window.addEventListener('load', this.openFullscreen)
  // },
  // beforeDestroy () {
  //   window.addEventListener('load', this.openFullscreen)
  // },
  created () {
    this.$root.$refs.A = this;
    // var elem = document.getElementById("example");
    // if (elem.requestFullscreen) {
    //   elem.requestFullscreen();
    // }
    // this.launchIntoFullscreen(document.documentElement); // the whole page
    // this.launchIntoFullscreen(document.getElementById("example")); // any individual element
    // this.toggle()
  },
  mounted () {

      var elem = document.documentElement;
      console.log(elem)
    this.fullscreen = true
    // const elem = this.$refs.myBtn
    //   elem.click()
    // this.myClickEvent()
    window.onload = maxWindow;

    function maxWindow() {
        window.moveTo(0, 0);

        if (document.all) {
            top.window.resizeTo(screen.availWidth, screen.availHeight);
        }

        else if (document.layers || document.getElementById) {
            if (top.window.outerHeight < screen.availHeight || top.window.outerWidth < screen.availWidth) {
                top.window.outerHeight = screen.availHeight;
                top.window.outerWidth = screen.availWidth;
            }
        }
    }
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        console.log('Page completed with image and files!')
      }
    }
  },
  methods: {
    openFullscreen:function()  {
      console.log('asfdasds')
      var elem = document.documentElement;
      console.log(elem)
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    },
    closeFullscreen:function() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }

    },

    launchIntoFullscreen(element) {
      if(element.requestFullscreen) {
        element.requestFullscreen();
      } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    },
    myClickEvent($event) {
            const elem = this.$refs.myBtn
            elem.click()
        },
    async toggle () {


        this.$fullscreen.toggle(this.$el.querySelector('.example'), {
          wrap: false,
          callback: this.fullscreenChange
        })
    },
    fullscreenChange (fullscreen) {
      this.fullscreen = fullscreen
    }
      // toggle () {
      //   this.$refs['fullscreen'].toggle() // recommended

      //   console.log(this.$refs['fullscreen'].toggle())
      //   // this.fullscreen = !this.fullscreen // deprecated
      // },
      // fullscreenChange (fullscreen) {
      //   this.fullscreen = fullscreen
      // }
    },
}
</script>
