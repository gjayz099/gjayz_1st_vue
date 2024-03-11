<template>
    <section class="container_blogbot pt-5 pb-5">
        <div class="blogbot_top"></div>
        <div class="blogbot_img grid">
            <div class="blogbot_text items-center m-auto">
                <h6 class="italic">Resort And Neture</h6>
                <h1 class="text-center">Fresh And Quiet Nature</h1>
                <a class="italic btn_blogbot" href="">Pricing</a>
            </div>
        
        </div>
        <div class="blogbot_bot"></div>
    </section>
</template>


<style scoped>
    .container_blogbot{
        position: relative;
        overflow: hidden;
    }
    .blogbot_top{
        width: 100%;
        height: 60px;
        background: var(--whiteColor);
        position: absolute;
        top: -50px;
        left: -6px;
        right: 0;
        bottom: 0;
        rotate: -5deg;
    }
    .blogbot_bot{
        width: 100%;
        height: 60px;
        /* background: black; */
        background: var(--whiteColor);
        position: absolute;
        right: -5px;
        bottom: -50px;
        rotate: -5deg;
    }
    .blogbot_img{
        width: 100%;
        min-height: 60vh;
        background: radial-gradient(rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52)),url("/src/assets/img/blogbot_pic.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0;
    }
    .blogbot_text{
        background: #99989880;
        padding: 2rem;
    }
    .blogbot_text h6{
        font-family: var(--SecondFont);
        color: var(--SecondColor);
    }
    .blogbot_text h1{
        font-size: 2.5rem;
        font-family: var(--PrimaryFont);
    }
    .btn_blogbot{
        background: var(--SecondColor);
        padding: .2rem 1.5rem;
        font-size: 1.3rem;
        font-family: var(--PrimaryFont);
    }
    @media (max-width: 568px) {
        .blogbot_text h1{
            font-size: 2rem;
        }
        .btn_blogbot{
            font-size: .9rem;
        }
    }

    @media (max-width: 438px) {
        .blogbot_text h1{
            font-size: 1.5rem;
        }
    }
</style>