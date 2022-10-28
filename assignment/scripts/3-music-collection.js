console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title, artist, yearPublished) {
    let record = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(record);
    return record;
}

function showCollection(currentCollection) {
    console.log('Number of albums in current collection:', currentCollection.length);
    for (album of currentCollection) {
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
}

function findByArtist(artist) {
    let results = [];
    for (album of collection) {
        if (album.artist === artist) {
            results.push(album);
        }
    }
    return results;
}

console.log(addToCollection('Midnights', 'Taylor Swift', 2022));
console.log(addToCollection('Ambitions', 'ONE OK ROCK', 2017));
console.log(addToCollection('Be the Cowboy', 'Mitski', 2018));
console.log(addToCollection('American Beauty/American Psycho', 'Fall Out Boy', 2015));
console.log(addToCollection('Infinity On High', 'Fall Out Boy', 2007));
console.log(addToCollection('Justice', 'Justin Bieber', 2021));
console.log(collection);

showCollection(collection);
console.log('Matching artist(s):',findByArtist('Fall Out Boy'));
console.log('Artist not found:',findByArtist('Nicki Minaj'));