function reconstructQueue(people: number[][]): number[][] {
  people = people.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1]
    }

    return b[0] - a[0]
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
