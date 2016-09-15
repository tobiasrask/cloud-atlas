import DomainMap from "domain-map"
import APIObject from './api-object'

/**
* Core system to manage other APIs. Core system is also API by it'snature.
*/
class Core extends APIObject {

  /**
  * Initialize core.
  */
  init() {

  }

  /**
  * Register API.
  *
  * @param apiObject
  */
  registerAPI(apiObject) {
    this._registry(apiObject.getAPIType(), )
  }
}

const core = new Core({ type: 'system' });
export default core;