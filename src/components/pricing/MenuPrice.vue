<template>
    <section class="container m-auto">
        <div class="container_pricing">
            <div class="pricing_tittle">
                <h1 class=" relative text-center italic">Room Pricing</h1>
            </div>
            <div class="items_row_pricing">
                <div class="item_row_pricing grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1  gap-6 m-auto items-center justify-center">
                    <div class="item_cont_pricing" v-for="(pricing, index) in Pricing" :key="index">
                        <div class="name_pricing_item">
                            <h1>{{ pricing.name }}</h1>
                            <h2 class="italic">/one day</h2>
                        </div>
                        <div class="price_item py-6 flex justify-between items-center">
                            <h5><span>Price: </span>&#8369;{{ pricing.price }}</h5>
                            <div class="price_item_start">
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star-half' ></i>
                            </div>
                        </div>
                        <p class="my-2 mx-2 italic text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit.</p>
                        <div class="rating__offer_item px-7 py-5">
                            <h3 class="relative">2-3 Bed Room</h3>
                            <h3 class="relative">Unli Wifi</h3>
                            <h3 class="relative">32 Enhance tv</h3>
                            <h3 class="relative">Air Condition</h3>
                        </div>
                        <div class="btn_pricing">
                            <a href="">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import { reactive } from 'vue'
export default {
    setup() {
        const  Pricing = reactive([
            {name: "ROOM ONE", price: "3,656", ratings: "dsad", },
            {name: "ROOM TWO", price: "4,856", ratings: "dsad", },
            {name: "ROOM THREE", price: "5,656", ratings: "dsad", }
        ])
        return{
            Pricing
        }
    }
}
</script>

<style scoped>
    .container_pricing{
        width: 80%;
        margin: auto;
        padding: 2rem 0;
    }
    .items_row_pricing{
        width: 90%;
        margin: auto;
        padding: 2rem 0;
    }
    .item_cont_pricing{
        border: 1px solid #719bf7b6;
        box-shadow: 3px 2px 3px 1px var(--SecondColor);
        border-radius: 25px;
        padding: 1.5rem;
        background: #eaf9fc;
    }
    .item_cont_pricing p{
        font-family: var(--PrimaryFont);
        font-size: .9rem;
    }


    .name_pricing_item h1{
        text-align: center;
        font-size: 1.5rem;
        font-weight: 700;
        color: #414141;
    }
    .name_pricing_item h2{
        margin-top: -.8rem;
        text-align: center;
        font-size: 1.5rem;
        color: var(--SecondColor);
    }
    .pricing_tittle h1{
        font-size: 2.5rem;
        font-family: var(--PrimaryFont);
    }
    .pricing_tittle h1::before{
        content: "";
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        bottom: 0;
        width: 15%;
        height: 5px;
        background: var(--SecondColor);
    }
    .rating__offer_item h3::before{
        content: "";
        position: absolute;
        left: -19px;
        border-radius: 50px;
        top: 3px;
        bottom: 0;
        width: 15px;
        height: 15px;
        background: var(--SecondColor);
    }
  
    .rating__offer_item h3{
        list-style: circle;
    }
    .btn_pricing{
        text-align: center;
    }

    .btn_pricing{
        margin-top: 3rem;
    }
    .btn_pricing a{
        background: #719bf7a1;
        padding: .7rem 2rem;
        margin: auto;
        align-items: center;
    }
    .price_item_start .bx{
        color: #fffb00;
    }
    @media (max-width: 1279px) {
        .container_pricing{
            width: 90%;
   
        }
        .items_row_pricing{
            width: 100%;
    
        }
    }
    @media (max-width: 1023px){
        .container_pricing{
            width: 100%;
   
        }
    }

    @media (max-width: 639px){
        .item_cont_pricing{
            margin: 0 3rem;
        }
    }
    
    
</style>