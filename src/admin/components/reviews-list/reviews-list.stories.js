import reviewsList from "./reviews-list.vue"
import "../../default.pcss"

export default {
    title: "Reviews list"
}

export const defaultView = () => ({
    components: {reviewsList},
    template: `
        <reviews-list>
            
        </reviews-list>
    `
});