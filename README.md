# MultiSearch React

Aplicação frontend em React para busca unificada de dados de um ERP.

O usuário digita um termo e visualiza os resultados agrupados por tipo:

- Pedidos de Venda
- Pedidos de Compra
- Produtos
- Equipamentos
- Mão de obra

## Como funciona

1. O usuário informa o texto no campo de busca.
2. O frontend envia a consulta para a API do backend.
3. A API retorna os resultados normalizados e agrupados por categoria.
4. A tela exibe:
   - total geral de resultados;
   - quantidade por categoria;
   - lista de itens com código, descrição e quantidade (quando aplicável).

## Tecnologias utilizadas

- React 19
- Vite
- Axios
- Bootstrap 5
- CSS

## Requisitos

- Node.js 18+ (recomendado: 20+)
- npm
- Backend do MultiSearch em execução

## Configuração de ambiente

Este projeto usa variáveis de ambiente do Vite para definir a URL da API.

### Arquivos de ambiente

- `.env`: configuração local (não versionado)
- `.env.example`: modelo versionado para referência

### Variável utilizada

- `VITE_API_URL`: URL base da API

Exemplo local:

```env
VITE_API_URL=http://localhost:8080/multisearch
```

No código, a configuração está em `src/services/api.js`:

- `baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/multisearch'`

## Como executar o projeto

### 1) Instalar dependências

```bash
npm install
```

### 2) Configurar o arquivo `.env`

Crie o arquivo `.env` na raiz com:

```env
VITE_API_URL=http://localhost:8080/multisearch
```

### 3) Rodar em ambiente de desenvolvimento

```bash
npm run dev
```

Depois, acesse:

- [http://localhost:5173](http://localhost:5173)

### 4) Gerar build de produção

```bash
npm run build
```

### 5) Visualizar build localmente

```bash
npm run preview
```

## Deploy na Vercel

Na Vercel, configure a variável de ambiente:

- `VITE_API_URL`

Valor sugerido:

- URL pública do seu backend, por exemplo: `https://api.seudominio.com/multisearch`

Após configurar, faça um novo deploy para aplicar a variável.

## Endpoint consumido

O frontend consulta:

- `GET {VITE_API_URL}/filter?query=<termo>`

## Estrutura principal

- `src/App.jsx`: layout principal e controle da busca
- `src/components/SearchBar.jsx`: formulário de busca
- `src/components/ResultsContainer.jsx`: distribuição dos grupos e total
- `src/components/ResultGroup.jsx`: bloco de cada categoria
- `src/components/ResultItem.jsx`: linha de cada resultado
- `src/services/api.js`: chamada HTTP para o backend

## Observações

- A busca é executada apenas quando existe texto válido.
- Erros de conexão ou resposta da API são exibidos na interface.
- O favicon e a identidade visual usam a logo do MultiSearch.
