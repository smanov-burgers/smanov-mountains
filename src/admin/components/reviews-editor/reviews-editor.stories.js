import reviewsEditor from "./reviews-editor.vue"
import "../../default.pcss"

export default {
    title: "Reviews editor"
}

export const defaultView = () => ({
    components: {reviewsEditor},
    template: `
        <reviews-editor>
            
        </reviews-editor>
    `
});