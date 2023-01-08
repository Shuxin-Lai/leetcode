function findMaxLength(nums: number[]): number {
  let res = 0
  const len = nums.length
  let sum = 0
  const map = {
    0: -1,
  }

  for (let i = 0; i < len; i++) {
    const num = nums[i]
    sum += num == 0 ? -1 : 1
    if (map[sum] != null) {
      res = Math.max(res, i - map[sum])
    } else {
      map[sum] = i
    }
  }

  return res
}
