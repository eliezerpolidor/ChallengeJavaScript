const letter = "bici coche (balón) bici coche peluche"
const cartaRegalos = isValid(letter)
const problem = "Crea una función que pasándole el texto de la carta, <br> devuelva true si es válida y false si no lo es. <br> ¡Y acaba con la travesura del Grinch! <br>"
console.log(cartaRegalos)

document.writeln(problem)
document.writeln('Esta carta: ' + letter + ' es: ' + cartaRegalos)

function isValid(letter) {
    // ¡No dejes que el Grinch gane!
    letterGifts = letter.split(" ").sort()
    let swith = true
    tempBrand = [
        { parVacio: 0 },
        { parLleno: 0 },
        { llave: 0 },
        { corchete: 0 }
    ]

    for (let i = 0; i < letterGifts.length; i++) {
        let x = letterGifts[i]
        if ((x.includes("(") && x.includes(")") && (x.includes("a") ||
                x.includes("e") || x.includes("i") || x.includes("o") ||
                x.includes("u"))) === true) {
            tempBrand[1] = 1
        } else {
            if (x.includes("(") || x.includes(")")) {
                tempBrand[0] = 1
            } else {
                tempBrand[1] = 1
            }
        }
        if (x.includes("{") === true) {
            tempBrand[2] = 1
        }
        if (x.includes("[") === true) {
            tempBrand[3] = 1

        }
    }

    if (tempBrand[0].parVacio == 0 && tempBrand[2].llave == 0 && tempBrand[3].corchete == 0) {
        swith = true
    } else {
        swith = false
    }
    return swith
}