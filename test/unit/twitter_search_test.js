/* eslint-disable no-unused-expressions */
'use strict'

const twitterSearch = require('../../twitter_promise')

describe('search twitter', () => {
  it('returns empty array if no search criteria provided', async () => {
    await twitterSearch('')
      .then(res => {
        expect(res).to.be.an('array')
        expect(res).to.eql([])
      })
  })

  it('returns an array of ojects with the specified keys', async () => {
    await twitterSearch([{
      full_name: 'abc',
      html_url: 'def',
      name: 'ghi'
    }])
      .then(res => {
        expect(res).to.be.an('array')
        expect(res[0]).to.have.keys(['name', 'html_url', 'full_name', 'tweets'])
      })
  })
})
