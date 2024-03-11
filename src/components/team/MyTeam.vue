<template>
    <section class="container m-auto pb-10">
        <div class="my_team_con">
            <div class="my_team_tittle py-9">
                <h1 class="relative text-center italic">My Team</h1>
            </div>
            <div class="my_team_row_con">
                <div class="my_team_items grid">
                    <div class="item_my_team relative overflow-hidden" v-for="(myteam, index) in myTeam" :key="index" >
                        <div class="img_my_team">
                            <img :src="(myteam.img)" alt="">
                        </div>
                        <div class="name_link grid">
                            <div class="names_team text-center">
                                <h1>{{ myteam.name }}</h1>
                                <h5 class="italic">{{ myteam.position }}</h5>
                            </div>
                            <div class="links_team items-center m-auto self-center pt-10">
                                <a href=""> <i class='bx bxl-facebook'></i> </a>
                                <a href=""> <i class='bx bxl-twitter'></i> </a>
                                <a href=""> <i class='bx bxl-linkedin' ></i> </a>
                            </div>
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
        setup(){
            const myTeam = reactive([
                {name: 'Gerald Glen Dangcalan', position: "Founder", fblink: "sadsads", twlink: "sadsads", lnlink: "sadsads", img: '/src/assets/img/team/Pic_Team1.jpg'},
                {name: 'Vina Tamayo', position: "Manager", fblink: "sadsads", twlink: "sadsads", lnlink: "sadsads", img: '/src/assets/img/team/Pic_Team2.jpg'},
                {name: 'Jerry Sumaganday Jr', position: "HR Executive", fblink: "sadsads", twlink: "sadsads", lnlink: "sadsads", img: '/src/assets/img/team/Pic_Team3.jpg'},
                {name: 'Mary Chell Castro', position: "Front Desk", fblink: "sadsads", twlink: "sadsads", lnlink: "sadsads", img: '/src/assets/img/team/Pic_Team4.jpg'},
                {name: 'Femar Libarnes', position: "Maintenance", fblink: "sadsads", twlink: "sadsads", lnlink: "sadsads", img: '/src/assets/img/team/Pic_Team5.jpg'},
                {name: 'Rhea Mae Tamayo', position: "Consultant", fblink: "sadsads", twlink: "sadsads", lnlink: "sadsads", img: '/src/assets/img/team/Pic_Team6.jpg'},
                {name: 'Jhunmar Dagohoy', position: "Designer", fblink: "sadsads", twlink: "sadsads", lnlink: "sadsads", img: '/src/assets/img/team/Pic_Team7.jpg'},
                {name: 'Primerose Obendecio', position: "Marketing", fblink: "sadsads", twlink: "sadsads", lnlink: "sadsads", img: '/src/assets/img/team/Pic_Team8.jpg'}
            ])
            return{
                myTeam
            }
        }
    }
</script>


<style scoped>
    .my_team_tittle h1{
        font-size: 2.5rem;
        font-family: var(--PrimaryFont);
    }
    .my_team_tittle h1::before{
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
  
    .my_team_row_con{
        width: 80%;
        margin: auto;
    }
    .my_team_items{
         grid-template-columns: repeat(4, 1fr);
         gap: 30px;
    }
    .name_link{
        position: absolute;
        left: 0;
        right: 0;
        bottom: -150px;
        backdrop-filter: blur(20px);
        background: #719bf742;
        height: 150px;
        transition: 0.5s ease-in-out;
        overflow: hidden;
    }
    .item_my_team:hover .name_link{
        bottom: 0px;
    }
    .names_team{
        position: absolute;
        top: -55px;
        left: 0;
        right: 0;
        padding-top: .5rem;
        transition: 0.9s ease-in-out;
    }

    .item_my_team:hover .names_team{
        top: 0px;
    }
    .names_team h1{
        font-family: var(--SecondFont);
        font-weight: 600;
    }
    .names_team h5{
        font-family: var(--PrimaryFont);
        font-weight: 500;
    }
    .links_team a .bx{
        margin: 0 1.3rem;
        background: var(--whiteColor);
        padding: .4rem .4rem;
        border-radius: 50px;
        font-size: 1.3rem;
        transition: 0.5s ease-in-out;
    }


    .links_team a:nth-child(1) .bx:hover{
        background: #4267B2;
    }
    .links_team a:nth-child(2) .bx:hover{
        background: #1DA1F2;
    }
    .links_team a:nth-child(3) .bx:hover{
        background: #0072b1;
    }
    @media (max-width: 1279px) {
        .my_team_row_con{
            width: 100%;
        }
    }
    @media (max-width: 1023px) {
        .my_team_items{
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }
    }
    @media (max-width: 767px) {
        .my_team_items{
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
        }
    }
    @media (max-width: 497px) {
        .my_team_items{
            grid-template-columns: repeat(1, 1fr);
            
        }
        .item_my_team{
            margin: 0 4rem;
        }
    }
    
    
</style>