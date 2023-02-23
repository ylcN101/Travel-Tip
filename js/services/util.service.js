export const utilService = {
  saveToStorage,
  loadFromStorage,
  makeId,
  randomPastTime,
  randomPetName,
  randomPetType,
  makeLorem,
  getRandomIntInclusive,
  makeDate,
}

const gPetNames = ['Bob', 'Charls', 'Chip']
const gPetTypes = ['cat', 'dog', 'bird', 'fish', 'rabbit']

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function makeDate() {
  var dateObj = new Date()
  var month = dateObj.getUTCMonth() + 1 //months from 1-12
  var day = dateObj.getUTCDate()
  var year = dateObj.getUTCFullYear()

  const newDate = year + '/' + month + '/' + day
  return newDate
}

function loadFromStorage(key) {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : undefined
}

function makeId(length = 5) {
  var txt = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}

function makeLorem(length = 100) {
  var txt = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomPetName() {
  return gPetNames[parseInt(Math.random() * gPetNames.length)]
}

function randomPetType() {
  return gPetTypes[parseInt(Math.random() * gPetTypes.length)]
}

function randomPastTime() {
  const HOUR = 1000 * 60 * 60
  const DAY = 1000 * 60 * 60 * 24
  const WEEK = 1000 * 60 * 60 * 24 * 7

  const pastTime = getRandomIntInclusive(HOUR, WEEK)
  return Date.now() - pastTime
}
