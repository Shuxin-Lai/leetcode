function findRepeatedDnaSequences(s: string): string[] {
  const res: string[] = []
  const map: Record<string, number> = {}

  for (let i = 0; i + 10 <= s.length; i++) {
    const sub = s.substring(i, i + 10)
    if (map[sub] == 1) {
      res.push(sub)
    }

    map[sub] = (map[sub] || 0) + 1
  }

  return res
}
