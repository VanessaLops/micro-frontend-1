
# Micro Frontend 1 - React + Vite

Este projeto é um exemplo de Micro Frontend 1, desenvolvido com React e Vite. Ele se comunica com o Micro Frontend 2 através de um iframe. O objetivo deste projeto é demonstrar como você pode integrar micro frontends usando a abordagem de iframes para comunicação entre diferentes partes da aplicação.

```bash
Tecnologias
React (v18)
Vite (v5)
TypeScript
Styled Components
```
Pré-requisitos
Certifique-se de que você tenha os seguintes pré-requisitos:

Node.js (versão recomendada: 16 ou superior)
npm ou yarn para gerenciamento de pacotes


# Como rodar o projeto
Passo 1: Clone o repositório
Clone o repositório do Micro Frontend 1:

```bash
  npm run test
```


# Estrutura do Projeto
O projeto tem a seguinte estrutura:

```
src/ 
– Contém o código-fonte do projeto, incluindo componentes pages etc.
public/ 
– Arquivos estáticos (ícones, imagens, etc.).
vite.config.js – Configuração do Vite.
```
# Como o Micro Frontend 1 se comunica com o Micro Frontend 2?

O Micro Frontend 1 integra o Micro Frontend 2 dentro de um iframe. O código a seguir mostra como criar o iframe para carregar o conteúdo do Micro Frontend 2.


```javascript
const MicroFrontendPage = () => {
  return (
    <div>
      <iframe
        src="" 
        width="100%"
        height="600px"
        style={{ border: 'none' }}
        title="Micro Frontend 2"
      />
    </div>
  );
};

export default MicroFrontendPage;

```
## Etiquetas

Adicione etiquetas de algum lugar, como: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Autores

- [@VanessaLops](https://www.github.com/VanessaLops)


## Licença

[MIT](https://choosealicense.com/licenses/mit/)


## Rodando os testes

Para rodar os testes, rode o seguinte comando

