function drawMSNumbers() {
  const availableNumbers = Array.from(Array(60).keys()).map(i => i + 1)
  const drawnNumbers = []

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.random()
    const index = Math.floor(randomNumber * availableNumbers.length)
    const drawnNumber = availableNumbers[index]

    drawnNumbers.push(drawnNumber)
    availableNumbers.splice(index, 1)
    drawnNumbers.sort((a, b) => a - b)
  }
  return drawnNumbers
}

setInterval(() => {
  console.table(drawMSNumbers())
}, 5000)