import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing'

const isLocal = process.env.NODE_ENV === "development";

export function initSentry() {
    if (isLocal) {
        return;
    }

    Sentry.init({
        dsn: "https://9ccb66d9d8ac4ad3afcbefac7a42d87a@o443185.ingest.sentry.io/5416484",
        integrations: [
            new Integrations.BrowserTracing(),
          ],
          tracesSampleRate: 1.0,});
}

export function logError(error, errorInfo = null) {
    if (isLocal) {
        return;
    }

    Sentry.withScope((scope) => {
        errorInfo && scope.setExtras(errorInfo);
        Sentry.captureException(error);
    });
}

export function onError(error) {
    let errorInfo = {};
    let message = error.toString();

    // Auth errors
    if (!(error instanceof Error) && error.message) {
        errorInfo = error;
        message = error.message;
        error = new Error(message);
        // API errors
    } else if (error.config && error.config.url) {
        errorInfo.url = error.config.url;
    }
    logError(error, errorInfo);
    alert(message);
}