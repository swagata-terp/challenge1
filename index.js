import fs from 'fs'
import {getContactInfo} from './getContactInfo.js'




let filename = process.argv[2];

fs.readFile(filename, 'utf8', (err, data) => {
    if(err) throw err; // will throw error if no text input

    // need to read all lines until empty line
    let card = [];
    let info;

    data.split('\r\n').forEach(line => {
        if(line.length == 0){ //  means we are at a new buisness card
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
        console.log("Insert data")
    } else {

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
    


}
