// The characters ?, +, *, and () are subsets of their regular expression counterparts. 
// The hyphen (-) and the dot (.) are interpreted literally by string-based paths.
const express = require('express');
const app = express()
const port =1212

app.get('/', (req,res) => {
    res.send('Home')
})

// route paths based on string

app.get('/about', (req, res) => {
    res.send('This is about page')
  })
  app.get('/random.text', (req, res) => {
    res.send('This is random.text')
  })

// route paths based on string pattern

app.get('/ab?cd', (req, res) => {                       // matches acd and abcd
    res.send('matches abcd and acd')
  })

  app.get('/ab+cd', (req, res) => {                     // matches abcd, abbcd, abbbcd,...... (b increaese)
    res.send('matches abcd,abbcd,abbbcd, and so on')
  })

  app.get('/ab*cd', (req, res) => {                     // matches abcd, abxcd, ab123cd, abRANDOMcd, .......
    res.send('matches abcd, abxcd, abRANDOMcd, ab123cd and so on')
  })

  app.get('/ab(cd)?e', (req, res) => {                 // matches abe and abcde 
    res.send('matches abe and abcde')
  })

  // based on regular expression

  app.get(/z/, (req, res) => {
    res.send('match anything with an "z" in it...!!')
  })

  app.get(/.*book$/, (req,res) => {
    res.send('Matches fly word atlast - Cartoonbook, mybook not mybookshelf,bookshop')
  })
app.listen(port, () => {
    console.log(`port is created: ${port}`)
})