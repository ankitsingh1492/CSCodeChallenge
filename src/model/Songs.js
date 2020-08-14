export function SongData (response)  {
    this.artistId = response.artistId;
    this.trackId = response.trackId;
    this.artistName = response.artistName;
    this.collectionName = response.collectionName;
    this.imageLowRes = response.artworkUrl60;
    this.imageHighRes = response.artworkUrl100;
    this.country = response.country;
    this.trackName = response.trackName;
    this.trackViewUrl = response.trackViewUrl;
}