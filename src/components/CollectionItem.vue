<template>
  <div
      class="flex flex-col items-center w-full rounded-xl relative shadow-lg unselected transition mb-5 overflow-hidden group hover-shadow cursor-pointer ml-4"
      data-v-60718b2e=""
      @click ="purchase"
  >
    <div class="relative w-full w-full" data-v-063eca2a="" data-v-60718b2e=""
         style="border-radius: 11px 11px 0px 0px;"><span class="vue-skeletor vue-skeletor--text square"
                                                         data-v-063eca2a="" style="display: none;">&zwnj;</span><img
        :src="img" alt="" loop=""
        playsinline="" controls="" class="block w-full nodrag" data-v-063eca2a="" style=""><!----><!----></div>
    <!----><a target="_blank" href="https://opensea.io/assets/0x892848074ddea461a15f337250da3ce55580ca85/2178"
              class="absolute left-3 top-3 w-6 h-6" data-v-60718b2e=""><img class="rounded-full"
                                                                            src="../assets/opensea.1f851ea3.svg"></a><span
      data-v-tippy=""
      class="border-2 border-white rounded-md absolute left-3 bottom-20 cedar-gradient text-white h-6 px-2 font-bold text-xs flex items-center justify-center"
      data-v-60718b2e=""><div data-v-60718b2e=""><div data-v-60718b2e=""># {{ num }}</div></div></span>
    <div
        class="group-hover:opacity-100 duration-200 transition opacity-0 absolute right-3 top-3 w-6 h-6 flex items-center justify-center"
        data-v-60718b2e="">
      <div class="absolute opacity-20 rounded-full w-full h-full left-0 top-0 bg-white"
           data-v-60718b2e=""></div>
      <img class="w-3 h-3" src="../assets/plus.b871573e.svg" data-v-60718b2e=""></div><!---->
    <div class="p-2 w-full" data-v-60718b2e="">
      <div class="flex justify-between items-center mb-1" data-v-60718b2e="">
        <div class="truncate text-left text-sm font-medium text-gray-700 dark:text-gray-100" data-v-60718b2e="">
          {{ name }}
        </div>
      </div><!---->
      <div class="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300 h-7"
           data-v-60718b2e="">
        <div class="flex-shrink-1 w-full overflow-x-hidden" data-v-60718b2e="">
          <div class="flex items-center gap-2 w-full" data-v-60718b2e="">
            <div class="flex items-center max-w-full" data-v-60718b2e="">
              <div class="truncate">{{ price }}</div>
              <img src="../assets/eth.e6a21661.svg" class="ml-1 transform -translate-y-px"
                   style="height: 12px; width: 12px;"></div><!----><!----></div>
        </div>
        <a href="/asset/0x892848074ddea461a15f337250da3ce55580ca85/2178"
           class="font-bold cursor-pointer ml-2 p-1 text-xs border-2 rounded flex-shrink-0 border-gray-300 dark:border-gray-600 text-purple-500 hover:text-white hover:bg-purple-500 hover:border-purple-500"
           data-v-60718b2e="">DETAILS &gt;</a></div>
    </div>
  </div>
</template>

<script>
export default {
  props:['img','name','num','price'],
  methods:{
    purchase(){
      const url = '/Detail/'+this.num;
      this.$router.push(url);
    }
  }
}
</script>

<style scoped>
  .cedar-gradient{
    background: linear-gradient(to right, #30cfd0 0%, #330867 100%);


  }

</style>