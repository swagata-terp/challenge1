import nlp from 'compromise'

//saving the name and priority because if we find a name with its tag with
//a higher priority, that means it is more likely to be a name

export default function name(potentialName) {

    let names = new Array(2);

    let currentTerms =  nlp(potentialName).json()
    if(currentTerms.length == 0) {
     
        return null;
    }
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