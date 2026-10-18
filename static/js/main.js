// Mobile Nav Links Auto-Close
document.addEventListener('DOMContentLoaded', () => {
  const mainNav = document.getElementById('mainNav');
  const toggleBtn = document.getElementById('menuToggle');
  if (mainNav) {
    const links = mainNav.querySelectorAll('a.nav-dd-item, a.nav-link:not(.nav-dropdown-toggle)');
    links.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        if (toggleBtn) toggleBtn.classList.remove('is-active');
        document.body.style.overflow = '';
      });
    });
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
