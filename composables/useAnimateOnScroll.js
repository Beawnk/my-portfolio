import { onMounted, onUnmounted } from 'vue';

/**
 * Um Composable do Vue para animar elementos quando eles entram no viewport
 * e remover o delay da animação após a conclusão.
 */
export default function useAnimateOnScroll(selector, options = { threshold: 0.1 }) {
  let observer;

  // Função que será chamada quando a transição de entrada terminar
  const handleTransitionEnd = (event) => {
    // Adiciona a classe final para remover o delay de futuras transições (como hover)
    event.target.classList.add('has-animated');
    
    // Opcional mas recomendado: log para depuração
    // console.log('Animação finalizada em:', event.target);
  };

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;

          // Adiciona a classe para iniciar a animação
          target.classList.add('is-visible');

          // Adiciona um "ouvinte" para o fim da transição.
          // A opção { once: true } faz com que o ouvinte seja removido automaticamente
          // após ser disparado uma vez, o que é perfeito para o nosso caso.
          target.addEventListener('transitionend', handleTransitionEnd, { once: true });

          // Para de observar o elemento para não re-acionar
          observer.unobserve(target);
        }
      });
    }, options);

    const elements = document.querySelectorAll(selector);
    elements.forEach(el => observer.observe(el));
  });

  onUnmounted(() => {
    // Limpeza: Remove todos os event listeners pendentes e desconecta o observador
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.removeEventListener('transitionend', handleTransitionEnd);
    });
    
    if (observer) {
      observer.disconnect();
    }
  });
}