function untilFirst (str, stop) {
  return str.slice(0, str.indexOf(stop) + stop.length)
}

module.exports = untilFirst
