x = 10

# print(">>>x", x)

# is_valid = True

# control flow

# if x > 0:
#     print("Postive")
# elif x == 0:
#     print("Zero")
# else:
#     print("Negative")

#loops

# for i in range (5):
#     print(i)

# while x > 0:
#     x -= 1
#     print(x, "x")

#functions & recursion

def add(a, b):
    return a + b

#recursion template

def dfs(n):
    if n == 0:
        return dfs(n - 1)

#array (lists and strings)

# list operations

arr = [1, 2, 3]

arr.append(4)

print("updated array", arr)

arr.sort()

print("sorted array", arr)

#slicing

arr[1:4]