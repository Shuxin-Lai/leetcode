function wordPattern(pattern: string, s: string): boolean {
  const map: Record<string, any> = {}
  const map2: Record<string, any> = {}

  const words = s.split(' ')

  if (words.length != pattern.length) return false

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const p = pattern[i]

    if (map[p] != null && map[p] != word) {
      return false
    }

    if (map2[word] != null && map2[word] != p) {
      return false
    }

    map[p] = word
    map2[word] = p
  }

  return true
}
