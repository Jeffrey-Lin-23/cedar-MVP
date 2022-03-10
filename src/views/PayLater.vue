<template>
  <section class="relative h-4/5 scroll-auto">
    <div class="container flex flex-col items-center lg:mt-10 justify-center">
    <pay-card v-for="pay in Pays" :name="pay.name" :Amount="pay.Amount" :id="pay.id" :key="pay.id" :total="pay.Total" :img="pay.img" :due="pay.Due"/>
    </div>
  </section>
</template>

<script>
import PayCard from "../components/PayCard.vue";

export default {
  components:{
    PayCard,
  },
  data(){
    return{
      Pays: [
          {
            "name": "WonderPals",
            "id": "#660",
            "Due": "Sun, 03/13/2022",
            "Amount": "20.56",
            "Total": "83.769",
            "img": "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s130"
          },
    {
      "name": "CryptoPunks",
        "id": "#9873",
        "Due": "Sun, 03/15/2022",
        "Amount": "100.56",
        "Total": "111",
        "img": "https://lh3.googleusercontent.com/YHBKoWcxFBGlZtiRnzrxtXvaOqZpHpUDuT99XGMOILzxnS_6uO5na2MQcLccxUo6CevrpSe0dwB9JNfboMj6kiGi836LZpCnW-aS=w291"
    },
    {
      "name": "Bored-monkey",
        "id": "#39",
        "Due": "Sun, 03/10/2022",
        "Amount": "40.56",
        "Total": "55",
        "img": "https://lh3.googleusercontent.com/P3ZSSKVpcMB7qaIi2pzOB2qJzhIO8engUNgrW-MXekgzUOZ47LdF7UKeN50lv6yKu3C4b3oo39PXM6xbWEob_zvI3DSAVgGnM8yxoA=w291"
    }
  ]
    }
  },
}
</script>

<style scoped>

</style>