/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthenticatedRouteImport } from './routes/_authenticated/route'
import { Route as AuthenticatedIndexImport } from './routes/_authenticated/index'
import { Route as authSignInImport } from './routes/(auth)/sign-in'
import { Route as authOtpImport } from './routes/(auth)/otp'
import { Route as auth500Import } from './routes/(auth)/500'

// Create Virtual Routes

const errors503LazyImport = createFileRoute('/(errors)/503')()
const errors500LazyImport = createFileRoute('/(errors)/500')()
const errors404LazyImport = createFileRoute('/(errors)/404')()
const errors403LazyImport = createFileRoute('/(errors)/403')()
const errors401LazyImport = createFileRoute('/(errors)/401')()
const authSignUpLazyImport = createFileRoute('/(auth)/sign-up')()
const authSignIn2LazyImport = createFileRoute('/(auth)/sign-in-2')()
const authForgotPasswordLazyImport = createFileRoute(
  '/(auth)/forgot-password',
)()
const AuthenticatedConfiguracoesRouteLazyImport = createFileRoute(
  '/_authenticated/configuracoes',
)()
const AuthenticatedFaturasIndexLazyImport = createFileRoute(
  '/_authenticated/faturas/',
)()
const AuthenticatedConfiguracoesIndexLazyImport = createFileRoute(
  '/_authenticated/configuracoes/',
)()
const AuthenticatedCentralDeAjudaIndexLazyImport = createFileRoute(
  '/_authenticated/central-de-ajuda/',
)()
const AuthenticatedFaturasInvoiceIdLazyImport = createFileRoute(
  '/_authenticated/faturas/$invoiceId',
)()
const AuthenticatedConfiguracoesNotificacoesLazyImport = createFileRoute(
  '/_authenticated/configuracoes/notificacoes',
)()
const AuthenticatedConfiguracoesContaLazyImport = createFileRoute(
  '/_authenticated/configuracoes/conta',
)()
const AuthenticatedConfiguracoesAparenciaLazyImport = createFileRoute(
  '/_authenticated/configuracoes/aparencia',
)()

// Create/Update Routes

const AuthenticatedRouteRoute = AuthenticatedRouteImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedIndexRoute = AuthenticatedIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthenticatedRouteRoute,
} as any)

