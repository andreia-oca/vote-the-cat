<div align="center">
<h1> Vote the Cat </h1>
</div>

<div align="center">

[![deployed with: genezio](https://img.shields.io/badge/deployed_with-genezio-6742c1.svg?labelColor=62C353&style=flat)](https://github.com/genez-io/genezio)

[![Join our community](https://img.shields.io/discord/1024296197575422022?style=social&label=Join%20our%20community%20&logo=discord&labelColor=6A7EC2)](https://discord.gg/uc9H5YKjXv)
[![Follow @geneziodev](https://img.shields.io/twitter/url/https/twitter.com/geneziodev.svg?style=social&label=Follow%20%40geneziodev)](https://twitter.com/geneziodev)

</div>

This is a minimalist demo application used by me in technical demos to showcase how to use genezio.

The project is a simple crowd voting app for voting the sweetest cat.

Feel free to fork it and experiment with it. It's great start to play around with genezio.

The application is built using:
 * `NodeJs` for the backend
 * `React` for the frontend
 * `Neon Postgres` for a database

## Prerequisites

If you don't already have them, you'll need to install the following tools:
- [Node.js](https://nodejs.org/en/download/current) (version >= 16.0.0)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Genezio](https://genez.io)

Note: I recommend you to use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to manage NodeJs and npm versions.
After installing `nvm`, you can easily get the any version of `node` by running `nvm install <node_version>`.
`nvm` will automatically install the corresponding `npm` version.

## Run the project

### Clone this example

Clone the repository:
```bash
git clone https://github.com/andreia-oca/vite-the-cat
```

Navigate to the following directory:
```bash
cd ./vote-the-cat
```

### Test your project locally

Test the project locally:
```bash
genezio local
```

Open a new terminal, navigate to the following directory, and run npm start to launch the React application:
```bash
cd ./client
npm install && npm run install-sdk-local && npm start
```

### Deploy your project with genezio

If you wish to deploy your project to the Genezio infrastructure, follow these steps:

Log in to Genezio using the command genezio login:
```bash
genezio login
```

Deploy your project using the genezio deploy command from the ``./genezio-examples/javascript/chatgpt-project`` directory.
```bash
genezio deploy
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install -g genezio`  | Installs genezio globally                        |
| `genezio login`           | Logs in to genezio                               |
| `genezio local`           | Starts a local server                            |
| `genezio deploy`          | Deploys a production project                     |
| `genezio --help`          | Get help using genezio                           |


## Want to learn more?

Check out:
- [Official genezio documentation](https://genez.io/docs)
- [Web development tutorials](https://genez.io/blog)
- [Discord channel](https://discord.gg/uc9H5YKjXv)


## Contact

If you need support or you have any questions, please join us in our [Discord channel](https://discord.gg/uc9H5YKjXv). We'd love to chat!
