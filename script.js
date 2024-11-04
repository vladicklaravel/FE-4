function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColors(element) {
    const backgroundColor = getRandomColor();
    const textColor = getRandomColor();
    element.style.backgroundColor = backgroundColor;
    element.style.color = textColor;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("tenthElement").addEventListener("click", function() {
    changeColors(this);
});

document.querySelector("#nextElement").addEventListener("click", function() {
    changeColors(this);
});
});

function addImage() {
    const container = document.getElementById('imageContainer');
    if (!document.getElementById('image')) {
        const newImage = document.createElement('img');
        newImage.id = 'image';
        newImage.src = 'https://kashtan.media/wp-content/uploads/2022/07/%D0%A0%D1%83%D1%81%D0%B0%D0%BD%D1%96%D0%B2%D0%BA%D0%B0-%D0%90%D0%BA%D1%82%D0%B8%D0%B2%D0%B8%D1%81%D1%82%D0%B8-1024x682.jpg';
        newImage.alt = 'Київ';
        newImage.width = 900;
        container.appendChild(newImage);
    }
}


function increaseImage() {
    const img = document.getElementById('image');
    if (img) {
        img.width += 100; 
    }
}

function decreaseImage() {
    const img = document.getElementById('image');
    if (img) {
        if (img.width > 100) { 
            img.width -= 100;
        }
    }
}

function removeImage() {
    const img = document.getElementById('image');
    if (img) {
        img.remove();
    }
}
