function canCompleteCircuit(gas: number[], cost: number[]): number {
  const len = gas.length

  let j
  for (let i = 0; i < len; i = i + j + 1) {
    let left = 0
    for (j = 0; j < len; j++) {
      const k = (i + j) % len
      left = left + gas[k] - cost[k]
      if (left < 0) {
        break
      }
    }

    if (j == len) {
      return i
    }
  }

  return -1
}
