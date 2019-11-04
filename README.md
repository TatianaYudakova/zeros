# Zeros

## Task

Implement function `zeros(str)`, that for given expression will return the number of zeros in the end of number.
Expression contains only factorials of numbers and multiplying signs, like: `zeros('5!*7!*6!!*7!!')`
`5! === 1 * 2 * 3 * 4 * 5`
`10!! === 2 * 4 * 6 * 8 * 10`
`7!! === 1 * 3 * 5 * 7`

```js
zeros('5!') // -> 1 because 5! === 120
zeros('10!') // -> 2 because 10! === 3628800
zeros('9!!*10!!') // 2 -> because 9!!*10!! === 3628800
```

Write your code in `src/index.js`

## Prepare and test
1. Install [Node.js](https://nodejs.org/en/download/)   
2. Clone this repository: https://github.com/TatianaYudakova/zeros/  
3. Go to folder `zeros`  
4. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)  
5. Run npm test in command line  
6. You will see the number of passing and failing tests
