'use strict'

const request = require('request')
const Promise = require('promise')

function githubSearch (criteria) {
  let promise = new Promise((resolve, reject) => {
    // Setup Github search options, sort by updated in asc order
    const options = {
      method: 'GET',
      url: 'https://api.github.com/search/repositories',
      qs: { q: criteria, sort: 'updated', order: 'asc' },
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
        reject(err)
      }

      // let githubResults = body.items.slice(0, numberResults)
      let githubResults = JSON.parse(body).items.slice(0, numberResults)

      let results = githubResults.map((project) => {
        return {
          'name': project.name,
          'full_name': project.full_name,
          'html_url': project.html_url
        }
      })

      resolve(results)
    })
  })

  return promise
}

module.exports = githubSearch
