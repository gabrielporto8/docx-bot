const readline = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}

async function start() {
    const content = {
        maximumSentences: 7
    }

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
    content.language = askAndReturnLanguage()
    await robots.text(content)

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

    console.log(JSON.stringify(content, null, 4))
}

start()