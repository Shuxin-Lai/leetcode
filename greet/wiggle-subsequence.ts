function wiggleMaxLength(nums: number[]): number {
  nums = unique(nums)
  const len = nums.length
  if (len <= 2) {
    return len
  }

  let res = 2

  for (let i = 1; i + 1 < nums.length; i++) {
    const c = nums[i]
    const p = nums[i - 1]
    const n = nums[i + 1]
    if ((c > p && c > n) || (c < p && c < n)) {
      res++
    }
  }

  return res
}

function unique(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums.slice()
  }

  const res = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    if (num != nums[i - 1]) {
      res.push(num)
    }
  }
  return res
}
