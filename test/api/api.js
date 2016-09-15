import assert from "assert"
import { APIObject } from "./../../src/index"


describe('API', () => {

  describe('API object Construction', () => {
    it('API objects should construct without errors', (done) => {
      let probe = 'testAPI';
      let api = new APIObject({ 'type': probe });

      if (api.getType() != probe)
        return done(new Error("API object constructor returns false type"));

      done();
    })
  });
});
