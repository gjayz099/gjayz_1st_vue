<template>
    <section class="service_container service_container pt-5 pb-28">
        <div class="service_title pt-5 pb-5">
            <h1 class="text-center relative italic mb-10">All Service</h1>
        </div>
        <div class="service_row">
            <div class="service_items text-center" v-for="(service, index) in Service" :key="index">
                <div class="service_item items-center m-auto">
                    <i class=' text-7xl text-center m-auto' :class="service.icon"></i>
                    <h1  class="name_service text-center m-auto">{{ service.name }}</h1>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import { reactive } from 'vue'
export default {
    setup(){
        const Service = reactive([
            { name: 'Quality Food Restaurant', icon: 'bx bx-hard-hat'},
            { name: '24-Hour Front Desk', icon: 'bx bx-chart'},
            { name: 'Good Resort Spot', icon: 'bx bx-walk'},
            { name: 'Offer Overnight', icon: 'bx  bxs-hotel'}
        ])  

        return{
            Service
        }
    }
}
</script>
<style scoped>
    .service_container{
        width: 90%;
        margin: auto;
    }
    .service_title h1{
        font-size: 2.5rem;
        font-family: var(--PrimaryFont);
    }
    .service_title h1::before{
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
    .service_row{
        display: grid;
        margin: auto;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-content: space-between;
    }
    .service_item i{
        color: var(--SecondColor);
    }
    @media (max-width: 760px) {
        .service_row{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 410px) {
        .service_row{
            grid-template-columns: 1fr;
        }
    }
    
</style>


