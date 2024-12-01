const carrinho = [];

        function adicionarAoCarrinho(nome, preco) {
            carrinho.push({ nome, preco });
            atualizarCarrinho();
        }

        function atualizarCarrinho() {
            const carrinhoList = document.getElementById('carrinho');
            carrinhoList.innerHTML = '';

            let total = 0;

            carrinho.forEach(item => {
                const li = document.createElement('li');
                li.classList.add('list-group-item');
                li.textContent = `${item.nome} - R$ ${parseFloat(item.preco).toFixed(2)}`;
                carrinhoList.appendChild(li);
                total += parseFloat(item.preco);
            });

            document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
        }

        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', () => {
                    const nome = button.getAttribute('data-nome');
                    const preco = button.getAttribute('data-preco');
                    adicionarAoCarrinho(nome, preco);
                });
            });
        });

// Função para remover item do carrinho
function removeFromCart(nome) {
    const cartItems = document.getElementById("cart-items");
    const items = cartItems.getElementsByClassName("cart-item");

    // Iterando sobre os itens e removendo o item com o nome correspondente
    for (let i = 0; i < items.length; i++) {
        if (items[i].querySelector(".remove-btn").getAttribute("data-nome") === nome) {
            cartItems.removeChild(items[i]);
            break;
        }
    }
}