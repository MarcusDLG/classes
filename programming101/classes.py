# class Person:
#     def __init__(self, name, age=22):
#         print("You created a new person")
#         self.name = name
#         self.age = age


# clint = Person("Clint", 38)
# anna = Person("Anna", 37)

# print(f"Wow {clint.name}, you are {clint.age} years old")


class Vehicle:
    def __init__(self, make, model, category, color, wheels=4):
        print("You created a new vehicle")
        self.make = make
        self.model = model
        self.category = category
        self.wheels = wheels
        self.color = color


# truck = Vehicle("Ford", "F-150", "Truck", "black", 4)
# truck2 = Vehicle("Ford", "F-250", "Truck", "black", 4)
# truck3 = Vehicle("Ford", "F-350", "Truck", "black", 4)
# truck4 = Vehicle("Ford", "F-450", "Truck", "black", 4)
motorcycle = Vehicle("Ducati", "Scrambler", "Motorcycle", "black", 2)
print(f"{motorcycle.wheels}")
