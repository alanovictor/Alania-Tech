# Alania Tech Advisory — site em Next.js

## ⚠️ Esta é a versão para GitHub Pages

Esta pasta é uma **cópia adaptada** do projeto original, só pra publicação
estática no GitHub Pages via GitHub Actions. Design, conteúdo e
funcionalidades são exatamente os mesmos — só foram feitos os ajustes
técnicos necessários pro deploy estático (veja a seção "O que foi adaptado"
mais abaixo). A versão original (Node.js / Vercel) continua intacta, sem
nenhuma alteração.

### Como publicar

1. Crie um repositório novo no GitHub e suba o conteúdo desta pasta.
2. No repositório, vá em **Settings → Pages** e em "Build and deployment"
   escolha a fonte **GitHub Actions** (não "Deploy from a branch").
3. Faça um push para a branch `main` — o workflow em
   `.github/workflows/deploy.yml` builda e publica sozinho. Acompanhe em
   "Actions" no repositório.
4. Em alguns minutos o site fica no ar em
   `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Se o nome do repositório for exatamente `SEU-USUARIO.github.io`, o site
publica direto na raiz (`https://SEU-USUARIO.github.io/`) — o workflow já
detecta esse caso sozinho e ajusta os caminhos automaticamente. Também dá
pra rodar o deploy manualmente a qualquer momento pela aba **Actions** →
**Deploy to GitHub Pages** → **Run workflow**, sem precisar de um commit novo.

### O que foi adaptado (nada de design/conteúdo mudou)

- `next.config.js`: adicionado `output: "export"` (gera HTML/CSS/JS
  estático em vez de precisar de servidor Node.js) e `images.unoptimized:
  true` (GitHub Pages não tem o otimizador de imagem do Next.js — as
  imagens são servidas como estão).
- `basePath`/`assetPrefix`: como o GitHub Pages publica o site dentro de
  `/nome-do-repositorio/` (e não na raiz do domínio), todos os links de
  CSS/JS/imagens precisam desse prefixo. O workflow descobre o nome do
  repositório sozinho e configura isso automaticamente — não precisa editar
  nada à mão.
- `lib/basePath.ts` + `components/Hero.tsx`: o vídeo de fundo usa uma tag
  HTML `<video>` comum (não é um componente do Next.js), então esse
  prefixo precisou ser adicionado manualmente ali. É a única mudança de
  código de verdade neste projeto.
- `public/.nojekyll`: arquivo vazio que impede o GitHub Pages de ignorar a
  pasta `_next` (por padrão ele trata pastas começando com `_` como
  internas do Jekyll e as esconde).
- `.github/workflows/deploy.yml`: automação que builda o projeto e publica
  no Pages a cada push na branch `main`.

Recriação do layout enviado (React + Next.js 14, App Router, TypeScript e Tailwind CSS).

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000. É necessário acesso à internet na primeira execução, pois
as fontes (Google Fonts: Montserrat + Inter) são baixadas automaticamente pelo
`next/font`.

Para gerar a versão estática (o que o GitHub Actions faz automaticamente):

```bash
npm run build
```

Isso gera a pasta `out/` já pronta com HTML/CSS/JS/vídeos/imagens — dá pra
abrir `out/index.html` num navegador ou servir com qualquer servidor
estático (não roda mais com `npm start`, já que não existe mais um servidor
Node.js por trás — é tudo arquivo estático).

## Estrutura

```
app/
  layout.tsx        → fontes (Montserrat/Inter) e metadata
  page.tsx           → monta as seções da página
  globals.css         → estilos base e Tailwind
  icon.png             → favicon (detectado automaticamente pelo Next.js)
components/
  Header.tsx          → menu fixo/transparente, escurece ao rolar, responsivo
  Hero.tsx              → banner com vídeo de fundo (+ imagem de respaldo) e headline
  Intro.tsx               → texto de intro + seção "Portfólio & Clientes"
  PortfolioCarousel.tsx     → carrossel arrastável (projeto → link do cliente,
                              depoimento → expande o texto completo)
  ShowcaseBand.tsx            → serviços + mockup de tablet/monitor/celular
  Services.tsx                  → 3 cards de serviço com ícones
  MiniSite.tsx                   → preview em miniatura usado nos mockups
  TrianglePattern.tsx              → padrão decorativo de triângulos (SVG)
  CTAFooter.tsx                     → chamada final + rodapé
  Logo.tsx                           → marca "Alania Tech" (SVG, gradiente azul)
public/
  videos/hero-bg.mp4, hero-bg.webm    → vídeo de fundo do hero (já otimizado)
  images/depoimento-patricia-pain.jpg  → foto usada no carrossel de depoimentos
```

## Vídeo de fundo do topo (hero)

Já está no lugar (`public/videos/hero-bg.mp4` + `.webm`), otimizado a partir
do arquivo original — detalhes de compressão em `public/videos/LEIA-ME.txt`.
A imagem estática continua por baixo como respaldo: se o vídeo demorar pra
carregar ou falhar, a imagem aparece no lugar em vez de ficar em branco.
Quando o vídeo está pronto e tocando, o texto/triângulo do hero somem e fica
só o vídeo puro — eles só aparecem se o vídeo não carregar.

Pra trocar o vídeo no futuro, é só substituir os dois arquivos mantendo os
mesmos nomes (`hero-bg.mp4` / `hero-bg.webm`) — sem precisar mexer no código.
Se for recomprimir um vídeo novo, o comando usado está documentado no
`LEIA-ME.txt` da pasta.

## Menu (header)

Fica transparente sobre o hero. Ao rolar a página, ele fixa no topo e ganha
fundo escuro com leve desfoque — isso é feito em `components/Header.tsx`
com um listener de scroll (`window.scrollY > 40`).

## Portfólio & Clientes

Carrossel em `components/PortfolioCarousel.tsx`. Cada item do array `ITEMS`
é ou um projeto (tem `url` → clique abre o site do cliente em nova aba) ou
um depoimento (tem `quote` + `role` → clique expande o texto completo abaixo
do carrossel). Pra adicionar/trocar clientes, edite esse array.

## Redes sociais no rodapé

Estão ocultas por enquanto (constante `SHOW_SOCIALS = false` no topo de
`components/CTAFooter.tsx`) — o código continua lá, é só mudar pra `true`
quando os perfis reais estiverem prontos.

## Fotos placeholder

A foto de fundo do hero e o card "Vórtex Logística"/"Bloom Studio" no
carrossel ainda usam imagens de placeholder (picsum.photos) — troque pelas
imagens reais do cliente direto nos componentes (`Hero.tsx` e
`PortfolioCarousel.tsx`).

## Cores e fontes (tokens em `tailwind.config.ts`)

- Fundo: `ink.900` `#05070c` → `ink.500` `#1a2536` (tons escuros)
- Azul principal: `brand.blue` `#1c8dff`
- Ciano de destaque: `brand.cyan` `#4fd7f5`
- Texto secundário: `mist` `#8fa1b8`
- Título: Montserrat (extrabold/bold, caixa alta, tracking largo)
- Corpo: Inter

## Responsividade

Menu vira hambúrguer abaixo de `md`, grades e cards colapsam para 1–2
colunas, o carrossel de portfólio vira arrastável por toque no mobile, e os
mockups de dispositivo reduzem de escala automaticamente até telas pequenas.
