import { FC, useEffect, useState } from 'react'
import { styles } from './styles'
import { Button } from '@/components/Button'
import { BingoData, generateBingo } from '@/utils/generateBingo'
import { getRandomBingoNumber, maxNumbers } from '@/utils/randomNumber'
import Bingo from '@/components/Bingo'
import { delay } from '@/utils/delay'
import { Player } from '@lottiefiles/react-lottie-player'
import Overlay from '@/components/Overlay'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useSpeechSynthesis } from 'react-speech-kit'
import { getPhrase } from '@/utils/phrases'

const Home: FC = () => {
  const [bingo, setBingo] = useState<BingoData>({} as BingoData)
  const [sorteds, setSorteds] = useState<number[]>([])
  const [lastSorted, setLastSorted] = useState('')
  const [loading, setLoading] = useState(false)

  const { speak, voices } = useSpeechSynthesis()

  const sortNumber = async () => {
    setLoading(true)
    await delay(2000)

    const copySorteds = [...sorteds]
    const sortedNumbers = getRandomBingoNumber()

    if (copySorteds.length === maxNumbers) {
      return
    }

    if (copySorteds.includes(sortedNumbers.sortedNumber)) {
      sortNumber()
      return
    }

    copySorteds.push(sortedNumbers?.sortedNumber)

    setSorteds(copySorteds)
    setLoading(false)
    setLastSorted(sortedNumbers?.formatedBingoNumber)

    const splitedBingoPhrase = sortedNumbers?.formatedBingoNumber.split(' - ')

    speak({
      text: getPhrase(splitedBingoPhrase[0], splitedBingoPhrase[1]),
      rate: 0.7,
      ...voices[157]
    })
  }

  useEffect(() => {
    const generatedBingo = generateBingo()
    setBingo(generatedBingo)
  }, [])

  return (
    <div className={styles.wrapper()}>
      <main>
        <div className={styles.action()}>
          <h1>Bingo Albuquerque Tavares</h1>
          <Button onClick={sortNumber}>Rodar</Button>

          <div className={styles.lastNumberSorted()}>
            Último sorteado:
            <span>{lastSorted || '...'}</span>
          </div>
        </div>

        <Bingo data={bingo} sorteds={sorteds} />
      </main>

      <footer className={styles.footer()}>
        <p>
          Feito por: <code>JuniorAlbuquerque.jnr</code>
        </p>
      </footer>

      {loading && (
        <Overlay>
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src="https://lottie.host/60301ebc-8554-4a65-ab4e-afa1810beba9/gKxD3zPetx.json"
            style={{ height: '300px', width: '300px' }}
          ></Player>

          <h2>E roda o bingo...</h2>
        </Overlay>
      )}
    </div>
  )
}

export default Home
