<template>
    <section class="container m-auto">
        <div class="contaner_carousel m-auto">
            <div class="tittle_carousel">
                <h1 class="m-auto text-center relative mt-10 italic">Testimonial</h1>
            </div>
            <div class="carousel_items overflow-hidden grid m-auto">
                <div class="carousel_slide" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                    <div class="carousel_item self-center text-center" v-for="(ItemCarosel, index) in itemCarosel" :key="index">
                        <div class="img_carousel">
                            <img class="m-auto" :src="(ItemCarosel.pic)" :alt="(ItemCarosel.pic)">
                        </div>
                        <div class="name_par_carousel">
                            <h1 class="py-3">{{ ItemCarosel.name }}</h1>
                            <p class="italic">{{ ItemCarosel.pag }}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>



<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const itemCarosel = ref([
        { pic: '/src/assets/img/carousel_pic.jpg', name: 'Girlie Grace Dangcalan', pag: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi est nisi qui, rem commodi facere? Tenetur provident dolorum veritatis quisquam quibusdam, fugiat temporibus rerum, fugit accusamus modi obcaecati consectetur, aliquid aliquam quam. Id, cum?' },
        { pic: '/src/assets/img/carousel_pic.jpg', name: 'Girlie Grace Dangcalan', pag: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi est nisi qui, rem commodi facere? Tenetur provident dolorum veritatis quisquam quibusdam, fugiat temporibus rerum, fugit accusamus modi obcaecati consectetur, aliquid aliquam quam. Id, cum?' },
        { pic: '/src/assets/img/carousel_pic.jpg', name: 'Girlie Grace Dangcalan', pag: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi est nisi qui, rem commodi facere? Tenetur provident dolorum veritatis quisquam quibusdam, fugiat temporibus rerum, fugit accusamus modi obcaecati consectetur, aliquid aliquam quam. Id, cum?' }
    ]);
    
    const currentIndex = ref(0)
    const autoplayInterval = ref(null)
    const autoplaySpeed = 3000
    const direction = 1

    const startAutoplay = () => {
        autoplayInterval.value = setInterval(() => {
            next()
        }, autoplaySpeed)
    };

    const stopAutoplay = () => {
        clearInterval(autoplayInterval.value)
    };

    const next = () => {
        currentIndex.value += direction;
        if (currentIndex.value >= itemCarosel.value.length) {
            currentIndex.value = 0
        }
    };

    onMounted(() => {
        startAutoplay()
    })

    onBeforeUnmount(() => {
        stopAutoplay()
    })

    return { itemCarosel, currentIndex, startAutoplay, stopAutoplay, next }
  }
};
</script>


<style scoped>
    .contaner_carousel{
        width: 80%;
        height: auto;
    }
    .tittle_carousel h1{
        font-size: 1.5rem;
        font-family: var(--PrimaryFont);
    }
    .tittle_carousel h1::before{
        content: "";
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        bottom: 0;
        width: 10%;
        height: 5px;
        background: var(--SecondColor);
    }
  
    .carousel_items{
        height: 60vh;
        width: 80%;
    }
    .carousel_slide{
        display: flex;
        transition: transform 0.5s ease;
    }
    .carousel_item{
        flex: 0 0 100%;
    }
    .img_carousel img{
        width: 60px;
        height: 60px;
        border-radius: 100px;
    }

    .name_par_carousel{
        width: 65%;
        margin: auto;
    }
    .name_par_carousel h1{
        font-family: var(--SecondFont);
        font-size: 1.4rem;
    }
    .name_par_carousel p{
        font-family: var(--PrimaryFont);
        font-size: .8rem;
    }
    @media (max-width: 1090px) {
        .name_par_carousel{
            width: 100%;
            margin: auto;
        }
    }
    @media (max-width: 767px) {
        .carousel_items{
            width: 100%;
        }
    }
</style>





