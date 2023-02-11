// Music variable to control music system
const music = new Audio('audio/Melody/Melody.mp3');
// music.play();


// Array for Playing Song Poster

const songs = [
    // Object of 1 Music
    {
        id: 0,
        songName: `Hasbi Rabbi<br> 
        <div class="subtitle">Danish and Dawar</div>`,
        poster: "audio/HasbiRabbi/thumbnail.jpg",
        source: "audio/HasbiRabbi/music.mp3"
    },
    {
        id: 1,
        songName: `Abhi Mujh Mein Kahin<br> 
        <div class="subtitle">Ajay Atul</div>`,
        poster: "audio/AbhiMujhMeinKahin/thumbnail.jpg",
        source: "audio/AbhiMujhMeinKahin/music.mp3"
    },
    {
        id: 2,
        songName: `Tera Ban Jaunga<br> 
        <div class="subtitle">Tulsi, Akhil</div>`,
        poster: "audio/TeraBanJaunga/thumbnail.jpg",
        source: "audio/TeraBanJaunga/music.mp3"
    },
    {
        id: 3,
        songName: `Jhoome Jo Pathaan<br> 
        <div class="subtitle">Arijit Singh, Sukriti Kakar, Vishal and Sheykhar</div>`,
        poster: "audio/JhoomeJoPathaan/thumbnail.jpg",
        source: "audio/JhoomeJoPathaan/music.mp3"
    },
    {
        id: 4,
        songName: `Dheere Dheere<br> 
        <div class="subtitle">Yo Yo Honey Singh</div>`,
        poster: "audio/DheereDheere/thumbnail.jpg",
        source: "audio/DheereDheere/music.mp3"
    },
    {
        id: 5,
        songName: `Duniya<br> 
        <div class="subtitle">Akhil, Dhvani B</div>`,
        poster: "audio/Duniya/thumbnail.jpg",
        source: "audio/Duniya/music.mp3"
    },
    {
        id: 6,
        songName: `Jabse Mera Dil<br> 
        <div class="subtitle">Armaan Malik, Palak Muchhal</div>`,
        poster: "audio/JabseMeraDil/thumbnail.jpg",
        source: "audio/JabseMeraDil/music.mp3"
    },
    {
        id: 7,
        songName: `Jeene Laga Hoon<br> 
        <div class="subtitle">Atif Aslam, Shreya Ghoshal</div>`,
        poster: "audio/JeeneLagaHoon/thumbnail.jpg",
        source: "audio/JeeneLagaHoon/music.mp3"
    },
    {
        id: 8,
        songName: `Kaise Hua<br> 
        <div class="subtitle">Vishal Mishra</div>`,
        poster: "audio/KaiseHua/thumbnail.jpg",
        source: "audio/KaiseHua/music.mp3"
    },
    {
        id: 9,
        songName: `Kesariya<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "audio/Kesariya/thumbnail.jpg",
        source: "audio/Kesariya/music.mp3"
    },
    {
        id: 10,
        songName: `Khairiyat<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "audio/Khairiyat/thumbnail.jpg",
        source: "audio/Khairiyat/music.mp3"
    },
    {
        id: 11,
        songName: `Lut Gaye<br> 
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "audio/LutGaye/thumbnail.jpg",
        source: "audio/LutGaye/music.mp3"
    },
    {
        id: 12,
        songName: `Rim Jhim<br> 
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "audio/RimJhim/thumbnail.jpg",
        source: "audio/RimJhim/music.mp3"
    },
    {
        id: 13,
        songName: `Sun Raha Hai Na<br> 
        <div class="subtitle">Ankit Tiwari</div>`,
        poster: "audio/SunRahaHaiNa/thumbnail.jpg",
        source: "audio/SunRahaHaiNa/music.mp3"
    },
    {
        id: 14,
        songName: `Tere Sang Yara<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "audio/TereSangYara/thumbnail.jpg",
        source: "audio/TereSangYara/music.mp3"
    },
    {
        id: 15,
        songName: `Tip Tip<br> 
        <div class="subtitle">Udit Narayan, Alka Yagnik</div>`,
        poster: "audio/TipTip/thumbnail.jpg",
        source: "audio/TipTip/music.mp3"
    },
    {
        id: 16,
        songName: `Tum Hi Aana<br> 
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "audio/TumHiAana/thumbnail.jpg",
        source: "audio/TumHiAana/music.mp3"
    },
    {
        id: 17,
        songName: `Ve Mahi<br> 
        <div class="subtitle">Arijit Singh, Asees Kaur</div>`,
        poster: "audio/VeMahi/thumbnail.jpg",
        source: "audio/VeMahi/music.mp3"
    },
    {
        id: 18,
        songName: `12 Ladke<br> 
        <div class="subtitle">Neha K, Tony K</div>`,
        poster: "audio/12Ladke/thumbnail.jpg",
        source: "audio/12Ladke/music.mp3"
    },
    {
        id: 19,
        songName: `Aa To Sahi<br> 
        <div class="subtitle">Meet Bros, Neha K, Roach K</div>`,
        poster: "audio/AaToSahi/thumbnail.jpg",
        source: "audio/AaToSahi/music.mp3"
    },
    {
        id: 20,
        songName: `Achha Sila Diya<br> 
        <div class="subtitle">B Praak</div>`,
        poster: "audio/AchhaSilaDiya/thumbnail.jpg",
        source: "audio/AchhaSilaDiya/music.mp3"
    },
    {
        id: 21,
        songName: `Baby Girl<br> 
        <div class="subtitle">Guru Randhawa, Dhvani Bhanushali</div>`,
        poster: "audio/BabyGirl/thumbnail.jpg",
        source: "audio/BabyGirl/music.mp3"
    },
    {
        id: 22,
        songName: `Badri Ki Dulhania<br> 
        <div class="subtitle">Neha, Monali, Ikka</div>`,
        poster: "audio/BadriKiDulhania/thumbnail.jpg",
        source: "audio/BadriKiDulhania/music.mp3"
    },
    {
        id: 23,
        songName: `Butta Bomma<br> 
        <div class="subtitle">Armaan Malik</div>`,
        poster: "audio/ButtaBomma/thumbnail.jpg",
        source: "audio/ButtaBomma/music.mp3"
    },
    {
        id: 24,
        songName: `Chocolate<br> 
        <div class="subtitle">Tony Kakkar</div>`,
        poster: "audio/Chocolate/thumbnail.jpg",
        source: "audio/Chocolate/music.mp3"
    },
    {
        id: 25,
        songName: `Jabra Fan<br> 
        <div class="subtitle">Nakash Aziz</div>`,
        poster: "audio/JabraFan/thumbnail.jpg",
        source: "audio/JabraFan/music.mp3"
    },
    {
        id: 26,
        songName: `Kala Chashma<br> 
        <div class="subtitle">Amar Arshi, Badshah & Neha Kakkar </div>`,
        poster: "audio/KalaChashma/thumbnail.jpg",
        source: "audio/KalaChashma/music.mp3"
    },
    {
        id: 27,
        songName: `Kar Gayi Chull<br> 
        <div class="subtitle">Badshah, Fazilpuria, Sukriti Kakar, Neha Kakkar</div>`,
        poster: "audio/KarGayiChull/thumbnail.jpg",
        source: "audio/KarGayiChull/music.mp3"
    },
    {
        id: 28,
        songName: `Main Khiladi<br> 
        <div class="subtitle">Udit Narayan, Abhijeet Bhattacharya</div>`,
        poster: "audio/MainKhiladi/thumbnail.jpg",
        source: "audio/MainKhiladi/music.mp3"
    },
    {
        id: 29,
        songName: `Maan Meri Jaan<br> 
        <div class="subtitle">King</div>`,
        poster: "audio/MaanMeriJaan/thumbnail.jpg",
        source: "audio/MaanMeriJaan/music.mp3"
    },
    {
        id: 30,
        songName: `Number Likh<br> 
        <div class="subtitle">Tony Kakkar</div>`,
        poster: "audio/NumberLikh/thumbnail.jpg",
        source: "audio/NumberLikh/music.mp3"
    },
    {
        id: 31,
        songName: `Naacho Naacho<br> 
        <div class="subtitle">Vishal Mishra, Rahul Sipligunj</div>`,
        poster: "audio/NaachoNaacho/thumbnail.jpg",
        source: "audio/NaachoNaacho/music.mp3"
    },
    {
        id: 32,
        songName: `Ramuloo Ramulaa<br> 
        <div class="subtitle">Anurag Kulkarni, Mangli</div>`,
        poster: "audio/RamuLoo/thumbnail.jpg",
        source: "audio/RamuLoo/music.mp3"
    },
    {
        id: 33,
        songName: `Vaaste<br> 
        <div class="subtitle">Dhwani Bhanushali</div>`,
        poster: "audio/Vaaste/thumbnail.jpg",
        source: "audio/Vaaste/music.mp3"
    },
    {
        id: 34,
        songName: `Mehendi Wale Haath<br> 
        <div class="subtitle">Guru Randhawa</div>`,
        poster: "audio/MehendiWaleHaath/thumbnail.jpg",
        source: "audio/MehendiWaleHaath/music.mp3"
    },
    {
        id: 35,
        songName: `Mast Nazron Se<br> 
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "audio/MastNazronSe/thumbnail.jpg",
        source: "audio/MastNazronSe/music.mp3"
    }
]

// Array of Song Item Class
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    // To fetch the Poster from the above object
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

// Master Play Button
let masterPlay = document.getElementById('masterPlay');
// Wave
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})


const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgba(247,173,29,0)';
    })
}
const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle');
        el.classList.remove('bi-pause-circle');
    })
}
// Targetting the id index for playing music class playListPlay and id 0...35
let index = 0;
// index++;
// console.log(index);
// Music Thumbnail and Title of Bottom Side
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
// Download Music
let title = document.getElementById('title');
// Array of music using class playListPlay
Array.from(document.getElementsByClassName('playListPlay')).forEach((e, i) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        // Change the music source on click
        music.src = songs[i].source;
        music.play();        
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        // Download Music
        download_music.href = songs[i].source;
        download_music.setAttribute('download',songs[i].songName);
        // Getting the details from the song array
        poster_master_play.src = songs[i].poster;
        title.innerHTML = songs[i].songName;

        // Change background of the selected song from the left side
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index].style.background="rgba(247,173,29,.3)";
        // Another way to target the clicked song's poster and title to show
        // let songTitles = songs.filter((els)=>{
        //     return els.id == index;
        // })
        // songTitles.forEach((elss)=>{
        //     let { songName, poster } = elss;
        //     title.innerHTML = songName;
        //     poster_master_play.src = poster;
        // })

        // To change the play/pause button of left side
        
        makeAllplays();
        el.target.classList.remove('bi-play-circle');
        el.target.classList.add('bi-pause-circle');


    })
})


// Seek bar and Music Time
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

// Setting the time
music.addEventListener('timeupdate', ()=>{

    let music_ct = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_ct);

    // Converting to minute of Duration
    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);
    // console.log(sec1);

    // To add 0 in second of Duration
    if (sec1<10){
        sec1 = `0${sec1}`;
    }
    // To show duration time 
    

    currentEnd.innerText = `${min1}:${sec1}`;

    
    // Current Time
    let min2 = Math.floor(music_ct/60);
    let sec2 = Math.floor(music_ct%60);
    // To add 0 in second of Duration
    if (sec2<10){
        sec2 = `0${sec2}`;
    }
    // To show current time 
    currentStart.innerText = `${min2}:${sec2}`;

    // Seek bar
    let progressBar = parseInt((music_ct/music_dur)*100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    // Dot of Seekbar
    dot.style.left = `${seekbar}%`;

});


// To change the seekbar on click
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

// To change the volume icon
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol_icon.addEventListener('click', ()=>{
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-up-fill');

        music.volume = 0;


})
vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value > 30){
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value > 65){
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    // To change the volume w.r.t 100
    music.volume = vol_a/100;
});


// To skip back to play previous music
let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click', (s)=>{
    index -= 1;
    if(index == -1){  
        index=Array.from(document.getElementsByClassName('songItem')).length-1;
    }
    music.src = songs[index].source;
    music.play();        
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    // Getting the details from the song array
    poster_master_play.src = songs[index].poster;
    title.innerHTML = songs[index].songName;

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background="rgba(247,173,29,.3)";
    
    makeAllplays();
    s.target.classList.remove('bi-play-circle');
    s.target.classList.add('bi-pause-circle');
})
next.addEventListener('click', (s)=>{
    index ++;
    if(index == Array.from(document.getElementsByClassName('songItem')).length){
        music.play();  
        index=0;
    }
    music.src = songs[index].source;
    music.play();        
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    // Getting the details from the song array
    poster_master_play.src = songs[index].poster;
    title.innerHTML = songs[index].songName;

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background="rgba(247,173,29,.3)";
    
    makeAllplays();
    s.target.classList.remove('bi-play-circle');
    s.target.classList.add('bi-pause-circle');
})


// Left and Right icon of Popular Songs
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})


// Left and Right icon of Popular Artists
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})
pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})



// After song finished then play the next song by default
// music.addEventListener('ended', ()=>{
//     index ++;
//     if(index == Array.from(document.getElementsByClassName('songItem')).length){
//         music.play();  
//         index=0;
//     }
//     music.src = songs[index].source;
//     music.play();        
//     wave.classList.add('active1');
//     masterPlay.classList.remove('bi-play-fill');
//     masterPlay.classList.add('bi-pause-fill');
//     // Getting the details from the song array
//     poster_master_play.src = songs[index].poster;
//     title.innerHTML = songs[index].songName;

//     makeAllBackground();
//     Array.from(document.getElementsByClassName('songItem'))[index].style.background="rgba(247,173,29,.3)";
    
//     makeAllplays();
//     s.target.classList.remove('bi-play-circle');
//     s.target.classList.add('bi-pause-circle');
// })

// Function to play next song
const next_music = () => {
    index ++;
    if(index == Array.from(document.getElementsByClassName('songItem')).length){
        music.play();  
        index=0;
    }
    music.src = songs[index].source;
    music.play();        
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    // Getting the details from the song array
    poster_master_play.src = songs[index].poster;
    title.innerHTML = songs[index].songName;

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background="rgba(247,173,29,.3)";
    
    makeAllplays();
    s.target.classList.remove('bi-play-circle');
    s.target.classList.add('bi-pause-circle');
}

// Function to repeat the song
const repeat_music = () => {
    index;
    music.src = songs[index].source;
    music.play();        
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    // Getting the details from the song array
    poster_master_play.src = songs[index].poster;
    title.innerHTML = songs[index].songName;

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background="rgba(247,173,29,.3)";
    
    makeAllplays();
    s.target.classList.remove('bi-play-circle');
    s.target.classList.add('bi-pause-circle');
}

// Function to play random song
const random_music = () => {
    index = Math.floor((Math.random() * songs.length) +1);
    if(index == Array.from(document.getElementsByClassName('songItem')).length){
        music.play();  
        index=0;
    }
    music.src = songs[index].source;
    music.play();        
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    // Getting the details from the song array
    poster_master_play.src = songs[index].poster;
    title.innerHTML = songs[index].songName;

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background="rgba(247,173,29,.3)";
    
    makeAllplays();
    s.target.classList.remove('bi-play-circle');
    s.target.classList.add('bi-pause-circle');
}

// Shuffling, random selection, repeatation
let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
})

// Shuffling, random selection, repeatation

music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;

    switch (b) {
        case "next":
            next_music();
            break;
    
        case "repeat":
            repeat_music();
            break;

        case "random":
            random_music();
            break;
    }
})