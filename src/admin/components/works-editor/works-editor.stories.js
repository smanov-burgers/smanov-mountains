import worksEditor from "./works-editor.vue"
import "../../default.pcss"

export default {
    title: "Works editor"
}

export const defaultView = () => ({
    components: {worksEditor},
    template: `
        <works-editor>
            
        </works-editor>
    `
});