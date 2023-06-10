# @hp-ui/clerk

Clerk Authentication Service for Saas UI.

Authentication strategies supported:

- Magic link login / sign up
- Password login / sign up
- Social login

## Installation

```sh
$ yarn add @hp-ui/clerk

#or

$ npm i @hp-ui/clerk  --save
```

## Usage

Add `ClerkAuthProvider` to your app root and add `authService` to `SaasProvider`.

```ts
import { ClerkAuthProvider } from '@hp-ui/clerk'

import { SaasProvider, AuthProvider } from '@hp-ui/react'

const App = ({ children }) => {
  return (
    <ClerkAuthProvider frontendApi={process.env.FRONTEND_API}>
      {({ clerk, authService }) => (
        <SaasProvider>
          <AuthProvider {...authService}>{children}</AuthProvider>
        </SaasProvider>
      )}
    </ClerkAuthProvider>
  )
}
```

## License

MIT 
