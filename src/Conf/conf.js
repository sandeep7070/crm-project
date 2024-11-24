const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteprojectId: String(import.meta.env.
    VITE_PROJECT_ID),
    appwritedatabaseID: String(import.meta.env.
        VITE_DATABASE_ID),
        appwriteCollectionId: String(import.meta.env.
            VITE_COLLECTION_ID),
            appwritebucetId: String(import.meta.env.
                VITE_BUCKET_ID),
}

export default conf