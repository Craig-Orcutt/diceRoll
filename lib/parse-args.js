'use strict'

module.exports = (args) => {
    if(args[0] === undefined) {
        return {
            'count' : 1,
            'sides' : 6
            }
    } else if(args[1] === undefined){
        return {
            'count' : 1,
            'sides' : args[0]
            }
    } else {
        return {
            'count' : args[0],
            'sides' : args[1]
            }
    }
}

