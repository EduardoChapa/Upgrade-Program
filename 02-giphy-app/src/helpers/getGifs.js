const getGifs = async (searchTerm) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=30&rating=r&api_key=nYiZDcDEf1PQ3ioPC8fANWhdYgcWWJsa&q=${encodeURI(searchTerm)}`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.original.url
        }
    });
    return gifs;
}

export default getGifs;