<!-- This example requires Tailwind CSS v2.0+ -->
<template>
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
            src="../assets/logo.e0fbc3a6.png"
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
              class="ml-4 font-bold border-0 border-gray-100 border-solid cursor-pointer box-border "
              :class="[ selected==='home' ? 'text-gray-900': 'text-gray-400' ]"
              aria-current="page"
          >Buy Now</a
          ><a
            href="/pay-later"
            class="mx-4 font-bold border-0 border-gray-100 border-solid cursor-pointer box-border"
            :class="[ selected==='pay-later' ? 'text-gray-900': 'text-gray-400' ]"
        >Pay later</a
        >
          <a
              href="/liquidity-pool"
              class="mx-0 font-bold  border-0 border-gray-100 border-solid cursor-pointer box-border"
              :class="[ selected==='liquidity-pool' ? 'text-gray-900': 'text-gray-400' ]"
          >Liquidity Pool</a>
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
              src="../assets/moon.53714668.svg"
              alt=""
          />
        </div>
        <span
            data-v-tippy=""
            aria-expanded="false"
            class="border-0 border-gray-100 border-solid box-border"
        ><img
            class="block ml-4 max-w-full h-auto align-middle border-0 border-gray-100 border-solid cursor-pointer box-border"
            src="../assets/help.e3aabf86.svg"
        /></span>
      </div>
      <div
          class="hidden items-center text-center border-0 border-gray-100 border-solid lg:flex box-border"
      >
        <div
            class="inline-block flex-shrink-0 ml-4 border-0 border-gray-100 border-solid box-border"
        >
          <div v-if="user===''" @click="connect"
               class="flex justify-center items-center p-2 h-10 text-sm font-bold leading-5 rounded-xl border-2 border-gray-200 border-solid cursor-pointer box-border text-zinc-800"
          >
            Connect Wallet
          </div>
          <dropdowns v-else @discon="disconnect"></dropdowns>
        </div>
      </div>
      <div
          class="inline-block relative flex-shrink-0 text-center border-0 border-gray-100 border-solid box-border"
      >
        <img
            class="block mx-4 w-8 max-w-full h-8 align-middle border-0 border-gray-100 border-solid cursor-pointer box-border"
            src="../assets/cart.6410f3e3.svg"
        />
      </div>

    </div>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { QuestionMarkCircleIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import { PlusSmIcon } from '@heroicons/vue/solid'
import Dropdowns from './Dropdowns.vue'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    QuestionMarkCircleIcon,
    MenuIcon,
    PlusSmIcon,
    XIcon,
    Dropdowns
  },
  data(){
    return{
        user: '',
    }
  },
  props:['selected'],
  mounted(){

    this.user = this.$store.getters.getCurrentUser;
  },
  methods:{
    connect(){
      this.$store.dispatch("connectWallet");

      this.user = this.$store.getters.getCurrentUser;
    },
    disconnect(){
      this.$store.dispatch("disconnectWallet");
      this.user = '';
    }
  }
}
</script>