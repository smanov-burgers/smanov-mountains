import worksList from "./works-list.vue"
import "../../default.pcss"

export default {
    title: "Works list"
}

export const defaultView = () => ({
    components: {worksList},
    template: `
        <works-list>
            
        </works-list>
    `
});