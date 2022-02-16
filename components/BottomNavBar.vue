<template>

    <nav class="navbar navbar-expand fixed-bottom" style="background-color:#a3c19d;;height:70px;">
      <ul class="navbar-nav nav-justified mx-auto" style="padding-left:0px;">
        <li class="nav-item">
          <NuxtLink class="nav-link" :to="{ path: '/main',hash:'#home'}">
            <v-icon style="font-size:25px;" color="white">mdi-home</v-icon>
            <div class="name-navbar" style="color:white;">Home</div>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" :to="{ path: '/main',hash:'#couple'}">
            <v-icon color="white">mdi-heart</v-icon>
            <div class="name-navbar" style="color:white;">Couple</div>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" :to="{ path: '/main',hash:'#event'}">
            <v-icon color="white">mdi-calendar</v-icon>
            <div class="name-navbar" style="color:white;">Event</div>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" :to="{ path: '/main',hash:'#adab'}">
            <v-icon style="padding-left:1px;" color="white">mdi-code-not-equal</v-icon>
            <div class="name-navbar" style="color:white;">Adab</div>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" :to="{ path: '/main',hash:'#gift'}">
            <v-icon style="padding-left:1px;" color="white">mdi-gift</v-icon>
            <div class="name-navbar" style="color:white;">Gift</div>
          </NuxtLink>
        </li>
        <li class="nav-item" >
          <NuxtLink class="nav-link" :to="{ path: '/main',hash:'#wish'}" style="background-color:;padding-top:10px;">
            <v-icon color="white">mdi-comment-text</v-icon>
            <div class="name-navbar" style="color:white;">Wish</div>
          </NuxtLink>
        </li>
      </ul>
    </nav>
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