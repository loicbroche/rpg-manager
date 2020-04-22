import { gameStorage } from 'database/InitializeDatabase';

export const STORAGE_IMAGE_FOLDER = "";
const PROFILS_FOLDER = "profils"

export const uploadProfilImage = (imageFile, fileName, stateChanged, success) => {
    const storageRef = gameStorage.ref(`${PROFILS_FOLDER}/${fileName}`);
    const uploadTask = storageRef.put(imageFile);
    uploadTask.on(  'state_changed',
                    (snapshot) => {
                      const percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                      stateChanged(percentage);
                    },
                    (error) => { console.warn("Uploading error", error) },
                    success );
}

export const deleteProfilImage = (characterId, callback) => {
    const storageRef = gameStorage.ref(`${PROFILS_FOLDER}/${characterId}.png`);
    storageRef.delete().then(callback).catch(function(error) {
        console.warn(error);
    })
}

export const getProfilImage = (characterId, callback) => {
    const storageRef = gameStorage.ref(`${PROFILS_FOLDER}/${characterId}.png`);
    storageRef.getDownloadURL().then(callback).catch((error) => {
        if (error.code !== "storage/object-not-found") {
            console.warn(error);
        }
    })
}