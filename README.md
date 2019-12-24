# env-globals

> All flags and env variables are added to the global object, from both process.env and a .env file if it exists.

## Conflicts:

In case of conflicts that arise, no existing variable will be overwritten. Firstly flags are set, so if there are variable names already globaly set that are conflicting, then these conflicting flag variables are ignored. Next we do the same for the variables from the .env file(if exists), these are added to the global object unless theres an existing variable with the same name, at which point it will be ignored. Then finally we do the same again for the variables in process.env.

```javascript

require( 'env-globals' );

console.log( 'global : ', global );

/*
global : {
    global                    : [Circular *1],
    clearInterval             : [Function: clearInterval],
    clearTimeout              : [Function: clearTimeout],
    setInterval               : [Function: setInterval],
    setTimeout                : [Function: setTimeout] {
        [Symbol(util.promisify.custom)]: [Function (anonymous)]
    },
    queueMicrotask            : [Function: queueMicrotask],
    clearImmediate            : [Function: clearImmediate],
    setImmediate              : [Function: setImmediate] {
        [Symbol(util.promisify.custom)]: [Function (anonymous)]
    },

    // from flag
    test                      : 'value',
    t                         : undefined,

    // from .env file
    DB_HOST                   : localhost,
    DB_USER                   : root,
    DB_PASS                   : s1mpl3,

    // from process.env
    SSH_AGENT_PID             : '9183',
    TERM_PROGRAM              : 'Apple_Terminal',
    SHELL                     : '/bin/bash',
    TERM                      : 'xterm-256color',
    TMPDIR                    : '/var/folders/4d/6xspbvt93y3cymj5nhzv4yf8jmvq6s/T/',
    TERM_PROGRAM_VERSION      : '433',
    OLDPWD                    : '/Users/austin.kershaw/work/samples',
    TERM_SESSION_ID           : '5E28CD78-46C8-4F9D-ACC5-9AFDC36EAE7A',
    USER                      : 'austin.kershaw',
    SSH_AUTH_SOCK             : '/var/folders/4d/6xspbvt93y3cymj5nhzv4yf8jmvq6s/T//ssh-yiGrVeiYBfnL/agent.9182',
    PATH                      : '/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin',
    PWD                       : '/Users/austin.kershaw/work/samples/env-globals',
    LANG                      : 'en_GB.UTF-8',
    XPC_FLAGS                 : '0x0',
    XPC_SERVICE_NAME          : '0',
    SHLVL                     : '1',
    HOME                      : '/Users/austin.kershaw',
    LOGNAME                   : 'austin.kershaw',
    _                         : '/usr/local/bin/node',
    __CF_USER_TEXT_ENCODING   : '0x234DDCD9:0:2'
}
/*

```
