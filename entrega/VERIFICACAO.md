# Verificação da atividade

Testes executados em 29/09/2026 com Chromium via Playwright, após `npm run build`, usando `npm run preview`.

- OK: `/` → Sistema de Produtos.
- OK: `/produtos` → Produtos.
- OK: `/produtos/cadastrar` → Cadastrar produto.
- OK: `/produtos/1` → Teclado.
- OK: `/produtos/2` → Mouse.
- OK: `/produtos/3` → Monitor.
- OK: `/categorias` → Categorias.
- OK: `/categorias/informatica` → Informática.
- OK: `/categorias/acessorios` → Acessórios.
- OK: `/categorias/eletronicos` → Eletrônicos.
- OK: `/sobre` → Sobre.
- OK: `/produtos/999` → Produto não encontrado.
- OK: `/produtos/abc` → Produto não encontrado.
- OK: `/categorias/inexistente` → Categoria não encontrada.
- OK: `/pagina-inexistente` → 404.
- OK: `/categorias/informatica/extra` → 404.
- OK: menu ativo, três categorias, detalhes corretos e retorno sem recarregar o documento.
- OK: histórico do navegador e atualização da rota de detalhes.
- OK: validação do formulário, cadastro, redirecionamento e dados compartilhados pelo Context API.
- OK: links de retorno quando o produto ou a categoria não existe.
- OK: lista, detalhes e formulário em tela de 390 px; títulos legíveis com preferência de tema escuro.
- OK: nenhuma exceção JavaScript durante os testes.
