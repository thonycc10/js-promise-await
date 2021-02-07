import './styles.css';
import {promesaLenta,
        promesaMedia,
        promesaRapida,
        buscarHeroePromAsync} from "./js/promesas";
import  {obtenerHeroes, obtenerHeroesAwait, heroesCiclo, heroeIfAwait} from './js/await'

/*promesaLenta.then( console.log );
promesaMedia.then( console.log );
promesaRapida.then( console.log );*/

// solo se  ejecuta la mas rapida
/* Promise.race([promesaLenta, promesaMedia, promesaRapida])
       .then( console.log );*/

/*buscarHeroePromAsync('capi')
    .then(heroe => {console.log(heroe);})
    .catch(console.warn);
*/

// const heroes = obtenerHeroes();
/* console.time('await');
obtenerHeroes().then( heroes => {
        console.table(heroes);
        console.timeEnd('await');
}); // usar para capturar la promesa */

/* console.time('await')
obtenerHeroesAwait('iroman1').then( heroe => {
        console.table(heroe);

        console.timeEnd('await');
}).catch(console.warn); */

heroesCiclo();
heroeIfAwait('iroman');
