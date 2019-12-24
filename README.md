# env-globals

> All flags and env variables are added to the global object, from both process.env and a .env file if it exists.

## Conflicts:

In case of conflicts that arise, no existing variable will be overwritten if it already exists. Firstly flags are set, so if there is a duplicate variable name within your .env or process.env, then these variables are ignored. Next the variables from the .env file(if exists) are added to the global object unless theres an existing variable with the same name, at which point it will be ignored. Then finally we do the same for the variables in process.env.