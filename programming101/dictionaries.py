# movie = {
#     "name": "Star Wars",
#     "episode": 4,
#     "year": "1977",
#     "villains": ["Vader", "Tarkin"],
#     "heros": ["Luke", "Leia", "Han", "Obi-Won"]
# }
# # print from dictionary
# print(movie["name"])
# # assign to variable
# episode_num = movie["episode"]

# # accessing a value from an array in the dictionary
# print(movie["heros"][2])  # Leia

# # the key can be a variable
# search = "villains"
# print(movie[search])

# adding to the current string
# movie["name"] = movie["name"]+" - A new Hope"

# # Adding a new item
# movie["ships"] = ["Falcon", "Star Destroyer", "Death Star"]

# # Adding to an element inside of an list
# movie["heros"].append("Chewbacca")
# print(movie["heros"])

# movies = [
#     {
#         "name": "Star Wars - A new Hope",
#         "episode": 4,
#         "year": "1977"
#     },
#     {
#         "name": "Star Wars - The Empire Strikes Back",
#         "episode": 5,
#         "year": "1980"
#     },
#     {
#         "name": "Star Wars - Return of the Jedi",
#         "episode": 6,
#         "year": "1983"
#     }
# ]
# # get item from list
# print(movies[0]["name"])

# # loop through list of dictionaries
# for movie in movies:
#     print("%s was episode %s and release in %s" %
#           (movie["name"], movie["episode"], movie["year"]))

for i in range(0, 10):  # outer loop that runs 0 - 10, this determines the vertical row count
    for j in range(i):
        # inner for loop, this one controls the horizontal expansion of the *'s.
        # This first iteration triggers the inner, nested loop, which then runs to completion. Then the program returns back to the top of the outer loop, completing the second iteration and again triggering the nested loop.
        print("*", end=' ')
    print()
