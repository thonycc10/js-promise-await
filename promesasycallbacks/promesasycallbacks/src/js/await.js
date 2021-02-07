import {buscarHeroePromAsync, buscarHeroeProm} from "./promesas";

const heroesId = [
    'iroman',
    'capi',
    'spiderman'
]
const heroesPromesas = heroesId.map( buscarHeroeProm );

const obtenerHeroes = async () => {
    const heroesArr = [];

    // como lo hacen
    /* for (const id of heroesId) {
      //  buscarHeroePromAsync(id).then( heroe =>  heroesArr.push(heroe));
      const heroe = await buscarHeroeProm(id); // no es la mejor manera para el awit
      heroesArr.push(heroe);
    } */

   /* for (const id of heroesId) {
        //  buscarHeroePromAsync(id).then( heroe =>  heroesArr.push(heroe));
        heroesArr.push(buscarHeroeProm(id));
    }*/
//    return await Promise.all(heroesArr);


    return await Promise.all(heroesId.map( buscarHeroeProm ));

    /* Se se recomienda usar esta funcion setTimeout(() => {
        console.log('ObtenerHeroes');
        console.table( heroesArr );
    }, 1000) */

}

export const obtenerHeroesAwait = async (id) => {
    try {
        const heroe = await buscarHeroePromAsync(id);
        return heroe;
    } catch (err) {
        console.log('catch!!')
        return {
            nombre: 'sin nombre',
            oficio: 'sin oficio'
        }
    }
}

export const heroesCiclo = async () => {
    console.time('heroesCiclo');

   // const heroes = await Promise.all( heroesPromesas );
   // heroes.forEach( heroe => console.log(heroe));

   // for await
   for await ( const heroe of heroesPromesas) {
       console.log(heroe);
   }
    console.timeEnd('heroesCiclo');
}

export const heroeIfAwait = async(id) => {
    if ( (await buscarHeroePromAsync(id)).nombre === 'Tony Start') {
        console.log('es el mejor');
    } else {
        console.log('naaa');
    }
}

export {
    obtenerHeroes
}
