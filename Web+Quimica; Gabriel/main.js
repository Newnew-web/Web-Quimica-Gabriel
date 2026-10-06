// Garante o carregamento do DOM antes de executar
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os links do menu
    const navLinks = document.querySelectorAll('nav a');

    // Aplica a rolagem suave ao clicar nas opções do menu
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calcula offset para não cobrir o título com o menu fixo
                const navHeight = document.querySelector('nav').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight - 10;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});