import { Account, Client, Databases, Storage } from "appwrite";

export const appwriteConfig = {
  endpoint: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  apiKey: import.meta.env.VITE_APPWRITE_API_KEY,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  tripCollectionId: import.meta.env.VITE_APPWRITE_TRIP_COLLECTION_ID,
};

const client = new Client();
client.setEndpoint(appwriteConfig.endpoint);
client.setProject(appwriteConfig.projectId);

console.log(
  "checking values",
  appwriteConfig.endpoint,
  appwriteConfig.projectId
);

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

export { client, account, database, storage };
