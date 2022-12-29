function lengthOfLongestSubstring(s: string): number {
  let left = 0
  const map = {}
  let res = 0

  for (let right = 0; right < s.length; right++) {
    const char = s[right]
    map[char] = (map[char] || 0) + 1

    while (map[char] >= 2) {
      map[s[left++]]--
    }

    res = Math.max(res, right - left + 1)
  }

  return res
}
