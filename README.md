# JustaFlix

Sistema desenvolvido como teste para vaga de desenvolvedor Front-end na Justa Pagamentos. O sistema consiste em um catálogo de filmes onde é possível pesquisar pelo filme desejado e ser redirecionado para página do filme específico com detalhes sobre a produção.

## Tecnologias

No desenvolvimento do JustaFlix foi utilizado o framework Front-end React, para fins de organização foi utilizado o typescript e para estilização utilizou-se o paradigma CSS-in-JS com a biblioteca Styled-Components. Todos os dados Presentes foram retirados da API [TMDB](https://www.themoviedb.org/?language=pt-BR). Alguns teste unitários foram implementados utilizando a biblioteca React Testing Library.

## Deploy
Por fim o deploy do sistema foi feito no Netlify de forma integrada ao repositorio no github está disponivel em http://justaflix.netlify.app/.


## Execução local

Para executar o programa é preciso criar e preencher um arquivo .env da raiz do programa, o formato deste arquivo está disponível em .env.example a chave da API do TMDB pode ser adquirida em seu site gratuitamente.
Após o arquivo .env ser preenchido, é possível executar o programa com o comando: 

`yarn start`

Gerar o build com:

`yarn build`

Executar os testes com:

`yarn test`

# ...

Para mais projetos e informações acesse:

http://arthurandrade.netlify.app/
