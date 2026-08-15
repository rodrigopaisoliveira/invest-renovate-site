# Galeria de Projetos (entre Serviços e Sobre)

## Abordagem sugerida

Dado o volume de fotos e vídeos, separar o conteúdo em duas camadas:

1. **Destaques no site:** 4–6 pares de imagens "Antes / Depois" de alta qualidade, escolhidos para mostrar o impacto do trabalho. Essas ficam integradas na nova secção Galeria.
2. **Arquivo completo no OneDrive:** o restante do material organizado por pastas fica no OneDrive. No site adiciona-se um bloco claro com link para "Ver todos os projetos no OneDrive".

Assim o site carrega rápido, fica visualmente forte, e quem quiser ver mais acede ao arquivo organizado.

## O que vai ser criado

Nova secção "Galeria" com âncora `#galeria`, colocada entre os Serviços e o Sobre:

- Título + subtítulo curto ("Projetos realizados", "Antes e depois", etc.).
- Grelha responsiva de pares Antes/Depois (2–3 pares por linha em desktop, 1 em mobile).
- Cada par mostra lado a lado com etiqueta "Antes" / "Depois", cantos arredondados e leve zoom no hover.
- Clique numa imagem abre lightbox com navegação anterior/seguinte e fecho por X ou tecla Esc.
- Bloco final dentro da secção: botão/link para a pasta partilhada do OneDrive, com texto tipo "Ver mais fotos e vídeos no OneDrive".
- Link "Galeria" adicionado ao menu de navegação (desktop e mobile).

## Conteúdo até receber os ficheiros

Uso as imagens de remodelação já existentes no projeto como placeholder, organizando-as em pares "Antes / Depois" fictícios. Assim que o cliente enviar as fotos reais, substituo os placeholders pelos ficheiros reais (via assets CDN) e ajusto as legendas.

Para o link do OneDrive, o cliente deve fornecer o URL de partilha da pasta. Até lá coloco um placeholder visível no bloco final, com texto a explicar que o arquivo completo será disponibilizado em breve.

## Notas técnicas

- Novo componente `src/components/site/Gallery.tsx`, montado em `src/routes/index.tsx` entre `<Services />` e `<About />`.
- Ficheiros reais entram via `lovable-assets` (pointers `.asset.json`), com `loading="lazy"` nas imagens e `preload="metadata"` nos vídeos.
- Lightbox implementado com o Dialog do shadcn já presente no projeto; sem novas dependências.
- O link do OneDrive é apenas um `<a href="..." target="_blank" rel="noopener noreferrer">` — não requer integração.

## Próximo passo do cliente

Enviar:
- 4–6 pares de fotos Antes/Depois (preferencialmente horizontais, boa resolução) para integrar diretamente no site.
- URL de partilha da pasta do OneDrive para colocar no botão "Ver mais".
