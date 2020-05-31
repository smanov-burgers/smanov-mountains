import skillsList from "./skills-list.vue";
import "../../default.pcss";

export default {
  title: "Skills list",
};

export const defaultView = () => ({
  components: { skillsList },
  template: `
        <skills-list>
            
        </skills-list>
    `,
});
