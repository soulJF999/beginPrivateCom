const axios = require('axios')
const http = require('http')
const https = require('https')

let agent

Object.defineProperties(global, 'agent', {
  get () {
    return agent
  }
})

function initAgent () {

}
