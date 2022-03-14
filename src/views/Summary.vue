<script setup>

import Title from "../components/Title.vue";
</script>


<template>
  <section class="relative" style="height:80vh;">
    <div class="container flex flex-col flex-1 items-center h-full mt-12 lg:mt-10 mb-3">
      <Title />

      <div class="bg-white p-10 rounded-lg shadow-md max-w-[40vw] flex flex-col h-full">
        <h1 class="text-3xl font-bold">Summary</h1>
        <div class="container flex flex-col flex-1 justify-start pt-3 h-1/2">
        <SummaryItem title="Down Payment" :amount="downAmount" with-unit="true"></SummaryItem>
          <SummaryItem v-show="displayFee" title="Processing Fee" :amount="processAmount" with-unit="true"></SummaryItem>
          <SummaryItem v-show="displayFee" title="gas Fee" :amount="gasAmount" with-unit="true"></SummaryItem>
          <SummaryItem title="Next Payment" :amount="nextAmount" with-unit="true"></SummaryItem>
          <a v-if="!displayFee" @click="showfee" href="#" class="w-full flex justify-end text-blue-400"> View fees</a>
          <SummaryItem title="Next Payment Date" :amount="payDate" :with-unit="false"></SummaryItem>
          <SummaryItem v-show="displayFee" title="Total Payback Amount" :amount="totalAmount" with-unit="true"></SummaryItem>
          <a v-show="displayFee" @click="hidefee" href="#" class="w-full flex justify-end text-blue-400"> hide fees</a>
        </div>
        <div class="flex flex-row gap-3 mb-3"><input type="checkbox" class="text-xs mt-2" id="agree"><label for="agree" class="mt-1 text-xs text-neutral-900 justify-center">I agree to Cedar's <a href="#" class="text-blue-400">Terms of use</a> and I authorize Cedar's collatorization contract for hosting the NFT before completing all the payments</label></div>

        <span
            class="flex justify-center w-full  leading-6 border-0 border-gray-100 border-solid box-border"
            data-v-18c1ff1f=""
        ><div
            class="flex justify-center items-center py-3 px-6 w-full max-w-sm text-base font-medium text-white bg-violet-600 rounded-xl border-0 border-gray-100 border-solid cursor-pointer md:py-4 box-border"
            data-v-18c1ff1f=""
            @click="purchase"
        >
      Confirm
    </div>
          <!----></span
        >
        <p class="flex mt-1 text-xs text-gray-400 justify-center">
          Please review your order carefully as payment can not be cancelled, recalled or returned.
        </p>

      </div>
    </div>
  </section>
</template>

<script>
import SummaryItem from "../components/SummaryItem.vue";
export default {
  components:{
    SummaryItem
  },
  data(){
    return{
      downAmount:'38.54',
      nextAmount:'51.24',
      processAmount:'1.28',
      gasAmount:'0.04',
      payDate:'Sun, 03/13/2022',
      totalAmount:'89.78',
      displayFee: false,

    }
  },
  methods:{
    showfee(){
      this.displayFee=true;
    },
    hidefee(){
      this.displayFee=false;
    },
    purchase(){
      this.$swal.fire({
        title: 'Purchase Successful',
        position: 'top',
        icon:"success",
        toast: true,
        timer: 3000,
        showClass: {
          popup: `
      animate__animated
      animate__fadeInDown
      animate__faster
    `
        },

        grow: 'row',
        showConfirmButton: false,
        showCloseButton: false
      });
      this.$router.push('/pay-later');
    }
  }
}
</script>

<style scoped>

</style>