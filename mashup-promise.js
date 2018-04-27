'use strict'

const githubSearch = require('./github_promise')
const twitterSearch = require('./twitter_promise')

let searchText = 'Football'

githubSearch(searchText)
  .then(twitterSearch)
  .then(res => {
    // console.log(JSON.stringify(res))
    // Display results in more human readable format.
    console.log(JSON.stringify(res, null, '  '))
  })
  .catch(err => {
    // TODO outputing to console. Change to log error and return/output a custom message.
    console.log('An error occured.', err)
  })
