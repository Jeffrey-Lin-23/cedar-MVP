<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
<div class="bg-white min-h-screen text-gray-800">
  <!-- Top Nav Bar-->
  <Head :selected="selected"></Head>
  <!-- Body Page -->
  <div class="flex-shrink max-w-full w-full min-w-0">
    <div class="flex-shrink max-w-full w-full min-w-0">
      <div class="flex flex-col mb-12">
        <router-view></router-view>
      </div>
    </div>
  </div>

</div>
</template>

<style>

</style>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import Head from "./components/Header.vue";


export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
    Head,
  },
  data(){
    return{
      selected: '',
    }
  },
  mounted() {

    const url = window.location.href;
    const location = url.split('/');
    if(location[3] === 'liquidity-pool'){
      this.selected = 'liquidity-pool';
    }else if(location[3] === 'pay-later'){
      this.selected = 'pay-later';
    }else{
      this.selected = 'home';
    }

    document.title = 'Cedar';


  },
  methods:{
    disconnect(){
      this.$store.dispatch("disconnectWallet");
      this.user = this.$store.getters.getCurrentUser;
    },
    connect(){
      this.$store.dispatch("connectWallet");
      this.user = this.$store.getters.getCurrentUser;
      console.log(this.$store.getters.getCurrentUser);
    }
  }
}
</script>

