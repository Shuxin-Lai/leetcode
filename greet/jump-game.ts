function canJump(nums: number[]): boolean {
  const len = nums.length
  let dist = 0

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    dist = Math.max(dist, num + i)
    if (dist + 1 >= len) {
      return true
    }
    if (dist == i) {
      return false
    }
  }

  return dist + 1 >= len
}
