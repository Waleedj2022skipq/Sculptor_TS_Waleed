exports.handlerResponse= async function(event) {
    return{
        statusCode: 200,
        Headers:{
            "Content-Type":"text/plain"
        },
        body:`Hello World,\n You've Hit the url`
    }
}