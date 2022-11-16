function songs(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numbersOfSongs = input.shift();
    let songType = input.pop();

    for (let i = 0; i < numbersOfSongs; i++) {
        let [type, name, time] = input[i].split(' ');
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if(songType == 'all'){
        
    }




}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );