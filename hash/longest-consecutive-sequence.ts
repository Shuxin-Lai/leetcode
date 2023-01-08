function longestConsecutive(nums: number[]): number {
  let res = 0
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (map[num] == null) {
      const l = map[num - 1] || 0
      const r = map[num + 1] || 0
      const c = l + r + 1
      map[num] = c
      map[num - l] = c
      map[num + r] = c

      res = Math.max(res, c)
    }
  }

  return res
}
