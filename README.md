# Portfólio Pessoal & Acadêmico

> Portfólio online minimalista de alta performance desenvolvido para apresentar meu perfil profissional, competências técnicas, histórico acadêmico e projetos na área de Tecnologia da Informação.

O projeto foi construído inteiramente utilizando tecnologias web nativas (**HTML5, CSS3 e JavaScript puro**), sem o uso de frameworks de estilização ou bibliotecas externas, seguindo rigorosos padrões de acessibilidade, responsividade e separação de conceitos.

---

## 🔗 Demonstração Online

O site está publicado e pode ser acessado na internet através do link:
👉 **[https://victor1308code.github.io/portifolio-victor-oliveira/](https://victor1308code.github.io/portifolio-victor-oliveira/)**

---

## 🚀 Principais Recursos

- **Persistência de Preferências**: Seleção de Tema (Claro/Escuro) e Tipografia (Sans/Mono) persistidas de forma segura no `localStorage` do navegador para manter a escolha do usuário entre sessões.
- **Background Generativo Interativo**: Tela de fundo animada renderizada programaticamente via HTML5 Canvas 2D, com algoritmos de colisão elástica e atração de partículas que reagem dinamicamente à movimentação e presença do cursor do mouse. A animação pausa automaticamente quando a aba não está visível, economizando CPU/bateria.
- **Validação de Formulário**: Validação de campos obrigatórios e formato de e-mail no frontend, com feedback visual e acessível (via `aria-describedby`) por campo. Ao validar com sucesso, o formulário abre o cliente de e-mail do visitante com a mensagem pronta para `victor1308pro@gmail.com`.
- **Design Minimalista & Responsivo**: Layout grid fluido contornado por uma moldura fina de 1px, inspirado na estética geométrica contemporânea, perfeitamente adaptado para dispositivos móveis, tablets e monitores de alta resolução (desktops).
- **SEO básico**: `robots.txt`, `sitemap.xml`, favicon e meta tags Open Graph em todas as páginas.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação semântica e acessível da página.
- **CSS3 (Vanilla)**: Design sistemático baseado em variáveis customizadas (`:root`), transições suaves e responsividade via Media Queries.
- **JavaScript (ES6+)**: Manipulação nativa do DOM, lógica de persistência e renderização matemática no Canvas.

---

## 📂 Estrutura de Arquivos

```bash
├── index.html         # Página principal de apresentação pessoal (entrada do site)
├── sobre.html         # Redirecionador para index.html (mantido por compatibilidade com links antigos)
├── formacao.html      # Histórico de carreira, certificações e idiomas
├── portfolio.html     # Vitrine de repositórios do GitHub
├── contato.html       # Formulário de mensagens e modal de sucesso
├── robots.txt         # Diretivas de rastreamento para buscadores
├── sitemap.xml        # Mapa do site para indexação
├── css/
│   └── style.css      # Folha de estilos centralizada e variáveis de temas
├── js/
│   ├── app.js         # Inicializador de preferências e animação em Canvas
│   ├── contato.js     # Lógica de validação do formulário e controle do modal
│   └── partials.js    # Injeta o header/navegação compartilhado entre as páginas
└── prints/            # Capturas de tela do sistema em produção
```

---

## 💻 Execução Local

Para rodar o projeto localmente em sua máquina, basta clonar o repositório e abrir qualquer um dos arquivos HTML no seu navegador de preferência:

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/victor1308code/portifolio-victor-oliveira.git
   ```
2. **Navegar para a pasta**:
   ```bash
   cd portifolio-victor-oliveira
   ```
3. **Executar**:
   Basta dar duplo clique no arquivo `index.html` (ou usar uma extensão de servidor local do VS Code como a *Live Server*).

---

## 👤 Autor

Desenvolvido por **Victor Hugo Costa Silva De Oliveira**
- **E-mail**: [victor1308pro@gmail.com](mailto:victor1308pro@gmail.com)
- **LinkedIn**: [linkedin.com/in/victoroliveira1308](https://linkedin.com/in/victoroliveira1308)
- **GitHub**: [github.com/victor1308code](https://github.com/victor1308code)