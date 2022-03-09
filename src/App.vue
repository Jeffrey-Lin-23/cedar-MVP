<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>

  <header class=" z-30 bg-opacity-90 w-full">
    <Header />
  </header>
  <main class="min-h-[65vh]">
    <router-view></router-view>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style>

</style>

<script>


</script>

