const readline = require('readline-sync');
function start() {
  const content = {}
  //it's gonna inject a new property inside the content object
  content.searchTerm = askAndReturnSearchTerm();
  content.prefix = askAndReturnPrefix();

  function askAndReturnSearchTerm(){
    //when executed return the searcheable term and inject inside the searchTerm
    //use readline-sync to get user input
    return readline.question('Type a Wikipedia search term: ');
  }

  function askAndReturnPrefix(){
    const prefixes = ['Who is', 'What is', 'The history of', 'Latest news'];
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ');
    const selectedPrefixText = prefixes[selectedPrefixIndex];
    
    return selectedPrefixText;
  }

  console.log(content);
}

start();
