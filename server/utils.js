const fs = require('fs');
const archiver = require('archiver');
const promisified = require('./promisified');
const reactCode = require('./generate_code/react');
const reduxCode = require('./generate_code/redux');

function generateRandomString() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const chars = `${alphabet}${alphabet.toLowerCase()}0123456789`;
  let result = '';

  for (let i = 0; i < 10; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

module.exports = {
  generateRandomString
};
