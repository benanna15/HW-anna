function replace (text,letter){
    text = text.replaceAll(letter.toLowerCase(),letter.toUpperCase()); 
   return text
}

alert(replace(prompt("text"),prompt("letter")))