function lemonadeChange(bills: number[]): boolean {
  let five = 0
  let ten = 0

  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i]
    if (bill == 5) {
      five++
    } else if (bill == 10) {
      if (!five) {
        return false
      }
      five--
      ten++
    } else {
      let t = 15

      if (ten) {
        t = 5
        ten--
      }

      five = five - Math.floor(t / 5)
      if (five < 0) {
        return false
      }
    }
  }

  return true
}
