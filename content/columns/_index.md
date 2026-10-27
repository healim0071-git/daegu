---
title: "김대억 대표원장의 두뇌·신경계 치료칼럼"
seo_title: "의학칼럼 | 해아림한의원 대구본점 김대억 박사의 두뇌·신경계 심층 칼럼"
description: "해아림한의원 대구본점 김대억 한방신경정신과 박사의 의학 칼럼 — 틱장애, ADHD, 공황장애, 불면증, 자율신경실조증, 어지럼증의 원인과 뇌 자생력 회복 심층 가이드 40편."
keywords:
  - "대구 한의원 칼럼"
  - "의학칼럼"
  - "치료칼럼"
  - "틱장애 칼럼"
  - "공황장애 칼럼"
  - "불면증 칼럼"
  - "자율신경실조증 칼럼"
  - "김대억 박사"
  - "해아림한의원 대구본점"
type: community
active_tab: columns
layout: single
---



<!-- 상단 검색/필터 & 칼럼 작성 버튼 -->
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
  <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap; flex: 1;">
    <select id="columnCategoryFilter" onchange="filterColumns()" style="padding: 9px 14px; border: 1.5px solid #CBD5E1; border-radius: 8px; font-size: 13.5px; outline: none; background: #FFF; color: #1E293B; font-weight: 600;">
      <option value="ALL">전체 질환 보기</option>
      <option value="틱장애">틱장애 (10편)</option>
      <option value="공황장애">공황장애 (6편)</option>
      <option value="불면증">불면증 (6편)</option>
      <option value="자율신경실조증">자율신경실조증 (7편)</option>
      <option value="어지럼증">어지럼증 (3편)</option>
      <option value="ADHD">ADHD (3편)</option>
      <option value="강박증">강박증 (2편)</option>
      <option value="대인기피증">대인기피증 (2편)</option>
      <option value="불안장애">불안장애 (2편)</option>
      <option value="다한증">다한증</option>
      <option value="갱년기">갱년기 (2편)</option>
    </select>
  <div style="position: relative; flex: 1; max-width: 320px; min-width: 200px;">
      <input type="text" id="columnSearchInput" onkeyup="if(event.key==='Enter') filterColumns()" placeholder="칼럼 제목 또는 키워드 검색" style="width: 100%; padding: 9px 38px 9px 14px; border: 1.5px solid #CBD5E1; border-radius: 8px; font-size: 13.5px; outline: none; box-sizing: border-box;" />
      <button type="button" onclick="filterColumns()" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; color: #64748B; font-size: 15px;">🔍</button>
    </div>
  </div>

  <div style="display: flex; align-items: center; gap: 8px;">
    <button type="button" id="btnAdminWriteColumn" onclick="openColumnWriteModal()" style="display: none; padding: 9px 18px; background: #008194; color: #FFF; font-size: 13.5px; font-weight: 700; border: none; border-radius: 8px; cursor: pointer;">
      ✍️ 칼럼 작성
    </button>
  </div>
</div>

<!-- 자동발행 컨트롤 바 (최고관리자 모드 전용) -->
<div id="autoColumnStatusBar" style="display: none; justify-content: space-between; align-items: center; margin-bottom: 20px; padding: 10px 16px; background: #F8FAFB; border: 1px solid #D5E8EA; border-radius: 10px; flex-wrap: wrap; gap: 10px;">
  <div style="display: inline-flex; align-items: center; gap: 8px; font-size: 12.5px; color: #0C4349;">
    <span style="display: inline-block; width: 9px; height: 9px; border-radius: 50%; background: #10B981; box-shadow: 0 0 6px #10B981;"></span>
    <span><strong>치료칼럼 자동 발행</strong>: 주 3~4회 (오전 10:00~12:00)</span>
    <span style="color: #94A3B8;">|</span>
    <span id="autoColumnNextScheduleText" style="color: #146369; font-weight: 700;">다음 발행: 확인 중..</span>
  </div>
  <div style="display: flex; align-items: center; gap: 8px; margin-left: auto; flex-wrap: wrap;">
    <button type="button" onclick="triggerAutoColumnPublishManual()" style="font-size: 12px; padding: 5px 12px; background: #FFFFFF; border: 1px solid #146369; border-radius: 6px; color: #146369; font-weight: 700; cursor: pointer; white-space: nowrap; box-shadow: 0 1px 3px rgba(0,0,0,0.05); transition: all 0.15s;">
      ⚡ 즉시 1편 자동발행
    </button>
    <button type="button" id="btnCustomTitlePublish" onclick="openCustomTitlePublishModal()" style="font-size: 12px; padding: 5px 14px; background: #146369; border: 1px solid #146369; border-radius: 6px; color: #FFFFFF; font-weight: 700; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 5px rgba(20,99,105,0.25); transition: all 0.15s; display: inline-flex; align-items: center; gap: 5px;">
      <span>✍️ 제목설정발행</span>
    </button>
  </div>
</div>

<!-- 칼럼 테이블 목록 그리드 (SSR 정적 렌더링으로 검색엔진 100% 인덱싱) -->
<div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 18px rgba(0,0,0,0.02); margin-bottom: 24px;">
<table class="community-board-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
<thead>
<tr style="background: #F8FAFB; border-bottom: 1.5px solid #E2E8F0; color: #475569; font-weight: 700; font-size: 13.5px;">
<th style="width: 8%; padding: 14px 12px; text-align: center;">번호</th>
<th style="width: 15%; padding: 14px 12px; text-align: center;">분류</th>
<th style="padding: 14px 16px;">칼럼 제목</th>
<th class="col-hide-mobile" style="width: 14%; padding: 14px 12px; text-align: center;">작성자</th>
<th class="col-hide-mobile" style="width: 12%; padding: 14px 12px; text-align: center;">등록일</th>
<th class="col-hide-mobile" style="width: 9%; padding: 14px 12px; text-align: center;">조회</th>
<th class="col-admin-action" style="display: none; width: 10%; padding: 14px 8px; text-align: center;">관리</th>
</tr>
</thead>
<tbody id="columnsTableBody">
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-clim-1')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">1</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">갱년기</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-clim-1" onclick="event.preventDefault(); openColumnModal('col-auto-clim-1');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[대구 갱년기 치료] 안면홍조와 가슴 두근거림, 자율신경실조증과의 상관관계와 한의학적 진단</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.24</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2799</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-clim-1');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-dys-7')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">2</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">자율신경실조증</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-dys-7" onclick="event.preventDefault(); openColumnModal('col-auto-dys-7');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[구미 자율신경실조증] 검사에는 이상 없다는데 왜 온몸이 아프고 어지러울까요? 자율신경 불균형(HRV 저하) 원인과 회복 로드맵</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.21</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">184</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-dys-7');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-clim-2')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">3</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">갱년기</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-clim-2" onclick="event.preventDefault(); openColumnModal('col-auto-clim-2');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[갱년기 불면증과 우울증] 호르몬제 복용이 고민될 때, 뇌신경계 자생력을 깨우는 1:1 맞춤 한방 치료법</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.20</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2736</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-clim-2');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-insomnia-8')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">4</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">불면증</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-insomnia-8" onclick="event.preventDefault(); openColumnModal('col-auto-insomnia-8');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[문경 상주 불면증] 수면제를 먹어도 자꾸 깨는데 어떻게 해야 하나요? 수면 구조 복원과 멜라토닌 생체 리듬 정상화 Q&amp;A</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.20</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">141</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-insomnia-8');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-panic-7')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">5</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">공황장애</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-panic-7" onclick="event.preventDefault(); openColumnModal('col-auto-panic-7');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[경주 공황장애] 운전 중 터널과 고속도로 다리 위에서 숨이 턱 막히던 광장공포증 동반 공황장애 치료사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.19</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">150</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-panic-7');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-tic-11')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">6</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">틱장애</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-tic-11" onclick="event.preventDefault(); openColumnModal('col-auto-tic-11');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[구미 틱장애] 단순 눈 깜빡임일까요, 틱장애일까요? 발생 4주 이내 조기 감별법과 가정 내 대처 가이드</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.19</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">152</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-tic-11');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-soc-4')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">7</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">대인기피증</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-soc-4" onclick="event.preventDefault(); openColumnModal('col-auto-soc-4');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[대구 대인기피증] 사람 많은 곳에 서면 심장이 뛰고 식은땀이 나나요? 사회불안장애 원인과 한방 신경 안정 치료</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.19</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">185</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-soc-4');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-adhd-5')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">8</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">ADHD</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-adhd-5" onclick="event.preventDefault(); openColumnModal('col-auto-adhd-5');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[영양 울진 ADHD] 산만한 우리 아이, 단순 성격일까요 ADHD일까요? 전두엽 실행 기능 평가와 집중력 회복 가이드</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.19</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">182</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-adhd-5');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-clim-3')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">9</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">갱년기</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-clim-3" onclick="event.preventDefault(); openColumnModal('col-auto-clim-3');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[갱년기 다발성 관절통과 식은땀] 음허화왕(陰虛火旺) 병리와 전신 신체화 증상 극복 가이드</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.15</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2713</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-clim-3');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-tic-4')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">10</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">틱장애</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-tic-4" onclick="event.preventDefault(); openColumnModal('col-auto-tic-4');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">스마트폰 게임 후 코 찡긋거림과 어깨 들썩임이 심해진 9살 틱 증상 악화 사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.15</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">149</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-tic-4');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-panic-6')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">11</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">공황장애</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-panic-6" onclick="event.preventDefault(); openColumnModal('col-auto-panic-6');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[광장공포증 동반 공황] 밀폐 공간 공포 극복과 편도체 둔감화 인지 치료</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.15</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">131</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-panic-6');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-diz-3')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">12</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">어지럼증</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-diz-3" onclick="event.preventDefault(); openColumnModal('col-auto-diz-3');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[지속성 체위-지각 어지럼증(PPPD)] 시각-전정 감각 불일치와 신경망 재적응 훈련</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.14</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">167</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-diz-3');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-insomnia-1')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">13</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">불면증</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-insomnia-1" onclick="event.preventDefault(); openColumnModal('col-auto-insomnia-1');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">자도 개운하지가 않고 새벽 3시마다 깨는 40대 직장인 만성 불면증 치료사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.13</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">146</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-insomnia-1');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-tic-5')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">14</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">틱장애</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-tic-5" onclick="event.preventDefault(); openColumnModal('col-auto-tic-5');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">1년 넘게 지속된 운동 틱과 음성 틱, 뚜렛증후군 진단 아동의 한방 치료사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.13</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">198</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-tic-5');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-tic-10')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">15</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">틱장애</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-tic-10" onclick="event.preventDefault(); openColumnModal('col-auto-tic-10');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[두개경추 긴장과 틱] 상부 경추 정렬 및 추나요법을 통한 뇌신경 순환 개선</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.12</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">138</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-tic-10');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-tic-3')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">16</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">틱장애</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-tic-3" onclick="event.preventDefault(); openColumnModal('col-auto-tic-3');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">직장 업무 스트레스로 눈 주변 경련과 헛기침이 재발한 30대 성인 틱장애 치료사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.11</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">175</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-tic-3');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-adhd-1')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">17</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">ADHD</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-adhd-1" onclick="event.preventDefault(); openColumnModal('col-auto-adhd-1');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">업무 마감과 일정 관리가 늘 어려워 잦은 실수를 반복하던 30대 성인 ADHD 치료사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.11</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">148</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-adhd-1');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-dys-1')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">18</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">자율신경실조증</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-dys-1" onclick="event.preventDefault(); openColumnModal('col-auto-dys-1');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">부교감신경 항진증이 뭔가요 과도할때 나타나는 어지럼증과 식은땀 증상 사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.10</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">150</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-dys-1');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-tic-7')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">19</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">틱장애</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-tic-7" onclick="event.preventDefault(); openColumnModal('col-auto-tic-7');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">수업 중 산만하고 집중 못 하면서 소리 내던 틱장애와 ADHD 동반 아동 치료사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.09</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">180</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-tic-7');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-panic-1')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">20</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">공황장애</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-panic-1" onclick="event.preventDefault(); openColumnModal('col-auto-panic-1');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">지하철 출근길 갑자기 숨이 턱 막히고 쓰러질 것 같았던 30대 공황장애 치료사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.09</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">138</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-panic-1');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-dys-3')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">21</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">자율신경실조증</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-dys-3" onclick="event.preventDefault(); openColumnModal('col-auto-dys-3');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">식후 가슴 두근거림과 원인 모를 만성 소화불량을 겪던 30대 미주신경 실조증 치료사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.08</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">175</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-dys-3');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-tic-1')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">22</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">틱장애</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-tic-1" onclick="event.preventDefault(); openColumnModal('col-auto-tic-1');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">11살 아이의 킁킁 거리는 음성틱 장애 치료 사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.07</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">121</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-tic-1');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-tic-2')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">23</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">틱장애</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-tic-2" onclick="event.preventDefault(); openColumnModal('col-auto-tic-2');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">음음 소리와 고개 젖힘이 함께 나타난 초등 복합 음성 틱장애 치료 사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.07</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">124</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-tic-2');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-tic-6')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">24</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">틱장애</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-tic-6" onclick="event.preventDefault(); openColumnModal('col-auto-tic-6');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">새 학기 반 배정 후 긴장감으로 목 꺾임과 음음 소리가 심해진 12살 틱장애 치료 사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.06</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">173</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-tic-6');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-tic-8')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">25</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">틱장애</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-tic-8" onclick="event.preventDefault(); openColumnModal('col-auto-tic-8');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[소아 틱장애 부모 가이드] 지적과 억압의 위험성과 정서적 안정 환경 구축법</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.05</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">153</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-tic-8');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-tic-9')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">26</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">틱장애</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-tic-9" onclick="event.preventDefault(); openColumnModal('col-auto-tic-9');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[복합 음성 틱의 신경 기전] 언어 표현형 틱의 사회적 위축 완화와 심신 안정 한약 요법</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.05</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">198</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-tic-9');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-panic-2')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">27</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">공황장애</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-panic-2" onclick="event.preventDefault(); openColumnModal('col-auto-panic-2');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">과호흡과 가슴 답답함으로 응급실을 수차례 찾았던 40대 가장의 공황발작 치료 사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.04</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">140</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-panic-2');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-panic-3')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">28</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">공황장애</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-panic-3" onclick="event.preventDefault(); openColumnModal('col-auto-panic-3');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">하루 3잔 마시던 커피 후 극심한 심계항진과 어지럼증을 겪은 카페인 유발 공황발작 사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.03</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">178</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-panic-3');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-panic-4')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">29</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">공황장애</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-panic-4" onclick="event.preventDefault(); openColumnModal('col-auto-panic-4');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">운전 중 터널과 고속도로 다리 위에서 숨이 턱 막히던 광장공포증 동반 공황장애 치료사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.03</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">174</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-panic-4');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-panic-5')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">30</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">공황장애</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-panic-5" onclick="event.preventDefault(); openColumnModal('col-auto-panic-5');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[항불안제 복용과 한의 진료] 신경 안정제 부작용 완화와 뇌 자생력 회복 병용 요법</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.02</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">149</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-panic-5');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-insomnia-2')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">31</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">불면증</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-insomnia-2" onclick="event.preventDefault(); openColumnModal('col-auto-insomnia-2');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">몸은 지쳤는데 침대에만 누우면 뇌가 각성되어 잠들지 못하는 HPA축 교란 불면증 사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.01</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">199</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-insomnia-2');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-insomnia-3')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">32</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">불면증</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-insomnia-3" onclick="event.preventDefault(); openColumnModal('col-auto-insomnia-3');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">수면제 복용 후에도 낮 동안 몽롱함과 반동성 불면을 겪던 50대 한의 치료사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.10.01</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">171</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-insomnia-3');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-insomnia-4')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">33</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">불면증</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-insomnia-4" onclick="event.preventDefault(); openColumnModal('col-auto-insomnia-4');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">밤마다 다리에 벌레가 기어가는 듯해 잠을 설쳤던 60대 하지불안증후군 불면 치료사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.09.30</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">182</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-insomnia-4');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-insomnia-5')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">34</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">불면증</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-insomnia-5" onclick="event.preventDefault(); openColumnModal('col-auto-insomnia-5');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[스마트폰 블루라이트와 불면] 멜라토닌 분비 억제와 일주기 리듬 교정 수면 위생법</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.09.29</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">133</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-insomnia-5');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-insomnia-6')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">35</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">불면증</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-insomnia-6" onclick="event.preventDefault(); openColumnModal('col-auto-insomnia-6');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[하지불안증후군과 불면] 다리의 저림과 벌레 기어가는 느낌, 도파민 회로 개선법</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.09.29</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">193</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-insomnia-6');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-dys-2')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">36</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">자율신경실조증</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-dys-2" onclick="event.preventDefault(); openColumnModal('col-auto-dys-2');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">머리는 뜨겁고 손발은 얼음장 같아 일상이 힘겨웠던 50대 상열하한 자율신경 치료사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.09.28</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">170</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-dys-2');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-dys-4')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">37</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">자율신경실조증</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-dys-4" onclick="event.preventDefault(); openColumnModal('col-auto-dys-4');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">앉았다 일어설 때 눈앞이 캄캄해지고 맥박이 치솟는 20대 기립성 빈맥 증후군 치료 사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.09.27</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">163</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-dys-4');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-dys-5')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">38</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">자율신경실조증</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-dys-5" onclick="event.preventDefault(); openColumnModal('col-auto-dys-5');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[기립성 저혈압과 빈맥] 체위 변화 시 어지럼증과 두근거림을 유발하는 자율신경 치료법</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.09.27</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">164</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-dys-5');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-dys-6')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">39</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">자율신경실조증</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-dys-6" onclick="event.preventDefault(); openColumnModal('col-auto-dys-6');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">[만성 피로 증후군과 부신 피로] 코르티솔 분비 교란과 자율신경 면역력 강화 한약</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.09.26</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">187</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-dys-6');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
<tr style="border-bottom: 1px solid #F1F5F9; cursor: pointer; transition: background 0.15s;" onmouseover="this.style.background='#F8FAFB';" onmouseout="this.style.background='#FFFFFF';" onclick="openColumnModal('col-auto-diz-1')">
  <td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">40</td>
  <td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">어지럼증</span></td>
  <td style="padding: 14px 16px;"><a href="/columns/?id=col-auto-diz-1" onclick="event.preventDefault(); openColumnModal('col-auto-diz-1');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">이비인후과 검사상 정상이었으나 붕 뜬 느낌이 지속되던 경추성 어지럼증 치료사례</a></td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">해아림한의원</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">2026.09.25</td>
  <td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">194</td>
  <td class="col-admin-action" style="display: none; padding: 14px 8px; text-align: center;"><button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn('col-auto-diz-1');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button></td>
</tr>
</tbody>
</table>
</div>

<!-- 페이지네이션 -->
<div id="columnsPagination" style="display: flex; justify-content: center; gap: 6px; margin-bottom: 40px;"></div>

<!-- ============================================================== -->
<!-- 칼럼 상세 모달 (Column Detail Modal)                           -->
<!-- ============================================================== -->
<div id="columnDetailModal" style="display: none; position: fixed; inset: 0; background: rgba(12, 67, 73, 0.65); z-index: 99999; align-items: center; justify-content: center; backdrop-filter: blur(4px); padding: 16px;" onclick="if(event.target===this) closeColumnModal();">
<div style="background: #FFFFFF; border-radius: 20px; width: 100%; max-width: 820px; max-height: 90vh; overflow-y: auto; box-shadow: 0 25px 50px rgba(0,0,0,0.25); border: 1px solid #E2E8F0; padding: 32px 30px; position: relative;">
    
<!-- 모달 헤더 -->
<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; border-bottom: 1.5px solid #F1F5F9; padding-bottom: 18px; margin-bottom: 22px;">
<div>
<span id="modalColCategory" style="display: inline-block; padding: 4px 12px; background: #E6F6F8; color: #008194; font-size: 12.5px; font-weight: 700; border-radius: 4px; margin-bottom: 8px;">
틱장애
</span>
<h2 id="modalColTitle" style="font-size: 21px; font-weight: 800; color: #0C4349; margin: 0 0 10px; line-height: 1.4; word-break: keep-all;">
칼럼 제목
</h2>
<div style="font-size: 13px; color: #64748B; display: flex; gap: 14px; flex-wrap: wrap;">
<span>작성자: <strong id="modalColAuthor" style="color: #1E293B;">해아림한의원</strong></span>
<span>등록일: <span id="modalColDate">2026.09.27</span></span>
<span>조회: <span id="modalColViews">120</span></span>
</div>
</div>
<button type="button" onclick="closeColumnModal()" style="background: none; border: none; font-size: 28px; cursor: pointer; color: #94A3B8; line-height: 1; padding: 0;">
&times;
</button>
</div>

<!-- 모달 본문 이미지 -->
<div id="modalColImgWrap" style="display: none; text-align: center; margin-bottom: 24px;">
  <img id="modalColImg" src="" alt="칼럼 대표 이미지" style="max-width: 100%; max-height: 380px; border-radius: 12px; object-fit: contain; box-shadow: 0 4px 16px rgba(0,0,0,0.06); border: 1px solid #E2E8F0;" />
</div>

<!-- 모달 본문 -->
<div id="modalColContent" style="font-size: 15px; color: #334155; line-height: 1.8; word-break: keep-all; white-space: pre-line; margin-bottom: 24px;">
칼럼 내용...
</div>

<!-- 칼럼 하단 질환 바로가기 & 전국 지점 안내 박스 -->
<div id="modalColActionBox" style="margin-bottom: 22px; padding: 18px; background: #F8FAFB; border: 1px solid #E2E8F0; border-radius: 10px; display: flex; gap: 12px; justify-content: center; align-items: center; flex-wrap: wrap;">
<a id="btnModalDiseaseLink" href="/tic-disorder/" style="display: inline-flex; align-items: center; gap: 6px; padding: 11px 22px; background: #008194; color: #FFFFFF; font-size: 14px; font-weight: 700; border-radius: 8px; text-decoration: none; box-shadow: 0 2px 8px rgba(0,129,148,0.2);">
<span id="txtModalDiseaseLink">틱장애 클리닉 바로가기</span> &gt;
</a>
<a href="https://www.healim.com" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; padding: 11px 22px; background: #FFFFFF; color: #0C4349; font-size: 14px; font-weight: 700; border-radius: 8px; text-decoration: none; border: 1.5px solid #0C4349;">
전국 16개 네트워크 지점 안내 &gt;
</a>
</div>

<!-- 모달 푸터 -->
<div style="display: flex; justify-content: flex-end;">
<button type="button" onclick="closeColumnModal()" style="padding: 10px 24px; background: #0C4349; color: #FFFFFF; font-size: 14px; font-weight: 700; border: none; border-radius: 8px; cursor: pointer;">
닫기
</button>
</div>
</div>
</div>

<!-- ============================================================== -->
<!-- 최고관리자 제목설정 칼럼 자동발행 모달                         -->
<!-- ============================================================== -->
<div id="customTitlePublishModal" style="display: none; position: fixed; inset: 0; background: rgba(12, 67, 73, 0.7); z-index: 100000; align-items: center; justify-content: center; backdrop-filter: blur(4px); padding: 16px;">
<div style="background: #FFFFFF; border-radius: 18px; width: 100%; max-width: 580px; box-shadow: 0 25px 50px rgba(0,0,0,0.25); border: 1px solid #CBD5E1; padding: 28px 24px;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; border-bottom: 1.5px solid #F1F5F9; padding-bottom: 12px;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="font-size: 20px;">✍️</span>
      <h3 style="font-size: 17px; font-weight: 800; color: #0C4349; margin: 0;">치료칼럼 제목설정 즉시발행</h3>
    </div>
    <button type="button" onclick="closeCustomTitlePublishModal()" style="background: none; border: none; font-size: 24px; cursor: pointer; color: #94A3B8; line-height: 1;">&times;</button>
  </div>
  <div style="margin-bottom: 16px;">
    <label style="display: block; font-size: 13px; font-weight: 700; color: #334155; margin-bottom: 6px;">발행 질환 선택</label>
    <select id="customPublishDisease" style="width: 100%; padding: 10px 12px; border: 1.5px solid #CBD5E1; border-radius: 8px; font-size: 14px; outline: none; background: #FFF; color: #1E293B; font-weight: 600;">
      <option value="틱장애">틱장애 (소아/성인 틱, 뚜렛)</option>
      <option value="공황장애">공황장애 (공황발작, 예기불안)</option>
      <option value="불면증">불면증 (수면장애, 입면장애)</option>
      <option value="자율신경실조증">자율신경실조증 (HRV 불균형, 신체화)</option>
      <option value="어지럼증">어지럼증 (기립성/심인성)</option>
      <option value="ADHD">ADHD (주의력결핍, 과잉행동)</option>
      <option value="강박증">강박증 (침습적 사고, 강박행동)</option>
      <option value="대인기피증">대인기피증 (사회공포증, 발표불안)</option>
      <option value="불안장애">불안장애 (범불안장애, 만성긴장)</option>
      <option value="다한증">다한증 (수족다한, 긴장성 발한)</option>
      <option value="갱년기">갱년기 (안면홍조, 야간발한)</option>
    </select>
  </div>
  <div style="margin-bottom: 18px;">
    <label style="display: block; font-size: 13px; font-weight: 700; color: #334155; margin-bottom: 6px;">발행할 칼럼 제목 입력</label>
    <input type="text" id="customPublishTitle" placeholder="예: [대구 틱장애] 참으라고 다그치면 왜 더 심해질까요?" style="width: 100%; padding: 10px 12px; border: 1.5px solid #CBD5E1; border-radius: 8px; font-size: 14px; outline: none; box-sizing: border-box;" />
  </div>
  <div style="display: flex; justify-content: flex-end; gap: 8px;">
    <button type="button" onclick="closeCustomTitlePublishModal()" style="padding: 10px 18px; background: #F1F5F9; color: #475569; font-size: 13.5px; font-weight: 700; border: none; border-radius: 8px; cursor: pointer;">취소</button>
    <button type="button" onclick="executeCustomTitlePublish()" style="padding: 10px 22px; background: #146369; color: #FFF; font-size: 13.5px; font-weight: 700; border: none; border-radius: 8px; cursor: pointer; box-shadow: 0 2px 6px rgba(20,99,105,0.25);">즉시 자동발행 🚀</button>
  </div>
</div>
</div>

<!-- ============================================================== -->
<!-- 최고관리자 칼럼 수동 작성/수정 모달                           -->
<!-- ============================================================== -->
<div id="columnWriteModal" style="display: none; position: fixed; inset: 0; background: rgba(12, 67, 73, 0.7); z-index: 100000; align-items: center; justify-content: center; backdrop-filter: blur(4px); padding: 16px;">
<div style="background: #FFFFFF; border-radius: 18px; width: 100%; max-width: 680px; max-height: 90vh; overflow-y: auto; box-shadow: 0 25px 50px rgba(0,0,0,0.25); border: 1px solid #CBD5E1; padding: 28px 24px;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; border-bottom: 1.5px solid #F1F5F9; padding-bottom: 12px;">
    <h3 id="writeColModalTitle" style="font-size: 18px; font-weight: 800; color: #0C4349; margin: 0;">✍️ 치료칼럼 작성 (최고관리자)</h3>
    <button type="button" onclick="closeColumnWriteModal()" style="background: none; border: none; font-size: 24px; cursor: pointer; color: #94A3B8; line-height: 1;">&times;</button>
  </div>
  <form id="columnWriteForm" onsubmit="handleSaveColumn(event)">
    <input type="hidden" id="writeColId" value="" />
    <div style="margin-bottom: 14px;">
      <label style="display: block; font-size: 13px; font-weight: 700; color: #334155; margin-bottom: 6px;">질환 분류</label>
      <select id="writeColCategory" style="width: 100%; padding: 10px; border: 1px solid #CBD5E1; border-radius: 8px; font-size: 14px;">
        <option value="틱장애">틱장애</option>
        <option value="공황장애">공황장애</option>
        <option value="불면증">불면증</option>
        <option value="자율신경실조증">자율신경실조증</option>
        <option value="어지럼증">어지럼증</option>
        <option value="ADHD">ADHD</option>
        <option value="강박증">강박증</option>
        <option value="대인기피증">대인기피증</option>
        <option value="불안장애">불안장애</option>
        <option value="다한증">다한증</option>
        <option value="갱년기">갱년기</option>
      </select>
    </div>
    <div style="margin-bottom: 14px;">
      <label style="display: block; font-size: 13px; font-weight: 700; color: #334155; margin-bottom: 6px;">칼럼 제목</label>
      <input type="text" id="writeColTitle" required placeholder="칼럼 제목을 입력하세요" style="width: 100%; padding: 10px; border: 1px solid #CBD5E1; border-radius: 8px; font-size: 14px;" />
    </div>
    <div style="margin-bottom: 14px;">
      <label style="display: block; font-size: 13px; font-weight: 700; color: #334155; margin-bottom: 6px;">요약문 (Summary)</label>
      <input type="text" id="writeColSummary" placeholder="칼럼 요약문" style="width: 100%; padding: 10px; border: 1px solid #CBD5E1; border-radius: 8px; font-size: 14px;" />
    </div>
    <div style="margin-bottom: 20px;">
      <label style="display: block; font-size: 13px; font-weight: 700; color: #334155; margin-bottom: 6px;">칼럼 본문 내용</label>
      <textarea id="writeColContent" required rows="10" placeholder="칼럼 본문 내용을 입력하세요" style="width: 100%; padding: 10px; border: 1px solid #CBD5E1; border-radius: 8px; font-size: 14px; line-height: 1.6;"></textarea>
    </div>
    <div style="display: flex; justify-content: flex-end; gap: 8px;">
      <button type="button" onclick="closeColumnWriteModal()" style="padding: 10px 18px; background: #F1F5F9; color: #475569; border: none; border-radius: 8px; font-size: 14px; font-weight: 700; cursor: pointer;">취소</button>
      <button type="submit" style="padding: 10px 22px; background: #146369; color: #FFFFFF; border: none; border-radius: 8px; font-size: 14px; font-weight: 700; cursor: pointer;">저장하기</button>
    </div>
  </form>
