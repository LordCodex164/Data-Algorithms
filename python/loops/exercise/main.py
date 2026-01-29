# Problem 5A — Reverse Words in a String

# Problem:
# Given a string with words separated by spaces, reverse the characters of each word, but keep the word order.

# Example:
# "hello world" → "olleh dlrow"

# Constraints:

# No slicing

# Use pointers

words = "hello world"
def reverse_words(letters):
    reversed = letters[::-1]
    result = []
    word = []
    left = 0
    
    return reversed

print(reverse_words(words), "<<p>>")

# PATTERN 6 — Remove Duplicates / Seen Set
# Problem 6A — First Non-Repeating Character

# Problem:
# Given a string, return the first character that does not repeat.

# Example:
# "leetcode" → "l"

words = "leetcode"

# Problem 7C — Find All Duplicates

# Problem:
# Return all elements that appear more th
# [1,2,3,1,3,6] → [1,3]

array = [1, 1, 1, 2, 2]


def find_all_duplicates (array):
    count = {}
    dup = []
    for arr in array:
        if arr in count:
            count[arr] += 1
            if count[arr] == 2:
                dup.append(arr)
        else:
            count[arr] = 1
    return dup

print(">>dup", find_all_duplicates(array))

def find_duplicates (array):
    count = {}
    dup = []

    for arr in array:
        if arr in count:
            count[arr] +=1
            if count[arr] == 2:
                dup.append(arr)
        else:
            count[arr] = 1
        
    return count

print(find_duplicates(array), "duplicates")

# two sum
# nums -> [2,7,11,15],
# thought process
# implement hash table to store numbers
# 

class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        num_map = {}

        for i, num in enumerate(nums):
            complement = target - num 
            if complement in num_map:
                return [num_map[num], i]
            else:
                num_map[num] = i
    

    # def two_pairs(self, nums, target):
    #     # Output: 3
    #     # # Pairs: (1,5), (1,5), (7,-1)


