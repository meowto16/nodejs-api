const readline = require('readline')
const http = require('http')

async function main() {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  async function ask(questionText) {
    return new Promise((resolve) => {
      rl.question(questionText, (userInput) => resolve(userInput))
    })
  }

  async function getRandomNumberFact(number) {
    return new Promise((resolve) => {
      http.get(`http://numbersapi.com/${number}`, (res) => {
        res.on('data', chunk => resolve(chunk.toString('utf8')))

      })
    })
  }

  const firstname = await ask('Enter your firstname: ')
  const secondname = await ask('Enter your secondname: ')

  console.log(`Hello: ${secondname} ${firstname}`)

  const age = Number(await ask('And your age, please: '))

  if (age <= 0 || Number.isNaN(age)) console.log('Wrong input')
  if (age >= 1 && age <= 17) console.log('You are very young, kid!')
  if (age >= 18 && age <= 60) console.log('Adults, welcome')
  if (age >= 61) console.log('You are really elder')

  console.log('--------')
  console.log('Loading fun fact...')
  const fact = await getRandomNumberFact(age)
  console.log(`Did you know? ${fact}`)

  process.exit(0)
}

(async () => {
  await main()
})()
