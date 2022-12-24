export const bingoLetters = ['B', 'I', 'N', 'G', 'O'] as const

export type BingoData = {
  [key in typeof bingoLetters[number]]: number[]
}

const bingoMaxItems = 15

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
