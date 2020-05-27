import reviewsList from "./review.vue"
import "../../default.pcss"

export default {
    title: "Review"
}

export const defaultView = () => ({
    components: {review},
    template: `
        <review>
            
        </review>
    `
});