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
            name: 'Sweet Dreams',
            artist: 'Byproduct',
            url: 'https://music.163.com/song/media/outer/url?id=2537070',
            cover: 'http://p2.music.126.net/QcxeYrnQkPl4Db7grP3z3Q==/904898069704028.jpg',
            lrc: 'statics/music/Sweet Dreams.lrc',
            theme: '#000000'
        }, {
            name: 'Bleeder',
            artist: 'Sebastian Komor',
            url: 'https://music.163.com/song/media/outer/url?id=408140175',
            cover: 'http://p1.music.126.net/WCXRxbEz1QHrdRTckKFc0w==/1402976840840031.jpg',
            lrc: 'statics/music/null.lrc',
            theme: '#698b2c'
        }, {
            name: 'Funky Stars (Byproduct remix)',
            artist: 'Byproduct',
            url: 'https://music.163.com/song/media/outer/url?id=401386026',
            cover: 'http://p2.music.126.net/mGoCYYbELhOYlXnXqkhGng==/3384296791681736.jpg',
            lrc: 'statics/music/null.lrc',
            theme: '#ddd5b0'
        }, {
            name: 'Ignition',
            artist: 'DDRKirby(ISQ)',
            url: 'https://music.163.com/song/media/outer/url?id=431259493',
            cover: 'http://p2.music.126.net/IPnqMCk8YaN9inwYV2bdgQ==/18774161044446693.jpg',
            lrc: 'statics/music/null.lrc',
            theme: '#1c75a1'
        }, {
            name: 'ACE',
            artist: 'mihoyo',
            url: 'https://music.163.com/song/media/outer/url?id=1315333110',
            cover: 'http://p2.music.126.net/5ADSkBzhwaTSX1XM1LdrWg==/109951163586223038.jpg',
            lrc: 'statics/music/null.lrc',
            theme: '#9a8fb7'
        }, {
            name: 'Up In My Jam (All Of A Sudden)',
            artist: 'Kubbi',
            url: 'https://music.163.com/song/media/outer/url?id=26316672',
            cover: 'http://p1.music.126.net/Mth2rovpXP1pmJR8qeOtpw==/2517881627662597.jpg',
            lrc: 'statics/music/null.lrc',
            theme: '#19182d'
        }, {
            name: 'Empire (Instrumental)',
            artist: 'Voicians',
            url: 'https://music.163.com/song/media/outer/url?id=409830458',
            cover: 'http://p1.music.126.net/AnPPNQ3dZKXZFnmmkg6Vlg==/1399678308350951.jpg',
            lrc: 'statics/music/Bloody Stream.lrc',
            theme: '#9df8f3'
        }, {
            name: 'Bloody Stream',
            artist: 'Coda(小田和奏)',
            url: 'https://music.163.com/song/media/outer/url?id=26239032',
            cover: 'http://p2.music.126.net/hfOhoxdxhwGGCIeIhwWFHw==/109951163682864420.jpg',
            lrc: 'statics/music/Bloody Stream.lrc',
            theme: '#eb3a97'
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


