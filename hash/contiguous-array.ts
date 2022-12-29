function findMaxLength(nums: number[]): number {
  let res = 0
  const map: Record<string, number> = {}
  let sum = 0

  map[0] = -1
  nums.forEach((n, index) => {
    sum += n == 0 ? -1 : 1

    if (map[sum] !== undefined) {
      res = Math.max(res, index - map[sum])
    }

    map[sum] = map[sum] == undefined ? index : map[sum]
  })

  return res
}
