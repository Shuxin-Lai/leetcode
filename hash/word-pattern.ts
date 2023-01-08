function wordPattern(pattern: string, s: string): boolean {
  const len = pattern.length
  const words = s.split(' ')
  if (words.length != len) {
    return false
  }

  const map1 = {}
  const map2 = {}

  for (let i = 0; i < len; i++) {
    const p = pattern[i]
    const word = words[i]
    if (map1[p] != null && map1[p] != word) {
      return false
    }
    if (map2[word] != null && map2[word] != p) {
      return false
    }

    map1[p] = word
    map2[word] = p
  }
  return true
}
