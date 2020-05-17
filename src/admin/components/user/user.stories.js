import user from "./user.vue"
import "../../default.pcss"

export default {
    title: "User"
}

export const defaultView = () => ({
    components: {user},
    template: `
        <user 
            userpic = "images/content/user.jpg"
            username = "Владимир Астаханов"
        />
    `
});