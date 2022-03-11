<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>

<!--  <header class=" z-30 bg-opacity-90 w-full">-->
<!--    <Header />-->
<!--  </header>-->
<!--  <main class="min-h-[65vh]">-->
<!--    <router-view></router-view>-->
<!--  </main>-->
<!--  <footer>-->
<!--    <Footer />-->
<!--  </footer>-->
<div class="bg-white min-h-screen text-gray-800">
  <!-- Top Nav Bar-->
  <div
      class="flex sticky top-0 z-40 justify-between items-center py-5 px-6 w-screen h-20 font-sans leading-6 text-center bg-white border-t-0 border-b border-gray-200 border-solid box-border border-x-0 text-neutral-900"
  >
    <div
        class="flex items-center w-full leading-6 border-0 border-gray-100 border-solid box-border"
    >
      <div
          class="flex flex-1 justify-start items-center text-center border-0 border-gray-100 border-solid box-border"
      >
        <a
            href="/"
            class="flex items-center mr-8 border-0 border-gray-100 border-solid cursor-pointer box-border"
            aria-current="page"
        ><img
            class="block w-40 max-w-full h-auto align-middle border-0 border-gray-100 border-solid box-border"
            src="./assets/logo.e0fbc3a6.png"
        /></a>
        <div
            class="hidden items-center w-full border-0 border-gray-100 border-solid md:flex box-border"
        >
          <div
              class="flex relative flex-shrink items-center w-full max-w-xl border-0 border-gray-100 border-solid box-border"
          >
            <input
                class="py-2 px-4 m-0 w-full max-w-xl h-12 text-sm leading-5 rounded-xl border-2 border-gray-200 border-solid cursor-text md:h-10 box-border bg-inherit outline-offset-2"
                placeholder="Search items, collections, and profiles"
            />
          </div>
          <a
              href="/"
              class="ml-4 font-bold border-0 border-gray-100 border-solid cursor-pointer box-border text-zinc-700"
              aria-current="page"
          >Buy Now</a
          ><a
            href="/pay-later"
            class="mx-4 font-bold text-gray-400 border-0 border-gray-100 border-solid cursor-pointer box-border"
        >Pay later</a
        >
          <a
              href="/sell"
              class="mx-0 font-bold text-gray-400 border-0 border-gray-100 border-solid cursor-pointer box-border"
          >Liquidity Pool</a
          >
        </div>
      </div>

      <div
          class="flex items-center pr-4 text-center border-l-0 border-r border-gray-200 border-solid box-border border-y-0"
      >
        <!---->
        <div
            class="inline-block border-0 border-gray-100 border-solid cursor-pointer box-border"
        >
          <img
              class="block w-5 max-w-full h-5 align-middle border-0 border-gray-100 border-solid box-border"
              src="./assets/moon.53714668.svg"
              alt=""
          />
        </div>
        <span
            data-v-tippy=""
            aria-expanded="false"
            class="border-0 border-gray-100 border-solid box-border"
        ><img
            class="block ml-4 max-w-full h-auto align-middle border-0 border-gray-100 border-solid cursor-pointer box-border"
            src="./assets/help.e3aabf86.svg"
        /></span>
      </div>
      <div
          class="hidden items-center text-center border-0 border-gray-100 border-solid lg:flex box-border"
      >
        <div
            class="inline-block flex-shrink-0 ml-4 border-0 border-gray-100 border-solid box-border"
        >
          <div
              class="flex justify-center items-center p-2 h-10 text-sm font-bold leading-5 rounded-xl border-2 border-gray-200 border-solid cursor-pointer box-border text-zinc-800"
          >
            Connect Wallet
          </div>
        </div>
      </div>
      <div
          class="inline-block relative flex-shrink-0 text-center border-0 border-gray-100 border-solid box-border"
      >
        <img
            class="block mx-4 w-8 max-w-full h-8 align-middle border-0 border-gray-100 border-solid cursor-pointer box-border"
            src="./assets/cart.6410f3e3.svg"
        />
      </div>

    </div>
  </div>
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


export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,

  },
}
</script>

