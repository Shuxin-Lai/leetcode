function maxPoints(points: number[][]): number {
  let res = 0

  for (let i = 0; i < points.length; i++) {
    const point1 = points[i]
    let vertical = 1
    let duplicated = 0
    const map = {}

    for (let j = i + 1; j < points.length; j++) {
      const point2 = points[j]
      if (point1[0] == point2[0]) {
        vertical++
        if (point1[1] == point2[1]) {
          duplicated++
        }
      }
    }

    for (let j = i + 1; j < points.length; j++) {
      const point2 = points[j]
      if (point1[0] != point2[0]) {
        const slope = (point1[1] - point2[1]) / (point1[0] - point2[0])
        map[slope] = (map[slope] || 1) + 1
        res = Math.max(res, map[slope] + duplicated)
      }
    }

    res = Math.max(res, vertical)
  }

  return res
}
