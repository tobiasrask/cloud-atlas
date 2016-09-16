import DomainMap from "domain-map"

/**
* Base class for all API objects.
*/
class APIObject {

  /**
  * Construct API.
  *
  * @params
  */
  constructor(params = {}) {
    this._registry = new DomainMap();

    if (!params.hasOwnProperty('type'))
      throw new Error("API type not defined.");

    this._registry.set('properties', 'type', params.type)
    this.init();
  }

  /**
  * Hook init() initializes API.
  */
  init() {

  }

  /**
  * Returns API type.
  *
  * @return api type
  */
  getType() {
    return this._registry.get('properties', 'type')
  }

  /**
  * Returns properties.
  *
  * @return properties.
  */
  getProperties() {
    return this._registry.get('properties');
  }

  /**
  * Returns property.
  *
  * @param property key
  * @param default value
  * @return property value or default, if property doesn't exists.
  */
  getProperty(key, defaultValue) {
    return registry.get('properties', key, defaultValue);
  }
}

export default APIObject;