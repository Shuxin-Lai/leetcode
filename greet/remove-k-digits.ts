function removeKdigits(num: string, k: number): string {
  if (num.length <= k) {
    return '0'
  }
  let res = ''

  for (let i = 0; i < num.length; i++) {
    const char = num[i]

    while (res.length && k && char < res[res.length - 1]) {
      res = res.substring(0, res.length - 1)
      k--
    }

    res += char
  }

  res = res.substring(0, res.length - k)
  res = res.replace(/^0+/, '')

  return res ? res : '0'
}
