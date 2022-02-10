# react-native-modular-app-host

Projeto base para implementação de arquitetura modular utilizando React Native

## Ideia

A ideia de construir um app modular surgiu para que múltiplos times possam atuar no desenvolvimento do projeto de forma independente, podendo testar os módulos individualmente e depois serem incluidos na aplicação host por meio de dependências.

Cada módulo é um conjunto de rotas do React Navigation que são incluídos no host em uma opção do menu de uma Tab Bar

## Módulos

Abaixo um descritivo dos módulos utilizados no app

### [@rpc_1910/ui](https://github.com/rpc1910/rn-ui-lib)

Biblioteca de componentes de interface, sendo possível configurar temas

### [@rpc_1910/home-module](https://github.com/rpc1910/rn-home-module)

Conjunto de rotas da funcionalidade da home

## Proxy de módulos

Para facilitar o desenvolvimento dos módulos é possível configurar um proxy, alterando o caminho de onde o módulo será carregado.
Dessa forma, é possível possuir uma versão instalada como dependência e realizar um proxy para a pasta do repositório do módulo.
Para adicionar essa configuração basta adicionar um arquivo chamado `module.config.js` na raiz do projeto com o mapeamento de módulos e pastas.
Esse arquivo não deve ser adicionado ao git, pois como se trata de uma configuração local de desenvolvimento o caminho dos paths podem mudar.

Exemplo do arquivo `module.config.js`

```js
const path = require('path');

module.exports = {
  '@rpc_1910/home-module': path.resolve('..', 'home-module', 'src'),
};
```

## TODO

- [x] Estrutura básica do projeto
- [x] Configuração de tema
- [x] Configuração do módulo home
- [x] Desenvolvimento de módulos diretamente no host (Proxy)
- [ ] Compartilhamento de informações entre módulos
- [ ] Compartilhamento de headers default para chamadas com axios
- [ ] Estrutura para configuração do Redux
- [ ] Fluxo para app com autenticação
- [ ] Configuração multi flavor/targets
- [ ] Testar pipeline para forçar sempre as últimas versões dos módulos
