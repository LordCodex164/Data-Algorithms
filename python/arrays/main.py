import sys

#static array

static_arr = [0]*5

static_arr[0] = 4
static_arr[1] = 6
static_arr[2] = 9

print(f"length: {len(static_arr)}, array: {static_arr}")

#dynamic array
arr = []

for i in range(10):
    arr.append(i)
    print(f"Length: {len(arr)}, memory: {sys.getsizeof(arr)}")