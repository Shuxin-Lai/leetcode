function topKFrequent(nums: number[], k: number): number[] {
  const res: number[] = []
  const map: Record<string, number> = {}

  nums.forEach((n) => {
    map[n] = (map[n] || 0) + 1
  })

  const entries = Object.entries(map).sort((a, b) => b[1] - a[1])
  for (let i = 0; i < k && i < entries.length; i++) {
    res.push(Number(entries[i][0]))
  }

  return res
}
