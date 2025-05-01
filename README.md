# sv
Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## DONE: Creating a project with Svelte!

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Install to activate packages!


with **`npm`**
>```bash
>npm i

with **`bun`**
>```bash
>npm i
>npm i -g bun

## Run 
**(SIMPLE TEST - use this mostly)**

```bash
npm run dev

# if bun is install
bun run dev
```

## Build 
**(ADVANCED TEST - check errors throughout at once)**

with **`npm`**
>```bash
>npm run build
>npm run preview

with **`bun`**
>```bash
>bun run build
>bun run preview


To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