</div>
</div>

<script>
// 기본 등록 칼럼 데이터
var defaultColumnsData = [
  {
    "id": "col-auto-clim-1",
    "category": "갱년기",
    "title": "[대구 갱년기 치료] 안면홍조와 가슴 두근거림, 자율신경실조증과의 상관관계와 한의학적 진단",
    "author": "해아림한의원",
    "date": "2026.10.24",
    "views": 2799,
    "summary": "폐경기 전후 나타나는 극심한 안면홍조와 야간 발한, 심계항진(두근거림)의 신경학적 기전을 규명하고 시상하부 체온조절 중추와 자율신경계 균형을 회복하는 1:1 맞춤 한방 치료법을 안내합니다.",
    "content": "중년 여성에게 찾아오는 갱년기는 단순한 생리적 폐경 현상에 그치지 않고, 자율신경계와 뇌신경계 조절 시스템 전반에 걸친 급격한 변화를 수반합니다. 에스트로겐 농도가 급감하면서 뇌 시상하부의 체온조절 중추와 교감신경계가 과열되어 체온이 조금만 변해도 혈관이 급격히 확장되고 땀이 쏟아지는 안면홍조와 야간 발한이 발현됩니다. 가슴이 두근거리고 숨이 가쁜 심계항진 증상이 동반될 때 많은 환자분들이 심장 질환을 의심하지만, 심장 정밀 검사상 이상이 없다면 호르몬 결핍과 뇌 자율신경실조증이 결합된 갱년기 증후군으로 진단됩니다. 해아림한의원 대구본점에서는 신체 부담을 덜어주는 청열안신(淸熱安神) 한약과 침구 치료를 통해 과열된 교감신경을 진정시키고 자율신경 고유의 완충력을 회복시킵니다.",
    "img": "/images/columns/column_16_hormone.svg",
    "imgAlt": "[대구 갱년기 치료] 안면홍조와 가슴 두근거림, 자율신경실조증과의 상관관계와 한의학적 진단",
    "desc": "폐경기 전후 나타나는 극심한 안면홍조와 야간 발한, 심계항진(두근거림)의 신경학적 기전을 규명하고 시상하부 체온조절 중추와 자율신경계 균형을 회복하는 1:1 맞춤 한방 치료법을 안내합니다."
  },
  {
    "id": "col-auto-dys-7",
    "category": "자율신경실조증",
    "title": "[구미 자율신경실조증] 검사에는 이상 없다는데 왜 온몸이 아프고 어지러울까요? 자율신경 불균형(HRV 저하) 원인과 회복 로드맵",
    "author": "해아림한의원",
    "date": "2026.10.21",
    "views": 184,
    "summary": "[구미 자율신경실조증] 구미 송정동·형곡동 지역 환자분들을 위한 자율신경실조증 Q&A 안내 및 원인 치료 가이드입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n최근 구미 송정동과 형곡동 등 구미 주요 지역에서 자율신경실조증 증상으로 병원과 한의원을 알아보시다가 대구 수성구 범어역 해아림한의원 대구본점을 내원하시는 분들이 부쩍 늘고 있습니다.\n\n보건의료빅데이터 개방시스템에 따르면 스트레스와 자율신경 기능 이상으로 인한 신체화 증상 환자의 약 42%가 교감신경 과항진에 따른 심박변이도(HRV) 저하를 동반하며, 6개월 이상 지속될 경우 만성 어지럼증과 소화장애, 불면증으로 악화되는 비율이 58%에 이릅니다.\n\n[환자들이 가장 많이 묻는 핵심 질문과 답변]\nQ. 머리도 어지럽고 가슴도 답답하며 소화도 안 되는데, 종합병원 내과·신경과 검진에서는 모두 정상이라고 합니다. 꾀병일까요?\n\nA. 결코 꾀병이 아닙니다. 자율신경실조증은 일반 CT, MRI, 혈액검사로는 포착되지 않는 신경 기능적 이상입니다. 스트레스와 수면 부족으로 교감신경과 부교감신경의 시소 균형이 깨지면 신체 곳곳에 다발성 신체화 증상이 나타나므로, 심박변이도(HRV) 검사를 통한 자율신경계 정밀 진단이 필요합니다.\n\n만성 피로와 원인 불명의 통증, 소화기능 저하가 겹치는 자율신경실조증은 부신 피로와 코르티솔 분비 교란을 함께 수반합니다. 자율신경계를 지탱하는 면역력과 생체 항상성을 회복시키는 체계적인 한약 치료를 통해 무너진 신체 리듬을 정상화할 수 있습니다."
  },
  {
    "id": "col-auto-clim-2",
    "category": "갱년기",
    "title": "[갱년기 불면증과 우울증] 호르몬제 복용이 고민될 때, 뇌신경계 자생력을 깨우는 1:1 맞춤 한방 치료법",
    "author": "해아림한의원",
    "date": "2026.10.20",
    "views": 2736,
    "summary": "갱년기 여성의 70% 이상이 경험하는 수면장애와 감정 기복, 우울감의 신경전달물질 교란 원인을 분석하고 신체 부담을 덜어주며 뇌 자생력을 회복하는 한의학적 치료 원리를 제시합니다.",
    "content": "갱년기가 진행되면 밤에 쉽게 잠들지 못하는 입면장애와 자다가 식은땀이나 두근거림으로 깨어 다시 잠들지 못하는 수면유지장애가 빈발합니다. 여성호르몬은 기분을 조절하는 세로토닌과 수면을 유도하는 멜라토닌 합성에 관여하기 때문에, 호르몬 저하는 뇌 변연계의 정서 안정 회로를 약화시켜 사소한 일에도 눈물이 나고 불안해지는 갱년기 우울증을 촉발합니다. 합성 호르몬제 복용에 대한 우려나 부담이 있는 분들에게는 체내 음혈(陰血)을 보하고 심장의 화(火)를 내리는 가미소요산, 귀비탕 계열의 맞춤 한약이 효과적인 대안이 됩니다. 뇌 신경망의 피로도를 낮추고 자연스러운 수면 델타파를 유도하여 일상의 활력과 정서적 안정을 단계적으로 회복할 수 있습니다.",
    "img": "/images/columns/column_15_neurotransmitter.svg",
    "imgAlt": "[갱년기 불면증과 우울증] 호르몬제 복용이 고민될 때, 뇌신경계 자생력을 깨우는 1:1 맞춤 한방 치료법",
    "desc": "갱년기 여성의 70% 이상이 경험하는 수면장애와 감정 기복, 우울감의 신경전달물질 교란 원인을 분석하고 신체 부담을 덜어주며 뇌 자생력을 회복하는 한의학적 치료 원리를 제시합니다."
  },
  {
    "id": "col-auto-insomnia-8",
    "category": "불면증",
    "title": "[문경 상주 불면증] 수면제를 먹어도 자꾸 깨는데 어떻게 해야 하나요? 수면 구조 복원과 멜라토닌 생체 리듬 정상화 Q&A",
    "author": "해아림한의원",
    "date": "2026.10.20",
    "views": 141,
    "summary": "[문경 상주 불면증] 문경 점촌동·상주 남성동 지역 환자분들을 위한 만성 불면증 Q&A 안내 및 수면 리듬 회복 가이드입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n최근 문경 점촌동과 상주 남성동 등 경북 주요 지역에서 만성 불면증과 수면장애로 고통받으시며 대구 수성구 범어역 해아림한의원 대구본점을 직접 내원하시는 분들이 꾸준히 늘고 있습니다.\n\n국민건강보험공단 수면장애 통계에 따르면 진료 인원이 연간 70만 명을 넘어섰으며, 3개월 이상 지속되는 만성 불면증 환자의 약 68%가 주간 피로, 집중력 저하, 2차성 불안장애를 복합적으로 호소합니다. 수면제 장기 복용 환자의 약 45%는 약물 내성과 반동성 불면을 경험하므로 멜라토닌 분비와 체온 리듬을 정상화하는 원인 치료가 필수적입니다.\n\n[환자들이 가장 많이 묻는 핵심 질문과 답변]\nQ. 수면유도제를 먹고 잠들어도 2~3시간 만에 깨고 아침에 머리가 멍합니다. 수면의 질을 높이는 방법이 있을까요?\n\nA. 수면제는 뇌를 강제로 진정시키는 효과가 있지만, 깊은 수면(서파 수면 및 REM 수면)의 자연스러운 뇌파 주기를 형성하지 못합니다. 뇌의 송과체와 시상하부를 안정시켜 천연 멜라토닌 분비와 체온 하강 리듬을 유도하는 한방 처방을 병행해야 중간에 깨지 않고 개운한 숙면을 취할 수 있습니다.\n\n뇌 신경세포의 과각성을 식히고 심화(心火)를 내리는 산조인, 백자인, 원지 등의 한약재를 활용하여 약물 의존 없이 스스로 잠에 빠져들 수 있는 뇌 자생력을 키워드립니다."
  },
  {
    "id": "col-auto-panic-7",
    "category": "공황장애",
    "title": "[경주 공황장애] 운전 중 터널과 고속도로 다리 위에서 숨이 턱 막히던 광장공포증 동반 공황장애 치료사례",
    "author": "해아림한의원",
    "date": "2026.10.19",
    "views": 150,
    "summary": "[경주 공황장애] 경주 황남동·동천동 지역 환자분들을 위한 운전 중 광장공포증 동반 공황장애 한방 치료사례 분석 및 회복 로드맵입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n최근 경주 황남동과 동천동 등 경주 지역에서 운전 중 갑작스러운 호흡곤란과 공황발작 증세로 대구 수성구 해아림한의원 본점으로 내원하시는 환자분들이 늘고 있습니다.\n\n국민건강보험공단 발표에 따르면 공황장애 진료 인원은 최근 5년간 연평균 약 10.7%씩 증가하여 연간 20만 명을 돌파했습니다. 보건복지부 조사에 따르면 공황발작 환자의 78.4%가 첫 발작 시 극심한 심박수 급증과 질식감으로 심근경색을 의심해 응급실을 찾는 것으로 보고되었습니다.\n\n[환자들이 자주 묻는 질문과 임상 증상]\n“매일 출퇴근하던 터널 안에서 차가 막히는 순간, 심장이 터질 것처럼 뛰고 숨이 턱 막히면서 여기서 탈출하지 못하면 죽을 것 같았어요. 그 뒤로는 고속도로나 다리 위를 지나갈 수가 없습니다.” 40대 운전자 환자분의 전형적인 호소입니다. 터널, 고속도로, 엘리베이터 등 즉시 피하기 어려운 장소를 두려워하는 광장공포증이 동반된 상태였습니다.\n\n[신경해부학적 발병 메커니즘과 한의학 치료]\n뇌 편도체의 공포 경보 회로가 과열되어 가짜 위협 신호를 지속해서 발송하는 것이 공황발작의 본질입니다. 한방에서는 심담허겁(心膽虛怯)을 보하고 흉곽의 기체(氣滯)를 풀어주는 시호가용골모려탕과 침구 치료를 통해 교감신경의 폭주를 진정시키고 편도체의 공포 반응 역치를 안전하게 높여 운전 불안을 단계적으로 극복하도록 돕습니다."
  },
  {
    "id": "col-auto-tic-11",
    "category": "틱장애",
    "title": "[구미 틱장애] 단순 눈 깜빡임일까요, 틱장애일까요? 발생 4주 이내 조기 감별법과 가정 내 대처 가이드",
    "author": "해아림한의원",
    "date": "2026.10.19",
    "views": 152,
    "summary": "[구미 틱장애] 구미 원평동·인의동 지역 학부모님들을 위한 소아 틱장애 조기 감별법과 가정 내 올바른 대처 가이드입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n최근 구미 원평동과 인의동 등 구미 주요 지역에서 자녀의 눈 깜빡임과 헛기침 증상으로 대구 해아림한의원 본점으로 상담과 진료를 위해 발걸음해 주시는 부모님들이 많습니다.\n\n건강보험심사평가원 통계에 따르면 틱장애로 진료받은 인원은 연간 약 2만 3천 명에 달하며, 이 중 10대 학령기 아동·청소년이 전체의 약 75.3%를 차지합니다. 기저핵의 흥분성을 조기에 조절하지 않고 방치할 경우 만성화율이 약 30% 증가하므로 발생 4주 이내의 조기 감별이 매우 중요합니다.\n\n[환자들이 가장 많이 묻는 핵심 질문과 답변]\nQ. 아이가 눈을 심하게 깜빡거리는데 단순 알레르기 결막염인지 틱장애인지 어떻게 구별하나요?\n\nA. 안과적 원인이 없는데도 3~4주 이상 눈 깜빡임이나 코 찡긋거림, 헛기침이 반복된다면 초기 운동틱이나 음성틱을 의심해야 합니다. 특히 긴장하거나 피로할 때 증상이 심해지고, 잠잘 때는 사라지는 특징이 있습니다.\n\n[가정 내 대처 가이드]\n틱 증상을 발견했을 때 아이에게 \"하지 마라\", \"참아봐라\" 하며 지적하거나 눈치를 주는 것은 뇌신경 긴장도를 높여 증상을 오히려 악화시킵니다. 증상을 모른 척 자연스럽게 넘겨주시고, 디지털 미디어 시청을 줄이며 충분한 수면과 야외 활동을 유도해야 합니다. 한의학에서는 뇌 기저핵의 신호 억제 회로를 안정시키는 순한 한약 처방으로 틱 증상을 조기에 진정시킵니다."
  },
  {
    "id": "col-auto-soc-4",
    "category": "대인기피증",
    "title": "[대구 대인기피증] 사람 많은 곳에 서면 심장이 뛰고 식은땀이 나나요? 사회불안장애 원인과 한방 신경 안정 치료",
    "author": "해아림한의원",
    "date": "2026.10.19",
    "views": 185,
    "summary": "[대구 대인기피증] 대구 수성구 범어동 환자분들을 위한 대인기피증(사회불안장애) Q&A 안내 및 편도체 안정 한방 치료 가이드입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n최근 대구 황금동과 범어동 등 대구 주요 지역에서 대인기피증(사회불안장애) 증상으로 병원과 한의원을 알아보시다가 대구 수성구 범어역 해아림한의원 대구본점을 내원하시는 분들이 부쩍 늘고 있습니다.\n\n보건복지부 정신건강 실태조사에 따르면 사회불안장애(대인기피증)의 평생 유병률은 약 2.4%이며, 대중 앞 발표나 낯선 대면 상황에서 분당 심박수가 급격히 치솟는 자율신경 항진 증상을 동반하는 경우가 85%에 달합니다. 뇌 편도체의 공포 경보 회로 과각성을 조기에 진정시키지 않고 방치할 경우 대인 회피와 만성 우울, 사회적 고립으로 이어질 위험이 큽니다.\n\n[환자들이 가장 많이 묻는 핵심 질문과 답변]\nQ. 사람들 앞에만 서면 심장이 터질 것 같고 얼굴이 붉어지는데 치료될까요? 의지력으로 극복할 수 있을까요?\n\nA. 사회불안장애(대인기피증)는 단순한 소심함이나 의지력의 결함이 아니라, 뇌 편도체(Amygdala)의 과민성으로 인해 사회적 대면 상황을 생명의 위협처럼 인식하는 신경생물학적 질환입니다. 교감신경의 신체화 떨림을 진정시키고 편도체의 과도한 경보를 완화하는 한방 신경 안정 치료를 통해 충분히 당당하고 편안한 대인관계를 회복할 수 있습니다.\n\n과거 인간관계에서의 깊은 상처, 집단 따돌림, 배신, 지속적인 사회적 실패로 인해 사람과의 만남을 전면 거부하고 방 안에만 틀어박히는 상태를 대인 회피 및 사회적 고립이라 부릅니다. 이는 뇌의 사회적 보상 회로가 극도로 위축되고, 타인과의 상호작용을 오직 '고통과 위험'으로만 인식하도록 신경망이 재배선된 결과입니다. 억지로 사회로 밀어내면 공황 상태에 빠질 수 있으므로, 뇌신경계에 안전 감각을 회복시키고 무너진 기혈을 보충하는 점진적인 한의학 진료가 선행되어야 합니다.\n\n[신경해부학적 발병 메커니즘과 한의학 치료]\n사회적 고립 상태에서는 전두엽-측핵(Nucleus Accumbens)을 잇는 도파민 보상 회로의 기능이 심각하게 정체되고, 옥시토신과 세로토닌의 공급이 줄어들어 뇌가 만성적인 ‘사회적 통증’을 겪게 됩니다. 한의학에서는 심담(心膽)의 허약과 담미심규(痰迷心竅)를 다스리는 온담탕과 사역산 가감방을 적용하여 뇌 변연계의 과도한 긴장을 식히고 타인과의 소통에 필요한 내적 에너지를 회복시켜 드립니다."
  },
  {
    "id": "col-auto-adhd-5",
    "category": "ADHD",
    "title": "[영양 울진 ADHD] 산만한 우리 아이, 단순 성격일까요 ADHD일까요? 전두엽 실행 기능 평가와 집중력 회복 가이드",
    "author": "해아림한의원",
    "date": "2026.10.19",
    "views": 182,
    "summary": "[영양 울진 ADHD] 영양·울진 지역 학부모님들을 위한 소아 ADHD 전두엽 실행 기능 평가 및 집중력 회복 가이드입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n최근 영양과 울진 등 경북 원거리 지역에서도 자녀의 주의산만함과 정서 조절 문제로 대구 수성구 해아림한의원 본점으로 심층 상담과 진료를 위해 발걸음해 주시는 부모님들이 계십니다.\n\n교육부 및 국민건강보험공단 조사에 따르면 학령기 아동의 약 5~8%가 주의력결핍 과잉행동장애(ADHD) 경향을 보이며, 전두엽 억제 제어 회로의 성장이 지연될 경우 약 50%는 청소년기 및 성인기까지 잔여 증상이 지속됩니다.\n\n[환자들이 가장 많이 묻는 핵심 질문과 답변]\nQ. 아이가 수업 시간에 가만히 앉아있지 못하고 숙제나 준비물을 매일 잊어버립니다. 훈육의 문제인가요?\n\nA. ADHD는 훈육이나 아이 성격의 결함이 아니라, 뇌의 사령탑인 전두엽의 실행 기능 및 주의 집중 억제 회로의 성장이 2~3년가량 지연되어 나타나는 신경발달학적 상태입니다. 무조건 야단치기보다 전두엽 뇌 신경망을 활성화하는 두뇌훈련과 맞춤 한약 치료를 통해 스스로 조절하는 힘을 키워주어야 합니다.\n\n[두뇌 훈련과 한방 치료]\n뇌파 조절 훈련과 전두엽 신경망을 활성화하는 석창포, 원지, 백복신 등의 맑은 뇌신경 한약을 결합하여 충동 조절력과 학업 집중력을 차근차근 길러줍니다."
  },
  {
    "id": "col-auto-clim-3",
    "category": "갱년기",
    "title": "[갱년기 다발성 관절통과 식은땀] 음허화왕(陰虛火旺) 병리와 전신 신체화 증상 극복 가이드",
    "author": "해아림한의원",
    "date": "2026.10.15",
    "views": 2713,
    "summary": "손가락 마디, 무릎, 어깨 통증과 아침 뻣뻣함 등 갱년기 다발성 관절통의 한의학적 원인과 골밀도 관리 및 자생력 강화 방안을 상세히 안내합니다.",
    "content": "갱년기에는 안면홍조나 불면뿐 아니라 온몸의 뼈마디가 쑤시고 손가락이 굳는 관절통, 만성 피로를 호소하는 분들이 많습니다. 류마티스 내과나 정형외과 검사상 뚜렷한 염증이 없는데도 전신 통증이 이어지는 것은 한의학에서 말하는 음허화왕(陰虛火旺) 및 진액(津液) 고갈 상태와 맞닿아 있습니다. 체내 진액이 마르면 관절 연골과 인대의 윤활 기능이 떨어지고 근막이 수축되어 전신 근골격계 통증으로 발현됩니다. 해아림한의원 대구본점에서는 보음강화(補陰降火) 처방과 약침 요법을 통해 관절 주위 혈류 순환을 개선하고 신체 기력을 돋우어 일상생활의 활동성을 높이고 삶의 질을 단계별로 증진시킵니다.",
    "img": "/images/columns/column_3_temp_dysregulation.svg",
    "imgAlt": "[갱년기 다발성 관절통과 식은땀] 음허화왕(陰虛火旺) 병리와 전신 신체화 증상 극복 가이드",
    "desc": "손가락 마디, 무릎, 어깨 통증과 아침 뻣뻣함 등 갱년기 다발성 관절통의 한의학적 원인과 골밀도 관리 및 자생력 강화 방안을 상세히 안내합니다."
  },
  {
    "id": "col-auto-tic-4",
    "category": "틱장애",
    "title": "스마트폰 게임 후 코 찡긋거림과 어깨 들썩임이 심해진 9살 틱 증상 악화 사례",
    "author": "해아림한의원",
    "date": "2026.10.15",
    "views": 149,
    "summary": "방학 동안 장시간 스마트폰 유튜브와 게임에 노출된 후 전두엽 피로 누적으로 코 찡긋거림과 어깨 틱이 악화된 9세 남아의 디지털 디톡스 및 뇌기능 회복 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“방학 동안 스마트폰을 쥐여준 게 화근이었어요. 게임만 끝나면 코를 심하게 찡긋거리고 어깨를 들썩거립니다.”\n\n초등학교 2학년 남아의 어머님께서 자책 섞인 목소리로 전해주신 이야기입니다.\n\n스마트폰, 태블릿 PC, 유튜브 숏폼 영상의 빠른 시각적 프레임 전환과 강한 블루라이트는 성장기 아동의 뇌에 강렬한 도파민 자극을 줍니다. 이는 전두엽의 억제성 신경망에 극심한 피로를 유발하여, 기저핵이 근육의 미세한 움직임을 제어하지 못하게 만드는 대표적인 틱 악화 인자입니다.\n\n이 환아는 평소 하루 2~3시간씩 스마트폰 게임을 해왔고, 게임 화면을 볼 때는 집중하느라 잠잠하다가도 화면이 꺼지는 순간 어깨를 툭툭 치켜올리고 코를 찡긋거리는 증상이 폭발적으로 터져 나왔습니다.\n\n진료실에서 부모님께 아이를 나무라지 마실 것을 당부드리고, ‘시각적 자극 차단 및 두뇌 안정 프로토콜’을 가동했습니다.\n1. 전자기기 사용을 하루 30분 이내로 제한하고 야외 자연광 산책을 매일 40분씩 권장했습니다.\n2. 뇌의 과열을 식히고 기저핵 억제 회로의 신경전달물질 평형을 회복시키는 청뇌안신(淸腦安神) 맞춤 한약을 복용하도록 했습니다.\n3. 흉골과 목덜미의 근막 긴장을 이완시키는 침구 치료를 주 1~2회 시행했습니다.\n\n치료 3주 차부터 스마트폰 사용 제한에 적응하면서 찡긋거림이 완만해졌고, 7주 차에는 어깨 들썩임이 완전히 멈추며 안정적인 회복세에 도달했습니다."
  },
  {
    "id": "col-auto-panic-6",
    "category": "공황장애",
    "title": "[광장공포증 동반 공황] 밀폐 공간 공포 극복과 편도체 둔감화 인지 치료",
    "author": "해아림한의원",
    "date": "2026.10.15",
    "views": 131,
    "summary": "지하철, 만원 버스, 비행기, 엘리베이터 등 탈출이 어려운 밀폐 공간에서 발생하는 광장공포증의 신경 메커니즘과 단계별 탈감작 및 한의학적 심담 강화법을 안내합니다.",
    "content": "광장공포증(Agoraphobia)은 즉각적으로 탈출하기 어렵거나 도움을 받기 힘든 장소(지하철, 터널, 엘리베이터, 다리 위 등)에 들어갔을 때 공황발작이 일어날 것에 대한 극심한 공포로 인해 해당 장소를 철저히 회피하는 질환입니다. 공황장애 환자의 30~50%에서 광장공포증이 합병되며, 이는 사회적 활동 범위를 극도로 제한하여 결국 집 밖으로 나가지 못하는 고립 상태로 이어질 수 있습니다. 편도체의 조건화된 공포 기억을 지우는 체계적인 노출 요법과 담력을 길러주는 한의 진료가 병행되어야 합니다.\n\n[환자들이 자주 묻는 질문과 임상 증상]\n\"출퇴근길 지하철 문이 닫히는 순간 심장이 멎을 것 같아 중간에 뛰쳐나왔어요. 이제는 버스나 택시도 못 타겠고 외출 자체가 두렵습니다.\" 광장공포증으로 고통받는 환자들이 눈물로 호소하는 내용입니다. 초기에는 특정 장소(예: 지하철 안)에서만 발작을 겪었지만, 점차 터널, 영화관, 고속도로, 미용실, 백화점 등 '갇힌 느낌'을 주는 모든 공간으로 공포의 범위가 넓어집니다. 심해지면 집 근처 슈퍼마켓에 가는 것조차 공포스러워하며, 안정적으로 믿을 수 있는 보호자가 동행해야만 겨우 외출을 시도하는 심각한 의존 상태로 전락하게 됩니다.\n\n[신경해부학적 발병 메커니즘과 신경전달물질]\n신경생물학적으로 광장공포증은 뇌의 공포 조건화(Fear Conditioning)와 회피 학습의 고착화 현상입니다. 특정 폐쇄 공간에 갇혔을 때 느꼈던 신체적 고통(숨 막힘, 심계항진)이 편도체와 해마에 강력한 위험 신호로 각인됩니다. 이후 유사한 환경의 단서(어두운 조명, 닫힌 문, 많은 인파)만 마주쳐도 전두엽의 인지적 통제를 우회하여 편도체가 즉각 방어 반응을 격발합니다. 환자가 그 장소를 도망쳐 나오는 순간 공포감이 줄어드는 '부적 강화(Negative Reinforcement)'를 경험하게 되는데, 이로 인해 뇌신경망은 '회피만이 살길이다'라는 왜곡된 생존 법칙을 학습하여 공포 반응을 더욱 단단하게 굳히게 됩니다.\n\n[한의학적 원인 분석과 변증별 진료 방향]\n한의학에서는 광장공포증을 담기허(膽氣虛) 및 공즉기하(恐則氣下)의 관점에서 깊이 있게 다룹니다. 동의보감에서는 \"담(膽)은 결단(決斷)을 주관하는 장부로서, 담기가 허약해지면 사소한 일에도 늘 누군가 자기를 잡으러 올 것처럼 두려워하고 홀로 있지 못한다\"고 하였습니다. 밀폐 공간 공포는 담낭의 결단력과 용기가 쇠약해져 뇌신경계가 외부 환경의 압박을 견뎌내지 못하는 것입니다. 치료 시에는 담기를 크게 북돋우고 심장의 신기를 굳건히 다지는 인삼온담탕(仁蔘溫膽湯), 정간환(定癎丸) 가감방을 적용합니다. 원지, 석창포, 백자인 등으로 뇌신경을 맑게 깨우고 담력을 길러주어 공포 자극에 굴복하지 않는 뇌의 맷집을 키워줍니다.\n\n[체계적인 치료 단계 및 생활 속 자가 관리 가이드]\n1단계: 공포 위계 목록 작성 및 단계별 탈감작. 공포를 느끼는 상황을 1점부터 10점까지 순위를 매긴 후, 가장 쉬운 단계(엘리베이터 문 열고 서 있기)부터 매일 10분씩 노출하여 뇌를 둔감화합니다.\n2단계: 스마트폰이나 이어폰을 활용한 감각 차단 훈련. 대중교통 탑승 시 좋아하는 음악이나 라디오를 청취하여 청각과 주의 집중을 외부 환경으로부터 분리시킵니다.\n3단계: 안전 행동(Safety Behavior)의 점진적 폐지."
  },
  {
    "id": "col-auto-diz-3",
    "category": "어지럼증",
    "title": "[지속성 체위-지각 어지럼증(PPPD)] 시각-전정 감각 불일치와 신경망 재적응 훈련",
    "author": "해아림한의원",
    "date": "2026.10.14",
    "views": 167,
    "summary": "3개월 이상 매일 지속되는 비회전성 흔들림, 백화점이나 마트 등 시각적 자극에 악화되는 만성 기능성 어지럼증 PPPD의 뇌신경 기전과 한의학적 진료를 설명합니다.",
    "content": "이석증이나 전정신경염을 앓고 난 뒤 급성 어지럼증은 가라앉았는데도, 3개월 이상 매일같이 배를 탄 듯 둥둥 떠 있는 흔들림과 어지럼증이 지속되는 질환이 바로 '지속성 체위-지각 어지럼증(PPPD)'입니다. 대형 마트, 영화관, 사람이 붐비는 거리처럼 시각적 정보가 복잡한 환경에서 증상이 극심해지는 특징이 있습니다. 이는 전정기관의 기질적 손상이 아니라 뇌의 공간 지각 신경망이 급성 충격 이후 과거의 공포 기억에 갇혀 과민 상태를 유지하는 기능성 뇌신경 장애로 재활과 한약 치료가 결합되어야 합니다.\n\n[환자들이 자주 묻는 질문과 임상 증상]\n\"몇 달 전 이석증 치료를 받고 다 나았다는데, 그 뒤로 마트 진열대를 보거나 스마트폰 스크롤을 내릴 때마다 머리가 핑 돌고 어지러워서 쓰러질 것 같아요. 이석증이 재발한 건가요?\" PPPD 환자들이 가장 많이 호소하는 전형적인 증상 패턴입니다. 귀 검사를 다시 해도 이석은 제자리에 있고 신경 손상도 발견되지 않습니다. 그러나 환자는 서 있거나 걸을 때 지속적인 동요감(Rocking)을 느끼며, 컴퓨터 작업, 움직이는 물체 응시, 복잡한 패턴의 바닥을 볼 때 증상이 폭발적으로 악화되어 결국 외출을 포기하고 사회적으로 고립되는 비극을 겪게 됩니다.\n\n[신경해부학적 발병 메커니즘과 신경전달물질]\n신경생물학적으로 PPPD는 뇌의 '자세 제어 적응 실패'에 기인합니다. 급성 전정 질환을 겪을 당시 뇌는 평형을 지키기 위해 시각 정보에 극도로 의존하는 '시각 우세 보상 모드'를 가동합니다. 문제는 급성 손상이 회복된 후에도 뇌가 정상적인 전정 및 고유수용성 감각으로 되돌아가지 못하고 시각 정보에만 과도하게 매달리는 상태로 고착화된다는 점입니다. 대뇌 두정엽-도피질(Parieto-insular Vestibular Cortex)과 시각 피질 사이의 신호 균형이 깨지면서 사소한 시각적 움직임도 신체가 흔들리는 치명적 위협으로 오인하여 뇌신경계가 지속적인 어지럼증 착각을 만들어냅니다.\n\n[한의학적 원인 분석과 변증별 진료 방향]\n한의학에서는 PPPD를 심비양허(心脾兩虛) 및 간양상항(肝陽上亢)이 결합된 만성 현훈으로 규명합니다. 이석증이라는 급성 충격으로 인해 심장의 신기(神氣)가 손상되어 공포와 불안이 잠재되고, 오랜 투병으로 비위의 기혈이 고갈되어 뇌신경을 안정시키지 못하는 것입니다. 치료 시에는 평간잠양(平肝潛陽)과 보양심비(補養心脾)를 결합한 귀비탕(歸脾湯) 합 천마구등음(天麻鉤藤飮) 가감방을 적용합니다. 천마, 구기자, 조구등은 뇌혈류를 개선하고 시각 신경의 과민성을 진정시키며, 용골과 모려는 붕 떠 있는 기운을 단단하게 아래로 가라앉혀 공간 지각 능력을 정상화합니다.\n\n[체계적인 치료 단계 및 생활 속 자가 관리 가이드]\n1단계: 전정 재활 운동(Vestibular Rehabilitation)의 병행. 고개를 좌우로 천천히 흔들면서 눈은 정면의 한 점을 주시하는 안구 운동을 매일 아침저녁 5분씩 실천하여 뇌의 시각-전정 감각을 재조정합니다.\n2단계: 시각적 노출의 점진적 확대. 마트나 복잡한 환경을 무조건 피하지 말고, 선글라스를 착용하거나 챙이 있는 모자를 쓰고 5분부터 시작하여 노출 시간을 조금씩 늘려갑니다.\n3단계: 족부 감각 자극 훈련. 지압 매트 위를 맨발로 걷거나 균형 방석에 서 있는 연습을 통해 발바닥의 고유수용성 감각을 활성화하여 시각 의존도를 낮춥니다."
  },
  {
    "id": "col-auto-insomnia-1",
    "category": "불면증",
    "title": "자도 개운하지가 않고 새벽 3시마다 깨는 40대 직장인 만성 불면증 치료사례",
    "author": "해아림한의원",
    "date": "2026.10.13",
    "views": 146,
    "summary": "7~8시간을 누워있어도 깊이 잠들지 못하고 새벽마다 깨어 극심한 만성 피로에 시달리던 44세 직장인의 수면 리듬 및 자율신경 회복 한방 치료 사례입니다.",
    "content": "안녕하세요. 해아림 원장입니다.\n\n“잠은 분명히 잤는데 아침에 일어나면 하나도 개운하지 않아요.”\n\n진료실에서 이렇게 말씀하셨던 40대 직장인 환자분이 기억납니다.\n\n불면증이라고 하면 흔히 밤새 잠을 전혀 이루지 못하는 입면장애만 떠올리기 쉽습니다. 하지만 실제로는 잠드는 데 큰 어려움이 없는데도 새벽에 자꾸 깨거나(수면 유지장애), 충분한 시간을 잤는데도 피로가 전혀 풀리지 않아 힘들어하는 분들이 매우 많습니다.\n\n자도 개운하지 않은 것 역시 불면증의 명확한 한 형태입니다. \n\n잠의 연속성과 3단계 깊은 서파 수면(NREM) 및 렘수면(REM)의 균형이 깨지면, 8시간을 자더라도 뇌는 밤새 긴장 상태를 유지하여 신체와 뇌세포를 회복시키지 못합니다. \n\n이 환자분은 밤 11시에 잠들었으나 매일 새벽 3~4시만 되면 눈이 번쩍 떠졌고, 다시 잠들지 못한 채 뒤척이다 출근하여 낮 동안 멍한 상태와 소화불량을 겪고 계셨습니다.\n\n검사 결과 체내 코르티솔 분비 리듬이 야간에도 떨어지지 않는 ‘HPA축(시상하부-뇌하수체-부신) 과각성’ 상태였습니다. 한의학적으로는 심장의 열과 신장의 수기가 교류하지 못하는 ‘심신불교(心腎不交)’로 진단했습니다.\n\n치료는 야간 뇌파를 안정시키고 깊은 수면을 유도하는 산조인탕 및 가미소요산 가감 처방을 중심으로 진행되었습니다. 더불어 낮 시간 20분의 햇빛 쬐기와 수면 2시간 전 족욕 요법을 지도했습니다.\n\n치료 3주 차부터 새벽에 깨는 횟수가 주 1회로 줄었고, 6주 차에는 “아침에 눈을 떴을 때 몇 년 만에 머리가 맑고 개운한 느낌을 받았다”며 밝은 미소를 되찾으셨습니다."
  },
  {
    "id": "col-auto-tic-5",
    "category": "틱장애",
    "title": "1년 넘게 지속된 운동 틱과 음성 틱, 뚜렛증후군 진단 아동의 한방 치료사례",
    "author": "해아림한의원",
    "date": "2026.10.13",
    "views": 198,
    "summary": "다양한 운동 틱과 음성 틱이 1년 이상 지속되어 뚜렛증후군으로 진단받은 13살 환아의 장기적 뇌 자생력 회복과 학교생활 적응을 이끌어낸 임상 치료 사례를 전해드립니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“여러 병원을 전전했지만 1년이 넘도록 운동 틱과 음성 틱이 번갈아 나와요. 뚜렛증후군이라는 말을 듣고 눈앞이 캄캄했습니다.”\n\n13살 중학교 입학을 앞둔 남학생과 부모님께서 찾아오셨을 때의 호소입니다.\n\n의학적으로 다양한 운동 틱(눈 깜빡임, 고개 꺾기, 배 튕기기 등)과 하나 이상의 음성 틱(헛기침, 단어 반복, 괴성 등)이 1년 이상 지속될 때 ‘뚜렛증후군(Tourette Syndrome)’으로 분류합니다. 단순 틱에 비해 신경망의 취약성이 깊고 만성화된 상태이지만, 뚜렛 역시 뇌의 성장 발달 과정에서 충분히 조절 가능한 신경 질환입니다.\n\n이 환아는 눈 깜빡임에서 시작해 고개를 세게 젖히는 증상, 그리고 긴장하면 '탁, 탁' 소리를 내거나 본인이 한 말의 끝부분을 메아리처럼 되뇌는 반향어가 1년 2개월째 이어지고 있었습니다.\n\n한의학에서는 이를 단순한 일시적 풍(風)이 아닌, 체질적으로 정기가 허약하고 담음과 화열이 뇌수에 고착된 만성 병증으로 진단했습니다.\n이에 따라 장기적인 뇌 자생력 강화 관점에서 3단계 집중 치료를 설계했습니다.\n- 1단계: 급격한 근육 연축과 발성 충동을 줄이는 청간사화 한약 투여\n- 2단계: 뇌간과 척수 신경망의 물리적 압박을 풀어주는 상부 경추 정렬 추나 및 턱관절 교정\n- 3단계: 뇌신경 세포의 활성도를 균형 있게 유지하는 뇌기능 훈련과 정서적 지지 상담\n\n치료 3개월 경과 시 반향어와 큰 고개 꺾임이 현저히 줄었으며, 6개월 차에는 학교 수업 중 틱으로 인한 지적 없이 원만한 교우 관계를 유지하며 자신감을 되찾았습니다."
  },
  {
    "id": "col-auto-tic-10",
    "category": "틱장애",
    "title": "[두개경추 긴장과 틱] 상부 경추 정렬 및 추나요법을 통한 뇌신경 순환 개선",
    "author": "해아림한의원",
    "date": "2026.10.12",
    "views": 138,
    "summary": "상부 경추 아탈구와 두개골 긴장이 뇌척수액 순환 장애 및 뇌간 신경 압박을 유발하여 틱을 악화시키는 기전과 구조적 추나 교정 치료의 임상적 의의를 고찰합니다.",
    "content": "틱장애는 뇌의 신경전달물질 불균형뿐만 아니라, 두개골과 경추(목뼈)의 구조적 뒤틀림 및 근막의 과긴장과도 밀접한 상관관계를 맺고 있습니다. 특히 후두골과 경추 1·2번(환추와 축추)이 틀어지면 뇌간 부위의 혈류 장애와 뇌척수액의 순환 정체가 유발되어 뇌신경망의 흥분도가 가중됩니다. 한의학적 추나요법을 통해 경추의 구조적 정렬을 바로잡고 두개천골계의 긴장을 해소하면 중추신경계의 생리적 이완을 유도하여 만성 틱 증상 완화에 탁월한 시너지 효과를 창출할 수 있습니다.\n\n[환자들이 자주 묻는 질문과 임상 증상]\n\"아이가 틱 증상이 시작되면서부터 목을 자꾸 꺾고 어깨가 한쪽으로 기울어지며 거북목이 심해졌어요. 뼈나 자세 문제도 틱과 관련이 있나요?\" 임상에서 체형 불균형을 동반한 틱 환아들을 관찰할 때 매우 빈번하게 나타나는 질문입니다. 실제로 틱장애 환아들은 목을 앞뒤로 젖히거나 어깨를 으쓱하는 반복적인 동작으로 인해 경추 주변 인대와 근육이 만성적으로 굳어 있습니다. 턱관절의 부정교합이나 일자목, 척추측만증이 동반되면 뇌로 올라가는 혈관과 신경 통로가 물리적으로 압박을 받아 두통, 어지럼증, 집중력 저하가 가중되는 신체-신경 복합 장애로 발전하게 됩니다.\n\n[신경해부학적 발병 메커니즘과 신경전달물질]\n해부학적으로 상부 경추는 뇌간(Brainstem)이 척수로 이어지는 중추 통로이자 뇌로 혈액을 공급하는 추골동맥(Vertebral Artery)이 주행하는 핵심 길목입니다. 스마트폰 과사용이나 나쁜 자세로 인해 상부 경추의 아탈구가 발생하면 후두하근군이 단단하게 뭉치면서 경정맥과 림프관의 배액을 방해합니다. 이는 두개강 내압의 미세한 상승과 뇌척수액 순환 부전을 초래하여 뇌세포의 대사 노폐물 배출을 저해합니다. 뇌간의 망상체와 뇌신경 핵들이 만성적인 허혈과 압박을 받으면 중추신경계의 감각 민감도가 비정상적으로 치솟아 기저핵의 운동 억제 장애가 더욱 심화됩니다.\n\n[한의학적 원인 분석과 변증별 진료 방향]\n한의학에서는 인체의 구조와 기능을 하나로 묶어 파악하는 근골경락(筋骨經絡) 이론을 적용합니다. 독맥(督脈)과 족태양방광경(足太陽膀胱經)은 척추를 따라 뇌로 직결되는 경락인데, 척추가 비틀리면 경락의 기혈 순환이 단절되어 뇌풍(腦風)과 근맥연급(筋脈攣急)이 유발됩니다. 진료 시에는 두개천골요법(CST)과 정밀 경추 추나요법을 병행하여 후두하근과 상부 경추의 변위를 부드럽게 교정합니다. 아울러 뭉친 어혈을 풀고 근육을 자양하는 갈근, 작약, 모과 등이 포함된 갈근탕(葛根湯) 계열 한약을 투여하여 척추 주변 심부 근막의 탄력성을 회복시킵니다.\n\n[체계적인 치료 단계 및 생활 속 자가 관리 가이드]\n1단계: 모니터 및 스마트폰 높이 교정. 기기를 내려다보는 자세는 경추 1·2번에 최대 27kg의 하중을 가하므로, 화면을 눈높이에 맞추어 목뼈의 자연스러운 C자 커브를 유지합니다.\n2단계: 후두하근 부드러운 지압 스트레칭. 뒤통수 아래 움푹 들어간 부위에 양 엄지손가락을 대고 지그시 10초간 원을 그리며 마사지하여 두개골 기저부의 압력을 낮춥니다.\n3단계: 수면 시 낮은 경추 베개 사용. 높은 베개는 목뼈의 굴곡을 유발하여 수면 중 뇌혈류를 차단하므로 목덜미를 부드럽게 받쳐주는 기능성 경추 베개를 활용합니다.\n\n* 본 칼럼은 환자분들의 올바른 의학 정보 습득을 돕기 위해 작성되었으며, 개인의 체질과 증상에 따라 치료 반응과 예후는 차이가 있을 수 있으므로 전문 의료진과의 면밀한 상담을 권장합니다."
  },
  {
    "id": "col-auto-tic-3",
    "category": "틱장애",
    "title": "직장 업무 스트레스로 눈 주변 경련과 헛기침이 재발한 30대 성인 틱장애 치료사례",
    "author": "해아림한의원",
    "date": "2026.10.11",
    "views": 175,
    "summary": "어린 시절 완화되었던 틱이 직장 내 과중한 야근과 스트레스로 성인이 되어 재발한 34세 남성 직장인의 한의학적 신경안정 및 자율신경 조절 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“초등학교 때 잠깐 눈을 깜빡이다가 중학교 들어가면서 다 나은 줄 알았어요. 그런데 30대가 되어 회사 업무가 몰리니 다시 눈이 떨리고 헛기침이 멈추질 않습니다.”\n\n30대 중반의 직장인 남성분께서 마스크를 푹 눌러쓰고 진료실을 찾으셨습니다.\n\n흔히 틱장애는 소아청소년기에만 나타나는 질환으로 생각하기 쉽습니다. 하지만 어릴 적 틱 병력이 있던 성인이 극심한 업무 스트레스, 수면 부족, 과로를 겪으면 잠잠하던 기저핵 신경 회로가 재각성되면서 성인 틱장애로 재발하는 경우가 적지 않습니다.\n\n성인 틱은 사회생활과 직결되기 때문에 대인기피증, 우울감, 불안장애로 확장될 위험이 소아에 비해 훨씬 높습니다.\n\n이 환자분은 대기업 프로젝트 매니저로 6개월간 주 60시간 이상 근무하며 카페인을 하루 4잔씩 섭취해 오셨습니다. 회의 중 눈꺼풀이 씰룩거리고 목에서 헛기침이 터져 나와 프레젠테이션을 진행하기 힘들 지경이었습니다.\n\n검사 결과 뇌파 검사에서 전두엽의 세타파 과각성과 함께 심박변이도(HRV) 상 교감신경이 극도로 치솟아 있었습니다.\n\n치료는 자율신경 균형을 맞추고 간열(肝熱)을 내려 뇌피로를 해소하는 조위승청 한약 처방과 함께, 후두하근과 경추 정렬을 바로잡는 약침 및 추나 치료를 병행했습니다. 카페인을 디카페인이나 따뜻한 대추차로 대체하도록 수면 위생도 철저히 교정했습니다.\n\n치료 2개월 후 눈 주변 근육 경련이 80% 이상 소실되었고, 헛기침 빈도 역시 회의 중 크게 의식되지 않을 수준으로 회복되어 자신감 있게 업무에 복귀하셨습니다."
  },
  {
    "id": "col-auto-adhd-1",
    "category": "ADHD",
    "title": "업무 마감과 일정 관리가 늘 어려워 잦은 실수를 반복하던 30대 성인 ADHD 치료사례",
    "author": "해아림한의원",
    "date": "2026.10.11",
    "views": 148,
    "summary": "직장에서 잦은 분실, 시간 관리 실패, 집중력 저하로 고통받으며 단순 게으름으로 자책하던 33세 남성의 성인 ADHD 전두엽 기능 개선 한방 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“중요한 마감일을 번번이 놓치고, 회의 내용을 메모해 두고도 잊어버려요. 상사에게 매일 혼나다 보니 제가 그냥 무능하고 게으른 사람인 줄 알았습니다.”\n\n33세 회사원 남성분께서 털어놓으신 자책 섞인 고민입니다.\n\n성인 ADHD는 소아기처럼 교실을 뛰어다니는 신체적 과잉행동보다는, ‘실행기능(Executive Function)의 결함’으로 나타납니다. 계획 수립, 우선순위 결정, 시간 감각, 감정 조절, 작업 기억력 등 전두엽이 관장하는 고차원적 인지 기능이 도파민과 노르에피네프린 전달 불균형으로 인해 저하되는 것입니다.\n\n많은 성인 ADHD 환자들이 어릴 적 ‘주의가 산만하다’는 소리를 들었으나 치료받지 못하고 성인이 되어 사회생활에서 좌절을 겪으며 우울증이나 불안장애를 2차적으로 동반하게 됩니다.\n\n이 환자분은 집중력 검사(CAT)에서 작업기억력과 지속주의력이 또래 하위 5% 수준으로 나타났습니다.\n\n본원에서는 전두엽의 혈류를 촉진하고 뇌신경 각성도를 안정시키는 총명탕 가감방(원지, 석창포, 백복신 등)과 함께, 업무 체계화를 돕는 시각적 스케줄링 행동 요법을 처방했습니다.\n\n치료 8주 차부터 업무 실수가 획기적으로 줄어들었고, 12주 차에는 프로젝트를 기한 내 성공적으로 완수하며 상사의 신뢰를 되찾고 높은 자존감을 회복하셨습니다."
  },
  {
    "id": "col-auto-dys-1",
    "category": "자율신경실조증",
    "title": "부교감신경 항진증이 뭔가요 과도할때 나타나는 어지럼증과 식은땀 증상 사례",
    "author": "해아림한의원",
    "date": "2026.10.10",
    "views": 150,
    "summary": "교감신경 항진과 달리 부교감신경(미주신경)의 과도한 반응으로 심박수 저하, 식은땀, 어지럼증 및 실신 직전 증상을 겪었던 29세 환자의 자율신경 밸런스 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n자율신경 문제를 이야기하면 대부분 ‘교감신경이 너무 항진됐다’는 말을 먼저 떠올립니다.\n\n그런데 반대로 부교감신경이 과도하게 작용하는 것은 괜찮은지 궁금해하는 분들도 있습니다.\n\n“부교감신경은 몸을 편안하게 만드는 신경 아닌가요? 많이 활성화되면 좋은 것 아닌가요?”\n\n꼭 그렇지만은 않습니다. 자율신경은 어느 한쪽이 무조건 강하게 작용하는 것보다 상황에 따라 교감신경과 부교감신경이 적절하게 조절되는 것이 중요합니다.\n\n교감신경은 긴장하거나 활동해야 할 때 심박수를 높이고 몸을 각성시키는 가속페달이라면, 부교감신경은 휴식과 소화에 관여하며 속도를 낮추고 몸을 안정시키는 브레이크에 가깝습니다.\n\n하지만 브레이크도 상황에 맞게 작동해야 합니다. 부교감신경의 영향이 지나치게 강하게 나타나면 미주신경(Vagus Nerve) 반응이 과도해져 심박수가 느려지고 혈압이 뚝 떨어질 수 있습니다. 이때 갑자기 어지럽거나 눈앞이 캄캄해지고, 식은땀이 나며 메스꺼움을 느끼고 심하면 미주신경성 실신으로 이어지기도 합니다.\n\n내원하셨던 29세 여성 환자분 역시 반복되는 어지럼증 때문에 찾아오셨습니다.\n\n평소에는 별다른 문제가 없었지만 피곤하거나 긴장한 날, 지하철에 오래 서 있을 때면 갑자기 속이 메스껍고 식은땀이 나면서 다리에 힘이 풀리는 일이 반복됐다고 합니다. 심할 때는 눈앞이 하얘지며 쓰러질 것 같은 느낌까지 들었습니다. 처음에는 빈혈이나 체력 저하로 생각했지만 빈혈 검사에서는 아무 이상이 없었습니다.\n\n이 환자분의 경우 자율신경계 반응 검사(HRV)에서 교감신경의 탄력성이 저하되고 미주신경 반응이 비정상적으로 과민하게 튀는 자율신경 불균형이 확인되었습니다.\n\n치료는 부교감신경을 억지로 낮추는 것이 아니라, 전신 기력을 북돋우고 혈관의 긴장도를 정상화하는 보중익기탕 가감 한약과 척추 자율신경절 침 치료를 적용했습니다.\n\n치료 6주 후 장시간 서 있어도 핑 도는 어지럼증과 식은땀이 완전히 사라졌으며, 대중교통 이용에 대한 불안감도 말끔히 해소되었습니다."
  },
  {
    "id": "col-auto-tic-7",
    "category": "틱장애",
    "title": "수업 중 산만하고 집중 못 하면서 소리 내던 틱장애와 ADHD 동반 아동 치료사례",
    "author": "해아림한의원",
    "date": "2026.10.09",
    "views": 180,
    "summary": "주의력 결핍 과잉행동(ADHD)과 함께 음성 틱이 결합되어 학교생활에서 큰 어려움을 겪던 10세 남아의 전두엽 집행기능 및 뇌기능 통합 개선 한방 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“수업 시간에 5분도 가만히 못 앉아있고 몸을 비비 꼬더니, 이제는 책상을 치며 헛기침 소리까지 내요.”\n\n10살 초등학교 3학년 아이의 학교생활 통지표를 들고 오신 부모님의 사연입니다.\n\n임상에서 틱장애 아동의 약 30~50%는 ADHD(주의력결핍 과잉행동장애)를 함께 앓고 있습니다. 이는 두 질환 모두 전두엽과 기저핵을 잇는 전두엽-선조체 회로의 기능 이상이라는 공통된 신경학적 뿌리를 공유하기 때문입니다.\n\nADHD 증상으로 인해 충동성이 높고 주의가 산만한 상태에서 틱 증상까지 겹치면 학교에서 지적을 받는 일이 잦아져 자존감이 급격히 하락합니다.\n\n내원한 환아는 과제 집중 시간이 5분을 넘기지 못했고, 충동을 억제하지 못해 친구의 말을 끊거나 불쑥 자리에서 일어났으며, 이때마다 ‘켁켁’거리는 음성 틱이 동반되었습니다.\n\n치료는 전두엽의 인지 조절력을 높이고 기저핵의 흥분을 가라앉히는 ‘투 트랙(Two-Track) 뇌기능 통합 한약’으로 시작되었습니다. 원지와 석창포, 용안육 등 뇌혈류를 촉진하고 집중력을 돕는 약재와 함께 과도한 신체 열감을 내리는 한약재를 정밀하게 조합했습니다.\n\n치료 8주 차에 접어들며 수업 중 자리에서 일어나는 돌발 행동이 현저히 줄었고, 12주 차에는 헛기침 틱이 거의 사라지며 숙제 집중 시간이 30분 이상으로 늘어나는 고무적인 변화를 보였습니다."
  },
  {
    "id": "col-auto-panic-1",
    "category": "공황장애",
    "title": "지하철 출근길 갑자기 숨이 턱 막히고 쓰러질 것 같았던 30대 공황장애 치료사례",
    "author": "해아림한의원",
    "date": "2026.10.09",
    "views": 138,
    "summary": "만원 지하철 안에서 갑작스러운 과호흡과 심계항진, 죽을 것 같은 공포를 겪고 대중교통 이용을 두려워하던 32세 여성 직장인의 편도체 안정 한방 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“출근길 2호선 만원 지하철 문이 닫히는 순간, 갑자기 숨이 턱 막히고 심장이 터질 것처럼 뛰었어요. 당장 쓰러져 죽을 것 같아 다음 역에서 기어 나오듯 내렸습니다.”\n\n32세 여성 직장인 환자분께서 첫 진료실에 들어서며 떨리는 목소리로 말씀하셨습니다.\n\n공황장애(Panic Disorder)는 특별한 신체적 이상이나 외부 위험이 없는 상황에서 갑작스럽게 극심한 공포와 함께 호흡곤란, 심계항진, 어지럼증 등이 발생하는 급성 신경정신과 질환입니다. 뇌의 공포 중추인 편도체(Amygdala)가 사소한 답답함을 생명을 위협하는 치명적 신호로 오작동하여 비상경보를 잘못 울리는 ‘화재경보기 오작동’ 현상입니다.\n\n이 환자분은 응급실에 실려가 심전도, 피검사, 뇌 MRI 검사를 받았지만 “모두 정상이며 신경성 스트레스”라는 소견만 받았습니다. 그러나 이후 지하철이나 버스를 탈 엄두를 내지 못하고 택시로만 이동하는 심각한 회피 반응을 보이고 계셨습니다.\n\n한의학에서는 이를 극도의 긴장으로 심장의 기운이 고갈되고 담(膽)이 허약해진 ‘심담허겁(心膽虛怯)’과 심화(心火)의 상충으로 진단했습니다.\n\n치료 과정은 단계별로 접근했습니다:\n1. 편도체의 과각성을 진정시키고 심박수를 안정시키는 귀비탕 및 온담탕 가감 한약 처방\n2. 급격한 불안 발작이 올 때 자율신경을 30초 안에 진정시키는 ‘생리적 한숨(Physiological Sigh)’ 호흡법 지도\n3. 흉골과 목 주변 근육을 풀어 호흡 공간을 확보하는 흉곽 이완 약침 치료\n\n치료 4주 차에 택시 대신 비교적 한산한 시간대의 버스를 탈 수 있게 되었고, 8주 차에는 출퇴근 시간대 지하철 탑승에 성공하며 공황발작의 공포에서 완전히 벗어나셨습니다."
  },
  {
    "id": "col-auto-dys-3",
    "category": "자율신경실조증",
    "title": "식후 가슴 두근거림과 원인 모를 만성 소화불량을 겪던 30대 미주신경 실조증 치료사례",
    "author": "해아림한의원",
    "date": "2026.10.08",
    "views": 175,
    "summary": "위내시경 검사는 정상인데도 밥만 먹으면 심장이 뛰고 체기, 헛구역질로 고통받던 35세 남성의 위장-자율신경계 연관 치료 사례를 소개합니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“식사만 하고 나면 심장이 쿵쾅거리고 숨이 가빠요. 위내시경을 받아봐도 가벼운 위염 말고는 깨끗하다는데 왜 이러는 걸까요?”\n\n35세 남성 직장인 환자분의 호소입니다.\n\n위장관은 ‘제2의 뇌’라 불릴 만큼 방대한 자율신경망(장관신경계, ENS)으로 덮여 있습니다. 식사를 하면 소화를 돕기 위해 부교감신경(미주신경)이 활성화되어 혈류가 소화기로 집중되어야 합니다. 그러나 자율신경 기능이 저하되면 위장에 혈류가 제대로 공급되지 못하고, 이에 반응하여 교감신경이 보상적으로 항진되면서 식후 심계항진과 극심한 더부룩함이 유발됩니다.\n\n이 환자분은 식사 후 두근거림이 두려워 식사량을 극단적으로 줄이다 보니 체중이 6kg이나 감소한 상태였습니다.\n\n한의학에서는 비위(脾胃)의 기운이 뭉치고 담음이 흉격을 막은 ‘담적병(痰積病) 및 심비불화’로 진단했습니다.\n\n치료는 위장 운동성을 정상화하고 자율신경 긴장을 풀어주는 향사평위산 및 분심기음 가감 한약을 처방하고, 복부 중완혈과 내관혈에 침구 치료를 진행했습니다.\n\n치료 3주 차부터 식후 두근거림이 절반으로 경감되었고, 6주 차에는 정상적인 식사를 마친 후에도 편안한 소화와 맥박 안정을 되찾았습니다."
  },
  {
    "id": "col-auto-tic-1",
    "category": "틱장애",
    "title": "11살 아이의 킁킁 거리는 음성틱 장애 치료 사례",
    "author": "해아림한의원",
    "date": "2026.10.07",
    "views": 121,
    "summary": "11살 초등학생 아이가 헛기침과 코를 킁킁거리는 증상으로 내원하여 비염 오인을 바로잡고 기저핵 억제 회로 불균형을 한의학적으로 조절하여 호전된 실제 임상 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“처음에는 단순한 환절기 감기나 비염인 줄 알았어요. 그런데 이비인후과 약을 먹여도 코를 킁킁거리고 헛기침을 계속해요.”\n\n11살 자녀를 둔 부모님께서 걱정 가득한 얼굴로 진료실을 찾아오셨던 기억이 납니다.\n\n아이들의 틱장애는 대부분 눈 깜빡임이나 코 찡긋거림 같은 단순 운동 틱으로 시작하지만, ‘킁킁’, ‘음음’, ‘켁켁’ 소리를 내는 음성 틱이 결합되면 부모님의 불안감은 크게 높아집니다. 특히 교실에서 수업을 들을 때 주변 친구들의 시선을 받게 되면서 아이 스스로도 위축되고 수치심을 느끼기 쉽습니다.\n\n많은 분들이 ‘아이가 마음만 먹으면 소리를 참을 수 있지 않나’ 생각하시지만, 틱은 절대 고의로 내는 소리가 아닙니다. \n\n뇌의 대뇌피질과 기저핵(Basal Ganglia), 시상을 잇는 신경 억제 회로(CSTC)의 균형이 일시적으로 흔들리면서, 불필요한 음성 신호가 필터링되지 못하고 튀어나오는 생리적 현상입니다. 비유하자면 자동차의 브레이크 패드가 닳아 신호 대기 중에 차가 덜컥 앞으로 나가는 것과 비슷합니다.\n\n내원했던 11살 환아는 3개월 전 학년이 바뀌고 학업량이 늘어나면서 증상이 시작되었습니다. 수업 시간이나 학원에서 긴장할 때면 1분에 대여섯 번씩 ‘킁- 킁-’ 소리를 냈고, 집에서 부모님이 “소리 좀 그만 내라”고 지적하면 10~20분간 참다가 방에 들어가 더욱 폭발적으로 기침을 쏟아내는 양상을 보였습니다.\n\n진료실에서 뇌기능 검사와 스트레스 검사를 진행해보니, 좌우 전두엽 활성도의 불균형과 함께 교감신경계가 과도하게 흥분되어 있었습니다. 한의학적으로는 스트레스로 인해 상초(上焦)에 열이 몰리고 심장과 담이 약해진 ‘간기울결(肝氣鬱結) 및 심담허겁(心膽虛怯)’ 상태였습니다.\n\n치료는 크게 세 가지 단계로 집중 진행되었습니다.\n첫째, 뇌신경계의 흥분을 가라앉히고 도파민 수용체의 과민도를 낮추는 천마, 조구등, 석창포 중심의 맞춤 한약을 처방했습니다.\n둘째, 상부 경추와 두개골 주변의 근육 긴장을 풀어주어 뇌혈류와 뇌척수액 순환을 돕는 경추 추나요법을 주 1회 병행했습니다.\n셋째, 부모님께 ‘아이의 소리에 반응하지 않는 무관심 요법’과 학교 선생님과의 협조를 통해 교실 내 지적을 차단하는 환경적 지지를 안내해 드렸습니다.\n\n치료를 시작한 지 4주 차에 접어들며 긴장 시 소리를 내는 빈도가 절반 이하로 줄어들었고, 8주 차에는 수업 중 킁킁거림이 거의 사라져 아이가 한층 밝은 표정으로 학교생활에 집중할 수 있게 되었습니다.\n\n음성 틱은 단순한 습관이나 목 질환이 아닙니다. 아이가 스트레스를 받거나 뇌가 피로할 때 보내는 신호이므로, 혼내거나 참게 하기보다는 뇌신경의 억제 조절력을 키워주는 체계적인 진료를 시작하는 것이 바람직합니다."
  },
  {
    "id": "col-auto-tic-2",
    "category": "틱장애",
    "title": "음음 소리와 고개 젖힘이 함께 나타난 초등 복합 음성 틱장애 치료 사례",
    "author": "해아림한의원",
    "date": "2026.10.07",
    "views": 124,
    "summary": "눈 깜빡임에서 시작해 목을 홱 젖히고 '음음' 소리를 내던 10살 여아의 복합 틱장애를 도파민 수용체 과민도 안정과 심신 이완 한약으로 다스린 치료 사례를 소개합니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“아이 목이 부러질 것처럼 뒤로 꺾이더니 이제는 목소리까지 크게 내요. 뚜렛증후군으로 번지는 건 아닐까요?”\n\n10살 초등학교 여아의 어머님께서 눈물을 글썽이며 털어놓으신 사연입니다.\n\n처음에는 단순히 눈을 자주 깜빡이는 가벼운 틱이었지만, 6개월이 지나면서 갑자기 목을 뒤로 홱 젖히는 큰 움직임과 함께 ‘음-음-’, ‘악’ 하는 고음의 복합 음성 틱이 동시에 나타나기 시작했습니다. 이처럼 운동 틱과 음성 틱이 겹쳐 나타나면 부모님은 뚜렛증후군을 크게 걱정하시게 됩니다.\n\n복합 음성 틱은 대뇌 기저핵 내 선조체(Striatum)의 도파민 과민 반응과 변연계의 정서적 불안이 결합되었을 때 급격히 확산됩니다. \n\n내원했던 이 환아는 교우 관계에서 따돌림에 대한 두려움이 컸고, 시험이나 발표 전날이면 증상이 2~3배 이상 심해졌습니다. 소리를 내지 않으려고 입술을 꽉 깨물다 보니 입안이 헐어있는 상태였습니다.\n\n한의학에서는 풍열(風熱)이 상충하고 담음(痰飮)이 뇌신경 회로를 막아 나타나는 증상으로 진단하여, 체내 화열을 내리고 기혈 순환을 돕는 한약과 미세 뜸 요법을 결합하여 처방했습니다.\n\n치료 6주 차에 목을 젖히는 큰 근육 움직임이 부드러워졌고, 10주 차에는 ‘음음’ 소리의 간격이 넓어지며 일상생활에서 타인의 눈에 띄지 않을 정도로 안정되었습니다. \n\n복합 틱이라 하더라도 조기에 신경망의 과흥분을 차단하고 정서적 긴장을 풀어주면 뇌 자생력을 통해 충분히 안정적인 호전을 기대할 수 있습니다."
  },
  {
    "id": "col-auto-tic-6",
    "category": "틱장애",
    "title": "새 학기 반 배정 후 긴장감으로 목 꺾임과 음음 소리가 심해진 12살 틱장애 치료 사례",
    "author": "해아림한의원",
    "date": "2026.10.06",
    "views": 173,
    "summary": "새 학년 진학 및 낯선 환경에 대한 심리적 압박감으로 인해 목 꺾임과 음음 소리 틱이 급격히 심해졌던 초등 5학년 환아의 심신 안정 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“새 학기가 시작되고 담임 선생님이 엄격하시다는 이야기를 듣더니, 아이가 목을 꺾고 음음 소리를 내기 시작했어요.”\n\n매년 3~4월 새 학기가 되면 진료실에 틱 증상 악화로 찾아오는 아이들이 평소보다 2배 이상 늘어납니다.\n\n새로운 교실, 낯선 친구들, 엄격한 규칙, 학습량 증가 등 환경적 변화는 아이의 미성숙한 뇌에 큰 심리적 부담으로 작용합니다. 이러한 긴장이 편도체를 자극하면 기저핵의 도파민 회로가 불균형을 일으켜 잠복해 있던 틱이 튀어나오게 됩니다.\n\n내원한 12살 여아는 평소에도 예민하고 완벽주의 성향을 가진 아이였습니다. 5학년 진학 후 반 배정에 적응하지 못해 밤마다 뒤척였고, 일주일 만에 고개를 옆으로 꺾으며 ‘음-음-’ 소리를 1분에 수회씩 내기 시작했습니다.\n\n이처럼 심리적 유발 요인이 뚜렷한 틱장애는 아이의 마음을 편안하게 해주는 것과 동시에 뇌신경계의 과민성을 빠르게 가라앉혀 주어야 합니다.\n\n본원에서는 신경 안정과 불안 완화에 탁월한 시호가용골모려탕 가감방을 처방하고, 호흡 훈련과 자율신경 조절 침 치료를 병행했습니다. 부모님께는 성적이나 숙제에 대한 잔소리를 일체 멈추고 아이의 감정을 온전히 수용해 주는 대화법을 코칭했습니다.\n\n치료 4주 만에 목 꺾임이 부드럽게 완화되었고, 6주 차에는 학교생활에 완전히 적응하며 음음 소리 역시 소실되었습니다."
  },
  {
    "id": "col-auto-tic-8",
    "category": "틱장애",
    "title": "[소아 틱장애 부모 가이드] 지적과 억압의 위험성과 정서적 안정 환경 구축법",
    "author": "해아림한의원",
    "date": "2026.10.05",
    "views": 153,
    "summary": "아이의 틱 증상을 참게 하거나 야단치는 행위가 초래하는 신경학적 반동 악화와 자존감 손상을 짚어보고, 가족 구성원이 실천해야 할 긍정적 지지 원칙을 안내합니다.",
    "content": "틱장애 환아를 둔 가정에서 가장 경계해야 할 태도는 \"그것 좀 하지 마라\", \"참아봐라\" 하며 증상을 지적하거나 통제하려는 시도입니다. 틱은 본인의 의지로 조절할 수 없는 불수의적인 신경계 증상이므로, 부모의 반복적인 지적은 아이에게 극도의 죄책감과 긴장감을 심어주어 신경 회로의 흥분도를 폭발적으로 상승시킵니다. 증상에 대해 일체 언급하지 않는 '현명한 무관심'을 견지하면서 아이의 내면적 스트레스 원인을 살피는 정서적 지지가 치료의 핵심 출발점입니다.\n\n[환자들이 자주 묻는 질문과 임상 증상]\n\"참으라고 하면 5분 정도는 참는데, 그러다 보면 아이가 더 불안해하고 결국 더 크게 소리를 질러요. 왜 참으면 안 되나요?\" 부모님들이 상담 과정에서 가장 많이 토로하는 의문점입니다. 틱 증상은 겉보기에 근육의 동작이지만, 내면적으로는 특정 신체 부위가 타는 듯 답답하거나 간지러운 전조 감각 충동이 뇌에서 발생하여 이를 해소하기 위해 동작을 취하는 것입니다. 따라서 억지로 참는 것은 재채기를 강제로 막는 것과 같아서, 뇌의 피질하 영역에 막대한 스트레스와 신경 긴장이 응축되다가 결국 둑이 터지듯 더 심한 틱 증상으로 터져 나오게 됩니다.\n\n[신경해부학적 발병 메커니즘과 신경전달물질]\n신경생물학적으로 부모의 엄격한 훈육과 지적은 환아의 편도체(Amygdala)를 극도로 흥분시켜 비상경보 시스템을 상시 가동하게 만듭니다. 편도체의 과각성은 뇌간의 노르아드레날린 신경계를 흥분시키고 혈중 코르티솔 수치를 급격히 밀어 올립니다. 만성적인 신경 긴장은 전두엽의 전대상피질(Anterior Cingulate Cortex)을 과부하시켜 사소한 감각 자극도 고통스러운 충동으로 왜곡 인식하게 만듭니다. 결국 '참아야 한다'는 인지적 스트레스 자체가 기저핵의 운동 억제 임계치를 무너뜨려 틱 동작을 더욱 빈번하게 유발하는 신경학적 역설을 낳게 됩니다.\n\n[한의학적 원인 분석과 변증별 진료 방향]\n한의학에서는 가족 내 긴장 갈등으로 인한 틱 악화를 칠정상(七情傷) 중 공즉기하(恐則氣下) 및 노즉기상(怒則氣上)의 병리로 해석합니다. 부모의 꾸중으로 공포심과 불안을 느끼면 신장과 방광의 기운이 꺾이고, 억울한 감정과 분노를 속으로 삭이면 간(肝)의 기운이 뭉쳐 간울화화(肝鬱化火)를 일으킵니다. 치료 시에는 울체된 간기를 풀고 마음의 응어리를 달래주는 가미소요산(加味逍遙散)이나 귀비탕(歸脾湯) 등을 응용하여 불안에 떠는 신경계를 감싸 안아줍니다. 환아의 체질에 맞춘 한약은 부모와의 갈등으로 지친 심신을 보듬고 신경 자생력을 길러줍니다.\n\n[체계적인 치료 단계 및 생활 속 자가 관리 가이드]\n1단계: 틱 증상에 대한 눈맞춤과 언급 일체 금지. 아이가 눈을 깜빡이거나 소리를 낼 때 쳐다보거나 한숨을 쉬지 말고 평소와 다름없이 자연스러운 일상을 이어갑니다.\n2단계: 온 가족의 '행동 규칙 일원화'. 부모, 조부모, 형제 등 모든 가족 구성원이 아이의 틱에 대해 지적하거나 놀리지 않도록 사전 가족회의를 통해 합의합니다.\n3단계: 매일 20분의 무조건적 공감 놀이. 학습이나 훈육의 목적을 완전히 배제하고, 아이가 원하는 놀이를 부모가 온전히 따라주며 친밀감을 쌓습니다.\n\n* 본 칼럼은 환자분들의 올바른 의학 정보 습득을 돕기 위해 작성되었으며, 개인의 체질과 증상에 따라 치료 반응과 예후는 차이가 있을 수 있으므로 전문 의료진과의 면밀한 상담을 권장합니다."
  },
  {
    "id": "col-auto-tic-9",
    "category": "틱장애",
    "title": "[복합 음성 틱의 신경 기전] 언어 표현형 틱의 사회적 위축 완화와 심신 안정 한약 요법",
    "author": "해아림한의원",
    "date": "2026.10.05",
    "views": 198,
    "summary": "상황에 맞지 않는 단어나 욕설, 반향어를 내뱉는 복합 음성 틱 환아의 뇌신경 언어 중추와 변연계 상호작용을 분석하고 사회적 자존감 회복을 위한 한의학적 진료를 제시합니다.",
    "content": "복합 음성 틱(Complex Vocal Tic)은 단순한 헛기침이나 비음 수준을 넘어 상황에 맞지 않는 문장이나 외설어(Coprolalia), 남의 말을 따라 하는 반향어(Echolalia)를 불수의적으로 내뱉는 증상입니다. 이는 언어 표현을 관장하는 전두엽 언어 영역과 감정 억제 중추인 변연계 사이의 소통 네트워크에 심각한 신경 신호 오류가 발생했음을 의미합니다. 주변의 오해와 비난으로 인해 우울증과 대인기피증으로 이어지기 쉬우므로, 뇌신경 전달 신호를 안정화하고 정서적 면역력을 강화하는 심신 통합 한약 치료가 시급합니다.\n\n[환자들이 자주 묻는 질문과 임상 증상]\n\"아이가 갑자기 욕설을 하거나 TV에 나오는 단어를 이상한 억양으로 쉬지 않고 따라 해서 밖에 데리고 나가기가 무서워요.\" 복합 음성 틱을 겪는 자녀를 둔 부모님들의 절박한 호소입니다. 아이 본인도 그 말이 나쁜 말이고 주변 사람들에게 피해를 준다는 사실을 명백히 알고 있습니다. 하지만 성대와 인후부에서 차오르는 형언할 수 없는 답답함과 폭발할 것 같은 충동 때문에 스스로의 의지를 꺾고 소리를 튀겨낼 수밖에 없습니다. 대중교통이나 조용한 도서관, 극장 등 공공장소에 갈 때 증상이 더욱 격화되어 환아와 가족 모두 극심한 고립감에 빠지게 됩니다.\n\n[신경해부학적 발병 메커니즘과 신경전달물질]\n신경생물학적으로 복합 음성 틱은 브로카 영역(Broca's Area)을 포함한 전두엽 피질과 보조운동영역(SMA), 변연계의 편도체 및 기저핵 루프의 광범위한 탈억제에 기인합니다. 특히 도파민성 신경망의 과활성화와 더불어 억제성 회로의 신경가소성 결함이 심화되어 있습니다. 사회적으로 금기시되는 단어나 감정적인 어휘는 뇌의 변연계에 무의식적으로 저장되어 있는데, 정상적인 뇌에서는 전두엽의 강력한 억제 필터를 통해 통제되지만, 복합 음성 틱 환아는 이 필터링 시스템이 붕괴되어 변연계의 원시적 충동이 여과 없이 구강 발성으로 방출되는 것입니다.\n\n[한의학적 원인 분석과 변증별 진료 방향]\n한의학에서는 복합 음성 틱을 심담열성(心膽熱盛)과 풍담폐규(風痰蔽竅)로 진단합니다. 극심한 스트레스와 신경 과열로 인해 심장에 맹렬한 화(火)가 타오르고, 이 열기가 체내 진액을 바짝 졸여 끈적한 병리적 담음(痰飮)을 만듭니다. 이 풍담이 뇌의 맑은 감각과 정신을 관장하는 구멍(竅)을 막아버림으로써 이성적인 언어 제어 능력을 상실하게 되는 것입니다. 진료 시에는 황련, 치자, 용담초 등으로 심장과 간의 폭발적인 화열을 사(瀉)하고, 담남성, 원지, 석창포로 뇌의 경락을 가로막은 담음을 씻어내는 청심온담탕(淸心溫膽湯) 계열 처방을 구사하여 뇌신경 언어 회로의 과열을 진정시킵니다.\n\n[체계적인 치료 단계 및 생활 속 자가 관리 가이드]\n1단계: 언어 충동 대체 훈련(Habit Reversal Training)의 도입. 욕설이나 특정 단어를 뱉고 싶은 충동이 밀려올 때 입술을 가볍게 다물고 코로 깊게 숨을 들이마신 후 입으로 길게 내쉬는 호흡 대체 행동을 연습합니다.\n2단계: 긴장 완화를 위한 온열 요법. 목 뒤쪽의 풍지혈(風池穴)과 대추혈(大椎穴) 부위에 따뜻한 찜질을 시행하여 인후부와 성대로 연결되는 미주신경의 긴장을 낮춥니다.\n3단계: 주변 환경의 따뜻한 이해 구하기. 학교 담임교사 및 급우들에게 의학적 질환임을 사전 설명하여 오해로 인한 집단 따돌림이나 비난을 원천 차단합니다."
  },
  {
    "id": "col-auto-panic-2",
    "category": "공황장애",
    "title": "과호흡과 가슴 답답함으로 응급실을 수차례 찾았던 40대 가장의 공황발작 치료 사례",
    "author": "해아림한의원",
    "date": "2026.10.04",
    "views": 140,
    "summary": "새벽마다 가슴이 조여오고 숨이 가빠져 응급실을 전전하던 45세 남성 환자가 자율신경 과각성을 바로잡고 안정적인 일상을 되찾은 공황발작 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“자다가 새벽 2시에 가슴을 쥐어짜는 통증과 함께 숨이 안 쉬어져 119를 불렀습니다. 의사는 심장에 문제가 없다는데 저는 정말 죽는 줄 알았습니다.”\n\n45세 남성 가장 환자분의 호소였습니다.\n\n공황발작이 야간에 발생하는 ‘야간 공황발작(Nocturnal Panic)’은 수면 중 무의식 상태에서 교감신경이 급격히 활성화되며 나타납니다. 수면 중 혈중 이산화탄소 농도의 미세한 변화를 뇌간의 호흡 중추가 위험 신호로 잘못 감지하여 발생합니다.\n\n이 환자분은 자영업 스트레스와 만성 피로가 겹친 상태에서 세 번이나 응급실을 찾았고, 밤마다 또 발작이 올까 두려워 잠자리에 드는 것조차 공포스러워하셨습니다.\n\n진단 결과 만성 스트레스로 인해 간기가 뭉치고 심장에 열이 찬 ‘간울화화(肝鬱化火)’ 상태였습니다.\n\n치료는 야간 교감신경 흥분을 차단하고 부교감신경을 부드럽게 활성화시키는 시호가용골모려탕 및 복신, 산조인 중심의 맞춤 한약을 복용하도록 했습니다. 더불어 수면 전 스마트폰 사용을 금하고 침실 온도를 서늘하게 유지하는 수면 환경 개선을 병행했습니다.\n\n치료 3주 차부터 야간 호흡곤란 발작이 사라졌고, 2개월 차에는 밤에 깨지 않고 7시간 숙면을 취하며 낮 동안의 활력을 되찾으셨습니다."
  },
  {
    "id": "col-auto-panic-3",
    "category": "공황장애",
    "title": "하루 3잔 마시던 커피 후 극심한 심계항진과 어지럼증을 겪은 카페인 유발 공황발작 사례",
    "author": "해아림한의원",
    "date": "2026.10.03",
    "views": 178,
    "summary": "피로 해소를 위해 마시던 고카페인 음료가 중추신경을 과자극하여 갑작스러운 심계항진과 어지럼증, 공황발작을 유발했던 28세 취업준비생의 한방 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“공부하다가 에너지 음료와 아메리카노를 마셨는데, 갑자기 심장이 미친 듯이 뛰고 손발이 저리면서 눈앞이 하얘졌어요.”\n\n28세 취업준비생 환자분께서 겪으신 아찔한 경험입니다.\n\n카페인은 뇌의 피로를 인지하는 아데노신(Adenosine) 수용체를 차단하여 일시적으로 각성 효과를 주지만, 자율신경계가 취약하거나 불안도가 높은 체질에서는 심박수를 폭주시키고 교감신경을 과흥분시켜 공황발작을 촉발하는 강력한 트리거(Trigger)가 됩니다.\n\n이 환자분은 카페인으로 촉발된 신체 증상(두근거림, 손 떨림, 과호흡)을 ‘몸에 치명적인 이상이 생겼다’고 파국적으로 해석하면서 공황장애의 악순환에 빠졌습니다.\n\n한의학에서는 체내 진액이 부족해 허열(虛熱)이 뜨는 음허화왕(陰虛火旺)으로 진단하고, 체내 음혈을 보충하고 심신을 진정시키는 자음강화 한약과 자율신경 안정 침 치료를 진행했습니다.\n\n철저한 카페인 단절과 함께 6주간의 한의 치료를 거쳐 심장 두근거림과 어지럼증이 완벽히 가라앉았고, 불안 없이 시험 준비를 마칠 수 있었습니다."
  },
  {
    "id": "col-auto-panic-4",
    "category": "공황장애",
    "title": "운전 중 터널과 고속도로 다리 위에서 숨이 턱 막히던 광장공포증 동반 공황장애 치료사례",
    "author": "해아림한의원",
    "date": "2026.10.03",
    "views": 174,
    "summary": "터널이나 다리 위 등 즉각 탈출하기 어려운 도로 상황에서 극심한 공포와 숨 막힘을 겪으며 운전을 기피하던 42세 남성의 광장공포증 동반 공황장애 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“고속도로 터널에만 들어가면 벽이 좁혀오는 것 같고 숨을 쉴 수 없었어요. 차를 갓길에 세우고 덜덜 떨었던 뒤로는 운전대를 잡을 수가 없습니다.”\n\n42세 남성 회사원 환자분의 절박한 사연입니다.\n\n공황장애 환자의 약 절반은 ‘광장공포증(Agoraphobia)’을 동반합니다. 광장공포증은 넓은 장소뿐 아니라 터널, 고속도로 다리, 지하철, 엘리베이터, 미용실 등 ‘공황발작이 일어났을 때 즉시 도망치기 어렵거나 도움을 받기 힘든 장소’에 대한 강렬한 회피 반응을 보입니다.\n\n이 환자분은 영업직으로 매일 차량을 운행해야 했기에 운전 공포는 생계와 직결된 치명적인 문제였습니다.\n\n한의학에서는 이를 심장의 기운이 몹시 허약해진 심담허겁과 기혈응체로 진단하고, 뇌 자생력을 키워 공포 기억을 재구성하는 한방 인지 치료와 청심안신 한약을 처방했습니다.\n\n치료와 함께 국도 짧은 터널부터 단계적으로 통과하는 ‘점진적 노출 훈련’을 지도했습니다. 치료 2개월 후 긴 터널에서도 불안 없이 차분하게 주행할 수 있게 되며 일상과 직업 활동을 온전히 회복하셨습니다."
  },
  {
    "id": "col-auto-panic-5",
    "category": "공황장애",
    "title": "[항불안제 복용과 한의 진료] 신경 안정제 부작용 완화와 뇌 자생력 회복 병용 요법",
    "author": "해아림한의원",
    "date": "2026.10.02",
    "views": 149,
    "summary": "벤조디아제핀계 항불안제 복용 중 발생하는 졸림, 멍함, 약물 의존성을 줄이고 안전하게 신경 안정도를 높이는 한의학적 병용 치료 전략을 제시합니다.",
    "content": "공황장애로 진단받은 환자 대다수는 신경정신과에서 처방하는 항우울제(SSRI)나 벤조디아제핀계 항불안제를 복용하게 됩니다. 초기 급성기 발작을 차단하는 데는 효과적이지만, 장기 복용 시 낮 시간의 무기력증, 멍함, 인지 기능 저하 및 약물 중단 시 나타나는 반동성 불안이라는 한계에 부딪히기 쉽습니다. 한의학적 진료는 양약을 강제로 중단하는 것이 아니라 병용 투여를 통해 신경계의 자생력을 키우고 부작용을 경감시켜, 궁극적으로 약물 의존도를 서서히 낮춰나가는 이상적인 치료 로드맵을 제공합니다.\n\n[환자들이 자주 묻는 질문과 임상 증상]\n\"정신과 약을 먹으면 공황발작은 안 오는데 하루 종일 머리가 안개 낀 것처럼 멍하고(Brain Fog) 일에 집중할 수가 없어요. 약을 안 먹으면 바로 불안해져서 평생 이 약을 못 끊을까 봐 두렵습니다.\" 약물 치료를 수개월 이상 지속한 환자들의 공통된 하소연입니다. 벤조디아제핀계 약물은 뇌의 억제 신호인 GABA를 인위적으로 증폭시키기 때문에 급한 불을 끄는 데는 유용하지만, 장기간 의존할 경우 뇌 스스로 억제 물질을 생산하는 능력을 퇴화시킵니다. 환자들은 약을 줄이고 싶어도 감량 과정에서 심박동 증가와 손떨림 등 금단 증상이 엄습하여 좌절을 겪게 됩니다.\n\n[신경해부학적 발병 메커니즘과 신경전달물질]\n신경생물학적으로 외인성 GABA 작용제(항불안제)의 장기 투여는 신경 시냅스 후막의 GABA-A 수용체 민감도를 하향 조절(Down-regulation)시킵니다. 즉, 수용체의 수가 줄어들거나 반응성이 떨어져 동일한 진정 효과를 얻기 위해 더 많은 용량이 필요해지는 내성(Tolerance)이 형성됩니다. 더욱이 SSRI 항우울제는 세로토닌 농도를 높이지만 위장관의 세로토닌 수용체까지 자극하여 메스꺼움, 소화불량, 성기능 장애 등의 전신 부작용을 흔히 동반합니다. 뇌신경 세포가 외부 화학 물질에만 의존하지 않고 스스로 세로토닌과 가바의 자연스러운 분비 균형을 회복할 수 있도록 내인성 조절 능력을 복원하는 것이 근본적인 해결책입니다.\n\n[한의학적 원인 분석과 변증별 진료 방향]\n한의학에서는 양약 장기 복용으로 인한 신경 둔화와 기력 쇠진을 심비양허(心脾兩虛) 및 신정부족(腎精不足)으로 파악합니다. 화학적 진정 약물은 신경의 화기를 누르는 과정에서 심장과 비장의 맑은 양기까지 손상시켜 만성 피로와 무기력을 초래합니다. 진료 시에는 양약을 임의로 중단하지 않고 유지하면서, 뇌수의 정혈을 보충하고 신경세포의 산소 대사를 촉진하는 원지, 석창포, 용안육, 당귀, 녹용 등을 체질에 맞춰 배합한 귀비탕(歸脾湯)이나 보중익기탕(補中益氣湯) 가감방을 처방합니다. 한약 치료를 통해 뇌의 기력이 충만해지면 의료진과의 상의하에 양약의 용량을 서서히 테이퍼링(Tapering, 점진적 감량)할 수 있는 튼튼한 체질적 토대가 마련됩니다.\n\n[체계적인 치료 단계 및 생활 속 자가 관리 가이드]\n1단계: 양약의 임의 중단 절대 금지. 갑자기 신경정신과 약을 끊으면 심각한 반동성 공황발작이 발생하므로 안정적으로 한약 복용으로 컨디션을 끌어올린 후 단계적으로 감량해야 합니다.\n2단계: 한약과 양약의 1~2시간 복용 간격 유지. 위장 내에서의 상호 작용을 방지하고 약효의 온전한 흡수를 위해 양약 복용 1~2시간 후에 한약을 복용합니다.\n3단계: 뇌 혈류 순환을 돕는 침구 요법 병행."
  },
  {
    "id": "col-auto-insomnia-2",
    "category": "불면증",
    "title": "몸은 지쳤는데 침대에만 누우면 뇌가 각성되어 잠들지 못하는 HPA축 교란 불면증 사례",
    "author": "해아림한의원",
    "date": "2026.10.01",
    "views": 199,
    "summary": "온몸이 녹초가 되었는데도 불만 끄면 심장이 뛰고 온갖 생각이 꼬리를 물어 3시간 이상 잠들지 못하던 36세 여성의 뇌 각성 조절 한방 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“하루 종일 일하느라 몸은 천근만근 피곤한데, 이상하게 침대에만 누우면 뇌 스위치가 딱 켜지면서 잠이 달아나요.”\n\n30대 후반의 여성 환자분께서 답답함을 토로하셨습니다.\n\n이는 만성 스트레스로 인해 뇌의 교감신경계와 부신피질 호르몬(코르티솔) 분비가 밤낮이 뒤바뀐 전형적인 ‘신경계 과각성 불면증’입니다. 몸은 쉬기를 갈망하지만, 뇌의 변연계와 망상체는 여전히 ‘비상사태’로 인식하여 수면 호르몬인 멜라토닌 분비를 억제하기 때문입니다.\n\n이 환자분은 침대에 누워 시계를 볼 때마다 ‘내일 출근해야 하는데 어떡하지’라는 조건반사적 불안이 형성되어 있었습니다.\n\n한의학에서는 사려과다(思慮過多)로 심비(心脾)가 손상된 심비양허(心脾兩虛)로 진단하고, 귀비탕에 신경을 안정시키는 용골, 모려, 원지를 더한 맞춤 한약을 처방했습니다.\n\n또한 ‘침대는 오직 잠잘 때만 눕는 공간’으로 재학습시키는 수면 제한 요법과 뇌파를 알파파로 유도하는 이완 호흡법을 훈련시켰습니다.\n\n치료 4주 만에 입면 시간이 2시간에서 20분 이내로 대폭 단축되었으며, 야간 가슴 두근거림 없이 편안한 입면을 유지하게 되었습니다."
  },
  {
    "id": "col-auto-insomnia-3",
    "category": "불면증",
    "title": "수면제 복용 후에도 낮 동안 몽롱함과 반동성 불면을 겪던 50대 한의 치료사례",
    "author": "해아림한의원",
    "date": "2026.10.01",
    "views": 171,
    "summary": "수면유도제를 1년 넘게 복용하며 약물 내성과 낮 동안의 극심한 기억력 저하, 반동성 불면을 겪던 52세 남성의 뇌 자생력 회복 한의 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“수면제를 안 먹으면 하루도 못 잘 것 같아 1년 넘게 먹었어요. 그런데 요즘은 약을 먹어도 자주 깨고, 낮에는 머리에 안개가 낀 것처럼 멍합니다.”\n\n50대 초반의 자영업 환자분께서 수면제 의존에서 벗어나고 싶다며 내원하셨습니다.\n\n졸피뎀 등 수면제와 수면유도제는 뇌의 억제성 수용체를 강제로 자극하여 일시적으로 잠에 빠뜨리지만, 장기 복용 시 약물 내성과 함께 약을 줄였을 때 불면이 훨씬 심해지는 ‘반동성 불면(Rebound Insomnia)’이 나타나기 쉽습니다. 또한 수면 구조 중 렘수면과 깊은 수면을 억제하여 낮 동안 인지기능 저하와 만성 멍함을 초래합니다.\n\n이 환자분의 치료 목표는 수면제를 무작정 끊는 것이 아니라, 뇌의 자연 수면 유도 기능을 회복시키면서 안전하게 단계적 감량(Tapering)을 진행하는 것이었습니다.\n\n본원에서는 뇌 자생력을 높이고 체내 찌꺼기인 담음을 배출하는 온담탕과 청심연자음 계열 한약을 투여하며, 신경계 안정 약침 치료를 병행했습니다.\n\n치료 4주 차에 수면제 복용량을 절반으로 줄였음에도 수면 시간과 질이 유지되었고, 10주 차에는 마침내 수면제를 완전히 중단하고도 매일 6~7시간의 자연 숙면을 취하게 되었습니다."
  },
  {
    "id": "col-auto-insomnia-4",
    "category": "불면증",
    "title": "밤마다 다리에 벌레가 기어가는 듯해 잠을 설쳤던 60대 하지불안증후군 불면 치료사례",
    "author": "해아림한의원",
    "date": "2026.09.30",
    "views": 182,
    "summary": "야간에 다리에 말로 표현하기 힘든 불쾌감과 저림이 발생해 자다 깨서 걸어 다녀야만 했던 61세 여성 환자의 하지불안증후군 동반 불면증 한방 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“낮에는 멀쩡한데 밤에 이불 속에만 들어가면 종아리가 스멀스멀하고 벌레가 기어 다니는 것 같아요. 다리를 주무르고 걸어야 겨우 진정됩니다.”\n\n61세 여성 환자분께서 겪으신 고통스러운 증상입니다.\n\n하지불안증후군(Restless Legs Syndrome, RLS)은 수면 중 다리에 불쾌한 감각이 발생하여 다리를 움직이고 싶은 강한 충동을 느끼는 신경학적 질환입니다. 중추신경계의 도파민 회로 불균형과 철분 대사 이상, 말초 혈류 장애가 결합되어 나타나며, 환자의 80% 이상이 극심한 수면장애를 호소합니다.\n\n이 환자분은 단순한 혈액순환 장애나 신경통으로 여겨 파스를 붙이고 찜질을 해왔으나 증상은 갈수록 심해졌습니다.\n\n한의학에서는 간주근(肝主筋)의 원리에 따라 근육에 혈액이 충분히 공급되지 못하는 ‘간혈허(肝血虛)’ 및 풍담(風痰)으로 진단했습니다.\n\n치료를 위해 작약감초탕에 혈액 순환을 촉진하고 신경 흥분을 낮추는 당귀, 천궁, 우슬을 가미한 맞춤 한약을 처방하고, 하지 주요 혈자리(족삼리, 승산)에 약침 및 온열 치료를 병행했습니다.\n\n치료 3주 차부터 다리의 스멀거림과 쑤심이 절반으로 줄었고, 7주 차에는 밤에 한 번도 깨지 않고 편안하게 다리를 뻗고 잘 수 있게 되었습니다."
  },
  {
    "id": "col-auto-insomnia-5",
    "category": "불면증",
    "title": "[스마트폰 블루라이트와 불면] 멜라토닌 분비 억제와 일주기 리듬 교정 수면 위생법",
    "author": "해아림한의원",
    "date": "2026.09.29",
    "views": 133,
    "summary": "잠들기 직전 스마트폰, 태블릿 화면 시청이 시교차상핵(SCN)을 자극하여 멜라토닌 생성을 파괴하는 메커니즘과 디지털 디톡스를 통한 자연 수면 유도법을 고찰합니다.",
    "content": "잠자리에 누워 불을 끄고 스마트폰으로 쇼츠, 웹툰, 뉴스를 보는 습관은 현대인 불면증의 가장 직접적인 원인 물질입니다. 전자기기 화면에서 뿜어져 나오는 460~480nm 파장의 청색광(블루라이트)은 눈의 망막 신경절 세포를 통해 뇌의 생체 시계인 시교차상핵(SCN)에 직접 도달하여 밤을 대낮으로 착각하게 만듭니다. 그 결과 자연스러운 수면 유도 호르몬인 멜라토닌 분비가 최대 90분 이상 지연되고 수면의 질이 붕괴되므로, 침실 내 스마트폰 격리와 올바른 조명 관리가 수면 회복의 첫걸음입니다.\n\n[환자들이 자주 묻는 질문과 임상 증상]\n\"잠이 안 와서 지루하니까 유튜브를 틀어놓고 보는데, 그러다 보면 새벽 1시, 2시가 훌쩍 넘어가요. 스마트폰을 보면 잠이 더 안 오는 걸 알면서도 손에서 놓지를 못하겠어요.\" 20~30대 청년층 불면증 환자 대다수가 공통으로 호소하는 일상입니다. 어두운 방 안에서 스마트폰 화면의 강한 빛에 노출되면 눈 주위 근육이 팽팽하게 긴장하고 안구 건조증과 두통이 유발됩니다. 뇌는 시각적 자극과 알고리즘이 주는 도파민 보상에 중독되어 피로한 신체의 수면 신호를 무시하게 되며, 결국 만성적인 수면 위상 지연 증후군(Delayed Sleep Phase Syndrome)으로 발전하게 됩니다.\n\n[신경해부학적 발병 메커니즘과 신경전달물질]\n신경생물학적으로 인체의 24시간 생체 일주기 리듬은 시상하부의 시교차상핵(Suprachiasmatic Nucleus, SCN)에 의해 지휘됩니다. 눈의 망막에는 빛을 감지하는 내재성 광민감성 망막신경절세포(ipRGC)가 존재하며, 이 세포는 특히 블루라이트에 극도로 민감합니다. 어두워지면 송과체(Pineal Gland)에서 세로토닌을 원료로 멜라토닌(Melatonin)을 합성하여 혈액과 뇌척수액으로 방출해야 합니다. 그러나 야간의 청색광 노출은 ipRGC를 흥분시켜 SCN으로 '낮이 계속되고 있다'는 거짓 신호를 송출하고 멜라토닌 합성을 차단합니다. 멜라토닌이 결핍된 뇌는 수면 진입 명령을 받지 못해 뇌파의 각성 상태가 비정상적으로 연장되는 것입니다.\n\n[한의학적 원인 분석과 변증별 진료 방향]\n한의학에서는 밤에 눈으로 빛을 받아들이며 잠들지 못하는 상태를 음양불화(陰陽不和) 및 신불귀택(神不歸宅)으로 진단합니다. 낮은 양(陽)의 시간이고 밤은 음(陰)의 시간으로서, 밤이 되면 밖으로 활동하던 정신과 혼(魂)이 간(肝)과 심(心)의 혈(血) 속으로 안식처를 찾아 들어가 쉬어야 합니다(神歸其宅). 그러나 밤늦게 빛과 열을 머리에 가하면 양기가 음기로 수렴되지 못하고 허공에 떠돌게 됩니다(양부외월). 진료 시에는 양기를 안으로 끌어들이는 인양입음(引陽入陰)의 치법을 사용하여 볶은 산조인, 지모, 백복령, 야교등 등을 처방합니다. 흩어진 정신을 모으고 간혈을 보충하여 자연스러운 수면 유도 환경을 복원합니다.\n\n[체계적인 치료 단계 및 생활 속 자가 관리 가이드]\n1단계: 침실 밖 '스마트폰 주차장' 설치. 침대 반경 2미터 이내에 충전기를 두지 말고 거실이나 서재에 스마트폰을 두고 침실로 들어가는 물리적 격리를 실천합니다.\n2단계: 취침 1시간 전 아날로그 이완 루틴 구축. 전자기기 대신 클래식 음악 청취, 명상, 가벼운 스트레칭, 종이책 독서 등 뇌파를 안정시키는 정적인 활동으로 전환합니다.\n3단계: 아침 기상 직후 15분간 햇볕 쬐기."
  },
  {
    "id": "col-auto-insomnia-6",
    "category": "불면증",
    "title": "[하지불안증후군과 불면] 다리의 저림과 벌레 기어가는 느낌, 도파민 회로 개선법",
    "author": "해아림한의원",
    "date": "2026.09.29",
    "views": 193,
    "summary": "잠자리에 들 때마다 다리가 근질거리고 가만히 둘 수 없어 발을 털어야만 하는 하지불안증후군(RLS)의 철분 대사 및 도파민 결핍 원인과 한의학적 기혈 순환 치료를 알아봅니다.",
    "content": "잠들기 위해 눕기만 하면 종아리나 허벅지 깊숙한 곳에서 벌레가 기어가는 듯한 근질거림, 시림, 욱신거림이 발생하여 다리를 가만히 둘 수 없는 질환이 바로 하지불안증후군(Restless Legs Syndrome, RLS)입니다. 다리를 흔들거나 주무르면 일시적으로 완화되지만 가만히 있으면 다시 증상이 나타나 환자를 극심한 불면증으로 몰아넣습니다. 이는 뇌 중추신경계의 철분 대사 이상과 도파민 신경 전달계의 기능 부전, 하지 혈류 순환 장애가 결합된 신경 혈관 질환으로 근본적 기혈 보충 치료가 요구됩니다.\n\n[환자들이 자주 묻는 질문과 임상 증상]\n\"낮에는 멀쩡한데 밤에 자려고 누우면 다리 속 뼈마디가 스멀거리고 답답해서 발을 차거나 일어나서 걸어 다녀야 겨우 진정돼요. 정형외과나 혈관외과에 가도 이상이 없다는데 도대체 왜 이러나요?\" 하지불안증후군 환자들이 겪는 기괴하고 형언하기 힘든 고통입니다. 환자들은 저림, 당김, 가려움, 터질 것 같은 느낌 등 다양한 이상 감각을 호소하며, 다리를 움직이고 싶은 통제 불능의 충동(Urge to Move)을 느낍니다. 심한 경우 다리뿐만 아니라 팔과 몸통으로 감각 이상이 번지며, 수면 중 다리가 주기적으로 튀는 주기성 사지운동장애(PLMD)가 동반되어 수면의 연속성을 완벽히 파괴합니다.\n\n[신경해부학적 발병 메커니즘과 신경전달물질]\n신경생물학적으로 하지불안증후군의 핵심 병소는 뇌간의 흑질(Substantia Nigra) 부위의 철분 결핍과 도파민성 신경 전달의 기능 저하입니다. 철분은 뇌에서 티로신을 도파민으로 전환하는 필수 효소(Tyrosine Hydroxylase)의 조효소 역할을 합니다. 뇌 내 철분 저장 단백질인 페리틴(Ferritin) 농도가 떨어지면 도파민 생성이 줄어들어 척수 후각(Dorsal Horn)의 감각 억제 경로가 약화됩니다. 이로 인해 사지 말초에서 올라오는 정상적인 감각 신호가 중추신경계에서 불쾌하고 고통스러운 감각으로 왜곡 증폭되어 뇌로 전달되는 감각 처리의 신경학적 오류가 발생하게 됩니다.\n\n[한의학적 원인 분석과 변증별 진료 방향]\n한의학에서는 하지불안증후군을 혈허생풍(血虛生風) 및 근맥실양(筋脈失養)의 병증으로 정밀하게 다룹니다. 혈액(陰血)이 부족해지면 근육과 신경을 촉촉하게 적셔주지 못해 근육이 메마르고 바람(풍)이 일어 파르르 떨리거나 근질거리는 이상 감각이 발생한다는 원리입니다. 특히 밤은 음(陰)이 주관하는 시간인데 음혈이 부족하니 야간에 다리의 이상 감각이 극대화되는 것입니다. 진료 시에는 작약감초탕(芍藥甘草湯)과 사물탕(四物湯)을 기본 처방으로 삼습니다. 백작약의 풍부한 글루코사이드 성분은 중초 근막의 긴장을 즉각 풀어주고, 당귀와 천궁은 하지 말초 혈관을 확장시켜 혈류 순환을 촉진하며 신경을 영양합니다.\n\n[체계적인 치료 단계 및 생활 속 자가 관리 가이드]\n1단계: 저녁 시간 따뜻한 반신욕 및 폼롤러 마사지. 취침 1시간 전 종아리와 대퇴부 근육을 폼롤러로 충분히 이완시키고 온욕을 통해 하지 혈관을 충분히 확장시킵니다.\n2단계: 철분 흡수를 방해하는 요인 차단. 탄닌이 많은 홍차나 커피는 장내 철분 흡수를 방해하므로 피하고, 시금치, 붉은 살코기, 깻잎 등 철분과 비타민 C가 풍부한 식단을 섭취합니다.\n3단계: 다리 압박 스타킹의 선별적 활용. 다리에 적절한 물리적 압력을 가해주면 고유수용성 감각 신경이 자극을 받아 뇌로 향하는 이상 감각 신호를 차단하는 데 도움이 됩니다."
  },
  {
    "id": "col-auto-dys-2",
    "category": "자율신경실조증",
    "title": "머리는 뜨겁고 손발은 얼음장 같아 일상이 힘겨웠던 50대 상열하한 자율신경 치료사례",
    "author": "해아림한의원",
    "date": "2026.09.28",
    "views": 170,
    "summary": "상체로는 열이 뻗쳐 얼굴이 붉어지고 두통이 오는데 손발은 시려 잠을 못 이루던 53세 여성의 상열하한(上熱下寒) 자율신경실조증 한방 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“얼굴과 머리로는 불이 난 것처럼 열이 훅 달아오르고 땀이 나는데, 손발은 얼음장처럼 차가워 양말을 신고 자야 해요.”\n\n50대 초반 여성 환자분께서 전형적인 체온 조절 불균형을 호소하셨습니다.\n\n인체의 체온과 혈관 수축·이완은 자율신경계가 1초의 쉼도 없이 조절합니다. 그러나 만성 스트레스, 갱년기 호르몬 변화, 과로로 인해 자율신경계의 조절 축이 무너지면 혈류가 상체로 쏠리고 말초 혈관은 닫히는 ‘상열하한(上熱下寒)’ 현상이 발생합니다.\n\n이 환자분은 상열감으로 인한 두통과 눈 충혈, 가슴 두근거림을 겪으면서도 아랫배와 손발은 냉하여 소화불량과 만성 설사를 동반하고 계셨습니다.\n\n한의학에서는 이를 수승화강(水昇火降, 찬 기운은 위로 올리고 뜨거운 기운은 아래로 내림)의 순환 고리가 끊어진 자율신경실조증으로 진단했습니다.\n\n치료는 상체의 화열을 내리고 하초를 따뜻하게 덥혀주는 치자, 황련, 육계, 건강이 배합된 맞춤 한약을 처방하고, 복부 온열 뜸과 두경부 약침 치료를 결합했습니다.\n\n치료 4주 만에 얼굴로 치솟던 열감이 눈에 띄게 줄었고, 8주 차에는 손발에 온기가 돌며 야간 수면의 질과 소화 기능이 획기적으로 개선되었습니다."
  },
  {
    "id": "col-auto-dys-4",
    "category": "자율신경실조증",
    "title": "앉았다 일어설 때 눈앞이 캄캄해지고 맥박이 치솟는 20대 기립성 빈맥 증후군 치료 사례",
    "author": "해아림한의원",
    "date": "2026.09.27",
    "views": 163,
    "summary": "자리에 누워있을 때는 정상이지만 일어서기만 하면 맥박이 120회 이상으로 폭주하고 어지러웠던 24세 여성의 기립성 빈맥 증후군(POTS) 한의 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“의자에서 일어서기만 하면 눈앞이 깜깜해지고 심장이 120회 넘게 미친 듯이 뛰어요. 쓰러질 것 같아 다시 주저앉게 됩니다.”\n\n24세 취업준비생 여성 환자분의 호소였습니다.\n\n사람이 일어설 때는 중력에 의해 혈액 약 500~1000ml가 하체로 쏠립니다. 정상적인 몸은 자율신경계가 즉각 하체 혈관을 수축시켜 뇌로 피를 밀어 올립니다. 하지만 자율신경의 혈관 수축 반사가 지연되면 뇌혈류가 일시적으로 부족해지고, 심장은 뇌에 피를 보내기 위해 필사적으로 맥박을 빠르게 뛰게 만듭니다. 이를 ‘기립성 빈맥 증후군(Postural Orthostatic Tachycardia Syndrome, POTS)’이라 부릅니다.\n\n이 환자분은 심장 초음파나 24시간 홀터 검사에서 구조적 이상이 없다는 진단을 받았지만, 기립 시 맥박이 40회 이상 치솟는 전형적인 자율신경 실조 양상을 보였습니다.\n\n한의학에서는 기운이 아래로 처져 뇌로 올라가지 못하는 ‘중기하함(中氣下陷)’과 심기허약(心氣虛弱)으로 진단했습니다.\n\n치료는 기운을 위로 끌어올리고 혈관 긴장도를 회복시키는 승양익기(升陽益氣) 한약인 보중익기탕 가감방을 처방하고, 충분한 수분 및 미네랄 섭취를 유도했습니다.\n\n치료 5주 차에 기립 시 맥박 상승 폭이 15회 이내로 안정되었고, 일어설 때 핑 돌던 어지럼증 없이 활력 있는 일상을 회복하셨습니다."
  },
  {
    "id": "col-auto-dys-5",
    "category": "자율신경실조증",
    "title": "[기립성 저혈압과 빈맥] 체위 변화 시 어지럼증과 두근거림을 유발하는 자율신경 치료법",
    "author": "해아림한의원",
    "date": "2026.09.27",
    "views": 164,
    "summary": "앉았다 일어설 때 눈앞이 캄캄해지는 기립성 저혈압과 심장이 미친 듯이 뛰는 기립성 빈맥증후군(POTS)의 혈관 수축 반사 장애와 한의학적 승양(升陽) 치료를 다룹니다.",
    "content": "누워있거나 앉아있다가 일어설 때 순간적으로 핑 돌며 눈앞이 하얘지는 '기립성 저혈압(Orthostatic Hypotension)'과 일어선 직후 혈압 변화 없이 맥박수만 분당 30회 이상 급증하는 '기립성 빈맥증후군(POTS)'은 대표적인 자율신경계 혈압 조절 부전 질환입니다. 중력에 의해 하체로 쏠린 혈액을 뇌로 신속히 끌어올려야 하는 자율신경 반사 시스템이 고장 났음을 의미합니다. 뇌혈관의 관류압을 유지하고 말초 혈관의 탄력성을 회복시키는 체계적인 한의학 진료가 필수적입니다.\n\n[환자들이 자주 묻는 질문과 임상 증상]\n\"의자에서 일어나기만 하면 앞이 캄캄해지면서 휘청거리고 심장이 120회 넘게 미친 듯이 뛰어요. 뇌 MRI를 찍어도 아무 이상이 없다는데 길에서 쓰러질까 봐 일어서는 게 무섭습니다.\" 10~30대 젊은 여성 및 만성 피로 환자들에게서 흔히 관찰되는 증상입니다. 기립 시 뇌혈류가 일시적으로 차단되면서 어지럼증, 실신감, 전신 쇠약감, 시야 흐림, 목 뒤쪽의 뻣뻣한 통증(Coat-hanger Pain)이 발생합니다. 오래 서 있으면 다리가 보라색으로 변하는 청색증이 나타나며, 학교나 직장에서 정상적인 기립 상태를 유지하지 못해 일상생활이 심각하게 제한됩니다.\n\n[신경해부학적 발병 메커니즘과 신경전달물질]\n신경생물학적으로 사람이 일어서면 중력에 의해 약 500~800ml의 혈액이 복부와 하지 정맥으로 즉각 이동합니다. 정상적인 인체에서는 경동맥동과 대동맥궁에 위치한 압수용기(Baroreceptor)가 이를 즉각 감지하여 교감신경을 흥분시키고 노르에피네프린을 분비하여 하지 혈관을 강력하게 수축시킵니다. 그러나 자율신경실조 환자는 이 압수용기 반사 활성이 지연되거나 신경 말단의 혈관 수축 신호가 제대로 전달되지 않습니다. 하체에 피가 갇히자 뇌는 산소 결핍을 막기 위해 심장에 긴급 신호를 보내 맥박수를 폭발적으로 올리는 보상성 빈맥(POTS)을 유도하거나, 뇌 관류압이 급락하여 실신에 이르게 되는 것입니다.\n\n[한의학적 원인 분석과 변증별 진료 방향]\n한의학에서는 기립 시의 순환 부전을 중기하함(中氣下陷) 및 청양부승(淸陽不升)으로 진단합니다. 비위의 기운이 아래로 처져 맑은 양기가 머리와 눈으로 올라가지 못한다는 의미입니다. 체력이 약하고 위장이 무력한 소음인 체질이나 극심한 다이어트, 과로 후에 빈발합니다. 치료 시에는 중기를 끌어올리고 양기를 머리로 올려주는 보중익기탕(補中익기탕)이나 삼출건비탕(蔘출건비탕)에 황기, 인삼, 승마, 시호 등을 정밀 증량하여 처방합니다. 황기와 인삼은 혈관의 긴장도를 탄탄하게 높여주고, 승마와 시호는 기운을 위로 끌어올리는 풍향계 역할을 하여 기립 시 뇌로 향하는 혈류량을 안정적으로 확보해 줍니다.\n\n[체계적인 치료 단계 및 생활 속 자가 관리 가이드]\n1단계: 단계적 기립 훈련. 아침에 눈을 뜨면 벌떡 일어나지 말고 침대에 걸터앉아 발목을 까딱까딱 10회 돌린 후 천천히 일어나는 3단계 기립법을 습관화합니다.\n2단계: 충분한 수분과 염분 섭취. 혈관 내 혈액량을 늘리기 위해 의사의 지도하에 하루 2리터 이상의 물과 적절한 전해질을 섭취하여 혈장량을 확보합니다.\n3단계: 의료용 압박 스타킹 착용. 허벅지까지 오는 20~30mmHg 압력의 의료용 압박 스타킹을 착용하여 하체에 혈액이 고이는 물리적 저류 현상을 원천 방어합니다."
  },
  {
    "id": "col-auto-dys-6",
    "category": "자율신경실조증",
    "title": "[만성 피로 증후군과 부신 피로] 코르티솔 분비 교란과 자율신경 면역력 강화 한약",
    "author": "해아림한의원",
    "date": "2026.09.26",
    "views": 187,
    "summary": "휴식을 취해도 풀리지 않는 극심한 무기력증, 면역력 저하, 뇌 피로를 유발하는 부신 피로 증후군과 자율신경계 면역력을 회복하는 한의학적 진료를 설명합니다.",
    "content": "주말에 종일 잠을 자고 충분한 휴식을 취해도 피로가 전혀 가시지 않고 아침마다 몸을 일으키기 힘든 만성 피로 증후군은 단순한 간 기능 저하가 아니라 자율신경계와 부신의 스트레스 저항력이 고갈된 '부신 피로(Adrenal Fatigue)' 질환입니다. 만성 스트레스에 장기간 노출된 부신이 더 이상 방어 호르몬인 코르티솔과 DHEA를 제대로 생산하지 못해 신체 대사와 면역 체계가 전면 파업에 들어간 상태입니다. 부신의 정기를 북돋우고 자율신경의 생체 시계를 리셋하는 보양(補養) 한약 치료가 절실합니다.\n\n[환자들이 자주 묻는 질문과 임상 증상]\n\"병원에서 간수치도 정상이고 갑상선도 정상이라는데 저는 왜 이렇게 힘이 없고 온몸을 두들겨 맞은 것처럼 아플까요? 조금만 무리하면 감기에 걸리고 회복이 안 돼요.\" 부신 피로 환자들의 한결같은 절규입니다. 아침에 잠에서 깰 때 가장 고통스러우며, 오후 3~4시경 급격한 당분 갈망과 졸음이 쏟아집니다. 기억력과 집중력이 떨어져 일 처리가 늦어지고, 사소한 자극에도 짜증과 분노가 폭발하며, 감기나 방광염 등 각종 감염 질환이 끊이지 않습니다. 운동을 하면 기운이 나는 것이 아니라 오히려 며칠 동안 앓아누울 정도로 회복 탄력성이 바닥을 치게 됩니다.\n\n[신경해부학적 발병 메커니즘과 신경전달물질]\n신경내분비학적으로 부신 피로는 스트레스 반응 3단계 중 '소진기(Exhaustion Stage)'에 해당합니다. 지속적인 위기 상황에서 부신 피질은 세포를 지키기 위해 코르티솔을 과다 분비하지만, 수개월에서 수년에 걸쳐 스트레스가 이어지면 결국 부신 세포가 위축되어 호르몬 생산 능력을 상실합니다. 코르티솔 결핍은 체내 포도당 대사를 억제하여 세포 속 미토콘드리아의 에너지(ATP) 생산을 급감시킵니다. 동시에 세포 면역을 담당하는 NK세포와 T세포의 활성이 붕괴되어 체내 잠복해 있던 바이러스(EBV, 대상포진 등)가 재활성화되고, 자율신경계의 교감-부교감 신경 간 신호 전달 속도가 지연되어 신체 전반의 에너지 고갈이 고착화됩니다.\n\n[한의학적 원인 분석과 변증별 진료 방향]\n한의학에서는 만성 피로와 부신 고갈을 오장육부의 정기가 뿌리째 소진된 허로(虛勞) 및 신양허쇠(腎陽虛衰)로 진단합니다. 신장(腎)은 선천의 원기(元氣)를 간직한 생명의 근원으로서 현대 의학의 부신 기능과 정확히 부합합니다. 과로와 노심초사로 명문화(命門火)가 꺼지면 비장과 폐의 기운도 함께 무너져 전신의 활력이 꺼져버리는 것입니다. 치료 시에는 공진단(拱辰丹), 녹용보령환(鹿茸保齡丸), 우귀환(右歸丸) 등 최고급 정혈 보충 처방을 적용합니다. 녹용, 사향, 당귀, 산수유 등은 부신의 호르몬 분비 축을 자극하여 원기를 밑바닥에서부터 채워 올리고 신경세포의 미토콘드리아 대사를 활성화하여 기적 같은 활력 회복을 도모합니다.\n\n[체계적인 치료 단계 및 생활 속 자가 관리 가이드]\n1단계: 고강도 운동 즉각 중단. 부신 피로 환자가 땀을 뻘뻘 흘리는 스피닝이나 웨이트 트레이닝을 하면 부신이 완전히 탈진하므로 가벼운 산책이나 스트레칭으로 대체합니다.\n2단계: 저혈당 방지를 위한 단백질 위주 식단. 정제 탄수화물과 설탕은 인슐린 급등락을 유발하여 부신을 혹사시키므로 계란, 견과류, 생선 등 양질의 단백질을 매끼 섭취합니다.\n3단계: 저녁 10시 이전의 취침 습관화. 부신 호르몬이 재충전되는 밤 10시부터 새벽 2시 사이에 안정적으로 깊은 수면에 들어있어야 부신 피질 세포의 자생적 재생이 일어납니다."
  },
  {
    "id": "col-auto-diz-1",
    "category": "어지럼증",
    "title": "이비인후과 검사상 정상이었으나 붕 뜬 느낌이 지속되던 경추성 어지럼증 치료사례",
    "author": "해아림한의원",
    "date": "2026.09.25",
    "views": 194,
    "summary": "이석증이나 메니에르가 아닌데도 머리가 멍하고 스펀지를 밟는 듯 붕 뜨는 만성 어지럼증을 앓던 43세 직장인의 경추-뇌신경 교정 한의 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“이비인후과에서 귀 검사를 다 해봐도 이석증도 아니고 메니에르도 아니래요. 그런데 머리는 늘 무겁고 안개 낀 것 같으며 걸을 때마다 붕 뜬 느낌이 들어요.”\n\n43세 컴퓨터 프로그래머 환자분께서 말씀하신 만성 비회전성 어지럼증의 전형적인 증상입니다.\n\n어지럼증 환자의 상당수는 빙글빙글 도는 회전성 어지럼이 아닌, ‘머리가 맑지 않고 어질어질하며 구름 위를 걷는 듯한’ 비회전성 어지럼증을 겪습니다. 이러한 비회전성 어지럼의 주요 원인 중 하나가 바로 ‘경추성 어지럼증(Cervicogenic Dizziness)’입니다.\n\n목(경추) 주변 근육과 관절에는 신체의 균형을 뇌에 전달하는 고유수용성 감각기가 밀집해 있습니다. 일자목, 거북목이나 후두하근의 만성 경직이 발생하면 경추에서 뇌간으로 왜곡된 위치 신호가 전달되어 뇌가 어지럼증을 느끼게 됩니다.\n\n이 환자분은 하루 10시간 이상 모니터를 보며 심한 거북목과 어깨 결림을 동반하고 있었습니다.\n\n본원에서는 상부 경추의 아탈구를 교정하는 정밀 추나요법과 함께, 후두하근과 측두근의 압박을 해소하는 약침 치료, 뇌혈류 순환을 촉진하는 자음건비탕 가감 한약을 병행했습니다.\n\n치료 3주 차부터 머리의 묵직한 안개감이 걷히기 시작했고, 6주 차에는 붕 뜨는 보행 어지럼증이 사라져 편안하게 일에 집중할 수 있게 되었습니다."
  },
  {
    "id": "col-auto-diz-2",
    "category": "어지럼증",
    "title": "대형마트나 백화점 등 복잡한 곳에 가면 핑 돌고 비틀거리던 지속성 체위-지각 어지럼증(PPPD) 치료사례",
    "author": "해아림한의원",
    "date": "2026.09.25",
    "views": 150,
    "summary": "사람이 많거나 시각적 자극이 복잡한 환경에서 어지럼증과 공포감이 증폭되던 51세 여성의 만성 지속성 체위-지각 어지럼증(PPPD) 한방 통합 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“집에 가만히 누워있을 때는 괜찮은데, 대형마트나 백화점, 지하철역처럼 사람이 많고 불빛이 번쩍이는 곳에만 가면 핑 돌고 땅이 꺼지는 것 같아요.”\n\n51세 여성 환자분께서 겪고 계신 증상은 최근 의학계에서 주목받는 ‘지속성 체위-지각 어지럼증(PPPD)’의 전형적인 패턴입니다.\n\nPPPD는 과거 전정신경염이나 이석증, 극심한 스트레스를 겪은 후, 뇌의 전정 감각계가 과민해져 3개월 이상 비회전성 어지럼과 자세 불안감이 만성화되는 기능성 신경 질환입니다. 특히 시각적 자극에 매우 취약하여 격자무늬 바닥, 마트의 높은 진열장, 군중 속에서 어지럼증이 급격히 악화됩니다.\n\n이 환자분은 외출 자체를 두려워하며 집안에만 머무르는 사회적 위축 상태였습니다.\n\n한의학에서는 뇌의 전정 감각과 시각 감각의 통합 기능 저하를 담훈(痰暈) 및 기혈휴손(氣血虧損)으로 진단하고, 뇌신경 전달망의 감수성을 정상화하는 반하백출천마탕 및 청뇌탕 계열 한약을 투여했습니다.\n\n더불어 집에서 안전하게 수행할 수 있는 ‘시각-전정 재활 훈련’을 지도하여 시각 자극에 대한 뇌의 내성을 단계적으로 길렀습니다.\n\n치료 2개월 후 마트 장보기가 가능해졌으며, 3개월 차에는 어지럼증 없이 백화점과 대중교통을 자유롭게 이용하게 되었습니다."
  },
  {
    "id": "col-auto-adhd-2",
    "category": "ADHD",
    "title": "수업 시간 자리에 5분도 앉아있지 못하고 친구들과 잦은 마찰을 빚던 초등 ADHD 치료 사례",
    "author": "해아림한의원",
    "date": "2026.09.24",
    "views": 150,
    "summary": "충동성 제어가 어렵고 감정 기복이 심해 학교 수업 참여가 어려웠던 9세 초등학생의 뇌파 불균형 교정 및 심신 안정 한약 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“수업 중에 불쑥 질문을 가로채고, 친구가 장난감을 만지면 주먹부터 나가요. 매일 학교에서 전화가 올까 봐 가슴이 두근거립니다.”\n\n초등학교 2학년 남아의 어머님께서 눈물을 흘리시며 진료실을 찾으셨습니다.\n\n소아 ADHD의 핵심은 ‘자기 조절력의 미성숙’입니다. 뇌의 전전두엽 브레이크 시스템이 또래에 비해 2~3년가량 늦게 발달하여, 떠오른 생각이나 충동을 행동으로 옮기기 전에 멈추는 기능이 제대로 작동하지 못하는 것입니다. 이는 부모의 양육 태도 문제나 아이의 성격 탓이 아닌, 뇌신경계 발달 과정의 의학적 문제입니다.\n\n이 환아는 정량화 뇌파(QEEG) 검사에서 전두엽의 느린 세타파가 과도하게 많고 빠른 베타파가 부족한 전형적인 주의력 결핍 패턴을 보였습니다.\n\n한의학에서는 심화(心火)와 간양(肝陽)이 치솟아 몸과 마음이 안착하지 못하는 상태로 진단했습니다.\n\n치료는 과도한 뇌열을 식히고 억제 조절 신경망을 안정시키는 억간산 가감 처방과 함께, 충동 조절을 돕는 감각 통합 훈련을 주 1회 시행했습니다. 부모님께는 짧고 명확한 지시법과 긍정적 보상 시스템을 안내했습니다.\n\n치료 3개월 후 수업 중 자리 이탈이 사라졌고, 친구들과의 신체적 마찰 없이 즐겁게 어울리며 학교생활에 안정적으로 정착했습니다."
  },
  {
    "id": "col-auto-adhd-3",
    "category": "ADHD",
    "title": "[조용한 ADHD의 위험성] 주의력 결핍 우세형의 만성 뇌피로와 학업 부진 대처법",
    "author": "해아림한의원",
    "date": "2026.09.23",
    "views": 137,
    "summary": "교실에서 얌전하지만 머릿속은 딴생각으로 가득 차 수업을 따라가지 못하는 주의력 결핍 우세형(조용한 ADHD)의 조기 발견과 한의학적 뇌기능 회복을 다룹니다.",
    "content": "ADHD라고 하면 흔히 교실을 뛰어다니거나 소리를 지르는 과잉행동 아동을 떠올리지만, 얌전하게 앉아있으면서도 머릿속은 엉뚱한 공상에 빠져 수업 내용을 거의 흡수하지 못하는 '주의력 결핍 우세형(Inattentive Type)', 일명 '조용한 ADHD'가 훨씬 많습니다. 겉으로 말썽을 부리지 않기 때문에 부모나 교사가 눈치채지 못하고 방치되다가 성적이 급락하거나 자존감이 무너진 뒤에야 발견됩니다. 뇌신경의 멍함과 피로를 걷어내고 주의 집중력을 깨우는 한의 진료가 시급합니다.\n\n[환자들이 자주 묻는 질문과 임상 증상]\n\"선생님 말씀으로는 수업 태도는 얌전한데 시험만 보면 문제를 끝까지 안 읽고 틀리거나 엉뚱한 답을 적어요. 책상 앞에 3시간을 앉아있어도 머리에 남는 게 없다고 합니다.\" 조용한 ADHD 자녀를 둔 학부모님들의 공통된 이야기입니다. 이 유형은 여아들에게서 특히 빈번하게 나타납니다. 지시 사항을 여러 번 말해야 겨우 알아듣고, 물건을 늘 잃어버리며, 동작이 느리고 나태해 보입니다. 아이 스스로는 \"나는 왜 다른 아이들처럼 똑똑하지 못할까\" 자책하며 내면적인 우울감과 만성 무기력에 빠지기 쉬우며, 사춘기 이후 심각한 정서 장애로 전이될 위험이 큽니다.\n\n[신경해부학적 발병 메커니즘과 신경전달물질]\n신경생물학적으로 조용한 ADHD는 전두엽의 각성 조절 신경망과 두정엽의 주의 집중 네트워크의 연결성 부족에 기인합니다. 뇌간의 상행성 망상활성계(ARAS)가 외부 자극에 적절히 반응하여 대뇌피질로 각성 신호를 쏘아 올려주지 못하므로 뇌는 일종의 '저각성(Underarousal)' 상태에 빠집니다. 정보가 뇌로 들어와도 작업 기억(Working Memory)을 담당하는 해마와 전두엽 회로에 온전히 등록되지 못하고 허공으로 흩어져 버립니다. 즉, 뇌가 만성적인 에너지 결핍 상태에 놓여 있어 주의를 한곳에 모으는 인지적 동력 자체가 고갈되어 있는 상태입니다.\n\n[한의학적 원인 분석과 변증별 진료 방향]\n한의학에서는 조용한 ADHD를 심기허약(心氣虛弱) 및 수해부족(髓海不足)으로 분류합니다. 심장의 기운이 허약하여 정신을 총괄하지 못하고(심허즉신불수), 뇌수가 맑은 기운으로 가득 차지 못해 멍하고 나른한 것입니다. 한의학 고전에서는 이를 '치매(癡呆)'나 '건망(健忘)'의 초기 기전과 유사한 뇌신경 기력 쇠약으로 보았습니다. 치료 시에는 익지(益智)와 개규(開竅)의 효능이 뛰어난 원지, 석창포, 익지인, 용안육 등을 배합한 익지탕(益智湯) 계열 처방을 구사합니다. 뇌로 향하는 맑은 혈류를 대폭 증강시키고 뇌세포의 산소 공급을 원활히 하여 뇌에 낀 안개를 걷어내듯 맑고 명료한 주의 집중력을 복원합니다.\n\n[체계적인 치료 단계 및 생활 속 자가 관리 가이드]\n1단계: 시각적 체크리스트 활용. 아이 방 책상 앞에 등교 준비물, 숙제 순서 등을 그림이나 굵은 글씨로 부착하여 아이가 멍해질 때마다 시각적 단서를 보고 행동하게 합니다.\n2단계: 학습 단위의 15분 세분화. 집중 유지 시간이 짧으므로 한 과목을 15분씩 끊어서 공부하고 3분간 가볍게 스트레칭한 뒤 다음 과제로 넘어가는 훈련을 합니다.\n3단계: 풍부한 산소 공급을 위한 복식호흡. 뇌가 멍해질 때마다 창문을 열고 신선한 공기를 마시며 깊은 복식호흡을 10회 시행하여 뇌피질 세포를 각성시킵니다."
  },
  {
    "id": "col-auto-ocd-1",
    "category": "강박증",
    "title": "외출 전 가스 밸브와 현관문 잠금을 30분 넘게 확인하던 20대 확인 강박증 치료사례",
    "author": "해아림한의원",
    "date": "2026.09.23",
    "views": 180,
    "summary": "문이 잠겼는지, 가스가 꺼졌는지 의심이 꼬리를 물어 사진을 찍고도 안심하지 못하던 26세 여성의 CSTC 뇌신경 회로 안정 및 강박증 극복 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“가스 밸브를 잠그고 현관문을 잠근 걸 분명히 아는데도, 엘리베이터를 타면 '혹시 안 잠겼으면 불이 나지 않을까' 불안해져 다시 집으로 뛰어 올라가요.”\n\n26세 여성 취업준비생 환자분의 고통스러운 고백입니다.\n\n강박증(Obsessive-Compulsive Disorder, OCD)은 원하지 않는 침투적 생각(강박사고)이 끊임없이 떠오르고, 그로 인한 불안을 줄이기 위해 특정 행동(확인, 손 씻기, 정렬 등)을 반복하는(강박행동) 신경정신과 질환입니다. 뇌의 안와전두엽-기저핵-시상을 잇는 ‘CSTC 신경회로’가 마치 고장 난 레코드판처럼 같은 걱정 신호를 무한 반복 재생하기 때문에 발생합니다.\n\n이 환자분은 외출 준비에만 확인 절차로 1시간 이상이 소요되어 중요한 면접에 지각할 위기까지 겪고 계셨습니다.\n\n한의학에서는 사소한 불안을 떨쳐내지 못하는 심기허약(心氣虛弱)과 담음정체(痰飮停滯)로 진단했습니다.\n\n치료는 뇌신경 회로의 과도한 루프를 차단하고 세로토닌 신경계를 안정시키는 시호온담탕 가감 처방과 함께, ‘불안을 느끼면서도 확인 행동을 5분, 10분 지연시키는 노출 및 반응 방지(ERP) 한방 인지 훈련’을 병행했습니다.\n\n치료 6주 차에 외출 전 확인 횟수가 2회 이내로 줄었으며, 10주 차에는 한 번 확인 후 뒤돌아보지 않고 편안하게 외출할 수 있게 되었습니다."
  },
  {
    "id": "col-auto-ocd-2",
    "category": "강박증",
    "title": "[불완전감과 대칭 강박] 완벽주의적 불안을 다스리는 신경계 이완 진료법",
    "author": "해아림한의원",
    "date": "2026.09.22",
    "views": 185,
    "summary": "책상의 물건이 완벽하게 일렬로 정렬되지 않거나 옷매무새가 딱 맞지 않으면 견딜 수 없는 불완전감(Just Right) 중심 강박의 뇌 기전과 한의학적 진료를 고찰합니다.",
    "content": "오염이나 위험에 대한 두려움 때문이 아니라, 사물의 정렬 상태나 순서, 대칭이 완벽하게 맞지 않았을 때 형언할 수 없는 불쾌감과 찜찜함을 느끼며 만족할 때까지 동작을 반복하는 증상을 '불완전감(Incompleteness) 강박' 또는 '저스트 라잇(Just Right) 현상'이라 부릅니다. 이는 감각 정보를 통합하는 뇌 두정엽과 감정 뇌 사이의 만족도 일치 임계치가 비정상적으로 높게 설정되어 발생합니다. 신경망의 과긴장을 누그러뜨리고 뇌의 수용 범위를 넓히는 한의학적 진료가 필요합니다.\n\n[환자들이 자주 묻는 질문과 임상 증상]\n\"신발이 신발장에 1mm의 오차도 없이 반듯해야 하고, 글씨를 쓸 때 획이 마음에 안 들면 노트를 찢고 처음부터 다시 써요. 딱 들어맞는 느낌이 들 때까지 수십 번을 고쳐야 마음이 놓입니다.\" 불완전감 강박 환자들의 일상적 고뇌입니다. 환자는 특정한 재앙이 일어날까 봐 두려워하는 것이 아닙니다. 단지 감각적으로 '딱 맞아떨어지는 완벽한 쾌감'이 오지 않으면 신경계가 쥐어짜듯 불쾌하여 견딜 수 없는 것입니다. 양말을 신을 때 발가락 솔기가 맞을 때까지 신고 벗기를 반복하느라 아침 출근 시간이 지옥으로 변하는 환자도 많습니다.\n\n[신경해부학적 발병 메커니즘과 신경전달물질]\n신경생물학적으로 이 질환은 감각 연합 피질인 두정엽(Parietal Lobe)과 기저핵, 보조운동영역(SMA)의 과도한 상호작용과 관련이 깊습니다. 정상적인 사람은 시각이나 촉각 정보가 들어왔을 때 대략 80%만 맞아도 '이 정도면 됐다'는 만족 신호를 뇌가 받아들입니다. 그러나 불완전감 강박 환자는 이 만족 신호(Sense of Completion)를 관장하는 뇌의 회로가 100% 완벽성을 요구하도록 왜곡되어 있습니다. 그 완벽한 감각이 뇌에 도달할 때까지 교감신경계가 긴장을 풀지 못하고 경계 상태를 유지하기 때문에 반복 행동을 멈출 수 없게 됩니다.\n\n[한의학적 원인 분석과 변증별 진료 방향]\n한의학에서는 이러한 완벽주의적 집착을 간기울결(肝氣鬱結) 및 영소혈조(營少血燥)의 병리로 규명합니다. 간(肝)의 성질은 막힘없이 뻗어나가야 하는데, 지나친 통제욕과 완벽주의는 간기를 심하게 뭉치게 하여 전신의 혈액을 건조하고 메마르게 만듭니다. 마음이 유연성을 잃고 뻣뻣하게 굳어버린 상태입니다. 치료 시에는 소간해울(疎肝解鬱)과 양혈안신(養血安神)을 도모하는 시호소간탕(柴胡疎肝湯)이나 산조인탕(酸棗仁湯) 가감방을 적용합니다. 당귀, 작약, 천궁 등으로 메마른 신경계를 촉촉하게 적셔주고, 향부자와 시호로 굳어버린 기운의 흐름을 부드럽게 펴주어 사소한 불완전함을 너그럽게 수용할 수 있는 뇌의 포용력을 회복시킵니다.\n\n[체계적인 치료 단계 및 생활 속 자가 관리 가이드]\n1단계: 의도적인 '불완전 노출' 훈련. 책상 위 펜 하나를 일부러 삐뚤어지게 놓아두고 10분간 바라보며 불완전한 상태에서도 아무런 위험이 발생하지 않음을 뇌에 학습시킵니다.\n2단계: 완벽주의 인지 수정. \"세상에 100% 완벽한 것은 없으며, 80%의 완성도만으로도 충분히 훌륭하다\"는 현실적 신념을 매일 아침 거울을 보며 낭독합니다.\n3단계: 호흡 이완을 통한 감각 차단. 찜찜함이 올라올 때 심호흡을 깊게 들이마시고 내쉬며 감각적 불편감을 신체 밖으로 흘려보내는 명상을 실천합니다."
  },
  {
    "id": "col-auto-soc-1",
    "category": "대인기피증",
    "title": "팀 회의 발표 때 목소리와 손이 심하게 떨려 이직까지 고민하던 30대 사회불안장애 치료사례",
    "author": "해아림한의원",
    "date": "2026.09.21",
    "views": 126,
    "summary": "타인의 시선과 부정적 평가에 대한 극심한 공포로 회의 발표와 식사 자리를 회피하던 31세 직장인 여성의 사회불안장애(대인기피증) 한방 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“회의 시간에 제 차례가 다가오면 심장이 목구멍까지 튀어나올 것 같고, 마이크를 잡으면 손과 목소리가 사시나무 떨리듯 떨려요. 남들이 저를 비웃을까 봐 도망치고 싶습니다.”\n\n31세 대기업 대리 환자분께서 겪으신 사회불안장애(Social Anxiety Disorder)의 고통입니다.\n\n사회공포증 환자는 타인의 주목을 받는 상황에서 ‘내가 바보처럼 보이지 않을까’, ‘실수해서 수치심을 당하지 않을까’라는 파국적 불안을 느낍니다. 이때 뇌의 편도체가 폭주하여 교감신경을 자극하면 얼굴 붉어짐(안면홍조), 손 떨림, 목소리 떨림, 식은땀 등 신체 반응이 동반되어 불안을 더욱 증폭시킵니다.\n\n이 환자분은 발표가 있는 날이면 아침부터 설사와 헛구역질을 하며 출근을 꺼릴 정도로 일상 기능이 무너져 있었습니다.\n\n한의학에서는 심장이 허약하고 담력이 약해진 심담허겁(心膽虛怯)으로 진단하고, 심장 박동을 차분하게 가라앉히고 불안 역치를 높이는 청심보혈탕 및 천왕보심단 가감 한약을 처방했습니다.\n\n더불어 타인의 시선에 대한 인지적 왜곡을 교정하고 신체 긴장을 즉각 푸는 이완 요법을 병행했습니다.\n\n치료 6주 차에 발표 시 목소리 떨림이 뚜렷하게 완화되었고, 10주 차에는 전 직원이 참석한 분기 성과 발표를 성공적으로 마친 후 환한 웃음을 지으셨습니다."
  },
  {
    "id": "col-auto-soc-2",
    "category": "대인기피증",
    "title": "[대인 회피와 사회적 고립] 뇌의 보상 회로 회복과 안전 감각 재학습 훈련",
    "author": "해아림한의원",
    "date": "2026.09.21",
    "views": 197,
    "summary": "사람 만나는 것 자체가 두려워 집 안에만 머무는 대인 회피의 신경생리학적 기전과 고립을 깨고 세상으로 나아갈 수 있도록 돕는 한의학적 심신 강화 요법을 안내합니다.",
    "content": "과거 인간관계에서의 깊은 상처, 집단 따돌림, 배신, 지속적인 사회적 실패로 인해 사람과의 만남을 전면 거부하고 방 안에만 틀어박히는 상태를 대인 회피 및 사회적 고립이라 부릅니다. 이는 뇌의 사회적 보상 회로가 극도로 위축되고, 타인과의 상호작용을 오직 '고통과 위험'으로만 인식하도록 신경망이 재배선된 결과입니다. 억지로 사회로 밀어내면 공황 상태에 빠질 수 있으므로, 뇌신경계에 안전 감각을 회복시키고 무너진 기혈을 보충하는 점진적인 한의학 진료가 선행되어야 합니다.\n\n[환자들이 자주 묻는 질문과 임상 증상]\n\"사람 목소리만 들어도 심장이 조여오고 카카오톡 알림 소리만 울려도 공포스러워서 휴대폰을 꺼두었어요. 가족들과도 말을 섞기 싫고 방 밖으로 한 발짝도 못 나가겠습니다.\" 심화된 대인 회피 환자들의 절박한 호소입니다. 환자들은 극심한 무기력증과 낮밤 역전, 자기 혐오에 시달리며 인터넷이나 게임 등 비대면 가상공간에만 몰입합니다. 타인과의 접촉이 장기간 단절되면서 언어 구사 능력이 떨어지고 눈맞춤이 불가능해지며, 결국 만성 우울증과 신체 퇴행으로 이어지는 복합 정신건강 위기에 직면하게 됩니다.\n\n[신경해부학적 발병 메커니즘과 신경전달물질]\n신경생물학적으로 사회적 고립은 뇌의 보상 중추인 복측 피개 영역(VTA)과 측좌핵(Nucleus Accumbens)의 도파민 경로가 완전히 억제된 상태입니다. 타인과의 긍정적 교류를 통해 분비되어야 할 옥시토신(Oxytocin)과 세로토닌의 공급이 메마르면, 뇌는 사회적 상황을 오직 '신체적 통증'과 동일한 뇌 영역(전대상피질, 섬엽)을 활성화하여 처리합니다. 즉, 사람을 만나는 것 자체가 뇌에는 칼에 베이는 것과 같은 물리적 고통으로 인식되는 것입니다. 안전하다는 감각을 재학습하지 못하면 뇌의 신경가소성이 퇴화하여 고립의 수렁에서 헤어 나오기 어려워집니다.\n\n[한의학적 원인 분석과 변증별 진료 방향]\n한의학에서는 이를 기혈구허(氣血俱虛) 및 심비양허(心脾兩虛)로 진단합니다. 오랜 은둔과 불안으로 기혈이 완전히 메말라 정신(神)이 머물 집을 잃어버린 상태입니다. 동의보감에서는 \"기가 허하면 두려워하여 문을 닫고 홀로 있으려 한다(기허즉공, 閉戶獨處)\"고 명시하였습니다. 치료 시에는 기운을 크게 돋우고 심장의 불씨를 되살리는 보중익기탕(補中益氣湯), 귀비탕(歸脾湯)에 녹용, 자하거, 음양곽 등을 가미하여 처방합니다. 바닥난 뇌신경 에너지를 바닥에서부터 채워 올려 스스로 문을 열고 밖으로 걸어 나올 수 있는 내적인 생명력을 북돋워 줍니다.\n\n[체계적인 치료 단계 및 생활 속 자가 관리 가이드]\n1단계: 비대면 가족 소통부터 시작. 말로 대화하기 힘들다면 식탁 위에 짧은 쪽지를 남기거나 메신저로 고마움을 표현하는 미세한 사회적 접촉부터 엽니다.\n2단계: 방 안 햇볕 쬐기와 가벼운 기지개. 낮 시간대에 커튼을 활짝 열어 햇볕을 받고 방 안에서 가벼운 스트레칭을 하여 세로토닌 신경계를 깨웁니다.\n3단계: 자연과의 교감 훈련. 사람이 없는 새벽 시간이나 늦은 저녁에 집 앞 화단이나 공원을 10분간 걸으며 나무와 바람을 느끼는 감각 회복 훈련을 진행합니다.\n\n* 본 칼럼은 환자분들의 올바른 의학 정보 습득을 돕기 위해 작성되었으며, 개인의 체질과 증상에 따라 치료 반응과 예후는 차이가 있을 수 있으므로 전문 의료진과의 면밀한 상담을 권장합니다."
  },
  {
    "id": "col-auto-anx-1",
    "category": "불안장애",
    "title": "가족 건강과 미래 걱정으로 온몸 근육통과 소화불량이 멈추지 않던 40대 범불안장애 치료사례",
    "author": "해아림한의원",
    "date": "2026.09.20",
    "views": 145,
    "summary": "구체적 위험이 없는데도 24시간 끊이지 않는 걱정과 온몸의 만성 근육통, 불면을 호소하던 48세 주부의 범불안장애(GAD) 신경계 안정 한의 치료 사례입니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n“아침에 눈을 뜨는 순간부터 밤에 잠들 때까지 온갖 걱정이 머릿속을 맴돌아요. 가족에게 안 좋은 일이 생길까 봐 안절부절못하고 어깨와 목이 돌처럼 굳어 있습니다.”\n\n48세 주부 환자분의 사연입니다.\n\n특정한 대상 없이 일상적인 사건들에 대해 통제할 수 없을 정도로 과도한 불안과 걱정이 6개월 이상 지속되는 상태를 ‘범불안장애(Generalized Anxiety Disorder, GAD)’라 합니다. 뇌의 억제성 신경전달물질인 GABA의 수용체 기능이 저하되어 뇌의 긴장 스위치가 영구적으로 켜져 있는 상태입니다.\n\n이 환자분은 만성적인 긴장으로 인해 두통, 목·어깨 통증, 소화불량, 피로감 등 신체화 증상을 심하게 겪고 계셨습니다.\n\n한의학에서는 간기가 울결되고 비위가 상한 ‘간기울결 및 심비양허’로 진단했습니다.\n\n치료는 뇌신경계의 과도한 경보 반응을 해제하고 GABA 수용체의 활성을 돕는 가미소요산과 조위승청탕 가감 한약을 처방하고, 등과 어깨 근막을 이완시키는 침구 치료를 주 2회 병행했습니다.\n\n치료 4주 차에 온몸을 짓누르던 근육 경직이 풀리기 시작했고, 8주 차에는 꼬리를 물던 파국적 걱정에서 벗어나 마음의 평온과 깊은 수면을 회복하셨습니다."
  },
  {
    "id": "col-auto-anx-2",
    "category": "불안장애",
    "title": "[신체증상장애와 불안 신경증] 검사상 이상 없는 흉통, 어지럼증의 심신 통합 치료법",
    "author": "해아림한의원",
    "date": "2026.09.19",
    "views": 147,
    "summary": "신체 내부의 불안과 억압된 감정이 가슴 통증, 두통, 목의 이물감, 저림 등 신체적 고통으로 분출되는 신체증상장애의 뇌신경 메커니즘과 한의학적 진료를 안내합니다.",
    "content": "내과나 정밀 신경과 검사에서 아무런 기질적 병변이 발견되지 않는데도 가슴 통증, 어지럼증, 전신 저림, 관절통 등 극심한 신체 통증을 지속적으로 호소하는 질환을 '신체증상장애(Somatic Symptom Disorder)'라 부릅니다. 이는 환자가 겪는 심리적 불안과 무의식적인 억압 스트레스가 뇌의 감각 처리 회로를 통해 신체적인 고통으로 번역되어 나타나는 뇌신경계 질환입니다. \"신경성이니 마음을 편히 먹으라\"는 말로는 치료되지 않으며, 신체와 정신을 하나로 아우르는 한의학적 심신 진료가 필요합니다.\n\n[환자들이 자주 묻는 질문과 임상 증상]\n\"가슴이 찌르듯이 아프고 목에 가시가 걸린 것 같아서 큰 병원에 가봤더니 다 정상이라고 정신과에 가보래요. 저는 꾀병이 아니라 진짜로 너무 아픈데 가족들도 안 믿어줘서 미치겠습니다.\" 신체증상장애 환자들의 피눈물 나는 절규입니다. 환자가 느끼는 통증은 결코 가짜가 아닙니다. 뇌의 통증 인지 영역이 과민해져 실제로 극심한 고통을 경험합니다. 병원 검사에서 이상이 없다는 말을 들을수록 '혹시 희귀 불치병을 못 찾아낸 게 아닐까' 하는 건강염려증(Health Anxiety)에 빠져 병원을 전전하는 닥터 쇼핑(Doctor Shopping)에 빠지게 됩니다.\n\n[신경해부학적 발병 메커니즘과 신경전달물질]\n신경생물학적으로 신체증상장애는 뇌의 '내부 감각 수용 회로(Interoceptive Network)'의 기능 이상입니다. 감정을 처리하는 뇌섬엽(Insula)과 전대상피질(ACC)은 신체 내부 장기의 감각 신호를 통합하는 자리이기도 합니다. 억압된 정서적 고통이나 만성 불안은 뇌섬엽을 비정상적으로 흥분시켜 사소한 장기의 움직임이나 정상적인 혈류 맥동조차도 '날카로운 통증'이나 '답답함'으로 왜곡 증폭시킵니다. 뇌의 하향성 통증 억제 시스템(Descending Pain Inhibitory Pathway)이 마비되면서 전신에서 발생하는 미세한 감각 신호들이 여과 없이 통증으로 대뇌피질에 보고되는 것입니다.\n\n[한의학적 원인 분석과 변증별 진료 방향]\n한의학에서는 신체증상장애를 기질적 질환과 대비되는 기능적 병증인 칠정울결(七情鬱結) 및 매핵기(梅核氣), 흉비(胸痺)로 치료합니다. 억압된 감정은 기(氣)의 순환을 가로막아 기체(氣滯)를 일으키고, 기가 뭉치면 혈(血)이 굳어 담음과 어혈이라는 병리적 산물을 만들어 냅니다. \"통하지 않으면 아프다(불통즉통, 不通則痛)\"는 한의학의 원리 그대로 기혈 순환이 단절된 부위마다 유주성(돌아다니는) 통증이 발생하는 것입니다. 치료 시에는 분심기음(分心氣飮), 반하후박탕(半夏厚朴湯), 가미소요산(加味逍遙散) 등을 활용합니다. 가슴과 전신에 뭉친 기운의 매듭을 풀어 통증의 악순환을 차단합니다.\n\n[체계적인 치료 단계 및 생활 속 자가 관리 가이드]\n1단계: 반복적인 병원 재검사 중단. 끊임없는 검사는 불안을 낮추지 못하고 오히려 질병에 대한 집착을 강화하므로 신뢰하는 한의사를 주치의로 삼아 꾸준히 치료받습니다.\n2단계: 통증 일기 대신 '감정 일기' 작성. 신체 증상이 심해지는 순간 자신이 어떤 스트레스를 받고 있었는지 내면의 감정을 글로 적어 신체와 감정의 연결고리를 자각합니다.\n3단계: 경근 이완 침구 및 추나요법 병행. 통증이 발생하는 등과 목, 가슴 부위의 굳어버린 근막을 직접 이완시켜 뇌로 향하는 통증 구심성 신호를 물리적으로 차단합니다."
  },
  {
    "id": "col-auto-ocd-3",
    "category": "강박증",
    "title": "[강박적 확인과 세척] 침투적 불안과 불확실성을 견디는 뇌신경 훈련 및 한의학 치료",
    "author": "해아림한의원",
    "date": "2026.09.19",
    "views": 88,
    "summary": "가스 밸브 잠금 확인, 문단속, 손 씻기 등 반복 행동의 이면에 있는 불안 신호와 뇌 전두엽-기저핵 과활성을 안정시키는 한의학적 치료 기전을 설명합니다.",
    "content": "강박증 환자분들이 겪는 확인 행동이나 세척 행동은 단순한 습관이 아니라, 뇌 내에서 발생한 '잘못된 위험 경보'를 해소하기 위한 절박한 시도입니다. 피질-선조체-시상(CSTC) 신경회로의 과도한 흥분으로 인해 불확실성을 뇌가 극도의 위협으로 감지하게 됩니다.\n\n한의학에서는 심담허겁(心膽虛怯)과 간기울결(肝氣鬱結)의 관점에서 불안에 대한 내구력을 키우고, 뇌신경 전달물질의 균형을 돕는 처방과 침구 치료를 병행하여 불필요한 충동과 침투적 사고가 자연스럽게 흘러가도록 돕습니다."
  },
  {
    "id": "col-auto-anx-3",
    "category": "불안장애",
    "title": "[만성 불안과 공황의 경계] 교감신경 항진으로 인한 신체 긴장과 예기불안 완화 치료",
    "author": "해아림한의원",
    "date": "2026.09.18",
    "views": 92,
    "summary": "뚜렷한 이유 없이 지속되는 긴장감, 소화장애, 가슴 답답함 등 만성 불안 증상을 완화하고 자율신경계 균형을 되찾는 한의학 진료 가이드입니다.",
    "content": "범불안장애는 일상생활의 크고 작은 일들에 대해 통제하기 힘든 걱정이 6개월 이상 지속되는 상태를 말합니다. 끊임없는 걱정은 교감신경계를 지속적으로 자극하여 만성 근육 긴장, 두통, 피로감, 위장 장애 등을 동반하게 됩니다.\n\n한의학에서는 허약해진 심기를 북돋우고 울체된 기운을 풀어주는 시호, 백복신, 원지, 산조인 등의 약재를 활용하여 뇌 신경망의 과민성을 낮추고 전신 긴장을 완화하는 통합 진료를 시행합니다."
  },
  {
    "id": "col-auto-hyper-1",
    "category": "다한증",
    "title": "[수족다한증과 긴장성 발한] 손발 땀과 교감신경 과항진을 다스리는 자율신경 조절 한의학 치료",
    "author": "해아림한의원",
    "date": "2026.09.17",
    "views": 114,
    "summary": "긴장하거나 스트레스를 받을 때 손과 발에 땀이 쏟아지는 수족다한증의 원인과 흉부 교감신경 과흥분을 안정시키는 한의학 치료 원리를 소개합니다.",
    "content": "수족다한증(원발성 다한증)은 체온 조절 목적 외에도 정서적 긴장이나 스트레스에 의해 교감신경이 과민 반응하면서 에크린 땀샘이 과도하게 자극되어 발생합니다. 악수, 시험, 전자기기 사용 등 일상생활에 심각한 불편을 초래합니다.\n\n한의학에서는 비주사말(脾主四末)이라 하여 비위 기능과 사지의 말초 혈류 및 땀 조절이 밀접하다고 보며, 비위의 습열(濕熱)을 내리고 심포의 화(火)를 가라앉히는 맞춤 한약 치료를 통해 땀 분비 중추의 과민성을 정상화합니다."
  },
  {
    "id": "col-auto-hyper-2",
    "category": "다한증",
    "title": "[안면·두피 다한증] 상열감과 체온 조절 중추의 불균형을 해소하는 체질별 한약 치료",
    "author": "해아림한의원",
    "date": "2026.09.17",
    "views": 98,
    "summary": "식사 시, 또는 조금만 더워도 얼굴과 머리에서 비 오듯 쏟아지는 안면 다한증의 원인과 상체로 몰린 열(상열)을 내리는 한의학적 접근법을 분석합니다.",
    "content": "안면 및 두피 다한증은 시상하부의 체온 조절 중추가 체내 열 변화에 비정상적으로 민감하게 반응하여 일어납니다. 특히 갱년기 호르몬 변화나 위장관의 열(胃熱), 스트레스로 인한 간열(肝熱)이 상체로 솟구칠 때 심해집니다.\n\n체질별 진단을 통해 상부의 열을 맑게 식히고 하체로 기운을 내려주는 수승화강(水昇火降) 한약과 침 치료를 통해 두면부로 집중되는 땀 분비를 효과적으로 완화할 수 있습니다."
  },
  {
    "id": "col-auto-hyper-3",
    "category": "다한증",
    "title": "[전신 다한증과 자율신경실조] 기력 저하와 도한(식은땀)의 원인 분석 및 신체 항상성 회복",
    "author": "해아림한의원",
    "date": "2026.09.16",
    "views": 85,
    "summary": "자고 일어났을 때 베개가 젖는 도한증이나 만성 피로와 동반되는 전신 다한증의 한의학적 허증(虛症) 원인과 신체 기력 보강 진료를 설명합니다.",
    "content": "온몸에 전신적으로 땀이 많이 나거나 밤에 수면 중 식은땀을 흘리는 도한(盜汗)은 자율신경실조증 및 신체 면역력 저하와 밀접합니다. 기운이 허하여 땀구멍을 닫아두는 힘이 약해지는 기허(氣虛), 체내 진액과 음혈이 부족해 허열이 뜨는 음허(陰虛)가 주된 원인입니다.\n\n단순히 땀샘을 억제하는 대증 치료가 아니라, 체내 음양 균형을 맞추고 자율신경계 항상성을 복원하는 보음·보기 처방을 통해 몸을 근본적으로 튼튼하게 보강합니다."
  },
  {
    "id": "col-auto-soc-3",
    "category": "대인기피",
    "title": "[시선공포증과 발표불안] 타인의 시선에 예민한 편도체 과흥분 조절 및 심신 안정 한의학 치료",
    "author": "해아림한의원",
    "date": "2026.09.15",
    "views": 76,
    "summary": "타인 앞에 서거나 대화할 때 얼굴이 붉어지고 목소리가 떨리는 시선공포 및 사회불안 증상의 신경생리학적 원인과 한의학적 교감신경 안정법을 다룹니다.",
    "content": "사회공포증이나 대인기피증은 성격이 소심해서 발생하는 문제가 아니라, 타인의 표정이나 반응을 평가받는 상황에서 뇌의 편도체(Amygdala)가 과도하게 흥분하며 발생하는 자율신경계 과민 반응입니다.\n\n얼굴 붉어짐(적면), 손 떨림, 심계항진 등의 신체 증상이 먼저 나타나 불안을 더욱 악화시키는 악순환이 형성됩니다. 한의학에서는 심신불교(心腎不交)와 간화상염(肝火上炎)을 다스리는 청심안신 처방과 자율신경 조절을 통해 신체 반응을 먼저 진정시키고 심리적 자신감을 회복하도록 돕습니다."
  },
  {
    "id": "col-auto-adhd-4",
    "category": "ADHD",
    "title": "[소아 청소년 ADHD] 과잉행동과 뇌파 불균형 조절, 학습 집중력 향상 한약 치료",
    "author": "해아림한의원",
    "date": "2026.09.15",
    "views": 156,
    "summary": "수업 시간에 가만히 있지 못하고 지적을 자주 받는 소아 ADHD의 쎄타/베타 뇌파 불균형 교정과 과열된 신경계를 식혀주는 체질 한약의 역할을 설명합니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n수업 시간에 5분도 가만히 앉아있지 못하고, 충동적으로 친구의 말을 끊거나 돌아다니는 아이들 때문에 고민하시는 부모님들이 많습니다.\n\n소아 청소년 ADHD는 단순한 성격이나 훈육의 문제가 아닌, 전두엽의 성숙 지연과 도파민·노르에피네프린 등 신경전달물질의 분비 불균형에서 비롯됩니다.\n\n해아림한의원에서는 뇌파 검사(QEEG)와 주의집중력 검사를 통해 뇌의 각성도를 정밀 진단하고, 뇌신경망의 흥분을 가라앉히며 전두엽 기능을 정상화하는 체질별 맞춤 한약과 두뇌 훈련을 병행하여 자생적인 주의집중력 향상을 돕습니다."
  },
  {
    "id": "col-auto-insomnia-7",
    "category": "불면증",
    "title": "[HPA축 과각성과 수면] 피로 누적에도 잠들지 못하는 부신 피로와 뇌신경 안정 치료",
    "author": "해아림한의원",
    "date": "2026.09.14",
    "views": 164,
    "summary": "극심한 만성 피로에도 불구하고 밤만 되면 각성이 지속되는 시상하부-뇌하수체-부신(HPA) 축의 교란과 코르티솔 리듬 붕괴를 한의학적으로 치료하는 원리를 설명합니다.",
    "content": "안녕하세요. 해아림한의원입니다.\n\n몸은 녹초가 되었는데 침대에 눕기만 하면 머릿속이 또렷해지고 심장이 두근거려 잠들지 못하는 만성 불면증 환자분들이 많습니다.\n\n이는 스트레스 호르몬인 코르티솔을 조절하는 시상하부-뇌하수체-부신(HPA) 축이 만성 피로와 스트레스로 인해 과각성 상태에 빠졌기 때문입니다. 밤에 분비되어야 할 멜라토닌은 억제되고 코르티솔 수치가 치솟아 뇌가 비상경보를 끄지 못하는 것입니다.\n\n해아림한의원에서는 자율신경계 균형 검사와 맥진을 통해 허열(虛熱)을 내리고 심담(心膽)을 보하는 귀비탕, 산조인탕 가감방을 처방하여 뇌가 스스로 휴식 모드로 전환할 수 있도록 치료합니다."
  },
  {
    "id": "col-auto-clim-4",
    "category": "갱년기",
    "title": "[갱년기 야간 발한과 오한] 뼛속까지 시린 상열하한(上熱下寒)의 발생 원인과 한방 체질 치료",
    "author": "해아림한의원",
    "date": "2026.03.21",
    "views": 2668,
    "summary": "자다가 식은땀에 옷이 흠뻑 젖은 뒤 오한으로 떨리는 갱년기 체온 조절 장애의 원인과 수승화강(水昇火降) 한약 요법을 설명합니다.",
    "content": "많은 갱년기 환자분들이 머리와 상체는 불덩이처럼 뜨거운데, 발끝과 아랫배는 얼음장처럼 차가운 상열하한을 호소합니다. 체내 수승화강 순환축이 무너지면서 화기(火氣)는 위로 뜨고 수기(水氣)는 아래로 가라앉기 때문입니다. 황련, 황백 등으로 상체의 열을 내리고 지황, 산수유 등으로 하초의 음액을 보충하는 치료로 체온 밸런스를 되찾아 드립니다.",
    "img": "/images/columns/column_6_adrenal_fatigue.svg",
    "imgAlt": "[갱년기 야간 발한과 오한] 뼛속까지 시린 상열하한(上熱下寒)의 발생 원인과 한방 체질 치료",
    "desc": "자다가 식은땀에 옷이 흠뻑 젖은 뒤 오한으로 떨리는 갱년기 체온 조절 장애의 원인과 수승화강(水昇火降) 한약 요법을 설명합니다."
  },
  {
    "id": "col-auto-clim-5",
    "category": "갱년기",
    "title": "[갱년기 공황 유사 증상] 가슴이 조이고 숨이 턱 막힐 때, 심장 질환과 갱년기 자율신경실조의 감별",
    "author": "해아림한의원",
    "date": "2026.03.02",
    "views": 2629,
    "summary": "갑작스러운 흉부 압박감과 호흡곤란, 극심한 공포감이 갱년기 교감신경 폭풍과 결합되는 메커니즘과 응급 대처법을 전달합니다.",
    "content": "호르몬 결핍은 뇌 편도체의 공포 반응 역치를 낮추어 사소한 스트레스에도 교감신경 폭풍을 일으킵니다. 심장내과 검사상 이상이 없는 흉통과 과호흡은 갱년기 자율신경 실조의 대표 증상입니다. 4-6 복식호흡과 뇌신경 이완 침구 치료로 편도체 과열을 진정시키면 불안과 질식감이 완화됩니다.",
    "img": "/images/columns/column_1_palpitation.svg",
    "imgAlt": "[갱년기 공황 유사 증상] 가슴이 조이고 숨이 턱 막힐 때, 심장 질환과 갱년기 자율신경실조의 감별",
    "desc": "갑작스러운 흉부 압박감과 호흡곤란, 극심한 공포감이 갱년기 교감신경 폭풍과 결합되는 메커니즘과 응급 대처법을 전달합니다."
  },
  {
    "id": "col-auto-clim-6",
    "category": "갱년기",
    "title": "[갱년기 건망증과 브레인 포그] 머리에 안개가 낀 듯 멍하고 단어가 떠오르지 않을 때 대처법",
    "author": "해아림한의원",
    "date": "2026.01.03",
    "views": 2582,
    "summary": "에스트로겐 저하가 뇌 해마의 기억 형성 및 전두엽 인지 기능에 미치는 영향과 뇌 피로 회복 가이드입니다.",
    "content": "방금 둔 열쇠를 찾지 못하거나 사람 이름이 즉각 떠오르지 않는 브레인 포그는 치매 초기 증상이 아니라 뇌 에너지 대사 저하에 기인합니다. 뇌 혈류 순환을 촉진하는 석창포, 원지 등의 총명 생약과 두경부 추나요법이 뇌 피로를 덜어주고 인지 명료성을 되찾아줍니다.",
    "img": "/images/columns/column_5_neuroplasticity.svg",
    "imgAlt": "[갱년기 건망증과 브레인 포그] 머리에 안개가 낀 듯 멍하고 단어가 떠오르지 않을 때 대처법",
    "desc": "에스트로겐 저하가 뇌 해마의 기억 형성 및 전두엽 인지 기능에 미치는 영향과 뇌 피로 회복 가이드입니다."
  },
  {
    "id": "col-auto-clim-7",
    "category": "갱년기",
    "title": "[갱년기 감정 기복과 분노 조절] 나도 모르게 화가 치솟고 눈물이 쏟아질 때 간기울결(肝氣鬱結) 치료",
    "author": "해아림한의원",
    "date": "2025.08.23",
    "views": 2515,
    "summary": "호르몬 변화로 인한 신경전달물질 고갈과 갱년기 정서 불안정성을 다스리는 소간해울 한방 치료 원리입니다.",
    "content": "평소 온화하던 분이 사소한 말 한마디에 폭발하듯 화를 내거나 깊은 슬픔에 잠기는 것은 간(肝)의 소설 기능이 울체되었기 때문입니다. 시호, 백작약 중심의 가미소요산 처방으로 뭉친 기운을 풀어내면 감정의 파고가 부드럽게 가라앉아 가족 관계의 평온을 지킬 수 있습니다.",
    "img": "/images/columns/column_13_somatization.svg",
    "imgAlt": "[갱년기 감정 기복과 분노 조절] 나도 모르게 화가 치솟고 눈물이 쏟아질 때 간기울결(肝氣鬱結) 치료",
    "desc": "호르몬 변화로 인한 신경전달물질 고갈과 갱년기 정서 불안정성을 다스리는 소간해울 한방 치료 원리입니다."
  },
  {
    "id": "col-auto-clim-8",
    "category": "갱년기",
    "title": "[갱년기 만성 피로와 부신 피로 증후군] 자고 일어나도 무기력하고 기운이 없을 때 코르티솔 리듬 회복",
    "author": "해아림한의원",
    "date": "2025.06.24",
    "views": 2490,
    "summary": "난소 기능 퇴화 시 성호르몬을 대체 분비해야 하는 부신의 번아웃 기전과 한방 보신익정 치료법입니다.",
    "content": "폐경기 이후 부신이 성호르몬 대체 공장 역할을 수행하지만 만성 피로가 겹치면 코르티솔 분비 리듬이 무너집니다. 아침에 눈뜨기조차 힘든 만성 탈진 상태를 보신익정(補腎益精) 한약으로 보강하여 기초 생명력을 길러줍니다.",
    "img": "/images/columns/column_11_chronic_fatigue.svg",
    "imgAlt": "[갱년기 만성 피로와 부신 피로 증후군] 자고 일어나도 무기력하고 기운이 없을 때 코르티솔 리듬 회복",
    "desc": "난소 기능 퇴화 시 성호르몬을 대체 분비해야 하는 부신의 번아웃 기전과 한방 보신익정 치료법입니다."
  },
  {
    "id": "col-auto-clim-9",
    "category": "갱년기",
    "title": "[남성 갱년기 증상과 한의학적 관리] 테스토스테론 감소로 인한 무기력, 우울, 성기능 저하 극복",
    "author": "해아림한의원",
    "date": "2025.03.08",
    "views": 2457,
    "summary": "40대 후반부터 서서히 진행되는 남성 갱년기의 신경-내분비적 특징과 양기 보충 한방 클리닉 가이드입니다.",
    "content": "남성 또한 매년 남성호르몬이 1%씩 줄어들며 만성 피로, 복부 비만, 근력 감소, 의욕 상실을 겪습니다. 신양(腎陽)을 보하는 구기자, 복분자, 음양곽 기반의 맞춤 처방으로 남성 중년의 활력과 자생력을 북돋아 드립니다.",
    "img": "/images/columns/column_20_metabolism.svg",
    "imgAlt": "[남성 갱년기 증상과 한의학적 관리] 테스토스테론 감소로 인한 무기력, 우울, 성기능 저하 극복",
    "desc": "40대 후반부터 서서히 진행되는 남성 갱년기의 신경-내분비적 특징과 양기 보충 한방 클리닉 가이드입니다."
  },
  {
    "id": "col-auto-clim-10",
    "category": "갱년기",
    "title": "[갱년기 역류성 식도염과 소화불량] 명치 끝이 답답하고 속이 쓰릴 때 미주신경과 위장 자율신경 조절",
    "author": "해아림한의원",
    "date": "2024.11.09",
    "views": 2410,
    "summary": "에스트로겐 저하로 위장관 평활근 운동성이 저하되고 미주신경 긴장이 초래되는 원인 분석입니다.",
    "content": "갱년기에는 위장 운동을 조절하는 자율신경 균형이 흔들려 위산 역류, 잦은 체기, 복부 팽만감이 동반됩니다. 비위(脾胃)의 담음을 삭히는 온담탕 가감 처방으로 속을 편안하게 다스려 영양 흡수력을 높입니다.",
    "img": "/images/columns/column_10_gastric_nerve.svg",
    "imgAlt": "[갱년기 역류성 식도염과 소화불량] 명치 끝이 답답하고 속이 쓰릴 때 미주신경과 위장 자율신경 조절",
    "desc": "에스트로겐 저하로 위장관 평활근 운동성이 저하되고 미주신경 긴장이 초래되는 원인 분석입니다."
  },
  {
    "id": "col-auto-clim-11",
    "category": "갱년기",
    "title": "[갱년기 손가락 조조강직과 손발 저림] 아침마다 손이 굳는 증상과 말초 미세혈류 순환 장애",
    "author": "해아림한의원",
    "date": "2024.08.27",
    "views": 2361,
    "summary": "손가락 마디마디가 뻣뻣하고 주먹을 쥐기 힘든 갱년기 관절 증상의 한의학적 진맥과 약침 요법입니다.",
    "content": "기상 시 10~20분간 손가락이 굳는 증상은 관절 활액 감소와 말초 혈관 수축 때문입니다. 온경통락(溫經通絡) 한약과 봉약침 요법을 통해 관절강 내 염증을 가라앉히고 미세 혈류를 촉진하여 부드러운 손동작을 회복시킵니다.",
    "img": "/images/columns/column_22_pelvic_pain.svg",
    "imgAlt": "[갱년기 손가락 조조강직과 손발 저림] 아침마다 손이 굳는 증상과 말초 미세혈류 순환 장애",
    "desc": "손가락 마디마디가 뻣뻣하고 주먹을 쥐기 힘든 갱년기 관절 증상의 한의학적 진맥과 약침 요법입니다."
  },
  {
    "id": "col-auto-clim-12",
    "category": "갱년기",
    "title": "[갱년기 골다공증 예방과 뼈 건강] 호르몬 급감기 골밀도 저하를 막는 신장(腎) 보강 한방 관리",
    "author": "해아림한의원",
    "date": "2024.07.18",
    "views": 2292,
    "summary": "에스트로겐 감소로 파골세포 활성이 급증하는 시기에 뼈의 질을 지키고 골절 위험을 낮추는 생활의학 지침입니다.",
    "content": "에스트로겐은 뼈를 파괴하는 파골세포를 억제하는 방패 역할을 합니다. 폐경 초기 5년간 골밀도가 급격히 소실되므로 한의학에서 뼈를 주관하는 신(腎)의 기운을 돋우는 녹용, 두충, 속단 처방으로 골기질을 단단하게 보존해야 합니다.",
    "img": "/images/columns/column_14_recovery_roadmap.svg",
    "imgAlt": "[갱년기 골다공증 예방과 뼈 건강] 호르몬 급감기 골밀도 저하를 막는 신장(腎) 보강 한방 관리",
    "desc": "에스트로겐 감소로 파골세포 활성이 급증하는 시기에 뼈의 질을 지키고 골절 위험을 낮추는 생활의학 지침입니다."
  },
  {
    "id": "col-auto-clim-13",
    "category": "갱년기",
    "title": "[갱년기 피부 건조와 소양증] 온몸이 가렵고 벌레가 기어가는 듯한 이상감각의 한방 진액 보충법",
    "author": "해아림한의원",
    "date": "2024.03.16",
    "views": 2267,
    "summary": "피부 진피층의 콜라겐 감소와 자율신경 감각신경 과민으로 발생하는 피부 가려움증 치료 가이드입니다.",
    "content": "체내 진액이 마르면 피부 보습막이 깨지고 미세한 마찰에도 가려움이 폭발합니다. 풍열(風熱)을 끄고 혈액을 맑게 하는 당귀음자 처방으로 피부 장벽의 수분 유지력을 회복시키고 불필요한 긁음을 방지합니다.",
    "img": "/images/columns/column_9_sweat_dysregulation.svg",
    "imgAlt": "[갱년기 피부 건조와 소양증] 온몸이 가렵고 벌레가 기어가는 듯한 이상감각의 한방 진액 보충법",
    "desc": "피부 진피층의 콜라겐 감소와 자율신경 감각신경 과민으로 발생하는 피부 가려움증 치료 가이드입니다."
  },
  {
    "id": "col-auto-clim-14",
    "category": "갱년기",
    "title": "[갱년기 요실금과 방광염] 기침할 때 소변이 새고 화장실을 자주 찾는 하초(下焦) 허한증 치료",
    "author": "해아림한의원",
    "date": "2024.03.09",
    "views": 2227,
    "summary": "골반저근 약화와 방광 점막 위축으로 발생하는 비뇨기계 불편감을 한의학적 보중익기 요법으로 다스리기.",
    "content": "에스트로겐 결핍은 요도와 방광 점막을 위축시키고 면역력을 떨어뜨려 만성 방광염을 부릅니다. 하초의 양기를 끌어올리고 방광 괄약근의 탄력을 강화하는 축천환 계열 처방으로 화장실 불안에서 벗어나실 수 있습니다.",
    "img": "/images/columns/column_22_pelvic_pain.svg",
    "imgAlt": "[갱년기 요실금과 방광염] 기침할 때 소변이 새고 화장실을 자주 찾는 하초(下焦) 허한증 치료",
    "desc": "골반저근 약화와 방광 점막 위축으로 발생하는 비뇨기계 불편감을 한의학적 보중익기 요법으로 다스리기."
  },
  {
    "id": "col-auto-clim-15",
    "category": "갱년기",
    "title": "[갱년기 어지럼증과 이석증의 연관성] 누웠다 일어날 때 핑 돌고 중심 잡기 어려울 때 전정신경 안정",
    "author": "해아림한의원",
    "date": "2023.12.28",
    "views": 2188,
    "summary": "호르몬 변화와 칼슘 대사 이상이 내이 전정기관과 자율신경계에 미치는 영향 분석입니다.",
    "content": "갱년기에는 골밀도 감소와 함께 내이의 이석(耳石) 결합력이 약해져 어지럼증이 잦아집니다. 이비인후과 교정 후에도 지속되는 잔여 어지럼증은 뇌간 전정신경핵의 자율신경 피로를 풀어주는 맞춤 한약으로 회복할 수 있습니다.",
    "img": "/images/columns/column_4_pots_dizziness.svg",
    "imgAlt": "[갱년기 어지럼증과 이석증의 연관성] 누웠다 일어날 때 핑 돌고 중심 잡기 어려울 때 전정신경 안정",
    "desc": "호르몬 변화와 칼슘 대사 이상이 내이 전정기관과 자율신경계에 미치는 영향 분석입니다."
  },
  {
    "id": "col-auto-clim-16",
    "category": "갱년기",
    "title": "[갱년기 이명과 두통] 귀에서 삐- 소리가 나고 뒷목이 뻣뻣할 때 뇌 혈류와 간화(肝火) 다스리기",
    "author": "해아림한의원",
    "date": "2023.10.09",
    "views": 2136,
    "summary": "자율신경 불균형으로 뇌압이 높아지고 청신경이 과민해지는 갱년기성 두경부 증상 치료법입니다.",
    "content": "상열감이 지속되면 두경부 혈관이 과도하게 팽창하여 박동성 두통과 신경성 이명이 동반됩니다. 뇌로 치솟는 풍열을 내리는 조등산, 천마구등음 처방과 경추 교정으로 머리를 시원하고 맑게 정돈해 드립니다.",
    "img": "/images/columns/column_8_tinnitus_vagus.svg",
    "imgAlt": "[갱년기 이명과 두통] 귀에서 삐- 소리가 나고 뒷목이 뻣뻣할 때 뇌 혈류와 간화(肝火) 다스리기",
    "desc": "자율신경 불균형으로 뇌압이 높아지고 청신경이 과민해지는 갱년기성 두경부 증상 치료법입니다."
  },
  {
    "id": "col-auto-clim-17",
    "category": "갱년기",
    "title": "[갱년기 나잇살과 복부 비만] 적게 먹어도 배만 나오는 대사증후군, 담음(痰飮)과 기초대사 회복",
    "author": "해아림한의원",
    "date": "2023.03.23",
    "views": 2085,
    "summary": "기초대사량 감소와 인슐린 저항성 증가로 복부에 집중되는 지방 축적의 한의학적 해소 방안입니다.",
    "content": "여성호르몬 결핍은 지방의 체내 재배치를 일으켜 내장지방을 가파르게 축적시킵니다. 체내 노폐물인 담음과 어혈을 제거하고 신진대사를 촉진하는 맞춤 감비 한약으로 혈관 건강과 적정 체형을 함께 지킵니다.",
    "img": "/images/columns/column_24_reactive_hypoglycemia.svg",
    "imgAlt": "[갱년기 나잇살과 복부 비만] 적게 먹어도 배만 나오는 대사증후군, 담음(痰飮)과 기초대사 회복",
    "desc": "기초대사량 감소와 인슐린 저항성 증가로 복부에 집중되는 지방 축적의 한의학적 해소 방안입니다."
  },
  {
    "id": "col-auto-clim-18",
    "category": "갱년기",
    "title": "[갱년기 호르몬제 대체 한방 요법] 유방암·자궁근종 가족력으로 약물 복용이 두려울 때의 대안",
    "author": "해아림한의원",
    "date": "2023.03.08",
    "views": 2048,
    "summary": "호르몬제 복용이 조심스러운 여성들을 위해 신체 자생력을 길러 부드럽게 폐경기를 통과하는 원리입니다.",
    "content": "식물성 에스트로겐과 장부 보익 약재를 조화롭게 응용하여 인체 내부의 천연 호르몬 수용체 민감도를 안정화합니다. 유방과 자궁에 과도한 자극을 주지 않으면서 전신 컨디션을 올리는 안전한 맞춤 치료를 진행합니다.",
    "img": "/images/columns/column_16_hormone.svg",
    "imgAlt": "[갱년기 호르몬제 대체 한방 요법] 유방암·자궁근종 가족력으로 약물 복용이 두려울 때의 대안",
    "desc": "호르몬제 복용이 조심스러운 여성들을 위해 신체 자생력을 길러 부드럽게 폐경기를 통과하는 원리입니다."
  },
  {
    "id": "col-auto-clim-19",
    "category": "갱년기",
    "title": "[갱년기 입면장애 vs 수면유지장애] 얕은 잠과 다몽(多夢)을 끊어내고 깊은 델타파 수면으로 들어가는 법",
    "author": "해아림한의원",
    "date": "2022.12.22",
    "views": 1986,
    "summary": "수면제 내성 없이 뇌가 스스로 잠들고 깊은 잠을 유지하는 신경계 자생력 회복 로드맵입니다.",
    "content": "밤마다 시계를 보며 잠을 청하려 애쓸수록 교감신경 각성은 심해집니다. 산조인, 백자인, 용골 등의 안신(安神) 약재로 심장의 열을 내리고 수면 뇌파를 유도하여 아침이 개운한 자연 수면을 되찾아드립니다.",
    "img": "/images/columns/column_15_neurotransmitter.svg",
    "imgAlt": "[갱년기 입면장애 vs 수면유지장애] 얕은 잠과 다몽(多夢)을 끊어내고 깊은 델타파 수면으로 들어가는 법",
    "desc": "수면제 내성 없이 뇌가 스스로 잠들고 깊은 잠을 유지하는 신경계 자생력 회복 로드맵입니다."
  },
  {
    "id": "col-auto-clim-20",
    "category": "갱년기",
    "title": "[갱년기 부부 갈등과 심리적 위축] 신체상 변화로 인한 우울감 극복과 1:1 심리 정서 이완 상담",
    "author": "해아림한의원",
    "date": "2022.09.18",
    "views": 1951,
    "summary": "여성성 상실감과 빈 둥지 증후군이 겹칠 때 뇌 신경망의 정서적 회복탄력성을 키우는 솔루션입니다.",
    "content": "자녀의 독립과 신체 노화가 겹치는 50대에는 심리적 고립감이 극대화됩니다. 뇌파 바이오피드백과 1:1 인지 상담을 결합하여 내면의 회복탄력성을 회복하고 자신감 넘치는 제2의 인생을 설계하도록 돕습니다.",
    "img": "/images/columns/column_18_gut_brain_axis.svg",
    "imgAlt": "[갱년기 부부 갈등과 심리적 위축] 신체상 변화로 인한 우울감 극복과 1:1 심리 정서 이완 상담",
    "desc": "여성성 상실감과 빈 둥지 증후군이 겹칠 때 뇌 신경망의 정서적 회복탄력성을 키우는 솔루션입니다."
  },
  {
    "id": "col-auto-clim-21",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 상열감과 혈압 변동",
    "author": "해아림한의원",
    "date": "2022.09.13",
    "views": 1916,
    "summary": "오르내리는 혈압과 혈관 탄력 저하의 한방 다스림. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 오르내리는 혈압과 혈관 탄력 저하의 한방 다스림 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_12_rebound_hypotension.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 상열감과 혈압 변동",
    "desc": "오르내리는 혈압과 혈관 탄력 저하의 한방 다스림. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-22",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 구강작열감 증후군",
    "author": "해아림한의원",
    "date": "2021.12.18",
    "views": 1865,
    "summary": "혀가 타는 듯 맵고 입이 마르는 진액 고갈 치료. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 혀가 타는 듯 맵고 입이 마르는 진액 고갈 치료 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_21_olfactory_gustatory.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 구강작열감 증후군",
    "desc": "혀가 타는 듯 맵고 입이 마르는 진액 고갈 치료. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-23",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 수족냉증과 레이노 양상",
    "author": "해아림한의원",
    "date": "2021.10.15",
    "views": 1822,
    "summary": "손발이 하얗게 질리고 저릴 때 말초 순환 개선. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 손발이 하얗게 질리고 저릴 때 말초 순환 개선 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_3_temp_dysregulation.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 수족냉증과 레이노 양상",
    "desc": "손발이 하얗게 질리고 저릴 때 말초 순환 개선. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-24",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 불안장애와 건강염려증",
    "author": "해아림한의원",
    "date": "2021.08.06",
    "views": 1778,
    "summary": "사소한 신체 이상에도 큰 병이 아닐까 두려울 때. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 사소한 신체 이상에도 큰 병이 아닐까 두려울 때 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_29_panic_boundary.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 불안장애와 건강염려증",
    "desc": "사소한 신체 이상에도 큰 병이 아닐까 두려울 때. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-25",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 호흡곤란과 과호흡",
    "author": "해아림한의원",
    "date": "2021.02.19",
    "views": 1701,
    "summary": "가슴이 뻐근하고 숨이 깊이 쉬어지지 않는 신경학적 이유. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 가슴이 뻐근하고 숨이 깊이 쉬어지지 않는 신경학적 이유 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_10_hyperventilation.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 호흡곤란과 과호흡",
    "desc": "가슴이 뻐근하고 숨이 깊이 쉬어지지 않는 신경학적 이유. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-26",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 심근 미세혈관 협심증",
    "author": "해아림한의원",
    "date": "2020.08.12",
    "views": 1691,
    "summary": "관상동맥 조영술 정상인데 가슴 통증이 지속될 때. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 관상동맥 조영술 정상인데 가슴 통증이 지속될 때 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_25_microvascular_angina.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 심근 미세혈관 협심증",
    "desc": "관상동맥 조영술 정상인데 가슴 통증이 지속될 때. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-27",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 부정맥과 조기수축",
    "author": "해아림한의원",
    "date": "2020.02.23",
    "views": 1624,
    "summary": "심장이 덜컹거리거나 한 박자 건너뛰는 심계항진. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 심장이 덜컹거리거나 한 박자 건너뛰는 심계항진 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_27_premature_ventricular.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 부정맥과 조기수축",
    "desc": "심장이 덜컹거리거나 한 박자 건너뛰는 심계항진. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-28",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 계절성 적응 장애",
    "author": "해아림한의원",
    "date": "2019.09.14",
    "views": 1573,
    "summary": "환절기마다 기력이 떨어지고 상열감이 악화될 때. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 환절기마다 기력이 떨어지고 상열감이 악화될 때 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_28_seasonal_adaptation.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 계절성 적응 장애",
    "desc": "환절기마다 기력이 떨어지고 상열감이 악화될 때. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-29",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 두개천골요법(CST)의 효과",
    "author": "해아림한의원",
    "date": "2019.07.03",
    "views": 1523,
    "summary": "뇌척수액 순환을 통해 시상하부 신경압박을 해소하는 원리. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 뇌척수액 순환을 통해 시상하부 신경압박을 해소하는 원리 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_7_cervical_cst.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 두개천골요법(CST)의 효과",
    "desc": "뇌척수액 순환을 통해 시상하부 신경압박을 해소하는 원리. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-30",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 식이요법과 한방 티테라피",
    "author": "해아림한의원",
    "date": "2019.05.04",
    "views": 1508,
    "summary": "석류, 칡(갈근), 콩류의 올바른 섭취와 한약과의 상호작용. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 석류, 칡(갈근), 콩류의 올바른 섭취와 한약과의 상호작용 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_2_gut_brain.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 식이요법과 한방 티테라피",
    "desc": "석류, 칡(갈근), 콩류의 올바른 섭취와 한약과의 상호작용. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-31",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 운동 처방 가이드",
    "author": "해아림한의원",
    "date": "2018.11.14",
    "views": 1436,
    "summary": "관절에 무리를 주지 않고 코어와 자율신경을 안정시키는 유산소 운동. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 관절에 무리를 주지 않고 코어와 자율신경을 안정시키는 유산소 운동 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_14_vagus_stimulation.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 운동 처방 가이드",
    "desc": "관절에 무리를 주지 않고 코어와 자율신경을 안정시키는 유산소 운동. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-32",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 자하거(태반) 약침의 임상 효과",
    "author": "해아림한의원",
    "date": "2018.10.02",
    "views": 1424,
    "summary": "기혈을 크게 보하고 음허화왕을 다스리는 프리미엄 약침. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 기혈을 크게 보하고 음허화왕을 다스리는 프리미엄 약침 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_30_cure_homeostasis.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 자하거(태반) 약침의 임상 효과",
    "desc": "기혈을 크게 보하고 음허화왕을 다스리는 프리미엄 약침. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-33",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 조기 폐경과 40대 갱년기 관리",
    "author": "해아림한의원",
    "date": "2018.04.04",
    "views": 1367,
    "summary": "난소 예비능(AMH) 저하와 조기 갱년기 극복을 위한 한방 전략. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 난소 예비능(AMH) 저하와 조기 갱년기 극복을 위한 한방 전략 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_16_hormone.svg",
    "imgAlt": "[갱년기 클리닉] 조기 폐경과 40대 갱년기 관리",
    "desc": "난소 예비능(AMH) 저하와 조기 갱년기 극복을 위한 한방 전략. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-34",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 만성 어깨 결림과 오십견",
    "author": "해아림한의원",
    "date": "2018.02.26",
    "views": 1325,
    "summary": "동결견 증상과 한의학적 어혈 제거 및 관절 가동술. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 동결견 증상과 한의학적 어혈 제거 및 관절 가동술 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_23_bruxism_tmj.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 만성 어깨 결림과 오십견",
    "desc": "동결견 증상과 한의학적 어혈 제거 및 관절 가동술. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-35",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 눈 피로와 안구건조증",
    "author": "해아림한의원",
    "date": "2018.02.23",
    "views": 1259,
    "summary": "눈이 뻑뻑하고 침침할 때 간신(肝腎) 음혈 보충 처방. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 눈이 뻑뻑하고 침침할 때 간신(肝腎) 음혈 보충 처방 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_26_photophobia_pupil.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 눈 피로와 안구건조증",
    "desc": "눈이 뻑뻑하고 침침할 때 간신(肝腎) 음혈 보충 처방. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-36",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 턱관절 장애와 이갈이",
    "author": "해아림한의원",
    "date": "2017.05.06",
    "views": 1235,
    "summary": "수면 중 긴장으로 턱이 뻐근하고 두통이 생길 때 교근 이완. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 수면 중 긴장으로 턱이 뻐근하고 두통이 생길 때 교근 이완 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_23_bruxism_tmj.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 턱관절 장애와 이갈이",
    "desc": "수면 중 긴장으로 턱이 뻐근하고 두통이 생길 때 교근 이완. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-37",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 위장 무력증과 만성 트림",
    "author": "해아림한의원",
    "date": "2017.01.31",
    "views": 1174,
    "summary": "교감신경 항진으로 굳어버린 소화기 신경망 활성화. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 교감신경 항진으로 굳어버린 소화기 신경망 활성화 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_10_gastric_nerve.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 위장 무력증과 만성 트림",
    "desc": "교감신경 항진으로 굳어버린 소화기 신경망 활성화. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-38",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 수면 리듬과 햇볕 산책",
    "author": "해아림한의원",
    "date": "2016.09.17",
    "views": 1122,
    "summary": "멜라토닌과 세로토닌의 시차 적응과 자연 치유력. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 멜라토닌과 세로토닌의 시차 적응과 자연 치유력 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_15_neurotransmitter.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 수면 리듬과 햇볕 산책",
    "desc": "멜라토닌과 세로토닌의 시차 적응과 자연 치유력. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-39",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 무릎 퇴행성 변화와 연골 관리",
    "author": "해아림한의원",
    "date": "2016.06.02",
    "views": 1110,
    "summary": "체중 증가와 관절 부하를 줄이는 통합 한방 관리법. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 체중 증가와 관절 부하를 줄이는 통합 한방 관리법 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_22_pelvic_pain.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 무릎 퇴행성 변화와 연골 관리",
    "desc": "체중 증가와 관절 부하를 줄이는 통합 한방 관리법. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-40",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 만성 두통의 변증 유형",
    "author": "해아림한의원",
    "date": "2014.11.12",
    "views": 1054,
    "summary": "담훈, 기허, 어혈에 따른 맞춤 탕약과 침구 치료. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 담훈, 기허, 어혈에 따른 맞춤 탕약과 침구 치료 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_7_cervical_cst.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 만성 두통의 변증 유형",
    "desc": "담훈, 기허, 어혈에 따른 맞춤 탕약과 침구 치료. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-41",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 가족과의 대화법",
    "author": "해아림한의원",
    "date": "2014.05.17",
    "views": 1010,
    "summary": "주변의 이해와 공감을 이끌어내는 정서적 소통 가이드. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 주변의 이해와 공감을 이끌어내는 정서적 소통 가이드 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_18_gut_brain_axis.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 가족과의 대화법",
    "desc": "주변의 이해와 공감을 이끌어내는 정서적 소통 가이드. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-42",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 심신 안정 호흡법",
    "author": "해아림한의원",
    "date": "2014.03.10",
    "views": 969,
    "summary": "4-7-8 복식호흡으로 자율신경을 즉각 안정시키는 실천법. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 4-7-8 복식호흡으로 자율신경을 즉각 안정시키는 실천법 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_14_vagus_stimulation.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 심신 안정 호흡법",
    "desc": "4-7-8 복식호흡으로 자율신경을 즉각 안정시키는 실천법. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-43",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 탈모와 두피 열감",
    "author": "해아림한의원",
    "date": "2014.01.02",
    "views": 906,
    "summary": "상체로 치솟는 열을 내려 모근을 보호하는 수승화강 원리. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 상체로 치솟는 열을 내려 모근을 보호하는 수승화강 원리 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_3_temp_dysregulation.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 탈모와 두피 열감",
    "desc": "상체로 치솟는 열을 내려 모근을 보호하는 수승화강 원리. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-44",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 심신불교(心腎不交) 병리 해설",
    "author": "해아림한의원",
    "date": "2013.11.26",
    "views": 880,
    "summary": "심장의 화와 신장의 수가 어우러지는 이상적 생체 균형. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 심장의 화와 신장의 수가 어우러지는 이상적 생체 균형 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_30_cure_homeostasis.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 심신불교(心腎不交) 병리 해설",
    "desc": "심장의 화와 신장의 수가 어우러지는 이상적 생체 균형. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-45",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 우울증과 항우울제 테이퍼링",
    "author": "해아림한의원",
    "date": "2013.09.18",
    "views": 825,
    "summary": "한약과 양약의 병행 복용 후 안정적 약물 감량 프로세스. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 한약과 양약의 병행 복용 후 안정적 약물 감량 프로세스 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_15_neurotransmitter.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 우울증과 항우울제 테이퍼링",
    "desc": "한약과 양약의 병행 복용 후 안정적 약물 감량 프로세스. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-46",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 림프 순환과 하지 부종",
    "author": "해아림한의원",
    "date": "2013.07.07",
    "views": 774,
    "summary": "저녁마다 다리가 무겁고 붓는 기체(氣滯) 어혈 치료. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 저녁마다 다리가 무겁고 붓는 기체(氣滯) 어혈 치료 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_12_rebound_hypotension.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 림프 순환과 하지 부종",
    "desc": "저녁마다 다리가 무겁고 붓는 기체(氣滯) 어혈 치료. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-47",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 회복탄력성을 높이는 3대 습관",
    "author": "해아림한의원",
    "date": "2013.06.01",
    "views": 745,
    "summary": "숙면, 온수 섭취, 마음 챙김 명상으로 다지는 신경계 건강. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 숙면, 온수 섭취, 마음 챙김 명상으로 다지는 신경계 건강 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_14_recovery_roadmap.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 회복탄력성을 높이는 3대 습관",
    "desc": "숙면, 온수 섭취, 마음 챙김 명상으로 다지는 신경계 건강. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-48",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 한약 복용 시 간 기능 안전성",
    "author": "해아림한의원",
    "date": "2011.12.18",
    "views": 697,
    "summary": "KFDA 규격 한약재와 간·신장 부담 없는 안심 처방 시스템. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. KFDA 규격 한약재와 간·신장 부담 없는 안심 처방 시스템 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_30_cure_homeostasis.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 한약 복용 시 간 기능 안전성",
    "desc": "KFDA 규격 한약재와 간·신장 부담 없는 안심 처방 시스템. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  },
  {
    "id": "col-auto-clim-49",
    "category": "갱년기",
    "title": "[갱년기 클리닉] 갱년기 졸업을 위한 장기 건강 로드맵",
    "author": "해아림한의원",
    "date": "2011.09.28",
    "views": 650,
    "summary": "폐경 이후 건강하고 활력 넘치는 골든 에이지 유지 비결. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다.",
    "content": "갱년기 증상은 신체의 한 부분에 국한되지 않고 자율신경계와 뇌신경망 전반에 걸쳐 신체화 증상으로 표출됩니다. 폐경 이후 건강하고 활력 넘치는 골든 에이지 유지 비결 증상이 지속될 경우 만성 신경 피로로 이어질 수 있으므로, 조기에 장부의 음양 균형을 맞추고 자율신경계 완충력을 길러주는 맞춤 한방 치료가 일상 회복에 큰 도움이 됩니다. 해아림한의원 대구본점에서는 16년 임상 경험을 바탕으로 환자 개개인의 체질과 병력에 부합하는 정밀 진료를 실천합니다.",
    "img": "/images/columns/column_14_recovery_roadmap.svg",
    "imgAlt": "[갱년기 클리닉] 갱년기 졸업을 위한 장기 건강 로드맵",
    "desc": "폐경 이후 건강하고 활력 넘치는 골든 에이지 유지 비결. 해아림한의원 대구본점 1:1 맞춤 진료 및 한의학적 관리 가이드를 전해드립니다."
  }
];

var columnsCurrentPage = 1;
var columnsPerPage = 15;
var currentColumnFilterCategory = 'ALL';
var currentColumnFilterKeyword = '';

function isHealimSuperAdmin() {
  try {
    var raw = localStorage.getItem('healim_auth_user');
    if (!raw) return false;
    var u = JSON.parse(raw);
    return (u.uid === 'healim0071' || u.isAdmin === true || u.grade === 'superadmin' || u.role === 'admin');
  } catch(e) { return false; }
}

function getDiseaseDetailPageUrl(disease) {
  if (!disease) return '/columns/';
  var d = disease.trim();
  if (d.includes('틱')) return '/tic-disorder/';
  if (d.includes('공황')) return '/panic-disorder/';
  if (d.includes('어지')) return '/dizziness/';
  if (d.includes('자율신경')) return '/dysautonomia/';
  if (d.includes('불면')) return '/insomnia/';
  if (d.includes('ADHD') || d.includes('adhd')) return '/adhd/';
  if (d.includes('불안')) return '/anxiety-disorder/';
  if (d.includes('강박')) return '/ocd/';
  if (d.includes('대인') || d.includes('사회')) return '/social-phobia/';
  if (d.includes('다한')) return '/hyperhidrosis/';
  if (d.includes('갱년기')) return '/climacteric/';
  return '/columns/';
}

function getRealtimeBoardColumnsData() {
  var list = defaultColumnsData.slice();
  try {
    var savedRaw = localStorage.getItem('healim_board_columns');
    if (savedRaw) {
      var saved = JSON.parse(savedRaw);
      if (Array.isArray(saved) && saved.length > 0) {
        saved.forEach(function(sItem) {
          if (!sItem || !sItem.id) return;
          var exists = list.some(function(it) { return String(it.id) === String(sItem.id) || (sItem.title && it.title === sItem.title); });
          if (!exists) list.unshift(sItem);
        });
      }
    }
  } catch(e) {}
  return list;
}

function renderColumnsList() {
  var tbody = document.getElementById('columnsTableBody');
  if (!tbody) return;

  var isSuper = isHealimSuperAdmin();
  var adminBtn = document.getElementById('btnAdminWriteColumn');
  if (adminBtn) adminBtn.style.display = isSuper ? 'inline-block' : 'none';

  var autoBar = document.getElementById('autoColumnStatusBar');
  if (autoBar) autoBar.style.display = isSuper ? 'flex' : 'none';

  var adminHeaders = document.querySelectorAll('.col-admin-action');
  adminHeaders.forEach(function(el) { el.style.display = isSuper ? 'table-cell' : 'none'; });

  var list = getRealtimeBoardColumnsData();
  var filtered = list.filter(function(item) {
    if (!item) return false;
    var matchCat = (currentColumnFilterCategory === 'ALL' || item.category === currentColumnFilterCategory);
    var matchKey = (!currentColumnFilterKeyword || (item.title && item.title.includes(currentColumnFilterKeyword)) || (item.content && item.content.includes(currentColumnFilterKeyword)));
    return matchCat && matchKey;
  });

  var total = filtered.length;
  var totalPages = Math.ceil(total / columnsPerPage) || 1;
  if (columnsCurrentPage > totalPages) columnsCurrentPage = 1;

  var startIdx = (columnsCurrentPage - 1) * columnsPerPage;
  var pageItems = filtered.slice(startIdx, startIdx + columnsPerPage);

  tbody.innerHTML = '';
  if (pageItems.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 40px; color: #94A3B8;">등록된 칼럼이 없습니다.</td></tr>';
  } else {
    pageItems.forEach(function(col, idx) {
      var displayNum = total - (startIdx + idx);
      var tr = document.createElement('tr');
      tr.style.borderBottom = '1px solid #F1F5F9';
      tr.style.cursor = 'pointer';
      tr.style.transition = 'background 0.15s';
      tr.onmouseover = function() { this.style.background = '#F8FAFB'; };
      tr.onmouseout = function() { this.style.background = '#FFFFFF'; };
      tr.onclick = function() { openColumnModal(col.id); };

      var actionHtml = isSuper ? '<button type="button" onclick="event.stopPropagation(); handleAdminDeleteColumn(\'' + col.id + '\');" style="padding: 3px 8px; font-size: 11px; background: #FEE2E2; color: #DC2626; border: 1px solid #FCA5A5; border-radius: 4px; cursor: pointer; font-weight: 700;">삭제</button>' : '';

      tr.innerHTML = 
        '<td style="padding: 14px 12px; text-align: center; color: #64748B; font-size: 13px;">' + displayNum + '</td>' +
        '<td style="padding: 14px 12px; text-align: center;"><span style="display: inline-block; padding: 3px 8px; background: #E6F6F8; color: #008194; font-size: 12px; font-weight: 700; border-radius: 4px;">' + (col.category || '칼럼') + '</span></td>' +
        '<td style="padding: 14px 16px;"><a href="/columns/?id=' + encodeURIComponent(col.id) + '" onclick="event.preventDefault(); openColumnModal(\'' + col.id + '\');" style="color: #0F172A; font-weight: 700; text-decoration: none; font-size: 14.5px; line-height: 1.45; display: block;">' + (col.title || '') + '</a></td>' +
        '<td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #475569; font-size: 13px;">' + (col.author || '해아림한의원') + '</td>' +
        '<td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">' + (col.date || '') + '</td>' +
        '<td class="col-hide-mobile" style="padding: 14px 12px; text-align: center; color: #94A3B8; font-size: 12.5px;">' + (col.views || 0) + '</td>' +
        '<td class="col-admin-action" style="' + (isSuper ? 'display: table-cell;' : 'display: none;') + ' padding: 14px 8px; text-align: center;">' + actionHtml + '</td>';
      tbody.appendChild(tr);
    });
  }

  renderColumnsPagination(totalPages);
}

function renderColumnsPagination(totalPages) {
  var container = document.getElementById('columnsPagination');
  if (!container) return;
  container.innerHTML = '';
  if (totalPages <= 1) return;

  for (var p = 1; p <= totalPages; p++) {
    (function(pageNum) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = pageNum;
      btn.style.padding = '6px 12px';
      btn.style.borderRadius = '6px';
      btn.style.fontSize = '13px';
      btn.style.fontWeight = '700';
      btn.style.cursor = 'pointer';
      btn.style.border = '1px solid ' + (pageNum === columnsCurrentPage ? '#008194' : '#E2E8F0');
      btn.style.background = pageNum === columnsCurrentPage ? '#008194' : '#FFFFFF';
      btn.style.color = pageNum === columnsCurrentPage ? '#FFFFFF' : '#475569';
      btn.onclick = function() {
        columnsCurrentPage = pageNum;
        renderColumnsList();
        window.scrollTo({ top: document.querySelector('.community-board-table').offsetTop - 120, behavior: 'smooth' });
      };
      container.appendChild(btn);
    })(p);
  }
}

