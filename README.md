# 💼 Portfólio Profissional — Alex

**Aluno:** Alex
**Curso:** Técnico em Desenvolvimento de Sistemas — Centro Paula Souza (EAD)
**Componente:** Desenvolvimento de Sistemas I — Agenda 15 (Fichário)

🔗 **Site publicado:** https://SEU-USUARIO.github.io/portfolio/
📁 **Repositório:** https://github.com/SEU-USUARIO/portfolio](https://github.com/aagit89/portfolio

---

## 📌 Descrição do portfólio

Site de apresentação pessoal e profissional, desenvolvido a partir do projeto construído na Agenda 15 e evoluído com novos recursos visuais e interativos.
O portfólio apresenta quem eu sou, as tecnologias que estou estudando, minha trajetória, os projetos que desenvolvi e as formas de contato.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso no projeto |
|---|---|
| **HTML5** | Estrutura semântica da página (`nav`, `section`, `footer`) |
| **CSS3** | Folha de estilo própria (`css/style.css`): animações, hover, linha do tempo, ajustes do modo escuro |
| **Bootstrap 5.3** | Grid, navbar, carousel, cards, modais, barras de progresso e tema claro/escuro |
| **JavaScript** | Script próprio (`js/script.js`): troca de tema, efeito de digitação, animações ao rolar, botão voltar ao topo |
| **Bootstrap Icons / Devicon** | Ícones da interface e das tecnologias |
| **Git, GitHub e GitHub Pages** | Versionamento e publicação do site |

## 📂 Estrutura de pastas

```
portfolio/
├── index.html        → página principal
├── README.md         → este arquivo
├── css/
│   └── style.css     → estilos próprios
├── js/
│   └── script.js     → scripts dos recursos novos
└── imagens/          → imagens do carousel, perfil e projetos
```

## ⚙️ Funcionamento do projeto

O site é uma página única (*one page*), dividida em seções que são acessadas pelo menu:

1. **Menu de navegação (Navbar)** — fixo no topo (`sticky-top`). Cada link aponta para o `id` de uma seção (`#perfil`, `#habilidades`, `#projetos`, `#contato`). No celular, o menu vira um botão (*hambúrguer*) e se fecha sozinho ao clicar em um link. O **Scrollspy** do Bootstrap destaca o item do menu da seção que está na tela.
2. **Carousel** — área de abertura com três slides, indicadores, setas e transição `carousel-fade`. Cada slide tem título, texto e botão que leva a uma seção.
3. **Perfil** — foto, nome, área, texto de apresentação, cards de informações (localização, interesse, formação e objetivo) e cards com as tecnologias usando Devicon.
4. **Habilidades e Formação** *(seção nova)* — barras com o nível em cada tecnologia e uma linha do tempo com a trajetória.
5. **Projetos** — três cards com imagem, etiquetas de tecnologia, descrição e botão **Ver detalhes**, que abre uma janela modal com mais informações do projeto.
6. **Contato** — card central com botões de e-mail (`mailto:`), GitHub e LinkedIn, que abrem em nova aba.
7. **Rodapé** — direitos autorais, com o ano preenchido automaticamente via JavaScript.

## ✨ Recurso novo adicionado

Além do que foi feito em aula, o portfólio recebeu os seguintes recursos — todos visíveis e funcionando no site:

| # | Recurso | Onde ver |
|---|---|---|
| 1 | **Modo claro / escuro** com botão no menu, que fica salvo no navegador | Botão "Modo escuro" na navbar |
| 2 | **Nova seção "Habilidades e Formação"** com barras de progresso animadas e linha do tempo | Menu → Habilidades |
| 3 | **Animações de entrada ao rolar a página** (os blocos aparecem subindo) | Todas as seções |
| 4 | **Efeitos visuais no carousel**: textos sobre as imagens, efeito de **digitação** no subtítulo, zoom lento na imagem (*Ken Burns*) e textos entrando em sequência | Topo da página |
| 5 | **Efeitos hover**: cards que sobem com sombra, zoom nas imagens dos projetos, foto de perfil que gira e linha animada nos links do menu | Perfil, Projetos e Menu |
| 6 | **Janelas modais** com os detalhes de cada projeto | Botão "Ver detalhes" |
| 7 | **Botão "voltar ao topo"** que aparece depois de rolar a página | Canto inferior direito |

