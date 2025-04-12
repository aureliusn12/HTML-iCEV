const products = [
    { nome: "Mouse Gamer", categoria: "Periféricos", preco: 120 },
    { nome: "Teclado Mecânico", categoria: "Periféricos", preco: 250 },
    { nome: "Monitor 24\"", categoria: "Monitores", preco: 899 },
    { nome: "Cadeira Gamer", categoria: "Móveis", preco: 1299 },
    { nome: "Headset RGB", categoria: "Áudio", preco: 320 },
    { nome: "Notebook i5", categoria: "Computadores", preco: 3899 },
    { nome: "Mousepad Grande", categoria: "Periféricos", preco: 85 },
    { nome: "Caixa de Som Bluetooth", categoria: "Áudio", preco: 210 },
    { nome: "Webcam HD", categoria: "Periféricos", preco: 180 },
    { nome: "SSD 1TB", categoria: "Armazenamento", preco: 550 },
    { nome: "HD Externo 2TB", categoria: "Armazenamento", preco: 470 },
    { nome: "Placa de Vídeo RTX 3060", categoria: "Componentes", preco: 2399 },
    { nome: "Processador Ryzen 5", categoria: "Componentes", preco: 1050 },
    { nome: "Memória RAM 16GB", categoria: "Componentes", preco: 320 },
    { nome: "Suporte de Monitor", categoria: "Móveis", preco: 130 },
  ];

        function displayProducts(filteredProducts) {
            const productList = document.getElementById("productList");
            const summary = document.getElementById("summary");
            productList.innerHTML = "";
            summary.innerHTML = "";

            if (filteredProducts.length === 0) {
                productList.innerHTML = '<p class="no-products">Nenhum Produto encontrado</p>';
                return;
            }

            let totalValue = 0;
            filteredProducts.forEach(product => {
                totalValue += product.preco;
                const productDiv = document.createElement("div");
                productDiv.className = "product";
                productDiv.innerHTML = `<strong>${product.nome}</strong> - ${product.categoria} - R$${product.preco.toFixed(2)}`;
                productList.appendChild(productDiv);
            });

            summary.innerHTML = `Total de produtos encontrados: ${filteredProducts.length} | Valor total: R$${totalValue.toFixed(2)}`;
        }

        function filterProducts() {
            const nameFilter = document.getElementById("productName").value.toLowerCase();
            const categoryFilter = document.getElementById("category").value;

            const filteredProducts = products.filter(product => {
                const matchesName = product.nome.toLowerCase().includes(nameFilter);
                const matchesCategory = categoryFilter === "" || product.categoria === categoryFilter;
                return matchesName && matchesCategory;
            });

            displayProducts(filteredProducts);
        }

        displayProducts(products);