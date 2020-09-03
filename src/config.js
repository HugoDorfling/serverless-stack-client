const dev = {
    STRIPE_KEY: "pk_test_51HMaCHAPhAdztMm9IsnOKhgi2rOv0vvMFHgUNXBHe8wFEVumjrojE99hfraBARDVqM2XynsE6rAqqFUMYH2supDZ00E2ML7MRG",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-1adyalf9bkwx",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://17atqtkft8.execute-api.us-east-2.amazonaws.com/dev",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_tViR5udIF",
        APP_CLIENT_ID: "6aq39fch6mfnfir3r2uob7nbjp",
        IDENTITY_POOL_ID: "us-east-2:f677e23e-d34f-4c81-9e8b-5b8bc58de3bc"
    }
};

const prod = {
    STRIPE_KEY: "pk_test_51HMaCHAPhAdztMm9IsnOKhgi2rOv0vvMFHgUNXBHe8wFEVumjrojE99hfraBARDVqM2XynsE6rAqqFUMYH2supDZ00E2ML7MRG",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-prod-attachmentsbucket-1k4i2x6ml2ugn",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://dt1xaig8lh.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_fr7zWdKEA",
        APP_CLIENT_ID: "3dq5dhn82jdgosl6bntc9tij7",
        IDENTITY_POOL_ID: "us-east-2:66f717e5-aed6-4399-806c-30aa20eb0f27"
    }
};

// default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};