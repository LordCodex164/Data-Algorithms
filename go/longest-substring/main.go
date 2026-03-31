package main

import "fmt"

func lengthOfLongestSubstring(char string) int {
	start, maxLen := 0, 0

	hashMap := make(map[rune]int) 

	for end, cha := range(char) {
		//check if the character index exists in the map
		if index, found := hashMap[cha]; found && index >= start {
			start = index + 1
		}

		currentLen := end - start + 1

		if currentLen > maxLen {
			maxLen = currentLen
		}

		hashMap[cha] = end
	}
	return maxLen
}

func kLengthOflongestSubstring(s string, integer int) {
	hashMap := make(map[rune]int)
	start, maxLen := 0, 0
	
}

func main() {
	fmt.Println(lengthOfLongestSubstring("tcyeyy"))
}