/* eslint-disable no-unused-expressions */
'use strict'

const githubSearch = require('../../github_promise')

describe('search github', () => {
  it('returns empty array if no search criteria provided', (done) => {
    githubSearch('')
      .then((res) => {
        expect(res).to.eql([])
        done()
      })
      .catch(err => {
        expect(err).to.not.be.null
        done()
      })
    // githubSearch('', (err, res) => {
    // expect(err).to.be.null
    // expect(res).to.eql([])
    // done()
    // })
  })

  it('returns array with results from github for "Football"', (done) => {

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
