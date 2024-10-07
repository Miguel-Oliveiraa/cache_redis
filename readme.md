
# Estudo de Caso: Cache com Redis

Este estudo de caso explora o uso do Redis como um sistema de cache. Redis é um armazenamento de estrutura de dados em memória, usado como banco de dados, cache e broker de mensagens.

## Introdução

O Redis é conhecido por sua alta performance, flexibilidade e suporte para várias linguagens de programação. Neste estudo de caso, vamos configurar um servidor Redis e demonstrar como ele pode ser utilizado para melhorar a performance de aplicações web.

## Pré-requisitos

- Docker instalado na máquina local.

## Como Rodar

Para iniciar um contêiner Redis usando Docker, execute o seguinte comando:

```sh
docker run --name redis-cache -p 6379:6379 -d redis
```

Este comando faz o download da imagem do Redis (se ainda não estiver presente), cria e inicia um contêiner chamado `redis-cache`, e mapeia a porta 6379 do contêiner para a porta 6379 da máquina host.

## Testando a Instalação

Para verificar se o Redis está funcionando corretamente, você pode conectar-se ao contêiner e usar o cliente Redis:

```sh
docker exec -it redis-cache redis-cli
```

Dentro do cliente Redis, você pode executar comandos como `PING` para testar a conectividade:

```sh
PING
```

Se tudo estiver funcionando corretamente, você deverá ver a resposta `PONG`.

## Como Rodar o Projeto Node

Para rodar o projeto Node, certifique-se de que você tem o Node.js e o npm instalados. Em seguida, execute o seguinte comando na raiz do projeto:

```sh
npm run dev
```

Este comando inicia o servidor de desenvolvimento do Node.js.

## Conclusão

Este estudo de caso demonstrou como configurar e iniciar um servidor Redis usando Docker. Redis pode ser uma ferramenta poderosa para melhorar a performance de suas aplicações através de caching eficiente.

## Referências

- [Documentação Oficial do Redis](https://redis.io/documentation)
- [Docker Hub - Redis](https://hub.docker.com/_/redis)