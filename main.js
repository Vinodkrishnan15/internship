const imageContainer = document.querySelector('.image-gallery');


const images = [
  { image: "images1.jpg", caption: "Dr Victor Jhon" },
  { image: "images2.jpg", caption: "Dr Avin Kumar" },
  { image: "images3.jpg", caption: "Dr Renukha menon" },
  { image: "images4.jpg", caption: "Dr Achuth Krishna" },
  { image: "images5.jpg", caption: "Dr Bilal nasser" },
  { image: "images6.jpg", caption: "Dr Sanoj Menon" },
  { image: "images7.jpg", caption: "Dr Sarang K R" },
  { image: "images8.jpg", caption: "Dr Ravi S" },
  { image: "images9.jpg", caption: "Dr Nandhana P" },
  { image: "images10.jpg", caption: "Dr Santhosh K" },
  { image: "images11.jpg", caption: "Dr Kesav Kumar" },
  { image: "images12.jpg", caption: "Dr Bhagaya devi" },
  { image: "images13.jpg", caption: "Dr Jhon Frank" },
  { image: "images14.jpg", caption: "Dr Radhika s" },
  { image: "images15.jpg", caption: "Dr Vargese kurian" },
  { image: "images16.jpg", caption: "Dr Sujatha m" },
  { image: "images17.jpg", caption: "Dr Martin jacob" },
  { image: "images18.jpg", caption: "Dr Kesav s " },
  { image: "images19.jpg", caption: "Dr Avanthika k" },
  { image: "images20.jpg", caption: "Dr Raseena t" },
  { image: "images21.jpg", caption: "Dr Aayana kumar" },
  { image: "images22.jpg", caption: "Dr shana k" },
  { image: "images23.jpg", caption: "Dr Jhon jacob" },
  { image: "images24.jpg", caption: "Dr Mammoty p" },



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
