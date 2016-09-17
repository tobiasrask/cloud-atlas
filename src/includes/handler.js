import DomainMap from "domain-map"
import APIObject from './api-object'

/**
* Handler object to be assigned with API objects.
*/
class Handler extends APIObject {

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
    this._registry.set('api', apiObject.getType(), apiObject);
  }

  /**
  * Returns api.
  *
  * @param type
  * @return API Object or null if not exists
  */
  api(type) {
    return this._registry.get('api', type, null);
  }
}

const core = new Core({ type: 'system' });
export default core;