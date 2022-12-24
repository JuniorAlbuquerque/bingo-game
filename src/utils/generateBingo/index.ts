export const bingoLetters = ['B', 'I', 'N', 'G', 'O'] as const

export type BingoData = {
  [key in typeof bingoLetters[number]]: number[]
}

export const bingoMaxItems = 15
export const maxNumbers = 75
export const basedBingo = Array.from({ length: maxNumbers }, (_, i) => i + 1)

export const generateBingo = () => {
  const bingoData: BingoData = {} as BingoData

  bingoLetters.forEach((letter, index) => {
    const numbers = []

    for (
      let i = index * bingoMaxItems + 1;
      i <= (index + 1) * bingoMaxItems;
      i++
    ) {
      numbers.push(i)
    }

    bingoData[letter] = numbers
  })

  return bingoData
}
