function insert(list: any[], index: number, insertValue: any) {
  return [...list.slice(0, index), insertValue, ...list.slice(index)]
}

function reconstructQueue(people: number[][]): number[][] {
  people = people.sort((a, b) => {
    const h1 = a[0]
    const k1 = a[1]
    const h2 = b[0]
    const k2 = b[1]
    if (h1 == h2) {
      return k1 - k2
    }
    return h2 - h1
  })

  let res: any[] = []

  for (let i = 0; i < people.length; i++) {
    const p = people[i]
    res = insert(res, p[1], p)
  }

  return res
}
