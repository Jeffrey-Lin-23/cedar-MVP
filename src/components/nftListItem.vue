<template>
  <router-link
      :to="{path:link}"
      class="flex items-center py-4 px-0 h-16 font-sans text-sm font-medium leading-5 text-left border-t-0 border-b border-gray-200 border-solid cursor-pointer lg:px-4 box-border border-x-0 text-zinc-800"

  ><div
      class="flex items-center w-3/4 border-0 border-gray-100 border-solid lg:w-1/3 md:w-1/2 box-border"
  >
    <img
        :src="img"
        class="block mr-4 w-10 max-w-full h-10 align-middle rounded-xl border-0 border-gray-100 border-solid box-border"
    />
    <div
        class="inline-block border-0 border-gray-100 border-solid box-border truncate"
    >
      {{ name }}
    </div>
    <!---->
  </div>
    <div
        class="hidden justify-end items-center w-1/6 border-0 border-gray-100 border-solid md:flex box-border"
    >
      {{ volume }}
      <img
          src="../assets/eth.e6a21661.svg"
          class="block ml-1 max-w-full h-4 align-middle border-0 border-gray-100 border-solid box-border"
      />
    </div>
    <div
        class="hidden w-1/6 text-right border-0 border-gray-100 border-solid md:inline box-border"
    >
      {{ percent }}
    </div>
    <div
        class="flex justify-end items-center w-1/6 border-0 border-gray-100 border-solid box-border"
    >
      {{ fprice }}
      <img
          src="../assets/eth.e6a21661.svg"
          class="block ml-1 max-w-full h-4 align-middle border-0 border-gray-100 border-solid box-border"
      />
    </div>
    <div
        class="hidden w-1/12 text-right border-0 border-gray-100 border-solid lg:inline box-border"
    >
      {{ owners }}
    </div>
    <div
        class="hidden w-1/12 text-right border-0 border-gray-100 border-solid lg:inline box-border"
    >
      {{ supply }}
    </div></router-link
  >
</template>

<script>
export default {
  props:['img','name','volume','percent','fprice','owners','supply'],
  computed:{
    link ()
    {
      return '/collection/' + this.name
    }
  }
}
</script>

<style scoped>

</style>