#sliding window and two pointer

arr = [1, 2, 3, 4, 5]

target = 8

left = 0

right = len(arr) - 1

while left < right:
    total = arr[left] + arr[right]

    if total == target:
        print(f"{arr[left]} + {arr[right]} = {target}")
        break;
    elif total < target:
        left +=1
    else:
        right -=1
    
word = "sayyab"


def palindrome(word):
    left = 0
    right = len(word) - 1

    is_palindrome = False

    while left < right:
        if word[left] != word[right]:
            is_palindrome = False
            break
        elif word[left] == word[right]:
            is_palindrome = True
        left +=1
        right -=1
    
    return is_palindrome
        

print("is_palindrome", palindrome(word))

numbers = [5, 6, 1, 7]


def highest_num(nums):
    left = 0;
    right = len(nums) - 1
    
    max = 0;

    while left < right:
        if nums[left] < nums[right]:
            if max < nums[right]:
                max = nums[right]
        elif nums[left] > nums[right]:
            if max < nums[left]:
                max = nums[right]
        left +=1 
        right -=1
    return max


print("highest number", highest_num(numbers))

nums = [2, 1, 5, 1, 3, 2]

# find the maximum sum of 3 consecutive nums

k = 3

def find_max_sum(k, arr):
    current_window = sum(nums[:k])

    max_sum = current_window

    for i in range(k, len(arr)):
        current_window = current_window + arr[i] - arr[i -k]
        max_sum = max(max_sum, current_window)
    
    return max_sum

print("max_sum", find_max_sum(k, nums))