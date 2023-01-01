/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
export {}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const res: Array<TreeNode | null> = []
  const map: Record<string, any> = {}

  function find(root: TreeNode | null): string {
    if (!root) return '@'

    const left = find(root.left)
    const right = find(root.right)
    const key = `(${left}${root.val}${right})`
    if (map[key] == 1) {
      res.push(root)
    }

    map[key] = map[key] ? map[key] + 1 : 1
    return key
  }

  find(root)

  return res
}
