package main

import (
	"fmt"
	//"math"
)

//learn about tree tranversals

type Node struct {
	Left  *Node
	Right *Node
	Val   int
}

func newNode(val int) *Node {
	return &Node{Val: val}
}

//search
//kth smallest
//insert
//delete
//lca
//validate bst
//closest value in bst
//range sum of bst


//impolement search in binary search tree

func search(target int, root *Node) *Node {
	if root == nil {
		return nil
	}

	if root.Val == target {
		fmt.Println("Got it", root)
		return root
	}

	if target < root.Val {
		return search(target, root.Left)
	}
	return search(target, root.Right)
}

func insert(target int, root *Node) *Node {
	if root == nil {
		return newNode(target)
	}
	if target < root.Val {
		root.Left = insert(target, root.Left)
	}
	if target > root.Val {
		root.Right = insert(target, root.Right)
	}
	return root
}


//we run an in-order where we stop at k
func kthSmallest(root *Node, k int) int {
	count := 0
	result := 0

	var inOrder func(root *Node)

	inOrder = func(root *Node) {
		if root == nil || result == k {
			return
		} 

		//start with the left side
		inOrder(root.Left)
		count++
		if count == k {
			result = root.Val
			return
		}
		inOrder(root.Right)
	}

	inOrder(root)
	return result
}

func Lca(p, q int, root *Node) *Node {
	if root == nil {
		return nil
	}
	if p > root.Val && q > root.Val {
		return Lca(p, q, root.Right)
	}
	if p < root.Val && q < root.Val {
		return Lca(p, q, root.Left)
	}
	//where there diverge, we return the root
	return root
}


func deleteNode(root *Node, target int) *Node {
	if root == nil {
		return nil
	}

	if target < root.Val {
		root.Left = deleteNode(root.Left, target)
	} else if target > root.Val {
		root.Right = deleteNode(root.Right, target)
	} else {
		if root.Left == nil && root.Right == nil {
			return nil
		}
		if root.Left == nil {
			return root.Right
		}
		if root.Right == nil {
			return root.Left
		}

		successor := findMin(root.Right)

		root.Val = successor.Val

		root.Right = deleteNode(root.Right, successor.Val)
	}

	return root
}

func findMin(node *Node) *Node {
	for node.Left != nil {
		node = node.Left
	}
	return node
}


func isValidBST(root *Node, min, max float64) bool {

	if root == nil {
		return true
	}

	if float64(root.Val) <= min || float64(root.Val) >= max {
		return false
	}

	// 
	return isValidBST(root.Left, min, float64(root.Val)) && isValidBST(root.Right, float64(root.Val), max)
}

//approaching bt problems 

// -> is this dfs or bfs
// -> what do i need from left or right
// -> define base case, return value


//remaining problems to look at
//it is important thing to solve bt problems with bfs or dfs
// -> maximum depth: this is the longest path from the root to one of its leaf(solve with dfs or bfs)
// -> minimum depth
// -> invert binary tree(swap left/right recursively)
// -> same tree(compare two trees)
// -> subtree of another tree

func maximumDepth(node *Node) int {
	//applying post order tranversal
	if node == nil {
		return 0
	}
	leftDepth := maximumDepth(node.Left)
	rightDepth := maximumDepth(node.Right)

	return  1 + max(leftDepth, rightDepth)
}

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}

func minimumDepth(root *Node) int {
	if root == nil {
		return 0
	}
	if root.Left == nil {
		return 1 + minimumDepth(root.Right)
	}

	if root.Right == nil {
		return 1 + minimumDepth(root.Right)
	}

	left := minimumDepth(root.Left)
	right := minimumDepth(root.Right)

	if left < right {
		return 1 + left
	}
	return 1 + right
}

func countNode(root *Node) int {
	count := 1
	if root == nil {
		return 0
	}
	
	return count + countNode(root.Left) + countNode(root.Right)
}

func addNodes(root *Node) int {
	if root == nil {
		return 0
	}
	return root.Val + addNodes(root.Left) + addNodes(root.Right)
}

func invertTree(root *Node) *Node {
	if root == nil {
		return nil
	}

	root.Left = invertTree(root.Left)
	root.Right = invertTree(root.Right)

	root.Left = root.Right

	root.Right = root.Left

	return root
}

func isMirror(left, right *Node) bool {
	if left == nil && right == nil {
		return true
	}
	if left == nil || right == nil {
		return false
	}
	return left.Val == right.Val && isMirror(left.Left, right.Right) && isMirror(left.Right, right.Left)
}

func mirrorTree(root *Node) bool {

	if root == nil {
		return true
	}

	left := root.Left
	right := root.Right

	return isMirror(left, right)
}

func main () {
	//       5
	//     /  \
	//    3    3
	//   / \  / \
	//  2  4  4  2
	root := newNode(5)

	root.Left = newNode(3)

	root.Right = newNode(4)

	root.Left.Left = newNode(2)

	root.Left.Right = newNode(4)

	root.Right.Left = newNode(4)

	root.Right.Right = newNode(2)

	// search(3, root)

	// insert(7, root)

	// result := kthSmallest(root, 2)

	// fmt.Println("result", result)

	// isValid := isValidBST(root, math.Inf(-1), math.Inf(+1))

	// fmt.Println("valid", isValid)

	// depth := maximumDepth(root)

	// fmt.Println("depth", depth)

	// c := countNode(root)

	// fmt.Println("c", c)

	// d := addNodes(root)

	// fmt.Println("c", d)

	t := invertTree(root)

	fmt.Println("t", t.Left)

	// m := mirrorTree(root)

	// fmt.Println("m", m)

	// Lca(3, 4, root)
}