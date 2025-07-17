<template>
  <section id="projects" class="container">
    <div class="fade-in-on-scroll" style="--animation-delay: 0.1s;">
        <h3>Projetos</h3>
    </div>

    <div class="projects-grid">
        <a v-for="(project, index) in projects"
           :key="project.id"
           :href="project.projectUrl"
           target="_blank"
           class="project-card fade-in-on-scroll"
           :class="project.className"
           :style="{ '--animation-delay': (index * 0.15 + 0.2) + 's' }">

            <div class="project-image">
                <img :src="project.imageUrl" :alt="project.title">
            </div>
            <div class="project-info">
                <h4>{{ project.title }}</h4>
                <p>{{ project.description }}</p>
                <p class="tech">{{ project.tech }}</p>
            </div>
        </a>
    </div>
  </section>
</template>

<script setup>
import projectsData from '@/data/projects.json';
const projects = ref(projectsData);

useAnimateOnScroll('.fade-in-on-scroll');
</script>

<style lang="scss" scoped>
@use '@/assets/style/main.scss' as v;

.fade-in-on-scroll.project-card {
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.6s ease-out, 
              transform 0.6s ease-out, 
              background-color 0.3s ease;
              
  transition-delay: var(--animation-delay, 0s);
}

.fade-in-on-scroll.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.fade-in-on-scroll.has-animated {
  transition-delay: 0s !important;
}


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

        @include v.media('1480px') {
            gap: 30px;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            grid-template-rows: repeat(8, minmax(0, 300px));
        }

        .project-card {
            display: block;
            border-radius: var(--border-radius);
            overflow: hidden;
            background-color: var(--dark-color);
            color: var(--light-color);

            &:hover {
                transform: scale(1.03);

                h4, p, .tech {
                    color: var(--background-color) !important;
                }
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
                transition: var(--transition);
            }

            .project-info {
                padding: 30px;
                h4 {
                    font-size: var(--text-medium);
                    margin-bottom: 10px;
                    transition: var(--transition);
                }
                p {
                    font-size: var(--text-small);
                    margin-bottom: 15px;
                    line-height: normal;
                    transition: var(--transition);
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

                    @include v.media('1480px') {
                        height: 280px;
                    }
                }
            }

            &.one {
                grid-area: 1 / 1 / 4 / 3;

                .tech {
                    color: var(--highlight-color-4);
                }

                &:hover {
                    background-color: var(--highlight-color-4);
                }

                @include v.media('1480px') {
                    grid-area: 3 / 3 / 5 / 5;

                    .project-image {
                        height: 280px;
                    }
                }
            }

            &.two {
                grid-area: 4 / 1 / 5 / 3;

                .tech {
                    color: var(--highlight-color);
                }

                &:hover {
                    background-color: var(--highlight-color);
                }
            }

            &.three {
                grid-area: 1 / 3 / 2 / 5;

                .tech {
                    color: var(--highlight-color-2);
                }

                &:hover {
                    background-color: var(--highlight-color-2);
                }
            }

            &.four {
                grid-area: 2 / 3 / 3 / 5;

                .tech {
                    color: var(--highlight-color-3);
                }

                &:hover {
                    background-color: var(--highlight-color-3);
                }
            }

            &.five {
                grid-area: 3 / 3 / 5 / 5;

                .tech {
                    color: var(--highlight-color);
                }

                &:hover {
                    background-color: var(--highlight-color);
                }

                @include v.media('1480px') {
                    grid-area: 3 / 1 / 4 / 3;

                    display: flex;
                    align-items: center;
                    flex-direction: row-reverse;

                    .project-image {
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
            }

            &.six {
                grid-area: 1 / 5 / 5 / 7;

                .tech {
                    color: var(--highlight-color-5);
                }

                &:hover {
                    background-color: var(--highlight-color-5);
                }

                @include v.media('1480px') {
                    grid-area: 1 / 1 / span 2 / span 2;
                }
            }
        }
    }
}
</style>