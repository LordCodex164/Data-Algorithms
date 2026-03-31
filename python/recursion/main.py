from re import I


def incrementN(n):
    if n == 0:
        return 0
    return n + incrementN(n-1)

#print("total", incrementN(5))

# given an array arr = [1, 2, 5, 7]

def findGreaterNum(arr):
    max = 0

    if len(arr) < 0:
        return max
    for item in arr:
        if item > max:
            max = item
    return max

#print("greater", findGreaterNum([1, 2, 9, 7]))

# Given a positive integer n, apply the following rules until n becomes 1:
#If n is even, replace it with n / 2
#If n is odd, replace it with 3n + 1
#(1) Return the number of steps it takes to reach 1
#(2) what number below 1000 takes the most steps in order to reach 1?
#*/
    
def fibonaucci(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fibonaucci(n - 1) + fibonaucci(n - 2)

def reverse_string(s):
    print(len(s))
    if len(s) == 0:
        return s
    return reverse_string(s[1:]) + s[0]
    
reverse_string("world")

def count_characters_index(s):
    if len(s) == 0:
        return 0
    return count_characters_index(s[1:]) + s[0]

print("index_count", count_characters_index("hello"))