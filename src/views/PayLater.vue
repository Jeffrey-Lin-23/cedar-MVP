<template>
  <section class="relative h-4/5 scroll-auto">
    <div class="container flex flex-col items-center lg:mt-10 justify-center">
    <pay-card v-for="pay in Pays" :name="pay.name" :Amount="pay.Amount" :id="pay.id" :key="pay.id" :total="pay.Total" :img="pay.img" :due="pay.Due" :link="pay.link" :complete="pay.completed"/>
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
            "name": "Wish the Fluted",
            "id": "#3602",
            "Due": "Sun, 03/13/2022",
            "Amount": "1.5",
            "Total": "3",
            "img": "https://storage.opensea.io/files/499b732c74aa2fd5db00e4efac78e8a8.svg",
            "link" : "https://www.gem.xyz/asset/0x892848074ddea461a15f337250da3ce55580ca85/9507",
            "completed": false
          },
    {
      "name": "CryptoPunks",
        "id": "#9873",
        "Due": "Sun, 03/15/2022",
        "Amount": "111",
        "Total": "111",
        "img": "https://lh3.googleusercontent.com/YHBKoWcxFBGlZtiRnzrxtXvaOqZpHpUDuT99XGMOILzxnS_6uO5na2MQcLccxUo6CevrpSe0dwB9JNfboMj6kiGi836LZpCnW-aS=w291",
        "link" : "https://www.larvalabs.com/cryptopunks/details/9873",
        "completed": true
    },
    {
      "name": "Bored-monkey",
        "id": "#39",
        "Due": "Sun, 03/10/2022",
        "Amount": "40.56",
        "Total": "55",
        "img": "https://lh3.googleusercontent.com/P3ZSSKVpcMB7qaIi2pzOB2qJzhIO8engUNgrW-MXekgzUOZ47LdF7UKeN50lv6yKu3C4b3oo39PXM6xbWEob_zvI3DSAVgGnM8yxoA=w291",
        "link" : "https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/39",
        "completed": false
    }
  ]
    }
  },
}
</script>

<style scoped>

</style>