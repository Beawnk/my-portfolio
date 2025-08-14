<template>
  <section id="about" class="container">
    <div class="fade-in-on-scroll" style="--animation-delay: 0.1s;">
        <h3>Sobre mim</h3>
    </div>
    <div class="card fade-in-on-scroll" style="--animation-delay: 0.2s;">
        <p>
            Oi! Me chamo <strong>Bianca Sineleck</strong>, tenho 23 anos e sou desenvolvedora Front-End morando em Porto Alegre (RS). Apesar de estar no sul do Brasil, trabalho tranquilamente de forma remota, colaborando com pessoas e projetos de diferentes lugares.
        </p>
        <p>
            Sou apaixonada por tecnologia e sempre busco aprender algo novo. Me preocupo bastante com usabilidade, performance e escrever um código limpo e bem estruturado. Tenho experiência com sites de estilos variados, desde blogs e portfólios pessoais até sistemas mais complexos, como plataformas de e-commerce, e sempre tudo responsivo e acessível.
        </p>
    </div>
    <div class="grid">
        <div class="photo fade-in-on-scroll" style="--animation-delay: 0.3s;">
            <img src="/assets/images/perfil2.jpg" alt="">
        </div>
        <div class="card fade-in-on-scroll" style="--animation-delay: 0.4s;">
            <p>
                Mais do que apenas escrever código, me envolvo de verdade com cada projeto. Gosto de entender o contexto, conversar com quem está por trás da ideia e pensar em soluções que façam sentido para quem vai usar. Me preocupo com os pequenos detalhes, desde o comportamento de um botão até como a navegação flui, porque acredito que é isso que transforma uma interface comum em uma boa experiência. Para mim, desenvolvimento front-end é uma mistura de lógica, empatia e criatividade. E é esse equilíbrio que me motiva a continuar evoluindo como profissional.
            </p>
            <p>
                Nos meus momentos livres, gosto de ler, jogar videogame, aprender coisas novas (sempre tem alguma tecnologia ou conceito me chamando atenção!) e passar tempo com meus gatos, que vivem aparecendo enquanto trabalho.
            </p>
            <p>
                Se você busca alguém comprometida, com sensibilidade estética e atenção aos detalhes, vai ser um prazer trabalhar junto!
            </p>
        </div>
    </div>
    <div class="timeline">
        <div class="fade-in-on-scroll" style="--animation-delay: 0.5s;">
            <h3>Minha trajetória</h3>
        </div>
        <div class="timeline-container">
            <div class="timeline-item fade-in-on-scroll" style="--animation-delay: 0.6s;">
                <div class="timeline-content">
                    <h4>2018</h4>
                    <p>Concluí o Ensino Médio.</p>
                </div>
            </div>
            <div class="timeline-item fade-in-on-scroll" style="--animation-delay: 0.7s;">
                <div class="timeline-content">
                    <h4>2021</h4>
                    <p>Comecei a faculdade de Análise e Desenvolvimento de Sistemas e foquei meus estudos no desenvolvimento Front-End, uma área que rapidamente me cativou.</p>
                </div>
            </div>
            <div class="timeline-item fade-in-on-scroll" style="--animation-delay: 0.8s;">
                <div class="timeline-content">
                    <h4>2021</h4>
                    <p>Tive minha primeira experiência profissional como estagiária de Front-End na SXTECBR, onde trabalhei no desenvolvimento de sites comerciais e também tive a oportunidade de aprender sobre PHP, ganhando uma base de conhecimento em back-end.</p>
                </div>
            </div>
            <div class="timeline-item fade-in-on-scroll" style="--animation-delay: 0.9s;">
                <div class="timeline-content">
                    <h4>2022</h4>
                    <p>Após o estágio, fui contratada como Desenvolvedora Front-End Júnior. Foi um período de grande crescimento profissional, no qual desenvolvi projetos variados como blogs, e-commerces e sites institucionais.</p>
                </div>
            </div>
            <div class="timeline-item fade-in-on-scroll" style="--animation-delay: 0.9s;">
                <div class="timeline-content">
                    <h4>2024</h4>
                    <p>Decidi fazer uma pausa para focar na minha especialização. Nesse tempo, aprofundei meus estudos em JavaScript moderno e me dediquei ao ecossistema Vue.js, preparando-me para novos desafios na área.</p>
                </div>
            </div>
            <div class="timeline-item fade-in-on-scroll" style="--animation-delay: 0.9s;">
                <div class="timeline-content">
                    <h4>2025</h4>
                    <p>Hoje, busco uma nova oportunidade para aplicar minha experiência e colaborar em projetos desafiadores. Estou sempre aprendendo e pronta para contribuir na criação de ótimas experiências digitais.</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup>
