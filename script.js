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

/* ================= PORTFOLIO PROJECTS ================= */

const projects = [

    {
        image: "images/kitchen/kitchen1.jpg",
        category: "KITCHEN CABINET",
        title: "Modern Kitchen",
        type: "Kitchen Cabinet",
        design: "Modern Custom Design",
        description:
            "A modern custom kitchen cabinet designed to provide a practical, comfortable and stylish space for everyday living."
    },

    {
        image: "images/wardrobe/wardrobe1.jpg",
        category: "WARDROBE",
        title: "Modern Wardrobe",
        type: "Custom Wardrobe",
        design: "Modern Storage Design",
        description:
            "A practical custom wardrobe designed to maximize storage space while maintaining a clean and modern appearance."
    },

    {
        image: "images/tv/tv1.jpg",
        category: "TV CABINET",
        title: "Modern TV Cabinet",
        type: "TV Cabinet",
        design: "Modern Living Room Design",
        description:
            "A stylish TV cabinet designed to complement the living room while providing practical storage."
    },

    {
        image: "images/shoes/shoes1.jpg",
        category: "SHOES CABINET",
        title: "Modern Shoes Cabinet",
        type: "Shoes Cabinet",
        design: "Space-Saving Design",
        description:
            "A practical shoes cabinet designed to keep the entrance organized while making efficient use of available space."
    }

];


let currentProject = 0;


/* OPEN PROJECT */

function openProject(index) {

    currentProject = index;

    updateProject();

    const modal =
        document.getElementById("projectModal");

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* CLOSE PROJECT */

function closeProject() {

    const modal =
        document.getElementById("projectModal");

    modal.classList.remove("active");

    document.body.style.overflow = "auto";
}


/* UPDATE PROJECT */

function updateProject() {

    const project =
        projects[currentProject];


    document.getElementById(
        "projectModalImage"
    ).src = project.image;


    document.getElementById(
        "projectCategory"
    ).textContent = project.category;


    document.getElementById(
        "projectTitle"
    ).textContent = project.title;


    document.getElementById(
        "projectDescription"
    ).textContent = project.description;


    document.getElementById(
        "projectType"
    ).textContent = project.type;


    document.getElementById(
        "projectDesign"
    ).textContent = project.design;


    document.getElementById(
        "projectCounter"
    ).textContent =
        (currentProject + 1) +
        " / " +
        projects.length;

}


/* NEXT PROJECT */

function nextProject() {

    currentProject++;

    if (currentProject >= projects.length) {

        currentProject = 0;

    }

    updateProject();

}


/* PREVIOUS PROJECT */

function previousProject() {

    currentProject--;

    if (currentProject < 0) {

        currentProject =
            projects.length - 1;

    }

    updateProject();

}


/* CLOSE WHEN CLICK OUTSIDE */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("projectModal");


        if (event.target === modal) {

            closeProject();

        }

    }
);


/* ESC KEY */

document.addEventListener(
    "keydown",
    function(event) {

        const modal =
            document.getElementById("projectModal");


        if (
            !modal.classList.contains("active")
        ) {

            return;

        }


        if (event.key === "Escape") {

            closeProject();

        }


        if (event.key === "ArrowRight") {

            nextProject();

        }


        if (event.key === "ArrowLeft") {

            previousProject();

        }

    }
);