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

func isSame(n1, n2 *Node) bool {
	if n1 == nil && n2 == nil {
		return true
	}
	return n1.Val == n2.Val && isSame(n1.Left, n2.Left) && isSame(n1.Right, n2.Right)
}

func sameTree(p, q *Node) bool {
	if p == nil && q == nil {
		return true
	}
	if p == nil || q == nil {
		return false
	}
	
	return isSame(p, q)
}

func invertTree(root *Node) *Node {
	if root == nil {
		return nil
	}

	root.Left = invertTree(root.Left)

	fmt.Println("r1", root.Left)

	root.Right = invertTree(root.Right)

	fmt.Println("r2", root.Right)

	root.Left, root.Right = root.Right, root.Left

	return root
	
}

func levelOrder(root *Node) [][]int {
	result := [][]int{}

	queue := []*Node{root}

	for len(queue) > 0 {
		size := len(queue)
		level := []int{}
		for i:=0; i< size; i++ {
			node := queue[0]
			queue = queue[1:]
			level = append(level, node.Val)
			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}
		result = append(result, level)
	}
	return result
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
} 

func find(root *Node, maxD int) int {
	if root == nil {
		return 0
	}
	left := find(root.Left, maxD)
	right := find(root.Right, maxD)

	localMax := left + right
	maxD = max(maxD, localMax)
	
}

func diameterOfBinaryTree(root *Node) int {
	if root == nil {
		return 0
	}
	maxD := 0
	find(root, maxD)
	return maxD
}

func main() {
	//       5
	//     /  \
	//    8    3

	//       5
	//     /  \
	//    8    3

	root := newNode(5)

	root.Left = newNode(8)

	root.Right = newNode(3)

	// root1 := newNode(5)

	// root1.Left = newNode(8)

	// root1.Right = newNode(2)

	// s := sameTree(root, root1)

	// fmt.Println("s", s)

	i := invertTree(root)

	fmt.Println("i", i.Right)
}
