const popup = document.getElementById('popup');


document.querySelectorAll('.open-signup-popup').forEach(btn => { 
    btn.addEventListener('click', () => { 
        popup.classList.add('opened');
        document.body.classList.add('with-popup');
    });
});

popup.querySelector('.close-popup').addEventListener('click', (e) => { 
    popup.classList.remove('opened');
    document.body.classList.remove('with-popup');
});