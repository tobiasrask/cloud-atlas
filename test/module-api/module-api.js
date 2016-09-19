import assert from "assert"
import system, { moduleAPI, Module } from "./../../src/index"

describe('Module API', () => {
  describe('Module API tests', () => {

    it('API should handle unknown module referenses', (done) => {
      if (moduleAPI.get() != null ||moduleAPI.get('undefined') != null)
        return done(new Error("Module API didn't return null"));
      done();
    })
  });

  describe('API integrations', () => {
    it('API should deliver module objects', (done) => {
      let probe1 = 'testModule1';
      let probe2 = 'testModule2';

      class CustomModule extends Module {}

      moduleAPI.register(probe1, CustomModule);
      moduleAPI.register(probe2, CustomModule);

      if (moduleAPI.get(probe1).getType() != 'module' ||
          moduleAPI.get(probe2).getType() != 'module')
        return done(new Error("Module API didn't return expected api object"));

      if (moduleAPI.get(probe1).getName() != probe1 ||
          moduleAPI.get(probe2).getName() != probe2)
        return done(new Error("Module didn't return expected name"));

      done();
    })
  });
});
