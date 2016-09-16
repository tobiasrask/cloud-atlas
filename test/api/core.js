import assert from "assert"
import { system } from "./../../src/index"

describe('Core', () => {

  describe('Core construction', () => {

    it('Core system should construct without errors', (done) => {
      if (system.getType() != 'system')
        return done(new Error("Exported core system is not singleton instance"));
      done();
    })
  });
});
