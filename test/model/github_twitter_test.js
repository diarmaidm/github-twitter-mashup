/* eslint-disable no-unused-expressions */
'use strict'

const githubSearch = require('../../github_promise')

describe('github and twitter mashup', () => {
  it('returns an array of ojects with the specified keys', async () => {
    await githubSearch('Football')
      .then((res) => {
        expect(res).to.be.an('array')
        // expect(res[0]).to.have.keys(['github_fullname', 'github_html_url', 'github_name'])
        expect(res[0]).to.have.keys(['name', 'html_url', 'full_name'])
      })
  })
})
