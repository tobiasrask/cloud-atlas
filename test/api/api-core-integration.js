import system, { APIObject } from './../../src/index'

describe('Integrations', () => {
  describe('Core and API integrations', () => {
    it('Core should handle unknown API referenses', (done) => {
      if (system.api() != null || system.api('undefined') != null) {
        return done(new Error('System didn\'t return null'))
      }
      done()
    })
  })

  describe('Core and API integrations', () => {
    it('Core should deliver API objects', (done) => {
      let probe1 = 'testAPI1'
      let probe2 = 'testAPI2'
      class CustomAPI extends APIObject { }
      system.registerAPI(new CustomAPI({ 'type': probe1 }))
      system.registerAPI(new CustomAPI({ 'type': probe2 }))

      if (system.api(probe1).getType() != probe1) {
        return done(new Error('System didn\'t return expected api object'))
      }

      if (system.api(probe2).getType() != probe2) {
        return done(new Error('System didn\'t return expected api object'))
      }

      if (system.api() != null || system.api('undefined') != null) {
        return done(new Error('System didn\'t return null'))
      }

      done()
    })
  })
})
