function reconstructQueue(people: number[][]): number[][] {
  people = people.sort((a, b) => {
    const [h1, k1] = a
    const [h2, k2] = b
    if (h1 == h2) {
      return k1 - k2
    }
    return h2 - h1
  })

  let res: number[][] = []

  for (let i = 0; i < people.length; i++) {
    const p = people[i]
    res = insert(res, p[1], p)
  }

  return res
}
function insert(res: number[][], index: number, p: number[]): number[][] {
  return [...res.slice(0, index), p, ...res.slice(index)]
}
