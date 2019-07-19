const readline = require('readline-sync')
const state = require('./state.js')

function robot() {
    const content = {
        maximumSentences: 7
    }

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
    content.language = askAndReturnLanguage()
    state.save(content)

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixedIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixedText = prefixes[selectedPrefixedIndex]

        return selectedPrefixedText
    }

    function askAndReturnLanguage() {
        const languages = ['pt', 'en']
        const selectedLanguageIndex = readline.keyInSelect(languages, 'Choose one option: ')
        const selectedLanguageText = languages[selectedLanguageIndex]

        return selectedLanguageText
    }
}

module.exports = robot