# Marvel API - Consulta de Personagens

Projeto desenvolvido em 2024 que consome a API pública da Marvel para buscar informações de personagens, usando Node.js com Express, Axios e autenticação via MD5. A API é consumida com requisições RESTful e pode ser testada com Postman.

---

## Descrição

Este projeto consiste em uma aplicação backend simples que expõe uma API para consultar dados de personagens da Marvel.  
Utiliza:  
- **Express** para o servidor HTTP  
- **Axios** para chamadas HTTP à API da Marvel  
- **MD5** para gerar o hash necessário na autenticação da Marvel API  
- **dotenv** para gerenciamento de variáveis de ambiente (chaves da API)  

A aplicação também serve arquivos estáticos para o frontend que exibe os resultados.

---

## Tecnologias

- Node.js  
- Express  
- Axios  
- MD5  
- dotenv  
- API Marvel RESTful  

---

## Como usar

### Pré-requisitos

- Node.js instalado  
- Conta e chaves (publica e privada) da Marvel Developer Portal  
- Postman para testes da API (opcional)

### Configuração

1. Clone o repositório:  
   ```bash
   git clone <URL-do-repositório>
   cd <nome-do-repositório>
  
