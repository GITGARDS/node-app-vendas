- criar projeto:      npm init -y
- dependencia:        npm i typescript ts-node -D
- criar tsconfig.json npx tsc --init
- configuracao do tsconfig.json
    {
    "compilerOptions": {
        "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
        "module": "commonjs" /* Specify what module code is generated. */,
        "rootDir": "./src" /* Specify the root folder within your source files. */,
        "outDir": "./build" /* Specify an output folder for all emitted files. */,
        "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
        "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
        "strict": true /* Enable all strict type-checking options. */,
        "skipLibCheck": true /* Skip type checking all .d.ts files. */
    },
    "exclude": ["./node_modules", "./build"]
    }
- npm i express @types/express
- npm i http-status-code -D
- npm i sqlite -D
- pakage.json scripts -> "start": "ts-node ./src/index.ts",
- criar a pasta src e index.ts
- testar npm start
- subir no git
- criar arquivo .gitignore
- criar arquivo src/server/server.ts
- criar arquivo .env
- npm i dotenv --save-dev