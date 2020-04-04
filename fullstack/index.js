// function welcome (user = `Mystery person`, message = `Good day`) {
//   alert(`Hello ${user}, ${message}`)
// }

// welcome(`Josef`, `Welcome to course`)

// function greeting (message) {
//   return alert(`${message} everyone!`)
// }

// let greeting = (message) => alert(`${message} everyone!`)
//
// greeting(`Good morning`)

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

let nepal = {
  // add property
  mountains: [`Everest`, `Fish Tail`, `Annapurna`],
  // add method
  // printWithDash: function () {
  //   console.log(`inside printWithDash`, this)
  //   setTimeout(function () {
  //     console.log(`inside setTimeout`, this)
  //     // console.log(this.mountains.join(` - `))
  //   }, 3000)
  // },

  // printWithDash: () => {
  printWithDash: function () {
    console.log(`inside printWithDash`, this)
    setTimeout(() => {
      console.log(`inside setTimeout`, this)
      console.log(this.mountains.join(` - `))
    }, 3000)
  },
}

nepal.printWithDash()
console.log(`nepal`, nepal)
console.log(`outside`, this)