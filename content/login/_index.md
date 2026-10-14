---
title: "로그인"
description: "해아림한의원 대구본점 회원 및 최고관리자 로그인 안내입니다. 의료법 제56조에 따른 치료후기 열람 및 커뮤니티 관리를 이용하실 수 있습니다."
type: "login"
layout: "single"
---

<div style="width: 100%; max-width: 440px; margin: 0 auto;">
<div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 20px; box-shadow: 0 10px 30px rgba(12, 67, 73, 0.08); padding: 36px 28px;">

<!-- Header -->
<div style="text-align: center; margin-bottom: 26px;">
<span style="display: inline-block; padding: 4px 14px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 50px; margin-bottom: 10px;">
HEALIM AUTHENTICATION
</span>
<h1 style="font-size: 26px; font-weight: 800; color: #0C4349; margin: 0 0 8px; letter-spacing: -0.02em;">
로그인
</h1>
</div>

<!-- Standard / Admin Login Form -->
<form id="healimLoginForm" onsubmit="handleFormLogin(event)">
<div style="margin-bottom: 15px;">
<label for="loginUid" style="display: block; font-size: 13px; font-weight: 700; color: #1E293B; margin-bottom: 6px;">
아이디 또는 이메일
</label>
<input type="text" id="loginUid" required placeholder="아이디를 입력해 주세요" style="width: 100%; padding: 12px 14px; border: 1.5px solid #CBD5E1; border-radius: 8px; font-size: 14px; box-sizing: border-box; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='#146369'" onblur="this.style.borderColor='#CBD5E1'" />
</div>

<div style="margin-bottom: 16px;">
<label for="loginPasswd" style="display: block; font-size: 13px; font-weight: 700; color: #1E293B; margin-bottom: 6px;">
비밀번호
</label>
<div style="position: relative;">
<input type="password" id="loginPasswd" required placeholder="비밀번호를 입력해 주세요" style="width: 100%; padding: 12px 42px 12px 14px; border: 1.5px solid #CBD5E1; border-radius: 8px; font-size: 14px; box-sizing: border-box; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='#146369'" onblur="this.style.borderColor='#CBD5E1'" />
<button type="button" onclick="togglePasswdVisibility()" style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; color: #64748B; font-size: 14px; padding: 4px;" title="비밀번호 보기/숨기기">
👁️
</button>
</div>
</div>

<!-- Remember Login -->
<div style="display: flex; align-items: center; justify-content: space-between; font-size: 13px; color: #64748B; margin-bottom: 20px;">
<label style="display: flex; align-items: center; gap: 6px; cursor: pointer;">
<input type="checkbox" id="rememberLogin" checked style="accent-color: #146369;" />
<span>로그인 상태 유지</span>
</label>
<a href="javascript:alert('등록하신 아이디 또는 본원(053-751-0071)으로 문의해 주시면 본인 확인 후 비밀번호 재설정을 도와드립니다.');" style="color: #64748B; text-decoration: none; font-size: 12.5px;">비밀번호 문의</a>
</div>

<!-- Submit Button -->
<button type="submit" style="width: 100%; background: #146369; color: #FFFFFF; border: none; border-radius: 10px; padding: 13px 0; font-size: 15px; font-weight: 700; cursor: pointer; transition: background 0.2s; box-shadow: 0 4px 14px rgba(20, 99, 105, 0.2);">
로그인
</button>
</form>

<!-- Notice Box -->
<div style="margin-top: 22px; padding: 14px; background: #F8FAFB; border-radius: 10px; border: 1px solid #E2E8F0; font-size: 12px; color: #64748B; line-height: 1.55;">
🔒 <strong>안내</strong>: 회원가입 창 없이 일반 환자분은 네이버 간편 로그인 또는 임의 아이디로 즉시 치료후기 열람이 가능하며, 최고관리자 계정으로 로그인 시 칼럼 자동발행 상태 확인 및 게시글 작성·관리 권한이 활성화됩니다.
</div>

</div>
</div>



<script>
function getBackUrl() {
  var params = new URLSearchParams(window.location.search);
  var back = params.get('back_url');
  if (!back) return '/community/#columns';
  try {
    if (back.startsWith('L') && !back.startsWith('/')) {
      return atob(back);
    }
    return decodeURIComponent(back);
  } catch(e) {
    return back;
  }
}

function togglePasswdVisibility() {
  var input = document.getElementById('loginPasswd');
  if (!input) return;
  input.type = input.type === 'password' ? 'text' : 'password';
}

function handleFormLogin(e) {
  e.preventDefault();
  var uid = document.getElementById('loginUid').value.trim();
  var passwd = document.getElementById('loginPasswd').value.trim();

  if (!uid || !passwd) {
    alert('아이디와 비밀번호를 모두 입력해 주세요.');
    return;
  }

  // 최고관리자 (Super Admin) 인증: 아이디 healim0071, 비번 godkfla71~~
  if (uid === 'healim0071') {
    if (passwd !== 'godkfla71~~') {
      alert('최고관리자 비밀번호가 일치하지 않습니다.\n다시 확인 후 입력해 주세요.');
      document.getElementById('loginPasswd').value = '';
      document.getElementById('loginPasswd').focus();
      return;
    }
    var adminUser = {
      uid: 'healim0071',
      name: '최고관리자',
      role: 'admin',
      grade: 'superadmin',
      isAdmin: true,
      loginAt: new Date().toISOString()
    };
    localStorage.setItem('healim_auth_user', JSON.stringify(adminUser));
    alert('👑 최고관리자(healim0071)로 인증되었습니다.\n전체 칼럼 자동발행 상태 확인 및 수동 발행, 작성·관리 권한이 활성화됩니다.');
    var back = getBackUrl();
    window.location.href = (back === '/' || !back) ? '/community/#columns' : back;
    return;
  }

  // 일반 회원 로그인
  var userName = uid.includes('@') ? uid.split('@')[0] : uid;
  var userData = {
    uid: uid,
    name: userName,
    role: 'member',
    loginAt: new Date().toISOString()
  };
  localStorage.setItem('healim_auth_user', JSON.stringify(userData));

  alert(userName + ' 님, 정상적으로 로그인되었습니다.\n치료후기 열람이 가능합니다.');
  window.location.href = getBackUrl();
}


</script>
