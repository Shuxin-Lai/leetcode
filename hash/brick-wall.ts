function leastBricks(wall: number[][]): number {
  let res = 0
  const map = {}

  wall.forEach((w) => {
    let sum = 0

    for (let i = 0; i + 1 < w.length; i++) {
      const n = w[i]
      sum += n
      const count = map[sum] || 0

      map[sum] = count + 1
      res = Math.max(res, count + 1)
    }
  })

  return wall.length - res
}
