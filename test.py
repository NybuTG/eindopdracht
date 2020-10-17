arr = ["macos", "linux", "windows"]


print("Before loop: {}".format(arr))
# OUTPUT: Before loop: ['macos', 'linux', 'windows']

for i in range(len(arr)):
    arr.insert(i + 2, arr.pop(i))

print("After loop: {}".format(arr))
# OUTPUT: After loop: ['linux', 'macos', 'windows']

