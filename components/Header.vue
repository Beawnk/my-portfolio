<template>
  <div class="header" :class="{ 'open': menuOpen }" @click="menuOpen = !menuOpen" ref="header">
    <div class="container">
        <div class="menu-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul>
            <li><NuxtLink to="/">Início</NuxtLink></li>
            <li><NuxtLink to="/about">Sobre</NuxtLink></li>
            <li><NuxtLink to="/tech">Competências</NuxtLink></li>
            <li><NuxtLink to="/projects">Projetos</NuxtLink></li>
            <li><NuxtLink to="/contact">Contato</NuxtLink></li>
        </ul>
    </div>
  </div>
</template>

<script setup>
import { useTemplateRef } from 'vue'

const menuOpen = ref(false);

const header = useTemplateRef('header');

onClickOutside(header, () => {
    menuOpen.value = false;
});
</script>

<style lang="scss" scoped>
@use '@/assets/style/main.scss' as v;

.header {
    position: absolute;
    top: 0;
    left: var(--side);
    right: var(--side);
    z-index: 1000;

    &.open {

        .menu-btn {
          $shift: 8.5px;

          span:nth-child(1) { transform: translateY($shift) rotate(45deg); }
          span:nth-child(2) { opacity: 0; transform: scaleX(0.6); }
          span:nth-child(3) { transform: translateY(-$shift) rotate(-45deg); }
        }

        .container ul {
            @include v.media('765px') {
                top: calc(100% + 10px);
                opacity: 1;
            }
        }
    }

    .container {
        background-color: var(--dark-color);
        border-radius: 0 0 var(--border-radius) var(--border-radius);
        overflow: hidden;
        // position: relative;

        .menu-btn {
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            padding: 10px;

            @include v.media('765px') {
                display: flex;
            }

            span {
                width: 28px;
                height: 3px;
                background-color: var(--text-color);
                margin: 3px 0;
                border-radius: 3px;
                transition: all 0.3s ease-in-out;
                transform-origin: center;

                &:nth-child(1) { background-color: var(--highlight-color-3); }
                &:nth-child(2) { background-color: var(--highlight-color-2); }
                &:nth-child(3) { background-color: var(--highlight-color); }
            }
        }

        ul {
            display: flex;
            justify-content: space-around;
            transition: var(--transition);

            @include v.media('765px') {
                flex-direction: column;
                align-items: center;
                position: absolute;
                top: -1000px;
                opacity: 0;
                left: 0;
                background-color: var(--dark-color);
                width: 100%;
                border-radius: var(--border-radius);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                overflow: hidden;
            }

            li {
                transition: var(--transition);
                flex: 1;

                @include v.media('765px') {
                    width: 100%;
                }

                &:hover {

                    &:nth-child(1) {
                        background-color: var(--highlight-color);
                    }
                    &:nth-child(2) {
                        background-color: var(--highlight-color-2);
                    }
                    &:nth-child(3) {
                        background-color: var(--highlight-color-3);
                    }
                    &:nth-child(4) {
                        background-color: var(--highlight-color-4);
                    }
                    &:nth-child(5) {
                        background-color: var(--highlight-color-5);
                    }

                    a {
                        color: var(--background-color);
                    }
                }

                a {
                    width: 100%;
                    display: block;
                    text-align: center;
                    padding: 20px;
                    color: var(--text-color);
                    font-family: var(--font-family-semi-bold);
                    transition: var(--transition);

                    @include v.media('765px') {
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>