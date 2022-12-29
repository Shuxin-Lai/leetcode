function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let nums = [...nums1, ...nums2]
  nums = nums.sort((a, b) => a - b)
  const len = nums.length

  if (len % 2 == 0) {
    return (nums[Math.floor(len / 2)] + nums[Math.floor((len - 1) / 2)]) / 2
  }

  return nums[Math.floor(len / 2)]
}
