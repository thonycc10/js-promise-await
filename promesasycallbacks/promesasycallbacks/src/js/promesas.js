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

const buscarHeroeProm =  (id) => {
    const heroe = heroes[id];

    return new Promise( (resolve, reject) => {
        if ( heroe ) {
            setTimeout(() => resolve(heroe), 1000);
        } else {
            reject(`No existe un héroe con el id ${id}`); // -> envia el error
        }
    });
}

const buscarHeroePromAsync = async (id) => {
    const heroe = heroes[id];
        if ( heroe ) {
            return heroe;
        } else {
           throw Error(`No existe un héroe con el id ${id}`); // -> envia el error
        }
}

const promesaLenta = new Promise ((resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise ((resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500);
});

const promesaRapida = new Promise ((resolve, reject) => {
    setTimeout(() => resolve('Promesa Rapida'), 1000);
});


export {
    promesaLenta,
    promesaMedia,
    promesaRapida,
    buscarHeroeProm,
    buscarHeroePromAsync,
}
