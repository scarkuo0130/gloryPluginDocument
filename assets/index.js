// 版號（每次有實質改動請手動 +1，方便確認瀏覽器是否載到最新版）
  // console 輸入 `ver` 可查看
  window.ver = '2026.05.21-006';
  console.log('%cindex.html ver: ' + window.ver, 'color:#ffd166;font-weight:bold');

  const mails = [
    { id: 1, icon: '🎁', title: '每日簽到獎勵', preview: '恭喜獲得 100 EXP，請點擊領取', time: '今天 09:12', body: '恭喜獲得 100 EXP，請點擊領取。', unread: true },
    { id: 2, icon: '🏆', title: 'TurnOver 排行榜獎勵', preview: '你進入第 8 名！獎勵已發送', time: '今天 02:33', body: '你進入第 8 名！獎勵已發送至帳號。', unread: true },
    { id: 3, icon: '📢', title: '系統公告', preview: '4/30 凌晨 2:00 - 4:00 系統維護', time: '昨天 18:00', body: '4/30 凌晨 2:00 - 4:00 將進行系統維護。', unread: true },
    { id: 4, icon: '💎', title: '等級提升', preview: '恭喜升級至 Lv.12，解鎖新機台！', time: '4/25 21:08', body: '恭喜升級至 Lv.12，解鎖新機台！', unread: false },
    { id: 5, icon: '🎉', title: '歡迎加入', preview: '新手禮包已發送至帳號', time: '4/20 12:00', body: '新手禮包已發送至帳號。', unread: false }
  ];

  const DEFAULT_BG_THEME = 'default_12_cobalt_night_solid';
  const DEFAULT_BG_TEXT_SHADOW = '0 3px 10px rgba(0,0,0,0.75), 0 0 4px rgba(0,0,0,0.6)';
  const BACKGROUND_THEMES = {
    sunset: {
      label: '日落',
      background: 'radial-gradient(ellipse at 75% 100%, rgba(255, 230, 150, 0.6), transparent 50%), radial-gradient(circle at 75% 80%, #ffe066 0%, #ff8c42 18%, transparent 22%), linear-gradient(180deg, #6c3483 0%, #c0392b 35%, #ff6b9d 65%, #ffc042 100%)',
      accent: 'rgba(255, 209, 102, 0.85)',
      glow: 'rgba(255, 209, 102, 0.25)',
      textColor: '#fff',
      textShadow: DEFAULT_BG_TEXT_SHADOW
    },
    galaxy: {
      label: '星河',
      background: 'radial-gradient(1.5px 1.5px at 18% 28%, #fff, transparent 50%), radial-gradient(1px 1px at 65% 65%, #fff, transparent 50%), radial-gradient(2px 2px at 82% 18%, #fff, transparent 50%), radial-gradient(1px 1px at 38% 78%, #fff, transparent 50%), radial-gradient(1.5px 1.5px at 50% 45%, #fff, transparent 50%), radial-gradient(1px 1px at 90% 80%, #fff, transparent 50%), radial-gradient(circle at 30% 40%, #6c5ce7 0%, #2d1b4e 60%, #0a0420 100%)',
      accent: 'rgba(200, 195, 255, 0.85)',
      glow: 'rgba(140, 130, 255, 0.3)',
      textColor: '#fff',
      textShadow: DEFAULT_BG_TEXT_SHADOW
    },
    ocean: {
      label: '海洋',
      background: 'repeating-linear-gradient(45deg, transparent 0 14px, rgba(255,255,255,0.06) 14px 16px), radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.18), transparent 60%), linear-gradient(180deg, #1e90ff 0%, #00b4d8 50%, #2ed573 100%)',
      accent: 'rgba(220, 250, 255, 0.85)',
      glow: 'rgba(46, 213, 115, 0.25)',
      textColor: '#fff',
      textShadow: DEFAULT_BG_TEXT_SHADOW
    },
    lava: {
      label: '熔岩',
      background: 'radial-gradient(circle at 30% 70%, rgba(255, 60, 0, 0.85) 0%, transparent 40%), radial-gradient(circle at 70% 30%, rgba(255, 200, 0, 0.55) 0%, transparent 40%), radial-gradient(circle at 85% 90%, rgba(255, 100, 30, 0.7) 0%, transparent 35%), linear-gradient(135deg, #1a0606 0%, #6d0e0e 35%, #c0392b 65%, #ff4500 100%)',
      accent: 'rgba(255, 140, 50, 0.9)',
      glow: 'rgba(255, 80, 0, 0.4)',
      textColor: '#fff',
      textShadow: DEFAULT_BG_TEXT_SHADOW
    },
    jade: {
      label: '翡翠',
      background: 'repeating-linear-gradient(135deg, transparent 0 18px, rgba(255,255,255,0.05) 18px 20px), radial-gradient(circle at 70% 30%, rgba(255, 230, 130, 0.35), transparent 45%), linear-gradient(135deg, #0f3d2e 0%, #16a085 50%, #2ed573 100%)',
      accent: 'rgba(255, 230, 130, 0.85)',
      glow: 'rgba(46, 213, 115, 0.25)',
      textColor: '#fff',
      textShadow: DEFAULT_BG_TEXT_SHADOW
    },
    gold: {
      label: '黃金',
      background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.18) 0 2px, transparent 2px 14px), radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.4), transparent 50%), linear-gradient(180deg, #ffe066 0%, #ffd166 35%, #c08a1a 100%)',
      accent: 'rgba(80, 50, 10, 0.9)',
      glow: 'rgba(180, 130, 30, 0.6)',
      textColor: '#2a1810',
      textShadow: '0 2px 4px rgba(255,255,255,0.4), 0 0 2px rgba(120,80,0,0.6)'
    },
    night: {
      label: '暗夜',
      background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.85) 0%, transparent 5%), radial-gradient(circle at 80% 20%, rgba(180,180,255,0.4) 0%, transparent 12%), linear-gradient(180deg, #0a0420 0%, #1a0f3e 60%, #2d1b4e 100%)',
      accent: 'rgba(180, 150, 255, 0.7)',
      glow: 'rgba(120, 80, 200, 0.3)',
      textColor: '#fff',
      textShadow: DEFAULT_BG_TEXT_SHADOW
    },
    diamond: {
      label: '鑽石',
      background: 'linear-gradient(120deg, #b6f0ff 0%, #d8c4ff 20%, #ffd1f4 40%, #fff3b0 55%, #b6f0ff 75%, #d8c4ff 100%)',
      accent: 'rgba(216, 212, 255, 0.9)',
      glow: 'rgba(190, 220, 255, 0.45)',
      textColor: '#142133',
      textShadow: '0 2px 6px rgba(255,255,255,0.65), 0 0 2px rgba(20,33,51,0.35)',
      animated: true
    }
  };

  Object.assign(BACKGROUND_THEMES, {
    default_01_slate_dawn: { label: 'Slate Dawn', background: 'linear-gradient(180deg, #1a2740 0%, #334866 100%), radial-gradient(circle at 78% 22%, rgba(255,216,140,0.20) 0%, transparent 26%), repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 16px)', accent: 'rgba(180, 205, 235, 0.88)', glow: 'rgba(255, 214, 120, 0.18)', textColor: '#f7fbff', textShadow: '0 2px 8px rgba(0,0,0,0.45)' },
    default_02_silver_mist: { label: 'Silver Mist', background: 'linear-gradient(135deg, #203247 0%, #5d7287 100%), radial-gradient(ellipse at 50% 45%, rgba(255,255,255,0.18) 0%, transparent 42%), radial-gradient(circle at 84% 16%, rgba(220,235,255,0.16) 0%, transparent 20%)', accent: 'rgba(210, 225, 238, 0.9)', glow: 'rgba(210, 228, 250, 0.22)', textColor: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.42)' },
    default_03_quiet_horizon: { label: 'Quiet Horizon', background: 'linear-gradient(180deg, #16263d 0%, #2f4865 58%, #566b7f 100%), linear-gradient(0deg, rgba(255,255,255,0.08) 0%, transparent 18%), radial-gradient(ellipse at 50% 62%, rgba(255,255,255,0.10) 0%, transparent 34%)', accent: 'rgba(171, 199, 228, 0.88)', glow: 'rgba(180, 215, 255, 0.18)', textColor: '#f5fbff', textShadow: '0 2px 7px rgba(0,0,0,0.4)' },
    default_04_soft_carbon: { label: 'Soft Carbon', background: 'linear-gradient(135deg, #1a2330 0%, #465566 100%), repeating-linear-gradient(145deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 12px), radial-gradient(circle at 18% 22%, rgba(255,255,255,0.08) 0%, transparent 18%)', accent: 'rgba(186, 204, 222, 0.86)', glow: 'rgba(170, 190, 215, 0.16)', textColor: '#f7faff', textShadow: '0 2px 8px rgba(0,0,0,0.46)' },
    default_05_dusty_aurora: { label: 'Dusty Aurora', background: 'linear-gradient(135deg, #1f2940 0%, #36445f 48%, #4b5870 100%), radial-gradient(circle at 28% 32%, rgba(149,204,255,0.13) 0%, transparent 24%), radial-gradient(circle at 72% 66%, rgba(185,160,255,0.14) 0%, transparent 24%), radial-gradient(circle at 55% 18%, rgba(160,255,218,0.10) 0%, transparent 18%)', accent: 'rgba(192, 210, 238, 0.9)', glow: 'rgba(174, 198, 255, 0.20)', textColor: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.44)' },
    default_06_muted_crown: { label: 'Muted Crown', background: 'linear-gradient(135deg, #1b2742 0%, #3a4a65 100%), radial-gradient(circle at 50% 52%, rgba(255,218,120,0.12) 0%, transparent 28%), radial-gradient(circle at 50% 52%, rgba(255,255,255,0.07) 0%, transparent 40%)', accent: 'rgba(224, 201, 146, 0.9)', glow: 'rgba(255, 210, 110, 0.18)', textColor: '#fffdf8', textShadow: '0 2px 8px rgba(0,0,0,0.46)' },
    default_07_calm_ripple: { label: 'Calm Ripple', background: 'linear-gradient(135deg, #1b3148 0%, #40657b 100%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.11) 0%, transparent 18%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 30%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 42%)', accent: 'rgba(184, 220, 230, 0.9)', glow: 'rgba(170, 225, 240, 0.18)', textColor: '#f6fdff', textShadow: '0 2px 8px rgba(0,0,0,0.42)' },
    default_08_glassless_premium: { label: 'Glassless Premium', background: 'linear-gradient(135deg, #1d2945 0%, #445473 100%), linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 24%), radial-gradient(circle at 82% 24%, rgba(210,230,255,0.14) 0%, transparent 20%)', accent: 'rgba(200, 220, 242, 0.92)', glow: 'rgba(195, 220, 255, 0.20)', textColor: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.4)' },
    default_09_night_ledger: { label: 'Night Ledger', background: 'linear-gradient(135deg, #101923 0%, #2d3a4d 100%), repeating-linear-gradient(90deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 14px), radial-gradient(circle at 20% 18%, rgba(220,230,255,0.10) 0%, transparent 18%)', accent: 'rgba(175, 193, 214, 0.88)', glow: 'rgba(170, 190, 215, 0.16)', textColor: '#f3f7fb', textShadow: '0 2px 8px rgba(0,0,0,0.5)' },
    default_10_warm_entry: { label: 'Warm Entry', background: 'linear-gradient(135deg, #26344a 0%, #51657b 100%), radial-gradient(circle at 86% 18%, rgba(255,210,120,0.18) 0%, transparent 22%), radial-gradient(circle at 72% 30%, rgba(255,255,255,0.08) 0%, transparent 18%)', accent: 'rgba(228, 202, 150, 0.9)', glow: 'rgba(255, 205, 118, 0.20)', textColor: '#fffdfa', textShadow: '0 2px 8px rgba(0,0,0,0.42)' },
    newbie1_01_sunrise_bloom: { label: 'Sunrise Bloom', background: 'linear-gradient(180deg, #7e4c9f 0%, #f47d8f 62%, #ffd067 100%), radial-gradient(circle at 76% 82%, rgba(255,229,140,0.55) 0%, transparent 26%), radial-gradient(circle at 18% 22%, rgba(255,255,255,0.14) 0%, transparent 18%)', accent: 'rgba(255, 219, 138, 0.92)', glow: 'rgba(255, 207, 104, 0.30)', textColor: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.42)' },
    newbie1_02_peach_trail: { label: 'Peach Trail', background: 'linear-gradient(135deg, #ff9f8a 0%, #ffca92 52%, #ffe7c2 100%), linear-gradient(45deg, rgba(255,255,255,0.14) 0%, transparent 30%), radial-gradient(circle at 70% 20%, rgba(255,255,255,0.18) 0%, transparent 18%)', accent: 'rgba(255, 196, 132, 0.94)', glow: 'rgba(255, 180, 116, 0.26)', textColor: '#4d251d', textShadow: '0 2px 5px rgba(255,255,255,0.28)' },
    newbie1_03_morning_dew: { label: 'Morning Dew', background: 'linear-gradient(135deg, #8eb8ff 0%, #caa8ff 42%, #ffd8b1 100%), radial-gradient(circle at 32% 26%, rgba(255,255,255,0.16) 0%, transparent 18%), radial-gradient(circle at 78% 68%, rgba(255,255,255,0.12) 0%, transparent 22%)', accent: 'rgba(232, 239, 255, 0.92)', glow: 'rgba(210, 220, 255, 0.24)', textColor: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.36)' },
    newbie1_04_candy_dawn: { label: 'Candy Dawn', background: 'linear-gradient(135deg, #ff9cbc 0%, #ffcc84 48%, #8c8dff 100%), radial-gradient(circle at 24% 70%, rgba(255,255,255,0.12) 0%, transparent 16%), radial-gradient(circle at 72% 24%, rgba(255,255,255,0.12) 0%, transparent 16%), repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 3px, transparent 3px 18px)', accent: 'rgba(255, 233, 176, 0.92)', glow: 'rgba(255, 197, 137, 0.24)', textColor: '#ffffff', textShadow: '0 2px 9px rgba(0,0,0,0.38)' },
    newbie1_05_first_light: { label: 'First Light', background: 'linear-gradient(180deg, #6f5ea8 0%, #b978be 58%, #ffd96f 100%), radial-gradient(ellipse at 50% 100%, rgba(255,236,163,0.46) 0%, transparent 36%), linear-gradient(160deg, rgba(255,255,255,0.14) 0%, transparent 30%)', accent: 'rgba(255, 223, 132, 0.92)', glow: 'rgba(255, 216, 112, 0.28)', textColor: '#fffefb', textShadow: '0 2px 10px rgba(0,0,0,0.4)' },
    newbie1_06_petal_sky: { label: 'Petal Sky', background: 'linear-gradient(135deg, #ffbedb 0%, #ffc8a5 46%, #93c4ff 100%), radial-gradient(circle at 68% 18%, rgba(255,255,255,0.16) 0%, transparent 16%), radial-gradient(circle at 36% 74%, rgba(255,255,255,0.12) 0%, transparent 14%)', accent: 'rgba(255, 234, 211, 0.92)', glow: 'rgba(255, 210, 190, 0.20)', textColor: '#5b2d4a', textShadow: '0 2px 5px rgba(255,255,255,0.30)' },
    newbie1_07_welcome_glow: { label: 'Welcome Glow', background: 'linear-gradient(135deg, #f48e75 0%, #f7bf75 56%, #ffe9b4 100%), radial-gradient(circle at 50% 52%, rgba(255,236,150,0.34) 0%, transparent 24%), radial-gradient(circle at 18% 22%, rgba(255,255,255,0.12) 0%, transparent 14%)', accent: 'rgba(255, 205, 116, 0.94)', glow: 'rgba(255, 196, 100, 0.30)', textColor: '#552a16', textShadow: '0 2px 5px rgba(255,255,255,0.24)' },
    newbie1_08_soft_festival: { label: 'Soft Festival', background: 'linear-gradient(135deg, #ff9aa2 0%, #ffc36f 50%, #ffd7f4 100%), radial-gradient(circle at 16% 80%, rgba(255,255,255,0.10) 0%, transparent 14%), radial-gradient(circle at 84% 18%, rgba(255,255,255,0.14) 0%, transparent 18%), linear-gradient(25deg, rgba(255,255,255,0.08) 0%, transparent 20%)', accent: 'rgba(255, 223, 160, 0.94)', glow: 'rgba(255, 180, 132, 0.24)', textColor: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.34)' },
    newbie1_09_golden_breeze: { label: 'Golden Breeze', background: 'linear-gradient(135deg, #7dc7ff 0%, #72dfcf 52%, #f9d873 100%), linear-gradient(160deg, rgba(255,255,255,0.14) 0%, transparent 32%), radial-gradient(circle at 76% 28%, rgba(255,245,200,0.16) 0%, transparent 18%)', accent: 'rgba(255, 228, 138, 0.92)', glow: 'rgba(255, 214, 116, 0.24)', textColor: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.36)' },
    newbie1_10_beginner_emblem: { label: 'Beginner Emblem', background: 'linear-gradient(135deg, #8b63b0 0%, #e88d92 56%, #ffd06d 100%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 20%), radial-gradient(circle at 50% 50%, rgba(255,226,144,0.18) 0%, transparent 34%)', accent: 'rgba(255, 220, 130, 0.92)', glow: 'rgba(255, 208, 110, 0.28)', textColor: '#fffefb', textShadow: '0 2px 9px rgba(0,0,0,0.38)' },
    jackpot_01_jackpot_nova: { label: 'Jackpot Nova', background: 'linear-gradient(135deg, #2a0b42 0%, #7d1038 58%, #ff8b28 100%), radial-gradient(circle at 52% 54%, rgba(255,218,92,0.52) 0%, transparent 18%), radial-gradient(circle at 52% 54%, rgba(255,255,255,0.14) 0%, transparent 32%), radial-gradient(circle at 24% 24%, rgba(255,70,170,0.14) 0%, transparent 16%)', accent: 'rgba(255, 214, 88, 0.95)', glow: 'rgba(255, 170, 56, 0.40)', textColor: '#fff8dd', textShadow: '0 2px 12px rgba(0,0,0,0.58), 0 0 10px rgba(255,190,80,0.28)' },
    jackpot_02_golden_storm: { label: 'Golden Storm', background: 'linear-gradient(135deg, #431034 0%, #a22525 46%, #ffca3b 100%), radial-gradient(circle at 20% 78%, rgba(255,214,86,0.30) 0%, transparent 22%), linear-gradient(45deg, rgba(255,220,90,0.18) 0%, transparent 28%), radial-gradient(circle at 80% 18%, rgba(255,255,255,0.14) 0%, transparent 16%)', accent: 'rgba(255, 221, 102, 0.95)', glow: 'rgba(255, 185, 60, 0.42)', textColor: '#fff9e8', textShadow: '0 2px 12px rgba(0,0,0,0.56)' },
    jackpot_03_royal_explosion: { label: 'Royal Explosion', background: 'linear-gradient(135deg, #20073a 0%, #5b1877 44%, #d94c3f 100%), radial-gradient(circle at 50% 50%, rgba(255,234,128,0.48) 0%, transparent 18%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.16) 0%, transparent 30%), radial-gradient(circle at 78% 22%, rgba(255,117,230,0.14) 0%, transparent 18%)', accent: 'rgba(255, 226, 120, 0.95)', glow: 'rgba(255, 178, 82, 0.38)', textColor: '#fff9eb', textShadow: '0 2px 12px rgba(0,0,0,0.58)' },
    jackpot_04_meteor_win: { label: 'Meteor Win', background: 'linear-gradient(135deg, #180a2e 0%, #5d1439 58%, #b52b51 100%), linear-gradient(25deg, rgba(255,214,92,0.26) 0 10%, transparent 10% 18%, rgba(255,214,92,0.18) 18% 24%, transparent 24% 100%), radial-gradient(circle at 76% 24%, rgba(255,255,255,0.12) 0%, transparent 16%)', accent: 'rgba(255, 214, 98, 0.94)', glow: 'rgba(255, 156, 66, 0.36)', textColor: '#fff7e2', textShadow: '0 2px 12px rgba(0,0,0,0.56)' },
    jackpot_05_coin_burst: { label: 'Coin Burst', background: 'linear-gradient(135deg, #2e0c34 0%, #7f1930 52%, #f6a62d 100%), radial-gradient(circle at 48% 48%, rgba(255,228,118,0.46) 0%, transparent 18%), radial-gradient(circle at 28% 68%, rgba(255,210,90,0.12) 0%, transparent 10%), radial-gradient(circle at 72% 30%, rgba(255,210,90,0.14) 0%, transparent 12%), radial-gradient(circle at 84% 68%, rgba(255,210,90,0.10) 0%, transparent 10%)', accent: 'rgba(255, 220, 112, 0.95)', glow: 'rgba(255, 176, 68, 0.40)', textColor: '#fff8e7', textShadow: '0 2px 12px rgba(0,0,0,0.58)' },
    jackpot_06_neon_jackpot: { label: 'Neon Jackpot', background: 'linear-gradient(135deg, #11051f 0%, #4f0f55 46%, #b11968 100%), radial-gradient(circle at 60% 50%, rgba(255,220,90,0.36) 0%, transparent 16%), linear-gradient(0deg, rgba(37,230,255,0.16) 0%, transparent 22%), linear-gradient(90deg, rgba(255,74,178,0.10) 0%, transparent 24%)', accent: 'rgba(245, 216, 98, 0.94)', glow: 'rgba(255, 76, 168, 0.34)', textColor: '#fff7ec', textShadow: '0 2px 12px rgba(0,0,0,0.62), 0 0 8px rgba(255,78,178,0.20)' },
    jackpot_07_prism_storm: { label: 'Prism Storm', background: 'linear-gradient(135deg, #26124a 0%, #7d1d70 44%, #ff8f3d 100%), linear-gradient(120deg, rgba(255,255,255,0.10) 0 18%, transparent 18% 32%, rgba(151,239,255,0.08) 32% 46%, transparent 46% 100%), radial-gradient(circle at 50% 50%, rgba(255,219,90,0.40) 0%, transparent 18%)', accent: 'rgba(255, 224, 110, 0.95)', glow: 'rgba(208, 150, 255, 0.28)', textColor: '#fff8ee', textShadow: '0 2px 12px rgba(0,0,0,0.58)' },
    jackpot_08_firework_vault: { label: 'Firework Vault', background: 'linear-gradient(135deg, #2f0f22 0%, #7a122e 52%, #d43b3b 76%, #ffbe3b 100%), radial-gradient(circle at 50% 52%, rgba(255,225,104,0.44) 0%, transparent 16%), radial-gradient(circle at 32% 30%, rgba(255,255,255,0.14) 0%, transparent 12%), radial-gradient(circle at 72% 24%, rgba(255,255,255,0.12) 0%, transparent 10%), radial-gradient(circle at 74% 72%, rgba(255,195,72,0.12) 0%, transparent 12%)', accent: 'rgba(255, 224, 110, 0.96)', glow: 'rgba(255, 167, 58, 0.42)', textColor: '#fff8e8', textShadow: '0 2px 12px rgba(0,0,0,0.60)' },
    jackpot_09_treasure_tempest: { label: 'Treasure Tempest', background: 'linear-gradient(135deg, #1e0a27 0%, #5f1736 50%, #af7f17 100%), radial-gradient(circle at 50% 50%, rgba(255,221,98,0.30) 0%, transparent 16%), radial-gradient(circle at 42% 58%, rgba(255,174,63,0.18) 0%, transparent 22%), radial-gradient(circle at 58% 42%, rgba(255,174,63,0.18) 0%, transparent 22%)', accent: 'rgba(255, 214, 94, 0.95)', glow: 'rgba(255, 170, 60, 0.38)', textColor: '#fff7e0', textShadow: '0 2px 12px rgba(0,0,0,0.58)' },
    jackpot_10_legendary_rain: { label: 'Legendary Rain', background: 'linear-gradient(180deg, #2a0a34 0%, #7a153f 58%, #ffb338 100%), repeating-linear-gradient(180deg, rgba(255,226,110,0.18) 0 2px, transparent 2px 18px), radial-gradient(ellipse at 50% 100%, rgba(255,214,90,0.36) 0%, transparent 28%)', accent: 'rgba(255, 224, 108, 0.96)', glow: 'rgba(255, 178, 64, 0.40)', textColor: '#fff8e6', textShadow: '0 2px 12px rgba(0,0,0,0.58)' }
  });

  const BACKPLATE_REVIEW_GROUPS = {
    '預設背板': ['default_01_slate_dawn', 'default_02_silver_mist', 'default_03_quiet_horizon', 'default_04_soft_carbon', 'default_05_dusty_aurora', 'default_06_muted_crown', 'default_07_calm_ripple', 'default_08_glassless_premium', 'default_09_night_ledger', 'default_10_warm_entry'],
    '新手背板 1': ['newbie1_01_sunrise_bloom', 'newbie1_02_peach_trail', 'newbie1_03_morning_dew', 'newbie1_04_candy_dawn', 'newbie1_05_first_light', 'newbie1_06_petal_sky', 'newbie1_07_welcome_glow', 'newbie1_08_soft_festival', 'newbie1_09_golden_breeze', 'newbie1_10_beginner_emblem'],
    '彩金風暴 - 白金': ['jackpot_01_jackpot_nova', 'jackpot_02_golden_storm', 'jackpot_03_royal_explosion', 'jackpot_04_meteor_win', 'jackpot_05_coin_burst', 'jackpot_06_neon_jackpot', 'jackpot_07_prism_storm', 'jackpot_08_firework_vault', 'jackpot_09_treasure_tempest', 'jackpot_10_legendary_rain']
  };

  const GENERATED_BACKPLATE_SPECS = [
    { group: '新手背板 2', prefix: 'newbie2', label: '新手背板 2', colors: ['#3fbf7f', '#8ce6c3', '#f7ffe7', '#1f6f54'], accent: 'rgba(214,255,218,0.92)', glow: 'rgba(95,230,170,0.24)', textColor: '#12362b', textShadow: '0 2px 5px rgba(255,255,255,0.28)' },
    { group: '新手背板 3', prefix: 'newbie3', label: '新手背板 3', colors: ['#48a8ff', '#74d7ff', '#b0fff2', '#1f5aa8'], accent: 'rgba(220,249,255,0.92)', glow: 'rgba(96,210,255,0.24)', textColor: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.36)' },
    { group: '新手背板 4', prefix: 'newbie4', label: '新手背板 4', colors: ['#30206d', '#6847c8', '#b2a8ff', '#e6e8ff'], accent: 'rgba(223,220,255,0.94)', glow: 'rgba(157,132,255,0.24)', textColor: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.4)' },
    { group: '新手背板 5', prefix: 'newbie5', label: '新手背板 5', colors: ['#ff6f7a', '#ffb86c', '#ffe8a3', '#7a245f'], accent: 'rgba(255,230,175,0.94)', glow: 'rgba(255,174,106,0.24)', textColor: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.36)' },
    { group: '籌碼傳奇 - 銅', prefix: 'chipbronze', label: '籌碼傳奇 - 銅', colors: ['#4b2316', '#9d5431', '#d8925f', '#ffddb6'], accent: 'rgba(229,176,121,0.94)', glow: 'rgba(196,114,56,0.28)', textColor: '#fff5e8', textShadow: '0 2px 8px rgba(0,0,0,0.5)' },
    { group: '籌碼傳奇 - 白金', prefix: 'chipplatinum', label: '籌碼傳奇 - 白金', colors: ['#1b2431', '#6f8399', '#d9e7f0', '#f6fbff'], accent: 'rgba(226,237,246,0.95)', glow: 'rgba(179,207,230,0.22)', textColor: '#102338', textShadow: '0 2px 6px rgba(255,255,255,0.45)' },
    { group: '每日開盤 - 銅', prefix: 'dailybronze', label: '每日開盤 - 銅', colors: ['#6d3a21', '#c67034', '#ffb35a', '#ffe1a6'], accent: 'rgba(255,208,132,0.94)', glow: 'rgba(255,164,68,0.26)', textColor: '#fff8ee', textShadow: '0 2px 8px rgba(0,0,0,0.42)' },
    { group: '每日開盤 - 白金', prefix: 'dailyplatinum', label: '每日開盤 - 白金', colors: ['#8b93b5', '#c7bed8', '#ffe2bd', '#fffaf1'], accent: 'rgba(255,231,190,0.95)', glow: 'rgba(255,210,150,0.22)', textColor: '#4f3d36', textShadow: '0 2px 5px rgba(255,255,255,0.34)' },
    { group: '連日長紅 - 銅', prefix: 'streakbronze', label: '連日長紅 - 銅', colors: ['#4d0e17', '#932936', '#d96654', '#ffd7a1'], accent: 'rgba(255,195,138,0.94)', glow: 'rgba(220,88,72,0.28)', textColor: '#fff7ec', textShadow: '0 2px 8px rgba(0,0,0,0.48)' },
    { group: '連日長紅 - 白金', prefix: 'streakplatinum', label: '連日長紅 - 白金', colors: ['#2d1836', '#6c2e58', '#b35d5e', '#f6d5bf'], accent: 'rgba(242,214,188,0.95)', glow: 'rgba(214,103,102,0.24)', textColor: '#fffaf4', textShadow: '0 2px 8px rgba(0,0,0,0.46)' },
    { group: '王桌名流 - 白金', prefix: 'royaltable', label: '王桌名流 - 白金', colors: ['#0f1d18', '#244d3c', '#b89b52', '#f8efd7'], accent: 'rgba(233,209,146,0.95)', glow: 'rgba(182,156,82,0.24)', textColor: '#fff8ec', textShadow: '0 2px 8px rgba(0,0,0,0.52)' },
    { group: '幸運轉輪 - 白金', prefix: 'luckywheel', label: '幸運轉輪 - 白金', colors: ['#2d0e51', '#3458d4', '#19d0ff', '#ffe17d'], accent: 'rgba(224,245,255,0.95)', glow: 'rgba(67,198,255,0.28)', textColor: '#fffef3', textShadow: '0 2px 9px rgba(0,0,0,0.5)' },
    { group: '豪客流水 - 白金', prefix: 'highroller', label: '豪客流水 - 白金', colors: ['#08231d', '#0f6956', '#33bb7a', '#d5ffc4'], accent: 'rgba(210,255,199,0.95)', glow: 'rgba(70,211,124,0.26)', textColor: '#f6fff8', textShadow: '0 2px 8px rgba(0,0,0,0.46)' },
    { group: '爆倍盛宴 - 白金', prefix: 'multifeast', label: '爆倍盛宴 - 白金', colors: ['#26103e', '#7a1f9d', '#ff7b3d', '#ffd86b'], accent: 'rgba(255,222,118,0.95)', glow: 'rgba(255,140,72,0.28)', textColor: '#fff8ef', textShadow: '0 2px 9px rgba(0,0,0,0.5)' },
    { group: '單局封王 - 白金', prefix: 'singleking', label: '單局封王 - 白金', colors: ['#162446', '#3f2e7e', '#9074d8', '#f0d99c'], accent: 'rgba(242,219,162,0.95)', glow: 'rgba(160,128,255,0.22)', textColor: '#fff9ef', textShadow: '0 2px 8px rgba(0,0,0,0.48)' },
    { group: '神倍時刻 - 白金', prefix: 'godmulti', label: '神倍時刻 - 白金', colors: ['#9dd7ff', '#d6efff', '#fff8da', '#7ab5ff'], accent: 'rgba(255,247,212,0.95)', glow: 'rgba(167,218,255,0.24)', textColor: '#204064', textShadow: '0 2px 5px rgba(255,255,255,0.46)' },
    { group: '超強運氣 - 白金', prefix: 'superluck', label: '超強運氣 - 白金', colors: ['#1f6f37', '#4ecb73', '#d9ff9d', '#fff3a2'], accent: 'rgba(237,255,174,0.95)', glow: 'rgba(118,232,120,0.26)', textColor: '#173422', textShadow: '0 2px 5px rgba(255,255,255,0.34)' }
  ];

  function buildGeneratedBackplateSeries(spec) {
    const [c1, c2, c3, c4] = spec.colors;
    return [
      `linear-gradient(180deg, ${c1} 0%, ${c2} 58%, ${c3} 100%), radial-gradient(circle at 76% 80%, rgba(255,255,255,0.16) 0%, transparent 20%)`,
      `linear-gradient(135deg, ${c1} 0%, ${c2} 52%, ${c3} 100%), repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0 2px, transparent 2px 16px)`,
      `linear-gradient(135deg, ${c1} 0%, ${c2} 42%, ${c3} 100%), radial-gradient(circle at 30% 24%, rgba(255,255,255,0.16) 0%, transparent 18%), radial-gradient(circle at 78% 70%, rgba(255,255,255,0.10) 0%, transparent 18%)`,
      `linear-gradient(180deg, ${c1} 0%, ${c2} 62%, ${c3} 100%), radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.16) 0%, transparent 34%)`,
      `linear-gradient(135deg, ${c1} 0%, ${c2} 48%, ${c3} 100%), linear-gradient(145deg, rgba(255,255,255,0.12) 0%, transparent 26%), radial-gradient(circle at 82% 20%, rgba(255,255,255,0.12) 0%, transparent 16%)`,
      `linear-gradient(135deg, ${c1} 0%, ${c2} 44%, ${c3} 100%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 18%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 34%)`,
      `linear-gradient(135deg, ${c1} 0%, ${c2} 56%, ${c3} 100%), linear-gradient(25deg, rgba(255,255,255,0.10) 0%, transparent 20%), radial-gradient(circle at 16% 78%, rgba(255,255,255,0.10) 0%, transparent 14%)`,
      `linear-gradient(180deg, ${c1} 0%, ${c2} 52%, ${c3} 100%), repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 14px), radial-gradient(circle at 80% 24%, rgba(255,255,255,0.14) 0%, transparent 16%)`,
      `linear-gradient(135deg, ${c1} 0%, ${c2} 36%, ${c3} 78%, ${c4} 100%), radial-gradient(circle at 72% 22%, rgba(255,255,255,0.14) 0%, transparent 14%)`,
      `linear-gradient(135deg, ${c1} 0%, ${c2} 52%, ${c3} 100%), linear-gradient(120deg, rgba(255,255,255,0.10) 0 18%, transparent 18% 32%, rgba(255,255,255,0.04) 32% 46%, transparent 46% 100%)`
    ].map((background, idx) => ({
      key: `${spec.prefix}_${String(idx + 1).padStart(2, '0')}`,
      value: {
        label: `${spec.label} ${String(idx + 1).padStart(2, '0')}`,
        background,
        accent: spec.accent,
        glow: spec.glow,
        textColor: spec.textColor,
        textShadow: spec.textShadow
      }
    }));
  }

  GENERATED_BACKPLATE_SPECS.forEach(spec => {
    const series = buildGeneratedBackplateSeries(spec);
    BACKPLATE_REVIEW_GROUPS[spec.group] = series.map(item => item.key);
    Object.assign(BACKGROUND_THEMES, Object.fromEntries(series.map(item => [item.key, item.value])));
  });

  // ===== 第二批：各群組再增 10 張（11~20），每張搭配不同邊框變體 =====
  function buildGeneratedBackplateSeries2(spec) {
    const [c1, c2, c3, c4] = spec.colors;
    const borderVariants = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const backgrounds = [
      `radial-gradient(ellipse at 20% 80%, ${c3}99 0%, transparent 42%), linear-gradient(160deg, ${c1} 0%, ${c2} 52%, ${c3} 100%)`,
      `linear-gradient(200deg, ${c1} 0%, ${c2} 44%, ${c4} 100%), radial-gradient(circle at 82% 18%, rgba(255,255,255,0.16) 0%, transparent 20%)`,
      `linear-gradient(135deg, ${c1} 0%, ${c2} 38%, ${c3} 72%, ${c4} 100%), radial-gradient(circle at 50% 16%, rgba(255,255,255,0.18) 0%, transparent 22%)`,
      `linear-gradient(0deg, ${c3} 0%, ${c2} 48%, ${c1} 100%), radial-gradient(ellipse at 50% 52%, rgba(255,255,255,0.14) 0%, transparent 32%)`,
      `repeating-linear-gradient(60deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 12px), linear-gradient(135deg, ${c1} 0%, ${c2} 56%, ${c3} 100%)`,
      `linear-gradient(135deg, ${c1} 0%, ${c2} 50%, ${c3} 100%), linear-gradient(90deg, rgba(255,255,255,0.12) 0%, transparent 22%), linear-gradient(270deg, rgba(255,255,255,0.10) 0%, transparent 22%)`,
      `linear-gradient(90deg, ${c1} 0%, ${c2} 50%, ${c3} 100%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.10) 0%, transparent 30%)`,
      `repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 3px, transparent 3px 20px), linear-gradient(180deg, ${c1} 0%, ${c2} 60%, ${c3} 100%)`,
      `linear-gradient(135deg, ${c1} 0%, ${c4} 30%, ${c2} 65%, ${c3} 100%), radial-gradient(circle at 22% 78%, rgba(255,255,255,0.12) 0%, transparent 16%)`,
      `linear-gradient(315deg, ${c1} 0%, ${c2} 48%, ${c3} 100%), radial-gradient(circle at 76% 76%, rgba(255,255,255,0.14) 0%, transparent 18%), radial-gradient(circle at 24% 24%, rgba(255,255,255,0.10) 0%, transparent 14%)`
    ];
    return backgrounds.map((background, idx) => ({
      key: `${spec.prefix}_${String(idx + 11).padStart(2, '0')}`,
      value: {
        label: `${spec.label} ${String(idx + 11).padStart(2, '0')}`,
        background,
        accent: spec.accent,
        glow: spec.glow,
        textColor: spec.textColor,
        textShadow: spec.textShadow,
        borderVariant: borderVariants[idx]
      }
    }));
  }

  GENERATED_BACKPLATE_SPECS.forEach(spec => {
    const series2 = buildGeneratedBackplateSeries2(spec);
    BACKPLATE_REVIEW_GROUPS[spec.group].push(...series2.map(item => item.key));
    Object.assign(BACKGROUND_THEMES, Object.fromEntries(series2.map(item => [item.key, item.value])));
  });

  // 手工定義群組（預設背板、新手背板1、彩金風暴）各補 10 張
  (() => {
    const BV = [1,2,3,4,5,6,7,8,9,10];
    const extra = {
      // 預設背板 11~20
      default_11_arctic_fog:      { label: 'Arctic Fog',      borderVariant: BV[0],  accent: 'rgba(190,215,240,0.9)',  glow: 'rgba(180,215,255,0.20)', textColor: '#f0f8ff', textShadow: '0 2px 8px rgba(0,0,0,0.46)', background: 'radial-gradient(ellipse at 30% 70%, rgba(100,160,220,0.25) 0%, transparent 40%), linear-gradient(145deg, #141e2e 0%, #2b3d54 50%, #3d5268 100%)' },
      default_12_cobalt_night:    { label: 'Cobalt Night',    borderVariant: BV[1],  accent: 'rgba(140,200,255,0.88)', glow: 'rgba(80,160,255,0.22)',  textColor: '#eaf4ff', textShadow: '0 2px 8px rgba(0,0,0,0.48)', background: 'linear-gradient(135deg, #0d1a2e 0%, #1a3055 55%, #2a4570 100%), radial-gradient(circle at 78% 22%, rgba(80,160,255,0.18) 0%, transparent 24%)' },
      default_13_steel_bloom:     { label: 'Steel Bloom',     borderVariant: BV[2],  accent: 'rgba(200,185,230,0.88)', glow: 'rgba(180,150,255,0.18)', textColor: '#f5f0ff', textShadow: '0 2px 8px rgba(0,0,0,0.44)', background: 'linear-gradient(135deg, #1a1830 0%, #3a3260 55%, #504880 100%), radial-gradient(circle at 24% 76%, rgba(200,160,255,0.16) 0%, transparent 26%)' },
      default_14_iron_mist:       { label: 'Iron Mist',       borderVariant: BV[3],  accent: 'rgba(195,210,225,0.88)', glow: 'rgba(170,195,220,0.18)', textColor: '#f2f6fa', textShadow: '0 2px 8px rgba(0,0,0,0.46)', background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 18px), linear-gradient(160deg, #18222f 0%, #384858 55%, #4e6070 100%)' },
      default_15_deep_teal:       { label: 'Deep Teal',       borderVariant: BV[4],  accent: 'rgba(140,220,210,0.88)', glow: 'rgba(80,200,190,0.22)',  textColor: '#e8fdfb', textShadow: '0 2px 8px rgba(0,0,0,0.44)', background: 'linear-gradient(135deg, #0d2430 0%, #144848 55%, #1e6860 100%), radial-gradient(circle at 70% 30%, rgba(100,220,200,0.16) 0%, transparent 24%)' },
      default_16_slate_amber:     { label: 'Slate Amber',     borderVariant: BV[5],  accent: 'rgba(240,195,130,0.90)', glow: 'rgba(255,190,100,0.20)', textColor: '#fffaf2', textShadow: '0 2px 8px rgba(0,0,0,0.44)', background: 'linear-gradient(145deg, #1e2530 0%, #3d3822 55%, #5a4f2a 100%), radial-gradient(circle at 82% 20%, rgba(255,200,100,0.18) 0%, transparent 22%)' },
      default_17_midnight_rose:   { label: 'Midnight Rose',   borderVariant: BV[6],  accent: 'rgba(230,175,195,0.88)', glow: 'rgba(210,120,160,0.20)', textColor: '#fff0f5', textShadow: '0 2px 8px rgba(0,0,0,0.46)', background: 'linear-gradient(135deg, #1e1020 0%, #3d1a30 55%, #5a2a44 100%), radial-gradient(circle at 28% 30%, rgba(255,140,180,0.14) 0%, transparent 22%)' },
      default_18_graphite_glow:   { label: 'Graphite Glow',   borderVariant: BV[7],  accent: 'rgba(180,195,215,0.88)', glow: 'rgba(160,180,210,0.18)', textColor: '#f4f7fb', textShadow: '0 2px 8px rgba(0,0,0,0.48)', background: 'linear-gradient(135deg, #111820 0%, #2a3545 55%, #3a4858 100%), radial-gradient(circle at 50% 50%, rgba(200,220,255,0.10) 0%, transparent 36%)' },
      default_19_navy_sheen:      { label: 'Navy Sheen',      borderVariant: BV[8],  accent: 'rgba(160,195,235,0.90)', glow: 'rgba(120,170,230,0.22)', textColor: '#eef4ff', textShadow: '0 2px 8px rgba(0,0,0,0.46)', background: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 18px), linear-gradient(180deg, #101c34 0%, #1e3458 55%, #2c4878 100%)' },
      default_20_dusk_chrome:     { label: 'Dusk Chrome',     borderVariant: BV[9],  accent: 'rgba(210,200,235,0.88)', glow: 'rgba(190,175,230,0.20)', textColor: '#f6f4ff', textShadow: '0 2px 8px rgba(0,0,0,0.46)', background: 'linear-gradient(200deg, #1a1430 0%, #35285a 50%, #4a3870 100%), radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.10) 0%, transparent 30%)' },
      // 新手背板 1，11~20
      newbie1_11_coral_bliss:     { label: 'Coral Bliss',     borderVariant: BV[0],  accent: 'rgba(255,210,190,0.92)', glow: 'rgba(255,170,140,0.28)', textColor: '#fff',    textShadow: '0 2px 9px rgba(0,0,0,0.36)', background: 'linear-gradient(160deg, #ff6b6b 0%, #ff9f7f 55%, #ffd07f 100%), radial-gradient(circle at 78% 22%, rgba(255,255,255,0.16) 0%, transparent 20%)' },
      newbie1_12_lavender_pop:    { label: 'Lavender Pop',    borderVariant: BV[1],  accent: 'rgba(230,215,255,0.92)', glow: 'rgba(200,170,255,0.26)', textColor: '#fff',    textShadow: '0 2px 9px rgba(0,0,0,0.36)', background: 'linear-gradient(135deg, #9b6fd4 0%, #d4a8ff 52%, #ffd6f5 100%), radial-gradient(circle at 30% 26%, rgba(255,255,255,0.14) 0%, transparent 18%)' },
      newbie1_13_mango_rush:      { label: 'Mango Rush',      borderVariant: BV[2],  accent: 'rgba(255,225,140,0.94)', glow: 'rgba(255,190,80,0.28)',  textColor: '#4a2000', textShadow: '0 2px 5px rgba(255,255,255,0.26)', background: 'linear-gradient(135deg, #ff8c00 0%, #ffb347 52%, #ffe08a 100%), radial-gradient(circle at 70% 20%, rgba(255,255,255,0.18) 0%, transparent 20%)' },
      newbie1_14_mint_spark:      { label: 'Mint Spark',      borderVariant: BV[3],  accent: 'rgba(195,255,230,0.92)', glow: 'rgba(100,230,180,0.26)', textColor: '#003a22', textShadow: '0 2px 5px rgba(255,255,255,0.28)', background: 'linear-gradient(135deg, #00b09b 0%, #78e3c4 52%, #c8fff0 100%), radial-gradient(circle at 24% 76%, rgba(255,255,255,0.14) 0%, transparent 18%)' },
      newbie1_15_sky_candy:       { label: 'Sky Candy',       borderVariant: BV[4],  accent: 'rgba(215,240,255,0.92)', glow: 'rgba(120,200,255,0.26)', textColor: '#fff',    textShadow: '0 2px 9px rgba(0,0,0,0.34)', background: 'linear-gradient(135deg, #56ccf2 0%, #a8e6ff 52%, #e0f7ff 100%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.16) 0%, transparent 18%)' },
      newbie1_16_cherry_glow:     { label: 'Cherry Glow',     borderVariant: BV[5],  accent: 'rgba(255,200,210,0.92)', glow: 'rgba(255,120,150,0.28)', textColor: '#fff',    textShadow: '0 2px 9px rgba(0,0,0,0.38)', background: 'linear-gradient(135deg, #c0392b 0%, #ff6f91 52%, #ffb3c4 100%), radial-gradient(circle at 26% 74%, rgba(255,255,255,0.14) 0%, transparent 18%)' },
      newbie1_17_butter_drop:     { label: 'Butter Drop',     borderVariant: BV[6],  accent: 'rgba(255,240,160,0.94)', glow: 'rgba(255,210,80,0.28)',  textColor: '#4a3000', textShadow: '0 2px 5px rgba(255,255,255,0.26)', background: 'linear-gradient(135deg, #f7971e 0%, #ffd200 52%, #fff5a0 100%), radial-gradient(circle at 72% 22%, rgba(255,255,255,0.18) 0%, transparent 20%)' },
      newbie1_18_twilight_pink:   { label: 'Twilight Pink',   borderVariant: BV[7],  accent: 'rgba(255,210,235,0.92)', glow: 'rgba(255,150,200,0.26)', textColor: '#fff',    textShadow: '0 2px 9px rgba(0,0,0,0.38)', background: 'linear-gradient(135deg, #8e2de2 0%, #e96fae 52%, #ffc3e4 100%), radial-gradient(circle at 28% 28%, rgba(255,255,255,0.14) 0%, transparent 18%)' },
      newbie1_19_lime_breeze:     { label: 'Lime Breeze',     borderVariant: BV[8],  accent: 'rgba(210,255,185,0.92)', glow: 'rgba(130,230,80,0.28)',  textColor: '#1a3000', textShadow: '0 2px 5px rgba(255,255,255,0.28)', background: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 52%, #d4f5a0 100%), radial-gradient(circle at 76% 24%, rgba(255,255,255,0.16) 0%, transparent 18%)' },
      newbie1_20_ocean_swirl:     { label: 'Ocean Swirl',     borderVariant: BV[9],  accent: 'rgba(185,235,255,0.92)', glow: 'rgba(60,190,240,0.28)',  textColor: '#fff',    textShadow: '0 2px 9px rgba(0,0,0,0.36)', background: 'linear-gradient(135deg, #0575e6 0%, #48b0ff 52%, #a0deff 100%), radial-gradient(circle at 30% 70%, rgba(255,255,255,0.14) 0%, transparent 20%)' },
      // 彩金風暴 11~20
      jackpot_11_solar_flare:     { label: 'Solar Flare',     borderVariant: BV[0],  accent: 'rgba(255,220,90,0.96)',  glow: 'rgba(255,165,40,0.42)', textColor: '#fff8e0', textShadow: '0 2px 12px rgba(0,0,0,0.60)', background: 'radial-gradient(ellipse at 50% 110%, rgba(255,200,50,0.50) 0%, transparent 40%), linear-gradient(135deg, #3a0b0b 0%, #8b1a1a 44%, #e85d04 78%, #ffd60a 100%)' },
      jackpot_12_crimson_vault:   { label: 'Crimson Vault',   borderVariant: BV[1],  accent: 'rgba(255,215,95,0.95)',  glow: 'rgba(255,100,60,0.40)', textColor: '#fff8e2', textShadow: '0 2px 12px rgba(0,0,0,0.60)', background: 'linear-gradient(135deg, #1a0010 0%, #660020 46%, #cc2200 76%, #ff8800 100%), radial-gradient(circle at 50% 52%, rgba(255,230,100,0.40) 0%, transparent 20%)' },
      jackpot_13_golden_arc:      { label: 'Golden Arc',      borderVariant: BV[2],  accent: 'rgba(255,228,100,0.96)', glow: 'rgba(255,180,40,0.42)', textColor: '#fff7dc', textShadow: '0 2px 12px rgba(0,0,0,0.58)', background: 'radial-gradient(ellipse at 50% 0%, rgba(255,220,80,0.28) 0%, transparent 36%), linear-gradient(180deg, #260318 0%, #800c28 48%, #d44000 78%, #ffbb00 100%)' },
      jackpot_14_obsidian_rain:   { label: 'Obsidian Rain',   borderVariant: BV[3],  accent: 'rgba(255,210,88,0.94)',  glow: 'rgba(255,140,50,0.38)', textColor: '#fff5dc', textShadow: '0 2px 12px rgba(0,0,0,0.62)', background: 'repeating-linear-gradient(0deg, rgba(255,200,60,0.12) 0 2px, transparent 2px 22px), linear-gradient(135deg, #160024 0%, #540c40 46%, #9e1a28 76%, #e86000 100%)' },
      jackpot_15_phoenix_crest:   { label: 'Phoenix Crest',   borderVariant: BV[4],  accent: 'rgba(255,224,100,0.96)', glow: 'rgba(255,130,40,0.44)', textColor: '#fff8e4', textShadow: '0 2px 12px rgba(0,0,0,0.60)', background: 'linear-gradient(135deg, #2e0918 0%, #8c1424 44%, #c83410 72%, #ff9500 100%), radial-gradient(circle at 70% 30%, rgba(255,240,120,0.36) 0%, transparent 20%)' },
      jackpot_16_blaze_king:      { label: 'Blaze King',      borderVariant: BV[5],  accent: 'rgba(255,220,88,0.95)',  glow: 'rgba(255,90,20,0.44)',  textColor: '#fff6e0', textShadow: '0 2px 12px rgba(0,0,0,0.62)', background: 'linear-gradient(135deg, #1a0608 0%, #6e100e 44%, #c42606 72%, #f87700 100%), radial-gradient(circle at 30% 70%, rgba(255,180,50,0.24) 0%, transparent 24%)' },
      jackpot_17_thunder_win:     { label: 'Thunder Win',     borderVariant: BV[6],  accent: 'rgba(255,218,90,0.96)',  glow: 'rgba(255,160,60,0.40)', textColor: '#fff7e2', textShadow: '0 2px 12px rgba(0,0,0,0.58)', background: 'linear-gradient(160deg, #200438 0%, #6e0e56 42%, #b82040 68%, #f06000 100%), radial-gradient(circle at 50% 50%, rgba(255,226,100,0.32) 0%, transparent 18%)' },
      jackpot_18_gold_eruption:   { label: 'Gold Eruption',   borderVariant: BV[7],  accent: 'rgba(255,222,100,0.96)', glow: 'rgba(255,170,50,0.42)', textColor: '#fff8de', textShadow: '0 2px 12px rgba(0,0,0,0.60)', background: 'radial-gradient(circle at 50% 55%, rgba(255,218,88,0.44) 0%, transparent 18%), linear-gradient(135deg, #22040c 0%, #78101c 44%, #c43200 72%, #ffa800 100%)' },
      jackpot_19_scarlet_nova:    { label: 'Scarlet Nova',    borderVariant: BV[8],  accent: 'rgba(255,210,90,0.95)',  glow: 'rgba(255,100,50,0.40)', textColor: '#fff6e0', textShadow: '0 2px 12px rgba(0,0,0,0.60)', background: 'linear-gradient(135deg, #18020e 0%, #5e0a1e 42%, #aa2200 70%, #ff7a00 100%), linear-gradient(45deg, rgba(255,210,80,0.14) 0%, transparent 30%)' },
      jackpot_20_royal_blaze:     { label: 'Royal Blaze',     borderVariant: BV[9],  accent: 'rgba(255,225,95,0.96)',  glow: 'rgba(255,150,40,0.44)', textColor: '#fff8e0', textShadow: '0 2px 12px rgba(0,0,0,0.60)', background: 'linear-gradient(135deg, #240618 0%, #7a1030 44%, #c22a0a 72%, #f99000 100%), radial-gradient(circle at 80% 80%, rgba(255,200,60,0.24) 0%, transparent 24%)' },
    };
    Object.assign(BACKGROUND_THEMES, extra);
    const defaultExtra  = Object.keys(extra).filter(k => /^default_(1\d|20)_/.test(k));
    const newbie1Extra  = Object.keys(extra).filter(k => /^newbie1_(1\d|20)_/.test(k));
    const jackpotExtra  = Object.keys(extra).filter(k => /^jackpot_(1\d|20)_/.test(k));
    BACKPLATE_REVIEW_GROUPS['預設背板'].push(...defaultExtra);
    BACKPLATE_REVIEW_GROUPS['新手背板 1'].push(...newbie1Extra);
    BACKPLATE_REVIEW_GROUPS['彩金風暴 - 白金'].push(...jackpotExtra);
  })();

  const EXPERIMENTAL_BACKPLATE_SPECS = [
    { group: '預設背板', prefix: 'default', label: '預設背板', colors: ['#18243a', '#3a4d6a', '#7a8ba0', '#d6dfeb'], accent: 'rgba(196,215,236,0.92)', glow: 'rgba(170,195,228,0.20)', textColor: '#f6fbff', textShadow: '0 2px 8px rgba(0,0,0,0.44)' },
    { group: '新手背板 1', prefix: 'newbie1', label: '新手背板 1', colors: ['#7e4c9f', '#f47d8f', '#ffd067', '#fff0c7'], accent: 'rgba(255,219,138,0.94)', glow: 'rgba(255,207,104,0.28)', textColor: '#fffefb', textShadow: '0 2px 9px rgba(0,0,0,0.38)' },
    { group: '彩金風暴 - 白金', prefix: 'jackpot', label: '彩金風暴 - 白金', colors: ['#2a0b42', '#7d1038', '#ff8b28', '#ffe18d'], accent: 'rgba(255,225,110,0.96)', glow: 'rgba(255,170,56,0.40)', textColor: '#fff8e2', textShadow: '0 2px 12px rgba(0,0,0,0.58)' },
    ...GENERATED_BACKPLATE_SPECS
  ];

  function buildExperimentalBackplateSeries(spec) {
    const [c1, c2, c3, c4] = spec.colors;
    const safeText = spec.textColor || '#fff';
    const safeShadow = spec.textShadow || DEFAULT_BG_TEXT_SHADOW;
    const variants = [
      { label: 'Arc Sweep', borderVariant: 1, background: `radial-gradient(ellipse at -10% 120%, ${c4}aa 0%, transparent 52%), radial-gradient(ellipse at 105% -5%, rgba(255,255,255,0.16) 0%, transparent 28%), linear-gradient(135deg, ${c1} 0%, ${c2} 54%, ${c3} 100%)` },
      { label: 'Emblem Stamp', borderVariant: 2, background: `radial-gradient(circle at 50% 50%, transparent 0 22%, ${c4}33 22% 32%, transparent 32% 100%), radial-gradient(circle at 50% 50%, ${c4}18 0%, transparent 54%), linear-gradient(145deg, ${c1} 0%, ${c2} 52%, ${c3} 100%)` },
      { label: 'Central Burst', borderVariant: 5, background: `radial-gradient(circle at 50% 54%, ${c4}aa 0%, ${c3}44 16%, transparent 34%), linear-gradient(135deg, ${c1} 0%, ${c2} 46%, ${c3} 100%)` },
      { label: 'Corner Glow', borderVariant: 7, background: `radial-gradient(circle at 82% 18%, ${c4}bb 0%, transparent 24%), radial-gradient(circle at 18% 82%, rgba(255,255,255,0.12) 0%, transparent 20%), linear-gradient(135deg, ${c1} 0%, ${c2} 52%, ${c3} 100%)` },
      { label: 'Horizon Split', borderVariant: 3, background: `linear-gradient(180deg, ${c1} 0%, ${c2} 48%, ${c3} 48%, ${c4} 100%), linear-gradient(0deg, rgba(255,255,255,0.10) 47.5%, rgba(255,255,255,0.18) 48%, rgba(255,255,255,0.10) 48.5%, transparent 49%)` },
      { label: 'Velvet Metal', borderVariant: 4, background: `linear-gradient(135deg, ${c1} 0%, ${c2} 50%, ${c3} 100%), linear-gradient(115deg, rgba(255,255,255,0.12) 0%, transparent 22%, rgba(255,255,255,0.08) 42%, transparent 62%), radial-gradient(ellipse at 50% 120%, rgba(0,0,0,0.22) 0%, transparent 44%)` },
      { label: 'Wheel Halo', borderVariant: 8, background: `repeating-conic-gradient(from 0deg at 50% 50%, transparent 0 10deg, ${c4}18 10deg 20deg), radial-gradient(circle at 50% 50%, transparent 0 24%, ${c4}22 24% 34%, transparent 34% 100%), linear-gradient(135deg, ${c1} 0%, ${c2} 52%, ${c3} 100%)` },
      { label: 'Crest Frame', borderVariant: 9, background: `linear-gradient(135deg, ${c1} 0%, ${c2} 52%, ${c3} 100%), linear-gradient(90deg, ${c4}33 0 10%, transparent 10% 90%, ${c4}22 90% 100%), linear-gradient(180deg, ${c4}22 0 12%, transparent 12% 100%)` },
      { label: 'Light Column', borderVariant: 10, background: `linear-gradient(90deg, transparent 0 22%, ${c4}18 22% 32%, transparent 32% 68%, ${c4}14 68% 78%, transparent 78% 100%), linear-gradient(135deg, ${c1} 0%, ${c2} 52%, ${c3} 100%)` },
      { label: 'Fluid Flow', borderVariant: 6, background: `radial-gradient(ellipse at 18% 75%, ${c3}55 0%, transparent 38%), radial-gradient(ellipse at 78% 28%, ${c4}55 0%, transparent 34%), linear-gradient(135deg, ${c1} 0%, ${c2} 44%, ${c3} 100%)` },
      { label: 'Facet Crystal', borderVariant: 2, background: `linear-gradient(145deg, ${c1} 0 24%, ${c2} 24% 48%, ${c3} 48% 76%, ${c4} 76% 100%), linear-gradient(35deg, rgba(255,255,255,0.14) 0 18%, transparent 18% 42%, rgba(255,255,255,0.08) 42% 58%, transparent 58% 100%)` },
      { label: 'Shadow Crest', borderVariant: 1, background: `radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.18) 0%, transparent 46%), radial-gradient(circle at 50% 50%, transparent 0 28%, rgba(0,0,0,0.12) 28% 38%, transparent 38% 100%), linear-gradient(135deg, ${c1} 0%, ${c2} 52%, ${c3} 100%)` }
    ];
    const existingCount = BACKPLATE_REVIEW_GROUPS[spec.group]?.length || 0;
    return variants.map((variant, idx) => {
      const number = String(existingCount + idx + 1).padStart(2, '0');
      return {
        key: `${spec.prefix}_${number}`,
        value: {
          label: `${variant.label} ${number}`,
          background: variant.background,
          accent: spec.accent,
          glow: spec.glow,
          textColor: safeText,
          textShadow: safeShadow,
          borderVariant: variant.borderVariant
        }
      };
    });
  }

  EXPERIMENTAL_BACKPLATE_SPECS.forEach(spec => {
    const series = buildExperimentalBackplateSeries(spec);
    BACKPLATE_REVIEW_GROUPS[spec.group].push(...series.map(item => item.key));
    Object.assign(BACKGROUND_THEMES, Object.fromEntries(series.map(item => [item.key, item.value])));
  });

  Object.assign(BACKGROUND_THEMES, {
    default_12_cobalt_night_solid: {
      label: 'Cobalt Night Solid',
      background: '#1a3055',
      accent: 'rgba(140,200,255,0.88)',
      glow: 'rgba(80,160,255,0.22)',
      textColor: '#eaf4ff',
      textShadow: '0 2px 8px rgba(0,0,0,0.48)',
      borderVariant: 2
    }
  });

  function getBackgroundTheme(bgKey) {
    return BACKGROUND_THEMES[bgKey] || BACKGROUND_THEMES[DEFAULT_BG_THEME];
  }

  function getBackgroundStyle(bgKey) {
    return getBackgroundTheme(bgKey).background;
  }

  function getBackgroundLabel(bgKey) {
    return getBackgroundTheme(bgKey).label;
  }

  const BG_MENU_ITEMS = [
    { id: 'bg-default', themeKey: 'default_12_cobalt_night_solid', name: '預設背板' },
    { id: 'bg-common', themeKey: 'default_12_cobalt_night', name: '一般' },
    { id: 'bg-elite', themeKey: 'singleking_15', name: '菁英' },
    { id: 'bg-master', themeKey: 'streakbronze_19', name: '大師' },
    { id: 'bg-unique', themeKey: 'dailybronze_19', name: '獨特' },
    { id: 'bg-legendary', themeKey: 'sunset', name: '傳奇' },
    // { id: 'bg-chip-bronze', themeKey: 'singleking_15', name: '籌碼傳奇 - 銅' },
    // { id: 'bg-daily-bronze', themeKey: 'singleking_15', name: '每日開盤 - 銅' },
    // { id: 'bg-streak-bronze', themeKey: 'singleking_15', name: '連日長紅 - 銅' },
    // { id: 'bg-chip-platinum', themeKey: 'sunset', name: '籌碼傳奇 - 白金' },
    // { id: 'bg-streak-platinum', themeKey: 'sunset', name: '連日長紅 - 白金' },
    // { id: 'bg-daily-platinum', themeKey: 'dailybronze_19', name: '每日開盤 - 白金' },
    // { id: 'bg-royaltable-platinum', themeKey: 'streakbronze_19', name: '王桌名流 - 白金' },
    // { id: 'bg-luckywheel-platinum', themeKey: 'luckywheel_13', name: '幸運轉輪 - 白金' },
    // { id: 'bg-highroller-platinum', themeKey: 'luckywheel_13', name: '豪客流水 - 白金' },
    // { id: 'bg-jackpot-platinum', themeKey: 'luckywheel_13', name: '彩金風暴 - 白金' },
    // { id: 'bg-godmulti-platinum', themeKey: 'luckywheel_13', name: '爆倍盛宴 - 白金' },
    // { id: 'bg-singleking-platinum', themeKey: 'luckywheel_13', name: '單局封王 - 白金' },
    // { id: 'bg-supermulti-platinum', themeKey: 'luckywheel_13', name: '神倍時刻 - 白金' },
    // { id: 'bg-superluck-platinum', themeKey: 'luckywheel_13', name: '超強運氣 - 白金' },
  ];

  function getBgMenuItem(menuId) {
    return BG_MENU_ITEMS.find(item => item.id === menuId) || null;
  }

  function getBgMenuItemByKey(bgKey) {
    return BG_MENU_ITEMS.find(item => item.themeKey === bgKey) || null;
  }

  function getBgMenuLabel(bgKey, menuId = null) {
    return getBgMenuItem(menuId)?.name || getBgMenuItemByKey(bgKey)?.name || getBackgroundLabel(bgKey);
  }

  function getBackgroundInlineVars(bgKey, backgroundVar = '--player-bg') {
    const theme = getBackgroundTheme(bgKey);
    return [
      `${backgroundVar}: ${theme.background}`,
      `--theme-bg: ${theme.background}`,
      `--theme-accent: ${theme.accent}`,
      `--theme-glow: ${theme.glow}`,
      `--bg-accent: ${theme.accent}`,
      `--bg-glow: ${theme.glow}`,
      `--theme-text-color: ${theme.textColor || '#fff'}`,
      `--theme-text-shadow: ${theme.textShadow || DEFAULT_BG_TEXT_SHADOW}`
    ].join('; ');
  }

  function applyBackgroundTheme(el, bgKey, backgroundVar = '--theme-bg') {
    if (!el) return;
    const theme = getBackgroundTheme(bgKey);
    el.style.setProperty(backgroundVar, theme.background);
    el.style.setProperty('--theme-bg', theme.background);
    el.style.setProperty('--theme-accent', theme.accent);
    el.style.setProperty('--theme-glow', theme.glow);
    el.style.setProperty('--bg-accent', theme.accent);
    el.style.setProperty('--bg-glow', theme.glow);
    el.style.setProperty('--theme-text-color', theme.textColor || '#fff');
    el.style.setProperty('--theme-text-shadow', theme.textShadow || DEFAULT_BG_TEXT_SHADOW);
    el.classList.toggle('bg-animated-diamond', !!theme.animated);
    for (let i = 1; i <= 10; i++) el.classList.remove(`bv-${i}`);
    if (theme.borderVariant) el.classList.add(`bv-${theme.borderVariant}`);
    el.dataset.bgTheme = bgKey;
  }

  function syncBackgroundThemeOptions() {
    document.querySelectorAll('.bg-option[data-bg]').forEach(el => {
      applyBackgroundTheme(el, el.dataset.bg);
    });
  }

  // 玩家檔案：每個玩家附等級 / 頭像 / 稱號 / 背板主題 / 成就星數（共用於排行榜、跑馬燈）
  // achStars: 白金 1+ 跨遊戲成就數量，0~11，render 成 .player-card 上緣的 ✮ 列
  const profiles = {
    KingOfSpin: { lv: 38, avatar: '👑', title: '王者',   bgKey: 'lava',    achStars: 11 },
    Hades:      { lv: 32, avatar: '🐲', title: '賭神',   bgKey: 'galaxy',  achStars: 10 },
    Sunny:      { lv: 28, avatar: '🦁', title: '幸運兒', bgKey: 'sunset',  achStars: 8 },
    Misella:    { lv: 25, avatar: '🐍', title: '不敗',   bgKey: 'ocean',   achStars: 7 },
    Dede:       { lv: 24, avatar: '🐯', title: '至尊',   bgKey: 'gold',    achStars: 6 },
    Jesse:      { lv: 22, avatar: '🐼', title: '傳奇',   bgKey: 'jade',    achStars: 5 },
    Ratu:       { lv: 20, avatar: '🐶', title: '新手',   bgKey: 'night',   achStars: 3 },
    Joan5428:   { lv: 12, avatar: '🦊', title: '幸運兒', bgKey: DEFAULT_BG_THEME, achStars: 4 },
  };

  // 把成就星數 render 成 .ach-star-badge HTML（A-I 統一規格：大星 + 數字疊星內 + 描邊+影子）
  // 0 顆時回傳空字串（不渲染容器）
  function renderAchStars(count) {
    const n = Math.max(0, Math.min(11, Number(count) || 0));
    if (n === 0) return '';
    return `<span class="ach-star-badge" aria-label="成就：${n} 個白金以上成就"><span class="star">✮</span><span class="count">${n}</span></span>`;
  }
  // 填入 A · status-profile 專用的 .ach-star-badge（單顆 ✮ + 上方數字）
  function setAchStarBadge(el, count) {
    if (!el) return;
    const n = Math.max(0, Math.min(11, Number(count) || 0));
    const countEl = el.querySelector('.count');
    if (countEl) countEl.textContent = n;
    el.setAttribute('aria-label', n ? `成就：${n} 個白金以上成就` : '無成就');
    if (n === 0) el.setAttribute('hidden', '');
    else el.removeAttribute('hidden');
  }
  // 同步「玩家自己」相關的 ✮（A/B/C 都改成 .ach-star-badge）
  function syncSelfAchStars() {
    const n = profiles.Joan5428?.achStars ?? 0;
    setAchStarBadge(document.getElementById('statusAchStarBadge'), n);
    setAchStarBadge(document.getElementById('menuAchStarBadge'), n);
    setAchStarBadge(document.getElementById('profileAchStarBadge'), n);
  }

  // 跑馬燈訊息：每筆指定玩家 + 訊息（個人資訊從 profiles 取）
  const marqueeItems = [
    { player: 'Joan5428',   msg: '中得 100,000,000！',   icon: '🎉' },
    { player: 'Joan5428',   msg: '梅杜莎單局派彩 280x！', icon: '💰' },
    { player: 'Sunny',      msg: '進入 TurnOver Top 3！', icon: '🏆' },
    { player: 'Hades',      msg: '派彩 1500x！',          icon: '💰' },
    { player: 'KingOfSpin', msg: '解鎖王者稱號！',         icon: '👑' },
    { player: 'Misella',    msg: '單局派彩 800x！',        icon: '💎' },
  ];

  const lbMetricMeta = {
    turnover: { label: 'Turnover', valueLabel: '本週累積' },
    totalWin: { label: '累積勝分', valueLabel: '本週累積' },
    spins: { label: 'Spin次數', valueLabel: '本週累積' },
    totalMulti: { label: '總倍率', valueLabel: '本週累積' },
    singleWin: { label: '單局勝分', valueLabel: '本週最高' },
    singleMulti: { label: '單局倍率', valueLabel: '本週最高' },
    level: { label: '等級', valueLabel: '目前等級' }
  };
  const lbScopeMeta = {
    total: '總排名',
    medusa: '梅杜莎'
  };
  const lbData = {
    total: {
      turnover: [
        { rank: 1, name: 'KingOfSpin', lv: 38, value: '125,000,000' },
        { rank: 2, name: 'Hades',      lv: 32, value: '98,500,000' },
        { rank: 3, name: 'Sunny',      lv: 28, value: '76,200,000' },
        { rank: 4, name: 'Misella',    lv: 25, value: '52,100,000' },
        { rank: 5, name: 'Dede',       lv: 24, value: '47,800,000' },
        { rank: 6, name: 'Jesse',      lv: 22, value: '38,400,000' },
        { rank: 7, name: 'Ratu',       lv: 20, value: '31,200,000' },
        { rank: 8, name: 'Joan5428',   lv: 12, value: '12,800,000', self: true }
      ],
      totalWin: [
        { rank: 1, name: 'Hades',      lv: 32, value: '8,200,000' },
        { rank: 2, name: 'Misella',    lv: 25, value: '5,400,000' },
        { rank: 3, name: 'KingOfSpin', lv: 38, value: '4,100,000' },
        { rank: 4, name: 'Sunny',      lv: 28, value: '3,500,000' },
        { rank: 5, name: 'Joan5428',   lv: 12, value: '880,000', self: true }
      ],
      spins: [
        { rank: 1, name: 'Sunny',      lv: 28, value: '42,880' },
        { rank: 2, name: 'KingOfSpin', lv: 38, value: '40,210' },
        { rank: 3, name: 'Hades',      lv: 32, value: '38,550' },
        { rank: 4, name: 'Joan5428',   lv: 12, value: '12,040', self: true },
        { rank: 5, name: 'Misella',    lv: 25, value: '10,880' }
      ],
      totalMulti: [
        { rank: 1, name: 'Misella',    lv: 25, value: '18,450x' },
        { rank: 2, name: 'Hades',      lv: 32, value: '16,220x' },
        { rank: 3, name: 'KingOfSpin', lv: 38, value: '14,980x' },
        { rank: 4, name: 'Sunny',      lv: 28, value: '12,110x' },
        { rank: 5, name: 'Joan5428',   lv: 12, value: '4,280x', self: true }
      ],
      singleWin: [
        { rank: 1, name: 'KingOfSpin', lv: 38, value: '2,880,000' },
        { rank: 2, name: 'Hades',      lv: 32, value: '2,150,000' },
        { rank: 3, name: 'Misella',    lv: 25, value: '1,920,000' },
        { rank: 4, name: 'Joan5428',   lv: 12, value: '620,000', self: true },
        { rank: 5, name: 'Sunny',      lv: 28, value: '580,000' }
      ],
      singleMulti: [
        { rank: 1, name: 'Misella',    lv: 25, value: '880x' },
        { rank: 2, name: 'Hades',      lv: 32, value: '740x' },
        { rank: 3, name: 'KingOfSpin', lv: 38, value: '690x' },
        { rank: 4, name: 'Sunny',      lv: 28, value: '520x' },
        { rank: 5, name: 'Joan5428',   lv: 12, value: '280x', self: true }
      ],
      level: [
        { rank: 1, name: 'KingOfSpin', lv: 38, value: 'Lv.38' },
        { rank: 2, name: 'Hades',      lv: 32, value: 'Lv.32' },
        { rank: 3, name: 'Sunny',      lv: 28, value: 'Lv.28' },
        { rank: 4, name: 'Misella',    lv: 25, value: 'Lv.25' },
        { rank: 5, name: 'Dede',       lv: 24, value: 'Lv.24' },
        { rank: 6, name: 'Jesse',      lv: 22, value: 'Lv.22' },
        { rank: 7, name: 'Ratu',       lv: 20, value: 'Lv.20' },
        { rank: 8, name: 'Joan5428',   lv: 12, value: 'Lv.12', self: true }
      ]
    },
    medusa: {
      turnover: [
        { rank: 1, name: 'Hades',      lv: 32, value: '88,000,000' },
        { rank: 2, name: 'Sunny',      lv: 28, value: '81,200,000' },
        { rank: 3, name: 'KingOfSpin', lv: 38, value: '72,800,000' },
        { rank: 4, name: 'Misella',    lv: 25, value: '54,600,000' },
        { rank: 5, name: 'Joan5428',   lv: 12, value: '29,100,000', self: true }
      ],
      totalWin: [
        { rank: 1, name: 'Hades',      lv: 32, value: '6,480,000' },
        { rank: 2, name: 'KingOfSpin', lv: 38, value: '5,920,000' },
        { rank: 3, name: 'Sunny',      lv: 28, value: '4,700,000' },
        { rank: 4, name: 'Joan5428',   lv: 12, value: '1,120,000', self: true },
        { rank: 5, name: 'Misella',    lv: 25, value: '980,000' }
      ],
      spins: [
        { rank: 1, name: 'KingOfSpin', lv: 38, value: '18,220' },
        { rank: 2, name: 'Sunny',      lv: 28, value: '16,800' },
        { rank: 3, name: 'Hades',      lv: 32, value: '15,630' },
        { rank: 4, name: 'Joan5428',   lv: 12, value: '8,440', self: true },
        { rank: 5, name: 'Misella',    lv: 25, value: '7,980' }
      ],
      totalMulti: [
        { rank: 1, name: 'Misella',    lv: 25, value: '9,880x' },
        { rank: 2, name: 'Hades',      lv: 32, value: '8,720x' },
        { rank: 3, name: 'KingOfSpin', lv: 38, value: '8,120x' },
        { rank: 4, name: 'Sunny',      lv: 28, value: '6,980x' },
        { rank: 5, name: 'Joan5428',   lv: 12, value: '3,180x', self: true }
      ],
      singleWin: [
        { rank: 1, name: 'Hades',      lv: 32, value: '1,880,000' },
        { rank: 2, name: 'KingOfSpin', lv: 38, value: '1,420,000' },
        { rank: 3, name: 'Misella',    lv: 25, value: '1,180,000' },
        { rank: 4, name: 'Joan5428',   lv: 12, value: '580,000', self: true },
        { rank: 5, name: 'Sunny',      lv: 28, value: '520,000' }
      ],
      singleMulti: [
        { rank: 1, name: 'Misella',    lv: 25, value: '780x' },
        { rank: 2, name: 'Hades',      lv: 32, value: '650x' },
        { rank: 3, name: 'KingOfSpin', lv: 38, value: '610x' },
        { rank: 4, name: 'Joan5428',   lv: 12, value: '260x', self: true },
        { rank: 5, name: 'Sunny',      lv: 28, value: '240x' }
      ]
    }
  };

  const dailyTasks = [
    { id: 1, title: '登入打卡', exp: 50, progress: 1, target: 1, status: 'claim' },
    { id: 2, title: 'Spin 10次', exp: 80, progress: 10, target: 10, status: 'claim' },
    { id: 3, title: 'Win 1次', exp: 120, progress: 1, target: 1, status: 'claim' },
  ];
  const dailyTaskCompleteCount = 12;
  const loginRewards = {
    5: '稱號',
    10: '頭像',
    15: '背板',
    20: '稱號',
    25: '頭像',
    30: '背板'
  };

  // thresholds 為各 tier 達成條件 [銅, 鐵, 銀, 白金, 黃金, 鑽石]
  // 規則：已完成的最高 tier threshold ≤ 目前 status < next（= 目前 tier threshold）
  const achievementGroups = {
    total: [
      // 銅 進行中：status 20 < 銅(50)
      { tier: '銅', title: '升級成就', status: 'Lv20', next: 'Lv50', progress: 40, reward: '給予頭像',
        thresholds: ['Lv50', 'Lv80', 'Lv120', 'Lv180', 'Lv250', 'Lv350'] },
      // 鐵 進行中：銅(rank 200) ≥ status(80) > 鐵(50)，排名數字越小越強
      { tier: '鐵', title: '彩金排行王', status: '彩金排行第 80', next: 'rank 50', progress: 60, reward: '給予稱號', rewardTitle: '排行新銳',
        thresholds: ['rank 200', 'rank 50', 'rank 20', 'rank 10', 'rank 3', 'rank 1'] },
      // 銅 進行中：status 12 < 銅(30)
      { tier: '銅', title: '每日任務達人', status: '完成 12 次', next: '30 次', progress: 40, reward: '給予頭像',
        thresholds: ['30 次', '80 次', '150 次', '300 次', '600 次', '1,200 次'] },
      // 鐵 進行中：銅(30) ≤ status(80) < 鐵(150)
      { tier: '鐵', title: '每日任務常客', status: '完成 80 次', next: '150 次', progress: 53, reward: '給予稱號', rewardTitle: '勤勉者',
        thresholds: ['30 次', '150 次', '300 次', '600 次', '1,200 次', '2,500 次'] },
      // 銅 進行中：status 50 < 銅(100)
      { tier: '銅', title: '勝場收藏家', status: 'Win 50 次', next: '100 次', progress: 50, reward: '給予頭像',
        thresholds: ['Win 100 次', 'Win 250 次', 'Win 500 次', 'Win 1,000 次', 'Win 2,500 次', 'Win 5,000 次'] },
      // 銀 進行中：鐵(250) ≤ status(420) < 銀(800)
      { tier: '銀', title: '勝場霸主', status: 'Win 420 次', next: '800 次', progress: 52, reward: '給予頭像', rewardAvatar: '🦅',
        thresholds: ['Win 100 次', 'Win 250 次', 'Win 800 次', 'Win 1,500 次', 'Win 3,000 次', 'Win 6,000 次'] },
      // 鐵 進行中：銅(3) ≤ status(8) < 鐵(15)
      { tier: '鐵', title: '連勝挑戰者', status: '連續 Win 8 次', next: '15 次', progress: 53, reward: '給予稱號', rewardTitle: '連擊好手',
        thresholds: ['連續 3 次', '連續 15 次', '連續 25 次', '連續 40 次', '連續 60 次', '連續 100 次'] },
      // 黃金 進行中：白金(30) ≤ status(45) < 黃金(80)
      { tier: '黃金', title: '不敗王者', status: '連續 Win 45 次', next: '80 次', progress: 56, reward: '給予頭像', rewardAvatar: '🦁',
        thresholds: ['連續 5 次', '連續 12 次', '連續 20 次', '連續 30 次', '連續 80 次', '連續 150 次'] },
      // 銅 進行中：status 20K < 銅(400K)
      { tier: '銅', title: 'Turnover 累積者', status: '20,000', next: '400,000', progress: 35, reward: '給予頭像',
        thresholds: ['400,000', '6,000,000', '80,000,000', '1,000,000,000', '20,000,000,000', '500,000,000,000'] },
      // 白金 進行中：銀(6M) ≤ status(80M) < 白金(1B)
      { tier: '白金', title: 'Turnover 巨匠', status: '80,000,000', next: '1,000,000,000', progress: 44, reward: '給予背板', rewardBg: 'lava',
        thresholds: ['20,000', '400,000', '6,000,000', '1,000,000,000', '20,000,000,000', '500,000,000,000'] },
      // 銅 進行中：status 15K < 銅(300K)
      { tier: '銅', title: 'Payout 累積者', status: '15,000', next: '300,000', progress: 38, reward: '給予頭像',
        thresholds: ['300,000', '5,000,000', '60,000,000', '800,000,000', '15,000,000,000', '300,000,000,000'] },
      // 白金 進行中：銀(5M) ≤ status(60M) < 白金(300M)
      { tier: '白金', title: '彩金收藏家', status: '60,000,000', next: '300,000,000', progress: 61, reward: '給予背板', rewardBg: 'gold',
        thresholds: ['15,000', '300,000', '5,000,000', '300,000,000', '2,000,000,000', '30,000,000,000'] },
      // 鐵 進行中：銅(3) ≤ status(6) < 鐵(10)
      { tier: '鐵', title: '鐵牌成就收藏', status: '完成 6 個鐵牌', next: '10 個', progress: 60, reward: '給予稱號', rewardTitle: '鐵牌收藏家',
        thresholds: ['3 個', '10 個', '25 個', '50 個', '80 個', '120 個'] },
      // 銀 進行中：鐵(2) ≤ status(4) < 銀(8) ；銅(1) 略低
      { tier: '銀', title: '銀牌成就收藏', status: '完成 4 個銀牌', next: '8 個', progress: 50, reward: '給予頭像', rewardAvatar: '🦄',
        thresholds: ['1 個', '2 個', '8 個', '18 個', '30 個', '50 個'] },
      // 白金 進行中：銀(3) ≤ status(4) < 白金(5)；status 改為 4 個以對齊邏輯
      { tier: '白金', title: '白金成就收藏', status: '完成 4 個白金', next: '5 個', progress: 80, reward: '給予背板', rewardBg: 'jade',
        thresholds: ['1 個', '2 個', '3 個', '5 個', '12 個', '25 個'] },
      // 黃金 進行中：白金(4) ≤ status(4) < 黃金(5)
      { tier: '黃金', title: '黃金成就收藏', status: '完成 4 個黃金', next: '5 個', progress: 80, reward: '給予頭像', rewardAvatar: '🐉',
        thresholds: ['1 個', '2 個', '3 個', '4 個', '5 個', '10 個'] },
      // 鑽石 已達成最高（rule：含自身，顯示「已達成最高成就」）
      { tier: '鑽石', title: '鑽石成就收藏', status: '完成 12 個鑽石', next: '已達成最高', progress: 100, reward: '更換背板', rewardBg: 'diamond',
        thresholds: ['1 個', '2 個', '3 個', '5 個', '8 個', '12 個'] }
    ],
    medusa: [
      // 銅 進行中：status 20K < 銅(400K)
      { tier: '銅', title: '彩金獵人', status: 'Payout 20,000', next: '400,000', progress: 32, reward: '給予頭像',
        thresholds: ['400,000', '6,000,000', '80,000,000', '1,000,000,000', '20,000,000,000', '500,000,000,000'] },
      // 鐵 進行中：銅(10) ≤ status(20) < 鐵(50)
      { tier: '鐵', title: '幸運兒', status: '20 倍', next: '50 倍', progress: 44, reward: '給予稱號', rewardTitle: '初露鋒芒',
        thresholds: ['10 倍', '50 倍', '100 倍', '250 倍', '500 倍', '1,000 倍'] },
      // 銀 進行中：鐵(60) ≤ status(80) < 銀(120)
      { tier: '銀', title: '勝場高手', status: 'Win 80 次', next: 'Win 120 次', progress: 67, reward: '給予頭像', rewardAvatar: '🐺',
        thresholds: ['Win 30 次', 'Win 60 次', 'Win 120 次', 'Win 250 次', 'Win 500 次', 'Win 1,000 次'] },
      // 白金 進行中：銀(6) ≤ status(8) < 白金(12)
      { tier: '白金', title: '連勝挑戰者', status: '連續中獎 8 次', next: '12 次', progress: 58, reward: '給予背板', rewardBg: 'night',
        thresholds: ['連續 3 次', '連續 6 次', '連續 9 次', '連續 12 次', '連續 18 次', '連續 30 次'] },
      // 黃金 進行中：白金(80) ≤ status(120) < 黃金(250)
      { tier: '黃金', title: '高倍獵手', status: '單局 120 倍', next: '250 倍', progress: 48, reward: '給予頭像', rewardAvatar: '🦚',
        thresholds: ['20 倍', '50 倍', '80 倍', '100 倍', '250 倍', '500 倍'] }
    ]
  };

  // 機台清單：全部以編號 + 數據呈現
  const machineDateRange = '2026-04-20 ~ 2026-04-27';
  const machines = [
    { num: 24, lv: 1,  turnover: 999999999, win: 892777666, trend: [42, 58, 51, 74, 68, 91, 86] },
    { num: 1,  lv: 1,  turnover: 125000000, win: 23400000,  trend: [24, 31, 45, 39, 56, 62, 78] },
    { num: 3,  lv: 1,  turnover: 82000000,  win: 11300000,  trend: [62, 54, 48, 52, 40, 46, 57] },
    { num: 7,  lv: 3,  turnover: 68500000,  win: 8800000,   trend: [18, 28, 26, 44, 41, 59, 55] },
    { num: 12, lv: 5,  turnover: 54200000,  win: 5200000,   trend: [47, 43, 55, 50, 64, 60, 72] },
    { num: 18, lv: 7,  turnover: 47800000,  win: 4100000,   trend: [70, 62, 66, 58, 52, 48, 44] },
    { num: 25, lv: 8,  turnover: 41000000,  win: 3800000,   trend: [30, 42, 39, 52, 57, 49, 63] },
    { num: 31, lv: 10, turnover: 38400000,  win: 2900000,   trend: [36, 33, 48, 52, 47, 61, 68] },
    { num: 38, lv: 11, turnover: 32100000,  win: 2200000,   trend: [51, 60, 56, 64, 70, 66, 76] },
    { num: 42, lv: 12, turnover: 28000000,  win: 1800000,   trend: [26, 35, 31, 46, 43, 52, 48] },
    { num: 47, lv: 12, turnover: 24500000,  win: 1500000,   trend: [59, 50, 53, 45, 49, 41, 47] },
    { num: 51, lv: 12, turnover: 20100000,  win: 1200000,   trend: [22, 29, 37, 34, 45, 54, 50] },
    { num: 56, lv: 12, turnover: 16800000,  win: 900000,    trend: [44, 36, 40, 33, 38, 31, 35] },
    // Locked
    { num: 62, lv: 15, trend: [20, 26, 23, 35, 32, 44, 40] },
    { num: 75, lv: 18, trend: [38, 32, 45, 41, 50, 46, 58] },
    { num: 88, lv: 20, trend: [55, 49, 42, 47, 39, 35, 30] },
    { num: 99, lv: 25, trend: [28, 36, 34, 48, 52, 61, 68] },
  ];
  let currentMachineNum = 24;

  const userLevel = 12;
  let currentUserName = 'Joan5428';
  let currentLbScope = 'total';
  let currentLbMetric = 'turnover';
  const userOptions = {
    showMarquee: true,
    soundEnabled: true,
    showPromotion: true,
    marqueeEffect: 1
  };
  try {
    const savedOptions = JSON.parse(localStorage.getItem('memberPrototypeOptions') || '{}');
    Object.assign(userOptions, savedOptions);
  } catch (err) {
    // Prototype fallback: ignore broken saved options.
  }
  // 強制 Promotion 按鈕一定顯示（避免舊 localStorage 把它關掉）
  userOptions.showPromotion = true;
  // 文件模式固定使用跑馬燈效果 1，避免舊 localStorage 覆蓋預設展示。
  userOptions.marqueeEffect = 1;
  let appliedThemeKey = DEFAULT_BG_THEME;
  let appliedThemeMenuId = 'bg-default';

  // ===== UI Logic =====
  let menuOpen = false;
  let collapseStage = 0; // 0=全開, 1=半收（只剩個人資料）, 2=全收（只剩 collapse-btn + 紅點）
  let audioCtx = null;
  let currentAchievementTab = 'total';

  const promotionItems = [
    {
      type: 'Cash Drop',
      title: '慶祝勞動節',
      date: '2026 05/01 ~ 05/31',
      prize: '最高金額 6,000',
      image: 'assets/campaign_laborday.jpg'
    },
    {
      type: 'Tournament',
      title: '世界杯錦標賽',
      date: '2026 05/01 ~ 05/31',
      prize: '第一名獎金 10,000,000',
      image: 'assets/campaign_worldcup.jpg'
    }
  ];
  let promotionIdx = 0;
  let promotionTimer = null;
  let lbMenuIdx = 0;
  let lbMenuTimer = null;
  const activePlayerEvents = [
    { game: '梅杜莎', player: 'Joan5428', event: '獲得贏分 x20' },
    { game: '經典777', player: 'Sunny', event: '獲得贏分 x10' },
    { player: 'Hades', event: '等級提升到 23' },
    { player: 'KingOfSpin', event: '登上 turnover 排行 43 名' },
    { game: '梅杜莎', player: 'Misella', event: '獲得贏分 x35' },
    { game: '火焰轉輪', player: 'Dede', event: '完成每日任務 30 次' },
    { player: 'Ratu', event: '完成銀牌成就 8 個' },
    { game: '經典777', player: 'Jesse', event: '獲得贏分 x18' }
  ];
  let activePlayerFeedIdx = 0;
  let activePlayerFeedTimer = null;
  let activePlayerFeedAutoplay = true;  /* 仍每 2 秒輪播切下一位活躍玩家，但 render 一次只顯示 1 筆，不堆「上一篇」歷史 */
  let activePlayerPanelCollapsed = false;

  // Promotion 在執行中的 feed 訊息（當 userOptions.showPromotion = true 才會被加入 feed）
  const promotionFeedItems = [
    { promoIdx: 0, label: 'CashDrop 活動展開中', remaining: '24H15M' },
    { promoIdx: 1, label: '排行榜正在進行中',   remaining: '24H15M' }
  ];

  function toggleMenu() { menuOpen ? closeMenu() : openMenu(); }
  function openMenu() {
    if (collapseStage === 2) return;
    document.getElementById('mainMenu').classList.add('show');
    document.getElementById('overlay').classList.add('show');
    menuOpen = true;
  }
  function closeMenu() {
    document.getElementById('mainMenu').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
    menuOpen = false;
  }

  // 點左側個人資訊區：全開或半收狀態下開選單；全收狀態下不動作
  function onStatusBarClick(e) {
    if (collapseStage === 2) return;
    if (e.target.closest('#activePlayerPanel')) return;
    if (e.target.closest('.collapse-btn')) return;
    toggleMenu();
  }

  // 點折疊按鈕：3 段循環 全開 → 半收 → 全收 → 全開
  function onCollapseClick(e) {
    e.stopPropagation();
    collapseStage = (collapseStage + 1) % 3;
    const bar = document.getElementById('statusBar');
    const icon = document.getElementById('collapseIcon');
    bar.classList.remove('half-collapsed', 'collapsed');
    if (collapseStage === 0) {
      // 全開：箭頭向右（按一下會關閉）
      icon.textContent = '›';
    } else if (collapseStage === 1) {
      // 半收：仍向右（按一下會繼續關閉）
      bar.classList.add('half-collapsed');
      icon.textContent = '›';
    } else {
      // 全收：箭頭向左（按一下會打開）
      bar.classList.add('collapsed');
      icon.textContent = '‹';
      closeMenu();
    }
  }
  function toggleActivePlayerPanelVisibility() {
    const panel = document.getElementById('activePlayerPanel');
    if (!panel) return;
    panel.classList.toggle('hidden');
  }
  function toggleActivePlayerPanel(e) {
    e.stopPropagation();
    activePlayerPanelCollapsed = !activePlayerPanelCollapsed;
    const panel = document.getElementById('activePlayerPanel');
    const toggle = document.getElementById('activePlayerCollapse');
    if (!panel || !toggle) return;
    panel.classList.toggle('collapsed', activePlayerPanelCollapsed);
    toggle.textContent = activePlayerPanelCollapsed ? '‹' : '›';
  }
  function openPage(id) {
    closeMenu();
    document.getElementById(id).classList.add('show');
  }
  function closePage(id) {
    document.getElementById(id).classList.remove('show');
  }


  function renderPromotion() {
    const item = promotionItems[promotionIdx];
    const thumb = document.getElementById('promotionThumb');
    const kicker = document.getElementById('promotionKicker');
    const title = document.getElementById('promotionTitle');
    const desc = document.getElementById('promotionDesc');
    const prize = document.getElementById('promotionPrize');
    const dots = document.getElementById('promotionDots');
    if (!item || !thumb || !kicker || !title || !desc || !prize || !dots) return;
    thumb.src = item.image;
    thumb.alt = item.type;
    kicker.textContent = item.type;
    title.textContent = item.title;
    desc.textContent = item.date;
    prize.textContent = item.prize;
    dots.innerHTML = promotionItems.map((_, idx) => `<span class="promotion-dot ${idx === promotionIdx ? 'active' : ''}"></span>`).join('');
  }

  function startPromotionCarousel() {
    renderPromotion();
    if (promotionTimer) clearInterval(promotionTimer);
    promotionTimer = setInterval(() => {
      promotionIdx = (promotionIdx + 1) % promotionItems.length;
      renderPromotion();
    }, 3800);
  }

  function getLeaderboardMenuItems() {
    return Object.entries(lbMetricMeta).map(([key, meta]) => {
      const top3 = (lbData.total[key] || []).slice(0, 3);
      return {
        metricKey: key,
        kicker: `${lbScopeMeta.total} · ${meta.label}`,
        desc: `${meta.valueLabel} · 前三名`,
        top3
      };
    });
  }

  function getLeaderboardTrendDirection(metricKey, index) {
    const trendMap = {
      turnover:    ['up', 'up', 'down'],
      totalWin:    ['up', 'down', 'up'],
      spins:       ['up', 'up', 'down'],
      totalMulti:  ['up', 'down', 'down'],
      singleWin:   ['up', 'up', 'up'],
      singleMulti: ['down', 'up', 'up']
    };
    const trends = trendMap[metricKey] || ['up', 'down', 'up'];
    return trends[index] || 'up';
  }

  function getLeaderboardListTrendDirection(metricKey, rank) {
    const trendMap = {
      turnover:    ['up', 'up', 'down', 'up', 'down', 'up', 'down', 'up'],
      totalWin:    ['up', 'down', 'up', 'down', 'up', 'down', 'up', 'down'],
      spins:       ['up', 'up', 'down', 'up', 'down', 'up', 'down', 'up'],
      totalMulti:  ['up', 'down', 'down', 'up', 'down', 'up', 'up', 'down'],
      singleWin:   ['up', 'up', 'up', 'down', 'up', 'down', 'up', 'down'],
      singleMulti: ['down', 'up', 'up', 'down', 'up', 'up', 'down', 'up']
    };
    const trends = trendMap[metricKey] || ['up', 'down', 'up', 'down'];
    return trends[Math.max(0, rank - 1)] || 'up';
  }

  function renderLeaderboardMenuCard(withMotion = false) {
    const items = getLeaderboardMenuItems();
    const card = document.querySelector('.leaderboard-preview-card');
    const kicker = document.getElementById('lbMenuKicker');
    const preview = document.getElementById('lbMenuPreview');
    if (!items.length || !card || !kicker || !preview) return;
    const item = items[lbMenuIdx % items.length];
    if (withMotion) {
      card.classList.remove('lb-menu-animating');
      void card.offsetWidth;
    }
    kicker.textContent = item.kicker;
    preview.innerHTML = item.top3.map((player, index) => {
      const profile = profiles[player.name] || {};
      const playerTheme = getBackgroundInlineVars(profile.bgKey);
      const trend = getLeaderboardTrendDirection(item.metricKey, index);
      const trendArrow = trend === 'down' ? '▼' : '▲';
      return `
        <div class="lb-menu-row lb-menu-row--with-rank">
          <div class="lb-menu-rank-wrap">
            <div class="lb-menu-trend ${trend}">${trendArrow}</div>
            <div class="lb-menu-rank">${player.rank}</div>
          </div>
          <div class="player-card player-card--list-mini idcs-host" onclick="event.stopPropagation(); openPlayerProfile('${player.name}')" style="cursor:pointer; ${playerTheme}">
            <!-- F: 小板 ID 卡 -->
            <div class="idcs">
              <img class="idcs-frame" src="assets/idcard/sml_frame.png" alt="" aria-hidden="true">
              <div class="idcs-av"><img src="assets/idcard/sml_avatar.png" alt="頭像"></div>
              <div class="idcs-level"><img src="assets/idcard/sml_level.png" alt=""><span class="idcs-level-n">${profile.lv ?? player.lv ?? '?'}</span></div>
              <div class="idcs-name">${player.name}</div>
              <div class="idcs-star"><img src="assets/idcard/sml_star.png" alt="成就星"><span class="idcs-star-n">${profile.achStars ?? 0}</span></div>
            </div>
          </div>
          <div class="lb-menu-value">${player.value}</div>
        </div>
      `;
    }).join('');
    if (withMotion) card.classList.add('lb-menu-animating');
  }

  function startLeaderboardMenuCarousel() {
    const items = getLeaderboardMenuItems();
    renderLeaderboardMenuCard();
    if (lbMenuTimer) clearInterval(lbMenuTimer);
    if (items.length <= 1) return;
    lbMenuTimer = setInterval(() => {
      lbMenuIdx = (lbMenuIdx + 1) % items.length;
      renderLeaderboardMenuCard(true);
    }, 10000);
  }

  function getActivePlayerFeedItems() {
    return activePlayerEvents.filter(item => item.event.includes('獲得贏分'));
  }

  function renderActivePlayerFeed() {
    const feed = document.getElementById('activePlayerFeed');
    if (!feed) return;
    const payoutEvents = getActivePlayerFeedItems();
    // 一次只顯示 1 筆當前事件，底下不再堆疊「上一篇」歷史
    const current = payoutEvents[activePlayerFeedIdx % (payoutEvents.length || 1)];
    if (!current) { feed.innerHTML = ''; return; }
    feed.innerHTML = renderPlayerEventItem(current);
  }

  function renderPlayerEventItem(item) {
    return `
      <div class="active-player-item">
        <div class="active-player-meta">${renderActivePlayerMeta(item.player)}</div>
        <div class="active-player-event">${item.event}</div>
      </div>
    `;
  }

  function renderPromoFeedItem(item) {
    const promo = promotionItems[item.promoIdx] || {};
    const img = promo.image || '';
    const alt = promo.type || '';
    return `
      <div class="promo-feed-item" onclick="openPromotionModal()">
        <div class="promo-feed-frame">
          ${img ? `<img src="${img}" alt="${alt}">` : ''}
        </div>
        <div class="promo-feed-text">
          <div class="promo-feed-label">${item.label}</div>
          <div class="promo-feed-remaining">剩餘 ${item.remaining}</div>
        </div>
      </div>
    `;
  }

  function renderActivePlayerMeta(playerName) {
    const profile = profiles[playerName] || {};
    return `
      <div class="player-card player-card--list-chip idcs-host" style="${getBackgroundInlineVars(profile.bgKey)}" onclick="event.stopPropagation(); openPlayerProfile('${playerName}')">
        <!-- G: 小板 ID 卡 -->
        <div class="idcs">
          <img class="idcs-frame" src="assets/idcard/sml_frame.png" alt="" aria-hidden="true">
          <div class="idcs-av"><img src="assets/idcard/sml_avatar.png" alt="頭像"></div>
          <div class="idcs-level"><img src="assets/idcard/sml_level.png" alt=""><span class="idcs-level-n">${profile.lv ?? '?'}</span></div>
          <div class="idcs-name">${playerName}</div>
          <div class="idcs-star"><img src="assets/idcard/sml_star.png" alt="成就星"><span class="idcs-star-n">${profile.achStars ?? 0}</span></div>
        </div>
      </div>
    `;
  }

  function openPlayerProfile(name) {
    const p = profiles[name];
    if (!p) return;
    document.getElementById('playerProfileAvatar').textContent = p.avatar || '🎮';
    document.getElementById('playerProfileName').textContent = name;
    const hash = name.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const mockId = String((hash * 1234567) % 99999999).padStart(8, '0');
    document.getElementById('playerProfileId').textContent = 'ID: ' + mockId;
    const titleEl = document.getElementById('playerProfileTitle');
    if (p.title) {
      titleEl.textContent = p.title;  // .idc-title 是 CSS 緞帶，文字本身不加 ✦
      titleEl.style.display = '';
    } else {
      titleEl.textContent = '';
      titleEl.style.display = 'none';
    }
    document.getElementById('playerProfileLv').textContent = p.lv ?? '?';  // .idc-level 盾牌只放數字
    const starN = document.getElementById('playerProfileStarN');
    if (starN) starN.textContent = String(p.achStars ?? 0);  // .idc-star-n 同步星數
    setAchStarBadge(document.getElementById('playerProfileAchStarBadge'), p.achStars ?? 0);
    currentPlayerAchTab = 'total';
    document.querySelectorAll('#playerProfilePage .ach-tab').forEach(el => {
      el.classList.toggle('active', el.dataset.ach === 'total');
    });
    renderAchievementsInto(document.getElementById('playerAchievementTab'), 'total');
    document.getElementById('leaderboardPage').classList.remove('show');
    document.getElementById('playerProfilePage').classList.add('show');
  }

  function startActivePlayerFeed() {
    renderActivePlayerFeed();
    if (activePlayerFeedTimer) clearInterval(activePlayerFeedTimer);
    activePlayerFeedTimer = null;
    const items = getActivePlayerFeedItems();
    if (!activePlayerFeedAutoplay || items.length <= 1) return;
    activePlayerFeedTimer = setInterval(() => {
      activePlayerFeedIdx = (activePlayerFeedIdx + 1) % items.length;
      renderActivePlayerFeed();
    }, 2000);
  }

  function setActivePlayerFeedAutoplay(enabled = true) {
    activePlayerFeedAutoplay = !!enabled;
    startActivePlayerFeed();
    return activePlayerFeedAutoplay;
  }

  function debugPinActivePlayer(playerName = 'Joan5428') {
    const items = getActivePlayerFeedItems();
    const index = items.findIndex(item => item.player === playerName);
    if (index === -1) return null;
    activePlayerFeedAutoplay = false;
    if (activePlayerFeedTimer) clearInterval(activePlayerFeedTimer);
    activePlayerFeedTimer = null;
    activePlayerFeedIdx = index;
    renderActivePlayerFeed();
    return { player: playerName, index, autoplay: activePlayerFeedAutoplay };
  }

  function debugUnpinActivePlayer() {
    return setActivePlayerFeedAutoplay(true);
  }

  window.setActivePlayerFeedAutoplay = setActivePlayerFeedAutoplay;
  window.debugPinActivePlayer = debugPinActivePlayer;
  window.debugUnpinActivePlayer = debugUnpinActivePlayer;

  function openPromotionModal() {
    closeMenu();
    const modal = document.getElementById('promotionModal');
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    playMemberSound('success');
  }

  function closePromotionModal() {
    const modal = document.getElementById('promotionModal');
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 1500);
  }

  function playMemberSound(kind = 'tap') {
    if (!userOptions.soundEnabled) return;
    try {
      const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextCtor) return;
      audioCtx = audioCtx || new AudioContextCtor();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const now = audioCtx.currentTime;
      const freq = kind === 'marquee' ? 880 : kind === 'success' ? 740 : 560;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.22, now + 0.08);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.08, now + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    } catch (err) {
      // Sound is optional in the prototype.
    }
  }

  function persistOptions() {
    try {
      localStorage.setItem('memberPrototypeOptions', JSON.stringify(userOptions));
    } catch (err) {
      // Options still work for the current preview session.
    }
  }

  function renderOptions() {
    const pairs = [
      ['showMarquee', 'showMarqueeSwitch'],
      ['soundEnabled', 'soundEnabledSwitch'],
      ['showPromotion', 'showPromotionSwitch']
    ];
    pairs.forEach(([key, id]) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.toggle('on', userOptions[key]);
      el.setAttribute('aria-pressed', String(userOptions[key]));
    });
    document.querySelectorAll('.desc-effect-btn').forEach((el, idx) => {
      el.classList.toggle('active', idx + 1 === userOptions.marqueeEffect);
    });
    applyPromotionVisibility();
    applyMarqueeEffect();
  }

  function applyPromotionVisibility() {
    const visible = userOptions.showPromotion;
    document.querySelectorAll('.promotion-btn').forEach(el => {
      el.classList.toggle('promotion-hidden', !visible);
    });
    // Promotion 開關會影響 active-player-feed 是否加入 promo 訊息
    if (typeof renderActivePlayerFeed === 'function') renderActivePlayerFeed();
  }

  function applyMarqueeEffect() {
    const bar = document.querySelector('.marquee');
    if (!bar) return;
    bar.classList.remove('marquee-effect-1', 'marquee-effect-2', 'marquee-effect-3');
    bar.classList.add(`marquee-effect-${userOptions.marqueeEffect || 1}`);
  }

  function setMarqueeEffect(level) {
    // 先完整 reset：停止所有動畫、計時器、清空內容、重置索引
    stopMarquee();
    marqueeIdx = 0;

    // 強制清除 transition / animation 殘留狀態
    const bar = document.querySelector('.marquee');
    const c = document.getElementById('marqueeContent');
    if (bar) {
      bar.classList.remove('show', 'marquee-effect-1', 'marquee-effect-2', 'marquee-effect-3');
    }
    if (c) {
      c.classList.remove('scrolling');
      c.innerHTML = '';
    }

    // 套用新效果設定並儲存
    userOptions.marqueeEffect = level;
    persistOptions();
    renderOptions();
    playMemberSound('tap');

    // reflow 後從頭開始播放
    if (bar) void bar.offsetWidth;
    setTimeout(() => {
      playMarquee(!userOptions.showMarquee);
    }, 80);
  }

  function toggleOption(key) {
    userOptions[key] = !userOptions[key];
    persistOptions();
    renderOptions();
    playMemberSound(userOptions[key] ? 'success' : 'tap');
    if (key === 'showMarquee') {
      if (userOptions.showMarquee) {
        showToast('跑馬燈已開啟');
        playMarquee();
      } else {
        stopMarquee();
        showToast('跑馬燈已關閉');
      }
      return;
    }
    if (key === 'showPromotion') {
      applyPromotionVisibility();
      showToast(userOptions.showPromotion ? 'Promotion 已開啟' : 'Promotion 已關閉');
      return;
    }
    showToast(userOptions.soundEnabled ? '音效已開啟' : '音效已關閉');
  }

  function renderMails() {
    const list = document.getElementById('mailList');
    list.innerHTML = mails.map(m => `
      <div class="mail-item ${m.unread ? 'unread' : ''}" onclick="readMail(${m.id})">
        <div class="mail-icon-circle">${m.icon}</div>
        <div class="mail-content">
          <div class="mail-title">
            ${m.unread ? '<span class="mail-dot"></span>' : ''}${m.title}
          </div>
          <div class="mail-preview">${m.preview}</div>
          <div class="mail-time">${m.time}</div>
        </div>
      </div>
    `).join('');
    updateMailBadge();
  }
  function readMail(id) {
    const m = mails.find(x => x.id === id);
    if (!m) return;
    if (m.unread) {
      m.unread = false;
      renderMails();
      playMemberSound('tap');
    }
    openMailDetail(m);
  }
  function openMailDetail(mail) {
    document.getElementById('mailDetailDate').textContent = mail.time;
    document.getElementById('mailDetailTitle').textContent = mail.title;
    document.getElementById('mailDetailBody').textContent = mail.body || mail.preview;
    const modal = document.getElementById('mailDetailModal');
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  }
  function closeMailDetail() {
    const modal = document.getElementById('mailDetailModal');
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }
  function updateMailBadge() {
    const unreadCount = mails.filter(m => m.unread).length;
    ['mailBadge', 'menuMailBadge'].forEach(id => {
      const badge = document.getElementById(id);
      if (!badge) return;
      if (unreadCount > 0) {
        badge.textContent = unreadCount;
        badge.style.display = 'flex';
      } else {
        badge.style.display = 'none';
      }
    });
  }

  function openProfileSelectModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    playMemberSound('tap');
  }

  function closeProfileSelectModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }

  function openRenameModal() {
    const input = document.getElementById('renameInput');
    const error = document.getElementById('renameError');
    if (input) {
      input.value = currentUserName;
      setTimeout(() => input.focus(), 0);
    }
    if (error) error.textContent = '';
    openProfileSelectModal('renameModal');
  }

  function closeRenameModal() {
    closeProfileSelectModal('renameModal');
  }

  function submitRename() {
    const input = document.getElementById('renameInput');
    const error = document.getElementById('renameError');
    const name = (input?.value || '').trim();
    if (!name) {
      if (error) error.textContent = '請輸入暱稱';
      return;
    }
    if (name.length < 2 || name.length > 12) {
      if (error) error.textContent = '暱稱需為 2-12 個字元';
      return;
    }
    currentUserName = name;
    document.getElementById('statusName').textContent = name;
    document.getElementById('menuUserName').textContent = name;
    document.getElementById('profileInfoName').textContent = name;
    refreshStatusNameMarquee();
    if (error) error.textContent = '';
    playMemberSound('success');
    showToast('暱稱已更新');
    closeRenameModal();
  }

  document.querySelectorAll('.avatar-option').forEach(el => {
    el.addEventListener('click', () => {
      if (el.classList.contains('locked')) {
        showToast('此頭像尚未解鎖');
        return;
      }
      document.querySelectorAll('.avatar-option').forEach(x => x.classList.remove('selected'));
      el.classList.add('selected');
      const av = el.dataset.avatar;
      document.getElementById('statusAvatar').textContent = av;
      document.getElementById('menuAvatar').textContent = av;
      document.getElementById('currentAvatarPreview').textContent = av;
      document.getElementById('profileInfoAvatar').textContent = av;
      playMemberSound('tap');
      showToast('頭像已更換');
      closeProfileSelectModal('avatarSelectModal');
    });
  });

  function applyThemeToUserSurfaces(bgKey, menuId = null) {
    applyBackgroundTheme(document.documentElement, bgKey, '--user-bg');
    document.querySelectorAll('.menu-header').forEach(el => applyBackgroundTheme(el, bgKey, '--user-bg'));
    const currentBg = document.getElementById('currentBgPreview');
    applyBackgroundTheme(currentBg, bgKey);
    if (currentBg) currentBg.textContent = getBgMenuLabel(bgKey, menuId);
    document.documentElement.dataset.bv = String(getSafeUserBorderVariant(getBackgroundTheme(bgKey).borderVariant));
  }

  function getSafeUserBorderVariant(borderVariant) {
    if ([1, 5, 10].includes(borderVariant)) return 1;
    if ([2, 6, 8].includes(borderVariant)) return 2;
    return 3;
  }

  function applyCommittedTheme(bgKey, menuId = null) {
    appliedThemeKey = bgKey;
    appliedThemeMenuId = getBgMenuItem(menuId)?.id || getBgMenuItemByKey(bgKey)?.id || null;
    profiles.Joan5428.bgKey = bgKey;
    applyThemeToUserSurfaces(bgKey, appliedThemeMenuId);
    renderLb(currentLbMetric);
    renderLeaderboardMenuCard();
    renderActivePlayerFeed();
  }

  function applyUserBg(bgKey, menuId = null) {
    applyCommittedTheme(bgKey, menuId);
  }

  function renderBgLibraryGrid() {
    const container = document.getElementById('bgLibraryGrid');
    if (!container) return;
    container.innerHTML = BG_MENU_ITEMS.map(item => {
      const theme = getBackgroundTheme(item.themeKey);
      const selectedCls = appliedThemeMenuId === item.id ? 'selected' : '';
      const bvCls = theme.borderVariant ? ` bv-${theme.borderVariant}` : '';
      return `
        <div class="bg-option ${selectedCls}${bvCls}" data-bg="${item.themeKey}" data-menu-id="${item.id}" role="button" tabindex="0" aria-label="套用 ${item.name}">
          <div class="bg-corners"><i class="tl"></i><i class="tr"></i><i class="bl"></i><i class="br"></i></div>
          <span class="bg-name">${item.name}</span>
        </div>
      `;
    }).join('');
    syncBackgroundThemeOptions();
  }

  function openBgSelectModal() {
    renderBgLibraryGrid();
    openProfileSelectModal('bgSelectModal');
  }

  function selectBgTheme(themeKey, menuId = null) {
    applyCommittedTheme(themeKey, menuId);
    renderBgLibraryGrid();
    playMemberSound('tap');
    showToast('背板已更換：' + getBgMenuLabel(themeKey, menuId));
    closeProfileSelectModal('bgSelectModal');
  }

  document.getElementById('bgLibraryGrid')?.addEventListener('click', event => {
    const option = event.target.closest('.bg-option[data-bg]');
    if (!option) return;
    selectBgTheme(option.dataset.bg, option.dataset.menuId);
  });

  document.getElementById('bgLibraryGrid')?.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const option = event.target.closest('.bg-option[data-bg]');
    if (!option) return;
    event.preventDefault();
    selectBgTheme(option.dataset.bg, option.dataset.menuId);
  });

  syncBackgroundThemeOptions();
  applyCommittedTheme(DEFAULT_BG_THEME);

  // 稱號連同左方徽章一起顯隱（.ttl-row 是 title 的外層包裝，必須同步 toggle）
  function setTitleVisibility(titleEl, visible) {
    if (!titleEl) return;
    const row = titleEl.closest('.ttl-row');
    if (row) row.style.display = visible ? '' : 'none';
    else titleEl.style.display = visible ? '' : 'none';
  }

  // 稱號選擇
  document.querySelectorAll('.title-option').forEach(el => {
    el.addEventListener('click', () => {
      if (el.classList.contains('locked')) {
        showToast('此稱號尚未解鎖');
        return;
      }
      document.querySelectorAll('.title-option').forEach(x => x.classList.remove('selected'));
      el.classList.add('selected');
      const title = el.dataset.title;
      const statusTitle = document.getElementById('statusTitle');
      const menuUserTitle = document.getElementById('menuUserTitle');
      const currentTitle = document.getElementById('currentTitlePreview');
      const profileInfoTitle = document.getElementById('profileInfoTitle');
      if (title) {
        statusTitle.textContent = title;
        setTitleVisibility(statusTitle, true);
        menuUserTitle.textContent = title;
        setTitleVisibility(menuUserTitle, true);
        currentTitle.textContent = '✦ ' + title;
        profileInfoTitle.textContent = '✦ ' + title;
        setTitleVisibility(profileInfoTitle, true);
        playMemberSound('tap');
        showToast('稱號已更換：' + title);
      } else {
        setTitleVisibility(statusTitle, false);
        setTitleVisibility(menuUserTitle, false);
        currentTitle.textContent = '無稱號';
        profileInfoTitle.textContent = '無稱號';
        setTitleVisibility(profileInfoTitle, true);
        playMemberSound('tap');
        showToast('已取消稱號');
      }
      closeProfileSelectModal('titleSelectModal');
    });
  });

  function switchLbScope(scope) {
    currentLbScope = scope;
    document.querySelectorAll('#leaderboardPage .lb-scope-tabs .tab').forEach(el => {
      el.classList.toggle('active', el.dataset.scope === scope);
    });
    document.querySelectorAll('#leaderboardPage .lb-metric-chip[data-scope-only]').forEach(el => {
      el.style.display = el.dataset.scopeOnly === scope ? '' : 'none';
    });
    // 切到沒有此 metric 的 scope 時，回退到 turnover
    if (!lbData[scope][currentLbMetric]) {
      switchLbTab('turnover');
      return;
    }
    renderLb(currentLbMetric);
  }

  function switchLbTab(tab) {
    currentLbMetric = tab;
    document.querySelectorAll('#leaderboardPage .lb-metric-chip').forEach(el => {
      el.classList.toggle('active', el.dataset.tab === tab);
    });
    renderLb(tab);
  }

  function renderLb(tab) {
    currentLbMetric = tab;
    const data = lbData[currentLbScope][tab];
    const list = document.getElementById('lbList');
    const selfFixed = document.getElementById('lbSelfFixed');
    const metricMeta = lbMetricMeta[tab];
    const scopeLabel = lbScopeMeta[currentLbScope];
    const caption = document.getElementById('lbScopeCaption');
    if (caption) caption.textContent = `${scopeLabel} · ${metricMeta.label}`;
    const LB_TIERS = ['diamond','platinum','gold','silver','bronze','iron','default'];
    const lbOrdinal = r => (r === 1 ? 'st' : r === 2 ? 'nd' : r === 3 ? 'rd' : 'th');
    const fmtLbVal = v => {
      v = String(v);
      if (/^[\d,]+$/.test(v)) {        // 純數字（含千分位逗號）→ ≥1M 換算 M（小數兩位四捨五入）
        const n = Number(v.replace(/,/g, ''));
        if (n >= 1e6) return (Math.round(n / 1e6 * 100) / 100).toFixed(2) + 'M';
      }
      return v;                         // 倍率(x)/等級(Lv.)/<1M 維持原樣
    };
    const renderLbItem = x => {
      const p = profiles[x.name] || {};
      const isTop3 = x.rank <= 3;
      const tier = LB_TIERS[Math.min(x.rank - 1, LB_TIERS.length - 1)];   // 品階背板依名次
      const tn = String((x.rank - 1) % 7 + 1).padStart(2, '0');           // 稱號緞帶 01~07 輪替
      const trend = getLeaderboardListTrendDirection(tab, x.rank) === 'down' ? 'down' : 'up';
      const crownImg = x.rank === 1 ? 'diamond' : 'gold';
      return `
        <div class="lbr ${x.self ? 'lbr--self' : ''}">
          <img class="lbr-bg" src="assets/leaderboard/tier_${tier}.png" alt="" aria-hidden="true">
          ${isTop3 ? `<div class="lbr-medal-wrap"><img class="lbr-medalbase" src="assets/leaderboard/medalbase_${x.rank}.png" alt=""><img class="lbr-medal" src="assets/leaderboard/medal_${x.rank}.png" alt="獎牌"></div>` : ''}
          <div class="lbr-rankzone ${isTop3 ? 'lbr-rankzone--medal' : ''}">
            <div class="lbr-rank"><span class="n">${x.rank}</span><span class="sfx">${lbOrdinal(x.rank)}</span></div>
            <img class="lbr-trend" src="assets/leaderboard/trend_${trend}.png" alt="名次趨勢">
          </div>
          <div class="lbr-av">
            <img src="assets/leaderboard/avatar.png" alt="頭像">
            <div class="lbr-level"><img src="assets/leaderboard/level.png" alt=""><span class="lbr-level-n">${x.lv}</span></div>
          </div>
          <div class="lbr-mid">
            <div class="lbr-title"><img src="assets/leaderboard/title_${tn}.png" alt=""><span class="lbr-title-n">${p.title || ''}</span></div>
            <div class="lbr-name"${x.self ? '' : ` onclick="event.stopPropagation(); openPlayerProfile('${x.name}')" style="cursor:pointer;"`}>${x.name}${x.self ? ' (你)' : ''}</div>
          </div>
          <div class="lbr-score">${fmtLbVal(x.value)}</div>
          ${isTop3 ? `<div class="lbr-crown"><img src="assets/leaderboard/crown_${crownImg}.png" alt="徽章"></div>` : ''}
        </div>
      `;
    };
    document.querySelectorAll('#leaderboardPage .lb-metric-chip').forEach(el => {
      el.classList.toggle('active', el.dataset.tab === tab);
    });
    document.querySelectorAll('#leaderboardPage .lb-scope-tabs .tab').forEach(el => {
      el.classList.toggle('active', el.dataset.scope === currentLbScope);
    });
    list.innerHTML = data.map(renderLbItem).join('');
    const self = data.find(x => x.self);
    selfFixed.innerHTML = self ? renderLbItem(self) : '';
  }

  function switchAchTab(tab) {
    document.querySelectorAll('#achievementPage .ach-tab').forEach(el => {
      el.classList.toggle('active', el.dataset.ach === tab);
    });
    currentAchievementTab = tab;
    renderAchievements();
  }

  let currentPlayerAchTab = 'total';
  function switchPlayerAchTab(tab) {
    document.querySelectorAll('#playerProfilePage .ach-tab').forEach(el => {
      el.classList.toggle('active', el.dataset.ach === tab);
    });
    currentPlayerAchTab = tab;
    renderAchievementsInto(document.getElementById('playerAchievementTab'), tab);
  }

  function renderDailyTasks() {
    const c = document.getElementById('dailyTaskList') || document.getElementById('dailyTab');
    if (!c) return;
    // 切到上個月時，下方「每日任務清單」隱藏（僅本月可做任務）
    const tasksHtml = (streakViewOffset !== 0) ? '' : dailyTasks.map(t => {
      const pct = Math.min(100, (t.progress / t.target) * 100);
      const btn = t.status === 'claim'
        ? `<button class="task-claim" onclick="claimTask(${t.id})">領取 +${t.exp} EXP</button>`
        : t.status === 'done'
          ? `<button class="task-claim done">✓ 已領取</button>`
          : `<button class="task-claim disabled">未完成</button>`;
      return `
        <div class="task-item">
          <div class="task-row">
            <div class="task-title">${t.title}</div>
          </div>
          <div class="task-progress"><div class="task-progress-fill" style="width:${pct}%"></div></div>
          <div class="task-progress-text">
            <span>進度</span>
            <span>${t.progress.toLocaleString()} / ${t.target.toLocaleString()}</span>
          </div>
          ${btn}
        </div>
      `;
    }).join('');
    c.innerHTML = renderLoginStreak() + tasksHtml;
    renderDailyTaskBadge();
    renderDailyTaskMenuProgress();
  }

  // 連簽：以「自然月」為週期（當月 1 日～最後一天）。
  // 週全勤＝該週 7 天皆登入 → 給固定週獎勵（不累積）；月全勤＝整月每天皆登入 → 給月全勤額外獎。
  // 「補打卡」機制為未來規劃（允許補回漏簽日，規則待企劃定義），本版尚未實作。
  const WEEKLY_REWARD = { type: 'exp', value: 30000 };          // 週全勤固定獎（不累積，每週相同）
  const MONTH_PERFECT_REWARD = { type: 'exp', value: 600000 };  // 月全勤額外獎（每月可重得）

  function streakRewardLabel(reward, prefix) {
    switch (reward.type) {
      case 'exp':        return `${prefix} EXP +${reward.value}`;
      case 'title':      return `${prefix} 稱號「${reward.value}」`;
      case 'background': return `${prefix} 背板「${reward.value}」`;
      case 'avatar':     return `${prefix} 頭像 ${reward.value}`;
    }
    return prefix;
  }
  function streakToastText(reward) {
    switch (reward.type) {
      case 'exp':        return `領取成功！+${reward.value} EXP`;
      case 'title':      return `領取成功！獲得稱號「${reward.value}」`;
      case 'background': return `領取成功！獲得背板「${reward.value}」`;
      case 'avatar':     return `領取成功！獲得頭像 ${reward.value}`;
    }
    return '領取成功！';
  }

  const streakClaimedGroups = new Set(); // 已領取 key：`${year}-${month}-w{列}` 或 `${year}-${month}-month`
  let streakViewOffset = 0;              // 0=本月，-1=上個月（最多回看上個月）

  // 取得指定月（offset 相對本月）的月曆資料與達成判定
  function streakMonthInfo(offset) {
    const now = new Date();
    const cy = now.getFullYear(), cm = now.getMonth(), today = now.getDate();
    const base = new Date(cy, cm + offset, 1);
    const year = base.getFullYear(), month = base.getMonth();
    const isCurrent = offset === 0;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDow = new Date(year, month, 1).getDay();
    // 斷簽 demo：本月取一個過去日示範漏簽；過去月示範全到（製造可領紅點）
    const missedDay = isCurrent ? Math.min(Math.max(today - 5, 2), daysInMonth) : 0;
    // 當日完成＝「當天有登入」（與每日任務脫鉤）；開啟頁面即視為今日已登入
    const dayDone = (d) => {
      if (d === missedDay) return false;
      if (isCurrent) {
        if (d === today) return true;   // 今天有登入即算完成
        return d < today;               // 過去日視為已登入
      }
      return true; // 過去月：除漏簽外皆視為已登入
    };
    const rows = [];
    let day = 1 - firstDow;
    while (day <= daysInMonth) {
      const row = [];
      for (let i = 0; i < 7; i++, day++) row.push((day >= 1 && day <= daysInMonth) ? day : null);
      rows.push(row);
    }
    return { year, month, today, isCurrent, daysInMonth, missedDay, dayDone, rows };
  }
  const streakKey = (info, suffix) => `${info.year}-${info.month}-${suffix}`;

  // 指定月是否有「達成但未領」的獎勵（供紅點提示用）
  function streakHasClaimable(offset) {
    const info = streakMonthInfo(offset);
    for (let ri = 0; ri < info.rows.length; ri++) {
      const inMonth = info.rows[ri].filter(d => d !== null);
      if (inMonth.length !== 7) continue;
      const allDone = inMonth.every(info.dayDone);
      const hasMissed = inMonth.some(d => d === info.missedDay);
      if (allDone && !hasMissed && !streakClaimedGroups.has(streakKey(info, 'w' + ri))) return true;
    }
    const monthAllDone = Array.from({ length: info.daysInMonth }, (_, i) => i + 1).every(info.dayDone);
    if (monthAllDone && !streakClaimedGroups.has(streakKey(info, 'month'))) return true;
    return false;
  }

  function renderLoginStreak() {
    const info = streakMonthInfo(streakViewOffset);
    const { rows, today, isCurrent, daysInMonth } = info;

    const weekdayHeader = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
      .map(w => `<div class="login-weekday">${w}</div>`).join('');

    const rowsHtml = rows.map((row, ri) => {
      const cells = row.map(d => {
        if (d === null) return `<div class="login-day empty"></div>`;
        const classes = [
          'login-day',
          d === info.missedDay ? 'missed' : '',
          info.dayDone(d) ? 'done' : '',
          (isCurrent && d === today) ? 'current-progress' : ''
        ].filter(Boolean).join(' ');
        return `<div class="${classes}"><div class="login-day-num">${d}</div></div>`;
      }).join('');

      // 僅「整週 7 天皆當月」的列給週獎勵；月初/月末未滿 7 天的列不給（待補打卡機制補上）
      const inMonth = row.filter(d => d !== null);
      const isFullWeek = inMonth.length === 7;
      let btnHtml;
      if (isFullWeek) {
        const allDone = inMonth.every(info.dayDone);
        const hasMissed = inMonth.some(d => d === info.missedDay);
        const claimed = streakClaimedGroups.has(streakKey(info, 'w' + ri));
        let label = streakRewardLabel(WEEKLY_REWARD, '領取');
        let cls = 'login-streak-claim';
        let dis = false;
        if (claimed) { label = streakRewardLabel(WEEKLY_REWARD, '已領取'); cls += ' claimed'; dis = true; }
        else if (hasMissed) { label = '未達成'; cls += ' disabled'; dis = true; }
        else if (!allDone) { label = '尚未達成'; cls += ' disabled'; dis = true; }
        btnHtml = `<button type="button" class="${cls}"${dis ? ' disabled' : ''} onclick="claimStreakReward('${streakKey(info, 'w' + ri)}')">${label}</button>`;
      } else {
        btnHtml = `<div class="login-streak-partial-note">本週未滿 7 天，無週獎勵</div>`;
      }
      return `<div class="login-streak-group"><div class="login-streak-row">${cells}</div>${btnHtml}</div>`;
    }).join('');

    // 月全勤：當月每一天皆完成
    const allMonthDone = Array.from({ length: daysInMonth }, (_, i) => i + 1).every(info.dayDone);
    const monthClaimed = streakClaimedGroups.has(streakKey(info, 'month'));
    let mLabel = streakRewardLabel(MONTH_PERFECT_REWARD, '領取');
    let mCls = 'login-streak-claim';
    let mDis = false;
    if (monthClaimed) { mLabel = streakRewardLabel(MONTH_PERFECT_REWARD, '已領取'); mCls += ' claimed'; mDis = true; }
    else if (!allMonthDone) { mLabel = '尚未達成'; mCls += ' disabled'; mDis = true; }
    const perfectGroup = `
      <div class="login-streak-group login-streak-perfect">
        <div class="login-streak-perfect-label">月全勤額外獎勵 · 當月每天登入</div>
        <button type="button" class="${mCls}"${mDis ? ' disabled' : ''} onclick="claimStreakReward('${streakKey(info, 'month')}')">${mLabel}</button>
      </div>
    `;

    // 頁籤：上個月 / 本月（最多回看上個月）；上個月有未領獎勵 → 紅點提示
    const lastMonthDot = streakHasClaimable(-1) ? '<span class="streak-tab-dot"></span>' : '';
    const tabs = `
      <div class="streak-month-tabs">
        <div class="streak-month-tab ${streakViewOffset === -1 ? 'active' : ''}" onclick="switchStreakMonth(-1)">上個月${lastMonthDot}</div>
        <div class="streak-month-tab ${streakViewOffset === 0 ? 'active' : ''}" onclick="switchStreakMonth(0)">本月</div>
      </div>
    `;

    const monthLabel = `${info.year} 年 ${info.month + 1} 月`;
    return `
      <div class="login-streak-card">
        ${tabs}
        <div class="login-streak-head">
          <div class="login-streak-title">${monthLabel}</div>
        </div>
        <div class="login-weekday-row">${weekdayHeader}</div>
        <div class="login-streak-groups">${rowsHtml}${perfectGroup}</div>
      </div>
    `;
  }
  function switchStreakMonth(offset) {
    streakViewOffset = (offset === -1) ? -1 : 0; // 最多回看上個月
    renderDailyTasks();
  }
  function claimStreakReward(groupKey) {
    if (streakClaimedGroups.has(groupKey)) return;
    const reward = groupKey.endsWith('-month') ? MONTH_PERFECT_REWARD : WEEKLY_REWARD;
    if (!reward) return;
    streakClaimedGroups.add(groupKey);
    showToast(streakToastText(reward));
    renderDailyTasks();
  }

  function renderDailyTaskBadge() {
    const badge = document.getElementById('dailyTaskBadge');
    if (!badge) return;
    const hasClaimable = dailyTasks.some(t => t.status === 'claim');
    badge.classList.toggle('hide', !hasClaimable);
  }

  function renderDailyTaskMenuProgress() {
    const wrap = document.querySelector('.compact-progress');
    const fill = document.getElementById('dailyTaskMenuProgressFill');
    const status = document.getElementById('dailyTaskMenuStatus');
    if (!wrap || !fill || !status) return;
    const total = dailyTasks.length;
    const completed = dailyTasks.filter(t => t.progress >= t.target).length;
    const claimed = dailyTasks.filter(t => t.status === 'done').length;
    const pct = total ? (completed / total) * 100 : 0;
    fill.style.width = `${pct}%`;
    if (claimed >= total && total > 0) {
      status.textContent = '[已完成]';
      status.classList.add('done');
      wrap.classList.add('hide-bar');
    } else {
      status.textContent = `${completed} / ${total}`;
      status.classList.remove('done');
      wrap.classList.remove('hide-bar');
    }
  }

  function claimTask(id) {
    const t = dailyTasks.find(x => x.id === id);
    if (t && t.status === 'claim') {
      t.status = 'done';
      renderDailyTasks();
      renderDailyTaskBadge();
      playMemberSound('success');
      showToast(`領取成功！+${t.exp} EXP`);
    }
  }

  function renderAchievements() {
    renderAchievementsInto(document.getElementById('achievementTab'), currentAchievementTab);
  }
  function renderAchievementsInto(c, tab) {
    if (!c) return;
    const items = (achievementGroups[tab] || []).slice().sort((a, b) => {
      return TIER_ORDER.indexOf(b.tier) - TIER_ORDER.indexOf(a.tier);
    });
    c.innerHTML = `
      <div class="achievement-list">
        ${items.map(item => {
          const history = buildAchievementHistory(item);
          const hasHistory = history.length > 0;
          return `
          <div class="achievement-card${hasHistory ? ' expanded' : ''}">
            <div class="achievement-card-header">
              <div class="achievement-tier"><img src="${getAchievementTierBadge(item.tier)}" alt="${item.tier}"></div>
              <div class="achievement-name">${item.title}</div>
              <div class="achievement-status">${item.status}</div>
            </div>
            ${item.tier === '鑽石' ? `
              <div class="achievement-progress-row">
                <div class="achievement-completed">✦ 已達成最高成就</div>
              </div>
            ` : `
              <div class="achievement-progress-row">
                <div class="achievement-progress">
                  <div class="achievement-progress-fill" style="width:${item.progress}%"></div>
                </div>
                <div class="achievement-next">${item.next}</div>
              </div>
            `}
            <div class="achievement-reward-row">
              <div class="achievement-reward">${
                item.tier === '銅' ? '' :
                item.rewardBg ? `<span class="achievement-reward-link" onclick="openBgPreview('${item.rewardBg}')">${item.reward}</span>` :
                item.reward
              }${item.rewardAvatar ? `<span class="achievement-reward-avatar">${item.rewardAvatar}</span>` : ''}${item.rewardTitle ? `<span class="achievement-reward-title">${item.rewardTitle}</span>` : ''}</div>
              ${hasHistory ? `<button type="button" class="achievement-expand-btn" onclick="toggleAchievementCard(this)" aria-label="展開歷程">▾</button>` : ''}
            </div>
            ${hasHistory ? `
              <div class="achievement-history">
                ${history.map(h => `
                  <div class="achievement-history-row">
                    <div class="achievement-history-tier"><img src="${getAchievementTierBadge(h.tier)}" alt="${h.tier}"></div>
                    <div class="achievement-history-value">${h.value}</div>
                    <div class="achievement-history-date">${h.date}</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        `;}).join('')}
      </div>
    `;
  }

  const TIER_ORDER = ['銅', '鐵', '銀', '白金', '黃金', '鑽石'];
  const TIER_MOCK_DATES = ['2025/01/03', '2025/02/14', '2025/03/05', '2025/03/28', '2025/04/12', '2025/04/29'];
  function buildAchievementHistory(item) {
    if (Array.isArray(item.history) && item.history.length) return item.history;
    const idx = TIER_ORDER.indexOf(item.tier);
    if (idx < 1) return []; // 銅階沒有更早的歷程，省略
    // 進行中的 tier 還沒達成，不列入歷程；鑽石為最高階且已達成，含自身
    const endIdx = item.tier === '鑽石' ? idx + 1 : idx;
    const thresholds = Array.isArray(item.thresholds) ? item.thresholds : [];
    return TIER_ORDER.slice(0, endIdx).map((t, i) => ({
      tier: t,
      value: thresholds[i] || '—',
      date: TIER_MOCK_DATES[i]
    }));
  }

  function openBgPreview(bgKey) {
    const panel = document.getElementById('bgPreviewPanel');
    const name = document.getElementById('bgPreviewName');
    applyBackgroundTheme(panel, bgKey);
    name.textContent = getBackgroundLabel(bgKey);
    document.getElementById('bgPreviewModal').classList.add('show');
  }
  function closeBgPreview() {
    document.getElementById('bgPreviewModal').classList.remove('show');
  }

  function toggleAchievementCard(btn) {
    const card = btn.closest('.achievement-card');
    if (!card) return;
    card.classList.toggle('expanded');
  }

  function getAchievementTierBadge(tier) {
    const tierMap = {
      '銅': { fill: '#b77442', stroke: '#e9b07d', text: '#fff3dd' },
      '鐵': { fill: '#5e6774', stroke: '#a8b1bc', text: '#f1f5f9' },
      '銀': { fill: '#95a6b8', stroke: '#edf4fb', text: '#ffffff' },
      '白金': { fill: '#7cd7d3', stroke: '#d8fffd', text: '#083b44' },
      '黃金': { fill: '#d9a317', stroke: '#ffe69a', text: '#fff8e6' },
      '鑽石': { fill: '#7b73ff', stroke: '#d8d4ff', text: '#f7f5ff' }
    };
    const meta = tierMap[tier] || tierMap['銅'];
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="${tier}">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${meta.stroke}"/>
            <stop offset="100%" stop-color="${meta.fill}"/>
          </linearGradient>
        </defs>
        <path d="M32 4 54 14v18c0 14-8.5 22.8-22 28C18.5 54.8 10 46 10 32V14L32 4Z" fill="url(#g)" stroke="${meta.stroke}" stroke-width="2.5"/>
        <path d="M32 12 47 19v12c0 9.8-5.8 16.4-15 20.8C22.8 47.4 17 40.8 17 31V19l15-7Z" fill="rgba(255,255,255,0.12)"/>
        <text x="32" y="37" text-anchor="middle" font-size="18" font-weight="900" fill="${meta.text}" font-family="Arial, sans-serif">${tier}</text>
      </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function fmtNum(n) {
    return (n ?? 0).toLocaleString();
  }

  function renderTrendChart(values = [], compact = false) {
    const data = values.length === 7 ? values : [30, 42, 38, 55, 49, 64, 58];
    const width = compact ? 112 : 520;
    const height = compact ? 76 : 86;
    const padX = compact ? 10 : 18;
    const padY = compact ? 12 : 14;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = Math.max(1, max - min);
    const points = data.map((v, idx) => {
      const x = padX + idx * ((width - padX * 2) / 6);
      const y = height - padY - ((v - min) / range) * (height - padY * 2);
      return [x, y];
    });
    const pointString = points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
    const area = `${padX},${height - padY} ${pointString} ${width - padX},${height - padY}`;
    const circles = points.map(([x, y]) => `<circle class="trend-point" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${compact ? 2.6 : 3.8}"></circle>`).join('');
    return `
      <svg class="trend-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="七日趨勢圖" preserveAspectRatio="none">
        <line class="trend-grid" x1="${padX}" y1="${padY}" x2="${width - padX}" y2="${padY}"></line>
        <line class="trend-grid" x1="${padX}" y1="${height / 2}" x2="${width - padX}" y2="${height / 2}"></line>
        <line class="trend-grid" x1="${padX}" y1="${height - padY}" x2="${width - padX}" y2="${height - padY}"></line>
        <polygon class="trend-area" points="${area}"></polygon>
        <polyline class="trend-line" points="${pointString}"></polyline>
        ${circles}
      </svg>
    `;
  }

  function syncCurrentMachineCard(m) {
    document.getElementById('curMachineNum').textContent = '#' + m.num;
    document.getElementById('curMachineDate').textContent = machineDateRange;
    document.getElementById('curMachineTO').textContent = fmtNum(m.turnover);
    document.getElementById('curMachineWin').textContent = fmtNum(m.win);
    document.getElementById('curMachineTrend').innerHTML = renderTrendChart(m.trend);
  }

  // 把目前機台資料寫入頂部大卡片
  function setCurrentMachine(num) {
    const m = machines.find(x => x.num === num);
    if (!m) return;
    if (m.lv > userLevel) {
      showToast(`需 Lv.${m.lv} 解鎖`);
      return;
    }
    currentMachineNum = num;
    syncCurrentMachineCard(m);
    renderMachines();
    playMemberSound('tap');
    showToast(`已切換至機台 #${m.num}`);
  }

  function renderMachines() {
    const c = document.getElementById('machineList');
    c.innerHTML = machines.map(m => {
      const locked = m.lv > userLevel;
      const isCurrent = m.num === currentMachineNum;
      const cls = ['machine-list-card'];
      if (locked) cls.push('locked');
      if (isCurrent) cls.push('current');
      const click = locked
        ? `showToast('需 Lv.${m.lv} 解鎖')`
        : `setCurrentMachine(${m.num})`;
      const tag = locked
        ? `<span class="ml-locked-tag">🔒 Lv.${m.lv} 解鎖</span>`
        : isCurrent
          ? `<span class="ml-current-tag">目前選用</span>`
          : '';
      const stats = locked
        ? `<div class="ml-stats"><div><span class="lbl">資料</span><span class="val">— 鎖定 —</span></div></div>`
        : `<div class="ml-stats">
             <div><span class="lbl">Turnover</span><span class="val">${fmtNum(m.turnover)}</span></div>
             <div><span class="lbl">payout</span><span class="val">${fmtNum(m.win)}</span></div>
           </div>`;
      return `
        <div class="${cls.join(' ')}" onclick="${click}">
          <div class="machine-list-inner">
            <div class="machine-mini-trend">${renderTrendChart(m.trend, true)}</div>
            <div class="machine-list-main">
              <div class="ml-row1">
                <span class="ml-num">機台 #${m.num}</span>
                ${tag}
              </div>
              <div class="ml-date">${machineDateRange}</div>
              ${stats}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 跑馬燈：開合動畫 + 單筆訊息逐筆播放，播完即收合
  // 流程：marquee 由中央展開 → 內容從右滑到左 → 收合 → 等待 → 下一筆
  let marqueeIdx = 0;
  let marqueePlaying = false;
  let marqueeTimers = [];
  const MQ_OPEN_MS = 450;     // 與 CSS transition 同步
  const MQ_SCROLL_MS = 6000;  // 與 @keyframes scrollOnce 同步
  const MQ_GAP_MS = 1200;     // 兩則訊息之間的休息時間

  function setMarqueeTimer(fn, delay) {
    const timer = setTimeout(() => {
      marqueeTimers = marqueeTimers.filter(x => x !== timer);
      fn();
    }, delay);
    marqueeTimers.push(timer);
    return timer;
  }

  function stopMarquee() {
    marqueeTimers.forEach(clearTimeout);
    marqueeTimers = [];
    marqueePlaying = false;
    const bar = document.querySelector('.marquee');
    const c = document.getElementById('marqueeContent');
    if (bar) bar.classList.remove('show');
    if (c) {
      c.classList.remove('scrolling');
      c.innerHTML = '';
    }
  }

  function debugPinMarquee(playerName = 'Joan5428', occurrence = 1) {
    const matches = marqueeItems
      .map((item, index) => ({ item, index }))
      .filter(entry => entry.item.player === playerName);
    const target = matches[Math.max(0, occurrence - 1)];
    if (!target) return null;
    stopMarquee();
    marqueeIdx = target.index;
    playMarquee(true);
    return { player: playerName, occurrence, index: target.index, item: target.item };
  }

  function debugStopMarquee() {
    stopMarquee();
    return true;
  }

  window.debugPinMarquee = debugPinMarquee;
  window.debugStopMarquee = debugStopMarquee;

  function buildMqChip(it) {
    const p = profiles[it.player] || {};
    if ((userOptions.marqueeEffect || 1) === 3) {
      return `
        <div class="mq-row mq-effect3-pop">
          <div class="mq-effect3-congrats">Congratulations</div>
          <div class="mq-effect3-card" style="${getBackgroundInlineVars(p.bgKey)}" onclick="event.stopPropagation(); openPlayerProfile('${it.player}')">
            <div class="mq-effect3-top">
              <span class="mq-avatar">${p.avatar || '👤'}</span>
              <div class="mq-effect3-meta">
                <div class="mq-effect3-name-row">
                  <span class="mq-lv">Lv.${p.lv ?? '?'}</span>
                  <span class="mq-effect3-name">${it.player}</span>
                </div>
                ${p.title ? `<div class="ttl-row"><span class="ttl-badge" role="img" aria-label="徽章"></span><div class="mq-effect3-title">${p.title}</div></div>` : ''}
                ${renderAchStars(p.achStars)}
              </div>
            </div>
          </div>
          <div class="mq-effect3-bottom">Turnover 上榜第一名</div>
        </div>
      `;
    }
    return `
      <div class="mq-row">
        <div class="mq-user idcs-host" style="${getBackgroundInlineVars(p.bgKey)}" onclick="event.stopPropagation(); openPlayerProfile('${it.player}')">
          <!-- H: 小板 ID 卡 -->
          <div class="idcs">
            <img class="idcs-frame" src="assets/idcard/sml_frame.png" alt="" aria-hidden="true">
            <div class="idcs-av"><img src="assets/idcard/sml_avatar.png" alt="頭像"></div>
            <div class="idcs-level"><img src="assets/idcard/sml_level.png" alt=""><span class="idcs-level-n">${p.lv ?? '?'}</span></div>
            <div class="idcs-name">${it.player}</div>
            <div class="idcs-star"><img src="assets/idcard/sml_star.png" alt="成就星"><span class="idcs-star-n">${p.achStars ?? 0}</span></div>
          </div>
        </div>
        <div class="mq-message">
          <span class="mq-icon">${it.icon || '🎉'}</span>
          <span class="mq-msg">${it.msg}</span>
        </div>
      </div>
    `;
  }

  function playMarquee(forcePreview = false) {
    if ((!userOptions.showMarquee && !forcePreview) || marqueeItems.length === 0) {
      stopMarquee();
      return;
    }
    if (marqueePlaying) return;
    marqueePlaying = true;

    const bar = document.querySelector('.marquee');
    const c = document.getElementById('marqueeContent');
    if (!bar || !c) { marqueePlaying = false; return; }

    const it = marqueeItems[marqueeIdx];
    marqueeIdx = (marqueeIdx + 1) % marqueeItems.length;
    const isEffect3 = (userOptions.marqueeEffect || 1) === 3;

    // 重置內容與動畫
    c.classList.remove('scrolling');
    c.classList.remove('effect3-center');
    c.innerHTML = buildMqChip(it);
    // 強制 reflow 讓動畫可以重新觸發
    void c.offsetWidth;

    // 1) 開合動畫：橫向展開 marquee 容器
    bar.classList.add('show');
    playMemberSound('marquee');

    // 2) 等容器展開後，再觸發內容滑動
    setMarqueeTimer(() => {
      if (isEffect3) {
        c.classList.add('effect3-center');
      } else {
        c.classList.add('scrolling');
      }
    }, MQ_OPEN_MS);

    // 3) 內容滑完後收合 marquee
    setMarqueeTimer(() => {
      bar.classList.remove('show');
      c.classList.remove('scrolling');
      c.classList.remove('effect3-center');
    }, MQ_OPEN_MS + (isEffect3 ? 1800 : MQ_SCROLL_MS));

    // 4) 收合動畫結束後，間隔一下播下一則
    setMarqueeTimer(() => {
      marqueePlaying = false;
      if (!forcePreview) playMarquee();
    }, MQ_OPEN_MS + (isEffect3 ? 1800 : MQ_SCROLL_MS) + MQ_OPEN_MS + MQ_GAP_MS);
  }

  document.getElementById('expFill').style.width = '65%';
  function setupStatusBarDrag() {
    const bar = document.getElementById('statusBar');
    if (!bar) return;
    const SCALE = 1 / 0.5556;
    const CANVAS_H = 1280;
    const KEEP_VISIBLE = 60;
    let startY = 0, top0 = 0, pid = null, moved = false;
    bar.addEventListener('pointerdown', e => {
      // 折疊鈕與右側活躍玩家區不啟動 status-bar 拖曳
      if (e.target.closest('.collapse-btn') || e.target.closest('#activePlayerPanel')) return;
      pid = e.pointerId;
      bar.setPointerCapture(pid);
      startY = e.clientY;
      moved = false;
      const rect = bar.getBoundingClientRect();
      const parentRect = bar.parentElement.getBoundingClientRect();
      top0 = (rect.top - parentRect.top) * SCALE;
    });
    bar.addEventListener('pointermove', e => {
      if (pid === null) return;
      const dy = (e.clientY - startY) * SCALE;
      if (!moved && Math.abs(dy) > 5) moved = true;
      let t = top0 + dy;
      t = Math.max(0, Math.min(CANVAS_H - KEEP_VISIBLE, t));
      bar.style.top = t + 'px';
    });
    const end = () => {
      if (pid === null) return;
      try { bar.releasePointerCapture(pid); } catch(_) {}
      pid = null;
    };
    bar.addEventListener('pointerup', end);
    bar.addEventListener('pointercancel', end);
    bar.addEventListener('click', e => {
      if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; }
    }, true);
  }

  function setupMarqueeDrag() {
    const el = document.querySelector('.marquee');
    if (!el) return;
    const SCALE = 1 / 0.5556;
    const CANVAS_H = 1280;
    const KEEP_VISIBLE = 40;
    let startY = 0, top0 = 0, pid = null;
    el.addEventListener('pointerdown', e => {
      pid = e.pointerId;
      el.setPointerCapture(pid);
      startY = e.clientY;
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement.getBoundingClientRect();
      top0 = (rect.top - parentRect.top) * SCALE;
      el.classList.add('dragging');
    });
    el.addEventListener('pointermove', e => {
      if (pid === null) return;
      const dy = (e.clientY - startY) * SCALE;
      let t = top0 + dy;
      t = Math.max(0, Math.min(CANVAS_H - KEEP_VISIBLE, t));
      el.style.top = t + 'px';
    });
    const end = () => {
      if (pid === null) return;
      try { el.releasePointerCapture(pid); } catch(_) {}
      pid = null;
      el.classList.remove('dragging');
    };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
  }

  function setupActivePlayerDrag() {
    const panel = document.getElementById('activePlayerPanel');
    const body = panel && panel.querySelector('.active-player-body');
    if (!panel || !body) return;
    const SCALE = 1 / 0.5556; // canvas 720x1280 的縮放反比 ≈ 1.8
    const CANVAS_W = 720, CANVAS_H = 1280;
    const KEEP_VISIBLE = 60; // 至少露出 60px 不能完全拖出畫布

    let startX = 0, startY = 0, panelLeft0 = 0, panelTop0 = 0;
    let pid = null, moved = false;

    body.addEventListener('pointerdown', e => {
      // 玩家名稱點擊不觸發拖曳
      if (e.target.closest('.lb-menu-player')) return;
      pid = e.pointerId;
      body.setPointerCapture(pid);
      moved = false;
      startX = e.clientX;
      startY = e.clientY;
      const rect = panel.getBoundingClientRect();
      const parentRect = panel.parentElement.getBoundingClientRect();
      panelLeft0 = (rect.left - parentRect.left) * SCALE;
      panelTop0  = (rect.top  - parentRect.top ) * SCALE;
      // 從 right 定位切換為 left/top 定位
      panel.style.right = 'auto';
      panel.style.left = panelLeft0 + 'px';
      panel.style.top  = panelTop0 + 'px';
      panel.classList.add('dragging');
      body.classList.add('dragging');
    });

    body.addEventListener('pointermove', e => {
      if (pid === null) return;
      const dx = (e.clientX - startX) * SCALE;
      const dy = (e.clientY - startY) * SCALE;
      if (!moved && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) moved = true;
      const w = panel.offsetWidth, h = panel.offsetHeight;
      let left = panelLeft0 + dx;
      let top  = panelTop0  + dy;
      left = Math.max(KEEP_VISIBLE - w, Math.min(CANVAS_W - KEEP_VISIBLE, left));
      top  = Math.max(0, Math.min(CANVAS_H - KEEP_VISIBLE, top));
      panel.style.left = left + 'px';
      panel.style.top  = top  + 'px';
    });

    const end = () => {
      if (pid === null) return;
      try { body.releasePointerCapture(pid); } catch(_) {}
      pid = null;
      panel.classList.remove('dragging');
      body.classList.remove('dragging');
    };
    body.addEventListener('pointerup', end);
    body.addEventListener('pointercancel', end);

    // 拖過閾值時抑制 click，避免誤觸玩家名連結
    body.addEventListener('click', e => {
      if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; }
    }, true);
  }

  function enableDragScroll(el) {
    if (!el) return;
    let isDown = false, startX = 0, scrollLeft = 0, dragged = false;
    el.style.cursor = 'grab';
    el.addEventListener('mousedown', e => {
      isDown = true; dragged = false;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.style.cursor = 'grabbing';
    });
    const stop = () => { isDown = false; el.style.cursor = 'grab'; };
    el.addEventListener('mouseleave', stop);
    el.addEventListener('mouseup', stop);
    el.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const walk = (e.pageX - el.offsetLeft) - startX;
      if (Math.abs(walk) > 5) dragged = true;
      el.scrollLeft = scrollLeft - walk;
    });
    el.addEventListener('click', e => {
      if (dragged) { e.stopPropagation(); e.preventDefault(); }
    }, true);
  }

  // 狀態列名稱 / 稱號跑馬燈：以「容器寬 × 比例」為基準判斷溢出
  // 用 Web Animations API 跑動畫（純 px 值），避免 CSS calc(var()) 在 compositor 上不 repaint
  const _marqueeAnimations = new WeakMap();
  // 各 target 可指定 prefix（::before 的內容移到 inner）與 ratio（觸發/距離基準）
  // ratio < 1：壓縮可視寬以放大滑動距離（適合固定寬 flex slot 如 name 180px）
  // ratio = 1：只在真的溢出時觸發（適合自動寬的元素如 title）
  const STATUS_MARQUEE_TARGETS = [
    { selector: '.status-name .name-text', prefix: '',   ratio: 0.6 },
    { selector: '.status-title',           prefix: '✦ ', ratio: 1.0 }
  ];
  function applyStatusMarquee(el, prefix, ratio) {
    // 取消舊動畫、還原為純文字以正確量測
    const prevAnim = _marqueeAnimations.get(el);
    if (prevAnim) { prevAnim.cancel(); _marqueeAnimations.delete(el); }
    // 原始文字 = 已有 marquee-inner 的話從 inner.textContent 拆出 prefix；否則用 el.textContent
    const inner0 = el.querySelector('.marquee-inner');
    let text = inner0 ? inner0.textContent : el.textContent;
    if (prefix && text.startsWith(prefix)) text = text.slice(prefix.length);
    el.classList.remove('is-marquee');
    el.textContent = text;
    void el.offsetWidth;
    const visibleW = el.clientWidth * ratio;
    if (el.scrollWidth > visibleW + 1) {
      el.innerHTML = '';
      const inner = document.createElement('span');
      inner.className = 'marquee-inner';
      inner.textContent = prefix + text;
      el.appendChild(inner);
      el.classList.add('is-marquee');
      const distance = Math.max(0, inner.offsetWidth - visibleW);
      const anim = inner.animate(
        [
          { transform: 'translateX(0px)',            offset: 0 },
          { transform: 'translateX(0px)',            offset: 1/3 },
          { transform: `translateX(${-distance}px)`, offset: 2/3 },
          { transform: `translateX(${-distance}px)`, offset: 1 }
        ],
        { duration: 9000, iterations: Infinity, easing: 'linear' }
      );
      _marqueeAnimations.set(el, anim);
    }
  }
  function refreshStatusMarquees() {
    STATUS_MARQUEE_TARGETS.forEach(({ selector, prefix, ratio }) => {
      document.querySelectorAll(selector).forEach(el => applyStatusMarquee(el, prefix, ratio));
    });
  }
  // 維持舊名（rename 函式還在呼叫）
  const refreshStatusNameMarquee = refreshStatusMarquees;
  window.addEventListener('resize', refreshStatusMarquees);
  setTimeout(refreshStatusMarquees, 0);

  // 啟動跑馬燈循環播放（開合動畫 + 逐筆訊息）
  startPromotionCarousel();
  startLeaderboardMenuCarousel();
  startActivePlayerFeed();
  syncSelfAchStars();
  renderOptions();
  if (userOptions.showMarquee) setTimeout(playMarquee, 600);
  renderMails();
  renderLb('turnover');
  enableDragScroll(document.getElementById('lbMetricScroll'));
  // setupActivePlayerDrag();  // 活躍玩家面板已整合進 status-bar，停用獨立拖曳
  setupMarqueeDrag();
  setupStatusBarDrag();
  renderDailyTasks();
  renderAchievements();
  renderMachines();
  // 用資料同步初始的目前機台卡片
  (() => {
    const m = machines.find(x => x.num === currentMachineNum);
    if (m) {
      syncCurrentMachineCard(m);
    }
  })();

/* ===== ID 卡 hover 材質效果（移植自 slot_card_portable）===== */
(function () {
  function initIdcHover() {
    var card = document.querySelector('.idc');
    if (!card || card.__hoverInit) return;
    card.__hoverInit = true;
    var sweep = card.querySelector('.idc-sweep');
    function queue(d) {
      window.setTimeout(function () {
        if (!sweep) return;
        sweep.classList.remove('is-active');
        void sweep.offsetWidth;       // 重啟動畫
        sweep.classList.add('is-active');
      }, d);
    }
    if (sweep) {
      queue(700);
      sweep.addEventListener('animationend', function () { queue(3200 + Math.random() * 3200); });
    }
    card.addEventListener('pointermove', function (e) {
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width;
      var py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--tilt-y', ((px - 0.5) * 10.6).toFixed(2) + 'deg');
      card.style.setProperty('--tilt-x', ((0.5 - py) * 8.1).toFixed(2) + 'deg');
      card.style.setProperty('--gloss-x', (px * 100).toFixed(1) + '%');
      card.style.setProperty('--gloss-y', (py * 100).toFixed(1) + '%');
      card.style.setProperty('--gloss-opacity', '0.42');
      card.style.setProperty('--prism-x', (px * 100).toFixed(1) + '%');
      card.style.setProperty('--prism-y', (py * 100).toFixed(1) + '%');
      card.style.setProperty('--prism-angle', (-24 + px * 48).toFixed(2) + 'deg');
      card.style.setProperty('--prism-opacity', '0.94');
    });
    card.addEventListener('pointerleave', function () {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      card.style.setProperty('--gloss-opacity', '0');
      card.style.setProperty('--prism-opacity', '0');
      card.style.setProperty('--prism-angle', '-14deg');
    });
  }
  if (document.readyState !== 'loading') initIdcHover();
  else document.addEventListener('DOMContentLoaded', initIdcHover);
})();

/* ===== 中板 ID 卡 hover（輕微傾斜 + 珠光；同步自 exsample.html）===== */
(function () {
  function initMid(card) {
    if (card.__hoverInit) return;
    card.__hoverInit = true;
    card.addEventListener('pointermove', function (e) {
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width;
      var py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--tilt-y', ((px - 0.5) * 7.6).toFixed(2) + 'deg');
      card.style.setProperty('--tilt-x', ((0.5 - py) * 5.8).toFixed(2) + 'deg');
      card.style.setProperty('--gloss-x', (px * 100).toFixed(1) + '%');
      card.style.setProperty('--gloss-y', (py * 100).toFixed(1) + '%');
      card.style.setProperty('--gloss-opacity', '0.34');
    });
    card.addEventListener('pointerleave', function () {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      card.style.setProperty('--gloss-opacity', '0');
    });
  }
  function initAll() { document.querySelectorAll('.idcm').forEach(initMid); }
  if (document.readyState !== 'loading') initAll();
  else document.addEventListener('DOMContentLoaded', initAll);
})();

/* ===== 圖片防護：禁右鍵選單 / 禁拖曳（補 CSS 不足）===== */
(function () {
  function onlyImg(e) { return e.target && e.target.tagName === 'IMG'; }
  document.addEventListener('contextmenu', function (e) { if (onlyImg(e)) e.preventDefault(); }, { capture: true });
  document.addEventListener('dragstart',  function (e) { if (onlyImg(e)) e.preventDefault(); }, { capture: true });
})();
