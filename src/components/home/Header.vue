<template>
    <header class="header_home relative overflow-hidden">

        <div class="color_white"></div>
        <div class="header_text absolute m-auto top-0 grid">
            <div class="header_content m-auto " >
                <h6 class="italic animate__animated animate__backInDown animate__repeat-1">Welcome To G Hopps</h6>
                <h1>Just Experience Resort</h1>
                <div class="btn_header">
                    <a class="italic" href="">Booking</a>
                </div>
            </div>
        </div>
    </header>


</template>

<script>
export default {
    
}
</script>

<style>
    .header_home{
        width: 100%;
        height: 100vh;
        background: radial-gradient(rgba(139, 139, 139, 0.22), rgba(139, 139, 139, 0.2)),url("/src/assets/img/header_pic.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0;
    }
    .color_white{
        position: absolute;
        background: #ffffffd0;
        width: 150%;
        height: 120vh;
        rotate: -50deg;
        bottom: 0rem;
        top: -50px;
        right: 0;
        left: -60rem;
        overflow: hidden;
        z-index: 0;
        
    }
    .header_text{
        z-index: 9;
        left: 5rem;
        bottom: 5rem;

    }
    .header_content h6{
        font-size: 1.8rem;
        font-family: var(--SecondFont);
    }
    .header_content h1{
        font-size: 3rem;
        font-family: var(--PrimaryFont);
        font-weight: 500;
    }
    .btn_header{
        margin-top: 1rem;
    }
    .btn_header a{
        background: #719bf786 ; /* #719bf7 */
        padding: .8rem 1.5rem;
        font-family: var(--PrimaryFont);
        font-weight: 600;
        border-radius: 10px;
        transition: 0.5s ease-in-out;
    }
    .btn_header a:hover{
        background: #719bf7;
    }
    @media (max-width: 1070px) {
        .color_white{
            display: none;
        }
        .header_text{
            z-index: 99;
            left: 0;
            bottom: 0;
            right: 0;
            top: 0;
            text-align: center;
            z-index: 55;
        
        }
    }
    @media (max-width: 612px) {
        .header_content h6{
        font-size: 1.4rem;
        font-family: var(--SecondFont);
        }
        .header_content h1{
            font-size: 1.8rem;
            font-family: var(--PrimaryFont);
            font-weight: 500;
        }
    }


</style>



