<template>

    <nav class="navbar navbar-expand fixed-bottom" style="background-color:#be7976;;height:70px;">
      <ul class="navbar-nav nav-justified mx-auto" style="padding-left:0px;">
        <li class="nav-item">
          <NuxtLink class="nav-link" :to="{ path: '/main',hash:'#home'}">
            <v-icon style="font-size:25px;" color="white">mdi-home</v-icon>
            <div class="name-navbar">Home</div>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" :to="{ path: '/main',hash:'#couple'}">
            <v-icon color="white">mdi-heart</v-icon>
            <div class="name-navbar">Couple</div>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" :to="{ path: '/main',hash:'#event'}">
            <v-icon color="white">mdi-calendar</v-icon>
            <div class="name-navbar">Event</div>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" :to="{ path: '/main',hash:'#adab'}">
            <v-icon style="padding-left:1px;" color="white">mdi-code-not-equal</v-icon>
            <div class="name-navbar">Adab</div>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" :to="{ path: '/main',hash:'#wish'}">
            <v-icon color="white">mdi-comment-text</v-icon>
            <div class="name-navbar">Wish</div>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  <!-- <v-bottom-navigation fixed bottom v-model="value"
    background-color="#618bb2">
    <v-btn small value="Home" :to="{ path: '/main',hash:'#home'}">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn value="Couple" :to="{ path: '/main',hash:'#couple'}">
      <span>Couple</span>
      <v-icon >mdi-heart</v-icon>
    </v-btn>

    <v-btn value="Event" :to="{ path: '/main',hash:'#event'}">
      <span>Event</span>
      <v-icon>mdi-calendar</v-icon>
    </v-btn>

    <v-btn value="Locations" :to="{ path: '/main',hash:'#locations'}">
      <span>Locations</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>

    <v-btn value="Wish" :to="{ path: '/main',hash:'#wish'}">
      <span>Wish</span>
      <v-icon>mdi-comment-text</v-icon>
    </v-btn>
  </v-bottom-navigation> -->
</template>
<script>
  export default {
    data: () => ({ value: 1 }),

    computed: {
      color () {
        switch (this.value) {
          default: return 'blue-grey'
        }
      },
    },
  }
</script>

<style scoped>
  @font-face {
    font-family: Lora-Regular;
    src: url(../static/lora/Lora-Regular.ttf) format("truetype");
  }
.name-navbar {
    /* font-family: Lora-Regular; */
    font-size:14px;
    /* padding-top:2px; */
    /* margin-right:5px; */
}
.nav-link:hover{
  font-weight:bold;
  color:white !important;

}
.nav-link:active{
  font-weight:bold;
  color:white !important;
}
.nav-link:focus{
  font-weight:bold;
  color:white !important;
}
.nav-item {
  width:70px;
}
</style>