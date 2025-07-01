<template>
  <div id="app" class="">
    <Header />
    <NuxtPage />
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.fade-in-on-scroll {
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
</style>
