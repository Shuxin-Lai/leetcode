function findContentChildren(g: number[], s: number[]): number {
  g = g.sort((a, b) => {
    return a - b
  })

  s = s.sort((a, b) => {
    return a - b
  })

  let i = 0

  for (let j = 0; j < s.length && i < g.length; j++) {
    if (s[j] >= g[i]) {
      i++
    }
  }

  return i
}
