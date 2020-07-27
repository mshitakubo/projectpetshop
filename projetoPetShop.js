console.log('**********************************************************')
console.log('****************** Sistema Petshop ***********************')
console.log('**********************************************************')

let pets = [
  {
    "nome": "Isis",
    "raca": "Sem raca definida",
    "peso": 2,
    "idade": 1,
    "cor": "cinza",
    "sexo": "Feminino",
    "dono": "Rafael",
    "castrado": true
  },
  {
    "nome": "Churros",
    "raca": "Sem raca",
    "peso": 4,
    "idade": 8,
    "cor": "Marrom",
    "sexo": "Masculino",
    "dono": "João",
    "castrado": true
  },
  {
    "nome": "Meg",
    "raca": "Yorkshire",
    "peso": 4,
    "idade": 4,
    "cor": "Preto e Caramelo",
    "sexo": "Feminino",
    "dono": "Marcelo",
    "castrado": true
  },
  {
    "nome": "Mel",
    "raca": "Poodle",
    "peso": 7,
    "idade": 12,
    "cor": "branco",
    "sexo": "Feminino",
    "dono": "Everton",
    "castrado": true
  },
  {
    "nome": "Vincent",
    "raca": "Vira-latas",
    "peso": 7,
    "idade": 6,
    "cor": "amarelo",
    "sexo": "Masculino",
    "dono": "Carol",
    "castrado": true
  },
  {
    "nome": "Papagaio",
    "raca": "Loro",
    "peso": 1,
    "idade": 15,
    "cor": "Verde",
    "sexo": "Masculino",
    "dono": "Ricardo",
    "castrado": false
  },
  {
    "nome": "Buddah",
    "raca": "Dalmatas",
    "peso": 16,
    "idade": 0.3,
    "cor": "Branco e preto",
    "sexo": "Masculino",
    "dono": "Kaike",
    "castrado": false
  },
  {
    "nome": "Thor",
    "raca": "Pastor Alemão",
    "peso": 19,
    "idade": 5,
    "cor": "Caramelo ",
    "sexo": "Masculino",
    "dono": "Eu ",
    "castrado": true
  },
  {
    "nome": "Rex",
    "raca": "labrador",
    "peso": 12,
    "idade": 6,
    "cor": "preto",
    "sexo": "Masculino",
    "dono": "Allan",
    "castrado": false
  },
  {
    "nome": "Zara",
    "raca": "husky ",
    "peso": 4,
    "idade": 2,
    "cor": "branco com preto",
    "sexo": "Feminino",
    "dono": "Bianca",
    "castrado": true
  },
  {
    "nome": "Alexandre Ignacio",
    "raca": "Generica",
    "peso": 15,
    "idade": 4,
    "cor": "Marron e Preto",
    "sexo": "Masculino",
    "dono": "Alexandre",
    "castrado": false
  },
  {
    "nome": "Zara",
    "raca": "husky ",
    "peso": 4,
    "idade": 2,
    "cor": "branco com preto",
    "sexo": "Feminino",
    "dono": "Bianca",
    "castrado": true
  },
  {
    "nome": "Bisteca",
    "raca": "vira lata",
    "peso": 12,
    "idade": 1,
    "cor": "marrom",
    "sexo": "Feminino",
    "dono": "Ana",
    "castrado": false
  },
  {
    "nome": "Astor",
    "raca": "Pastor Alemão",
    "peso": 40,
    "idade": 2,
    "cor": "preto e caramelo",
    "sexo": "Masculino",
    "dono": "Rafael ",
    "castrado": true
  },
  {
    "nome": "Happy",
    "raca": "North Terrier",
    "peso": 5,
    "idade": 1,
    "cor": "Marrom",
    "sexo": "Masculino",
    "dono": "Jeong Yoon Lee",
    "castrado": true
  },
  {
    "nome": "Dengosa",
    "raca": "Vira Lata",
    "peso": 3.5,
    "idade": 4,
    "cor": "Preta",
    "sexo": "Feminino",
    "dono": "Tamires",
    "castrado": true
  },
  {
    "nome": "Tita",
    "raca": "Pintcher",
    "peso": 1,
    "idade": 15,
    "cor": "Marrom",
    "sexo": "Feminino",
    "dono": "Vinicius",
    "castrado": false
  },
  {
    "nome": "Mingau",
    "raca": "Vira Lata",
    "peso": 7.5,
    "idade": 2,
    "cor": "Branco",
    "sexo": "Masculino",
    "dono": "Tamires",
    "castrado": true
  },
  {
    "nome": "Scoob",
    "raca": "Poodle e shtisel",
    "peso": 20,
    "idade": 3,
    "cor": "Misto amarelo e branco",
    "sexo": "Masculino",
    "dono": "Daniele",
    "castrado": true
  },
  {
    "nome": "Maria Victória",
    "raca": "Vira Lata",
    "peso": 2.5,
    "idade": 4,
    "cor": "Cinza, amarela e branca",
    "sexo": "Feminino",
    "dono": "Tamires",
    "castrado": true
  }
]


