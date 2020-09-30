
//own module to make testing easier
export default function email(potentialEmail)  {

    let emailRegex = /\b([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\b/

    if (emailRegex.test(potentialEmail)) {
        return potentialEmail.match(emailRegex)[0];
    } else {
        return null
    }

}

