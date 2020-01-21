const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    volume: 0.7,
    lrcType: 2,
    mutex: true,
    order: 'random',
    listFolded: false,
    theme: '#e9e9e9',
    audio: [
        {
            name: 'Bleeder',
            artist: 'Sebastian Komor',
            url: 'https://music.163.com/song/media/outer/url?id=408140175',
            cover: 'http://p1.music.126.net/WCXRxbEz1QHrdRTckKFc0w==/1402976840840031.jpg',
            lrc: '[00:00.00]纯音乐，敬请享受~',
            theme: '#698b2c'
        }, {
            name: 'Up In My Jam (All Of A Sudden)',
            artist: 'Kubbi',
            url: 'https://music.163.com/song/media/outer/url?id=26316672',
            cover: 'http://p1.music.126.net/Mth2rovpXP1pmJR8qeOtpw==/2517881627662597.jpg',
            lrc: '[00:00.00]纯音乐，敬请享受~',
            theme: '#19182d'
        }, {
            name: 'GBL♂男神殿',
            artist: '咖啡师qwq',
            url: 'statics/music/咖啡師qwq - GBL ♂ 男神殿.mp3',
            cover: 'http://s4.music.126.net/style/web2/img/default/default_album.jpg',
            lrc: '[00:00.00]纯音乐，敬请享受~',
            theme: '#2d2d2d'
        }
    ]
});