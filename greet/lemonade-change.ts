function lemonadeChange(bills: number[]): boolean {
  let five = 0
  let ten = 0

  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i]
    if (bill == 5) {
      five++
      continue
    }

    if (bill == 10) {
      if (!five) return false

      five--
      ten++
      continue
    }

    let t = 15
    if (ten) {
      ten--
      t = 5
    }

    five = five - Math.floor(t / 5)
    if (five < 0) {
      return false
    }
  }

  return true
}
