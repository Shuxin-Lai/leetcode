function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[],
): number {
  const map = {}
  let res = 0
  for (let i = 0; i < nums1.length; i++) {
    const n1 = nums1[i]
    for (let j = 0; j < nums2.length; j++) {
      const n2 = nums2[j]
      map[n1 + n2] = (map[n1 + n2] || 0) + 1
    }
  }

  for (let i = 0; i < nums3.length; i++) {
    const n3 = nums3[i]
    for (let j = 0; j < nums4.length; j++) {
      const n4 = nums4[j]
      const count = map[-(n3 + n4)] || 0
      res += count
    }
  }

  return res
}
