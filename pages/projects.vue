<template>
  <section id="projects" class="container">
    <div class="anim-1">
        <h3>Projetos</h3>
    </div>
    <div class="anim-2 projects-grid">
        <a class="project-card one type-3" href="">
            <div class="project-image">
                <img src="/assets/images/projects/byte-shop.png" alt="Project 1">
            </div>
            <div class="project-info">
                <h4>Byte shop</h4>
                <p>Um projeto de site de venda de itens tecnológicos com o objetivo de aprimorar minhas habilidades em Vue.js. O projeto conta com funcionalidades completas de listagem e gerenciamento de produtos, criação de conta e edição de dados de usuário, utilizando o Supabase como backend para autenticação, banco de dados e integração em tempo real.</p>
                <p class="tech">Vue.js, SASS, Supabase</p>
            </div>
        </a>
        <a class="project-card two type-1" href="">
            <div class="project-image">
                <img src="/assets/images/projects/dragon-game.png" alt="Project 2">
            </div>
            <div class="project-info">
                <h4>Dragon Repeller Game</h4>
                <p>Um jogo de RPG simples e curto, desenvolvido com JavaScript puro, que inclui um sistema de batalha, inventário e escolhas.</p>
                <p class="tech">JavaScript, CSS</p>
            </div>
        </a>
        <a class="project-card three type-1" href="">
            <div class="project-image">
                <img src="/assets/images/projects/high-tech.png" alt="Project 3">
            </div>
            <div class="project-info">
                <h4>High Tech</h4>
                <p>Meu primeiro projeto feito com Vue.js, uma loja simples com sistema de listagem de produtos e carrinho.</p>
                <p class="tech">Vue.js</p>
            </div>
        </a>
        <a class="project-card four type-1" href="">
            <div class="project-image">
                <img src="/assets/images/projects/slider.png" alt="Project 4">
            </div>
            <div class="project-info">
                <h4>Slide show</h4>
                <p>Um carrossel de imagens responsivo desenvolvido com JavaScript puro.</p>
                <p class="tech">HTML, CSS, JavaScript</p>
            </div>
        </a>
        <a class="project-card five type-2" href="">
            <div class="project-image">
                <img src="/assets/images/projects/coded-up.png" alt="Project 4">
            </div>
            <div class="project-info">
                <h4>Coded Up</h4>
                <p>Uma plataforma de cursos online sobre desenvolvimento full-stack e design UX/UI. Feito com Vue.js.</p>
                <p class="tech">Vue.js</p>
            </div>
        </a>
        <a class="project-card six type-4" href="">
            <div class="project-image">
                <img src="/assets/images/projects/webapp.png" alt="Project 4">
            </div>
            <div class="project-info">
                <h4>IEmergency App</h4>
                <p>Um web app de segurança pública feito para meu Trabalho de Conclusão de Curso (TCC). A plataforma permite que usuários façam denúncias geolocalizadas de ocorrências como violência doméstica, acidentes e incêndios, encaminhando as informações para as autoridades competentes. O aplicativo também notifica outros usuários próximos ao local do incidente, criando uma rede de alerta comunitário. Um botão de emergência envia a localização e uma mensagem opcional para a polícia ou contatos de emergência. O projeto foi construído com Vue.js, SASS para estilização e Supabase para autenticação e gerenciamento de banco de dados.</p>
                <p class="tech">Vue.js, SASS, Supabase</p>
            </div>
        </a>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use '@/assets/style/main.scss' as v;

$tech-colors: var(--highlight-color), var(--highlight-color-2), var(--highlight-color-3), var(--link-color), var(--highlight-color), var(--highlight-color-2);

#projects {
    
    h3 {
        margin-bottom: 50px;
        text-align: center;
        color: var(--link-color);
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(6, minmax(0, 1fr));
        grid-template-rows: repeat(4, 1fr);
        gap: 40px;

        .project-card {
            display: block;
            border-radius: var(--border-radius);
            overflow: hidden;
            background-color: var(--dark-color);
            color: var(--light-color);
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.05);
            }
            
            .project-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .tech {
                font-size: var(--text-small);
                font-family: var(--font-family-bold);
                margin-bottom: 0;
            }
            @for $i from 1 through length($tech-colors) {
              &:nth-child(#{$i}) .tech {
                color: nth($tech-colors, $i);
              }
            }

            .project-info {
                padding: 30px;
                h4 {
                    font-size: var(--text-medium);
                    margin-bottom: 10px;
                }
                p {
                    font-size: var(--text-small);
                    margin-bottom: 15px;
                    line-height: normal;
                }
            }

            &.type-1 {
                display: flex;
                align-items: center;
                flex-direction: row-reverse;

                .project-image {
                    // width: 30%;
                    margin: 30px;
                    margin-left: 0;
                    border-radius: 20px;
                    width: 150px;
                    height: 150px;
                    overflow: hidden;
                }

                .project-info {
                    width: calc(100% - 180px);
                }
            }

            &.type-3 {

                .project-image {
                    height: 400px;
                }
            }

            &.type-4 {

                .project-image {
                    height: 600px;
                }
            }

            &.one {
                grid-area: 1 / 1 / 4 / 3;
            }

            &.two {
                grid-area: 4 / 1 / 5 / 3;
            }

            &.three {
                grid-area: 1 / 3 / 2 / 5;
            }

            &.four {
                grid-area: 2 / 3 / 3 / 5;
            }

            &.five {
                grid-area: 3 / 3 / 5 / 5;
            }

            &.six {
                grid-area: 1 / 5 / 5 / 7;
            }
        }
    }
}
</style>