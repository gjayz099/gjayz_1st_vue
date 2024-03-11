<template>
    <header class="team_header grid">
        <div class="team_cont text-center m-auto">
            <h1 class="italic pt-28">About</h1>
            <div class="ul_team_header">
                <ul class="mt-5">
                    <a class="mx-10" href="">Team</a>
                    <a class="mx-10" href="">Home</a>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped>
    .team_header{
        background: radial-gradient(rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0.3)),url('/src/assets/img/header_pic.jpg');
        width: 100%;
        height: 50vh;
        background-size: cover;
        background-position: center;

    }
    .team_cont h1{
        font-size: 3rem;
        font-family: var(--PrimaryFont);
    }
</style>