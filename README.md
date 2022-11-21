### Getting Started

To start with this project we need to have hasura environment in our system.

___

### Installation Of Hasura
Enter below cmd to insert install hasura

#### curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | bash

now check hasura is installed or not to check hasura is installed in your system just type below command

#### hasura

___


### Start with Hasura

To start with hasura open folder in which you want to start hasura and type below command

#### hasura init

Then enter file name below
Then go to that file (eg:- cd fileName)
and then type below command to start hasura console

#### hasura console

It will redirect you to chrome browser and that port can be default (http://localhost:9695/) 

___

### Database Setup

In  Data and Schema Management part we need to create database and tables of our project
To create database at very first time you will need to enter datasourse url and give name of that database
You can import postgres database or you can use default one
You can get default database from your docker-compose.yml file
To view details of that file you need to open terminal and type below cmd

#### cat docker-compose.yml

In environment section we can see this like just paste this line inside you data source in console.

postgres://postgres:postgrespassword@postgres:5432/postgres

___


### Creating First App

Before creating first app here we are using refine dev as our framework.

#### ***Refine is a React-based framework for the rapid ✨ development of web applications***

First, run the create-react-app tool to bootstrap an empty React project.

#### npx create-react-app tutorial --template typescript

Navigate to the project folder and install refine with the following npm command:

#### yarn add  @pankod/refine-core @pankod/refine-antd @pankod/refine-react-router-v6

Next, navigate to the project folder and run the following command to install the required package:
(Here we are using hasura as data privider)

### yarn add @pankod/refine-graphql

___

