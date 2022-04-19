# notes-app-nodejs
notes app with nodejs operated through console

```
npm i - to install node modules
```

functionality of app
Our app uses NodeJs totally
- library = chalk, nodemon, validator
- When you add a note using command, it will create notes.json file and add that note in that json file
- and then you can use other commands to add, list, remove or read notes from that json file as well

Commands that you can use 
```
node app.js add --title="first" --body="My name is ABC"
node app.js read --title="first"
node app.js list
node app.js remove --title="first"
```
