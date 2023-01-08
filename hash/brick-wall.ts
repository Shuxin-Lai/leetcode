function leastBricks(wall: number[][]): number {
  const len = wall.length
  let max = 0
  const map = {}

  for (let i = 0; i < wall.length; i++) {
    const brick = wall[i]
    let sum = 0

    for (let j = 0; j + 1 < brick.length; j++) {
      const n = brick[j]
      sum += n
      map[sum] = (map[sum] || 0) + 1
      max = Math.max(max, map[sum])
    }
  }

  return len - max
}
