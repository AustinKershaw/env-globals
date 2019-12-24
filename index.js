const fs = require( 'fs' );

function checkFileExistsSync( path ){
    try{
        return fs.readFileSync( path, 'utf8' );
    }catch( e ){
        return false;
    };
};

function addToGlobal( obj ){
    Object.keys( obj ).forEach( key => {
        if( !global[ key ] ){
            global[ key ] = obj[ key ]
        };
    });
};

module.exports = (() => {
    
    let [ , dirname, ...args ] = process.argv;
    let env = checkFileExistsSync( `${ dirname.split( "/" ).slice( 0, -1 ).join( "/" ) }/.env` );

    if( env ){
        env = env.split( /\r?\n/ ).reduce(( obj, param ) => {
            const [ prop, val ] = param.split( "=" );
            return ( obj[ prop ] = val, obj );
        }, {});
    };

    const result = {
        env  : { ...env, ...process.env },
        args : args.reduce(( obj, arg ) => {
            const [ prop, val ] = arg.replace( /[-]/g, "" ).split( "=" );
            return ( obj[ prop ] = val, obj );
        }, {})
    };

    addToGlobal( result.args );
    addToGlobal( result.env );

})();
