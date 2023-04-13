## Descrição

Criação de um CRUD usando o frameworkd NestJS e banco de dados MySQL.

## Instalação

```bash
$ npm install
```

## Configuração Banco MySQL Docker

```bash
# Instalação conforme SO
https://docs.docker.com/get-docker/

# Download image MySQL
docker pull mysql:5.7

# Configurar volume
No arquivo docker-db.yml alterar a linha 13, adicionando o path do seu host onde seus arquivos ficarão armazenados.
- /diretório/do/host:/var/lib/mysql

Na linha 16 alterar para o seu diretório.
              volumes:
 linha 16 ->    host:
  
https://docs.docker.com/storage/volumes/
```

## Execução Container Docker

```bash
# Executar o container MySQL
1º Entrar via terminal no path onde contém o arquivo docker-db.yml.
2º Executar o comando: "docker-compose -f docker-db.yml up -d".

# Validar containers em execução
Executar o comando "docker ps" no terminal.

# Parar a execução do container através do .yml
1º Entrar via terminal no path onde contém o arquivo docker-db.yml.
2º Executar o comando: "docker-compose -f docker-db.yml down".
```

## Executar a aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
