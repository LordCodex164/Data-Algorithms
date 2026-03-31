package main

import "fmt"

// "fmt"
// "math"

//learn about tree tranversals

type Node struct {
	Left  *Node
	Right *Node
	Val   int
}

func newNode(val int) *Node {
	return &Node{Val: val}
}

func minimumDepth(root *Node) int {
	if root == nil {
		return 0
	}

	if root.Left == nil {
		return 1 + minimumDepth(root.Right)
	}

	if root.Right == nil {
		return 1 + minimumDepth(root.Left)
	}

	left := minimumDepth(root.Left)
	right := minimumDepth(root.Right)

	if left < right {
		return 1 + left
	}

	return 1 + right

}

func Lca(root, p, q *Node) *Node {
	if root == nil || p == root || q == root {
		return root
	}

	left := Lca(root.Left, p, q)
	right := Lca(root.Right, p , q)

	if left != nil {
		return left
	}

	return right

} 

func maximumDepth(root *Node) int {
	if root == nil {
		return 0
	}

	if root.Left == nil {
		return 1 + maximumDepth(root.Right)
	}

	if root.Right == nil {
		return 1 + maximumDepth(root.Left)
	}

	left := maximumDepth(root.Left)
	right := maximumDepth(root.Right)

	if left > right {
		return 1 + left
	}

	return 1 + right

}

func invertTree(root *Node) *Node {
	if root == nil {
		return nil
	}

	root.Left = invertTree(root.Left)
	root.Right = invertTree(root.Right)

	root.Left, root.Right = root.Right, root.Left

	return root
}

func isSymmetric(left, right *Node) bool {
	if left == nil && right == nil {
		return true
	}
	if left == nil || right == nil {
		return false
	}
	return left.Val == right.Val && isSymmetric(left.Left, right.Left) && isSymmetric(left.Right, right.Right)
}

func symmetric(root *Node) bool {
	if root == nil {
		return true
	}
	return isSymmetric(root.Left, root.Right)
}

func levelOrder(root *Node) [][]int {
	if root == nil {
		return nil
	}

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
		fmt.Println("RO", result)
	}

	return result
}

func kthSmallest(root *Node, k int) int {
	count := 0
	result := 0

	var inOrder func(root *Node)

	inOrder = func(root *Node) {
		if root == nil || count == k {
			return 
		}
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

func levelRightOrder(root *Node) []int {

	queue := []*Node{root}

	level := []int{}

	for len(queue) > 0 {
		size := len(queue)

		for i:=0; i< size; i++ {
			node := queue[0]
			queue = queue[1:]

			if i == size - 1 {
				level = append(level, node.Val)
			}

			if node.Left != nil {
				queue = append(queue, node.Left)
			}

			if node.Right != nil {
				queue = append(queue, node.Right)
			}	
		}
	}
	fmt.Println("level", level)
	return level

}

func levelLeftOrder(root *Node) []int {
	queue := []*Node{root}

	level := []int{}

	for len(queue) > 0 {
		size := len(queue)

		for i:=0; i < size; i++ {
			node := queue[0]
			queue = queue[1:]
			
			if i == 0 {
				level = append(level, node.Val)
			}

			//add to the queue

			if node.Left != nil {
				queue = append(queue, node.Left)
			}

			if node.Left != nil {
				queue = append(queue, node.Right)
			}
		}
	}
	fmt.Println("level", level)
	return level
}

func dfs(grid [][]byte, r, c int) {
	q := [][2]int{}
	q = append(q, [2]int{r, c})

	offsets := [4][2]int{{1, 0}, {-1, 0}, {0, 1}, {0, 1}}

	for len(q) > 0 {
		node := q[0]
		q = q[1:]

		for _, offset := range offsets {
			x := node[0] + offset[0]
			y := node[1] + offset[1]

			if x >= 0 && x < len(grid) && y >= 0 && y < len(grid[x]) && grid[x][y] == '1' {
				q = append(q, [2]int{x, y})
				grid[x][y]= '2'
			}
		}
	}
}

func main() {
	//      5
	//     /  \
	//    8    3

	//       5
	//     /  \
	//    8    3

	root := newNode(5)

	root.Left = newNode(8)

	root.Right = newNode(3)

	levelOrder(root)

	levelLeftOrder(root)
}
