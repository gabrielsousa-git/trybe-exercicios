// function testingScope(escopo) {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !'`;
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// oddsAndEvens.sort((a,b) => a-b);

//   console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

//   const fatorialRecursivo = (n) => {
//     if(n===1){
//         return 1;
//     }else{
//         let multiplicacao = n * fatorialRecursivo(n-1);
//         return multiplicacao;
//     }
//   }
  
//   console.log(fatorialRecursivo(5));

// function longestWord(string) {
//     let str = string.split(" ");
//     let longest = 0;
//     let word = null;
//     for (let i = 0; i < str.length; i+=1) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }

// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

const substituteX = (nome) => {
    const frase = 'Tryber x aqui!';
    let novaFrase = frase.replace('x', nome);
    return novaFrase;
}; 
console.log(substituteX('Gabriel'));

let substitute = substituteX('Gabriel');

const stringSkills = (substitute) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    return skills;
};

console.log(stringSkills(skills));

console.log(nomeSkills(`${substitute}
Minhas três principais habilidades são:
${skills}`)); // Terminar depois
