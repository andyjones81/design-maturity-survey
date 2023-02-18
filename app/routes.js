//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

var Airtable = require('airtable')
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  'appPBXGo3vrMg6fKa',
)

// Add your routes here

router.get('/', function (req, res) {
  req.session.data = []
  res.render('index')
})

router.get('/question/:number', function (req, res) {
  var questions = require('./data/questions.json')
  var questionNumber = parseInt(req.params.number)

  var question = questions.filter(function (value) {
    return value.number === questionNumber
  })

  question = question[0]

  return res.render('question', { question })
})

router.get('/check', function (req, res) {
  var questions = require('./data/questions.json')
  req.session.data['cya'] = true
  res.render('check', { questions })
})

router.post('/question/:number', function (req, res) {
  if (req.session.data['cya'] === true) {
    return res.redirect('/check')
  }

  var page = parseInt(req.params.number) + 1

  if (page === 14) {
    return res.redirect('/optional')
  } else {
    return res.redirect('/question/' + page)
  }
})

router.post('/optional', function (req, res) {
  res.redirect('/check')
})

router.post('/check', function (req, res) {
  //save responses

  var questionData = require('./data/questions.json')
  var questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  var q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13

  // For each question, get the entry for the given number.
  questions.forEach((number) => {
    var question = questionData.filter(function (value) {
      return value.number === number
    })

    // for the question, get the corresponding answer from the options

    question[0].options.forEach((answer) => {
      if (answer.option == req.session.data['q' + number]) {
        if(number === 1){
          q1 = answer.value
        } else if(number === 2){
          q2= answer.value
        }else if(number === 3){
          q3= answer.value
        }else if(number === 4){
          q4= answer.value
        }else if(number === 5){
          q5= answer.value
        }else if(number === 6){
          q6= answer.value
        }else if(number === 7){
          q7= answer.value
        }else if(number === 8){
          q8= answer.value
        }else if(number === 9){
          q9= answer.value
        }else if(number === 10){
          q10= answer.value
        }else if(number === 11){
          q11= answer.value
        }else if(number === 12){
          q12= answer.value
        }else if(number === 13){
          q13= answer.value
        }
      }
    })
  })

  base('Design Maturity').create(
    [
      {
        fields: {
          Date: new Date(),
          Q1: q1,
          Q2: q2,
          Q3: q3,
          Q4: q4,
          Q5: q5,
          Q6: q6,
          Q7: q7,
          Q8: q8,
          Q9: q9,
          Q10: q10,
          Q11: q11,
          Q12: q12,
          Q13: q13,
          Role: req.session.data['role'],
          Area: req.session.data['area']
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err)
        return
      }
      records.forEach(function (record) {
        console.log(record.getId())
      })
    },
  )

  res.redirect('/complete')
})
