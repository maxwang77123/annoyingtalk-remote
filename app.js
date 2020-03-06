const express = require('express')
const app = express()
const exhbs = require('express-handlebars')
const generateAnnoyingTalk = require('./generator_annoyingTalk')
const bodyParser = require('body-parser')
const port = 3000
const options = require('./options.json')

//setting template engine
app.engine('handlebars', exhbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

//use body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//routes setting
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const choice = req.body.jobs
  console.log(choice)
  const talkTrash = generateAnnoyingTalk(choice)
  res.render('index', { talkTrash: talkTrash, choice: choice })
})

app.listen(port, () => {
  console.log(`The express is running on https://localhost:${port}`)
})