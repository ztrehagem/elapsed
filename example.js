const elapsed = require('./')

const factory = new elapsed.ElapsedFactory('started example', 'finished example')
const timer = factory.start()
setTimeout(() => timer.end(), 1000)
const timer2 = factory.start()
setTimeout(() => timer2.end(), 2000)

const timer3 = new elapsed.Elapsed('started example3', 'finished example3')
timer3.start()
setTimeout(() => timer3.end(), 3000)
