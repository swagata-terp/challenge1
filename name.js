import nlp from 'compromise'


export default function name(potentialName) {

    let names = new Array(2);
    //get the json values which contain the terms for each text
    let currentTerms =  nlp(potentialName).json()
    
    if(currentTerms.length == 0) {
     
        return null;
    }
    //JSONArray with 1 object consisting of terms and text, so access the array and process the terms 
    for(var term of currentTerms[0]['terms']) {
        var foundNameTag = false; //once we find a tagged name, we can exit the loop
        var i = 0;
        while(i < term.tags.length && !foundNameTag) {
            if(term.tags[i] == "FirstName") {
    
                if(typeof names[0] == 'undefined') {
                    names[0] = term.text 
                } 
                foundNameTag = true;

            } else if (term.tags[i] == "LastName") {
                if(typeof names[1] == 'undefined') {
                    names[1] = term.text 
                }
                foundNameTag = true;
            }
            i++
        }

    }

    if(typeof names[1] == 'undefined' || typeof names[0] == 'undefined') {
        return null;
    }
    
    return names

}