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
        return_string = f"Restaurant: {self.name} in {self.location} from {self.guide} \n"
        return_string += f"Rating: {'*' * self.rating} \n"
        return_string += f"Type: {self.type} \n"
        return_string += f"Location: {self.lat}, {self.long}"
        return return_string
