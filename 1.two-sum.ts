export {}
function twoSum(nums: number[], target: number): number[] {
  const indexes: number[] = []

  let left = 0
  let right = nums.length - 1

  for (let i = 0; i <= right; i++) {
    indexes.push(i)
  }

  indexes.sort((a, b) => {
    return nums[a] - nums[b]
  })

  while (left < right) {
    const sum = nums[indexes[left]] + nums[indexes[right]]
    if (sum == target) return [indexes[left], indexes[right]]

    if (sum < target) {
      left++
    } else {
      right--
    }
  }

  return [indexes[left], indexes[right]]
}
