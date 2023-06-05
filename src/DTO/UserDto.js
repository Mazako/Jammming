class UserDto {
    name
    image
    id

    constructor(name, image, uri) {
        this.name = name;
        this.image = image;
        this.id = uri;
    }
}

export default UserDto