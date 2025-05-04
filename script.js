function displayImages(imageArray, sectionId) {
    const imageContainer = document.getElementById(sectionId).querySelector('.image-container');
    imageArray.forEach(imageName => {
        const imgElement = document.createElement('img');
        imgElement.src = `img/${imageName}`; // Путь к изображению
        imgElement.alt = imageName;
        imageContainer.appendChild(imgElement);
    });
}


const galaxiesImages = ['Galaktika.jpg',];


const planetsImages = ['Zemli.jpg',];


displayImages(galaxiesImages, 'galaxies-section');
displayImages(planetsImages, 'planets-section');