# Table of content

[Getting Started](#getting_started)  
- [Introduction](#introduction) 
 
[How to start](#how_to_start)  
[GitHub actions](#github_actions)  
[In conclusion](#in_conclusion)  
[Thank you!](#thank_you)

# <a name="getting_started">Getting Started</a>

## <a name="introduction">Introduction</a>
This is "APG tool" online.  
Project [APG tool application](http://34.145.240.68/) at the custom google instance.  

APG generates several random passwords. 
It uses several password generation algorithms (currently two) and a built-in pseudo random number generator.

# <a name="how_to_start">How to start</a>

This public project works at NextJS with TypeScript supporting.  

You have few ways how to run this application:
- You can open:
    - Project [APG tool application](http://34.145.240.68/) at my custom google instance.
      It is custom instance at `google.cloud` where is running docker container with this project inside.  
      That is a better way to see how this application works.
- Next way and most easy way is on local machine.  
  Create a new folder on your local machine and go inside this folder.
  System Requirements:
    - [NodeJS](https://nodejs.org/en/).  
      Open your terminal and type `node --version`.  
      It has to be 14.6.0 or higher.
    - `npm` 8.1.2 or higher
    - `git`
      Optionally:
    - `Docker` version 20.10.21 or higher.
    - `Docker compose` version 2.13.0 or higher.  
    
Open terminal in this folder and complete next commands:
```
# Clone this repository  
git clone https://github.com/alari777/apg-tool.git .

# Install all dependencies.  
# This app works in development mode.  
# It is mounted folder from current folder to docker container folder.  
# So for this reason we need to install all dependencies.      
npm ci

# Start servise in development mode   
docker-compose up -d

# In order to stop application use 
docker-compose down
```

# <a name="github_actions">GitHub actions</a>

After creating new `pull request` two GitHub actions: `run_tests` and `push_docker` are run.  
You can find them in folder `.github/workflows/`:
- Action `run_tests` runs tests.
- Action `push_docker` creates Docker image of this project and pushes it in GitHub package.
  This action depends on `run_tests`.


# <a name="in_conclusion">In conclusion</a>

I want to improve this project:
- Add e2e testing.

# <a name="thank_you">Thank you!</a>
