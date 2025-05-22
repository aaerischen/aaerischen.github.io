import { useTypewriter } from 'react-simple-typewriter'

const CustomSimpleTypewriter = () => {
    const text = useTypewriter({
      words: ['i', 'use', 'hooks!'],
      loop: true,
      onLoop: (loopCount) => console.log(`Hook completed loop ${loopCount}`),
      onDone: () => console.log('Done!')
    })
  
    return <span>{text}</span>
  }