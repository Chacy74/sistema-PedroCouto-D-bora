# Router — Atividade de categorias

Projeto feito a partir do `Router.zip` da aula, mantendo a estrutura, as páginas existentes e o CSS original como base.

## Como rodar

Extraia o ZIP, abra a pasta `Router` no VS Code e execute no terminal dessa pasta:

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal. Use Node.js 20.19+ na linha 20 ou 22.12+ nas linhas mais recentes, conforme exigido pelo Vite usado no projeto.

## Requisitos da atividade

1. Página `src/pages/Categorias.jsx` criada.
2. Rota `/categorias` configurada.
3. Link “Categorias” acrescentado ao menu.
4. Lista com Informática, Acessórios e Eletrônicos.
5. Página `src/pages/CategoriaDetalhes.jsx` criada.
6. Rota dinâmica `/categorias/:nome` configurada.
7. Nome da categoria exibido a partir do parâmetro recuperado com `useParams`.
8. Link para retornar à lista de categorias.
9. Rota `*` e página 404 funcionando.

As categorias estão em `src/data/categorias.js`. `nome` é o texto exibido e `caminho` é o identificador usado na URL. A listagem usa `map` e `Link`, como a página de produtos; os detalhes usam `useParams` e `find`, como os detalhes do produto.

## Ajustes no projeto recebido

- Acrescentadas as duas rotas de categorias no `App.jsx`.
- O menu passou de `<main>` para `<nav>`, aplicando os estilos de navegação que já estavam no CSS.
- Corrigido o `=>` na busca do produto em `ProdutoDetalhes.jsx`.
- Preenchidos `CadastroProduto.jsx` e `PaginaNaoEncontrada.jsx`, que estavam vazios e já eram importados no `App.jsx`.
- Acrescentados estilos simples de espaçamento, formulário e adaptação a telas pequenas. Os títulos permanecem legíveis quando o navegador prefere tema escuro.
- Mantidos os produtos, o Context API, as dependências e as páginas Início e Sobre do projeto recebido.

## Rotas para conferir

| Endereço | Resultado |
| --- | --- |
| `/` | Sistema de Produtos |
| `/produtos` | Lista de produtos |
| `/produtos/cadastrar` | Cadastro de produto |
| `/produtos/1` | Teclado |
| `/produtos/2` | Mouse |
| `/produtos/3` | Monitor |
| `/categorias` | Lista das três categorias |
| `/categorias/informatica` | Informática |
| `/categorias/acessorios` | Acessórios |
| `/categorias/eletronicos` | Eletrônicos |
| `/sobre` | Sobre |
| `/categorias/inexistente` | Categoria não encontrada |
| `/produtos/999` | Produto não encontrado |
| `/pagina-inexistente` | 404 |

Confira também os links de retorno, o destaque do menu, o cadastro e os botões Voltar/Avançar do navegador. Os produtos cadastrados são mantidos durante a navegação, mas somem ao atualizar a aba, pois o projeto usa apenas o estado do Context API, como no exemplo da aula.

## Capturas e verificação

A pasta `entrega` contém:

- `01-categorias.png`: lista de categorias.
- `02-categoria-detalhes.png`: detalhes de Informática.
- `VERIFICACAO.md`: resultados dos testes das rotas e da navegação.

A compilação pode ser repetida com:

```bash
npm run build
npm run preview
```

`node_modules` e `dist` não fazem parte do ZIP: são gerados pelos comandos acima. Se publicar em uma hospedagem estática, configure o retorno de `index.html` para as rotas da SPA; o Vite já faz isso durante o desenvolvimento e a pré-visualização.
