function canJump(nums: number[]): boolean {
  const len = nums.length
  if (len <= 1) {
    return true
  }

  let dist = 0

  for (let i = 0; i < len; i++) {
    const num = nums[i]
    dist = Math.max(dist, i + num)
    if (dist + 1 >= len) {
      return true
    }
    if (dist <= i) {
      return false
    }
  }

  return true
}
