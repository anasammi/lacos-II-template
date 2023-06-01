// --------------- PRÁTICA GUIADA ---------------

const bimestre1 = [10, 4, 3, 8]
// indiceNota      0   1  2  3
const bimestre2 = [2, 6, 10, 3]
const bimestre3 = [3, 6, 8, 10]
const bimestre4 = [5, 2, 7, 8, 10]

const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4] //length = 4
// indiceBimestre       0          1          2          3

// console.log(notasDoAno[0][1])
// console.table(notasDoAno)

//for
// for(let i = 0; i < notasDoAno.length; i++){
//    let soma = 0
   
//    for(let j = 0; j < notasDoAno[i].length; j++){
//       soma = soma + notasDoAno[i][j]
//    }
// //  console.log("soma do bimestre", soma)
//  let mediaBimestre = soma / notasDoAno[i].length
//   console.log(`A soma das notas do bimestre ${i + 1} é: ${soma} \n A média do bimestre ${i + 1} é ${mediaBimestre}`)
// }

// for in e for of
for(let indiceBimestre in notasDoAno){
  console.log(indiceBimestre)
  let soma = 0
  
  for(let nota of notasDoAno[indiceBimestre]){
    // nota vai retornar cada um dos elementos de cada array bimestre
     soma = soma + nota
  }
//  console.log("soma do bimestre", soma)
let mediaBimestre = soma / notasDoAno[indiceBimestre].length
// transformando indiceBimestre em number pq vem como string
 console.log(`A soma das notas do bimestre ${Number(indiceBimestre) + 1} é: ${soma} \n A média do bimestre ${Number(indiceBimestre) + 1} é ${mediaBimestre}`)

}

// for(let indice in array){
//   //codigo
// }


// for(let elemento of array){
//   //codigo
// }




// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻


for(let i = 0; i < filmes.length; i++){
   
  console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)

  for(let j=0; j < filmes[i].elenco.length; j++){
    console.log(`Ator/Atriz ${j+1}: ${filmes[i].elenco[j]}`)
  }
}

for(let i in filmes){
  console.log(filmes[i])
  
  console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)

  for(let ator of filmes[i].elenco){
    // console.log("atores", atores)
    console.log(`Ator/Atriz ${filmes[i].elenco.indexOf(ator) + 1}: ${ator}`)
  }
}