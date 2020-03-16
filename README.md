# React Stuff
A collection of useful React components. Uses [`styled-components`](https://github.com/styled-components/styled-components) for CSS.


## `<Flex>`
Applies Flexbox styling to its children.
```jsx
    <Flex justifyContent="center" alignItems="center" {...otherFlexProps}>
        <div>Flex child 1</div>
        <div>Flex child 2</div>
        <div>Flex child n</div>
    </Flex>
```


## `<FlexToolbar>`
Makes a 100% wide element that aligns children on opposite sides of the parent (or equally spaced if more than two children).
```jsx
    <FlexToolbar>
        <div>L/div>
        <div>R</div>
    </FlexToolbar>
    {/* Will result in:
    |L----------------------------------------------------------R|
    */}
```

```jsx
    <FlexToolbar>
        <div>L/div>
        <div>M/div>
        <div>R</div>
    </FlexToolbar>
    {/* Will result in:
    |L-----------------------------M-----------------------------R|
    */}
```


## `<Spacing>`
Applies `margin` and/or `padding` to children in the magnitude of units (one unit is 8px). The prop can take an array of either 1, 2, or 4 integers:
```jsx
    <Spacing padding={[1]}>...
    {/* Padding is applied equivalent to `padding: 8px;` */}
```
```jsx
    <Spacing padding={[1, 4]}>...
    {/* Padding is applied equivalent to `padding: 8px 32px;` */}
```
```jsx
    <Spacing margin={[4, 4, 3, 1]}>...
    {/* Margin is applied equivalent to `margin: 32px 32px 24px 8px;` */}
```
Alternatively, an integer can be passed:
```jsx
    <Spacing margin={2}>...
    {/* Margin is applied equivalent to `padding: 16px;` */}
```


### Usage with `styled-components' <ThemeProvider>`
If you want to change the base unit, use `styledcomponents`'s `<ThemeProvider>`:
```jsx
    <ThemeProvider theme={{baseUnitPx: 100}}>
        ...
        <Spacing padding={2}>
        {/* Padding is applied equivalent to `padding: 200px;` */}
```


## Test
Clone this, then run `yarn install && yarn test`
