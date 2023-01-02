function intersect(nums1: number[], nums2: number[]): number[] {
  if (nums1.length > nums2.length) {
    const tmp = nums1
    nums1 = nums2
    nums2 = tmp
  }

  const res: number[] = []

  const map = {}
  nums2.forEach((n) => {
    map[n] = (map[n] || 0) + 1
  })

  nums1.forEach((n) => {
    if (map[n]) {
      res.push(n)
      map[n]--
    }
  })

  return res
}
