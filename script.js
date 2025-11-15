// 게임 데이터
const games = [
    {
        name: "스타필드",
        youtubeId: "dQlBgPjvBBg",
        category: "new",
        description: "Bethesda의 차세대 우주 RPG"
    },
    {
        name: "리그 오브 레전드", 
        youtubeId: "BGtROJeMPeE",
        category: "popular",
        description: "세계 최고의 MOBA 게임"
    }
    // ... 더 많은 게임들
];

// 게임 로드 함수
function loadGames() {
    const newGamesContainer = document.getElementById('new-games');
    const popularGamesContainer = document.getElementById('popular-games');
    
    newGamesContainer.innerHTML = '';
    popularGamesContainer.innerHTML = '';
    
    games.forEach(game => {
        const gameCard = createGameCard(game);
        
        if (game.category === 'new') {
            newGamesContainer.appendChild(gameCard);
        } else {
            popularGamesContainer.appendChild(gameCard);
        }
    });
}

// 게임 카드 생성 함수
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.onclick = () => openYouTube(game.youtubeId);
    
    card.innerHTML = `
        <h3>${game.name}</h3>
        <p>${game.description}</p>
        <button class="play-btn" onclick="event.stopPropagation(); openYouTube('${game.youtubeId}')">
            <span class="youtube-icon"></span>
            영상 보기
        </button>
    `;
    
    return card;
}

// YouTube 열기 함수
function openYouTube(videoId) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
}

// 페이지 로드시 실행
document.addEventListener('DOMContentLoaded', loadGames);