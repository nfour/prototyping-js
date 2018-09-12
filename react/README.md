# React prototypes

- [React prototypes](#react-prototypes)
  - [Getting started](#getting-started)
  - [Prototypes](#prototypes)
    - [Stateless Components](#stateless-components)
    - [React State](#react-state)
    - [Mobx State](#mobx-state)
    - [Mobx State Tree](#mobx-state-tree)
    - [Redux State](#redux-state)

## Getting started

```
cd react
yarn
yarn start
```

The storybook automatically reads any stories from `src/**/*stories.tsx`.

When you edit the files and save, their changes are reflected almost instantly.

## Prototypes

Things to know:
- Each folder contains components around a certain idea, such as a library
- Each folder contains a `stories.tsx`, which is the entry point
- The stories show different ways to render components

### Stateless Components

- [StatelessComponent](./src/statelessComponents/stories.tsx)
- Coming soon: Stateless Components with lifecycle methods

### React State

- [Tabs](./src/reactState/stories.tsx)

### Mobx State

- [Tabs](./src/mobxState/stories.tsx)

### Mobx State Tree

- [Tabs](./src/mobxStateTree/stories.tsx)

### Redux State

Coming soon
