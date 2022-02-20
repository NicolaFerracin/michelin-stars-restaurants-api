class Restaurant:
    def __init__(self, name, rating, guide, img, link, location, type, lat,
                 long):
        self.name = name
        self.rating = rating
        self.guide = guide
        self.img = img
        self.link = link
        self.location = location
        self.type = type
        self.lat = lat
        self.long = long

    def __str__(self):
        stars = "*" * self.rating
        return f"Restaurant: {self.name} in {self.location} from {self.guide} \nRating: {stars} \nType: {self.type} \nLocation: {self.lat}, {self.long}"