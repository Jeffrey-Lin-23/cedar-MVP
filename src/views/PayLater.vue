<template>
  <section class="relative h-4/5 scroll-auto">
    <div class="container flex flex-col items-center lg:mt-10 justify-center">
    <PayCard />
    </div>
  </section>
</template>

<script>
import PayCard from "../components/PayCard.vue";

export default {
  components:{
    PayCard,
  }
}
</script>

<style scoped>

</style>