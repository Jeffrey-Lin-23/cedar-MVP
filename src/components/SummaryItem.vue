<template>
  <div class="w-full flex flex-row justify-between" >
    <div>{{ title }}</div>
    <div class="flex flex-row">{{ amount }}

      <svg
          v-if="withUnit"
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


        ></path></svg
      >
    </div>
  </div>

</template>

<script>
export default {
  props:['title','amount','withUnit']
}
</script>

<style scoped>

</style>