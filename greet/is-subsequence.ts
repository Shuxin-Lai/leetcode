function isSubsequence(s: string, t: string): boolean {
  const len1 = s.length
  const len2 = t.length
  if (len1 > len2) {
    return false
  }

  let i = 0

  for (let j = 0; j < len2 && i < len1; j++) {
    const char = t[j]
    if (char == s[i]) {
      i++
    }
  }

  return i == len1
}
