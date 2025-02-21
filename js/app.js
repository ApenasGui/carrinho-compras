let totalGeral = 0
listaProdutos = document.getElementById('lista-produtos').innerHTML = ' '
document.getElementById('valor-total').textContent = 'R$ 0'

function adicionar() {
    //pegar o id do produto e fazer uma variavel
    let produto = document.getElementById('produto').value
    //separar a variavel produto entra nome e o valor do produto [0] = antes [1] = depois
    let produtoNome = produto.split('-')[0]
    let produtoValor = produto.split('R$')[1]
    //quantidade de produtos que serão adicionados ao carrinho
    let quantidade = document.getElementById('quantidade').value
    //preço nada mais é do que valor do produto multiplicado pela quantidade
    let preco = quantidade * produtoValor
    //buscar no html a seção do carrinho e vamos inserir um HTML dentro das listas
    let listaProdutos = document.getElementById('lista-produtos')
    //vamos concatenar o listaProdutos para ele nunca sumir com o valor antigo, então vai tá
    //sempre adicionando
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul"> ${quantidade}x </span> ${produtoNome} <span class="texto-azul"> R$${preco} </span>
        </section>`
    //total aqui foi setada em 0 no inicio do code
    totalGeral = totalGeral + preco
    //e ai ele adicionar o preço original + o preço novo, e sempre vai tá adicionando
    //criar uma nova variavel para buscar o html do carrinho, e vamos apenas adicionar um conteudo de texto
    let totalFinal = document.getElementById('valor-total')
    totalFinal.textContent = `RS ${totalGeral}`
    document.getElementById('quantidade').value = ' '
}

function limpar() {
    //função para setar tudo para zero apenas
    totalGeral = 0
    listaProdutos = document.getElementById('lista-produtos').innerHTML = ' '
    document.getElementById('valor-total').textContent = 'R$ 0'
}
