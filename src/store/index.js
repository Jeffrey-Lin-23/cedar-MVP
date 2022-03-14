import {createStore} from "vuex";

const url = "http://localhost:3000/user";
const headers = {Accept :"apllication/json"};

const store = createStore({
    state:{
        user:'',
        collection:[{
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
                img : "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120",
                name : "CryptoPunks",
                volume: "1,022.70",
                percent: "-86.20%",
                fprice: "69.690",
                owners: "3.4K",
                supply: "10.0K"
            }
        ],
        nft:{
            "CyberBrokers" : [
                {
                    img : "https://storage.opensea.io/files/504355c92577a160ee54131d3f8eb1aa.svg",
                    name : "Roman Ultraviolet Ender",
                    num: "6677",
                    price: "4.22",
                },
                {
                    img : "https://storage.opensea.io/files/afc867312addeac2cbe03c054a7cd11d.svg",
                    name : "Matias Drooling",
                    num: "5179",
                    price: "4.25",
                },
                {
                    img : "https://storage.opensea.io/files/7d8d48e3c4dee76a35b9d8c546fd76a6.svg",
                    name : "Reginald of Mckee",
                    num: "7852",
                    price: "4.25",
                },
                {
                    img : "https://storage.opensea.io/files/0668ebdfd4cd667fc49e8ab90efe771c.svg",
                    name : "Spark",
                    num: "7374",
                    price: "4.27",
                },
                {
                    img : "https://storage.opensea.io/files/8c43197b1821b1b0b8d73223f4f9d7ed.svg",
                    name : "Aspect from Tyrrell",
                    num: "7168",
                    price: "4.3",
                },
                {
                    img : "https://storage.opensea.io/files/0005bd9ecefe1ac618898fb8a5a1f6f7.svg",
                    name : "Mellow from Sutton",
                    num: "5893",
                    price: "4.39",
                },
                {
                    img : "https://storage.opensea.io/files/f747403869d6b97a6a60201b8d969443.svg",
                    name : "Redolent",
                    num: "8469",
                    price: "4.35",
                },
                {
                    img : "https://storage.opensea.io/files/d26fefba4368c2562bb75ee43a6d3c30.svg",
                    name : "Kemp of Spokesock",
                    num: "7807",
                    price: "4.4",
                },{
                    img : "https://storage.opensea.io/files/7ef3f60be6406274ab2e6451912b0596.svg",
                    name : "Victoria Incense Chance",
                    num: "9743",
                    price: "4.4",
                },
                {
                    img : "https://storage.opensea.io/files/a8a58ce28090b513c11aca36c73acba3.svg",
                    name : "Band Peppery",
                    num: "6960",
                    price: "4.4",
                }
            ],
            "Mutant%20Ape%20Yacht%20Club": [{
                img : "https://lh3.googleusercontent.com/lJwbzNo8qrugerTaOt5Ljq7IdwcLNzZnvbrwyvTpk5zD1RQffUXDXKSCCxoGVnOya-aaaNc5kiZtNVm8ZwDSseHKHIwF2MuMNdPM",
                name : "9665",
                num: "13572",
                price: "19.98",
            },
                {
                    img : "https://lh3.googleusercontent.com/Ji_VIQxnEwEcLXsOeNWqxNsbwBFiBgxPh6IG4r521YO-k5zvaQUm1eWs6BxNAWgQeD7XaYl9Gk6tbgq68KheoieqcsntTOd2d2vz0qs",
                    name : "20744",
                    num: "14503",
                    price: "19.98",
                },
                {
                    img : "https://lh3.googleusercontent.com/FmxUYyS1H7S41795vJrfRtX-i52NFrH_s-c3ITW1OOxPPXKO6VLhxLLbe8SdBpwDvYzpf6tvb0Hpl1pC3FA2x2yGh1jkI4Yttu0pdX4",
                    name : "25684",
                    num: "14028",
                    price: "19.99",
                },
                {
                    img : "https://lh3.googleusercontent.com/RV0T7ouuAunL5VA5xwT616CL7hMdhmvJC67YvZnohCiXTPHHOFHSgaZLf1azBX2iR2U_lHodKE-vTUC-GxidgJVWiHJhe39y7yAq",
                    name : "5024",
                    num: "16130",
                    price: "20",
                },
                {
                    img : "https://lh3.googleusercontent.com/i0LzvvGvOJmVj4df-55RdDJC70L5QgfGInG0-qCglYM3AqfVha9RxRLizqYqPYZmeMtvCKDbg4n60zs1_X3St26Sj6g2-zRw17eRdg",
                    name : "5519",
                    num: "8975",
                    price: "20.5",
                },
            ],
            "Gutter%20Juice":[{
                img : "https://lh3.googleusercontent.com/baonpaDc7L5aBAKzYHLu4upQpa_-6NfIqRgmvHGJ6Aexc0-gz2azqWQMxPjEuExo8fTW_Y3UaEIUuM-BDbUz2oCCg-u5ZTfhc9_nGw",
                name : "Gutter Juice #5191",
                num: "5191",
                price: "0.209",
            },{
                img : "https://lh3.googleusercontent.com/vV2Reqi1Js2r1BKiyHhV6NMsIsnCrts7g57ZCN8Ne6qfw3APnmPWWk20P-jQYFQKSKiw2esPHd1soCZopPvTD8ETw0DAKTfqUMlJiQ",
                name : "Gutter Juice #24768",
                num: "24768",
                price: "0.21",
            },
            ],
            "Quirkies%20Originals":[
                {
                    img : "https://lh3.googleusercontent.com/myO9T55OrsboeUb02akNKUmF2Q0vl6QB6tMEHZhyfPwxXCABUjnHJnwSIYl7reXf-8_UM0KPPkFCHqx-Mw25in7W7s4aIzDIZ8CK",
                    name : "664",
                    num: "2211",
                    price: "1.27",
                },
                {
                    img : "https://lh3.googleusercontent.com/vJKk_5wZPfJ7uDuA1Vhs6s9AM9ejaUHWxuEerqboSOELy9sLAshNF6DP3RB1fpAZ8M_Yeyc0aTPDSlPg0Y1lI88yFXsUyUoY54Si0Q",
                    name : "3691",
                    num: "4111",
                    price: "1.279",
                },
                {
                    img : "https://lh3.googleusercontent.com/1W1iQyyYXh37wGVq8gozG0Q_dKNxJ7BpxDd05d8djWEbOoXsJ4s7S1UUfBundVmdAy5csFNQrTAbwFRIHOMbLI-5wWLRJeDkFr4EeQ",
                    name : "2156",
                    num: "3293",
                    price: "1.3",
                },
            ],
            "CryptoPunks":[
                {
                    img : "https://lh3.googleusercontent.com/tNBFzO62Xa8HEdXA4slHiWYQKD3dy_ezkTzdJBGzLoYKWorvQvg-0BTcgotWXY89_q91Ebbe_H323OhbvCArcplb",
                    name : "CryptoPunk #3502",
                    num: "3437",
                    price: "69.69",
                },
                {
                    img : "https://lh3.googleusercontent.com/6q4J2IL7nE60s6LnbNlfXO98gsikRbrIQzGm7TtnZ2-1oqABO_8jBL8qYapf1lr9h5_Gtg-xElzqZs_tpCAMA9gTEFgwsTkroySxpg",
                    name : "CryptoPunk #423",
                    num: "7227",
                    price: "69.95",
                },
                {
                    img : "https://lh3.googleusercontent.com/5V8zG6PW8DQHmNm0ytvkNvW826at_7yjFH0s_a-UkK1_hHpIvBLXTWBKda8GB0t3otBnHAEVt9KyxJCQFddKXBUITAFf95ilJZM_dQ",
                    name : "CryptoPunk #4541",
                    num: "4031",
                    price: "70",
                },
            ]
        },
        detail:{

        }
    },
    getters:{
        getCurrentUser:state => sessionStorage.getItem('user'),
        getCollection:state => state.collection,
        getNFT:state => state.nft,
        getDetail:state => state.detail,
    },
    actions:{
        async connectWallet(state){
            // const user = await fetch(url, { headers});
            // const u = await user.json();
            // state.commit("saveUser", u[0].id);
            state.commit("saveUser", 'Oxec...2a91');
            sessionStorage.setItem('user','Oxec...2a91');
        },
        disconnectWallet(state){
            state.commit("saveUser", '');
            sessionStorage.setItem('user','');
        }
    },
    mutations:{
        saveUser(state,payload){
            state.user = payload;
        }
    },
    modules:{},
})

export default store;