<template>
  <section id="tech" class="container">
    <div class="fade-in-on-scroll" style="--animation-delay: 0.1s;">
        <h3>Competências</h3>
    </div>
    <div class="tech-grid">
        <div v-for="(tech, index) in techs"
             :key="tech.id"
             class="tech-card fade-in-on-scroll"
             :class="tech.className"
             :style="{ '--animation-delay': (index * 0.15 + 0.2) + 's' }">
            <div class="tech-image">
                <img :src="tech.image" :alt="tech.title">
            </div>
            <h4>{{ tech.title }}</h4>
        </div>
    </div>
  </section>
</template>

<script setup>
import techData from '@/data/tech.json';

const techs = ref(techData);

useAnimateOnScroll('.fade-in-on-scroll');
</script>

<style lang="scss" scoped>
@use '@/assets/style/main.scss' as v;

#tech {

    h3 {
        margin-bottom: 50px;
        text-align: center;
        color: var(--highlight-color-3);

        @include v.media('700px') {
            margin-bottom: 30px;
        }
    }

    .tech-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-template-rows: repeat(2, auto);
        gap: 30px;
        align-items: center;

        @include v.media('1050px') {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            align-items: center;
        }

        @include v.media('700px') {
            gap: 20px;
        }

        .tech-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 30px;
            background-color: var(--dark-color);
            border-radius: var(--border-radius);

            .tech-image {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 150px;
                height: 150px;
                margin-bottom: 30px;

                @include v.media('700px') {
                    width: 80px;
                    height: 80px;
                }

                img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }
            }

            h4 {
                font-size: var(--text-medium);
                color: var(--text-color);
            }
        }
    }
}
</style>