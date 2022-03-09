<script setup>

import Title from "../components/Title.vue";
</script>


<template>
  <section class="relative h-4/5">
    <div class="container flex flex-col flex-1 items-center  mt-12 lg:mt-20">
      <Title />
      <div class="bg-white p-10 rounded-lg shadow-md min-w-[30vw] flex flex-col">
        <h1 class="text-xl font-bold">Summary</h1>
        <div class="container flex flex-row flex-1 justify-between pt-3">
            <div>DownPayment</div>
            <div class="flex flex-row">38.54

              <svg
                  viewBox="0 0 371 592.8"
                  class="w-4 h-4 text-gray-900 align-middle"
                  style="transform: translateY(2px);"
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

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Summary"
}
</script>

<style scoped>

</style>