import auth from "./auth.vue";
import "../../default.pcss";

export default {
  title: "Auth",
};

export const defaultView = () => ({
  components: { auth },
  template: `
        <auth>
            
        </auth>
    `,
});
