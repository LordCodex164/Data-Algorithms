name = 'Alice'

print(name)

print(name[0]) #A
print(name[-1]) #E

print("3", name[1:4]) #lic
print("4", name[:4]) #alic
print("5", name[2:]) #ice

words = ["python", "is", "great"]

sentence = " ".join(words)

print("sentence", sentence)

text = " Hello, world! "
print(text.strip())
print(text.upper())
print(text.lower())
print("split", name.split())

print(text.replace("Hello", "Good Morning"))
 
print("world" in text)

print(text.find("hello"))
print(text.find("world"))

data = "item1,item2,item3"
fields = data.join(",")
print("fields", fields)

sentence = "hello world from python"

capitalize = " ".join([char.capitalize() for char in sentence.split()])
print("c", capitalize)

string_char = "Item"

format = " ".join([char.lower() for char in string_char.split()])
print("f", format)

arr_f = ["hello", "there"]

format_ = " ".join(item.capitalize() for item in arr_f)
print("f_", format_) #"hello there"

format_ = format_[::-1]

print("f_", format_)

age = 23

print(f"my name is {name} and i am {age} years old")

text = " this is going well"

no_space = text.replace(" ", "")

second_word = text.strip().split()[1]

print("second word", second_word)

