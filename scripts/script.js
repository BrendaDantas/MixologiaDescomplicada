var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

function recommendDrink() {
    const doce = document.getElementById('doceAmargo').value;
    const citrico = document.getElementById('citrico').value;
    const forca = document.getElementById('forca').value;
    const gas = document.getElementById('gas').value;
    const frutasFrescas = document.getElementById('frutasFrescas').value;
    const estilo = document.getElementById('estilo').value;

    let drink = [];

    if (doceAmargo === "doce") {
        if (citrico === "sim") {
            if (forca === "forte") {
                drink.push("Cosmopolitan");
            } else {
                if (gas === "sim") { 
                    if (frutasFrescas === "sim") {
                        drink.push("Mojito");
                    } else {
                        drink.push("Moscow Mule"); 
                    }                                       
                } else {
                    drink.push("Tequila Sunrise");
                    drink.push("Cosmopolitan");  
                }             
            }
        }
    } else if (doceAmargo === "amargo") {
        drink.push("Negroni");
        drink.push("Dry Martini");
    } else {
        drink.push("Caipirinha")
    }

    document.getElementById('resultado').textContent = "Seus drinks ideais são: ${drink.join(', ')}";
}