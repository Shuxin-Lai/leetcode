function isSubsequence(s: string, t: string): boolean {
  const len1 = s.length
  const len2 = t.length
  if (len1 > len2) {
    return false
  }
  let i = 0
  let j = 0

  while (i < len1 && j < len2) {
    if (t[j] == s[i]) {
      i++
    }

    j++
  }

  return i == len1
}
