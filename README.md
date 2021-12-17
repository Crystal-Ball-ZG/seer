<br>
<div align="center">
<a href="https://zeitgeist-seer.com/">
<img src="https://zeitgeist-seer.com/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2Fbf2171bd-452a-4f7b-be19-809c514b53ea%2Fimages%2F321c7f77-5c9f-47ee-ba72-6b61a1a42eb9.png&w=1920&q=80" alt="urara" width="192px" />
</a>
</div>
<br>

<h1 align="center">Zeitgeist Seer</h1>
<p align="center">The new community built website for the Zeitgeist Seer program</p>
<p align="center">
<a href="https://seer.expectchaos.com">Demo</a>
/
<a href="https://34cc8e9a.sibforms.com/serve/MUIEAK6FZAU3pYIlmzKDy9dI37d8MKaNWPG8Mr2WaG73nyyU-LOvFMMrQSkFlhV-3WQQZogFaAcpZkof3TEUWvaPtdz3kp5V4ogWvT8rHaJjvWi9MGCOUqbva90e4Y82qZYpH2BB4LWWW0DtyBtUNd4EHQvTO7EjBzXKjMkPeCWjGGcV70Vuo5rZSd4or8DlNgZBCfWrnC-eah92">Apply to the program</a>
</p>

## ⚡️ Usage

### Development

This template recommends using [pnpm](https://pnpm.io) and [@antfu/ni](https://github.com/antfu/ni). start a development server:

```bash
# http://localhost:3000
nr dev
```

or listen to different IP and port:

```bash
# http://0.0.0.0:3000
nr dev --host 0.0.0.0

# http://0.0.0.0:8080
nr dev --host 0.0.0.0 --port 8080
```

### Build

```bash
nr build
```

or use the specified adapter:

```bash
# Vercel
VERCEL=true nr build

# Cloudflare Pages
CF_PAGES=true nr build

# Netlify
NETLIFY=true nr build
```

> This template uses `@sveltejs/adapter-auto@next` and `@sveltejs/adapter-static@next` by default.

> when the environment supported by adapter-auto is not detected, it will automatically fallback to adapter-static.

> u can modify it to any adapter supported by SvelteKit. see [SvelteKit Docs](https://kit.svelte.dev/docs#adapters)

> u can preview the built app with `nr preview`, regardless of
> whether u installed an adapter. This should _not_ be used to serve
> ur app in production.

## 📝 License

This work is free, it comes without any warranty. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the COPYING file for more details.
