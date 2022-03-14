<template>
  <section class="relative h-4/5">
    <div class="container flex flex-col items-center  mt-12 lg:mt-20">
      <div class="bg-gray-100 px-10 py-10 shadow-lg w-4/5 border-2 border-gray-300 border-solid">
        <div class="grid grid-cols-6 gap-1 items-center">
          <div class="container justify-end">
            <img src="../assets/Ethereum_logo.svg.png" class="w-1/3 ml-5">

          </div>

          <div class=" flex flex-col ">
            <h2 class="text-2xl" >ETH</h2>
            <p class="text-sm"> Ethereum</p>
          </div>
          <div class="col-span-3">
              <p class="text-sm grid grid-cols-2 ">MarketSize:$ 15.67M <span class="ml-2">Total Borrowed:$ 9.99M</span></p>
              <p class="text-sm grid grid-cols-2">Deposit APY:1.85% <span class="ml-2">Term: 3 months</span></p>
              <p class="text-sm">Term End Day: Sun, 03/13/2022</p>
          </div>
          <button
              class="flex justify-center items-center py-3 px-4 m-0 h-10 font-sans text-sm font-bold text-center text-gray-900 bg-transparent bg-none border-2 border-gray-300 border-solid cursor-pointer hover:border-gray-600"
              type="button"
              style=" border-radius: 90px; transition: all 0.2s ease 0s;"
          >
            Deposit
          </button>

        </div>

      </div>
    </div>

  </section>



</template>

<script>
export default {
  name: "LiquidityPool"
}
</script>

<style scoped>

</style>