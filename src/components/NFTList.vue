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
      collections: [{
        img : "https://lh3.googleusercontent.com/Qd1IEPYz_0YlMaclPwb6_9PyP7afZIzH15IdIU2X6t1Wvg81DwpAaWOY0cNmxy173C4yMA7sM3xF9-HJsCSKJdx6KvDR3old3IKuTIc=s120",
        name : "CyberBrokers",
        volume: "3,878.16",
        percent: "+148.48%",
        fprice: "4.300",
        owners: "3.7K",
        supply: "10.0K"
      },
        {
          img : "https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s120",
          name : "Mutant Ape Yacht Club",
          volume: "731.29",
          percent: "+45.98%",
          fprice: "15.750",
          owners: "11.9K",
          supply: "18.0K"
        },
        {
          img : "https://lh3.googleusercontent.com/xsApnCm19QrZDa8uPuZ8GBoNxRbKW5aPZQsUedWh3giAEM5Oo7dEDDjAQcEdVHDvbDlHfmOOv2mqyv5owaGHWvmDfc4zZ8Nq-gRxbw=s120",
          name : "Gutter Juice",
          volume: "641.90",
          percent: "-52.59%",
          fprice: "0.180",
          owners: "7.8K",
          supply: "28.0K"
        },
        {
          img : "https://lh3.googleusercontent.com/XS6RqsT7CBpoeX8vUmWkJYldMV6h0Ko7TpagNgFZ-nEh4yrMZFrpY4gtBqyuRDJV6mx2B0ssYxoh9Z9XlO770Xe8FNSu-kj-1EVzMQ=s120",
          name : "Quirkies Originals",
          volume: "488.87",
          percent: "+65.64%",
          fprice: "1.500",
          owners: "2.4K",
          supply: "5.0K"
        },
        {
          img : "https://lh3.googleusercontent.com/Wb1h0cgCPBo1MCIWa4VyEEsfBWDRT3eZ4ZGUid6yAf6TosWzgVlEavQ1nUxYW0mUjseb_VSDjsMLbc7XFDgmV-vuZP84Bile0Lwm=s120",
          name : "Project Godjira Gen 2",
          volume: "461.44",
          percent: "+156.18%",
          fprice: "1.330",
          owners: "2.0K",
          supply: "3.3K"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>