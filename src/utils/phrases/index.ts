type Phrases = {
  [key: string]: string[]
}

export const getPhrase = (letter: string, number: string) => {
  if (parseInt(number) === 1) {
    return `Começou o jogo - ${number}`
  }

  if (parseInt(number) === 75) {
    return `Terminou o jogo - ${number}`
  }

  const phraseByLetter: Phrases = {
    B: ['B de Brasil perdeu para a Cróacia', 'B de Babu', 'B', 'B de Buiú'],
    I: ['I de Irineu', 'I de Iracema', 'I', 'I'],
    N: ['N de Nazaré Tedesco', 'N de Noites traiçoeiras', 'N', 'N'],
    G: ['G de Gol do Mengão', 'G', 'G', 'G'],
    O: ['Ó de Olha a pedra', 'Ó', 'Ó de ovo', 'Ó']
  }

  const phrasesLength = phraseByLetter[letter]?.length

  const randomPhrase = Math.floor(Math.random() * phrasesLength)

  return `${phraseByLetter[letter][randomPhrase]} - ${number}`
}
