export const getStickers = async (item , limit = 20) => {
    const url = `https://api.giphy.com/v1/stickers/search?q=${encodeURI(item)}&limit=${limit}&api_key=8X1w7f0isEfRm3MhMTDyIGzpX56e9LcR`;
    const response = await fetch(url)
    const {data} = await response.json()
    
    const stickers = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return stickers
}
