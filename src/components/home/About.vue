<template>
    <section class="container m-auto about_con grid">
        <div class="about_row_item items-center grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1">
            <div class="about_item">
                <img src="/src/assets/img/home_pic_content.jpg" alt="">
            </div>
            <div class="about_item">
                <h4 class="italic relative">ABOUT US</h4>
                <h1>Welcome to <span>Tourist</span></h1>
                <p class="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ex doloribus tenetur eius qui, eum ipsa veniam dolorum ut illum quas cum architecto, aperiam expedita beatae dignissimos tempora sint, officiis voluptas commodi laboriosam distinctio asperiores.</p>
                <div class="about_count mt-7">
                    <div class="about_item_count">
                        <h6>Customer</h6>
                        <i class='bx bx-male-female'></i>
                        <p class="pt-2">{{ClassNumber1.count1}}</p>
                    </div>
                    <div class="about_item_count">
                        <h6>Resivertion</h6>
                        <i class='bx bx-desktop'></i>
                        <p class="pt-2">{{ClassNumber2.count2}}</p>
                    </div>
                    <div class="about_item_count">
                        <h6>Cottage</h6>
                        <i class='bx bxs-store'></i>
                        <p class="pt-2">{{ClassNumber3.count3 }}</p>
                    </div>
                    
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import { reactive, onMounted } from 'vue'

export default {
    setup() {
        const ClassNumber1 = reactive({
            count1: 0,
            intervalId: null
        })

        const ClassNumber2 = reactive({
            count2: 0,
            intervalId: null
        })
        const ClassNumber3 = reactive({
            count3: 0,
            intervalId: null
        })

        const startCounting = () => {
       
            ClassNumber1.intervalId = setInterval(() => {
                if (ClassNumber1.count1 < 950) {
                    ClassNumber1.count1++
                } else {
                    stopCounting(ClassNumber1)
                }
            }, 10);

            ClassNumber2.intervalId = setInterval(() => {
                if (ClassNumber2.count2 < 540) {
                    ClassNumber2.count2++
                } else {
                    stopCounting(ClassNumber2)
                }
            }, 10)

            ClassNumber3.intervalId = setInterval(() => {
                if (ClassNumber3.count3 < 82) {
                    ClassNumber3.count3++
                } else {
                    stopCounting(ClassNumber3)
                }
            }, 10)
        }

        const stopCounting = (classNumber) => {
            clearInterval(classNumber.intervalId)
        }

        onMounted(() => {
            startCounting()
        })

        return {
            ClassNumber1,
            ClassNumber2,
            ClassNumber3
        }
    }
}
</script>



<style scoped>
    .about_con{
        width: 80%;
        height: auto;
        margin: 7rem auto;

    }
    .about_row_item{
        gap: 3rem;
        margin: auto;
        height: 100%;
    }
    .about_item h4{
        font-size: 1.2rem;
        font-family: var(--SecondFont);
        font-weight: 700;
    }
    .about_item h4::before{
        content: '';
        position: absolute;
        width: 16%;
        height: 3px;
        bottom: 0;
        left: 0;
        right: 0;
        background: var(--SecondColor);
    }
    .about_item h1{
        font-size: 2.2rem;
        font-family: var(--PrimaryFont);
        font-weight: 500;
        padding: .5rem 0 0 0;
    }
    .about_item h1 span{
        color: var(--SecondColor);
    }
    .about_item p{
        font-family: var(--PrimaryFont);
        font-size: .9rem;
    
    }
    .about_count{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .about_item_count{
        margin: auto;
        width: 80%;
        height: 100%;
        flex-wrap: wrap;
        padding: .5rem;
        box-shadow: 3px 4px 3px #00000059;
        border: 1px solid #ea49f84f;
        position: relative;
        overflow: hidden;
        z-index: 51;
    }
    .about_item_count .bx{
        position: absolute;
        right: -1.5rem;
        color: var(--SecondColor);
        font-size: 3.5rem;
        bottom: .5rem;
        opacity: .8; 
        z-index: 0;
    }
    .about_item_count p{
        text-align: center;
        margin: auto;
        font-size: 1.2rem;
        z-index: 99;
    }
        @media (max-width: 796px) {
            .about_count{
            grid-template-columns: 1fr 1fr;
        }
        
    }
    @media (max-width: 498px) {
            .about_count{
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        
    }
</style>