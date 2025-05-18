import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://5e34cd8b9a7c6b8b81bb2b24bdcc8311@o4509321328394240.ingest.de.sentry.io/4509334699966544",
  
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
