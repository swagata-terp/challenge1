import email from './email.js'
import name from './name.js'
import phone from './phoneNumber.js'

export function getContactInfo(document) {
    //the three datapoints, phone number, name and email is stored in this array
    let info = new Array(3);
    //regex checks for potential numbers and emails
    //added them into seperate modules for easier testing.
    let potentialEmail = /@/
    let potentialPhoneNumber = /\d{4}$/
    for(var i = 0; i < document.length; i++) {
        
        if(potentialEmail.test(document[i]))  {
            var currEmail = email(document[i]);
            if(currEmail != null)
            info[2] = currEmail
        } else if (potentialPhoneNumber.test(document[i]) ) {
            var temp = phone(document[i])
            if(temp != null) {
                info[1] = temp
            }
            
        } else {
            var potentialName = name(document[i]);

            if(potentialName != null ) {
                info[0] = potentialName;
            }
        }
    }




    return info;
}