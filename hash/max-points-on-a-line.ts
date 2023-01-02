function maxPoints(points: number[][]): number {
  const len = points.length
  if (!len) {
    return 0
  }

  let res = 1
  for (let i = 0; i < len; i++) {
    const point1 = points[i]
    let vertical = 1
    let duplicated = 0
    const map = {}

    for (let j = i + 1; j < len; j++) {
      const point2 = points[j]
      if (point1[0] == point2[0]) {
        vertical++
        if (point1[1] == point2[1]) {
          duplicated++
        }
      }
    }

    for (let j = i + 1; j < len; j++) {
      const point2 = points[j]
      if (point1[0] != point2[0]) {
        const slope = (point2[1] - point1[1]) / (point2[0] - point1[0])
        if (map[slope]) {
          map[slope]++
        } else {
          map[slope] = 2
        }

        res = Math.max(res, map[slope] + duplicated)
      }
    }

    res = Math.max(res, vertical)
  }

  return res
}
