# Salamander React

Salamander's frontend is a Single Page Application.

## Resources

Built with:

- [React](https://reactjs.org)
- [Apollo Client](https://www.apollographql.com/docs/react)

## Workflow

In development, this runs on it's own server which automatically reloads the browser if you make changes to the code.

```sh
npm run dev
```

In production, we serve pre-compiled assets.

```sh
npm run build
```

Salamander React is bundled alongside [Salamander Apollo](../salamander-apollo), you'll need to deploy Apollo for any changes go live.

The codebase includes `*.story.js` files, with usage examples for some components. Run Storybook to interact with them:

```sh
npm run storybook
```
