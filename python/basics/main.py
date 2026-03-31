ages = [12, 34, 46, 57]

def find_minimum(data):
    min_val = data[0]
    for age in data:
        if age < min_val:
            min_val = age
    return min_val

print("the minimum age is", find_minimum(ages))