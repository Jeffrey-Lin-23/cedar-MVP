<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <section class="relative h-4/5">
    <div class="container flex flex-col items-center  mt-12 lg:mt-20">
      <!-- Content -->
      <div class="flex flex-1 flex-col items-center mb-6 tracking-wide space-x-0.5">
        <h1 class="text-center text-4xl mb-4">
          Buy  NFTs  Pay  Later
        </h1>
        <p class="text-center text-xs text-gray-500 uppercase">
          trade across all marketplaces instantly
        </p>
        <div class="bg-white px-10 py-10 rounded-lg shadow-lg mt-10 min-w-[40vw]">
          <div class="flex flex-1 flex-row gap-12 justify-between">
            <h2 class="text-3xl" > Find NFTs</h2>
            <button
                class="flex justify-center items-center py-3 px-4 m-0 h-10 font-sans text-sm font-bold text-center text-gray-900 bg-transparent bg-none border-2 border-gray-300 border-solid cursor-pointer hover:border-gray-600"
                type="button"
                style=" border-radius: 90px; transition: all 0.2s ease 0s;"
            >
              Browse
            </button>

          </div>
          <div
              data-v-468dcf12=""
              style="display: flex; margin-bottom: 10px; margin-left: 4px; outline: none;"
              class="flex p-0 mt-0 mr-0 mb-2 ml-1 leading-6 text-gray-900 align-baseline border-0"
          >
  <span
      class="p-0 my-0 mr-1 ml-0 text-base font-medium leading-7 text-gray-600 align-baseline border-0"
      data-v-468dcf12=""
      style="outline: none;"
  >Balance:</span
  >
            <div
                class="flex justify-center items-center p-0 m-0 text-base font-medium leading-7 align-baseline border-0"
                data-v-15435500=""
                data-v-468dcf12=""
                style="font-size: 16px; font-weight: 500; outline: none;"
            >
              <div
                  data-v-15435500=""
                  class="p-0 m-0 text-gray-900 align-baseline border-0"
                  style="outline: none;"
              >
                0
              </div>
              &nbsp;
              <svg
                  viewBox="0 0 371 592.8"
                  class="w-3 h-3 text-gray-900 align-middle"
                  data-v-15435500=""
                  style="width: 12px; height: 12px; transform: translateY(-1px);"
              >
                <polygon
                    fill="currentColor"
                    points="3.4,300.3 186.5,0 366.7,300.5 185.1,409.8 "
                    data-v-15435500=""
                    class=""
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
                    class=""
                ></path></svg
              >
            </div>
          </div>
          <div
              class="relative py-0 pr-12 pl-4 m-0 h-12 text-sm font-medium text-gray-900 align-baseline cursor-pointer shadow-xs hover:shadow-xs border-2 border-gray-300 border-solid"
              style=" border-radius: 12px; line-height: 48px; transition: box-shadow 0.2s ease 0s;"
          >
            <div
                class="p-0 m-0 text-gray-900 align-baseline border-0 truncate"
                style=" line-height: 48px;"
            >
              Choose NFTs
            </div>
            <div
                class="flex absolute justify-center items-center p-0 m-0 w-8 h-8 text-gray-900 align-baseline border-0 shadow-xs"

                style=" top: 50%; right: 8px; border-radius: 50%; transform: translateY(-50%); line-height: 48px;"
            >
              <svg
                  width="16"
                  height="16"
                  data-v-0d40bcf7=""
                  data-v-c6e2d93a=""
                  class="align-middle"
                  style="fill: rgb(119, 126, 144); transition: transform 0.2s ease 0s; line-height: 48px;"
              >
                <path
                    d="M15.039 3.961c-.653-.653-1.713-.653-2.366 0L8 8.634 3.327 3.961c-.653-.653-1.713-.653-2.366 0s-.653 1.713 0 2.366l5.856 5.856c.653.653 1.713.653 2.366 0l5.856-5.856c.653-.653.653-1.713 0-2.366z"
                    data-v-0d40bcf7=""
                    class="cursor-pointer"
                    style="line-height: 48px;"
                ></path>
              </svg>
            </div>
          </div>

        </div>

      </div>
      <button
          class="flex justify-center items-center py-4 px-6 mx-auto mb-5 w-full h-12 font-sans text-base font-medium leading-4 text-center text-white bg-blue-500 bg-none border-0 cursor-pointer hover:bg-blue-600"
          type="button"
          style="outline: none; max-width: 400px; border-radius: 90px; transition: all 0.2s ease 0s;"
      >
        Connect Wallet
      </button>

    </div>



  </section>
</template>

<script>
import { PaperClipIcon } from '@heroicons/vue/solid'

export default {
  components: {
    PaperClipIcon,
  },
}
</script>