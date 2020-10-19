# my_list_of_ints = [1, 2, 3]
# print(my_list_of_ints)

# name = "Marcus"
# age = 31
# married = True


# my_new_list = [name, age, married]

# print(my_new_list)
# print(my_new_list[1])

around_me = ["computer", "hand sanitizer", "phone", "watch"]
# print(around_me[1])

index = 0
# for item in around_me:
#     print(f"{index}. {item} ")
#     index += 1

# while index < len(around_me):
#     print(f"{index + 1}. {around_me[index]}")
#     index += 1


# user_input = int(input("What item would you like to hold?\n"))
# print(
#     f"You chose the {around_me[user_input - 1]}, you must really love the {around_me[user_input - 1]}")
# __________________________________________________________________________________________________________________________________________________


favorite_actors = ["Timothy Olyphant", "Gary Oldman", "Josh Duhamel"]
# while index < len(favorite_actors):
#     print(f"{index + 1}. {favorite_actors[index]}")
#     index += 1

# for actor in favorite_actors:
#     print(f"{index + 1}. {actor}")
#     index += 1

# for idx, actor in enumerate(favorite_actors):
#     print(idx, actor)

# sum_list = 0
# i = 0
# number_list = [50, 50, 600]
# for num in number_list:
#     sum_list += number_list[i]
#     i += 1
# print(sum_list)

# print(id("a"))
# x = "a"
# print(id(x))

# __________________________________________________________________________________________________________________________________________________

people = [
    ["Marcus", "De La Garza", 31],
    ["Jamie", "De La Garza", 32]
]


# print(people[1][0])
# del people[1][2]
# print(people)

# people = [
#     ["Clint", "Fleetwood", 38],
#     ["Anna", "Fleetwood", 37],
#     ["Peter", "Hollens", 34],
#     ["Lindsey", "Sterling", 35]
# ]

# for person in people:
#     # print("First, Last, Age")
#     for attribute in person:
#         print(attribute)

# coordinates = [[10, 10], [20, 10], [10, 20]]

# for cord in coordinates:
#     idx = 0
#     print("Position:")
#     for position in cord:
#         p = "X"
#         if idx == 1:
#             p = "Y"
#         print(f"{p}-{position}")
#         idx += 1

# groceries = [['Corn', 'Potatoes', 'Tomatoes'],
#              ['milk', 'eggs', 'cheese', 'yogurt'],
#              ['frozen pizza', 'popsicle']]
# grocery_categories = [
#     "vegetables", "dairy", "frozen"]

# i = 0
# j = 0
# for category in grocery_categories:
#     print("%i. %s" % (i+1, category))
#     for lists in groceries:
#         if j <= len(groceries):
#             print("   %i. %s" % (i+1, food))
#             j += 1
#     i += 1

shopping_names = ["Veggies", "Cold Items", "Junk Food"]
shopping_lists = [
    ['Corn', 'Potatoes', 'Tomatoes'],
    ['milk', 'eggs', 'cheese', 'yogurt'],
    ['frozen pizza', 'popsicle']]
i = 0
for name in shopping_names:
    j = 0
    print("%i. %s" % (i+1, name))
    for food in shopping_lists[i]:
        print("   %i. %s" % (j+1, food))
        j += 1
    i += 1
