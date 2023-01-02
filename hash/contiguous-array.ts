function findMaxLength(nums: number[]): number {
  let sum = 0
  let res = 0
  const map = {}
  map[0] = -1

  nums.forEach((n, idx) => {
    sum += n == 0 ? -1 : 1

    if (map[sum] == undefined) {
      res = Math.max(res, idx - map[sum])
    } else {
      map[sum] = idx
    }
  })

  return res
}
