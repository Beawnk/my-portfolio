<template>
  <section id="about" class="container">
    
    <div class="fade-in-on-scroll" style="--animation-delay: 0.1s;">
      <h3>{{ about.title }}</h3>
      <ContentRenderer :value="about" />
    </div>

    <div class="card fade-in-on-scroll" style="--animation-delay: 0.2s;">
      <p v-for="(text, i) in about.meta.intro" :key="i" v-html="text" />
    </div>

    <div class="grid">
      
      <div class="photo fade-in-on-scroll" style="--animation-delay: 0.3s;">
        <img :src="about.meta.image" alt="">
      </div>

      <div class="card fade-in-on-scroll" style="--animation-delay: 0.4s;">
        <p v-for="(text, i) in about.meta.about" :key="i">
          {{ text }}
        </p>

        <p v-for="(text, i) in about.meta.cta" :key="'cta-' + i">
          {{ text }}
        </p>
      </div>

    </div>

    <div class="timeline">
      <div class="fade-in-on-scroll" style="--animation-delay: 0.5s;">
        <h3>Minha trajetória</h3>
      </div>

      <div class="timeline-container">
        <div
          v-for="(item, i) in about.meta.timeline"
          :key="i"
          class="timeline-item fade-in-on-scroll"
          :style="`--animation-delay: ${0.6 + i * 0.1}s`"
        >
          <div class="timeline-content">
            <h4>{{ item.year }}</h4>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
const { data: about } = await useAsyncData(() => queryCollection('content').path('/about').first())

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

        :deep(strong) {
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