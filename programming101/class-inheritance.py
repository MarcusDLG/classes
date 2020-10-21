# Previous class lesson without print text
class Mob:
    def __init__(self, name, health=10, attack_power=2):
        self.name = name
        self.health = health
        self.attack_power = attack_power

    def get_hit(self, power):
        self.health = self.health - power

    def attack(self, enemy):
        enemy.get_hit(self.attack_power)


class Hero(Mob):
    # overriding __init__
    def __init__(self):
        # Can repeate for every item
        self.name = "Sir Galahand"
        self.health = 22
        self.attack_power = 3
        self.defence = 1

    # overriding get_hit
    def get_hit(self, power):
        self.health = self.health - (power-self.defence)

    ...  # yell method


hero = Hero()  # all arguments
bad_guy = Mob('Evil McEvil', 10)
print(hero.name)  # added automatically
bad_guy.attack(hero)
print(hero.health)  # health only went down by one because of defence
