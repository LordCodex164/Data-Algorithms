def time_complete(n):
    for i in range(n):
        print(i)


# def time_complete_square(n):
#     for i in range(n):
#         for j in range()


time_complete(5) #time complexity -> 0(n) the time it takes for the function to finish

def add_element(arr):
    result = []
    for item in arr:
        result.append(5 + item)
    return result


def find_number(arr, target):
    for item in arr:   
        if target > item:
            find_number(arr, item)
        if target == item:
            return True
    return False
  

print(find_number([2, 4, 6, 8], 9)) # time compleity is omega 10(1) because if target was 2, on the first iteration it returns true

def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    
    return -1

print(linear_search([2, 7, 10, 8], 10))

def sum_numbers(n):
    total = 0
    for i in range(1, n+1):
        total +=1
    return total

print("sum", sum_numbers(5))

def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= 1:
        mid = low + high // 2
        if arr[mid] == target:
            return target
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

def factorial(n):
        if n==0:
            return 1
        return n * factorial(n-1)

print("factoriaal", factorial(5))

