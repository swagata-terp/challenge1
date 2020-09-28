// const readline = require("readline");
// const lineReader = require('line-reader')
import fs from 'fs'
import {getContactInfo} from './getContactInfo.js'



if(process.argv < 3) {
    console.log('input text file');
    process.exit(1);
}


let filename = process.argv[2];

fs.readFile(filename, 'utf8', (err, data) => {
    if(err) throw err;

    // need to read all lines until empty line
    let card = [];
    let info;

    data.split('\r\n').forEach(line => {
        if(line.length == 0){ // just the new line character, means we are at a new buisness card
            info = getContactInfo(card);
            printer(card, info);
            card = [];
        } else {
            card.push(line);
        }

        
    })
    info = getContactInfo(card)
    printer(card, info)

}) 

function printer(currentCard, parsedInfo)  {

    if(currentCard.length == 0 || parsedInfo == null ){
        return;
    }
    
    currentCard.forEach(line => console.log(line))

    console.log('\n', "=>", '\n');
    var name = "name: "+ parsedInfo[0][0] + " " + parsedInfo[0][1];
    var phone = "phone: " + parsedInfo[1]
    var email = "email: " + parsedInfo[2]
    console.log(name)
    console.log(phone)
    console.log(email)
    console.log('\n')


}
