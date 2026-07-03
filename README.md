# Todo

Aplicação de lista de tarefas simples construída com React + TypeScript e Vite.

## Visão Geral

Este projeto é um front-end para gerenciar tarefas (to‑do). Ele foca em uma arquitetura leve e componetizada usando hooks personalizados e armazenamento local para persistência das tarefas.

Objetivos principais:

- Fornecer uma UI enxuta para criar, marcar como concluída e remover tarefas.
- Manter a lógica de estado separada em hooks reutilizáveis.
- Ser um exemplo prático de organização de um app React moderno com TypeScript e Vite.

## Status

Funcionalidades principais implementadas: criação, edição rápida, marcação como concluída, remoção e resumo de tarefas. Persistência via armazenamento local.

## Tecnologias

- Node.js (recomendado >= 18)
- pnpm (recomendado)
- Vite
- React 19
- TypeScript
- TailwindCSS
- Dependências relevantes: `use-local-storage`, `class-variance-authority`

## Instalação

1. Instale dependências:

```bash
pnpm install
```

2. Rodar em desenvolvimento:

```bash
pnpm dev
```

3. Build para produção:

```bash
pnpm build
```

4. Visualizar build localmente:

```bash
pnpm preview
```

5. Lint (ESLint):

```bash
pnpm lint
```

> Os scripts reais estão definidos em `package.json` (ex.: `dev`, `build`, `preview`, `lint`).

## Estrutura do Projeto

Raiz do `src/` com os principais diretórios:

- `src/` — código-fonte principal
  - `App.tsx` — entrada da aplicação
  - `main.tsx` — bootstrap do React + Vite
  - `index.css` — estilos globais (Tailwind)
  - `assets/` — ícones e imagens
  - `components/` — componentes UI reutilizáveis (botões, badges, inputs, skeletons, etc.)
  - `core-components/` — componentes específicos da aplicação (header, footer, task list, task item, resumo)
  - `helpers/` — utilitários (ex.: `utils.ts`)
  - `hooks/` — hooks React personalizados (ex.: `use-task.ts`, `use-tasks.ts`)
  - `models/` — tipos e interfaces (ex.: `task.ts`)
  - `pages/` — layouts e páginas (ex.: `page-home.tsx`, `layout-main.tsx`)

## Principais Módulos

- `components/` — pequenos blocos de UI que devem ser independentes e reutilizáveis.
- `core-components/` — composição de componentes para formar as views da aplicação (lista de tarefas, item de tarefa, sumário de tarefas, cabeçalho/rodapé).
- `hooks/use-tasks.ts` — hook que gerencia a coleção de tarefas: adicionar, remover, atualizar e persistir no armazenamento local.
- `hooks/use-task.ts` — hook para lógica centrada em uma única tarefa (validação, transformações, etc.).
- `models/task.ts` — interface/shape do objeto `Task` usado pela app (por exemplo: id, title, completed, createdAt).
- `helpers/utils.ts` — funções utilitárias usadas pela UI e hooks.

## Persistência

As tarefas são persistidas em armazenamento local do navegador (localStorage) via a dependência `use-local-storage` e pelos hooks em `hooks/`.

## Como Funciona (fluxo básico)

1. `App.tsx` renderiza o layout principal e injeta os `core-components`.
2. O hook `use-tasks` carrega o estado inicial do `localStorage` e expõe funções para manipular tarefas.
3. `task.list.tsx` consome o hook para listar tarefas e renderizar `task-item.tsx` para cada tarefa.
4. A UI chama as funções do hook para adicionar, editar rápido, marcar concluída ou remover tarefas — o hook atualiza o armazenamento local automaticamente.

## Extensões e Melhorias Sugeridas

- Adicionar testes unitários (Jest/Testing Library) para hooks e componentes.
- Suporte a filtros e ordenação avançada (por prioridade, data, tag).
- Sincronização com backend (API REST/GraphQL) para multi-dispositivo.
- Internacionalização (i18n) para suportar múltiplos idiomas.

## Como Contribuir

1. Abra uma issue descrevendo o problema ou feature.
2. Crie um branch com um nome descritivo.
3. Envie um pull request com uma descrição clara das mudanças.

Checklist básico para PRs:

- Código formatado e lintado (`pnpm lint`).
- Mudanças documentadas no `README.md` quando relevante.
- Testes adicionados quando aplicável.

## Arquivos importantes

- `package.json` — scripts e dependências
- `vite.config.ts` — configurações do Vite
- `tsconfig.json` / `tsconfig.app.json` — configurações TypeScript

## Contato / Maintainer

Mantenha as discussões e dúvidas no repositório (issues) ou contate o autor do projeto no canal apropriado.

## Licença

Este repositório não contém arquivo de licença por padrão. Recomenda-se adicionar uma licença (ex.: MIT) se for distribuir publicamente.

---

Se quiser, eu posso:

- adicionar um arquivo `LICENSE` (ex.: MIT),
- formatar e rodar o linter, ou
- criar arquivos de exemplo ou badges no topo do `README.md`.


