function isPalindrome(s: string) {
  let right = s.length - 1
  let left = 0

  while (left <= right) {
    if (s[left++] != s[right--]) {
      return false
    }
  }

  return true
}

function longestPalindrome(s: string): string {
  let res = ''
  for (let i = 0; i <= s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const sub = s.substring(i, j)
      if (sub.length > res.length && isPalindrome(sub)) {
        res = sub
      }
    }
  }

  return res
}

longestPalindrome('a')
