---
title: "해아림 커뮤니티 | 두뇌·신경계 치료칼럼, 치료후기, FAQ, 유튜브"
seo_title: "커뮤니티 안내 | 해아림한의원 대구본점"
description: "해아림한의원 대구본점 커뮤니티 안내입니다. 각 섹션별 독립 페이지(치료칼럼, 치료후기, FAQ, 유튜브 영상)로 바로 연결됩니다."
type: community
hide_community_header: true
layout: single
---

<script>
(function() {
  var hash = window.location.hash.toLowerCase();
  var params = new URLSearchParams(window.location.search);
  var board = params.get('board');
  var id = params.get('id');
  var vid = params.get('vid');

  var targetUrl = '/columns/';
  if (hash === '#columns' || board === 'columns') {
    targetUrl = id ? ('/columns/?id=' + encodeURIComponent(id)) : '/columns/';
  } else if (hash === '#faq' || board === 'faq') {
    targetUrl = id ? ('/faq/?id=' + encodeURIComponent(id)) : '/faq/';
  } else if (hash === '#reviews' || board === 'reviews') {
    targetUrl = '/reviews/';
  } else if (hash === '#youtube' || board === 'youtube') {
    targetUrl = (vid || id) ? ('/youtube/?vid=' + encodeURIComponent(vid || id)) : '/youtube/';
  }

  window.location.replace(targetUrl);
})();
</script>

<noscript>
  <meta http-equiv="refresh" content="0; url=/columns/">
</noscript>

<div class="container community-page-container" style="max-width: 900px; margin: 40px auto 80px; padding: 0 16px; text-align: center;">
  <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 20px; padding: 40px 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.04);">
    <span style="display: inline-block; padding: 6px 16px; background: #E6F6F8; color: #008194; font-size: 13.5px; font-weight: 700; border-radius: 50px; margin-bottom: 16px;">해아림한의원 대구본점</span>
    <h1 style="font-size: 26px; font-weight: 800; color: #0C4349; margin: 0 0 14px;">페이지 이동 안내</h1>
    <p style="font-size: 15px; color: #64748B; margin: 0 0 30px; line-height: 1.6;">
      커뮤니티의 각 영역이 더 빠르고 쾌적한 독립 페이지로 새롭게 개편되었습니다.<br>
      잠시 후 해당 페이지로 자동 연결됩니다.
    </p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; max-width: 720px; margin: 0 auto;">
      <a href="/columns/" style="padding: 18px 14px; background: #F8FAFB; border: 1.5px solid #CBD5E1; border-radius: 12px; text-decoration: none; color: #0C4349; font-weight: 700; transition: all 0.2s;" onmouseover="this.style.borderColor='#008194'; this.style.background='#E6F6F8';" onmouseout="this.style.borderColor='#CBD5E1'; this.style.background='#F8FAFB';">
        <div style="font-size: 22px; margin-bottom: 6px;">📄</div>
        <div>치료칼럼 바로가기</div>
      </a>
      <a href="/reviews/" style="padding: 18px 14px; background: #F8FAFB; border: 1.5px solid #CBD5E1; border-radius: 12px; text-decoration: none; color: #0C4349; font-weight: 700; transition: all 0.2s;" onmouseover="this.style.borderColor='#008194'; this.style.background='#E6F6F8';" onmouseout="this.style.borderColor='#CBD5E1'; this.style.background='#F8FAFB';">
        <div style="font-size: 22px; margin-bottom: 6px;">💬</div>
        <div>치료후기 바로가기</div>
      </a>
      <a href="/faq/" style="padding: 18px 14px; background: #F8FAFB; border: 1.5px solid #CBD5E1; border-radius: 12px; text-decoration: none; color: #0C4349; font-weight: 700; transition: all 0.2s;" onmouseover="this.style.borderColor='#008194'; this.style.background='#E6F6F8';" onmouseout="this.style.borderColor='#CBD5E1'; this.style.background='#F8FAFB';">
        <div style="font-size: 22px; margin-bottom: 6px;">❓</div>
        <div>자주 묻는 질문(FAQ)</div>
      </a>
      <a href="/youtube/" style="padding: 18px 14px; background: #F8FAFB; border: 1.5px solid #CBD5E1; border-radius: 12px; text-decoration: none; color: #0C4349; font-weight: 700; transition: all 0.2s;" onmouseover="this.style.borderColor='#008194'; this.style.background='#E6F6F8';" onmouseout="this.style.borderColor='#CBD5E1'; this.style.background='#F8FAFB';">
        <div style="font-size: 22px; margin-bottom: 6px;">▶️</div>
        <div>유튜브 영상 바로가기</div>
      </a>
    </div>
  </div>
</div>
