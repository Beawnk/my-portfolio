<template>
  <section id="introduction" class="container">
    <div class="grid">
        <div class="media-kit item fade-in-on-scroll" style="--animation-delay: 0.1s;">
            <h3>Bianca Sineleck</h3>
            <h1>Portfólio</h1>
            <p>Desenvolvedora Front-end com experiência na criação de interfaces modernas, responsivas e focadas na usabilidade.</p>
        </div>
        <div class="picture item fade-in-on-scroll" style="--animation-delay: 0.3s;">
            <img src="/assets/images/perfil.jpg" alt="photo">
        </div>
        <div class="emote item fade-in-on-scroll" style="--animation-delay: 0.5s;">
            <img src="/assets/images/icons/waving-hand.png" alt="Waving hand">
        </div>
        <div class="color-1 item fade-in-on-scroll" style="--animation-delay: 0.7s;"></div>
        <div class="color-2 item fade-in-on-scroll" style="--animation-delay: 0.9s;"></div>
    </div>
  </section>
</template>

<script setup>
useAnimateOnScroll('.fade-in-on-scroll');
</script>

<style lang="scss" scoped>
@use '@/assets/style/main.scss' as v;

#introduction::before {
    content: '';
    width: var(--side);
    height: var(--side);
    position: absolute;
    top: var(--top);
    left: calc(var(--side) / -2);
    border-radius: var(--border-radius);
    background-color: var(--highlight-color-3);
}

.grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 25px;
    @include v.media('1050px') {
        gap: 20px;
    }
    .item {
        border-radius: var(--border-radius);
        overflow: hidden;
    }
    .media-kit {
        grid-column: span 3 / span 3;
        grid-row: span 6 / span 6;

        padding: 100px;
        background-color: var(--dark-color);
        @include v.media('1440px') {
            padding: 80px;
        }
        @include v.media('1366px') {
            padding: 50px;
        }
        @include v.media('1050px') {
            grid-column: span 6 / span 6;
            grid-row: span 3 / span 3;
            grid-row-start: 1;
        }
        h3 {
            color: var(--highlight-color-3);
            margin-bottom: 60px;

            @include v.media('700px') {
                margin-bottom: 30px;
            }
        }
        h1 {
            margin-bottom: 70px;

            @include v.media('700px') {
                margin-bottom: 30px;
            }
        }
        p {
            font-size: var(--text-big);
        }
    }

    .picture {
        grid-column: span 2 / span 2;
        grid-row: span 4 / span 4;
        grid-column-start: 4;
        @include v.media('1050px') {
            grid-column: span 4 / span 4;
            grid-row: span 2 / span 2;
            grid-column-start: 1;
            grid-row-start: 4;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .emote {
        grid-row: span 2 / span 2;
        grid-column-start: 4;
        grid-row-start: 5;

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--highlight-color-3);

        img {
            width: 100px;
            height: 100px;
        }

        @include v.media('1050px') {
            grid-column: span 2 / span 2;
            grid-row: span 1 / span 1;
            grid-column-start: 1;
            grid-row-start: 6;
        }

        @include v.media('700px') {

            img {
                width: 60px;
                height: 60px;
            }
        }
    }

    .color-1 {
        grid-column: span 2 / span 2;
        grid-row: span 2 / span 2;
        grid-column-start: 5;
        grid-row-start: 5;

        background-color: var(--highlight-color-2);

        @include v.media('1050px') {
            grid-column: span 4 / span 4;
            grid-row: span 1 / span 1;
            grid-column-start: 3;
            grid-row-start: 6;
        }
    }

    .color-2 {
        grid-row: span 4 / span 4;
        grid-column-start: 6;
        grid-row-start: 1;

        background-color: var(--highlight-color);

        @include v.media('1050px') {
            grid-column: span 2 / span 2;
            grid-row: span 2 / span 2;
            grid-column-start: 5;
            grid-row-start: 4;
        }
    }
}

</style>