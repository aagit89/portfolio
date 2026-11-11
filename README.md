# Portfólio Profissional

**Aluno:** Alex C. Alves
**Curso:** Técnico em Desenvolvimento de Sistemas – Centro Paula Souza
**Atividade:** Agenda 15 – Desenvolvimento de Sistemas I

## Descrição do portfólio

Site pessoal para apresentar meu perfil, minhas habilidades, meus projetos e meus contatos.
Foi feito a partir do projeto da Agenda 15 e recebeu recursos novos.

## Tecnologias utilizadas

- HTML5
- CSS3
- Bootstrap 5.3
- JavaScript
- GitHub Pages

## Link do site publicado

https://aagit89.github.io/portfolio/

## Funcionamento do projeto

O site tem uma única página dividida em seções:

1. **Menu (Navbar):** fica fixo no topo. Cada link leva até uma seção pelo `id` (ex.: `#perfil`). No celular vira um botão de menu.
2. **Carousel:** três slides que trocam sozinhos a cada 3 segundos (`data-bs-interval="3000"`), com efeito de fade e setas para avançar e voltar. Cada slide tem um título, uma frase e um botão que leva a uma seção do site.
3. **Perfil:** foto, nome e uma apresentação.
4. **Habilidades:** barras que mostram meu nível em cada tecnologia.
5. **Projetos:** três cards com imagem, título e descrição.
6. **Contato:** botões para e-mail, GitHub e LinkedIn.
7. **Rodapé:** direitos autorais.

## Recurso novo adicionado

1. **Botão Modo escuro / Modo claro** no menu.
2. **Nova seção Habilidades** com barras de progresso.
3. **Animação hover:** os cards dos projetos sobem com sombra e a foto de perfil aumenta ao passar o mouse.

## Como o recurso foi implementado

**Modo escuro:** o Bootstrap 5.3 muda as cores do site pelo atributo `data-bs-theme` da tag `<html>`.
Um pequeno código JavaScript troca esse atributo entre `light` e `dark` quando o botão é clicado, e muda o texto do botão.

```js
document.getElementById("btnTema").onclick = function () {
    let html = document.documentElement;
    if (html.getAttribute("data-bs-theme") === "dark") {
        html.setAttribute("data-bs-theme", "light");
        this.textContent = "Modo escuro";
    } else {
        html.setAttribute("data-bs-theme", "dark");
        this.textContent = "Modo claro";
    }
};
```

**Seção Habilidades:** usei o componente `progress` do Bootstrap. A largura de cada barra é definida com `style="width: 80%"`.

**Animação hover:** feita no arquivo `css/style.css` com `transition` e `:hover`.
O `transform: translateY(-10px)` faz o card subir e o `transform: scale(1.1)` aumenta a foto.

```css
.card { transition: transform 0.3s, box-shadow 0.3s; }
.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.foto { transition: transform 0.3s; }
.foto:hover { transform: scale(1.1); }
```

## Estrutura de pastas

```
portfolio/
├── index.html
├── README.md
├── css/style.css
└── imagens/
```
