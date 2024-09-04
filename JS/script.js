// Navbar and move to top button
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

const siteLogo = document.querySelector('.logo a');

// Get all the menu items
const navLinks = document.querySelectorAll('.menu-list li');

const playSongBtn = document.querySelector('.play-song-btn');

// Add click event listener to each menu item
navLinks.forEach(item => {
  item.addEventListener('click', function () {
    // Remove the 'active' class from all menu items
    navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));

    // Add the 'active' class to the clicked menu item
    this.classList.add('active-menu-list');
  });
});

playSongBtn.onclick = () => {
  removeActiveClass();
}

siteLogo.onclick = () => {
  removeActiveClass();
};

function removeActiveClass() {
  navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));
}

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

  // When the user scrolls down 75px from the top of the document, show the button
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    moveTopBtn.style.display = "block";
  } else {
    moveTopBtn.style.display = "none";
  }
}

// PLAY MUSIC 
const playSong = document.getElementById("song");
var icon = document.getElementById("icon");

icon.addEventListener("click", playMusic);

function playMusic() {
  if (playSong.paused) {
    playSong.play();
    icon.src = "./assets/Image/Disk.png";
  } else {
    playSong.pause();
    icon.src = "./assets/Image/Disk.png";
  }
}

// Move to Top button
var moveTopBtn = document.getElementById("moveTopBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  removeActiveClass();
}

// PreLoader
var loader = document.getElementById("loading");
function preLoader() {
  loader.style.display = "none";
}

// CHOOSE A SONG
const buttons = document.querySelectorAll(".btn");

const photo = document.getElementById("banner");
const song = document.getElementById("song");
const songName = document.getElementById("songName");
const songBy = document.getElementById("songBy");
const aboutSong = document.getElementById("aboutSong");
const title = document.getElementById("title");
const download = document.getElementById("download");


buttons[9].addEventListener("click", () => {
  icon.src = "./assets/Image/UTUH.jpeg";
  photo.src = "./assets/Image/UTUH.jpeg";
  songName.innerText = "UTUH";
  songBy.innerText = "XcentOD";
  title.innerText = "UTUH";
  aboutSong.innerText = " Eccentric, fast-rising and talented Nigerian music act, Xcent OD hails from Utuh in Nnewi South Local Government Area of Anambra State. He attended Christ The King College, Onitsha and later proceeded to bag a B.Sc in Music from Nnamdi Azikiwe University, Awka, also in Anambra State.  This promising young talent, born first in a family of three, Xcent OD derives his inspirations from diverse means. Creativity isn’t limited, according to him. Nothing makes more sense than singing, travelling, and sightseeing.";
});

buttons[0].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/mylane.jpg";
  songName.innerText = "My Lane";
  songBy.innerText = "XcentOD x 4Liferr";
  title.innerText = "My Lane";
  download.href = "https://push.fm/fl/xcentod-ft-4liferr-my-lane";
  aboutSong.innerText = "Eccentric, fast-rising and talented Nigerian music act, Xcent OD hails from Utuh in Nnewi South Local Government Area of Anambra State. He attended Christ The King College, Onitsha and later proceeded to bag a B.Sc in Music from Nnamdi Azikiwe University, Awka, also in Anambra State.  This promising young talent, born first in a family of three, Xcent OD derives his inspirations from diverse means. Creativity isn’t limited, according to him. Nothing makes more sense than singing, travelling, and sightseeing.";
});

buttons[1].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/pain&sacrifice.jpeg";
  songName.innerText = "Pain & Sacrifice EP";
  songBy.innerText = "XcentOD & Charger2DWorld";
  title.innerText = "Pain & Sacrifice EP";
  download.href = "./assets/Songs/I Like Me Better - Lauv.mp3";
  aboutSong.innerText = "Eccentric, fast-rising and talented Nigerian music act, Xcent OD hails from Utuh in Nnewi South Local Government Area of Anambra State. He attended Christ The King College, Onitsha and later proceeded to bag a B.Sc in Music from Nnamdi Azikiwe University, Awka, also in Anambra State.  This promising young talent, born first in a family of three, Xcent OD derives his inspirations from diverse means. Creativity isn’t limited, according to him. Nothing makes more sense than singing, travelling, and sightseeing.            ";
});

buttons[2].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/NSNG.jpg";
  songName.innerText = "Never Say Never Guy ft OdumoduBlvck";
  songBy.innerText = "XcentOD";
  title.innerText = "NSNG";
  download.href = "https://open.spotify.com/track/7nyIOG8NfXhUH9GL2pvMBr?si=5d2cde1e086e469b";
  aboutSong.innerText = "Eccentric, fast-rising and talented Nigerian music act, Xcent OD hails from Utuh in Nnewi South Local Government Area of Anambra State. He attended Christ The King College, Onitsha and later proceeded to bag a B.Sc in Music from Nnamdi Azikiwe University, Awka, also in Anambra State.  This promising young talent, born first in a family of three, Xcent OD derives his inspirations from diverse means. Creativity isn’t limited, according to him. Nothing makes more sense than singing, travelling, and sightseeing.     ";
});

buttons[3].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/yolo.jpeg";
  song.src = "https://distrokid.com/hyperfollow/xcentod/yolo";
  songName.innerText = " YOLO";
  songBy.innerText = "XcentOD";
  title.innerText = "YOLO";
  download.href = "https://open.spotify.com/track/7nyIOG8NfXhUH9GL2pvMBr?si=5d2cde1e086e469b";
  aboutSong.innerText = `Eccentric, fast-rising and talented Nigerian music act, Xcent OD hails from Utuh in Nnewi South Local Government Area of Anambra State. He attended Christ The King College, Onitsha and later proceeded to bag a B.Sc in Music from Nnamdi Azikiwe University, Awka, also in Anambra State.  This promising young talent, born first in a family of three, Xcent OD derives his inspirations from diverse means. Creativity isn’t limited, according to him. Nothing makes more sense than singing, travelling, and sightseeing.`;
});


buttons[7].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/samba.jpeg";
  songName.innerText = "Samba";
  songBy.innerText = "XcentOD Sammba";
  title.innerText = "Samba";
  download.href = "./assets/Songs/katputli.mp3";
  aboutSong.innerText = "          ";
});

buttons[8].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/you.jpg";
  song.src = "./assets/Songs/you.mp3";
  songName.innerText = "Ambulance";
  songBy.innerText = "XcentOD";
  title.innerText = "Ambulance";
  download.href = "./assets/Songs/you.mp3";
  aboutSong.innerText = "         ";
});

buttons[9].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/pal.jpg";
  songName.innerText = "Samba";
  songBy.innerText = "XcentOD";
  title.innerText = "Samba";
  download.href = "./assets/Songs/pal.mp3";
  aboutSong.innerText = "         ";
});

