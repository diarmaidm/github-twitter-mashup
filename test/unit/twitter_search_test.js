/* eslint-disable no-unused-expressions */
'use strict'

const twitterSearch = require('../../twitter_promise')

xdescribe('search twitter', () => {
  it('returns empty array if no search criteria provided', (done) => {
    twitterSearch('', (err, res) => {
      expect(err).to.be.null
      expect(res).to.eql([])
      done()
    })
  })

})
