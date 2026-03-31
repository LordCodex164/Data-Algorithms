package main

import "fmt"

type Node struct {
	Val   int
	Left  *Node
	Right *Node
}

func newNode(val int) *Node {
	return &Node{Val: val}
}

func inOrder(n *Node) {
	// left -> root -> right
	// 4, 2, 5, 1, 3, 6
	if n == nil {
		return
	}
	inOrder(n.Left)
	fmt.Println(n.Val, "")
	fmt.Println(">>")
	inOrder(n.Right)
}

func postOrder(n *Node) {
	// left -> right -> root
	// 4, 5, 2, 1, 3, 6
	if n == nil {
		return
	}
	postOrder(n.Left)
	postOrder(n.Right)
	fmt.Println(n.Val, "")
}

func preOrder(n *Node) {
	// root -> left -> right
	// 4, 5, 2, 1, 3, 6
	if n == nil {
		return
	}

	fmt.Println(n.Val, "")
	preOrder(n.Left)
	preOrder(n.Right)

}

//BST search template
func search(root *Node, target int) *Node {

	if root == nil {
		return nil
	}

	if root.Val == target {
		fmt.Println("root", root)
		return root
	}

	if target < root.Val {
		fmt.Println("err2")
		return search(root.Left, target)
	}
	return search(root.Right, target)
}



//learn about depth full search(dfs)

func dfs(node *Node) {
	if node == nil {
		return
	}
	//process node
	dfs(node.Left)
	dfs(node.Right)	
}

func main() {
	//       1
	//      / \
	//     2   3
	//    / \   \
	//   4   5   6
	root := newNode(1)

	root.Left = newNode(2)

	root.Right = newNode(3)

	root.Left.Left = newNode(4)

	root.Left.Right = newNode(5)

	root.Right.Right = newNode(6)

	//fmt.Printf("%+v\n", root)
	
	search(root, 6)
}
