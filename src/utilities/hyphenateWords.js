function hyphenateWords (str) {
  let word  = str.toLowerCase().split(' ').join('-')
  let cleanedWord = word.replace(/[&/\\#, +()$~%.'":*?<>{}]/g , '')
  return cleanedWord
}

export default hyphenateWords