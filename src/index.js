// index.js

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const request = require('request')

// Promisified function for getGoogleHomePage
const getGoogleHomePagePromise = () => {
  return new Promise((resolve, reject) => {
    request('http://www.google.com', function (error, response, body) {
      if (error) {
        console.error('error:', error)
        reject(error)
      } else {
        console.log('statusCode:', response && response.statusCode)
        console.log('body:', body)
        resolve(body)
      }
    })
  })
}

// Usage of promisified function
getGoogleHomePagePromise()
  .then(response => {
    console.log('Google homepage:', response)
  })
  .catch(error => {
    console.error('Error:', error)
  })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
