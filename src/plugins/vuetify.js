import { createVuetify } from "vuetify";
import * as allComponents from "vuetify/components";
import * as allDirectives from "vuetify/directives";
import "vuetify/styles";
import themes from "@/themes";

const vuetify = createVuetify({
  components: allComponents,
  directives: allDirectives,
  theme: {
    defaultTheme: "accentOnlyDarkTheme",
    themes: themes,
  },
});

export default vuetify;