/**
 * Função que encontra o pet pelo nome e retorna o objeto Pet, caso o nome 
 * não encontre seja encontrado, retorna false.
 * @param nome Recebe como parametro o nome como referência.
 */
function encontrarPet(nome) {
  for (let pet of pets) {
    if (pet.nome.toLowerCase() === nome.toLowerCase()) {
      return console.log(pet)
    }
  }
  return console.log('Pet ' + nome + ' não encontrado.' )
}

/**
 * Função que encontra o pet pelo nome e retorna a impressão das propriedades
 * e valores contidos. Caso não encontre, retorna a String informando: 
 * Pet não encontrado
 * @param nome 
 */
function exibePet(nome) {
  let pet_encontrado = encontrarPet(nome);
  if (pet_encontrado === false) {
    console.log('Pet (' + nome + ') não encontrado!');
  } else {
    for (let caracteristica in pet_encontrado) {
      console.log(caracteristica + ': ' + pet_encontrado[caracteristica] + ';');
    }
  }

}

/**
 * Castra um pet não castrado.
 * Caso o pet já seja cadastrado exibe, "o pet já esta castrado" no console
 * 
 * @param number Posição do pet que vai ser vacinado
 */
function castrar(number) {
  let pet = pets[number - 1]
 
  if (!pet.castrado) {
    pet.castrado = true;
    return console.log('Pet ' + pet.nome + ' foi castrado com sucesso! =/')
  } else {
    console.log('Pet já é castrado!')
  }
}

/**
 * Adicionar a propriedade de vacina em todos pet da array pets,
 * Vacina tem como valor padrão um array vazio.
 */
function adicionaVacinaNosPets() {
  let vacina = [];
  for (let pet of pets) {
    pet.vacina = vacina;
  }
}


/** 
 * Vacina um pet com a vacina passada como parametro
 * Se a vacina existir ele exibe "Vacina já foi aplicada."
 * Se a vacina não existir ele vacina o pet, e adiciona o nome da vacina no array.
 * @param posicao posicao do pet que vai ser vacinado
 * @param nome_vacina Nome da vacina a ser dada.
 */

function vacinaPet(posicao, nome_vacina) {
  let pet = pets[posicao - 1]

  if (pet.vacina.length == 0) {
    pet.vacina = [...pet.vacina, nome_vacina]
    console.log(pet)
  } else {
    if (pet.vacina.indexOf(nome_vacina) === -1) {
      pet.vacina = [...pet.vacina, nome_vacina]
      console.log(pet)
    } else {
      console.log('Vacina já foi aplicada.')
    }
  }
}

/**
 * 
 * @param posicao Numero da posição do array de objetos Pets
 * @param nome_vacina Nome da vacina que deve ser apagada
 * Caso exista uma vacina com o nome informado ela deve ser apagada, 
 * se não existir retorne a mensagem ('Vacina [nome_vacina] não encontrada!')
 */
function apagaVacinaPet(posicao, nome_vacina) {
  let pet = pets[posicao - 1]

  if (pet.vacina.indexOf(nome_vacina) === -1) {
    console.log('Vacina ' + nome_vacina + ' não encontrada =X')
  } else {
    pet.vacina = pet.vacina.filter(function filtro(value) {
      return value !== nome_vacina
    })
    console.log(pet)
  }
}

/**
 * Metédo que adiciona uma nova propriedade dentro dos objetos Pet
 * A propriedade deve ser uma String, caso não seja informado nada, retornar uma mensagem
 * Insira uma String válida.
 * @param propriedade Recebe uma String contendo o nome da nova propriedade
 */
function adicionaPropriedadePets(propriedade) {
  let validaNome = propriedade 
  if(validaNome !== undefined){ //Valida se o parametro não veio vazio

    for (let pet of pets) {
      pet[propriedade] = pet.propriedade //Adiciona a nova propriedade no objeto
    }
    return pets
  } else {
    console.log('Insira uma String válida')
  }
  
}
/**
 * Função que altera o valor de algum campo dentro do Pet selcionado pela posição.
 * @param posicao Posição do Pet que deve ser alterado.
 * @param campo descrição do campo que deve ser alterado.
 * @param novoValor Valor que deve ser atualizado no campo selecionado.
 * 
 * Caso não exista a posição ou o campo selecionado, return : Campo inválido ou posição inválida
 */
function atualizaCampo(posicao,campo,novoValor) {
  let tamanhoPets = Object.keys(pets).length
  let pet = pets[posicao-1]

  if(tamanhoPets >= posicao){
    pet[campo] = novoValor
    console.log(pet)

  } else {
    console.log('Posição inválida!')
  }
}


