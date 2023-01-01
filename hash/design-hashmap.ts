class MyHashMap {
  private store: Record<any, any>
  constructor() {
    this.store = {}
  }

  put(key: number, value: number): void {
    this.store[key] = value
  }

  get(key: number): number {
    const res = this.store[key]
    return res == null ? -1 : res
  }

  remove(key: number): void {
    delete this.store[key]
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
