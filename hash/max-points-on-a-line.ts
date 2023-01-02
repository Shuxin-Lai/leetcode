function maxPoints(points: number[][]): number {
  const len = points.length
  if (!len) {
    return 0
  }

  let res = 1
  for (let i = 0; i < points.length; i++) {
    const point1 = points[i]
    let vertical = 1
    let duplicated = 0

    for (let j = i + 1; j < points.length; j++) {
      const point2 = points[j]
      if (point1[0] == point2[0]) {
        vertical++

        if (point1[1] == point2[1]) {
          duplicated++
        }
      }
    }

    const map = {}

    for (let j = i + 1; j < points.length; j++) {
      const point2 = points[j]
      if (point2[0] == point1[0]) continue

      const slope = (point2[1] - point1[1]) / (point2[0] - point1[0])
      if (!map[slope]) {
        map[slope] = 2
      } else {
        map[slope]++
      }

      res = Math.max(res, map[slope] + duplicated)
    }
    
    res = Math.max(res, vertical)
  }

  return res
}
