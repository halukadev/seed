module.exports = {

    timeout: 5000,

    trustProxy: true,

    gzip: true,
    
    post: {
        limit: '1mb'
    },

    upload: {
        multi: true,
        limit: '5mb'
    },

    helmet: {
        contentSecurityPolicy: false
    }

}