const errors503LazyRoute = errors503LazyImport
  .update({
    id: '/(errors)/503',
    path: '/503',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(errors)/503.lazy').then((d) => d.Route))

const errors500LazyRoute = errors500LazyImport
  .update({
    id: '/(errors)/500',
    path: '/500',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(errors)/500.lazy').then((d) => d.Route))

const errors404LazyRoute = errors404LazyImport
  .update({
    id: '/(errors)/404',
    path: '/404',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(errors)/404.lazy').then((d) => d.Route))

const errors403LazyRoute = errors403LazyImport
  .update({
    id: '/(errors)/403',
    path: '/403',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(errors)/403.lazy').then((d) => d.Route))

const errors401LazyRoute = errors401LazyImport
  .update({
    id: '/(errors)/401',
    path: '/401',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(errors)/401.lazy').then((d) => d.Route))

const authSignUpLazyRoute = authSignUpLazyImport
  .update({
    id: '/(auth)/sign-up',
    path: '/sign-up',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(auth)/sign-up.lazy').then((d) => d.Route))

const authSignIn2LazyRoute = authSignIn2LazyImport
  .update({
    id: '/(auth)/sign-in-2',
    path: '/sign-in-2',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(auth)/sign-in-2.lazy').then((d) => d.Route))

const authForgotPasswordLazyRoute = authForgotPasswordLazyImport
  .update({
    id: '/(auth)/forgot-password',
    path: '/forgot-password',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() =>
    import('./routes/(auth)/forgot-password.lazy').then((d) => d.Route),
  )

const AuthenticatedConfiguracoesRouteLazyRoute =
  AuthenticatedConfiguracoesRouteLazyImport.update({
    id: '/configuracoes',
    path: '/configuracoes',
    getParentRoute: () => AuthenticatedRouteRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/configuracoes/route.lazy').then(
      (d) => d.Route,
    ),
  )

const authSignInRoute = authSignInImport.update({
  id: '/(auth)/sign-in',
  path: '/sign-in',
  getParentRoute: () => rootRoute,
} as any)

const authOtpRoute = authOtpImport.update({
  id: '/(auth)/otp',
  path: '/otp',
  getParentRoute: () => rootRoute,
} as any)

const auth500Route = auth500Import.update({
  id: '/(auth)/500',
  path: '/500',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedFaturasIndexLazyRoute =
  AuthenticatedFaturasIndexLazyImport.update({
    id: '/faturas/',
    path: '/faturas/',
    getParentRoute: () => AuthenticatedRouteRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/faturas/index.lazy').then((d) => d.Route),
  )

const AuthenticatedConfiguracoesIndexLazyRoute =
  AuthenticatedConfiguracoesIndexLazyImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => AuthenticatedConfiguracoesRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/configuracoes/index.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedCentralDeAjudaIndexLazyRoute =
  AuthenticatedCentralDeAjudaIndexLazyImport.update({
    id: '/central-de-ajuda/',
    path: '/central-de-ajuda/',
    getParentRoute: () => AuthenticatedRouteRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/central-de-ajuda/index.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedFaturasInvoiceIdLazyRoute =
  AuthenticatedFaturasInvoiceIdLazyImport.update({
    id: '/faturas/$invoiceId',
    path: '/faturas/$invoiceId',
    getParentRoute: () => AuthenticatedRouteRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/faturas/$invoiceId.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedConfiguracoesNotificacoesLazyRoute =
  AuthenticatedConfiguracoesNotificacoesLazyImport.update({
    id: '/notificacoes',
    path: '/notificacoes',
    getParentRoute: () => AuthenticatedConfiguracoesRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/configuracoes/notificacoes.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedConfiguracoesContaLazyRoute =
  AuthenticatedConfiguracoesContaLazyImport.update({
    id: '/conta',
    path: '/conta',
    getParentRoute: () => AuthenticatedConfiguracoesRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/configuracoes/conta.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedConfiguracoesAparenciaLazyRoute =
  AuthenticatedConfiguracoesAparenciaLazyImport.update({
    id: '/aparencia',
    path: '/aparencia',
    getParentRoute: () => AuthenticatedConfiguracoesRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/configuracoes/aparencia.lazy').then(
      (d) => d.Route,
    ),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedRouteImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/500': {
      id: '/(auth)/500'
      path: '/500'
      fullPath: '/500'
      preLoaderRoute: typeof auth500Import
      parentRoute: typeof rootRoute
    }
    '/(auth)/otp': {
      id: '/(auth)/otp'
      path: '/otp'
      fullPath: '/otp'
      preLoaderRoute: typeof authOtpImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/sign-in': {
      id: '/(auth)/sign-in'
      path: '/sign-in'
      fullPath: '/sign-in'
      preLoaderRoute: typeof authSignInImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/configuracoes': {
      id: '/_authenticated/configuracoes'
      path: '/configuracoes'
      fullPath: '/configuracoes'
      preLoaderRoute: typeof AuthenticatedConfiguracoesRouteLazyImport
      parentRoute: typeof AuthenticatedRouteImport
    }
    '/(auth)/forgot-password': {
      id: '/(auth)/forgot-password'
      path: '/forgot-password'
      fullPath: '/forgot-password'
      preLoaderRoute: typeof authForgotPasswordLazyImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/sign-in-2': {
      id: '/(auth)/sign-in-2'
      path: '/sign-in-2'
      fullPath: '/sign-in-2'
      preLoaderRoute: typeof authSignIn2LazyImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/sign-up': {
      id: '/(auth)/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof authSignUpLazyImport
      parentRoute: typeof rootRoute
    }
    '/(errors)/401': {
      id: '/(errors)/401'
      path: '/401'
      fullPath: '/401'
      preLoaderRoute: typeof errors401LazyImport
      parentRoute: typeof rootRoute
    }
    '/(errors)/403': {
      id: '/(errors)/403'
      path: '/403'
      fullPath: '/403'
      preLoaderRoute: typeof errors403LazyImport
      parentRoute: typeof rootRoute
    }
    '/(errors)/404': {
      id: '/(errors)/404'
      path: '/404'
      fullPath: '/404'
      preLoaderRoute: typeof errors404LazyImport
      parentRoute: typeof rootRoute
    }
    '/(errors)/500': {
      id: '/(errors)/500'
      path: '/500'
      fullPath: '/500'
      preLoaderRoute: typeof errors500LazyImport
      parentRoute: typeof rootRoute
    }
    '/(errors)/503': {
      id: '/(errors)/503'
      path: '/503'
      fullPath: '/503'
      preLoaderRoute: typeof errors503LazyImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/': {
      id: '/_authenticated/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthenticatedIndexImport
      parentRoute: typeof AuthenticatedRouteImport
    }
    '/_authenticated/configuracoes/aparencia': {
      id: '/_authenticated/configuracoes/aparencia'
      path: '/aparencia'
      fullPath: '/configuracoes/aparencia'
      preLoaderRoute: typeof AuthenticatedConfiguracoesAparenciaLazyImport
      parentRoute: typeof AuthenticatedConfiguracoesRouteLazyImport
    }
    '/_authenticated/configuracoes/conta': {
      id: '/_authenticated/configuracoes/conta'
      path: '/conta'
      fullPath: '/configuracoes/conta'
      preLoaderRoute: typeof AuthenticatedConfiguracoesContaLazyImport
      parentRoute: typeof AuthenticatedConfiguracoesRouteLazyImport
    }
    '/_authenticated/configuracoes/notificacoes': {
      id: '/_authenticated/configuracoes/notificacoes'
      path: '/notificacoes'
      fullPath: '/configuracoes/notificacoes'
      preLoaderRoute: typeof AuthenticatedConfiguracoesNotificacoesLazyImport
      parentRoute: typeof AuthenticatedConfiguracoesRouteLazyImport
    }
    '/_authenticated/faturas/$invoiceId': {
      id: '/_authenticated/faturas/$invoiceId'
      path: '/faturas/$invoiceId'
      fullPath: '/faturas/$invoiceId'
      preLoaderRoute: typeof AuthenticatedFaturasInvoiceIdLazyImport
      parentRoute: typeof AuthenticatedRouteImport
    }
    '/_authenticated/central-de-ajuda/': {
      id: '/_authenticated/central-de-ajuda/'
      path: '/central-de-ajuda'
      fullPath: '/central-de-ajuda'
      preLoaderRoute: typeof AuthenticatedCentralDeAjudaIndexLazyImport
      parentRoute: typeof AuthenticatedRouteImport
    }
    '/_authenticated/configuracoes/': {
      id: '/_authenticated/configuracoes/'
      path: '/'
      fullPath: '/configuracoes/'
      preLoaderRoute: typeof AuthenticatedConfiguracoesIndexLazyImport
      parentRoute: typeof AuthenticatedConfiguracoesRouteLazyImport
    }
    '/_authenticated/faturas/': {
      id: '/_authenticated/faturas/'
      path: '/faturas'
      fullPath: '/faturas'
      preLoaderRoute: typeof AuthenticatedFaturasIndexLazyImport
      parentRoute: typeof AuthenticatedRouteImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedConfiguracoesRouteLazyRouteChildren {
  AuthenticatedConfiguracoesAparenciaLazyRoute: typeof AuthenticatedConfiguracoesAparenciaLazyRoute
  AuthenticatedConfiguracoesContaLazyRoute: typeof AuthenticatedConfiguracoesContaLazyRoute
  AuthenticatedConfiguracoesNotificacoesLazyRoute: typeof AuthenticatedConfiguracoesNotificacoesLazyRoute
  AuthenticatedConfiguracoesIndexLazyRoute: typeof AuthenticatedConfiguracoesIndexLazyRoute
}

const AuthenticatedConfiguracoesRouteLazyRouteChildren: AuthenticatedConfiguracoesRouteLazyRouteChildren =
  {
    AuthenticatedConfiguracoesAparenciaLazyRoute:
      AuthenticatedConfiguracoesAparenciaLazyRoute,
    AuthenticatedConfiguracoesContaLazyRoute:
      AuthenticatedConfiguracoesContaLazyRoute,
    AuthenticatedConfiguracoesNotificacoesLazyRoute:
      AuthenticatedConfiguracoesNotificacoesLazyRoute,
    AuthenticatedConfiguracoesIndexLazyRoute:
      AuthenticatedConfiguracoesIndexLazyRoute,
  }

const AuthenticatedConfiguracoesRouteLazyRouteWithChildren =
  AuthenticatedConfiguracoesRouteLazyRoute._addFileChildren(
    AuthenticatedConfiguracoesRouteLazyRouteChildren,
  )

interface AuthenticatedRouteRouteChildren {
  AuthenticatedConfiguracoesRouteLazyRoute: typeof AuthenticatedConfiguracoesRouteLazyRouteWithChildren
  AuthenticatedIndexRoute: typeof AuthenticatedIndexRoute
  AuthenticatedFaturasInvoiceIdLazyRoute: typeof AuthenticatedFaturasInvoiceIdLazyRoute
  AuthenticatedCentralDeAjudaIndexLazyRoute: typeof AuthenticatedCentralDeAjudaIndexLazyRoute
  AuthenticatedFaturasIndexLazyRoute: typeof AuthenticatedFaturasIndexLazyRoute
}

const AuthenticatedRouteRouteChildren: AuthenticatedRouteRouteChildren = {
  AuthenticatedConfiguracoesRouteLazyRoute:
    AuthenticatedConfiguracoesRouteLazyRouteWithChildren,
  AuthenticatedIndexRoute: AuthenticatedIndexRoute,
  AuthenticatedFaturasInvoiceIdLazyRoute:
    AuthenticatedFaturasInvoiceIdLazyRoute,
  AuthenticatedCentralDeAjudaIndexLazyRoute:
    AuthenticatedCentralDeAjudaIndexLazyRoute,
  AuthenticatedFaturasIndexLazyRoute: AuthenticatedFaturasIndexLazyRoute,
}

const AuthenticatedRouteRouteWithChildren =
  AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof AuthenticatedRouteRouteWithChildren
  '/500': typeof errors500LazyRoute
  '/otp': typeof authOtpRoute
  '/sign-in': typeof authSignInRoute
  '/configuracoes': typeof AuthenticatedConfiguracoesRouteLazyRouteWithChildren
  '/forgot-password': typeof authForgotPasswordLazyRoute
  '/sign-in-2': typeof authSignIn2LazyRoute
  '/sign-up': typeof authSignUpLazyRoute
  '/401': typeof errors401LazyRoute
  '/403': typeof errors403LazyRoute
  '/404': typeof errors404LazyRoute
  '/503': typeof errors503LazyRoute
  '/': typeof AuthenticatedIndexRoute
  '/configuracoes/aparencia': typeof AuthenticatedConfiguracoesAparenciaLazyRoute
  '/configuracoes/conta': typeof AuthenticatedConfiguracoesContaLazyRoute
  '/configuracoes/notificacoes': typeof AuthenticatedConfiguracoesNotificacoesLazyRoute
  '/faturas/$invoiceId': typeof AuthenticatedFaturasInvoiceIdLazyRoute
  '/central-de-ajuda': typeof AuthenticatedCentralDeAjudaIndexLazyRoute
  '/configuracoes/': typeof AuthenticatedConfiguracoesIndexLazyRoute
  '/faturas': typeof AuthenticatedFaturasIndexLazyRoute
}

export interface FileRoutesByTo {
  '/500': typeof errors500LazyRoute
  '/otp': typeof authOtpRoute
  '/sign-in': typeof authSignInRoute
  '/forgot-password': typeof authForgotPasswordLazyRoute
  '/sign-in-2': typeof authSignIn2LazyRoute
  '/sign-up': typeof authSignUpLazyRoute
  '/401': typeof errors401LazyRoute
  '/403': typeof errors403LazyRoute
  '/404': typeof errors404LazyRoute
  '/503': typeof errors503LazyRoute
  '/': typeof AuthenticatedIndexRoute
  '/configuracoes/aparencia': typeof AuthenticatedConfiguracoesAparenciaLazyRoute
  '/configuracoes/conta': typeof AuthenticatedConfiguracoesContaLazyRoute
  '/configuracoes/notificacoes': typeof AuthenticatedConfiguracoesNotificacoesLazyRoute
  '/faturas/$invoiceId': typeof AuthenticatedFaturasInvoiceIdLazyRoute
  '/central-de-ajuda': typeof AuthenticatedCentralDeAjudaIndexLazyRoute
  '/configuracoes': typeof AuthenticatedConfiguracoesIndexLazyRoute
  '/faturas': typeof AuthenticatedFaturasIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_authenticated': typeof AuthenticatedRouteRouteWithChildren
  '/(auth)/500': typeof auth500Route
  '/(auth)/otp': typeof authOtpRoute
  '/(auth)/sign-in': typeof authSignInRoute
  '/_authenticated/configuracoes': typeof AuthenticatedConfiguracoesRouteLazyRouteWithChildren
  '/(auth)/forgot-password': typeof authForgotPasswordLazyRoute
  '/(auth)/sign-in-2': typeof authSignIn2LazyRoute
  '/(auth)/sign-up': typeof authSignUpLazyRoute
  '/(errors)/401': typeof errors401LazyRoute
  '/(errors)/403': typeof errors403LazyRoute
  '/(errors)/404': typeof errors404LazyRoute
  '/(errors)/500': typeof errors500LazyRoute
  '/(errors)/503': typeof errors503LazyRoute
  '/_authenticated/': typeof AuthenticatedIndexRoute
  '/_authenticated/configuracoes/aparencia': typeof AuthenticatedConfiguracoesAparenciaLazyRoute
  '/_authenticated/configuracoes/conta': typeof AuthenticatedConfiguracoesContaLazyRoute
  '/_authenticated/configuracoes/notificacoes': typeof AuthenticatedConfiguracoesNotificacoesLazyRoute
  '/_authenticated/faturas/$invoiceId': typeof AuthenticatedFaturasInvoiceIdLazyRoute
  '/_authenticated/central-de-ajuda/': typeof AuthenticatedCentralDeAjudaIndexLazyRoute
  '/_authenticated/configuracoes/': typeof AuthenticatedConfiguracoesIndexLazyRoute
  '/_authenticated/faturas/': typeof AuthenticatedFaturasIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/500'
    | '/otp'
    | '/sign-in'
    | '/configuracoes'
    | '/forgot-password'
    | '/sign-in-2'
    | '/sign-up'
    | '/401'
    | '/403'
    | '/404'
    | '/503'
    | '/'
    | '/configuracoes/aparencia'
    | '/configuracoes/conta'
    | '/configuracoes/notificacoes'
    | '/faturas/$invoiceId'
    | '/central-de-ajuda'
    | '/configuracoes/'
    | '/faturas'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/500'
    | '/otp'
    | '/sign-in'
    | '/forgot-password'
    | '/sign-in-2'
    | '/sign-up'
    | '/401'
    | '/403'
    | '/404'
    | '/503'
    | '/'
    | '/configuracoes/aparencia'
    | '/configuracoes/conta'
    | '/configuracoes/notificacoes'
    | '/faturas/$invoiceId'
    | '/central-de-ajuda'
    | '/configuracoes'
    | '/faturas'
  id:
    | '__root__'
    | '/_authenticated'
    | '/(auth)/500'
    | '/(auth)/otp'
    | '/(auth)/sign-in'
    | '/_authenticated/configuracoes'
    | '/(auth)/forgot-password'
    | '/(auth)/sign-in-2'
    | '/(auth)/sign-up'
    | '/(errors)/401'
    | '/(errors)/403'
    | '/(errors)/404'
    | '/(errors)/500'
    | '/(errors)/503'
    | '/_authenticated/'
    | '/_authenticated/configuracoes/aparencia'
    | '/_authenticated/configuracoes/conta'
    | '/_authenticated/configuracoes/notificacoes'
    | '/_authenticated/faturas/$invoiceId'
    | '/_authenticated/central-de-ajuda/'
    | '/_authenticated/configuracoes/'
    | '/_authenticated/faturas/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthenticatedRouteRoute: typeof AuthenticatedRouteRouteWithChildren
  auth500Route: typeof auth500Route
  authOtpRoute: typeof authOtpRoute
  authSignInRoute: typeof authSignInRoute
  authForgotPasswordLazyRoute: typeof authForgotPasswordLazyRoute
  authSignIn2LazyRoute: typeof authSignIn2LazyRoute
  authSignUpLazyRoute: typeof authSignUpLazyRoute
  errors401LazyRoute: typeof errors401LazyRoute
  errors403LazyRoute: typeof errors403LazyRoute
  errors404LazyRoute: typeof errors404LazyRoute
  errors500LazyRoute: typeof errors500LazyRoute
  errors503LazyRoute: typeof errors503LazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
  auth500Route: auth500Route,
  authOtpRoute: authOtpRoute,
  authSignInRoute: authSignInRoute,
  authForgotPasswordLazyRoute: authForgotPasswordLazyRoute,
  authSignIn2LazyRoute: authSignIn2LazyRoute,
  authSignUpLazyRoute: authSignUpLazyRoute,
  errors401LazyRoute: errors401LazyRoute,
  errors403LazyRoute: errors403LazyRoute,
  errors404LazyRoute: errors404LazyRoute,
  errors500LazyRoute: errors500LazyRoute,
  errors503LazyRoute: errors503LazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authenticated",
        "/(auth)/500",
        "/(auth)/otp",
        "/(auth)/sign-in",
        "/(auth)/forgot-password",
        "/(auth)/sign-in-2",
        "/(auth)/sign-up",
        "/(errors)/401",
        "/(errors)/403",
        "/(errors)/404",
        "/(errors)/500",
        "/(errors)/503"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated/route.tsx",
      "children": [
        "/_authenticated/configuracoes",
        "/_authenticated/",
        "/_authenticated/faturas/$invoiceId",
        "/_authenticated/central-de-ajuda/",
        "/_authenticated/faturas/"
      ]
    },
    "/(auth)/500": {
      "filePath": "(auth)/500.tsx"
    },
    "/(auth)/otp": {
      "filePath": "(auth)/otp.tsx"
    },
    "/(auth)/sign-in": {
      "filePath": "(auth)/sign-in.tsx"
    },
    "/_authenticated/configuracoes": {
      "filePath": "_authenticated/configuracoes/route.lazy.tsx",
      "parent": "/_authenticated",
      "children": [
        "/_authenticated/configuracoes/aparencia",
        "/_authenticated/configuracoes/conta",
        "/_authenticated/configuracoes/notificacoes",
        "/_authenticated/configuracoes/"
      ]
    },
    "/(auth)/forgot-password": {
      "filePath": "(auth)/forgot-password.lazy.tsx"
    },
    "/(auth)/sign-in-2": {
      "filePath": "(auth)/sign-in-2.lazy.tsx"
    },
    "/(auth)/sign-up": {
      "filePath": "(auth)/sign-up.lazy.tsx"
    },
    "/(errors)/401": {
      "filePath": "(errors)/401.lazy.tsx"
    },
    "/(errors)/403": {
      "filePath": "(errors)/403.lazy.tsx"
    },
    "/(errors)/404": {
      "filePath": "(errors)/404.lazy.tsx"
    },
    "/(errors)/500": {
      "filePath": "(errors)/500.lazy.tsx"
    },
    "/(errors)/503": {
      "filePath": "(errors)/503.lazy.tsx"
    },
    "/_authenticated/": {
      "filePath": "_authenticated/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/configuracoes/aparencia": {
      "filePath": "_authenticated/configuracoes/aparencia.lazy.tsx",
      "parent": "/_authenticated/configuracoes"
    },
    "/_authenticated/configuracoes/conta": {
      "filePath": "_authenticated/configuracoes/conta.lazy.tsx",
      "parent": "/_authenticated/configuracoes"
    },
    "/_authenticated/configuracoes/notificacoes": {
      "filePath": "_authenticated/configuracoes/notificacoes.lazy.tsx",
      "parent": "/_authenticated/configuracoes"
    },
    "/_authenticated/faturas/$invoiceId": {
      "filePath": "_authenticated/faturas/$invoiceId.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/central-de-ajuda/": {
      "filePath": "_authenticated/central-de-ajuda/index.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/configuracoes/": {
      "filePath": "_authenticated/configuracoes/index.lazy.tsx",
      "parent": "/_authenticated/configuracoes"
    },
    "/_authenticated/faturas/": {
      "filePath": "_authenticated/faturas/index.lazy.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
