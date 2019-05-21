export class ElapsedFactory {
  protected startMessage: string
  protected endMessage: string

  constructor(startMessage: string, endMessage: string) {
    this.startMessage = startMessage
    this.endMessage = endMessage
  }

  start() {
    const elapsed = new Elapsed(this.startMessage, this.endMessage)
    elapsed.start()
    return elapsed
  }
}

export class Elapsed {
  protected startMessage: string
  protected endMessage: string
  protected startDate?: Date

  constructor(startMessage: string, endMessage: string) {
    this.startMessage = startMessage
    this.endMessage = endMessage
  }

  get isStarted() {
    return !!this.startDate
  }

  start() {
    this.startDate = new Date()
    console.log(`[${this.startDate.toLocaleTimeString()}] ${this.startMessage}`)
    return this
  }

  end() {
    if (!this.startDate) {
      throw new Error('not started')
    }

    const endDate = new Date()
    const elapsed = Number(endDate) - Number(this.startDate)
    console.log(`[${endDate.toLocaleTimeString()}] ${this.endMessage} in ${elapsed} ms`)
    return this
  }
}

export default Elapsed
