function topKFrequent(nums: number[], k: number): number[] {
  const map: Record<string, number> = {}
  const res: number[] = []

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    map[num] = (map[num] || 0) + 1
  }

  const entries = Object.entries(map).sort((a, b) => b[1] - a[1])
  for (let i = 0; i < entries.length && res.length < k; i++) {
    const entry = entries[i]
    res.push(Number(entry[0]))
  }

  return res
}
