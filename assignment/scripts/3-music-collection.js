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
console.log(collection);