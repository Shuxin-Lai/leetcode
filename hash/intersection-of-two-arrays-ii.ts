function intersect(nums1: number[], nums2: number[]): number[] {
  const map = {}
  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i]
    map[num] = (map[num] || 0) + 1
  }

  const res: number[] = []

  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i]

    if (map[num]) {
      res.push(num)
      map[num] = map[num] - 1
    }
  }

  return res
}
