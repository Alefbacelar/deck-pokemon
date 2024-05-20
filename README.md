# BaralhoPokemon

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.

## Descrição do Projeto

O projeto visa criar uma aplicação web para permitir que os usuários criem, editem, visualizem e removam baralhos de Pokémon. Cada baralho pode conter um mínimo de 24 cartas e um máximo de 60 cartas.

## Tecnologias Utilizadas

- Angular: Framework de desenvolvimento front-end
- Tailwind CSS: Framework de estilo CSS
- Infragistics: Biblioteca de componentes de interface do usuário
- PokéAPI: API para obtenção de informações sobre cartas de Pokémon

## Estrutura do Projeto

### Componentes Angular:

- deck-list: Lista os baralhos existentes e fornece opções para criar, editar, visualizar e remover baralhos.
- deck-new: Permite a criação de novos baralhos, adicionando cartas de Pokémon selecionadas e tambem
permite a edição de baralhos existentes, incluindo a adição e remoção de cartas de Pokémon.
- deck-details: Exibe detalhes de um baralho específico, incluindo o nome, número de cartas, tipos únicos e uma lista de cartas no baralho.

### Serviços Angular:

- deck-pokemon.service: Gerencia a obtenção, criação, edição e remoção de baralhos de Pokémon, além de interagir com a PokéAPI para obter informações sobre cartas.

## Instruções de Instalação

1. Clone o repositório do projeto do GitHub.
2. Instale as dependências do projeto executando `npm install`.
3. Inicie o servidor de desenvolvimento executando `ng serve`.
4. Acesse a aplicação em [http://localhost:4200](http://localhost:4200).

## Uso da Aplicação

### Visualização de Baralhos:

- Na página inicial, os baralhos existentes são listados em cards.
- Cada card exibe o nome do baralho e uma amostra das cartas incluídas.

### Criação de Novos Baralhos:

- Clique no botão "Criar Novo Baralho" para acessar o formulário de criação.
- Insira o nome do baralho e selecione as cartas desejadas.
- Clique em "Criar Baralho" para concluir o processo.

### Edição de Baralhos:

- Clique no botão "Editar" no card de um baralho existente para acessar o formulário de edição.
- Faça as alterações desejadas no nome ou nas cartas do baralho.
- Clique em "Atualizar Baralho" para salvar as alterações.

### Visualização de Detalhes do Baralho:

- Clique no botão "Ver Detalhes" no card de um baralho existente para visualizar detalhes completos.
- Os detalhes incluem o nome do baralho, o número de cartas, os tipos únicos e uma lista completa de cartas incluídas.

