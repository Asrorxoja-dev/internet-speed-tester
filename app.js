
document.querySelector('button').addEventListener('click', ()=>{
    let imageLink = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Tokyo_Sky_Tree_2012.JPG',
    downloadSize= 8185374,
    time_start, time_end,
    downloadSrc = new Image();
    time_start = new Date().getTime();
    let cacheImg = "?nn" + time_start;
    downloadSrc.src = imageLink + cacheImg;
    downloadSrc.onload= function(){
    time_end =new Date().getTime();
    let timeDuration = (time_end - time_start) / 1000,
    loadedBytes = downloadSize * 8;
    totalSpeed = ((loadedBytes / timeDuration) / 1024 / 1024).toFixed(2);
    document.querySelector('.content-button').innerHTML = totalSpeed + '<small>Mbps</small>';
}
})