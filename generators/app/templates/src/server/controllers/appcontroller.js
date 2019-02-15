const axios = require('axios')
const config = require('config');


function check(req, res) {
  res.send('OK')
}


function getMe(req, res) {
  res.json({
    status: 'success',
    payload: {
      message: 'Message from Backend Express JS'
    }
  })
}


module.exports = {
  getMe,
  check
}