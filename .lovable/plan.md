# Galeria de Projetos (entre Serviços e Sobre)

Sim, pode enviar fotografias e vídeos aqui no chat (até 10 ficheiros por mensagem, 20MB cada). Ideal: fotos horizontais de boa qualidade e vídeos MP4 curtos.

## O que vai ser criado

Nova secção "Galeria" com âncora `#galeria`, colocada entre os Serviços e o Sobre:

- Título + subtítulo curto ("Projetos concluídos").
- Grelha responsiva de imagens (3 colunas em desktop, 2 em tablet, 1 em mobile) com cantos arredondados e leve zoom no hover, no mesmo estilo visual do resto do site.
- Vídeos apresentados como cartões na mesma grelha, com play/pausa (sem som por defeito, controlos visíveis).
- Clique numa imagem abre lightbox com navegação anterior/seguinte e fecho por X ou tecla Esc.
- Link "Galeria" adicionado ao menu de navegação (desktop e mobile).

## Conteúdo até receber os ficheiros

Uso as imagens de remodelação já existentes no projeto como placeholder, para a secção ficar visualmente completa. Assim que enviar as fotos e vídeos reais, substituo-as pelos ficheiros do cliente (guardados como assets CDN, para não pesar no projeto) e ajusto legendas/alt text.

## Notas técnicas

- Novo componente `src/components/site/Gallery.tsx`, montado em `src/routes/index.tsx` entre `<Services />` e `<About />`.
- Ficheiros reais entram via `lovable-assets` (pointers `.asset.json`), com `loading="lazy"` nas imagens e `preload="metadata"` nos vídeos para não atrasar o carregamento.
- Lightbox implementado com o Dialog do shadcn já presente no projeto; sem novas dependências.
