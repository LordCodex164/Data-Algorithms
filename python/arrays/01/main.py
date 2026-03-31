arr = [10, 20, 30, 40, 50]

print("first element", arr[0])
print("last element", arr[len(arr) - 1])

arr[2] = 35
print("update array", arr)

arr.append(60)

print("after append", arr)

#inserting element at a particular postion

arr.insert(4, 60)

print("after inserting", arr)

arr.remove(10)
print("after removing", arr)

removed = arr.pop()
print("removed element", removed) # 60
print("after pop", arr) 

print(10 in arr) # false
print(60 in arr) #true

arr.reverse()
print("after reversed", arr)

arr.sort()
print("after sorting", arr)

copy = arr[:]
print("copied", copy)

arr = [2, 5, 7, 9]

doubled = []
for item in arr:
    item = item * 2
    doubled.append(item)

print("doubled_array", doubled)