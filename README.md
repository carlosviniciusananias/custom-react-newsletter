📢 Use este projeto, [contribua](https://github.com/carlosviniciusananias/vtex-newsletter) com ele ou abra problemas para ajudar a evoluí-lo.

# Newsletter

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

O aplicativo submete dados para sua base de dados, permitindo que os usuários da loja se cadastrem para receber futuras promoções/ofertas.

![vtex-newsletter](https://user-images.githubusercontent.com/32168339/154802287-33fcbe0c-0789-4262-a85b-39adfc565f45.png)

## Configurações

### Etapa 1 - Adicione vtex-newsletter às dependências do seu projeto

```npm install vtex-newsletter``` or
```yarn add vtex-newsletter```

### Etapa 2 - Importando o aplicativo e utilizando-o em seu projeto

```javascript
import React from 'react'
import Newsletter from 'vtex-newsletter/dist'

const Example = () => {
  return (
    <Newsletter BASE_URL={} title={} error={} sucess={} />
  )
}

export default Example
```

## Dicas

#### `vtex-newsletter` props

| Nome      | Tipo          | Descrição                    | Valor inicial |
| :------------: | :-----------: | :----------------------------: | :-----------: |
| `BASE_URL` | `[string]` | Permite especificr a url base do banco de dados. | `/api/dataentities/NL/documents` |
| `title` | `[string]` | Permite definir um título e/ou frase para o bloco. | `Newsletter` |
| `error` | `[string]` | Exibe uma mensagem informando o usuário que houve um erro em seu cadastro. | `Failed to send data! :(` |
| `sucess` | `[string]` | Exibe uma mensagem informando o usuário que seu cadastro foin realizado com sucesso. | `Successful sending data` |


<!-- DOCS-IGNORE:start -->
## Contribuições ✨

<table>
  <tr>
    <td align="center"><a href="https://github.com/carlosviniciusananias"><img src="https://avatars.githubusercontent.com/u/32168339?s=100" width="100px;" alt=""/><br /><sub><b>Carlos Vinicius Ananias</b></sub></a><br /></td>
  </tr>
</table>

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->
