- criar projeto:      npm init -y
- npm i typescript --save-dev
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
- npm i nodemon --save-dev
- npm i ts-node --save-dev
- npm i express@4  @types/express@4
- npm i http-status-codes --save-dev
- npm i sqlite --save-dev
- pakage.json scripts -> "start": "ts-node ./src/index.ts",
- criar a pasta src e index.ts
- testar npm start
- subir no git
- criar arquivo .gitignore
- criar arquivo src/server/server.ts
- criar arquivo .env
- npm i dotenv --save-dev
- npm i knex
- npm remove sqlite
- npm add sqlite3 --save-dev
- npm i yup --save-dev
- npm i bcryptjs @types/bcryptjs --save-dev
- npm i jsonwebtoken @types/jsonwebtoken --save-dev
- npm i mysql2 --save-dev

drop schema if exists app_vendas;
create schema if not exists app_vendas;