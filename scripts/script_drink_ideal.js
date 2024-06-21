
function recommendDrink() {
    const sabor = document.getElementById('sabor').value;
    const citrico = document.getElementById('citrico').value;
    const forcaBebida = document.getElementById('forcaBebida').value;
    const gas = document.getElementById('gas').value;
    const frutasFrescas = document.getElementById('frutasFrescas').value;
    
    const drinksData = {
        doce: ["Tequila Sunrise", "Mojito", "Piña Colada", "Cosmopolitan", "Daiquiri", "Mai Tai", "Sex on the Beach", "Margarita", "Blue Lagoon", "Singapore Sling"],
        amargo: ["Negroni", "Dry Martini", "Americano", "Aperol Spritz", "Boulevardier", "Campari Soda", "Gin Tônica", "Old Fashioned", "Manhattan", "Hanky Panky"],
        neutro: ["Caipirinha", "Moscow Mule", "Bloody Mary", "White Russian", "Black Russian", "Tom Collins", "Long Island Iced Tea", "Whiskey Sour", "Rum Punch", "Pisco Sour"]
    };

    let drinks = drinksData[sabor];

    const citricoDrinks = ["Moscow Mule", "Caipirinha", "Mojito", "Tequila Sunrise", "Margarita", "Daiquiri"];
    const naoCitricoDrinks = ["Piña Colada", "Cosmopolitan", "Mai Tai", "Sex on the Beach", "Blue Lagoon", "Negroni", "Dry Martini", "Boulevardier", "Campari Soda", "Gin Tônica", 
            "Old Fashioned", "Manhattan", "Hanky Panky", "Bloody Mary", "White Russian", "Black Russian", "Long Island Iced Tea", "Whiskey Sour", "Rum Punch", "Pisco Sour"];
    const forteDrinks = ["Cosmopolitan", "Mai Tai", "Negroni", "Dry Martini", "Boulevardier", "Old Fashioned", "Manhattan", "Hanky Panky", "Bloody Mary", "Long Island Iced Tea", "Whiskey Sour", "Pisco Sour"];
    const leveDrinks = ["Tequila Sunrise", "Mojito", "Piña Colada", "Daiquiri", "Sex on the Beach", "Margarita", "Blue Lagoon", "Singapore Sling", "Aperol Spritz", "Americano", "Campari Soda", "Gin Tônica", "Caipirinha", "Moscow Mule", "White Russian", "Black Russian", "Tom Collins", "Rum Punch"];
    const comGasDrinks = ["Mojito", "Blue Lagoon", "Americano", "Aperol Spritz", "Campari Soda", "Gin Tônica", "Moscow Mule", "Tom Collins"];
    const semGasDrinks = ["Tequila Sunrise", "Piña Colada", "Cosmopolitan", "Daiquiri", "Mai Tai", "Sex on the Beach", "Margarita", "Singapore Sling", "Negroni", "Dry Martini", "Boulevardier", "Old Fashioned", "Manhattan", "Hanky Panky", "Caipirinha", "Bloody Mory", "White Russian", "Black Russian", "Long Island Iced Tea", "Whiskey Sour", "Rum Punch", "Pisco Sour"];
    const comFrutasFrescasDrinks = ["Mojito", "Caipirinha"];
    const semFrutasFrescasDrinks = ["Tequila Sunrise", "Daiquiri", "Mai Tai", "Sex on the Beach", "Aperol Spritz", "Moscow Mule", "Pisco Sour", "Rum Punch", "Piña Colada", "Cosmopolitan", "Margarita", "Blue Lagoon", "Singapore Sling", "Negroni", "Dry Martini", "Americano", "Boulevardier", "Campari Soda", "Gin Tônica", "Old Fashioned", "Manhattan", "Hanky Panky", "Bloody Mary", "White Russian", "Black Russian", "Tom Collins", "Long Island Iced Tea", "Whiskey Sour"];

    if (citrico === "sim") {
        drinks = drinks.filter(drink => citricoDrinks.includes(drink));
    } else {
        drinks = drinks.filter(drink => naoCitricoDrinks.includes(drink));
    }

    if (forcaBebida === "sim") {
        drinks = drinks.filter(drink => forteDrinks.includes(drink));
    } else {
        drinks = drinks.filter(drink => leveDrinks.includes(drink));
    }

    if (gas === "sim") {
        drinks = drinks.filter(drink => comGasDrinks.includes(drink));
    } else {
        drinks = drinks.filter(drink => semGasDrinks.includes(drink));
    }

    if (frutasFrescas === "sim") {
        drinks = drinks.filter(drink => comFrutasFrescasDrinks.includes(drink));
    } else {
        drinks = drinks.filter(drink => semFrutasFrescasDrinks.includes(drink));
    }
   
    if (drinks.length === 0) {
        drinks.push("Gin Tônica"); // Bebida padrão se nenhuma outra combinação funcionar
    }

    document.getElementById("resultado").textContent = `Seus drinks ideais são: ${drinks.join(', ')}`;
}