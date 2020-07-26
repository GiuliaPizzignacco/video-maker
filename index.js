//Synchronous Readline for interactively running to have a conversation with the user via a console(TTY).
const readline = require('readline-sync');
// Search on Google Trends
//https://github.com/filipedeschamps/video-maker/pull/21/files/21c5bfe5ed5315b683ca1ad3cd069ceace449703..e49e32878f75c69a7864b4ac8a597aa8fc46cfb4

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
