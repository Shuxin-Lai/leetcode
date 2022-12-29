function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[],
): number {
  let res = 0
  const map: Record<string, number> = {}

  nums1.forEach((n1) => {
    nums2.forEach((n2) => {
      map[n1 + n2] = (map[n1 + n2] || 0) + 1
    })
  })

  nums3.forEach((n3) => {
    nums4.forEach((n4) => {
      res += map[-1 * (n3 + n4)] || 0
    })
  })

  return res
}
