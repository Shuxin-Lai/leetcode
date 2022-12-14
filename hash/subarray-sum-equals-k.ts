function subarraySum(nums: number[], k: number): number {
  let res = 0
  let sum = 0
  const map = {}
  map[0] = 1

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    sum += num
    if (map[sum - k]) {
      res += map[sum - k]
    }

    map[sum] = (map[sum] || 0) + 1
  }

  return res
}
