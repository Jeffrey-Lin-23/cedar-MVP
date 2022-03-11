<template>
  <div class="m-auto container px-4 xl:px-12 2xl:px-50 mt-8">

    <div
        class="flex justify-between font-sans leading-6 text-center border-0 border-gray-100 border-solid box-border text-neutral-900"
    >

      <div
          class="flex flex-col leading-6 border-0 border-gray-100 border-solid box-border"
      >
        <div
            class="inline-block mb-2 text-3xl font-bold leading-9 text-left border-0 border-gray-100 border-solid box-border text-zinc-800"
        >
          Buy NFTs Pay Later
        </div>
        <div
            class="inline-block mb-4 text-base text-left border-0 border-gray-100 border-solid box-border text-slate-500 uppercase"

        >
          Trade across all nft marketplaces instantly
        </div>
      </div>
    </div>
    <div
        class="mt-3 flex justify-between items-center font-sans leading-6 text-center border-0 border-gray-100 border-solid box-border text-neutral-900 w-full"

    >
      <!----><input
        class="py-2 px-4 my-0 mx-3 w-full max-w-2xl h-12 text-sm leading-5 rounded-xl border-2 border-gray-200 border-solid cursor-text md:h-10 box-border bg-inherit outline-offset-2"
        placeholder="Search collections by name or address"
        data-v-55f06353=""
    />
      <div
          class="hidden relative w-40 leading-6 border-0 border-gray-100 border-solid cursor-pointer md:inline box-border"
          data-v-55f06353=""
      >
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              Last 24 hours
              <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </MenuButton>
          </div>

          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Last 24 hours</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Last 7 Days</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Last 30 Days</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"> all time </a>
                </MenuItem>

              </div>
            </MenuItems>
          </transition>
        </Menu>

        <!---->
      </div>
    </div>
    <div
        class="flex items-center p-4 h-16 font-sans text-xs font-semibold leading-4 text-left border-t-0 border-b border-gray-200 border-solid box-border border-x-0 text-slate-500"
        data-v-55f06353=""
    >
      <div
          class="inline-block pl-12 w-2/3 text-xs leading-4 border-0 border-gray-100 border-solid lg:w-1/3 md:w-1/2 box-border truncate"
          data-v-55f06353=""
      >
        Collection
      </div>
      <div
          class="hidden justify-end items-center w-1/6 text-xs leading-4 border-0 border-gray-100 border-solid cursor-pointer md:flex box-border"
          data-v-55f06353=""
      >
        24h Volume
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="block w-4 font-semibold align-middle border-0 border-gray-100 border-solid box-border"
            data-v-55f06353=""
        >
          <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
              class="leading-4 border-0 border-gray-100 border-solid box-border"
          ></path>
        </svg>
      </div>
      <div
          class="hidden justify-end items-center w-1/6 text-xs leading-4 text-right border-0 border-gray-100 border-solid cursor-pointer md:flex box-border"
          data-v-55f06353=""
      >
        24h
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="block w-4 font-semibold align-middle border-0 border-gray-100 border-solid box-border"
            data-v-55f06353=""
        >
          <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
              class="leading-4 border-0 border-gray-100 border-solid box-border"
          ></path>
        </svg>
      </div>
      <div
          class="flex justify-end items-center w-1/4 text-xs leading-4 border-0 border-gray-100 border-solid cursor-pointer md:w-1/6 box-border"
          data-v-55f06353=""
      >
        Floor Price
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="block w-4 font-semibold align-middle border-0 border-gray-100 border-solid box-border"
            data-v-55f06353=""
        >
          <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
              class="leading-4 border-0 border-gray-100 border-solid box-border"
          ></path>
        </svg>
      </div>
      <div
          class="hidden justify-end items-center w-1/12 text-xs leading-4 text-right border-0 border-gray-100 border-solid cursor-pointer lg:flex box-border"
          data-v-55f06353=""
      >
        Owners
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="block w-4 font-semibold align-middle border-0 border-gray-100 border-solid box-border"
            data-v-55f06353=""
        >
          <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
              class="leading-4 border-0 border-gray-100 border-solid box-border"
          ></path>
        </svg>
      </div>
      <div
          class="hidden justify-end items-center w-1/12 text-xs leading-4 text-right border-0 border-gray-100 border-solid cursor-pointer lg:flex box-border"
          data-v-55f06353=""
      >
        Supply
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="block w-4 font-semibold align-middle border-0 border-gray-100 border-solid box-border"
            data-v-55f06353=""
        >
          <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
              class="leading-4 border-0 border-gray-100 border-solid box-border"
          ></path>
        </svg>
      </div>
    </div>
    <nft-list></nft-list>


  </div>
</template>

<script>
import NFTList from '../components/NFTList.vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'

export default {
  components:{
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
    NFTList,

  }
}
</script>

<style scoped>

</style>
