<template>
    <nav class="flex justify-between self-center items-center absolute" :class=[scroolBack]>
        <div class="logo_nav">
            <h6 class="uppercase italic">Gjayz</h6>
        </div>
        <ul :class="[show_ul]"> 
            <li>
                <router-link  class="text-center " to="/">Home</router-link>
            </li>
            <li >
                <router-link class="text-center" to="/pricing">Pricing</router-link>
            </li>
            <li >
                <router-link class="text-center" to="/team">Team</router-link>
            </li>
            <li >
                <router-link class="text-center" to="/about">About</router-link>
            </li>
        </ul>
        <a class="icon_nav">
            <i @click="handleClick" class='bx bx-menu'></i>
        </a>
    </nav>

    <router-view/>
</template>


<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
export default {
     setup(){
        const scroolBack = ref('') 
        const show_ul = ref('')


        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            scroolBack.value = scrollTop <= 30 ? '' : 'redh';
        }
       
        const handleClick = () => {
            show_ul.value = show_ul.value ? '' : 'ul_show'
    
        }

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        })
        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll);
        }) 
        
        
        return {
        scroolBack,
        show_ul,
        handleClick
        }
    }
        

    }
</script>


<style scoped>
    nav{
        width: 100%;
        padding: 3rem 4rem;
        color: var(--whiteColor);
        z-index: 99;
        transition: 0.5s ease-in-out;
    }
    .logo_nav h6{
        font-family: var(--SecondFont);
        font-weight: 700;
        font-size: 2rem;
        color: var(--SecondColor);
    }
    ul{
        overflow: hidden;
        z-index: 99
    }
    ul li{
        display: inline;
        margin: 0 4rem;
        position: relative;
    }
    ul li::before{
        position: absolute;
        content: '';
        width: 0%;
        height: 5px;
        background: var(--SecondColor);
        bottom: -5px;
        right: 0;
        margin: auto;
        border-radius: 10px;
        transition: 0.5s ease-in-out;
    }
    a.router-link-active::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 5px;
        background: var(--SecondColor);
        bottom: -5px;
        right: 0;
        margin: auto;
        border-radius: 10px;
        transition: 0.5s ease-in-out;
    }
    ul li:hover::before{
        width: 100%;
    }
    li a{
        color: var(--blackColor);
        font-weight: 700;
        font-size: 1.2rem;
     
    }
    .icon_nav{
        display: none;
        font-size: 2.0rem;
    }
    .redh{
        background: #ffffff;
        position: fixed;
        z-index: 99;
        transition: 0.5s ease-in-out;
        padding: .5rem 3rem;
    }
    @media (max-width: 1070px) {
        nav{
            padding: .5rem 3rem;
            background-color: var(--whiteColor);
        }
        ul{
            display: block;
            position: fixed;
            width: 100%;
            height: 0vh;
            background-color: var(--whiteColor);
            top: 0;
            right: 0;
            text-align: center;
            transition: .3s all;
            z-index: 99;
            transition: 0.5s ease-in-out;
       
        }
        .ul_show{
            height: 70vh;
        }
        ul li{
            display: block;
            text-align: center;
            margin-top: 5rem;
            z-index: 99
        }
        .icon_nav{
            display: block;
            z-index: 99;
            color: var(--blackColor);
            cursor: pointer;
        }
        ul li::before{
            display: none;
        }
        ul li a{
            transition: 0.5s ease-in-out;
            font-size: 1.3rem;
        }
        ul li a:hover{
            color: var(--PrimaryColor)
        }
        a.router-link-active::before{
            display: none;
        }
    }

</style>



