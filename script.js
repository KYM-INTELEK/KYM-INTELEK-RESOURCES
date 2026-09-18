/* ========================================
   FURNITURE GALLERY
======================================== */


const galleries = {

    kitchen: {

        title: "Kitchen Cabinet",

        images: [

            "images/kitchen/kitchen1.jpg",

            "images/kitchen/kitchen2.jpg",

            "images/kitchen/kitchen3.jpg",

            "images/kitchen/kitchen4.jpg",

            "images/kitchen/kitchen5.jpg"

        ]

    },


    wardrobe: {

        title: "Wardrobe",

        images: [

            "images/wardrobe/wardrobe1.jpg",

            "images/wardrobe/wardrobe2.jpg",

            "images/wardrobe/wardrobe3.jpg",

            "images/wardrobe/wardrobe4.jpg",

            "images/wardrobe/wardrobe5.jpg"

        ]

    },


    tv: {

        title: "TV Cabinet",

        images: [

            "images/tv/tv1.jpg",

            "images/tv/tv2.jpg",

            "images/tv/tv3.jpg",

            "images/tv/tv4.jpg",

            "images/tv/tv5.jpg"

        ]

    },


    shoe: {

        title: "Shoe Cabinet",

        images: [

            "images/shoe/shoe1.jpg",

            "images/shoe/shoe2.jpg",

            "images/shoe/shoe3.jpg",

            "images/shoe/shoe4.jpg",

            "images/shoe/shoe5.jpg"

        ]

    }

};


/* CURRENT CATEGORY */

let currentGallery = [];

let currentIndex = 0;


/* GET ELEMENTS */

const modal =
    document.getElementById("galleryModal");

const galleryImage =
    document.getElementById("galleryImage");

const galleryTitle =
    document.getElementById("galleryTitle");

const galleryCounter =
    document.getElementById("galleryCounter");

const galleryDots =
    document.getElementById("galleryDots");

const galleryThumbnails =
    document.getElementById("galleryThumbnails");


/* ========================================
   OPEN GALLERY
======================================== */

function openGallery(category) {

    const gallery =
        galleries[category];

    if (!gallery) {
        return;
    }


    currentGallery =
        gallery.images;

    currentIndex = 0;


    galleryTitle.textContent =
        gallery.title;


    createDots();

    createThumbnails();

    showImage();


    modal.classList.add("active");


    document.body.style.overflow =
        "hidden";

}


/* ========================================
   CLOSE GALLERY
======================================== */

function closeGallery() {

    modal.classList.remove("active");


    document.body.style.overflow =
        "auto";

}


/* ========================================
   SHOW IMAGE
======================================== */

function showImage() {

    galleryImage.src =
        currentGallery[currentIndex];


    galleryCounter.textContent =
        `${currentIndex + 1} / ${currentGallery.length}`;


    updateDots();

    updateThumbnails();

}


/* ========================================
   NEXT IMAGE
======================================== */

function nextImage() {

    currentIndex++;

    if (
        currentIndex >=
        currentGallery.length
    ) {

        currentIndex = 0;

    }


    showImage();

}


/* ========================================
   PREVIOUS IMAGE
======================================== */

function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex =
            currentGallery.length - 1;

    }


    showImage();

}


/* ========================================
   CREATE DOTS
======================================== */

function createDots() {

    galleryDots.innerHTML = "";


    currentGallery.forEach(
        (image, index) => {

            const dot =
                document.createElement("button");


            dot.classList.add(
                "gallery-dot"
            );


            dot.addEventListener(
                "click",
                () => {

                    currentIndex =
                        index;

                    showImage();

                }
            );


            galleryDots.appendChild(dot);

        }
    );

}


/* ========================================
   UPDATE DOTS
======================================== */

function updateDots() {

    const dots =
        document.querySelectorAll(
            ".gallery-dot"
        );


    dots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentIndex
            );

        }
    );

}


/* ========================================
   CREATE THUMBNAILS
======================================== */

function createThumbnails() {

    galleryThumbnails.innerHTML =
        "";


    currentGallery.forEach(
        (image, index) => {

            const thumbnail =
                document.createElement("img");


            thumbnail.src =
                image;


            thumbnail.classList.add(
                "gallery-thumbnail"
            );


            thumbnail.alt =
                "Furniture thumbnail";


            thumbnail.addEventListener(
                "click",
                () => {

                    currentIndex =
                        index;

                    showImage();

                }
            );


            galleryThumbnails.appendChild(
                thumbnail
            );

        }
    );

}


/* ========================================
   UPDATE THUMBNAILS
======================================== */

function updateThumbnails() {

    const thumbnails =
        document.querySelectorAll(
            ".gallery-thumbnail"
        );


    thumbnails.forEach(
        (thumbnail, index) => {

            thumbnail.classList.toggle(
                "active",
                index === currentIndex
            );

        }
    );

}


/* ========================================
   CLOSE WHEN CLICK OUTSIDE
======================================== */

modal.addEventListener(
    "click",
    function(event) {

        if (
            event.target === modal
        ) {

            closeGallery();

        }

    }
);


/* ========================================
   KEYBOARD CONTROL
======================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            !modal.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (
            event.key === "ArrowRight"
        ) {

            nextImage();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousImage();

        }


        if (
            event.key === "Escape"
        ) {

            closeGallery();

        }

    }
);


/* ========================================
   SWIPE SUPPORT
======================================== */

let touchStartX = 0;

let touchEndX = 0;


galleryImage.addEventListener(
    "touchstart",
    function(event) {

        touchStartX =
            event.changedTouches[0].screenX;

    }
);


galleryImage.addEventListener(
    "touchend",
    function(event) {

        touchEndX =
            event.changedTouches[0].screenX;


        handleSwipe();

    }
);


function handleSwipe() {

    const swipeDistance =
        touchEndX - touchStartX;


    if (
        Math.abs(swipeDistance) < 50
    ) {

        return;

    }


    if (swipeDistance < 0) {

        nextImage();

    } else {

        previousImage();

    }

}