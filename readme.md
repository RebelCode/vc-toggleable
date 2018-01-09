# Toggleable Component

## Usage
```js
<toggle :toggleable="toggleable" inline-template>
    <span @click="setState(!isOn)">
        {{ isOn ? 'On' : 'Off' }}
    </span>
</toggle>
```
Toggleable component implements logic responsible for getting Toggle model state and setting it. So consumer needs to use `inline-template`. Inside that template next functions and variables available: 

`setState({boolean} newState)` - set toggle model state

`isOn` - is toggle model state set to `true`

## Developing
Run `npm install` to install all dev dependencies.

Here is available npm commands.

Build library while developing
```sh
npm run dev
```

Build library for production
```sh
npm run production
```

Run e2e tests
```sh
npm run e2e
```