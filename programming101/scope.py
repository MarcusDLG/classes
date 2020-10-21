# Create a program that has a global varaible 'name' that is assigned a string value.
# Define a function that has an parameter called 'message' and will print out the name coma and then the message supplied in the argument when the function is called.
# call that function 3 times with 3 different messages.

global name
global message


def statement(a, b):
    name = a
    message = b
    print(name + message)


statement("marcus", "hi")
