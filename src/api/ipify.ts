import Request from './axios/axios-instance'

class Ipify extends Request {
  constructor() {
    super('https://api.ipify.org')
  }
}

export default Ipify
