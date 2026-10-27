# Corrigir o botão para ficar como o modelo

Problema na imagem: aparecem faixas claras e um reflexo laranja por dentro do botão, e a luz girando na borda quase não aparece sobre o dourado.

## O que muda
- Remover as faixas/reflexo que estão manchando o fundo do botão.
- Borda fina escura em volta do botão, para destacar a luz.
- Luz girando continuamente pela borda (traço branco com tom laranja), bem visível, como no modelo.
- Pontilhado sutil acompanhando a luz, como no modelo.
- No hover: a luz se espalha pela borda e surge um brilho suave na parte de baixo.
- Mantidos: fundo dourado, texto escuro, fonte, tamanho e cantos meio quadrados.

## Detalhes técnicos
- Reescrever a utilidade `btn-shiny` em `src/styles.css` seguindo fielmente o CSS do componente enviado (conic-gradient na border-box, `::before` com speckle mascarado, inner glow no `span::before`), trocando apenas `--gleam-base` pelo gradiente dourado e o raio pelo atual.
- Remover o `::after` (sheen) que gera as faixas visíveis sobre fundo claro.
- Conferir com captura de tela da prévia antes de concluir.
