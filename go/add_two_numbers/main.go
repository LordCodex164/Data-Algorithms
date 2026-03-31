package main

type ListNode struct {
	Val   int
	Next  *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	dummy := &ListNode{}

	carry := 0

	outputLNode := dummy

	for l1 != nil || l2 != nil {
		sum := carry

		if l1 != nil {
			sum += l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			sum += l2.Val
			l2 = l2.Next
		}

		digit := sum % 10
		carry = sum / 10

		outputLNode.Next = &ListNode{Val: digit}
		outputLNode = outputLNode
	}
	return outputLNode
}
