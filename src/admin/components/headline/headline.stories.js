import headline from "./headline.vue";
import "../../default.pcss";

export default {
  title: "Headline",
};

export const defaultView = () => ({
  components: { headline },
  template: `
        <headline>
            
        </headline>
    `,
});
