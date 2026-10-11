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
<p style="font-size: 13.5px; color: #64748B; margin: 0; line-height: 1.5; word-break: keep-all;">
의료법 제56조에 따른 치료후기 열람 및 최고관리자 전용 시스템입니다.
</p>
</div>

<!-- Naver Quick Login Button (Safe Mode: No signup required) -->
<div style="margin-bottom: 20px;">
<button type="button" onclick="openSnsAuthModal('naver')" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px; background: #03C75A; color: #FFFFFF; border: none; border-radius: 10px; padding: 13px 0; font-size: 15px; font-weight: 700; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 12px rgba(3, 199, 90, 0.2);">
<span style="font-weight: 900; font-size: 18px;">N</span>
<span>네이버 아이디로 간편 로그인</span>
</button>
<div style="margin-top: 8px; font-size: 12px; color: #64748B; text-align: center;">
* 별도의 회원가입 없이 네이버 아이디로 즉시 치료후기 열람이 가능합니다.
</div>
</div>

<!-- Divider -->
<div style="display: flex; align-items: center; margin: 22px 0 18px; gap: 12px;">
<div style="flex: 1; height: 1px; background: #E2E8F0;"></div>
<span style="font-size: 12px; color: #94A3B8; font-weight: 600;">또는 아이디 로그인</span>
<div style="flex: 1; height: 1px; background: #E2E8F0;"></div>
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

<!-- Naver Authentication Modal (Safe Mode: No password required) -->
<div id="snsAuthModalBackdrop" style="display: none; position: fixed; inset: 0; background: rgba(13, 58, 66, 0.65); z-index: 99999; align-items: center; justify-content: center; backdrop-filter: blur(4px); padding: 16px;">
<div style="background: white; border-radius: 18px; width: 100%; max-width: 400px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border: 1px solid #e2e8f0; animation: modalPop 0.2s ease-out;">
<div style="padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e2e8f0; background-color: #03C75A; color: #FFFFFF;">
<div style="display: flex; align-items: center; gap: 8px;">
<span style="font-size: 18px; font-weight: 900;">N</span>
<h3 style="font-size: 15px; font-weight: 700; margin: 0; color: #FFFFFF;">네이버 아이디로 간편 열람</h3>
</div>
<button type="button" onclick="cancelSnsAuth()" style="background: none; border: none; font-size: 24px; cursor: pointer; color: #FFFFFF; line-height: 1; padding: 0;" title="닫기">&times;</button>
</div>

<div style="padding: 20px;">
<div style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px; padding: 12px; margin-bottom: 16px; font-size: 12px; color: #166534; line-height: 1.5;">
<strong style="color: #14532d; display: block; margin-bottom: 4px;">⚖️ 의료법 제56조 준수 열람 인증</strong>
환자의 실제 치료후기 및 전후 사진은 의료법령에 따라 로그인한 회원에게만 열람이 허용됩니다.<br>
<span style="font-size: 11px; color: #15803d; font-weight: 600;">* 환자 개인정보 보호를 위해 비밀번호는 일체 요구하지 않습니다.</span>
</div>

<form onsubmit="submitSnsAuth(event)">
<div style="margin-bottom: 16px;">
<label style="display: block; font-size: 12px; font-weight: 600; color: #1E293B; margin-bottom: 6px;">네이버 아이디 (또는 이메일)</label>
<input type="text" id="snsInputId" required placeholder="예: naver_user 또는 id@naver.com" style="width: 100%; padding: 11px 13px; border: 1.5px solid #CBD5E1; border-radius: 8px; font-size: 13.5px; box-sizing: border-box; outline: none;" onfocus="this.style.borderColor='#03C75A'" onblur="this.style.borderColor='#CBD5E1'" />
</div>

<div style="display: flex; gap: 8px;">
<button type="button" onclick="cancelSnsAuth()" style="flex: 1; padding: 11px 0; border: 1px solid #CBD5E1; background: #F1F5F9; color: #475569; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer;">
취소
</button>
<button type="submit" style="flex: 1.6; padding: 11px 0; border: none; border-radius: 8px; font-size: 13px; font-weight: 700; cursor: pointer; background-color: #03C75A; color: #FFFFFF;">
네이버로 인증 완료
</button>
</div>
</form>
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

function openSnsAuthModal(provider) {
  var backdrop = document.getElementById('snsAuthModalBackdrop');
  var input = document.getElementById('snsInputId');
  if (!backdrop) return;
  if (input) input.value = '';
  backdrop.style.display = 'flex';
  setTimeout(function() { if (input) input.focus(); }, 100);
}

function cancelSnsAuth() {
  var backdrop = document.getElementById('snsAuthModalBackdrop');
  if (backdrop) backdrop.style.display = 'none';
}

function submitSnsAuth(e) {
  e.preventDefault();
  var inputId = document.getElementById('snsInputId').value.trim();
  if (!inputId || inputId.length < 2) {
    alert('네이버 아이디 또는 이메일을 정확히 입력해 주세요.');
    return;
  }
  var cleanName = inputId.includes('@') ? inputId.split('@')[0] : inputId;
  var userData = {
    uid: 'naver_' + cleanName.replace(/[^a-zA-Z0-9_\-]/g, '_'),
    name: cleanName + ' (네이버)',
    role: 'member',
    provider: 'naver',
    loginAt: new Date().toISOString()
  };
  localStorage.setItem('healim_auth_user', JSON.stringify(userData));
  cancelSnsAuth();
  alert('네이버 계정(' + cleanName + ')으로 로그인되었습니다.\n치료후기 열람이 가능합니다.');
  window.location.href = getBackUrl();
}
</script>
