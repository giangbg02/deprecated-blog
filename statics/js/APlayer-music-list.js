const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    volume: 0.7,
    lrcType: 3,
    mutex: true,
    order: 'random',
    listFolded: false,
    theme: '#e9e9e9',
    audio: [
        {
            name: 'Time Machine',
            artist: 'Waterflame',
            url: 'https://music.163.com/song/media/outer/url?id=436355180',
            cover: 'http://p2.music.126.net/IwQgnyjP8ybALQPb-afh_w==/18722483998490986.jpg',
            lrc: 'statics/music/null.lrc',
            theme: '#d49148'
        }, {
            name: 'Ignition',
            artist: 'DDRKirby(ISQ)',
            url: 'https://music.163.com/song/media/outer/url?id=431259493',
            cover: 'http://p2.music.126.net/IPnqMCk8YaN9inwYV2bdgQ==/18774161044446693.jpg',
            lrc: 'statics/music/null.lrc',
            theme: '#1c75a1'
        }, {
            name: 'Bleeder',
            artist: 'Sebastian Komor',
            url: 'https://music.163.com/song/media/outer/url?id=408140175',
            cover: 'http://p1.music.126.net/WCXRxbEz1QHrdRTckKFc0w==/1402976840840031.jpg',
            lrc: 'statics/music/null.lrc',
            theme: '#698b2c'
        }, {
            name: 'Up In My Jam (All Of A Sudden)',
            artist: 'Kubbi',
            url: 'https://music.163.com/song/media/outer/url?id=26316672',
            cover: 'http://p1.music.126.net/Mth2rovpXP1pmJR8qeOtpw==/2517881627662597.jpg',
            lrc: 'statics/music/null.lrc',
            theme: '#19182d'
        }, {
            name: 'GBL♂男神殿',
            artist: '咖啡师qwq',
            url: 'statics/music/咖啡師qwq - GBL ♂ 男神殿.mp3',
            cover: 'statics/music/咖啡師qwq - GBL ♂ 男神殿.jpg',
            lrc: 'statics/music/咖啡師qwq - GBL ♂ 男神殿.lrc',
            theme: '#2d2d2d'
        }
    ]
});

// 获取歌词json： http://music.163.com/api/song/media?id=歌曲id
// 获取歌曲： https://music.163.com/song/media/outer/url?id=歌曲id


