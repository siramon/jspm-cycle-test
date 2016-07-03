# CycleJS with JSPM (Test)

The purpose of this repository is to test CycleJS with JSPM in a OSX dev environment

## Installation

### NPM

Install npm with brew and nvr 
(adapted from http://stackoverflow.com/questions/28017374/what-is-the-suggested-way-to-install-brew-node-js-io-js-nvm-npm-on-os-x)
```sh
$ brew update
$ brew install nvm
```
Create a folder for nvm files, I created mine in ~/.nvm
```sh
$ mkdir ~/.nvm
```
Add this lines to your .bash_profile, this loads nvm
```sh
export NVM_DIR="$HOME/.nvm"
. "$(brew --prefix nvm)/nvm.sh"
```
Open a new console.

Install npm with node
```sh
$ nvm install
$ npm install -g npm@latest
```

### JSPM

Next step is jspm installation, starting with the jspm CLI (globally available)

```sh
$ npm install jspm -g
```

Next, create your project and init jspm

```sh
$ mkdir my_first_project && cd my_first_project
$ npm install jspm --save-dev
$ jspm init
```

### CycleJS

Lets start our test with cycleJS (core / dom modules).

```sh
$ jspm install npm:@cycle/core
$ jspm install npm:@cycle/dom
```

and start testing....
