'use strict'

const Twitter = require('twitter')
const Promise = require('promise')

function twitterSearch (githubprojects) {
  let promises = []
  if (!githubprojects) {
    console.log('..... in no github projects()')
    // return [new Promise((resolve) => resolve([]))]
    let promise = new Promise((resolve, reject) => {
      console.log('.....in promise')
      resolve({})
      promises.push(promise)
    })
    return promises
  }

  // githubprojects.forEach(project => {
  for (var i = 0; i < githubprojects.length; i++) {
    console.log(`\n ** .. ** .. for ${i} `)
    let project = githubprojects[i]

    let promise = new Promise((resolve, reject) => {
      let client = new Twitter({
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token_key: process.env.ACCESS_TOKEN_KEY,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET
      })

      client.get('search/tweets', { q: project.full_name }, function (error, tweets, response) {
        // console.log('\nin twitter client 9.2 = = = = = = = = = twitter search criteria:', project.full_name)

        if (error) {
          // console.log('\n..... error:', error)
          reject(error)
        }

        // TODO Only add required fields/data to the object.
        project.tweets = tweets

        // console.log('\n\t...in twitter search before resolve')
        resolve(project)
      })
    })
    promises.push(promise)
  }

  console.log('\n ** .. ** .. after for')

  return promises
}

module.exports = twitterSearch
