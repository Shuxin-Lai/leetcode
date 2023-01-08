function jump(nums: number[]): number {
  const len = nums.length
  if (len <= 1) {
    return 0
  }
  let res = 0
  let dist = 0

  for (let i = 0; i < nums.length; i++) {
    let right = dist
    for (let j = i; j <= right; j++) {
      dist = Math.max(dist, j + nums[j])
    }
    res++
    i = right
    if (dist + 1 >= len) {
      break
    }
  }

  return res
}
