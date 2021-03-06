import APIObject from './../includes/api-object'

/**
* Module API.
*/
class ModuleHandler extends APIObject {

  /**
  * Construct module.
  *
  * @param attributes
  *   name
  *     Module name.
  */
  constructor(params = {}) {
    if (!params.hasOwnProperty('type')) {
      params.type = 'moduleHandler'
    }

    if (!params.hasOwnProperty('name')) {
      throw new Error('Handler name not defiend.')
    }

    super(params)

    this.setProperty('name', params.name)
  }

  /**
  * Hook init() is called when module is initialized by server.
  */
  init() {

  }

  /**
  * Hook remove() is called when module is removed from server.
  */
  remove() {

  }

  /**
  * Returns module name.
  *
  * @return name
  */
  getName() {
    return this.getProperty('name')
  }
}

export default ModuleHandler