function wiggleMaxLength(nums: number[]): number {
  nums = unique(nums)
  if (nums.length <= 2) {
    return nums.length
  }

  let res = 2

  for (let i = 1; i + 1 < nums.length; i++) {
    const p = nums[i - 1]
    const c = nums[i]
    const n = nums[i + 1]
    if (p < c && c > n) {
      res++
      continue
    }

    if (p > c && c < n) {
      res++
    }
  }

  return res
}

function unique(nums: number[]): number[] {
  const len = nums.length
  if (len <= 1) {
    return [...nums]
  }

  const res = [nums[0]]

  for (let i = 1; i < len; i++) {
    const num = nums[i]
    if (num != nums[i - 1]) {
      res.push(num)
    }
  }

  return res
}
