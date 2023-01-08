class MyHashMap {
  private map: Record<string, any>
  constructor() {
    this.map = {}
  }

  put(key: number, value: number): void {
    this.map[key] = value
  }

  get(key: number): number {
    const res = this.map[key]
    return res == null ? -1 : res
  }

  remove(key: number): void {
    delete this.map[key]
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
