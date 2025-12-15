// Открытие модального окна новости
document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        document.getElementById(`modal-${modalId}`).showModal();
    });
});


document.querySelectorAll('dialog.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.close();
        }
    });
});

// Открытие фото в lightbox
document.querySelectorAll('.modal-images img').forEach(img => {
    img.addEventListener('click', (e) => {
        const src = e.target.src;
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = src;
        lightbox.showModal();
    });
});

// Закрытие lightbox
document.getElementById('lightbox').addEventListener('click', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (e.target === lightbox || e.target.tagName === 'BUTTON') {
        lightbox.close();
    }
});