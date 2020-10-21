# class Mob:
#     def __init__(self, name, health=10):
#         self.name = name
#         self.health = health

#     def get_hit(self, power):
#         self.health -= power
#         print(
#             f"I, {self.name} was hit for {power} points. {self.health} pts remaining")


# hero = Mob("Sir Barks-alot", 30)
# hero.get_hit(6)


class Vehicle:
    def __init__(self, category, top_speed, acceleration, position=0, speed=0, wheels=4):
        self.category = category
        self.speed = speed
        self.top_speed = top_speed
        self.position = position
        self.acceleration = acceleration
        self.wheels = wheels

    def move(self):
        self.position += self.speed
        # print(f"{self.speed}")
        print(f"{self.category} is moving. New position is {self.position}")

    def accelerate(self):
        potential = self.speed + self.acceleration
        if self.top_speed >= potential:
            self.speed += self.acceleration
            print(self.speed)
        else:
            self.speed = self.top_speed
            print(self.speed)


i = 0
motorcycle = Vehicle("Ducati", 12, 3)
while i <= 20:
    motorcycle.accelerate()
    motorcycle.move()
    i += 1
# motorcycle.accelerate()
# motorcycle.move()
# motorcycle.accelerate()
# motorcycle.move()
# motorcycle.accelerate()
# motorcycle.move()
# motorcycle.accelerate()
# motorcycle.move()
