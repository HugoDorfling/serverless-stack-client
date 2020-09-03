export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "serverless-stack-notes-app-file-uploads"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://i8jblrjvul.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_DezPh8BhY",
        APP_CLIENT_ID: "745gbpkf9cbvbkj83vd5ojcjv5",
        IDENTITY_POOL_ID: "us-east-2:969fc14a-2b76-4579-9314-da0811b299d6"
    }
};