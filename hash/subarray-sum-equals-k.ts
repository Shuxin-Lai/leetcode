function subarraySum(nums: number[], k: number): number {
  const map: Record<string, number> = {}
  let sum = 0
  let res = 0
  map[0] = 1

  nums.forEach((n) => {
    sum += n

    if (map[sum - k]) {
      res += map[sum - k]
    }
    map[sum] = (map[sum] || 0) + 1
  })

  return res
}
