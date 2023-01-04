function removeKdigits(num: string, k: number): string {
  let res = ''
  const len = num.length
  if (len <= k) {
    return '0'
  }

  for (let i = 0; i < len; i++) {
    const char = num[i]
    while (res.length && char < res[res.length - 1] && k) {
      k--
      res = res.substring(0, res.length - 1)
    }

    res += char
  }

  res = res.substring(0, res.length - k)
  res = res.replace(/^0*/, '')

  return res != '' ? res : '0'
}
