
function recommendDrink() {
    const sabor = document.getElementById('sabor').value;
    const citrico = document.getElementById('citrico').value;
    const forcaBebida = document.getElementById('forcaBebida').value;
    const gas = document.getElementById('gas').value;
    const frutasFrescas = document.getElementById('frutasFrescas').value;
    
    let drinks = [];

    if (sabor === "doce") {
        if (citrico === "sim") {
            if (forcaBebida === "forte") {
                if (gas === "sim") {
                    if (frutasFrescas === "sim") {
                        drinks.push("Mojito de Frutas");
                    } else {
                        drinks.push("French 75");
                    }
                } else {
                    if (frutasFrescas === "sim") {
                        drinks.push("Daiquiri de Frutas");
                    } else {
                        drinks.push("Sidecar");
                    }
                }
            } else {
                if (gas === "sim") {
                    if (frutasFrescas === "sim") {
                        drinks.push("Mojito");
                    } else {
                        drinks.push("Gin Fizz");
                    }
                } else {
                    if (frutasFrescas === "sim") {
                        drinks.push("Caipirinha", "Caipirosca")
                    } else {
                        drinks.push("Tequila Sunrise", "Daiquiri");
                    }
                }
            }
        } else {
            if (forcaBebida === "forte") {
                if (gas === "sim") {
                    if (frutasFrescas === "sim") {
                        drinks.push("Sparkling Berry Rum Punch");
                    } else {
                        drinks.push("Sparkling Old Fashioned");
                    }
                } else {
                    if (frutasFrescas === "sim") {
                        drinks.push("Brandy Sangria");
                    } else {
                        drinks.push("Cosmopolitan", "Mai Tai");
                    }
                }
            } else {
                if (gas === "sim") {
                    if (frutasFrescas === "sim") {
                        drinks.push("Sparkling Moscato Berry Punch");
                    } else {
                        drinks.push("Blue Lagoon");
                    }
                } else {
                    if (frutasFrescas === "sim") {
                        drinks.push("Sangria Moscato");
                    } else {
                        drinks.push("Piña Colada", "Sex on the Beach");
                    }
                }
            }
        }
    }

    if (sabor === "amargo") {
        if (citrico === "sim") {
            if (forcaBebida === "forte") {
                if (gas === "sim") {
                    if (frutasFrescas === "sim") {
                        drinks.push("Negroni Sbagliato");
                    } else {
                        drinks.push("Americano");
                    }
                } else {
                    if (frutasFrescas === "sim") {
                        drinks.push("Old Fashioned com Frutas");
                    } else {
                        drinks.push("Boulevardier");
                    }
                }
            } else {
                if (gas === "sim") {
                    if (frutasFrescas === "sim") {
                        drinks.push("Amaro Spritz");
                    } else {
                        drinks.push("Aperol Spritz");
                    }
                } else {
                    if (frutasFrescas === "sim") {
                        drinks.push("Citrus Berry Smash")
                    } else {
                        drinks.push("Aperol Sour");
                    }
                }
            }
        } else {
            if (forcaBebida === "forte") {
                if (gas === "sim") {
                    if (frutasFrescas === "sim") {
                        drinks.push("Amaro Highball");
                    } else {
                        drinks.push("Amaro e Soda");
                    }
                } else {
                    if (frutasFrescas === "sim") {
                        drinks.push("Amaro Smash");
                    } else {
                        drinks.push("Negroni", "Dry Martini", "Old Fashioned", "Manhattan");
                    }
                }
            } else {
                if (gas === "sim") {
                    if (frutasFrescas === "sim") {
                        drinks.push("Aperol Spritz com Frutas");
                    } else {
                        drinks.push("Campari Soda");
                    }
                } else {
                    if (frutasFrescas === "sim") {
                        drinks.push("Vermouth Fruit Cup");
                    } else {
                        drinks.push("Vermouth on the Rocks");
                    }
                }
            }
        }
    }

    if (sabor === "neutro") {
        if (citrico === "sim") {
            if (forcaBebida === "forte") {
                if (gas === "sim") {
                    if (frutasFrescas === "sim") {
                        drinks.push("Gin Fizz com Frutas");
                    } else {
                        drinks.push("Tequila Highball");
                    }
                } else {
                    if (frutasFrescas === "sim") {
                        drinks.push("Daiquiri com Frutas");
                    } else {
                        drinks.push("Fitzgerald");
                    }
                }
            } else {
                if (gas === "sim") {
                    if (frutasFrescas === "sim") {
                        drinks.push("Spritz de Vinho Branco com Frutas");
                    } else {
                        drinks.push("Moscow Mule", "Tom Collins");
                    }
                } else {
                    if (frutasFrescas === "sim") {
                        drinks.push("White Wine Sangria")
                    } else {
                        drinks.push("Vodka Gimlet");
                    }
                }
            }
        } else {
            if (forcaBebida === "forte") {
                if (gas === "sim") {
                    if (frutasFrescas === "sim") {
                        drinks.push("Gin Tônica");
                    } else {
                        drinks.push("Whiskey Highball");
                    }
                } else {
                    if (frutasFrescas === "sim") {
                        drinks.push("Brandy Smash");
                    } else {
                        drinks.push("Bloody Mary", "Long Island Iced Tea", "Whiskey Sour");
                    }
                }
            } else {
                if (gas === "sim") {
                    if (frutasFrescas === "sim") {
                        drinks.push("Wine Spritzer");
                    } else {
                        drinks.push("Vodka Soda");
                    }
                } else {
                    if (frutasFrescas === "sim") {
                        drinks.push("Wine Cooler com Frutas");
                    } else {
                        drinks.push("Rum Punch", "White Russian", "Black Russian");
                    }
                }
            }
        }
    }
    
    const resultado = document.getElementById('resultado');
    resultado.scrollIntoView({behavior: 'smooth'});

    document.getElementById("resultado").textContent = `Seus drinks ideais são: ${drinks.join(', ')}`;
}