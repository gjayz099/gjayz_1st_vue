<template>
    <section class="container_footer">
        <div class="container m-auto">
            <footer class="footer">
                <div class="container_row grid xl:grid-cols-4 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1   m-auto">
                    <div class="footer-col">
                        <h4 class="uppercase pb-3">company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">my team</a></li>
                            <li><a href="#">24/7 online</a></li>
                            <li><a href="#">visit website</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4 class="uppercase pb-3">get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">booking</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">order status</a></li>
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4 class="uppercase pb-3">online shop</h4>
                        <ul>
                            <li><a href="#">download</a></li>
                            <li><a href="#">changelog</a></li>
                            <li><a href="#">github</a></li>
                            <li><a href="#">all version</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4 class="uppercase pb-3">follow us</h4>
                        <div class="social-links">
                            <a href="#"><i class='bx bxl-facebook-square'></i></a>
                            <a href="#"><i class='bx bxl-twitter'></i></a>
                            <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                            <a href="#"><i class='bx bxl-linkedin-square'></i></a>
                        </div>
                        <div class="email_num">
                            <h6>support@gmail.com</h6>
                            <h6>+639514616792</h6>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        <div class="bot-footer">
            <div class="name text-center">
                <h6>©2020. | Designed By: Gerald Glen Dangcalan. | All rights reserved.</h6>
            </div>
        </div>
    </section>
</template>


<style scoped>
    .container_footer{
        width: 100%;
        background: radial-gradient(rgb(0,0,0,.7), rgb(0,0,0,.7)),url('/src/assets/img/footer_img.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    footer{
        width: 85%;
        margin: auto;
    }

    .footer-col{
        margin: 0 auto;
    }
    .container_row{
        padding: 4rem 0;
    }
    .footer-col h4{
        color: var(--whiteColor);
        font-family: var(--SecondFont);
        font-size: 1.3rem;
    }
    .footer-col ul li{
        padding: .5rem 0;
    }
    .footer-col ul li a{
        color: var(--whiteColor);
        font-weight: 350;
        font-style: italic;
        font-family: var(--PrimaryFont);
    }

    .footer-col .social-links a{
        font-size: 2.5rem;
        color: var(--SecondColor);
        margin: 0 .5rem;
    }

    .footer-col .social-links a:nth-child(1):hover{
        color: #4267B2;
    }
    .footer-col .social-links a:nth-child(2):hover{
        color: #1DA1F2;
    }
    .footer-col .social-links a:nth-child(3):hover{
        color: #C13584;
    }
    .footer-col .social-links a:nth-child(4):hover{
        color: #0A66C2;
    }
    .footer-col .email_num h6{
        color: var(--whiteColor);
        font-size: .9rem;
    }
    .bot-footer{
        background: var(--whiteColor);
    }
    @media (max-width: 1023px) {
        footer{
            width: 95%;
            margin: auto;
        }
    }
    @media (max-width: 1017px) {
        .footer-col{
            margin: 0;
        }
    }
    @media (max-width: 639px) {
        .footer-col{
            margin-left: 3.3rem;
        }
    }
    @media (max-width: 449px) {
        .bot-footer .name h6{
            font-size: .7rem;
        }
    }
    
    

    


</style>