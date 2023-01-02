function longestConsecutive(nums: number[]): number {
  let res = 0
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (map[num] == null) {
      const left = map[num - 1] || 0
      const right = map[num + 1] || 0
      const curr = left + right + 1

      res = Math.max(curr, res)
      map[num] = curr
      map[num - left] = curr
      map[num + right] = curr
    }
  }

  return res
}
