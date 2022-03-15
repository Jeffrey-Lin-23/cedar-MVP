<template>
  <div class=" bg-white px-10 py-5 rounded-lg shadow-lg min-w-[60vw] flex-row flex-1 justify-between gap-4 mb-5">

      <div class="grid grid-cols-5 gap-1 items-center">
        <div class="container justify-start">
          <img  :src="img" width="150" height="150"/>
        </div>

        <div class="col-span-3 flex flex-col">
          <p class="text-3xl mb-7 mt-0">{{ name }} <span class="ml-3 text-2xl text-gray-500"> {{ id }}</span></p>
          <p v-show="!complete" class="text-sm mb-5">Due Day: {{ due }}</p>
          <p v-show="complete" class="text-sm mb-2">Congrats,</p>
          <div class="flex flex-row justify-between ">
            <p v-show="!complete" class="text-sm flex flex-row">Amount: {{ Amount }}
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
              ></p>
            <p v-show="complete" class="text-sm ">you completed all the payment!</p>
            <p class="text-sm flex flex-row">Remaining: {{ remain }}
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
              /
              {{ total }}
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
            </p>
          </div>

          <div class="w-full mr-5 bg-neutral-900  h-2 mt-2 overflow-hidden">
            <div class=" h-full  shadow-md" style="background-color: #4BDB4B" :style="{width: calculateWidth}"></div>
          </div>
        </div>
        <div class="flex flex-col justify-between ml-5">
          <button
              class="flex justify-center items-center py-3 px-4 my-3 h-10 font-sans text-sm font-bold text-center text-gray-900 bg-transparent bg-none border-2 border-gray-300 border-solid cursor-pointer hover:border-gray-600"
              type="button"
              style=" border-radius: 90px; transition: all 0.2s ease 0s;"
              @click="viewNFT"
          >
            View NFT
          </button>
          <button
              class="flex justify-center items-center py-3 px-4 my-3 h-10 font-sans text-sm font-bold text-center text-gray-900 bg-transparent bg-none border-2 border-gray-300 border-solid cursor-pointer hover:border-gray-600"
              type="button"
              style=" border-radius: 90px; transition: all 0.2s ease 0s;"
          >
            Withdraw
          </button>
        </div>

      </div>
  </div>

</template>

<script>
export default {
  props: {
    name : String,
    id : String,
    due : String,
    Amount: String,
    total : String,
    img: String,
    link: String,
    complete:Boolean
  },
  data(){
    return{
      remain : 0,
      percent : 0,
    }
  },
  computed: {
    calculateWidth(){

      return this.percent+"%";
    }
  },
  mounted() {
    this.remain = parseFloat(this.total) - parseFloat(this.Amount);
    this.remain = this.remain.toFixed(2);
    this.percent = parseFloat(this.Amount)/ parseFloat(this.total) * 100;
    console.log(this.percent)
  },
  methods:{
    viewNFT(){
      console.log(this.link);
      window.location.href=this.link;
    }
  }
}
</script>

<style scoped>

</style>