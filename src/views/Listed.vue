<template>
  <section class="relative h-4/5">
    <div class="container flex flex-col items-center  mt-12 lg:mt-20">
      <div class="bg-white px-10 py-10 rounded-lg shadow-lg mt-10 min-w-[25vw] h-full">
        <div class="flex flex-1 flex-row gap-12 justify-between">
          <h2 class="text-3xl" > You Receive</h2>
          <drop-menu-component></drop-menu-component>
          <button
              class="absolute p-0 m-0 w-10 h-10 font-sans text-center text-black bg-transparent bg-none border-2 border-gray-200 border-solid cursor-pointer hover:border-slate-500"
              data-v-51cae19c=""
              style="transition: all 0.2s ease 0s; outline: none; top: 32px; right: 32px; border-radius: 50%; font-size: 0px;"
          >
            <svg
                width="16"
                height="16"
                data-v-0d40bcf7=""
                data-v-51cae19c=""
                class="align-middle"
                style="transition: transform 0.2s ease 0s; fill: rgb(35, 38, 47);"
            >
              <path
                  d="M.335.335c.446-.446 1.17-.446 1.616 0L8 6.384 14.049.335c.446-.446 1.17-.446 1.616 0s.446 1.17 0 1.616L9.616 8l6.049 6.049c.446.446.446 1.17 0 1.616s-1.17.446-1.616 0L8 9.616l-6.049 6.049c-.446.446-1.17.446-1.616 0s-.446-1.17 0-1.616L6.384 8 .335 1.951c-.446-.446-.446-1.17 0-1.616"
                  data-v-0d40bcf7=""
                  class=""
                  style="transition: none 0s ease 0s;"
              ></path>
            </svg>
          </button>

        </div>



      </div>

    </div>
  </section>
</template>


<script>
import dropMenuComponent from "../components/DropMenuComponent.vue";

export default {
  components :{

    dropMenuComponent
  }
}
</script>

<style scoped>

</style>