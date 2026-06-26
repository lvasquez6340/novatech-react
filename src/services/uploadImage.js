const IMGBB_API_KEY = "1a8ae96aeedf764e283fd0d584a6dacf";
const ENDPOINT = "https://api.imgbb.com/1/upload";

export const uploadImage = async (file) => {
  const formData = new FormData();

  formData.append("image", file);

  const response = await fetch(`${ENDPOINT}?key=${IMGBB_API_KEY}`, {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error("Error al subir la imagen");
  }

  return data.data.url;
};