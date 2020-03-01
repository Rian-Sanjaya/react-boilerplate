# React Boilerplate

1. create a folder

2. create package.json
    npm init

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

13. 