itens =[
  {nome:'Venti', imagem:"img/venti.jpg"},
  {nome:'Morax',imagem:"img/morax.jpg"},
  {nome:'Raiden Ei',imagem:"img/Ei.png"},
  {nome:'Nahida',imagem:"img/nahida.webp"},
  {nome:'Furina',imagem:"img/furina.webp"}
]
//localStorage.removeItem('gema');

let ganho = [];
let gema = parseInt(localStorage.getItem('gema')) || 1000; // Recupera do localStorage ou usa valor padrão
updateGemsDisplay();

function DisplayResult(result) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Você recebeu um(a): ${result.nome}`;
}

function updateGemsDisplay() {
  const gemsElement = document.getElementById('gems');
  gemsElement.innerHTML = `Gemas: ${gema}`;

  // Atualiza o localStorage com a quantidade de gemas
  localStorage.setItem('gema', gema);
}

function updateList(result) {
  const gachaList = document.getElementById('gachaList');
  const listItem = document.createElement('li');

  // Cria uma tag de imagem
  const image = document.createElement('img');
  image.src = result.imagem;
  image.alt = result.nome;
  image.width = 120;
  image.height = 120;

  // Adiciona a imagem à lista
  listItem.appendChild(image);

  // Cria uma div para agrupar a imagem e o resultado
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content-wrapper');

  // Adiciona o nome ao resultado
  const resultText = document.createElement('p');
  resultText.textContent = `Result: ${result.nome}`;

  // Adiciona a div de conteúdo à lista
  contentDiv.appendChild(resultText);
  listItem.appendChild(contentDiv);

  // Adiciona o <li> à lista
  gachaList.appendChild(listItem);

  // Adiciona uma classe quando atingir 10 itens
  if (gachaList.childElementCount === 10) {
    gachaList.classList.add('show-bar');
  }
}

document.getElementById('gachaButton').addEventListener("click", () => {
  if (gema >= 10) {
    const randomIndex = Math.floor(Math.random() * itens.length);
    const result = itens[randomIndex];
    DisplayResult(result);
    gema -= 10;
    updateGemsDisplay();
    updateList(result);
  } else {
    alert("Você não tem gemas suficientes, precisa de 10");
  }
});

document.getElementById('gachaButtonx10').addEventListener("click", () => {
  if (gema >= 100) {
    for (let index = 0; index < 10; index++) {
      const randomIndex = Math.floor(Math.random() * itens.length);
      const result = itens[randomIndex];
      DisplayResult(result);
      gema -= 10;
      updateGemsDisplay();
      updateList(result);
    }
  } else {
    alert("Você não tem gemas suficientes, precisa de 100");
  }
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("buy").addEventListener("click", () => {
         gema += 10;
  
    
    updateGemsDisplay();
  });
  document.getElementById("buy10").addEventListener("click", () => {
    gema += 100;
    updateGemsDisplay();
});

});
document.getElementById('clear').addEventListener('click',()=>{
  const gachaList = document.getElementById('gachaList');
  const result = document.getElementById('result');
  gachaList.innerHTML = ""
  result.innerHTML = ""
})