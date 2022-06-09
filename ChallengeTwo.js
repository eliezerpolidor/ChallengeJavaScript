const carta = 'bici coche balón _playstation bici coche peluche bici'

const regalos = listGifts(carta)

// console.log(cartaRegalos)
// console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/


function listGifts(carta) {
    // ¡Tú puedes!
    //leer la carta y crear un arreglo con cada regalo pedido en la carta
    //contar en el arreglo la cantidad de veces que se repite un elemento
    //pasar los elementos y la cantidad de veces al objeto 
    letterRegalos = carta.split(" ").sort()
    let uniqueGifts = []
    let repeatedGifts = []
    let contador = 1
        // leterGift = {}
    var cartaRegalos = new Object()
    letterGift = []

    for (let i = 0; i < letterRegalos.length; i++) {
        const x = letterRegalos[i]
        if (x.substr(0, 1) == "_") {
            console.log(x.substr(0, 1))
        } else {
            letterGift.push(letterRegalos[i])
        }

    }
    console.log(letterGift)
    for (let i = 0; i < letterGift.length; i++) {
        if (letterGift[i + 1] === letterGift[i]) {
            contador++
        } else {
            uniqueGifts.push(letterGift[i])
            repeatedGifts.push(contador)
            contador = 1
        }

    }

    for (let i = 0; i < uniqueGifts.length; i++) {
        console.log('el regalo ' + uniqueGifts[i] + ' se repite ' + repeatedGifts[i])
            // console.log()

        // cartaRegalos.uniqueGifts[i] = repeatedGifts[i]
    }

    return cartaRegalos
}