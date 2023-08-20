import { prefixPluginTranslations } from "@strapi/helper-plugin";
import pluginPkg from "../../package.json";
import pluginId from "./pluginId";

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    console.log({ pluginId });
    app.customFields.register({
      id: pluginId,
      name: name,
      pluginId: pluginId,
      type: "string",
      intlLabel: {
        id: "color-picker.color.label",
        defaultMessage: "Color",
      },
      intlDescription: {
        id: "color-picker.color.description",
        defaultMessage: "Select any color",
      },
      inputSize: {
        // optional
        default: 4,
        isResizable: true,
      },
      components: {
        Input: async () =>
          import(
            /* webpackChunkName: "input-component" */ "./components/ColorPickerInput/"
          ),
      },
      options: [],
    });
  },

  bootstrap(app) {},
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
