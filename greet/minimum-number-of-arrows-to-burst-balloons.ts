function findMinArrowShots(points: number[][]): number {
  points = points.sort((a, b) => {
    return a[1] - b[1]
  })
  let res = 0
  let right = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < points.length; i++) {
    const point = points[i]
    const l = point[0]
    const r = point[1]

    if (l > right) {
      res++
      right = r
    }
  }

  return res
}
