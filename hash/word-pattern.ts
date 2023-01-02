function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ')
  if (words.length != pattern.length) {
    return false
  }

  const map1 = {}
  const map2 = {}

  const len = words.length
  for (let i = 0; i < len; i++) {
    const word = words[i]
    const p = pattern[i]

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
