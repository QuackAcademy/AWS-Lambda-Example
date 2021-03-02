const axios = require('axios');

exports.handler = async (event, context) => { 
    return new Promise((resolve, reject) => {
        axios.post('https://exampleurl.com/public/stats', {password: ''})
        .then((response)=>{
            resolve(event);
            return;
        })
        .catch((err)=>{
            console.log(`Server stats catch block err: ${err}`); 
            reject(event); 
            return;
         });
    });
};