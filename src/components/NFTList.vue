<template>
<nft-list-item v-for="collection in collections" :img="collection.img" :name="collection.name" :volume="collection.volume" :fprice="collection.fprice" :owners="collection.owners" :percent="collection.percent" :supply="collection.supply"></nft-list-item>
</template>

<script>
import nftListItem from './nftListItem.vue'



export default {
  components: {
    nftListItem
  },
  data(){
    return{
      collections: ''
    }
  },
  mounted(){
    this.collections = this.$store.getters.getCollection;
  }
}
</script>

<style scoped>

</style>