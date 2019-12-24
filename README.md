# env-globals

> All flags and env variables are added to the global object, from both process.env and a .env file if it exists.

## Conflicts:

In case of conflicts that arise, no existing variable will be overwritten. Firstly flags are set, so if there are variable names already globaly set that are conflicting, then these conflicting flag variables are ignored. Next the variables from the .env file(if exists) are added to the global object, unless theres an existing variable with the same name, at which point it will be ignored. Then finally we do the same for the variables in process.env.
