'use strict'

const request = require('request')

// TODO Change to promises
const githubSearch = (criteria, callback) => {
  // Return early if no criteria
  if (!criteria) {
    return callback(null, [])
  }

  // Setup Github search options
  const options = {
    method: 'GET',
    url: 'https://api.github.com/search/repositories',
    qs: { q: criteria },
    headers:
      {
        'User-Agent': 'Football-Search-App',
        'cache-control': 'no-cache'
      }
  }

  // Number of results to return
  const numberResults = 10

  // Submit search request to github
  request(options, function (err, res, body) {
    if (err) {
      return callback(err)
    }

    let githubResults = JSON.parse(body).items.slice(0, numberResults)

    let results = githubResults.map((item) => {
      return {
        'name': item.name,
        'full_name': item.full_name,
        'html_url': item.html_url
      }
    })

    return callback(null, results)
  })
}

module.exports = githubSearch
