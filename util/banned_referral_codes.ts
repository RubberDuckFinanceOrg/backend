import bannedWords from './banned_words'

function formatWordsToArray(str: any): string[] {
  let formattedWordArray = [];
  let word = ''
  for (let i in str) {
    if (str[i] !== '\n') {
      word = word + str[i]
    } else {
      formattedWordArray.push(word)
      word = ''
    }
  }
  return formattedWordArray
}

function checkAgainstBanned(input: string): boolean {
  const bannedList = formatWordsToArray(bannedWords)
  if (bannedList.includes(input)) {
    return true
  } else {
    return false
  }
}

export = checkAgainstBanned
