# @hp-ui/modal

Chakra UI modals manager.

Build in modal types:

- Modal
- Drawer
- Form
- Dialog
- ConfirmDialog
- MenuDialog

## Installation

```sh
$ yarn add @hp-ui/modals

#or

$ npm i @hp-ui/modals  --save
```

## Usage

### Add the ModalProvider to your app.

```ts
import { ModalsProvider } from '@hp-ui/modals'

export default App() {
  return (
    <ModalsProvider>
      {children}
    </ModalsProvider>
  )
}
```

### Open a modal

```ts
import { useModals } from '@hp-ui/modals'

function MyComponent() {
  const modals = useModals()

  modals.open({
    title: 'My modal',
    body: <>My modal body</>,
  })
}
```

### Open a drawer

```ts
import { useModals } from '@hp-ui/modals'

function MyComponent() {
  const modals = useModals()

  modals.drawer({
    title: 'My drawer',
    body: <>My drawer body</>,
  })
}
```

### Open a confirm dialog

```ts
import { useModals } from '@hp-ui/modals'

function MyComponent() {
  const modals = useModals()

  modals.confirm({
    title: 'Delete user',
    body: 'Are you sure you want to delete this user?'
    onConfirm: () => //delete user
  })
}
```

## Docs

## Source


## License

MIT 
