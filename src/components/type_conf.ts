interface TypewriterConfig {
    words: string[]
    loop?: boolean = false
    typeSpeed?: number = 100
    deleteSpeed?: number = 50
    delaySpeed?: number = 1500
    onLoop?: (loopCount: number) => void = noop // only called if loop = true
    onDone?: () => void = noop // only called if loop = false
  }