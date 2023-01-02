function longestConsecutive(nums: number[]): number {
  const map = {}
  let res = 0

  nums.forEach((n) => {
    if (map[n] == null) {
      const left = map[n - 1] || 0
      const right = map[n + 1] || 0
      const currentLen = left + right + 1
      res = Math.max(res, currentLen)

      map[n] = currentLen
      map[n - left] = currentLen
      map[n + right] = currentLen
    }
  })

  return res
}
