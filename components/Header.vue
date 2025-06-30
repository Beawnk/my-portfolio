<template>
  <div class="header">
    <div class="container">
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

</script>

<style lang="scss" scoped>
.header {
    position: absolute;
    top: 0;
    left: var(--side);
    right: var(--side);
    z-index: 1000;

    .container {
        background-color: var(--dark-color);
        border-radius: 0 0 var(--border-radius) var(--border-radius);
        overflow: hidden;

        ul {
            display: flex;
            justify-content: space-around;

            li {
                transition: var(--transition);
                flex: 1;

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
                }
            }
        }
    }
}
</style>