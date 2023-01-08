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
  const map: any = {}

  find(root)

  function find(root: TreeNode | null): string {
    if (!root) {
      return '_'
    }
    const key = `(${find(root.left)}${root.val}${find(root.right)})`
    map[key] = (map[key] || 0) + 1

    if (map[key] == 2) {
      res.push(root)
    }

    return key
  }

  return res
}
