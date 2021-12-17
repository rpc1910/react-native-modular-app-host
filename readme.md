# react-native-modular-app-host

Projeto de teste para implementação de aplicativo modular utilizando React Native

## Ideia

A ideia de construir um app modular surgiu para que múltiplos times possam atuar no desenvolvimento do projeto de forma independente, podendo testar os módulos individualmente e depois serem incluidos na aplicação host por meio de dependências.

Cada módulo é um conjunto de rotas do React Navigation que são incluídos no host em uma opção do menu de uma Tab Bar

## Módulos

Abaixo um descritivo dos módulos utilizados no app

### [@rpc_1910/ui](https://github.com/rpc1910/rn-ui-lib)

Biblioteca de componentes de interface, sendo possível configurar temas

### [@rpc_1910/home-module](https://github.com/rpc1910/rn-home-module)

Conjunto de rotas da funcionalidade da home

## TODO

- [x] Estrutura básica do projeto
- [x] Configuração de tema
- [x] Configuração do módulo home
- [ ] Compartilhamento de informações entre módulos
- [ ] Compartilhamento de headers default para chamadas com axios
- [ ] Estrutura para configuração do Redux
- [ ] Fluxo para app com autenticação
- [ ] Configuração multi flavor/targets
