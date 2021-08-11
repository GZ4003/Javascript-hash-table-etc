// const adversario = 'ironman'

// const loki_disfraces = {
//     ironman : 'thanos',
//     thor : 'odin',
//     hulk : 'spiderman',
//     wolverine : 'magneto'
// }

// const loki_default_disfraz = 'loki'
// const loki = loki_disfraces [adversario] || loki_default_disfraz

// const lokienemies = (LOKI_disfraces , adversario) => {
//     return LOKI_disfraces [adversario] ? LOKI_disfraces [adversario] : 'loki'
// }

// console.log(lokienemies(LOKI_disfraces, 'hulk'))




// const enemigos = 'kars'

// const aliados = {
//     aizen : 'ichigo',
//     frezeer : 'goku',
//     madara : 'itachi',
//     jason : 'kaneki' ,
//     reiner : 'eren',
//     dio : 'jotaro',
//     kars : 'joseph',
//     kira : 'josuke'
// }

// const enemigo_no_detectado = 'no_hay_peleas'
// const no_hay_peleas = aliados [enemigos] || enemigo_no_detectado

// // console.log(no_hay_peleas)

// const villanos = (heroes, enemigos) => {
//     const enemigo_no_detectado = 'no_hay_peleas'
//     let no_hay_peleas

//     no_hay_peleas = heroes [enemigos] ? heroes [enemigos] :  enemigo_no_detectado
//     return no_hay_peleas
// }

// console.log(villanos(enemigos, 'aizen'))


const enemigo = 'Hulk'

const LOKI_DISFRACES = {
    'Iron-Man': 'Thanos',
    Thor: 'Odin',
    Hulk: 'Spiderman',
    Wolverine: 'Magneto'
}

const lokiEnemies = (lokiDisfraces, enemigo) => {
    //  if(lokiDisfraces[enemigo]){
    //      return lokiDisfraces[enemigo]
    //  } else {
    //      return 'Loki'
    //  } 
   return lokiDisfraces[enemigo] ? lokiDisfraces[enemigo] : 'Loki'
}

       console.log(lokiEnemies(LOKI_DISFRACES, 'Hulk'))

const enemigos = 'kars'

const aliados = {
     aizen : 'ichigo',
     frezeer : 'goku',
     madara : 'itachi',
     jason : 'kaneki' ,
     reiner : 'eren',
     dio : 'jotaro',
     kars : 'joseph',
     kira : 'josuke'
}

const aliadosale = (aliados, enemigos) => {
    return aliados[enemigos] ? aliados[enemigos] : 'No hay peleadores'
}

console.log(aliadosale(aliados, 'ruben'))


















// if (adversario === 'iron-man'){
//     loki = 'thanos'
// }   else if (adversario === 'thor'){
//     loki = 'odin'
// }   else if (adversario === 'hulk'){
//     loki = 'spiderman'
// }   else if (adversario === 'wolverine'){
//     loki = 'magneto'
// }

// switch (adversario){
//     case 'iron-man':
//         loki = 'thanos'
//         break;
    
//     case  'thor':
//         loki = 'odin'
//         break;

//     case 'hulk':
//         loki = 'spiderman'
//         break; 

//     case 'wolverine' :
//         loki = 'magneto'
//         break;

//     default : 
//         loki = 'loki'
// }

