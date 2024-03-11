<template>
    <section class="container blog_container grid m-auto">
        <div class="blog_item_row sm:gap-5  xl:gap-10">
            <div class="m-auto item_blog relative overflow-hidden" v-for="(Blog, index) in Blog" :key="index">
                <div class="img relative overflow-hidden">
                    <img :src="Blog.img" :alt="Blog.img">
                     <div class="text_tittle absolute text-center m-auto">
                        <h1 class="text-center">{{ Blog.name }}</h1>
                    </div>
                </div>
                <div class="time_blog grid">
                    <h6 class=" items-center text-center">{{ Blog.time }}</h6>
                </div>
                <div class="text_pag">
                    <p class="italic">{{ Blog.pag }}</p>
                </div>
               
            </div>
        </div>
    </section>
</template>


<script>

import { reactive } from 'vue'

export default {
    setup(){
        const Blog = reactive([
            {name: 'Summer Event', time: "June 5", pag: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur sapiente, neque iusto error autem.", img: "/src/assets/img/blog_pic1.jpg" },
            {name: 'Nigth Event', time: "April 3", pag: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur sapiente, neque iusto error autem.", img: "/src/assets/img/blog_pic2.jpg" },
            {name: 'Widding Event', time: "February 1", pag: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur sapiente, neque iusto error autem.", img: "/src/assets/img/blog_pic3.jpg" },
            {name: 'Surfing Event', time: "August 12", pag: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur sapiente, neque iusto error autem.", img: "/src/assets/img/blog_pic4.jpg" }
        ]) 
        return{
            Blog
        }
    }

}
</script>

<style>
    .blog_container{
        width: 90%;
        height: auto;
        margin: 7rem auto;
    }
    .blog_item_row{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        height: 100%;
    }
    .item_blog{
        /* border: 1px solid #000000; */
        box-shadow: 2px 2px 3px 1px var(--SecondColor);
        margin: 0 .4rem;
    }
    .item_blog:hover .time_blog{
        top: -30px;
    }
   
    .text_tittle{
        bottom: -50px;
        background: var(--SecondColor);
        height: 50px;
        left: 0;
        right: 0;
        transition: 0.5s ease-in-out;
    }
    .item_blog:hover .text_tittle{
        bottom: 0;
    }
   
    .text_tittle h1{
        padding-top: 1rem;
        color: var(--whiteColor);
        font-family: var(--SecondFont);
    }
    .time_blog{
        position: absolute;
        transition: 0.5s ease-in-out;
        top: -180px;
        left: -120px;
        background: var(--SecondColor);
        width: 260px;
        height: 120px;
        rotate: -50deg;
    }
   
    .time_blog h6{
        rotate: 50deg;
        padding-left: 3.5rem;
        padding-top: 3rem;
        color: var(--whiteColor);
    }
    .text_pag p{
        font-family: var(--PrimaryFont);
        font-size: .8rem;
        padding: .8rem 1rem;
    }
    @media (max-width: 1092px) {
        .blog_item_row{
        grid-template-columns: 1fr 1fr 1fr;
        }
    }


    @media (max-width: 826px) {
        .blog_item_row{
        grid-template-columns: 1fr 1fr;
        row-gap: 4rem;
        }
    }

    @media (max-width: 556px) {
        .blog_item_row{
        grid-template-columns: 1fr;
        row-gap: 5rem;
        }
    }
    
    

</style>