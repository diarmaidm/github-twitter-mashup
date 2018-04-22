/* eslint-disable no-unused-expressions */
'use strict'

const githubSearch = require('../../github_search')

describe('search github', () => {
  it('returns empty array if no search criteria provided', (done) => {
    githubSearch('', (err, res) => {
      expect(err).to.be.null
      expect(res).to.eql([])
      done()
    })
  })

  it('returns array with results from github for "Football"', (done) => {
    let expectedResults = [
      {
        'name': 'FootballData',
        'full_name': 'jokecamp/FootballData',
        'html_url': 'https://github.com/jokecamp/FootballData'
      },
      {
        'name': 'FantasyFootballAnalyticsR',
        'full_name': 'isaactpetersen/FantasyFootballAnalyticsR',
        'html_url': 'https://github.com/isaactpetersen/FantasyFootballAnalyticsR'
      },
      {
        'name': 'soccer-cli',
        'full_name': 'architv/soccer-cli',
        'html_url': 'https://github.com/architv/soccer-cli'
      },
      {
        'name': 'football.json',
        'full_name': 'openfootball/football.json',
        'html_url': 'https://github.com/openfootball/openfootball.github.io'
      },
      {
        'name': 'openfootball.github.io',
        'full_name': 'openfootball/openfootball.github.io',
        'html_url': 'https://github.com/openfootball/football.json'
      },
      {
        'name': 'football-data-collection',
        'full_name': 'hugomathien/football-data-collection',
        'html_url': 'https://github.com/hugomathien/football-data-collection'
      },
      {
        'name': 'espnff',
        'full_name': 'rbarton65/espnff',
        'html_url': 'https://github.com/rbarton65/espnff'
      },
      {
        'name': 'FootballForecast',
        'full_name': 'youmu178/FootballForecast',
        'html_url': 'https://github.com/youmu178/FootballForecast'
      },
      {
        'name': 'football-cli',
        'full_name': 'ManrajGrover/football-cli',
        'html_url': 'https://github.com/ManrajGrover/football-cli'
      },
      {
        'name': 'football-crunching',
        'full_name': 'rjtavares/football-crunching',
        'html_url': 'https://github.com/rjtavares/football-crunching'
      }
    ]

    githubSearch('Football', (err, res) => {
      expect(err).to.be.null

      expect(res[0]).to.eql(expectedResults[0])
      expect(res[1]).to.eql(expectedResults[1])
      expect(res[2]).to.eql(expectedResults[2])
      expect(Object.keys(res[3])).to.eql(['name', 'full_name', 'html_url'])
      expect(res[4]).to.have.all.keys('name', 'full_name', 'html_url')
      expect(res.length).to.equal(10)
      done()
    })
  })
})
