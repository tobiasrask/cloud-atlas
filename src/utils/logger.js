import APIObject from './../includes/api-object'

/**
* Logger API.
*/
class LoggerAPI extends APIObject {

  constructor(params = {}) {
    if (!params.hasOwnProperty('type')) {
      params.type = 'log'
    }
    super(params)
  }

  /**
  * Hook log allows other API's and modules to log events.
  *
  * @param params
  *   Application should define it own params
  */
  log(_args) {

  }
}

export default LoggerAPI
