Selecione a linguagem: **portugues**, [ingles](https://github.com/rodrigoSilva23/desafio-final-cod3r-web-moderno)

# Desafio!
Com o objetivo de aprimorar e validar ainda mais os conhecimentos adquiridos no curso de Desenvolvimento Web Moderno, busquei refinar o código base por meio de várias modificações significativas. Implementei uma estrutura de pastas mais otimizada, introduzi validações essenciais e documentei minuciosamente cada etapa usando a ferramenta Swagger.

Aqui está a versão aprimorada do código base ([versao-final](https://github.com/cod3rcursos/knowledge/tree/master/versao-final)) que serviu como ponto de partida para essas melhorias. As mudanças implementadas foram cuidadosamente projetadas para reforçar a arquitetura do projeto e garantir a qualidade do código desenvolvido.

## Funcionalidades

- login
  - signin
  - validateToken
- users
  - ['create','get', 'update' ] users
  - validateToken
- categories
  - ['create','get', 'update','delete' ] category
  - categories by tree
  - categories with patch
- articles
  - ['create','get', 'update','delete' ] articles
  - find article by category


## Tecnologias usadas

- docker
- javascript - nodeJS

## Pre-requisitos

Antes de iniciar a instalação do projeto, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- Docker: [How to install Docker](https://www.docker.com/get-started/)
- Docker Compose

Certifique-se de que todas as dependências necessárias estejam instaladas antes de prosseguir com as etapas a seguir.


## Etapa 1: Clonar o repositório

```bash
  git clone https://github.com/rodrigoSilva23/desafio-final-cod3r-web-moderno.git
```

## Etapa 2: Instalação

```bash
    cd desafio-final-cod3r-web-moderno
    docker-compose up
```

## rotas

Você pode conferir as rotas de serviço disponíveis indo para:

#### with wragger

- [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

#### with redoc

- [http://localhost:3000/docs](http://localhost:3000/docs)

Isso fornecerá uma visão geral de todos os endpoints disponíveis em sua API.

<p>
Explore as rotas listadas para entender os diferentes pontos finais e recursos que sua API oferece. Cada rota terá sua descrição e métodos HTTP suportados, como GET, POST, PUT, DELETE, entre outros.
</p>

## Possíveis Erros

Existe a possibilidade de ocorrer um erro de permissão ao executar o comando docker-compose up. Para corrigir isso, você pode conceder permissões de execução aos scripts de produto e serviço.

Para conceder permissões de execução ao arquivo entrypoint.sh, você pode executar o seguinte comando no terminal:

```bash
   chmod +x .docker/entrypoint.sh

```

isso dará permissão para executar o script.

## Autor

- [@rodrigosilvaDev23](https://github.com/rodrigoSilva23)

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](https://opensource.org/licenses/MIT) para obter mais informações.