function filterColumns() {
  var catSelect = document.getElementById('columnCategoryFilter');
  var keyInput = document.getElementById('columnSearchInput');
  if (catSelect) currentColumnFilterCategory = catSelect.value;
  if (keyInput) currentColumnFilterKeyword = keyInput.value.trim();
  columnsCurrentPage = 1;
  renderColumnsList();
}

function openColumnModal(id) {
  var list = getRealtimeBoardColumnsData();
  var col = list.find(function(it) { return String(it.id) === String(id) || it.title === id; });
  if (!col) return;

  col.views = (parseInt(col.views, 10) || 0) + 1;

  var catEl = document.getElementById('modalColCategory');
  var titleEl = document.getElementById('modalColTitle');
  var authorEl = document.getElementById('modalColAuthor');
  var dateEl = document.getElementById('modalColDate');
  var viewsEl = document.getElementById('modalColViews');
  var contentEl = document.getElementById('modalColContent');
  var imgWrap = document.getElementById('modalColImgWrap');
  var imgEl = document.getElementById('modalColImg');

  if (catEl) catEl.textContent = col.category || '치료칼럼';
  if (titleEl) titleEl.textContent = col.title || '';
  if (authorEl) authorEl.textContent = col.author || '해아림한의원';
  if (dateEl) dateEl.textContent = col.date || '';
  if (viewsEl) viewsEl.textContent = col.views;
  if (contentEl) contentEl.textContent = col.content || col.summary || col.desc || '';

  if (imgWrap && imgEl) {
    if (col.img) {
      imgEl.src = col.img;
      imgEl.alt = col.imgAlt || col.title || '';
      imgWrap.style.display = 'block';
    } else {
      imgWrap.style.display = 'none';
    }
  }

  var btnDisease = document.getElementById('btnModalDiseaseLink');
  var txtDisease = document.getElementById('txtModalDiseaseLink');
  if (btnDisease && txtDisease) {
    var url = getDiseaseDetailPageUrl(col.category || '');
    btnDisease.href = url;
    txtDisease.textContent = (col.category || '질환') + ' 클리닉 바로가기';
  }

  var modal = document.getElementById('columnDetailModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeColumnModal() {
  var modal = document.getElementById('columnDetailModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function openCustomTitlePublishModal() {
  var modal = document.getElementById('customTitlePublishModal');
  if (modal) modal.style.display = 'flex';
}

function closeCustomTitlePublishModal() {
  var modal = document.getElementById('customTitlePublishModal');
  if (modal) modal.style.display = 'none';
}

function executeCustomTitlePublish() {
  var disease = document.getElementById('customPublishDisease').value;
  var title = document.getElementById('customPublishTitle').value.trim();
  if (!title) { alert('칼럼 제목을 입력해주세요.'); return; }

  var newCol = {
    id: 'col-custom-' + Date.now(),
    category: disease,
    title: title,
    author: '김대억 한방신경정신과 박사',
    date: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
    views: Math.floor(Math.random() * 50) + 100,
    summary: title + ' - 해아림한의원 대구본점 김대억 박사의 심층 임상 칼럼입니다.',
    content: title + '\n\n해아림한의원 대구본점 김대억 대표원장입니다.\n' + disease + ' 치료에서 가장 중요한 것은 원인 분석과 뇌 자생력 회복입니다.\n1:1 맞춤 한방 치료를 통해 신경계 불균형을 바로잡습니다.'
  };

  var saved = [];
  try {
    var raw = localStorage.getItem('healim_board_columns');
    if (raw) saved = JSON.parse(raw);
    if (!Array.isArray(saved)) saved = [];
  } catch(e) {}

  saved.unshift(newCol);
  localStorage.setItem('healim_board_columns', JSON.stringify(saved));
  closeCustomTitlePublishModal();
  renderColumnsList();
  alert('치료칼럼이 성공적으로 발행되었습니다.');
}

function triggerAutoColumnPublishManual() {
  if (typeof window.triggerAutoColumnPublish === 'function') {
    window.triggerAutoColumnPublish();
    setTimeout(renderColumnsList, 300);
  } else {
    alert('자동 발행 엔진이 로드 중입니다.');
  }
}

function openColumnWriteModal() {
  var modal = document.getElementById('columnWriteModal');
  if (modal) modal.style.display = 'flex';
}

function closeColumnWriteModal() {
  var modal = document.getElementById('columnWriteModal');
  if (modal) modal.style.display = 'none';
}

function handleSaveColumn(e) {
  if (e && e.preventDefault) e.preventDefault();
  var cat = document.getElementById('writeColCategory').value;
  var title = document.getElementById('writeColTitle').value.trim();
  var summary = document.getElementById('writeColSummary').value.trim();
  var content = document.getElementById('writeColContent').value.trim();

  if (!title || !content) { alert('제목과 본문을 입력해주세요.'); return; }

  var newCol = {
    id: 'col-manual-' + Date.now(),
    category: cat,
    title: title,
    author: '김대억 대표원장',
    date: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
    views: 1,
    summary: summary || title,
    content: content
  };

  var saved = [];
  try {
    var raw = localStorage.getItem('healim_board_columns');
    if (raw) saved = JSON.parse(raw);
    if (!Array.isArray(saved)) saved = [];
  } catch(e) {}

  saved.unshift(newCol);
  localStorage.setItem('healim_board_columns', JSON.stringify(saved));
  closeColumnWriteModal();
  renderColumnsList();
  alert('칼럼이 저장되었습니다.');
}

function handleAdminDeleteColumn(id) {
  if (!confirm('정말 이 칼럼을 삭제하시겠습니까?')) return;
  try {
    var raw = localStorage.getItem('healim_board_columns');
    var list = raw ? JSON.parse(raw) : [];
    list = list.filter(function(it) { return String(it.id) !== String(id); });
    localStorage.setItem('healim_board_columns', JSON.stringify(list));

    var delRaw = localStorage.getItem('healim_deleted_column_ids');
    var delList = delRaw ? JSON.parse(delRaw) : [];
    delList.push(id);
    localStorage.setItem('healim_deleted_column_ids', JSON.stringify(delList));
  } catch(e) {}
  renderColumnsList();
}

document.addEventListener('DOMContentLoaded', function() {
  renderColumnsList();

  // URL ?id= 파라미터가 있는 경우 자동 모달 열기
  var params = new URLSearchParams(window.location.search);
  var targetId = params.get('id');
  if (targetId) {
    setTimeout(function() { openColumnModal(targetId); }, 100);
  }
});

window.addEventListener('storage', function(e) {
  if (e && e.key && e.key.includes('column')) renderColumnsList();
});
</script>
