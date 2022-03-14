<template>
  <a
      href='#'
      class="flex flex-col justify-between items-start p-4 font-sans text-sm leading-5 text-center bg-gray-50 rounded-xl border border-gray-200 border-solid cursor-pointer box-border text-zinc-800"
  ><div class="inline-block border-0 border-gray-100 border-solid box-border">
    {{ type }}
  </div>
    <div
        class="inline-block text-base font-medium leading-6 text-left border-0 border-gray-100 border-solid box-border"
    >
      {{ attr }}
    </div>
    <div
        class="flex items-center text-xs leading-4 border-0 border-gray-100 border-solid box-border"
    >
      <div class="inline-block border-0 border-gray-100 border-solid box-border">
        {{ amount }} &nbsp;
      </div>
      <div class="inline-block border-0 border-gray-100 border-solid box-border">
        ({{ percent }}%) have this
      </div>
    </div></a
  >
</template>

<script>
export default {
  props:['type','attr','amount','percent']
}
</script>

<style scoped>

</style>