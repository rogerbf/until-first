function untilFirst (str, stop) {
  if (str.split(stop).length > 1) {
    if (str.slice(-stop.length) === stop) {
      return str
    } else {
      return str.split(stop).slice(0, -1).join(stop) + stop
    }
  } else {
    return str
  }
}

module.exports = untilFirst
