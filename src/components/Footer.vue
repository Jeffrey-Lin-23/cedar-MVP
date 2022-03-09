<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8 border-t border-gray-200">
    <div class="flex justify-center space-x-6 md:order-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <Switch v-model="enabled" :class="[enabled ? 'bg-slate-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
        <span class="sr-only">Use setting</span>
        <span aria-hidden="true" :class="[enabled ? 'translate-x-8' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
      </Switch>

    </div>
    <div class="mt-8 md:mt-0 md:order-1">
      <p class="text-center text-base text-gray-400">&copy; 2022 Cedar. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'



export default {
  components: {
    Switch,
  },
  setup() {
    const enabled = ref(false)

    return {
      enabled,
    }
  },
}
</script>

<style scoped>

</style>