## 🧩 Como os recursos foram implementados

### 1. Modo claro / escuro
O Bootstrap 5.3 tem suporte nativo a temas pelo atributo `data-bs-theme` na tag `<html>`. Para que as cores das seções mudem junto, troquei `bg-white`/`text-muted` por classes que acompanham o tema (`bg-body`, `bg-body-tertiary`, `text-body-secondary`).
No `script.js`, a função `aplicarTema()` muda esse atributo e troca o ícone e o texto do botão. A escolha é gravada com `localStorage`, então, ao voltar ao site, o tema escolhido continua. Se não houver escolha salva, o site segue a preferência do sistema (`prefers-color-scheme`).

```js
btnTema.addEventListener("click", function () {
    const novoTema = html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    aplicarTema(novoTema);
    localStorage.setItem("tema", novoTema);
});
```

### 2. Seção Habilidades com barras animadas
Usei o componente `progress` do Bootstrap. Cada barra começa com `width: 0` no CSS e guarda o seu nível em um atributo `data-nivel="85"`. Quando a seção aparece na tela, o JavaScript aplica `barra.style.width = barra.dataset.nivel + "%"`, e a `transition` do CSS faz a barra "encher" suavemente.
A **linha do tempo** foi feita só com CSS: uma `ul` com borda à esquerda e um pseudo-elemento `::before` que desenha a bolinha de cada item.

### 3. Animações ao rolar a página
Os blocos recebem a classe `.revelar` (começam transparentes e 40px abaixo). No JavaScript, um `IntersectionObserver` detecta quando cada bloco entra na tela e adiciona a classe `.visivel`, que leva `opacity` a 1 e `transform` a 0 com transição. Cada elemento é animado uma única vez.

```js
const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            observador.unobserve(entrada.target);
        }
    });
}, { threshold: 0.15 });
```

### 4. Efeitos no carousel
- **Textos sobre a imagem:** `carousel-caption` centralizado verticalmente com `top: 50%` e `transform: translateY(-50%)`.
- **Digitação:** a função `digitar()` escreve uma letra por vez com `setTimeout`, pausa, apaga e passa para a próxima frase do vetor `frases`. Um cursor `|` pisca com `@keyframes`.
- **Zoom lento (Ken Burns):** `@keyframes zoomLento` aplica `scale(1)` → `scale(1.12)` na imagem do slide ativo.
- **Entrada em sequência:** cada elemento da legenda usa `@keyframes subir` com `animation-delay` diferente (`:nth-child`).

### 5. Efeitos hover
Feitos só com CSS, usando `transition` e a pseudo-classe `:hover`: `transform: translateY(-8px)` e `box-shadow` nos cards, `scale(1.1)` na imagem do projeto (com `overflow: hidden` no contêiner), e uma linha `::after` sob os links do menu, que também aparece no link ativo do Scrollspy.

### 6. Modais dos projetos
Componente `modal` do Bootstrap. Cada botão "Ver detalhes" usa `data-bs-toggle="modal"` e `data-bs-target="#modalP1"` para abrir a janela correspondente — sem precisar escrever JavaScript.

### 7. Botão voltar ao topo
Um link fixo (`position: fixed`) que começa invisível. Um evento `scroll` no JavaScript adiciona a classe `.mostrar` quando a página passa de 500px de rolagem. A rolagem suave vem de `scroll-behavior: smooth` no CSS.

> **Acessibilidade:** quem configurou o sistema para "reduzir movimento" (`prefers-reduced-motion`) vê o site sem animações.

## 🚀 Como executar

- **Online:** acesse o link do GitHub Pages no início deste README.
- **No computador:** baixe ou clone o repositório e abra o arquivo `index.html` no navegador (é necessária internet para carregar o Bootstrap e os ícones pela CDN).

```bash
git clone https://github.com/SEU-USUARIO/portfolio.git
```

---
© 2026 — Alex
