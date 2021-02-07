const heroes = {
    iroman: {
        nombre: 'Tony Start',
        oficio: 'Loco millonario'
    },
    capi: {
        nombre: 'Capitan America',
        oficio: 'Militar'
    },
    spiderman: {
        nombre: 'Peter Parker',
        oficio: 'Estudiante'
    }
}

export const buscarHeroes = (id, callback) => {
    const heroe = heroes[id];

    if (heroe) {
        callback(null, heroe);
    } else {
        callback(`No existe un héroe con el id ${id}`);
    }

}
