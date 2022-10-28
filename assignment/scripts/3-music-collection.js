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
console.log(addToCollection('Midnights', 'Taylor Swift', 2022));
console.log(addToCollection('Ambitions', 'ONE OK ROCK', 2017));
console.log(addToCollection('Be the Cowboy', 'Mitski', 2018));
console.log(addToCollection('American Beauty/American Psycho', 'Fall Out Boy', 2015));
console.log(addToCollection('Epik High is Here Pt.2', 'Epik High', 2022));
console.log(addToCollection('Justice', 'Justin Bieber', 2021));
console.log(collection);