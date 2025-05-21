# Welcome to Alfred

[View Design](https://www.figma.com/design/KImAEAqgfI0PM5gZ59Ktpq/ALFRED-MG?node-id=0-1&p=f&t=CdB8ifwESxCoQF3r-0)

<p align="middle">
<img  width="900px" height="500px" src="./resources/images/png/new-cover-showcase.png" />
</p>

## Dependencies

It includes a basic setup for a project with react-router v7 framework mode and:

- React 19 & react-compiler
- TypeScript
- TailwindCSS
- Vite
- Vitest (unit tests)
- Scripting
- Biome (linter & formatter)
- i18n support (client and server)
- Icons spritesheet generator
- lefthook hooks
- CI checks for quality control
- react-router-devtools
- Hono server
- .env var handling for server and client
- SEO robots.txt, sitemap-index and sitemap built in.

## Internationalization

This stack uses i18next for internationalization. It supports both client and
server side translations. Features included out of the box:

- Support for multiple languages
- Typesafe resources
- client side translations are fetched only when needed
- language switcher
- language detector (uses the request to detect the language, falls back to your
  fallback language)

## Hono server

This stack uses Hono for the server. More information about Hono can be found
[here](https://honojs.dev/). Another important thing to note is that we use a
dependency called `react-router-hono-server` which is a wrapper for Hono that
allows us to use Hono in our React Router application.

The server comes pre-configured with:

- i18next middleware
- caching middleware for assets
- easily extendable global application context
- .env injection into context

In order to add your own middleware, extend the context, or anything along those
lines, all you have to do is edit the server inside the `entry.server.tsx` file.

## .env handling

This stack parses your `.env` file and injects it into the server context. For
the client side, in the `root.tsx` file, we use the `useLoaderData` hook to get
the `clientEnv` from the server and set it as a global variable on the `window`
called `env`. If you need to access the env variables in both environments, you
can create a polyEnv helper like this:

```ts
// app/utils/env.ts
// This will return the process.env on the server and window.env on the client
export const polyEnv = typeof process !== 'undefined' ? process.env : window.env
```

The server will fail at runtime if you don't set your `.env` file properly.

## Externals

- [Icons](https://icon-sets.iconify.design/); <i>When copying, make sure to
  extract only the `<path />` element; it's what the internal custom `<Icon />`
  component is expecting.</i>

- #### Routing
  Our routing follows a file-base routing system similar to that of Next.js in
  the early days, or currently in Remix. For more information, please, refer to
  the
  [RRV7 official documentation](https://reactrouter.com/how-to/file-route-conventions).

## Structure & convention

<p align="middle">
	<img  width="900px" height="500px" src="./resources/images/png/structure-tree.png" />
</p>

## Authors

- [_@jayad23_](https://github.com/jayad23)
- [_@jonathanroddev_](https://github.com/jonathanroddev)
