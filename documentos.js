// A função de acordeão (FAQ) que você incluiu é ótima para ser reutilizada 
// caso você queira fazer uma página de FAQ separada.
function toggleAccordion(sectionId) {
    // Tenta obter o número da seção (ex: 'section1' -> '1')
    const sectionNumber = sectionId.slice(-1);
    const content = document.getElementById('content' + sectionNumber);
    const icon = document.getElementById('icon' + sectionNumber);
    
    // Fecha todas as outras seções
    for (let i = 1; i <= 4; i++) {
        if (i != sectionNumber) {
            const otherContent = document.getElementById('content' + i);
            const otherIcon = document.getElementById('icon' + i);
            if (otherContent && otherIcon) {
                otherContent.classList.remove('active');
                otherIcon.classList.remove('rotated');
            }
        }
    }
    
    // Alterna a seção atual
    if (content && icon) {
        content.classList.toggle('active');
        icon.classList.toggle('rotated');
    }
}

// O código para abrir a primeira seção por padrão (toggleAccordion('section1');) 
// não é necessário nesta página de "Documentos", já que não há acordeões visíveis.
// Ele foi removido, mas a função `toggleAccordion` foi mantida para caso você
// adicione acordeões na página.

/* document.addEventListener('DOMContentLoaded', function() {
    // Isso só funcionaria se você tivesse elementos com IDs como 'section1'
    // Se você estiver usando essa função em uma página separada de FAQ, pode mantê-lo.
    // toggleAccordion('section1');
});
*/
