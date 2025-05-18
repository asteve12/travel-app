import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {
  sentryReactRouter,
  type SentryReactRouterBuildOptions,
} from "@sentry/react-router";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "test-sgz",
  project: "javascript-react",
  // An auth token is required for uploading source maps.
  authToken:
    "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",
  // ...
};

export default defineConfig((config) => {
  return {
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
      reactRouter(),
      sentryReactRouter(sentryConfig, config),
    ],
    ssr: {
      noExternal: [/@syncfusion/],
    },
  };
});
