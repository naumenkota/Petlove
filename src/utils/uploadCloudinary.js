export const uploadToCloudinary = async (file) => {
  const cloudName = import.meta.env.VITE_CLOUD_NAME;
  const preset = import.meta.env.VITE_UPLOAD_PRESET;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", preset);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Upload error");
  }

  const data = await response.json();
  return data.secure_url;
};
