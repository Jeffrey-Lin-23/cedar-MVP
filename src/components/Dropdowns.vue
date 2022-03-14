<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="flex-row inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
        <div class="mr-2 translate-y-0.5 " ><span data-v-24ff0008=""><div style="border-radius: 16px; overflow: hidden; padding: 0px; margin: 0px; width: 16px; height: 16px; display: inline-block; background: rgb(251, 24, 85);"><svg x="0" y="0" width="32" height="32"><rect x="0" y="0" width="32" height="32" transform="translate(-6.478558498039109 -5.370576481426376) rotate(236.3 16 16)" fill="#188FF2"></rect><rect x="0" y="0" width="32" height="32" transform="translate(-14.457246432184032 -7.620461871548947) rotate(300.7 16 16)" fill="#F5D000"></rect><rect x="0" y="0" width="32" height="32" transform="translate(8.127366343366939 -20.226939556445217) rotate(372.3 16 16)" fill="#034C5E"></rect></svg></div></span></div>
        Oxec...2a91
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']" class="flex">
              Oxec...2a91
              <DuplicateIcon class="ml-3 mr-3 h-5 w-5 text-blue-400 group-hover:text-gray-500" aria-hidden="true" />
            </a>
          </MenuItem>
        </div>
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']" class="flex-row justify-between">
             <div>
               Balance
             </div>
              <div class="flex flex-row font-semibold text-2xl">
              10.7
                <svg
                    viewBox="0 0 371 592.8"
                    class="w-4 h-4 text-gray-900 align-middle"
                    style="transform: translateY(0.5rem);"
                >
                  <polygon
                      fill="currentColor"
                      points="3.4,300.3 186.5,0 366.7,300.5 185.1,409.8 "
                      data-v-15435500=""
                  ></polygon>
                  <polygon
                      fill="currentColor"
                      points="3.4,337 185.5,444 366.7,337 185.1,592.8 "
                      data-v-15435500=""
                      class=""
                  ></polygon>
                  <path
                      fill="currentColor"
                      d="M-290.1-144"
                      data-v-15435500=""

                  ></path></svg
                >
            </div>

            </a>
          </MenuItem>

        </div>
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']" class="flex flex-row justify-between">
              <div>
                currency
              </div>
              <div class="flex flex-row gap-2">
                <svg
                    viewBox="0 0 371 592.8"
                    class="w-4 h-4 text-gray-900 align-middle"
                    style="transform: translateY(0.4rem);"
                >
                  <polygon
                      fill="currentColor"
                      points="3.4,300.3 186.5,0 366.7,300.5 185.1,409.8 "

                  ></polygon>
                  <polygon
                      fill="currentColor"
                      points="3.4,337 185.5,444 366.7,337 185.1,592.8 "

                  ></polygon>
                  <path
                      fill="currentColor"
                      d="M-290.1-144"

                  ></path></svg>
                <div style="transform: translateY(0.1rem);">
                  <Switch v-model="enabled" :class="[enabled ? 'bg-slate-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
                    <span class="sr-only">Use setting</span>
                    <span aria-hidden="true" :class="[enabled ? 'translate-x-8' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                  </Switch>
                </div>

                <span class="text-lg">$</span>
              </div>

            </a>
          </MenuItem>

        </div>
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a @click="$emit('discon')" href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']" class="flex flex-row justify-between">

              Disconnect
              <svg
                  width="20"
                  height="20"
                  data-v-0d40bcf7=""
                  data-v-60cc8264=""
                  class="font-sans font-bold leading-4 text-gray-600 align-middle cursor-pointer"
                  style="fill: rgb(119, 126, 144); transition: fill 0.2s ease 0s;"
              >
                <path
                    d="M10.668 1.334c.866 0 1.519.045 2.005.104 1.044.128 1.728.94 1.825 1.92.086.863.169 2.301.169 4.642l-.169 4.642c-.098.98-.781 1.792-1.825 1.92a16.68 16.68 0 0 1-2.005.104 16.68 16.68 0 0 1-2.005-.104c-1.044-.128-1.728-.94-1.825-1.92l-.124-1.951c-.014-.368.273-.677.641-.691s.677.273.691.641l.119 1.869c.043.427.301.685.66.729a15.36 15.36 0 0 0 1.844.094c.821 0 1.419-.042 1.844-.094.36-.044.618-.301.66-.729.08-.806.163-2.198.163-4.51l-.163-4.51c-.043-.428-.301-.685-.66-.729-.424-.052-1.022-.094-1.844-.094s-1.42.042-1.844.094c-.36.044-.618.301-.66.729l-.119 1.869c-.014.368-.323.655-.691.641s-.655-.323-.641-.691l.124-1.951c.098-.98.781-1.792 1.825-1.92.486-.059 1.139-.104 2.005-.104zM4.805 5.196c.26.26.26.682 0 .943L3.61 7.334h6.391c.368 0 .667.298.667.667s-.298.667-.667.667H3.61l1.195 1.195c.26.26.26.682 0 .943s-.682.26-.943 0L1.529 8.472c-.26-.26-.26-.682 0-.943l2.333-2.333c.26-.26.682-.26.943 0z"
                    data-v-0d40bcf7=""
                    class=""
                ></path>
              </svg>

            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems, Switch} from '@headlessui/vue'
import {
  ArchiveIcon,
  ArrowCircleRightIcon,
  ChevronDownIcon,
  DuplicateIcon,
  HeartIcon,
  PencilAltIcon,
  TrashIcon,
  UserAddIcon,

} from '@heroicons/vue/solid'

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ArchiveIcon,
    ArrowCircleRightIcon,
    ChevronDownIcon,
    DuplicateIcon,
    HeartIcon,
    PencilAltIcon,
    TrashIcon,
    UserAddIcon,
    Switch,
  },
  emit:['discon']
}
</script>