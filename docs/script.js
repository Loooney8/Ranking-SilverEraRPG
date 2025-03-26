let currentIndex = 0;

function showNext() {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    
    // Move para o próximo item
    items[currentIndex].style.display = 'none'; // Esconde o item atual
    currentIndex = (currentIndex + 1) % totalItems; // Vai para o próximo item
    items[currentIndex].style.display = 'block'; // Mostra o próximo item
}

function showPrev() {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    
    // Move para o item anterior
    items[currentIndex].style.display = 'none'; // Esconde o item atual
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Vai para o item anterior
    items[currentIndex].style.display = 'block'; // Mostra o item anterior
}

// Inicializa o carrossel
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach(item => item.style.display = 'none'); // Esconde todos os itens inicialmente
    items[currentIndex].style.display = 'block'; // Mostra o primeiro item
});
