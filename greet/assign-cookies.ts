function findContentChildren(g: number[], s: number[]): number {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)

  let res = 0
  let i = 0

  for (let j = 0; j < s.length && i < g.length; j++) {
    const cookie = s[j]

    if (cookie >= g[i]) {
      i++
      res++
    }
  }

  return res
}
