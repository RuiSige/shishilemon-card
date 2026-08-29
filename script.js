document.addEventListener('DOMContentLoaded', () => {
  const cardItems = document.querySelectorAll('.card-item');
  const dots = document.querySelectorAll('.dot');
  const cardContainer = document.getElementById('cardContainer');
  let currentIndex = 0;
  const totalCards = cardItems.length;

  function showCard(nextIndex) {
    if (nextIndex === currentIndex) return;

    const currentCard = cardItems[currentIndex];
    const nextCard = cardItems[nextIndex];

    // 旧カードを送り出しアニメーション
    currentCard.classList.remove('active');
    currentCard.classList.add('flipped-out');

    setTimeout(() => {
      currentCard.classList.remove('flipped-out');
    }, 800);

    // 新カードを表示
    nextCard.classList.add('active');

    // ドットの更新
    dots[currentIndex].classList.remove('active');
    dots[nextIndex].classList.add('active');

    currentIndex = nextIndex;
  }

  // カード本体をタップしたら次のカードへ（ループ）
  cardContainer.addEventListener('click', () => {
    const nextIndex = (currentIndex + 1) % totalCards;
    showCard(nextIndex);
  });

  // ドットをタップしたらそのカードへ移動
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation(); // カードクリックと重複しないように保護
      const targetIndex = parseInt(dot.getAttribute('data-index'));
      showCard(targetIndex);
    });
  });
});
