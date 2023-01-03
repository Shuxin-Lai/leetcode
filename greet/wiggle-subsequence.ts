function unique(nums: number[]): number[] {
  const len = nums.length
  if (len <= 1) {
    return nums
  }

  const res: number[] = []
  res.push(nums[0])

  for (let i = 1; i < len; i++) {
    const previous = nums[i - 1]
    const curr = nums[i]
    if (curr != previous) {
      res.push(curr)
    }
  }

  return res
}

function wiggleMaxLength(nums: number[]): number {
  nums = unique(nums)

  const len = nums.length
  if (len <= 2) {
    return len
  }

  let res = 2

  for (let i = 1; i + 1 < len; i++) {
    const left = nums[i - 1]
    const curr = nums[i]
    const right = nums[i + 1]
    if ((curr > left && curr > right) || (curr < left && curr < right)) {
      res++
    }
  }

  return res
}
