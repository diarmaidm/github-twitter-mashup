/* eslint-disable no-unused-expressions */
'use strict'

// const GithubTwitter = require('../../model/github_twitter')
const githubSearch = require('../../github_promise')

describe('github and twitter mashup', () => {
  it('contains github respoitory details and array of twitter results', (done) => {
    // let testObj = new GithubTwitter()
    // 'github_fullname'
    // 'github_html_url'
    // 'github_name'
    // 'tweets'
    githubSearch('Football')
      .then((res) => {
        expect(res).to.have.keys(['github_fullname', 'github_html_url', 'github_name', 'tweets'])
        done()
      })
    // expect(testObj).to.have.keys(['github_fullname', 'github_html_url', 'github_name', 'tweets'])
    // expect(testObj).to.have.keys('github_html_url')
    // expect(testObj).to.have.keys('github_name')
    // expect(testObj).to.have.keys('tweets')
  })
})
