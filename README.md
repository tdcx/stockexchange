# stockAnalysis
Use fundamental and technical analysis of a stock in a node.js api

dependencies to install ->

npm i -D typescript ts-node @types/node @types/express nodemon

tsconfig.json uncomment ->

"rootDir": "./src",
"moduleResolution": "node",
"outDir": "./dist",


package.json scripts ->

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/index.ts",
    "start": "node dist/index.js",
    "build": "tsc -p ."
  },