useAnimateOnScroll('.fade-in-on-scroll');
</script>

<style lang="scss" scoped>
@use '@/assets/style/main.scss' as v;

#about {
    h3 {
        margin-bottom: 50px;
        text-align: center;
        color: var(--highlight-color-2);
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 50px;
        align-items: stretch;
        margin-bottom: 80px;

        @include v.media('1200px') {
            gap: 30px;
            margin-bottom: 50px;
        }

        @include v.media('1050px') {
            display: flex;
            flex-direction: column;
        }
    }

    .card {
        grid-column: span 3;
        padding: 50px;
        background-color: var(--dark-color);
        border-radius: var(--border-radius);
        color: var(--text-color);
        font-size: var(--text-medium);
        line-height: 1.6;

        @include v.media('1200px') {
            padding: 30px;
        }
        
        &:not(.grid .card) {
            margin-bottom: 50px;

            @include v.media('1200px') {
                margin-bottom: 30px;
            }
        }

        p {
            margin-bottom: 20px;

            &:last-child {
                margin-bottom: 0;
            }
        }

        strong {
            color: var(--highlight-color-3);
        }
    }
    
    .photo {
        grid-column: span 2;
        border-radius: var(--border-radius);
        overflow: hidden;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .timeline {
        margin-top: 50px;

        @include v.media('700px') {
            margin-top: 30px;
        }
    }

    .timeline-container {
        position: relative;
        max-width: 900px;
        margin: 0 auto;
        padding: 40px 0;

        &::after {
            content: '';
            position: absolute;
            width: 3px;
            background-color: var(--highlight-color-2);
            opacity: 0.3;
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -1.5px;
            z-index: 1;
        }
    }

    .timeline-item {
        padding: 10px 0;
        position: relative;
        width: 50%;
        z-index: 2;

        @include v.media('1050px') {
            width: 100%;
            padding: 20px 0;
            
        }
        
        &::after {
            content: '';
            position: absolute;
            width: 15px;
            height: 15px;
            right: -7px;
            background-color: var(--highlight-color-2);
            top: 25px;
            border-radius: 50%;
            z-index: 1;

            @include v.media('1050px') {
                display: none;
            }
        }
    }

    /* Item à esquerda */
    .timeline-item:nth-child(odd) {
        left: 0;
        padding-right: 40px;
        text-align: right;

        @include v.media('1050px') {
            left: 50%;
            transform: translateX(-50%);
            padding-right: 0;
            text-align: center;
        }
    }

    /* Item à direita */
    .timeline-item:nth-child(even) {
        left: 50%;
        padding-left: 40px;

        &::after {
            left: -8px;
        }

        @include v.media('1050px') {
            left: 50%;
            transform: translateX(-50%);
            padding-left: 0;
            text-align: center;
        }
    }

    .timeline-content {
        padding: 20px 30px;
        background-color: var(--dark-color);
        border-radius: var(--border-radius);
        position: relative;
        z-index: 2;

        h4 {
            color: var(--highlight-color-3);
            font-size: var(--text-large);
            margin-bottom: 10px;
        }

        p {
            font-size: var(--text-small);
            line-height: 1.6;
            color: var(--text-color);
        }
    }
}
</style>