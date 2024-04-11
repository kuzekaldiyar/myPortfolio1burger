document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.info').style.display = 'block';
    });

    item.addEventListener('mouseleave', () => {
        item.querySelector('.info').style.display = 'none';
    });
});
