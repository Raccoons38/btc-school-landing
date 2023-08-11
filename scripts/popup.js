const popup = document.getElementById('popup');
const popupForm = popup.querySelector('form');


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

popupForm.querySelector('input[type="submit"]').onclick = null;

popupForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const userForm = new FormData(popupForm);
    const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: userForm.get('name'),
            email: userForm.get('email'),
            phone: userForm.get('phone'),
            comment: userForm.get('comment')
        })
    });

    console.log(response);

    return false;
});