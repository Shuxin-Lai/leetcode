function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[],
): number {
  const map = {}
  let res = 0

  nums1.forEach((n1) => {
    nums2.forEach((n2) => {
      const n12 = n1 + n2
      map[n12] = (map[n12] || 0) + 1
    })
  })

  nums3.forEach((n3) => {
    nums4.forEach((n4) => {
      const n34 = n3 + n4
      res += map[-n34] || 0
    })
  })

  return res
}
