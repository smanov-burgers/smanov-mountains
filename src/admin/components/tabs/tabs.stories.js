import headline from "./tabs.vue";
import "../../default.pcss";

export default {
  title: "Tabs",
};

export const defaultView = () => ({
  components: { tabs },
  template: `
        <tabs>
            
        </tabs>
    `,
});
