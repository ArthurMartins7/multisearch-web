# MultiSearch React

Aplicacao frontend em React para busca unificada de dados de ERP.  
O usuario digita um termo e visualiza os resultados agrupados por tipo:

- Pedidos de Venda
- Pedidos de Compra
- Produtos
- Equipamentos
- Mao de obra

## Como funciona

1. O usuario informa o texto no campo de busca.
2. O frontend envia a consulta para a API backend.
3. A API retorna os resultados normalizados e agrupados por categoria.
4. A tela exibe:
   - total geral de resultados
   - quantidade por categoria
   - lista de itens com codigo, descricao e quantidade (quando existir)

## Tecnologias utilizadas

- React 19
- Vite
- Axios
- Bootstrap 5
- CSS

## Requisitos

- Node.js 18+ (recomendado 20+)
- npm
- Backend do MultiSearch rodando em `http://localhost:8080`

## Como executar o projeto

### 1) Instalar dependencias

```bash
npm install
```

### 2) Rodar em ambiente de desenvolvimento

```bash
npm run dev
```

Depois, acesse no navegador:

- [http://localhost:5173](http://localhost:5173)

### 3) Gerar build de producao

```bash
npm run build
```

### 4) Visualizar build localmente

```bash
npm run preview
```

## Endpoint consumido

O frontend consulta:

- `GET http://localhost:8080/multisearch/filter?query=<termo>`

Configurado em `src/services/api.js`.

## Estrutura principal

- `src/App.jsx`: layout principal e controle da busca
- `src/components/SearchBar.jsx`: formulario de busca
- `src/components/ResultsContainer.jsx`: distribuicao dos grupos e total
- `src/components/ResultGroup.jsx`: bloco de cada categoria
- `src/components/ResultItem.jsx`: linha de cada resultado
- `src/services/api.js`: chamada HTTP para o backend

## Observacoes

- A busca e executada apenas quando existe texto valido.
- Erros de conexao ou resposta da API sao exibidos na interface.
- O favicon e a identidade visual usam a logo do MultiSearch.
