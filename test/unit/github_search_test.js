/* eslint-disable no-unused-expressions */
'use strict'

const githubSearch = require('../../github_promise')

describe('search github', () => {
  it('returns an array of ojects with the specified keys', async () => {
    await githubSearch('Football')
      .then((res) => {
        expect(res).to.be.an('array')
        // expect(res[0]).to.have.keys(['github_fullname', 'github_html_url', 'github_name'])
        expect(res[0]).to.have.keys(['name', 'html_url', 'full_name'])
      })
  })
})

// /* eslint-disable no-unused-expressions */
// 'use strict'

// const githubSearch = require('../../github_promise')

// describe('search github', () => {
//   it('returns empty array if no search criteria provided', async () => {
//     await githubSearch('')
//       .then(res => {
//         expect(res).to.eql([])
//       })
//   })

//   it.only('returns array with results from github for "Football"', async () => {
//     await githubSearch('Football')
//       .then(res => {
//         expect(res).to.be.an('array')
//         // expect(err).to.be.null
//         // expect(res[0]).to.eql(expectedResults[0])
//         // expect(res[1]).to.eql(expectedResults[1])
//         // expect(res[2]).to.eql(expectedResults[2])
//         expect(Object.keys(res[3])).to.eql(['name', 'full_name', 'html_url'])
//         expect(res[4]).to.have.all.keys('name', 'full_name', 'html_url')
//         expect(res.length).to.equal(10)
//       })
//   })
// })
