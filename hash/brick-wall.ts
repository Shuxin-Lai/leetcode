function leastBricks(wall: number[][]): number {
  const len = wall.length
  if (!len) {
    return 0
  }

  const map = {}
  let max = 0
  for (let i = 0; i < len; i++) {
    const line = wall[i]

    let sum = 0
    for (let j = 0; j + 1 < line.length; j++) {
      const b = line[j]
      sum += b
      if (map[sum]) {
        map[sum]++
      } else {
        map[sum] = 1
      }
      max = Math.max(max, map[sum])
    }
  }

  return len - max
}
