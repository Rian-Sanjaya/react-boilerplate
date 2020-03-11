# React Boilerplate

# React Boilerplate

1. create a folder
    mkdir react-boilerplate

2. create package.json
    npm init -y

3. make as a git repository
    git init

8. make a webpack bundle
    npm install --save-dev webpack webpack-cli

13. create a webpack configuration file: webpack.config.js

14. install babel
    npm i -D @babel/core @babel/cli @babel/preset-env

15. to run babel in a command line
    $(npm bin)/babel ./src/greet.js --presets=@babel/preset-env

    $(npm bin) refer to path node_modules/.bin
    --presets=@babel/preset-env option will transform es6 syntax to older javascript syntax (so can be run / compatible for old browser)

16. configure webpack to load javascript files through babel with babel-loader
    install babel-loader
    npm i -D babel-loader

17. add babel-loader to webpack configuration file (webpack.config.js)

18. configure babel for React
    npm i -S react react-dom 
    npm i -D @babel/preset-react

19. add @babel/preset-react to babel-loader presets in webpack.config.js

20. inject a javascript bundle into HTML 
    npm i -D html-webpack-plugin

21. add the html-webpack-plugin to webpack.config.js

22. add webpack watch mode into script in package.json (so everytime we make changes the webpack will run build automatically)
    "dev": "webpack --watch --mode development"

23. create seperate webpack configs for development and production with webpack-merge
    npm i -D webpack-merge

23. create three webpack config for base, development, production

24. update package.json script for webpack.config.dev.js and webpack.config.prod.js
    "build": "webpack --config webpack.config.prod.js"
    "dev": "webpack --watch --config webpack.config.dev.js"

25. run webpack bundle while developing with local server by installing webpack-dev-server
    npm i -D webpack-dev-server

26. change default 8080 port to other port by adding in webpack.config.dev.js
    devServer: {
        port: 9000  // setting the port to used
    }

27. add open flag to script webpack-dev-server in package.json
    webpack-dev-server --open --config webpack.config.dev.js

28. add source-map in webpack-config.dev.js for a better debugging
    devtool: 'source-map'

29. support proposed javascript features with @babel/plugin-proposal-class-properties
    plugins: ['@babel/plugin-proposal-class-properties'] // add in webpack.config.base.js

30. add css-loader and style-loader for importing css in javascript
    npm i -D css-loader style-loader

31. add in webpack.config.base.js
    {
    test: /\.css$/, // anything that end with .css
    use: ['css-loader', 'style-loader'],
    exclude: /node_modules/
    }

32. install react-hot-loader
    npm i -S react-hot-loader

    plugins: ['react-hot-loader/babel', '@babel/plugin-proposal-class-properties'] // add in webpack.config.base.js

    "dev:hot": "webpack-dev-server --open --hot --config webpack.config.dev.js", // add in package.json



<!-- 1. create a folder
    mkdir react-boilerplate

2. create package.json
    npm init -y

3. make as a git repository
    git init

4. git add and git commit

5. create a remote repository

6. git remote add origin "remote url"

7. git push origin master

8. make a webpack bundle
    npm install --save-dev webpack webpack-cli

9. bundle to production, webpack will bundle to dist/main.js file (minify production file)
    node_modules/.bin/webpack

10. add script to package.json, so we don't have to type the path to run webpack
    "build": "webpack"

    type: npm run build

11. build with development mode (bundle to dist/main.js of unminified file)
    npm run build -- --mode development

12. create .gitignore file

13. create a webpack configuration file: webpack.config.js

14. install babel
    npm i -D @babel/core @babel/cli @babel/preset-env

15. to run babel in a command line
    $(npm bin)/babel ./src/greet.js --presets=@babel/preset-env

    $(npm bin) refer to path node_modules/.bin
    --presets=@babel/preset-env option will transform es6 syntax to older javascript syntax (so can be run / compatible for old browser)

16. configure webpack to load javascript files through babel with babel-loader
    install babel-loader
    npm i -D babel-loader

17. add babel-loader to webpack configuration file (webpack.config.js)

18. configure babel for React
    npm i -S react react-dom 
    npm i -D @babel/preset-react

19. add @babel/preset-react to babel-loader presets in webpack.config.js

20. inject a javascript bundle into HTML 
    npm i -D html-webpack-plugin

21. add the html-webpack-plugin to webpack.config.js

22. add webpack watch mode into script in package.json (so everytime we make changes the webpack will run build automatically)
    "dev": "webpack --watch --mode development"

23. create seperate webpack configs for development and production with webpack-merge
    npm i -D webpack-merge

23. create three webpack config for base, development, production

24. update package.json script for webpack.config.dev.js and webpack.config.prod.js
    "build": "webpack --config webpack.config.prod.js"
    "dev": "webpack --watch --config webpack.config.dev.js"

25. run webpack bundle while developing with local server by installing webpack-dev-server
    npm i -D webpack-dev-server

26. change default 8080 port to other port by adding in webpack.config.dev.js
    devServer: {
        port: 9000  // setting the port to used
    }

27. add open flag to script webpack-dev-server in package.json
    webpack-dev-server --open --config webpack.config.dev.js

28. add source-map in webpack-config.dev.js for a better debugging
    devtool: 'source-map'

29. support proposed javascript features with @babel/plugin-proposal-class-properties
    plugins: ['@babel/plugin-proposal-class-properties'] // add in webpack.config.base.js

30. add css-loader and style-loader for importing css in javascript
    npm i -D css-loader style-loader

31. add in webpack.config.base.js
    {
    test: /\.css$/, // anything that end with .css
    use: ['css-loader', 'style-loader'],
    exclude: /node_modules/
    }

32. install react-hot-loader
    npm i -S react-hot-loader

    plugins: ['react-hot-loader/babel', '@babel/plugin-proposal-class-properties'] // add in webpack.config.base.js

    "dev:hot": "webpack-dev-server --open --hot --config webpack.config.dev.js", // add in package.json
 -->
