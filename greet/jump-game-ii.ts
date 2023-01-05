function jump(nums: number[]): number {
  if (nums.length <= 1) {
    return 0
  }

  let dist = 0
  let res = 0

  for (let i = 0; i < nums.length; i++) {
    let right = dist
    for (let j = i; j <= right; j++) {
      dist = Math.max(dist, nums[j] + j)
    }

    res++
    i = right
    if (dist + 1 >= nums.length) {
      return res
    }
  }

  return res
}
