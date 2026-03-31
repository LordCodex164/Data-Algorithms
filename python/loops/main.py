# 1. Count Down

# Problem:
# Given an integer n, print all numbers from n down to 0.

n = 3


# while n >= 0:
#     print(n, "n")
#     n -= 1

# 2. Sum of First N Numbers
acc = 0
while n > 0:
    acc += n
    n -= 1
print(acc, ">>acc")

#3. Count Even Numbers
array = [1, 2, 3, 4, 6]

for arr in array:
    print(arr, "arr")

numbers = [10, 20, 30, 40]

for i in  range(len(numbers)):
    print(i, numbers[i])

#Looping with list comprehensions (for transformation)

numbers_ = [1, 2, 3, 4]

squared = [n * n for n in numbers_]

print(squared, ">>s")

#LEVEL 2 — Lists & Strings

#Looping in reverse with reverse()

numbers = [1, 2, 3, 4]

for num in reversed(numbers):
    print(num, "reversed numbers2.1")

reversed_squared = [n * n for n in reversed(numbers)]

print(">>r", reversed_squared)

#Looping in reverse without reverse()

def reverse_list(arr):

    print
    left = 0;
    right = len(arr) - 1

    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left +=1;
        right -=1
    return arr

print(reverse_list(numbers), "reversed_numbers2.2")

# Pattern: two pointers
# In-place: yes
# Time: O(n)

#6. Remove Duplicates

# Problem:
# Given a list, return a new list with duplicates removed while preserving order.

# Example:
dup = [1, 2, 2, 3, 1]  

def remove_duplicates(arr):
    seen = set()

    result = []

    for num in arr:
        if num not in seen:
            seen.add(num)
            result.append(num)
    return result

print(remove_duplicates(dup), "dup2.3")

# Concepts: membership check, list building

# 7. Count Character Frequency

letter = "hello"

def get_character_count(word):
    count = {}

    for s in word:
        if s in count:
            count[s] += 1
        else:
            count[s] = 1
        
    return count

print(get_character_count(letter), "char_count2.4")

def get_character_index_count(word):
    print("w", word)
    count = {}

    for i in range(len(word)):
        if i in count:
            count[i] += 1
        else:
            count[i] = 1
    
    return count

print(get_character_index_count(letter), "char_index_count2.5")

# Problem:
# Given a string, return a dictionary showing how many times each character appears.

# Example:
# "hello" → {'h':1,'e':1,'l':2,'o':1}

# Concepts: dictionaries, loops

# 8. Check Palindrome

# Problem:
# Return True if a string is a palindrome.

# Example:
# "madam" → True
# "hello" → False

# Constraint:

# No slicing

# LEVEL 3 — Logical Thinking
# 9. Second Largest Element

# Problem:
# Return the second largest number in a list.

# Constraints:

# No sorting

# Assume at least 2 unique numbers

# Concepts: tracking multiple variables

# 10. Move Zeros to End

# Problem:
# Move all zeros in a list to the end while keeping order of other elements.

# Example:
# [0,1,0,3,12] → [1,3,12,0,0]

# 11. Find Missing Number

# Problem:
# Given a list containing numbers from 1 to n with one missing, find the missing number.

# Example:
# [1,2,4,5] → 3

# Concepts: math + loop

