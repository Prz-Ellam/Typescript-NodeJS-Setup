# Typescript-NodeJS-Setup

Instructions

Create an empty folder directory and open it with your code editor or IDE
```bash
git init
```

```bash
npm init -y
```

Create the next folder structure
```
├── src
│   ├── config
│   │   ├── .gitkeep
│   ├── controllers
│   │   ├── .gitkeep
│   ├── middlewares
│   │   ├── .gitkeep
│   ├── models
│   │   ├── .gitkeep
│   ├── routes
│   │   ├── .gitkeep
│   ├── services
│   │   ├── .gitkeep
│   ├── index.ts
```

```bash
npm install -D typescript @types/node
```

```bash
npx tsc --init
```

In the `tsconfig.json` change
```json
"experimentalDecorators": true,
"emitDecoratorMetadata": true,

"rootDir": "./src",
"baseUrl": "./src",
"paths": {
    "@config/*": [ "./config/*" ],
    "@controllers/*": [ "./controllers/*" ],
    "@middlewares/*": [ "./middlewares/*" ],
    "@models/*": [ "./models/*" ],
    "@routes/*": [ "./routes/*" ],
    "@services/*": [ "./services/*" ],
    "@utils/*": [ "./utils/*" ]
}

"outDir": "./dist"

"strictPropertyInitialization": false
```

Now install this packages
```bash
npm install -D ts-node ts-node-dev tsc-alias tsconfig-paths rimraf
```

In the `package.json` create the next npm run scripts
```json
"scripts": {
    "build": "npm run clean && npm run transpile",
    "clean": "rimraf dist",
    "start": "ts-node -r tsconfig-paths/register src/index.ts",
    "start:dev": "ts-node-dev -r tsconfig-paths/register --respawn src/index.ts",
    "start:prod": "node dist/index.js",
    "transpile": "tsc && tsc-alias"
}
```

Create a `.gitignore` file
```
lib-cov
*.seed
*.log
*.csv
*.dat
*.out
*.pid
*.gz
*.swp

pids
logs
results
tmp

# Build
public/css/main.css

# Coverage reports
coverage

# API keys and secrets
.env

# Dependency directory
node_modules
bower_components

# Editors
.idea
*.iml

# OS metadata
.DS_Store
Thumbs.db

# Ignore built ts files
dist/**/*

# ignore yarn.lock
yarn.lock
```