
//retrieved regex from 
// https://www.regextester.com/17

export default function phoneNumber(potentialPhone) {
    
    let phoneRegex = /(?:(?:\+?\d?\d?\s*(?:[.-\s]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-\s]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-\s]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/
    if(/[F|f]ax/.test(potentialPhone)) {
        return null;
    }

    if(phoneRegex.test(potentialPhone)) {
        potentialPhone = potentialPhone.replace(phoneRegex, '$&');
        let ret = "";

        for(var i = 0; i < potentialPhone.length; i++) {
            if(/\d/.test(potentialPhone.charAt(i))) {
                ret += potentialPhone.charAt(i);
            }
        }
        return ret;

    }
}