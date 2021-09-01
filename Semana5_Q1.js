function createList(itens, mensagem){
  let v =0;
  let ul= document.querySelector("ul");

  while(v < itens){
    var li = document.createElement('li');
    var text = document.createTextNode(mensagem);
    li.appendChild(text);
    ul.appendChild(li);

    console.log(`<li>${mensagem}</li>`);
    v++;
  }
}

iten = parseInt(prompt("digite aqui a quantidade de intens: "))
mensagem = prompt("digite a mensagem que deseja imprimir: ")
createList(iten, mensagem)
