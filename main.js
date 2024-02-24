const imageContainer = document.querySelector('.image-gallery');

// Assuming your image data is in a separate array or object
const images = [
  { image: "images1.jpg", caption: "Doctor 1" },
  { image: "images2.jpg", caption: "Doctor 2" },
  // ... add remaining image data
];

images.forEach((image, index) => {
  const imageElement = document.createElement('div');
  imageElement.classList.add('image-container');

  const imageTag = document.createElement('img');
  imageTag.src = image.image;
  imageElement.appendChild(imageTag);

  const caption = document.createElement('p');
  caption.classList.add('image-caption');
  caption.textContent = image.caption;
  imageElement.appendChild(caption);

  imageContainer.appendChild(imageElement);
});
