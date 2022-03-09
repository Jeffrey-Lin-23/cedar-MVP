<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- Mobile Menu TODO -->
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <!-- LOGO -->
          <div class="flex-shrink-0 flex items-center">
            <img class="hidden lg:block h-8 w-auto" src="../assets/logo.e0fbc3a6.png" alt="cedar" />
          </div>
          <!-- Web nav menu item -->
          <div class="hidden md:ml-6 md:flex md:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <a href="#" class=" hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium" @click='goTo("Home")' :class="[ selected==='Home' ? 'text-gray-900': 'text-gray-400' ]" > Buy Now </a>
            <a href="#" class=" hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium" @click='goTo("PayLater")' :class="[ selected==='PayLater' ? 'text-gray-900': 'text-gray-400' ]" > Pay Later </a>
            <a href="#" class=" hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium" @click='goTo("LiquidityPool")' :class="[ selected==='LiquidityPool' ? 'text-gray-900': 'text-gray-400' ]"> Liquidity Pool </a>
          </div>
        </div>

        <div class="flex items-center">
          <div v-if="user===''" class="flex-shrink-0">
            <button @click="connectWallet" type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

              <span>Connect Wallet</span>
            </button>
          </div>
          <Dropdowns v-else />
          <div class=" md:ml-4 md:flex-shrink-0 md:flex md:items-center">

            <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <QuestionMarkCircleIcon class="h-6 w-6" aria-hidden="true" />

            </button>



          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <DisclosurePanel class="md:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <DisclosureButton as="a" href="#" class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6" >Buy Now </DisclosureButton>
        <DisclosureButton as="a" href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"> Pay Later</DisclosureButton>
        <DisclosureButton as="a" href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"> Liquidity Pool </DisclosureButton>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4 sm:px-6">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>

          <button type="button" class="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

            <QuestionMarkCircleIcon class="h-6 w-6" aria-hidden="true" />

          </button>
        </div>

      </div>
    </DisclosurePanel>
  </Disclosure>
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
        selected: "Home",
        user: '',

    }
  },
  mounted(){
    this.$store.dispatch("connectWallet");
  },
  computed:{
    updateConnection(){
      return this.user = this.$store.getters.getCurrentUser;
    }
  },
  methods:{
    goTo(name){
      this.$router.push({name: name});
      this.selected = name;
    },
    connectWallet(){
      this.$store.dispatch("connectWallet");

      console.log(this.$store.getters.getCurrentUser);
      this.user = this.$store.getters.getCurrentUser;
    }
  }
}
</script>