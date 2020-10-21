# def my_func():
#     # Not particularly useful
#     print('I am function. Hear me roar!')


# def add_numbers():
#     number_1 = 10
#     number_2 = 20
#     number_3 = number_1 + number_2
#     print(number_3)

# my_func()

# add_numbers()

# def my_name():
#     name = "Marcus"
#     for x in range(3):
#         print(f"My name is {name}")


# my_name()


# def add_two_numbers(a, b):
#     print(a+b)


# add_two_numbers(1, 4)
# add_two_numbers(2, 8)


# def multiply(a, b):
#     try:
#         print(int(a*b))
#     except ValueError:
#         print("That is not a valid set of numbers")
#     except TypeError:
#         print("That is not a valid set of numbers")


# multiply(5, 6)


# def add_numbers(a, b):
#     return a+b


# result = add_numbers("a", " b")
# print(result)


# print("a" + "b")

def repeat_stuff():
    x = 10

    def update_x():
        return x + x

    while x < 100:
        x = update_x()
        print(x)


repeat_stuff()
