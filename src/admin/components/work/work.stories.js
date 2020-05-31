import worksList from "./work.vue";
import "../../default.pcss";

export default {
  title: "Work",
};

export const defaultView = () => ({
  components: { work },
  template: `
        <work>
            
        </work>
    `,
});
