
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const imagen = document.getElementById('imagen');


btn1.addEventListener('click', () => {
    imagen.src = 'imagenes/2.jpg'; 
});

btn2.addEventListener('click', () => {
    imagen.src = 'imagenes/3.jpg'; 
});

btn3.addEventListener('click', () => {
    imagen.src = 'imagenes/4.jpg'; 
});
