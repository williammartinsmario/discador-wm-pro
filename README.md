# Wm Discador

Aplicação web simples para organizar ligações e contatos de WhatsApp a partir de planilhas CSV. O app funciona 100% no navegador e armazena os dados no `localStorage`, dispensando servidores ou banco de dados externos.

## Como usar
1. Abra o `index.html` no navegador (basta dar duplo clique ou usar um servidor estático).
2. Importe um arquivo CSV com cabeçalho `Nome,Número` para carregar os contatos pendentes.
3. Use os filtros de nome, lead e status para localizar rapidamente contatos específicos.
4. Registre o resultado da ligação selecionando status, preenchendo as informações e clicando em **Salvar**.
5. Faça download do histórico completo em CSV com o botão **Backup**.
6. Gere um `index-atualizado.html` com todos os contatos salvos usando **Baixar index** e mantenha o app pronto para uso offline.
7. Utilize **Reset Geral** para limpar pendentes, histórico e armazenamento local.

## Novidades
- Resumo com total de pendentes, ligações do dia e histórico completo.
- Filtro adicional por status e mensagens de estado quando não há contatos.
- Persistência dos contatos pendentes e deduplicação ao importar novos CSVs.
