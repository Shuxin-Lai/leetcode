function twoSum(nums: number[], target: number): number[] {
  const map = {}
  const res: number[] = []

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    const n1 = map[target - n]

    if (n1 != null) {
      return [n1, i]
    }
    map[n] = i
  }

  return res
}
