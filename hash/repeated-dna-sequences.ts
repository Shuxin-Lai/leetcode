function findRepeatedDnaSequences(s: string): string[] {
  const res: string[] = []
  const map = {}
  for (let i = 0; i + 10 <= s.length; i++) {
    const sub = s.substring(i, i + 10)
    map[sub] = (map[sub] || 0) + 1
    if (map[sub] == 2) {
      res.push(sub)
    }
  }

  return res
}
