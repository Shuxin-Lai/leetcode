function canJump(nums: number[]): boolean {
  if (nums.length <= 1) {
    return true
  }
  let dist = 0

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    dist = Math.max(dist, i + num)

    if (dist + 1 >= nums.length) {
      return true
    }

    if (dist <= i) {
      return false
    }
  }

  return true
}
