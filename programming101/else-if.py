# age = int(input("How old are you?\n"))
# if age == 21:
#     print("you are old enough. Enjoy your drink!")
# elif age > 21:
#     print("Enjoy your drinks, you seasoned vet!")
# elif age < 21:
#     print("you are not allowed any booze!")


# name = input("What is your name?\n")
# if len(name) > 3:
#     if len(name) < 10:
#         if len(name) == 4:
#             print("Perfect Length")
#         else:
#             print("It's an ok length")

#         print(f"Welcome {name}")
#     else:
#         print("That's way too long . . . partner")
# else:
#     print(("%s is too few characters") % length)

pet_name = input("What is your pet's name?\n")
num = len(pet_name)
if pet_name == "Shadow":
    print("El Gato Diablo!")
elif pet_name == "Daisy":
    print("Good Dog!")
elif num < 3:
    print("Name length is too short")
elif num > 3:
    print(f"AWWW sweet {pet_name}")
else:
    print("Be more creative with your pet names.")

# i = 0
# while i < 10:
#     print(i)
#     i = i + 1

# i = 20
# while i <= 30:
#     print(i)
#     i += 1  # increment syntax
#     # deincrement (i -= 1) counts down
