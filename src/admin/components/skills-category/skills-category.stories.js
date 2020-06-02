import skillsCategory from "./skills-category.vue";
import "../../default.pcss";

export default {
  title: "Skills category",
};

export const defaultView = () => ({
  components: { skillsCategory },
  template: `
        <skills-category>
            
        </skills-category>
    `,
});
