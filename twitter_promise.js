'use strict'

const Twitter = require('twitter')
const Promise = require('promise')

function twitterSearch (githubprojects) {
  let promises = []
  if (!githubprojects) {
    return new Promise((resolve) => resolve([]))
  }

  // githubprojects.forEach(project => {
  for (var i = 0; i < githubprojects.length; i++) {
    // console.log(`\n ** .. ** .. for ${i} `)
    let project = githubprojects[i]

    let promise = new Promise((resolve, reject) => {
      let client = new Twitter({
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token_key: process.env.ACCESS_TOKEN_KEY,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET
      })

      client.get('search/tweets', { q: project.full_name }, function (error, tweets, response) {
        if (error) {
          reject(error)
        }

        // TODO Only add required fields/data to the object.
        project.tweets = tweets

        resolve(project)
      })
    })
    promises.push(promise)
  }

  return Promise.all(promises)
}

module.exports = twitterSearch
