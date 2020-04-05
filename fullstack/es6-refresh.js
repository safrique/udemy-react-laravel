//// default parameters
// function welcome (user = `Mystery person`, message = `Good day`) {
//   alert(`Hello ${user}, ${message}`)
// }

// welcome(`Josef`, `Welcome to course`)

//// string literals/template strings
// function greeting (message) {
//   return alert(`${message} everyone!`)
// }

// let greeting = (message) => alert(`${message} everyone!`)
//
// greeting(`Good morning`)

//// arrow functions
// let createBlog = (title, body) => {
//   if (!title) {
//     throw new Error(`A title is required`)
//   }
//
//   if (!body) {
//     throw new Error(`Body can't be empty`)
//   }
//
//   return alert(`${title} - ${body}`)
// }
//
// createBlog(`Some title`, `Some body...`)

// let nepal = {
//   // add property
//   mountains: [`Everest`, `Fish Tail`, `Annapurna`],
//   // add method
//   // printWithDash: function () {
//   //   console.log(`inside printWithDash`, this)
//   //   setTimeout(function () {
//   //     console.log(`inside setTimeout`, this)
//   //     // console.log(this.mountains.join(` - `))
//   //   }, 3000)
//   // },
//
//   // printWithDash: () => {
//   printWithDash: function () {
//     console.log(`inside printWithDash`, this)
//     setTimeout(() => {
//       console.log(`inside setTimeout`, this)
//       console.log(this.mountains.join(` - `))
//     }, 3000)
//   },
// }
//
// nepal.printWithDash()
// console.log(`nepal`, nepal)
// console.log(`outside`, this)

//// destructing objects
// let thingsToDo = {
//   morning: `Exercise`,
//   afternoon: `Work`,
//   evening: `Code`,
//   night: [`Sleep`, `Dream`],
// }
//
// let { morning, afternoon } = thingsToDo
// console.log(morning, ` - `, afternoon)
//
// morning = `Run`
// console.log(morning, ` - `, afternoon)

//// object destructuring with function arguments
// let uniStudent = student => {
//   // console.log(`${student.name} from ${student.university}`)
//
//   let { name, university } = student
//   console.log(`${name} from ${university}`)
// }

// let uniStudent = ({ name, university }) => {
//   console.log(`${name} from ${university}`)
// }
//
// uniStudent(({
//   name: `Josef`,
//   university: `University of York`,
// }))

//// destructuring an array
// let [firstMountain] = [`Everest`, `Fish Tail`, `Annapurna`]
// console.log(firstMountain)
// let [, secondMountain] = [`Everest`, `Fish Tailk`, `Annapurna`]
// console.log(secondMountain)
// let [, , thirdMountain] = [`Everest`, `Fish Tailk`, `Annapurna`]
// console.log(thirdMountain)

//// restructuring
// var name = `Everest`
// var height = 84848
//
// var output = function () {
//   console.log(`Mt. ${this.name} is ${this.height} meters tall`)
// }
//
// var adventureClimbing = { name, height, output }
// console.log(adventureClimbing)
// adventureClimbing.output()

// var adventureClimbing = {
//   name: `Everest`,
//   height: 84848,
//
//   output() {
//     console.log(`Mt. ${this.name} is ${this.height} meters tall`)
//   }
// }
// console.log(adventureClimbing)
// adventureClimbing.output()

//// spread & rest operator
////spread
// var mountains = [`Everest`, `Fish Tail`, `Annapurna`]
// var mountainsFromJapan = [`Fuji`]
// var allMountains = [...mountains, ...mountainsFromJapan]
// console.log(allMountains)
//
// var day = {
//   breakfast: `toast with milk`,
//   lunch: `rice with chicken curry`
// }
// var night = { dinner: `noodle soup` }
// var picnic = { ...day, ...night }
// console.log(picnic)

//// rest
// var rivers = [`Sunkoshi`, `Tamakoshi`, `Saptakoshi`]
// var [first, ...rest] = rivers
// console.log(first)
// console.log(rest)

//// classes
// function Holiday (destination, days) {
//   this.destination = destination
//   this.days = days
// }
//
// Holiday.prototype.info = function () {
//   console.log(this.destination + ` | ` + this.days + ` days`)
// }
//
// var nepal = new Holiday(`Nepal`, 30)
// console.log(nepal.info())

// // super/parent class
// class Holiday {
//   constructor (destination, days) {
//     this.destination = destination
//     this.days = days
//   }
//
//   info () {
//     console.log(`${this.destination} will take ${this.days} days.`)
//   }
// }
//
// console.log(Holiday.prototype)
// console.log(Holiday)
// const trip = new Holiday(`Kathmandu, Nepal`, 30)
// console.log(trip.info())
//
// // sub/child class
// class Expedition extends Holiday {
//   constructor (destination, days, gear) {
//     super(destination, days)
//     this.gear = gear
//   }
//
//   info () {
//     super.info()
//     console.log(`Bring your gear ${this.gear.join(' and your ')}`)
//   }
// }
//
// console.log(Expedition)
//
// const tripWithGear = new Expedition(`Everest`, 23, [`Sunglasses`, `Flags`, `Camera`])
// console.log(tripWithGear.info())
