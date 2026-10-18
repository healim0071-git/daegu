document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle (2번째 사진 skyma.co.kr 양식 연동)
  const toggleBtn = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mainNav.classList.toggle('is-open');
      toggleBtn.classList.toggle('is-active');
    });

    // 전체메뉴 카드 클릭 시 메뉴 닫기
    const menuCards = mainNav.querySelectorAll('.allmenu-card');
    menuCards.forEach(card => {
      card.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        toggleBtn.classList.remove('is-active');
      });
    });

    // 바깥 영역 클릭 시 메뉴 닫기
    document.addEventListener('click', (e) => {
      if (mainNav.classList.contains('is-open') && !mainNav.contains(e.target) && !toggleBtn.contains(e.target)) {
        mainNav.classList.remove('is-open');
        toggleBtn.classList.remove('is-active');
      }
    });

    // 현재 페이지 활성화 카드 표시 (skyma 스타일 다크 하이라이트)
    try {
      const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
      menuCards.forEach(card => {
        const href = card.getAttribute('href');
        if (!href) return;
        const linkPath = href.split('#')[0].replace(/\/+$/, '') || '/';
        if (linkPath === currentPath && currentPath !== '/') {
          card.classList.add('is-current');
        } else if (currentPath === '/' && (href === '/' || href === '/about/')) {
          if (href === '/about/') card.classList.add('is-current');
        }
      });
    } catch(e) {}
  }
});


// Auth Status Display in Top Nav
document.addEventListener('DOMContentLoaded', () => {
  try {
    const userRaw = localStorage.getItem('healim_auth_user');
    if (userRaw) {
      const user = JSON.parse(userRaw);
      const authLink = document.getElementById('topAuthLink');
      if (authLink) {
        if (user.uid === 'healim0071' || user.isAdmin || user.grade === 'superadmin') {
          authLink.innerHTML = '👑 최고관리자 <span style="font-weight:normal; font-size:11px; opacity:0.8;">(로그아웃)</span>';
        } else {
          authLink.innerHTML = '👤 ' + (user.name || '회원') + ' <span style="font-weight:normal; font-size:11px; opacity:0.8;">(로그아웃)</span>';
        }
        authLink.href = 'javascript:void(0)';
        authLink.onclick = function() {
          if (confirm('로그아웃 하시겠습니까?')) {
            localStorage.removeItem('healim_auth_user');
            location.reload();
          }
        };
      }
    }
  } catch(e) {}
});
