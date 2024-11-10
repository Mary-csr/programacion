function cambiarColor(color) {
    const cuadrado = document.getElementById('cuadrado');
    

    cuadrado.style.backgroundColor = color;

  
    switch(color) {
        case 'red':
            cuadrado.style.width = '120px';
            cuadrado.style.height = '120px';
            break;
        case 'green':
            cuadrado.style.width = '120px';
            cuadrado.style.height = '120px';
            break;
        case 'blue':
            cuadrado.style.width = '120px';
            cuadrado.style.height = '120px';
            break;
        case 'yellow':
            cuadrado.style.width = '120px';
            cuadrado.style.height = '120px';
            break;
             case 'red':
            cuadrado.style.width = '120px';
            cuadrado.style.height = '120px';
            break;
        
        case 'brown':
            cuadrado.style.width = '120px';
            cuadrado.style.height = '120px';
            break;

        case 'orange':
            cuadrado.style.width = '120px';
            cuadrado.style.height = '120px';
            break;

        case 'black':
             cuadrado.style.width = '120px';
             cuadrado.style.height = '120px';
            break;

        default:
            cuadrado.style.width = '120px';
            cuadrado.style.height = '120px';
    }
}
