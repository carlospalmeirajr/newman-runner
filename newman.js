
const newman = require('newman');
const uuidv1 = require('uuid/v1');

fs = require('fs');

newman.run({
//Indica a collection que será testada
collection: require('./GoRest.postman_collection.json'),
//Indica o número de vezes que a collection será testada
iterationCount: 1,
//Não mexer daqui para baixo
reporters: ['cli','htmlextra'],
 reporter: {
        htmlextra: {
             export: './report/',
             logs: true
		}
 }
});