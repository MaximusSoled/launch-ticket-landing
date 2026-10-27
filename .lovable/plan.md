# Botão "Garantir meu ingresso" com efeito brilhante

Aplicar o efeito do botão enviado (borda com brilho girando, pontilhado e reflexo no hover) aos botões de compra, mantendo:
- Cor atual (fundo em gradiente dourado, texto escuro)
- Tipografia atual (extra negrito, maiúsculas, espaçamento entre letras, tamanho pequeno)
- Tamanho atual (mesmo espaçamento interno, largura total no celular e na oferta)
- Cantos meio quadrados (arredondamento atual, ~8px)

## Detalhes técnicos
- Criar `src/components/ui/shiny-button.tsx` adaptado: renderiza um link `<a href>` (checkout) em vez de `<button>`, aceita `className`, remove padding/fonte/raio fixos do componente para herdar as classes atuais.
- Fundo: gradiente dourado (`--gradient-gold`) no padding-box; brilho da borda com tom dourado claro/âmbar em vez de laranja.
- Atualizar `Cta` em `src/routes/index.tsx` para usar o novo componente com as mesmas classes (`rounded-lg px-8 py-4 text-sm font-extrabold uppercase tracking-wider`).
- Respeita "reduzir movimento" do sistema.
