const ovejas = [
    { name: 'Nnn', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'navidad', color: 'rojo' },
    { name: 'Ki na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
]

export default function contarOvejas(ovejas) {
    // aquí tu magia
    for (var i = 0; i < ovejas.length; i++) {
        if (ovejas[i].name.includes('n') == true &&
            ovejas[i].name.includes('a') == true && ovejas[i].color == "rojo") {
            alert(ovejas[i].name)
        }
    }
    return ovejas
};

contarOvejas(ovejas);