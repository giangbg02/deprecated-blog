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
            lrc: '/statics/music/null.lrc',
            theme: '#d49148'
        }, {
            name: 'Everybody',
            artist: 'Backstreet Boys',
            url: 'https://music.163.com/song/media/outer/url?id=16835302',
            cover: 'http://p1.music.126.net/OEkTr8qjNJhlbiZy9cRoww==/109951163063194564.jpg',
            lrc: '/statics/music/Everybody.lrc',
            theme: '#515a81'
        }, {
            name: 'It\'s Ok',
            artist: 'DJ Maxwell',
            url: 'https://music.163.com/song/media/outer/url?id=28708061',
            cover: 'http://p1.music.126.net/uIk-PChIFWqPJdnXRrjfeA==/109951163922816713.jpg',
            lrc: '/statics/music/Its Ok.lrc',
            theme: '#d8d2b3'
        }, {
            name: 'Intro: The Dawn',
            artist: 'Dreamtale',
            url: 'https://music.163.com/song/media/outer/url?id=4017240',
            cover: 'http://p2.music.126.net/N9KUUZHsDXrrLKQz5d--dw==/6639950720964639.jpg',
            lrc: '/statics/music/The Dawn.lrc',
            theme: '#312f45'
        }, {
            name: 'Bomba',
            artist: 'Jessy Matador',
            url: 'https://music.163.com/song/media/outer/url?id=423227267',
            cover: 'http://p1.music.126.net/VOOjccuwLPx8rf1lWUZQMA==/3400789473359154.jpg',
            lrc: '/statics/music/Bomba.lrc',
            theme: '#d61824'
        }, {
            name: '我爱上你就像是春天爱上樱桃树',
            artist: '别网恋',
            url: 'https://music.163.com/song/media/outer/url?id=1336528090',
            cover: 'http://p1.music.126.net/6yq7K03aVaju3w3fthO6wQ==/109951164384587024.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#48336b'
        }, {
            name: 'Striker (Extended)',
            artist: 'Waterflame',
            url: 'https://music.163.com/song/media/outer/url?id=448917844',
            cover: 'http://p1.music.126.net/LZZpQgWMrL5iNuBKSHZPSQ==/18636722092470961.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#ff82a0'
        }, {
            name: '【飛行場姫】レンドエンズ',
            artist: 'キネマ106',
            url: 'https://music.163.com/song/media/outer/url?id=31356680',
            cover: 'http://p2.music.126.net/o3Zjwjkq6oKY0V5sSIgcZA==/2944492139372542.jpg',
            lrc: '/statics/music/レンドエンズ.lrc',
            theme: '#453832'
        }, {
            name: 'Me and You',
            artist: 'Lucky Twice',
            url: 'https://music.163.com/song/media/outer/url?id=4160632',
            cover: 'http://p1.music.126.net/sv0aUBMy4X_FCeiWzI6SOQ==/19242552997927491.jpg',
            lrc: '/statics/music/Me and You.lrc',
            theme: '#130f0c'
        }, {
            name: 'ふたりのきもちのほんとのひみつ',
            artist: '愛殺寶貝',
            url: 'https://music.163.com/song/media/outer/url?id=28629028',
            cover: 'http://p1.music.126.net/Ygj0jGI0AH3xbaHHUd5Esg==/109951163597240474.jpg',
            lrc: '/statics/music/ふたりのきもちのほんとのひみつ.lrc',
            theme: '#e09abc'
        }, {
            name: '[A]ddiction',
            artist: 'EVO+',
            url: 'https://music.163.com/song/media/outer/url?id=41654827',
            cover: 'http://p2.music.126.net/MqPASWNd9f60mic6scZ_EA==/109951163597238996.jpg',
            lrc: '/statics/music/[A]ddiction.lrc',
            theme: '#bc0068'
        }, {
            name: 'Dance of The Violins',
            artist: 'F-777',
            url: 'https://music.163.com/song/media/outer/url?id=41644447',
            cover: 'http://p2.music.126.net/SDGt0yZhZFamJDfFJUBqhA==/528865144148711.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#1d3b17'
        }, {
            name: 'Dancin (Krono Remix)',
            artist: 'Aaron Smith、Luvli、Krono',
            url: 'https://music.163.com/song/media/outer/url?id=439121233',
            cover: 'http://p2.music.126.net/0VY_IeJo5ACPDhTWilamuw==/18610333812708197.jpg',
            lrc: '/statics/music/Dancin.lrc',
            theme: '#3a2a1b'
        }, {
            name: '大田後生仔',
            artist: '丫蛋蛋',
            url: 'https://music.163.com/song/media/outer/url?id=1396973729',
            cover: 'http://p1.music.126.net/zBSqcj15lxJ0vdoSAkh63Q==/109951164427560286.jpg',
            lrc: '/statics/music/大田後生仔.lrc',
            theme: '#7d8897'
        }, {
            name: '出山',
            artist: '花粥、王胜娚',
            url: 'https://music.163.com/song/media/outer/url?id=1313354324',
            cover: 'http://p2.music.126.net/xUAfdMHdXhu3BmO4g8nOYA==/109951163573311341.jpg',
            lrc: '/statics/music/出山.lrc',
            theme: '#a7a7a7'
        }, {
            name: 'Wild Wild Web',
            artist: 'John The Whistler',
            url: 'https://music.163.com/song/media/outer/url?id=1600454',
            cover: 'http://p1.music.126.net/FQ1-Q_WcAVqrFf5GQSapbQ==/5837307232041041.jpg',
            lrc: '/statics/music/Wild Wild Web.lrc',
            theme: '#5884a7'
        }, {
            name: 'Ark',
            artist: 'HOYO-MiX',
            url: 'https://music.163.com/song/media/outer/url?id=484056609',
            cover: 'http://p1.music.126.net/YC4pwc7iaLoO_-bR0wBJsA==/19198572532779991.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#181250'
        }, {
            name: 'Anonymous',
            artist: 'Dirtyphonics',
            url: 'https://music.163.com/song/media/outer/url?id=33419706',
            cover: 'http://p1.music.126.net/ZjLPxenrfXIqaJA7qaCjNg==/7929677861013136.jpg',
            lrc: '/statics/music/Anonymous.lrc',
            theme: '#000000'
        }, {
            name: 'Feel the Jank (extended)',
            artist: 'Adhesive Wombat',
            url: 'https://music.163.com/song/media/outer/url?id=26588058',
            cover: 'http://p2.music.126.net/GjTtvKdNL8mfx4Gaa7NeYA==/4460718673901071.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#b3d79a'
        }, {
            name: 'The Happy Troll (Griefing Theme Song)',
            artist: 'D1ofaquavibe',
            url: 'https://music.163.com/song/media/outer/url?id=31365070',
            cover: 'http://p1.music.126.net/be1_ulzh8DAJeaRSiwffVA==/2918103860283419.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#fdf1d7'
        }, {
            name: 'Funky Stars',
            artist: 'Quazar',
            url: 'https://music.163.com/song/media/outer/url?id=428350808',
            cover: 'http://p1.music.126.net/Q14bFw6rRIhF2QijhLx8fQ==/18689498649065658.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#020014'
        }, {
            name: 'Monkeybiz',
            artist: 'D1ofaquavibe',
            url: 'https://music.163.com/song/media/outer/url?id=412911649',
            cover: 'http://p2.music.126.net/sM1SgGwADPXLYeUwGypd4Q==/1376588566231447.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#aa905f'
        }, {
            name: 'The Party Troll',
            artist: 'D1ofaquavibe',
            url: 'https://music.163.com/song/media/outer/url?id=38358820',
            cover: 'http://p2.music.126.net/u2sWlV-BqYyqDV7_zskZyw==/6634453163551437.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#8c8c8c'
        }, {
            name: 'Generic Techno',
            artist: 'EnV',
            url: 'https://music.163.com/song/media/outer/url?id=27794733',
            cover: 'http://p2.music.126.net/6YmT2-uSWdsOV57JBPFUtw==/3147901790408589.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#ef6fa8'
        }, {
            name: 'DisChipo',
            artist: 'FantomenK',
            url: 'https://music.163.com/song/media/outer/url?id=17744071',
            cover: 'http://p1.music.126.net/j2Qjf6vEa3V7aSU26nzLfQ==/6638851209100144.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#bd0800'
        }, {
            name: 'Innerlink',
            artist: 'HOYO-MiX',
            url: 'https://music.163.com/song/media/outer/url?id=468513221',
            cover: 'http://p2.music.126.net/emDsTR9lK3t6Wo-wE2OGPQ==/19064432114058121.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#535179'
        }, {
            name: 'Switchblade',
            artist: 'EnV',
            url: 'https://music.163.com/song/media/outer/url?id=27794735',
            cover: 'http://p2.music.126.net/6YmT2-uSWdsOV57JBPFUtw==/3147901790408589.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#ff7ee3'
        }, {
            name: 'Sony Vegas 9.x Keygen Music',
            artist: 'Joey Mizers..',
            url: 'https://music.163.com/song/media/outer/url?id=433103958',
            cover: 'http://p1.music.126.net/CNXsiA_m6pEBhYLhE-9nrA==/18178225742776745.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#494949'
        }, {
            name: 'てってってー',
            artist: 'V.A.',
            url: 'https://music.163.com/song/media/outer/url?id=28442271',
            cover: 'http://p2.music.126.net/Txs14AuCLDzw_aNgJSIIvg==/109951163927000844.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#ccbd97'
        }, {
            name: 'Sweet Dreams',
            artist: 'Byproduct',
            url: 'https://music.163.com/song/media/outer/url?id=2537070',
            cover: 'http://p2.music.126.net/QcxeYrnQkPl4Db7grP3z3Q==/904898069704028.jpg',
            lrc: '/statics/music/Sweet Dreams.lrc',
            theme: '#000000'
        }, {
            name: 'Bleeder',
            artist: 'Sebastian Komor',
            url: 'https://music.163.com/song/media/outer/url?id=408140175',
            cover: 'http://p1.music.126.net/WCXRxbEz1QHrdRTckKFc0w==/1402976840840031.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#698b2c'
        }, {
            name: 'Funky Stars (Byproduct remix)',
            artist: 'Byproduct',
            url: 'https://music.163.com/song/media/outer/url?id=401386026',
            cover: 'http://p2.music.126.net/mGoCYYbELhOYlXnXqkhGng==/3384296791681736.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#ddd5b0'
        }, {
            name: 'Ignition',
            artist: 'DDRKirby(ISQ)',
            url: 'https://music.163.com/song/media/outer/url?id=431259493',
            cover: 'http://p2.music.126.net/IPnqMCk8YaN9inwYV2bdgQ==/18774161044446693.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#1c75a1'
        }, {
            name: 'ACE',
            artist: 'mihoyo',
            url: 'https://music.163.com/song/media/outer/url?id=1315333110',
            cover: 'http://p2.music.126.net/5ADSkBzhwaTSX1XM1LdrWg==/109951163586223038.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#9a8fb7'
        }, {
            name: 'Up In My Jam (All Of A Sudden)',
            artist: 'Kubbi',
            url: 'https://music.163.com/song/media/outer/url?id=26316672',
            cover: 'http://p1.music.126.net/Mth2rovpXP1pmJR8qeOtpw==/2517881627662597.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#19182d'
        }, {
            name: 'Empire (Instrumental)',
            artist: 'Voicians',
            url: 'https://music.163.com/song/media/outer/url?id=409830458',
            cover: 'http://p1.music.126.net/AnPPNQ3dZKXZFnmmkg6Vlg==/1399678308350951.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#9df8f3'
        }, {
            name: 'Bloody Stream',
            artist: 'Coda(小田和奏)',
            url: 'https://music.163.com/song/media/outer/url?id=26239032',
            cover: 'http://p2.music.126.net/hfOhoxdxhwGGCIeIhwWFHw==/109951163682864420.jpg',
            lrc: '/statics/music/Bloody Stream.lrc',
            theme: '#eb3a97'
        }, {
            name: 'GBL♂男神殿',
            artist: '咖啡师qwq',
            url: '/statics/music/咖啡師qwq - GBL ♂ 男神殿.mp3',
            cover: '/statics/music/咖啡師qwq - GBL ♂ 男神殿.jpg',
            lrc: '/statics/music/咖啡師qwq - GBL ♂ 男神殿.lrc',
            theme: '#2d2d2d'
        }
    ]
});

// 获取歌词json： http://music.163.com/api/song/media?id=歌曲id
// 获取歌曲： https://music.163.com/song/media/outer/url?id=歌曲id


