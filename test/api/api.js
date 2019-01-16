import { APIObject } from './../../src/index'

describe('API', () => {

  describe('API object Construction', () => {

    it('API objects should construct without errors', (done) => {
      let probe = 'testAPI'
      let api = new APIObject({ 'type': probe })

      if (api.getType() != probe) {
        return done(new Error('API object constructor returns false type'))
      }

      done()
    })
  })

  describe('Custom API object Construction', () => {

    it('One should be able to extend API object and intialize it', (done) => {

      let probe = 'testAPI'
      let initProbe = 'testAPIinitialized'

      class CustomAPI extends APIObject {

        // Initialize API
        init() {
          this._probe = initProbe
        }

        // Returns initialized value
        getProbeValue() {
          return this._probe
        }
      }

      let api = new CustomAPI({ 'type': probe })

      if (api.getType() != probe) {
        return done(new Error('Custom API object constructor returns false type'))
      }

      if (api.getProbeValue() != initProbe) {
        return done(new Error('Custom API object didn\'t initialized'))
      }

      done()
    })
  })
})
