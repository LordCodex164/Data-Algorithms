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

    is_palindrome = True
    
    while left < right:
        if word[left] != word[right]: 
            is_palindrome = False
            break;
        left +=1
        right -= 1
    return is_palindrome

print("is_palindrome", palindrome(word))

numbers = [5, 6, 1, 7]

def findHighestNum(nums):
    left = 0
    right = len(nums) - 1

    max = 0

    while left < right:
        if nums[left] > nums[right]:
            if max < nums[left]:
                max = nums[left]
        elif nums[right] > nums[left]:
            if max < nums[right]:
                max = nums[right]
        left +=1
        right -=1 
        print("max", max)
        return max

print("highest number", findHighestNum(numbers))

nums = [2, 1, 5, 1, 3, 2]

# find the maximum sum of 3 consecutive nums

k = 3

window_sum = sum(nums[:3])
max_sum = window_sum

#3 to 8
for i in range(k, max_sum):
    window_sum += nums[i] - nums[i-k]
    max_sum = max(max_sum, window_sum)

print("window", window_sum)
