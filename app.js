/* Core logic (UI + rules) */
(()=>{
  // Visual resources (star SVG and badge generators)
  const starOn = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="g1" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#fff8d6"/><stop offset="45%" stop-color="#ffd166"/><stop offset="100%" stop-color="#caa24b"/></radialGradient><linearGradient id="gloss" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff" stop-opacity=".9"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></linearGradient></defs><g><path d="M50 6l13.6 27.4 30.2 4.4-21.9 21.3 5.2 30.1L50 75.8 22.9 89.2l5.2-30.1L6.3 37.8l30.2-4.4z" fill="url(#g1)" stroke="#f4d06f" stroke-width="2"/><ellipse cx="50" cy="28" rx="24" ry="10" fill="url(#gloss)"/></g></svg>`)
  const starOff = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="g2" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#9fb3ff"/><stop offset="100%" stop-color="#475a9e"/></radialGradient></defs><path d="M50 6l13.6 27.4 30.2 4.4-21.9 21.3 5.2 30.1L50 75.8 22.9 89.2l5.2-30.1L6.3 37.8l30.2-4.4z" fill="url(#g2)" stroke="#d0dbff" stroke-opacity=".7" stroke-width="2"/></svg>`)
  const ssBadge = (label)=> 'data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9ee6ff"/><stop offset="1" stop-color="#c6a7ff"/></linearGradient></defs><rect width="100" height="100" rx="18" fill="url(#bg)"/><text x="50" y="56" text-anchor="middle" font-size="18" font-weight="900" fill="#222">SS ${label}</text></svg>`)
  const altBadge = (label)=> 'data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#b9ffe5"/><stop offset="1" stop-color="#88a6ff"/></linearGradient></defs><rect width="100" height="100" rx="18" fill="url(#bg2)"/><text x="50" y="56" text-anchor="middle" font-size="18" font-weight="900" fill="#222">ALT ${label}</text></svg>`)
  const techBadge = (label)=> 'data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d7e8ff"/><stop offset="1" stop-color="#e9d9ff"/></linearGradient></defs><rect width="100" height="100" rx="18" fill="url(#bg3)"/><text x="50" y="56" text-anchor="middle" font-size="18" font-weight="900" fill="#222">${label}</text></svg>`)

  // Replace paths below with your custom images if desired
  const SS_IMAGES = {
    WEAPON: ssBadge('WEAPON'),
    ARMOR: ssBadge('ARMOR'),
    NECKLACE: ssBadge('NECKLACE'),
    BELT: ssBadge('BELT'),
    BRACER: ssBadge('BRACER'),
    BOOTS: ssBadge('BOOTS')
  }
  const ALT_IMAGES = {
    WEAPON: altBadge('WEAPON'),
    ARMOR: altBadge('ARMOR'),
    NECKLACE: altBadge('NECKLACE'),
    BELT: altBadge('BELT'),
    BRACER: altBadge('BRACER'),
    BOOTS: altBadge('BOOTS')
  }
  const TECH_IMAGES = {
    'TB Drone': techBadge('TB Drone'),
    'TB Soccer': techBadge('TB Soccer'),
    'TB Drill': techBadge('TB Drill'),
    Molotov: techBadge('Molotov')
  }

  const ssImg = (label)=> SS_IMAGES[label] || ''
  const altImg = (label)=> ALT_IMAGES[label] || ''
  const techImg = (label)=> TECH_IMAGES[label] || ''

  // structuredClone fallback for browsers that do not support it
  const clone = (obj) => {
    if (typeof structuredClone === 'function') return structuredClone(obj)
    try { return JSON.parse(JSON.stringify(obj)) }
    catch { return obj }
  }
  const ssImg = (label)=> 'data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9ee6ff"/><stop offset="1" stop-color="#c6a7ff"/></linearGradient></defs><rect width="100" height="100" rx="18" fill="url(#bg)"/><text x="50" y="56" text-anchor="middle" font-size="18" font-weight="900" fill="#222">SS ${label}</text></svg>`)
  const altImg = (label)=> 'data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#b9ffe5"/><stop offset="1" stop-color="#88a6ff"/></linearGradient></defs><rect width="100" height="100" rx="18" fill="url(#bg2)"/><text x="50" y="56" text-anchor="middle" font-size="18" font-weight="900" fill="#222">ALT ${label}</text></svg>`)
  const techImg = (label)=> 'data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d7e8ff"/><stop offset="1" stop-color="#e9d9ff"/></linearGradient></defs><rect width="100" height="100" rx="18" fill="url(#bg3)"/><text x="50" y="56" text-anchor="middle" font-size="18" font-weight="900" fill="#222">${label}</text></svg>`)

  // Constants
  const LABELS=["WEAPON","ARMOR","NECKLACE","BELT","BRACER","BOOTS"];
  const STATE={SS:"SS",NONE:"NONE",ALT:"ALT"};

  if (typeof EFFECT_TABLE==='undefined' || typeof C_MULTIPLE_BONUS==='undefined') {
    console.error("effects.js가 먼저 로드되어야 합니다.");
  }

  const COST={E:[1,2,3,5,8],V:[1,2,3,5,8],C:[1,2,3,3,4,4,6,6,8,8]};
  const defaultData = LABELS.map((label,i)=>({id:i,label,state:STATE.SS,E:0,V:0,C:0,ALT:0}));
  function normalizeData(raw){
    const base = clone(defaultData);
    if(!Array.isArray(raw) || raw.length!==LABELS.length) return base;
    return raw.map((d,i)=>({ id:i,label:LABELS[i], state:[STATE.SS,STATE.NONE,STATE.ALT].includes(d?.state)? d.state: STATE.SS, E:+(d?.E||0), V:+(d?.V||0), C:+(d?.C||0), ALT:+(d?.ALT||0) }));
  }
  let data = (function(){
    try{
      const raw=localStorage.getItem('gearCalc_v9_2') || localStorage.getItem('gearCalc_v9_1') || localStorage.getItem('gearCalc_v9');
      return normalizeData(raw?JSON.parse(raw):null);
    }catch{ return clone(defaultData) }
  })();

  // DOM refs
  const $grid=document.getElementById('grid'), $score=document.getElementById('scoreTotal'), $spec=ensureEl('specGrid','spec-grid','.score-box'), $core=document.getElementById('coreTotal'), $toast=document.getElementById('toast'), $logBox=document.getElementById('logBox');
  const $calcBtn=document.getElementById('calcBtn');
  const $modal=document.getElementById('optModal');
  const $budget=document.getElementById('budgetInput');
  const $optRun=document.getElementById('optRun');
  const $optCancel=document.getElementById('optCancel');
  const $partsGrid=document.getElementById('partsGrid');

  if($calcBtn){ $calcBtn.onclick=()=>{ openModal() } }
  if($optCancel){ $optCancel.onclick=()=> closeModal() }
  if($modal){ const $bd=$modal.querySelector('.backdrop'); if($bd){ $bd.onclick=()=> closeModal() } }
  if($optRun){ $optRun.onclick=()=>{ const raw=(''+$budget.value).trim(); const num=parseInt(raw,10); const b=Number.isFinite(num)? Math.max(0, Math.min(9999, num)) : 0; localStorage.setItem('coreBudget', b); optimizeWithBudget(b); closeModal(); toast('최적 셋팅 적용') } }

  function openModal(){ const last=localStorage.getItem('coreBudget'); if($budget){ $budget.value=last? last: '' } if($modal){ $modal.classList.add('show') } setTimeout(()=> $budget&&$budget.focus(), 0) }
  function closeModal(){ if($modal){ $modal.classList.remove('show') } }

  // Utils
  function ensureEl(id, className, parentSelector){
    let el=document.getElementById(id);
    if(!el && parentSelector){ const parent=document.querySelector(parentSelector); if(parent){ el=document.createElement('div'); el.id=id; if(className) el.className=className; parent.appendChild(el) } }
    return el;
  }
  const sum=(arr,n)=>{let s=0; for(let i=0;i<n;i++) s+=arr[i]||0; return s}
  const clamp=(v,min,max)=>Math.max(min,Math.min(max,v))
  const hasCrow=(label)=>!(label==='BRACER'||label==='BOOTS')
  const save=()=> localStorage.setItem('gearCalc_v9_2', JSON.stringify(data))
  function toast(msg){ if(!$toast) return; $toast.textContent=msg; $toast.classList.add('show'); clearTimeout(toast._t); $toast._t=setTimeout(()=> $toast.classList.remove('show'), 1200) }

  function setEVForSum(d, target){
    target = clamp(target, 0, 10)
    let e = Math.min(5, Math.ceil(target/2))
    let v = Math.min(5, target - e)
    while(e+v < target && (e<5 || v<5)){
      if(e<=v && e<5) e++; else if(v<5) v++
    }
    d.E=e; d.V=v
    enforceEVConstraints(d)
  }

  // EV constraints
  function enforceEVConstraints(d){
    let E=d.E|0, V=d.V|0
    let hi=Math.max(E,V), lo=Math.min(E,V)
    if(hi>=4 && lo<3){ lo=3 }
    if(hi>=5 && lo<4){ lo=4 }
    if(hi>=4 && lo>=3 && hi-lo>1){ hi=lo+1 }
    if(E>=V){ d.E=hi; d.V=lo } else { d.V=hi; d.E=lo }
  }

  // Labels for specs
  const LABEL_MAP={
    critRate:'Crit Rate', critDamage:'Crit Damage', skillDamage:'Skill Damage', shieldDamage:'Shield Damage', vulnerability:'Vulnerability',
    toChilled:'To Chilled', toPoisoned:'To Poisoned', toWeakened:'To Weakened', toLacerated:'To Lacerated', clarity:'Clarity',
    voidwaker:'Voidwaker Emblem', stardustSash:'Stardust Sash', glacialBoots:'Glacial Warboots', overload:'Overload', petResonance:'Pet Resonance'
  }

  function calc(){
    const stats={
      critRate:8, critDamage:200,
      skillDamage:100, shieldDamage:100, vulnerability:100,
      toChilled:100, toPoisoned:100, toWeakened:100, toLacerated:100,
      clarity:100, voidwaker:100, stardustSash:100, glacialBoots:100,
      overload:100, petResonance:100
    }
    let totalCore=0

    data.forEach(d=>{
      const eff=EFFECT_TABLE[d.label]||{}
      const hasC = hasCrow(d.label)

      if(d.state!==STATE.NONE){
        totalCore += sum(COST.E,d.E) + sum(COST.V,d.V) + sum(COST.C, hasC? d.C:0)
      }

      if(d.state===STATE.SS){
        for(let lv=1; lv<=d.E; lv++){ if(eff.E && eff.E[lv]) apply(stats, eff.E[lv]) }
        for(let lv=1; lv<=d.V; lv++){ if(eff.V && eff.V[lv]) apply(stats, eff.V[lv]) }
        if(hasC) for(let lv=1; lv<=d.C; lv++){ if(eff.C && eff.C[lv]) apply(stats, eff.C[lv]) }
        if(eff.legend) apply(stats, eff.legend)
      }
      if(hasC && d.C>0){
        for(const k of Object.keys(C_MULTIPLE_BONUS).map(Number).sort((a,b)=>a-b)){
          if(d.C>=k && C_MULTIPLE_BONUS[k]) apply(stats, C_MULTIPLE_BONUS[k])
        }
      }
    })

    const mulKeys=['critDamage','skillDamage','shieldDamage','vulnerability','toChilled','toPoisoned','toWeakened','toLacerated','clarity','voidwaker','stardustSash','glacialBoots','overload','petResonance']
    const baseScore = mulKeys.reduce((m,k)=> m * (stats[k]/100), 1)
    const critFactor = Math.min(stats.critRate,100)/100
    const score = baseScore * critFactor
    return {stats,totalCore,score}
  }
  function apply(stats,eff){ for(const [k,v] of Object.entries(eff)){ stats[k]=(stats[k]||0)+v } }

  // Render
  function render(){
    if(!$grid||!$score||!$core) return
    $grid.innerHTML=''
    for(let i=0;i<LABELS.length;i++){
      const d = data[i] || (data[i]=clone(defaultData[i]))
      $grid.appendChild(renderCard(d))
    }

    const {stats,totalCore,score} = calc()
    $core.textContent = totalCore + '개'
    $score.textContent = score.toFixed(2) + '×'

    if($spec){
      $spec.innerHTML=''
      for(const key of Object.keys(LABEL_MAP)){
        const name=LABEL_MAP[key], val=stats[key]
        if(key==='critRate'){ addSpec(name, val.toFixed(0)+'%') }
        else if(key==='critDamage'){ addSpec(name, val.toFixed(0)+'%') }
        else { const delta = val - 100; if(delta>0) addSpec(name, delta.toFixed(0)+'%') }
      }
    }

    if($logBox){
      const openSaved = localStorage.getItem('logOpen') === '1'
      if(openSaved) $logBox.classList.add('open'); else $logBox.classList.remove('open')
      const head = $logBox.querySelector('.log-head')
      if(head && !head._bound){
        head._bound=true
        head.onclick=()=>{ $logBox.classList.toggle('open'); localStorage.setItem('logOpen', $logBox.classList.contains('open')?'1':'0'); if($logBox.classList.contains('open')) enumerateCombosAndRender() }
      }
      if($logBox.classList.contains('open')) enumerateCombosAndRender()
    }

    save(); renderTech()
  }
  function addSpec(name,text){ if(!$spec) return; const div=document.createElement('div'); div.className='spec'; div.innerHTML=`<strong>${name}</strong> : ${text}`; $spec.appendChild(div) }

  function renderCard(d){
    const wrap=document.createElement('div'); wrap.className='card'+(d.state===STATE.NONE?' none':'')
    const head=document.createElement('div'); head.className='card-head'
    const badge=document.createElement('div'); badge.className='badge'+(d.state===STATE.NONE?' none':'')
    badge.innerHTML = d.state===STATE.SS ? `<img alt="SS" src="${ssImg(d.label)}">` : (d.state===STATE.ALT? `<img alt="ALT" src="${altImg(d.label)}">` : '<div style="color:white;font-weight:900;display:grid;place-items:center;height:100%">NONE</div>')
    badge.onclick = ()=>{ d.state = d.state===STATE.SS?STATE.NONE : d.state===STATE.NONE?STATE.ALT : STATE.SS; render() }
    head.appendChild(badge)
    const title=document.createElement('div'); title.innerHTML=`<h3 class="title">${d.label}</h3>`; head.appendChild(title)
    wrap.appendChild(head)

    const section=document.createElement('div'); section.className='section'
    if(d.state===STATE.SS){
      section.appendChild(starRow(d,'E',5))
      section.appendChild(starRow(d,'V',5))
      if(hasCrow(d.label)) section.appendChild(starRow(d,'C',10))
    } else if(d.state===STATE.ALT){
      const row=document.createElement('div'); row.className='row'
      const chip=document.createElement('div'); chip.className='chip'; chip.textContent='ALT'; chip.style.background='#165c7f'; row.appendChild(chip)
      const stars=document.createElement('div'); stars.className='stars'
      for(let i=1;i<=3;i++){
        const on = i <= (d.ALT||0)
        const s=document.createElement('button'); s.className='star '+(on? 'on':'off'); s.innerHTML=`<img src="${on?starOn:starOff}" alt="star">`
        s.onclick=()=>{ d.ALT=(d.ALT===i?0:i); render() }
        stars.appendChild(s)
      }
      row.appendChild(stars); section.appendChild(row)

      if(hasCrow(d.label) && d.C>0){
        const crow=document.createElement('div'); crow.className='row'
        const cchip=document.createElement('div'); cchip.className='chip c'; cchip.textContent='C'; crow.appendChild(cchip)
        const cstars=document.createElement('div'); cstars.className='stars'
        for(let i=1;i<=10;i++){
          const on = i <= d.C
          const s=document.createElement('button'); s.className='star '+(on? 'on':'off'); s.innerHTML=`<img src="${on?starOn:starOff}" alt="star">`; s.disabled=true
          cstars.appendChild(s)
        }
        crow.appendChild(cstars); section.appendChild(crow)
      }
    }
    wrap.appendChild(section); return wrap
  }

  function starRow(d,kind,count){
    const row=document.createElement('div'); row.className='row'
    const chip=document.createElement('div'); chip.className='chip '+kind.toLowerCase(); chip.textContent=kind; row.appendChild(chip)
    const stars=document.createElement('div'); stars.className='stars'
    for(let i=1;i<=count;i++){
      const on = i <= (d[kind]||0)
      const s=document.createElement('button'); s.className='star '+(on? 'on':'off'); s.innerHTML=`<img src="${on?starOn:starOff}" alt="star">`
      s.title = `${kind} ${i}성`
      s.onclick = ()=> onClick(d, kind, i)
      stars.appendChild(s)
    }
    row.appendChild(stars); return row
  }

  function onClick(d,kind,value){
    if(d[kind] === value){
      d[kind]=0
      if(kind!=='C'){
        enforceEVConstraints(d)
        const cap=d.E+d.V
        if(cap<3) d.C=0; else if(d.C>cap) d.C=cap
      }
      return render()
    }

    if(kind==='E'){
      if(value<=3){ d.E=value }
      else if(value===4){ d.V = Math.max(d.V, 3); d.E=4 }
      else if(value===5){ d.V = Math.max(d.V, 4); d.E=5 }
      enforceEVConstraints(d)
    } else if(kind==='V'){
      if(value<=3){ d.V=value }
      else if(value===4){ d.E = Math.max(d.E, 3); d.V=4 }
      else if(value===5){ d.E = Math.max(d.E, 4); d.V=5 }
      enforceEVConstraints(d)
    } else if(kind==='C'){
      if(!hasCrow(d.label)) return
      let cap = d.E + d.V
      if(value > cap){
        const need = Math.max(3, value)
        setEVForSum(d, need)
        cap = d.E + d.V
      }
      if(cap < 3){ d.C = 0; return render() }
      d.C = Math.min(value, cap)
      return render()
    }

    const cap=d.E+d.V
    if(cap<3) d.C=0; else if(d.C>cap) d.C=cap
    render()
  }

  // Optimization
  function cloneData(ds){ return ds.map(d=>({...d})) }
  function itemCoreCost(d){
    let c = sum(COST.E,d.E) + sum(COST.V,d.V)
    if(hasCrow(d.label)) c += sum(COST.C, d.C)
    return c
  }
  function calcFor(dataset){
    const stats={
      critRate:8, critDamage:200,
      skillDamage:100, shieldDamage:100, vulnerability:100,
      toChilled:100, toPoisoned:100, toWeakened:100, toLacerated:100,
      clarity:100, voidwaker:100, stardustSash:100, glacialBoots:100,
      overload:100, petResonance:100
    }
    dataset.forEach(d=>{
      if(d.state===STATE.NONE) return
      const eff=EFFECT_TABLE[d.label]||{}
      const hasC = hasCrow(d.label)
      if(d.state===STATE.SS){
        for(let lv=1; lv<=d.E; lv++){ if(eff.E && eff.E[lv]) apply(stats, eff.E[lv]) }
        for(let lv=1; lv<=d.V; lv++){ if(eff.V && eff.V[lv]) apply(stats, eff.V[lv]) }
        if(hasC) for(let lv=1; lv<=d.C; lv++){ if(eff.C && eff.C[lv]) apply(stats, eff.C[lv]) }
        if(eff.legend) apply(stats, eff.legend)
      }
      if(hasC && d.C>0){
        for(const k of Object.keys(C_MULTIPLE_BONUS).map(Number).sort((a,b)=>a-b)){
          if(d.C>=k && C_MULTIPLE_BONUS[k]) apply(stats, C_MULTIPLE_BONUS[k])
        }
      }
    })
    const mulKeys=['critDamage','skillDamage','shieldDamage','vulnerability','toChilled','toPoisoned','toWeakened','toLacerated','clarity','voidwaker','stardustSash','glacialBoots','overload','petResonance']
    const base = mulKeys.reduce((m,k)=> m*(stats[k]/100), 1)
    const critFactor = Math.min(stats.critRate,100)/100
    return {stats, score: base*critFactor}
  }
  function simulateStep(base, idx, kind){
    const before = cloneData(base)
    const after = cloneData(base)
    const d = after[idx]
    const cost0 = itemCoreCost(d)
    if(kind==='E'){
      d.E = Math.min(5, d.E+1)
      if(d.E===4) d.V = Math.max(d.V, 3)
      if(d.E===5) d.V = Math.max(d.V, 4)
      enforceEVConstraints(d)
      const cap=d.E+d.V
      if(cap<3) d.C=0; else if(d.C>cap) d.C=cap
    } else if(kind==='V'){
      d.V = Math.min(5, d.V+1)
      if(d.V===4) d.E = Math.max(d.E, 3)
      if(d.V===5) d.E = Math.max(d.E, 4)
      enforceEVConstraints(d)
      const cap=d.E+d.V
      if(cap<3) d.C=0; else if(d.C>cap) d.C=cap
    } else if(kind==='C'){
      if(!hasCrow(d.label)) return null
      const nextC = Math.min(10, d.C+1)
      if(nextC > d.C){
        if(nextC > d.E + d.V){ const need = Math.max(3, nextC); setEVForSum(d, need) }
        d.C = Math.min(nextC, d.E + d.V)
      }
    }
    const cost1 = itemCoreCost(d)
    const addCost = cost1 - cost0
    if(!(addCost>0)) return null
    const s0 = bestStatesForDataset(before).score
    const resBest = bestStatesForDataset(after)
    const delta = resBest.score - s0
    return { next: after, cost: addCost, delta, nextScore: resBest.score }
  }
  function optimizeWithBudget(budget){
    let opt = budget>0 ? data.map(d=>({...d, E:0, V:0, C:0})) : cloneData(data)
    let rem = budget
    if(budget>0){
      let guard=0
      const guardLimit = Math.max(10000, budget*60)
      while(rem>0 && guard<guardLimit){
        guard++
        let best=null
        for(let i=0;i<LABELS.length;i++){
          const d = opt[i]
          if(d.E<5){ const cand = simulateStep(opt, i, 'E'); if(cand && cand.cost<=rem && cand.delta>0){ if(!best || cand.delta/cand.cost > best.delta/best.cost) best=cand } }
          if(d.V<5){ const cand = simulateStep(opt, i, 'V'); if(cand && cand.cost<=rem && cand.delta>0){ if(!best || cand.delta/cand.cost > best.delta/best.cost) best=cand } }
          if(hasCrow(d.label) && d.C<10){ const cand = simulateStep(opt, i, 'C'); if(cand && cand.cost<=rem && cand.delta>0){ if(!best || cand.delta/cand.cost > best.delta/best.cost) best=cand } }
        }
        if(!best) break
        opt = best.next
        rem -= best.cost
      }
    }
    const best = bestStatesForDataset(opt)
    for(let i=0;i<LABELS.length;i++){ opt[i].state = best.states[i] }
    data = opt
    save(); render()
  }
  function bestStatesForDataset(base){
    const n=LABELS.length
    const states=[STATE.SS,STATE.ALT,STATE.NONE]
    let bestScore=-Infinity, bestStates=new Array(n).fill(STATE.SS)
    function rec(i,acc){
      if(i===n){
        const ds=base.map((d,idx)=>({...d, state:acc[idx]}))
        const res=calcFor(ds)
        if(res.score>bestScore){ bestScore=res.score; bestStates=acc.slice() }
        return
      }
      for(const st of states){ rec(i+1, acc.concat(st)) }
    }
    rec(0,[])
    return {score:bestScore, states:bestStates}
  }
  function comboStateString(states){
    const short=['W','A','N','B','Br','Bt']
    return states.map((s,i)=>`${short[i]}:${s}`).join(' | ')
  }
  function enumerateCombosAndRender(){
    const table=document.getElementById('logTableWrap')
    const chart=document.getElementById('lineChart')
    if(!table||!chart) return
    const combos=[]
    const n=LABELS.length
    const base = data.map(d=>({label:d.label,E:d.E,V:d.V,C:d.C,state:d.state}))
    const states=[STATE.SS,STATE.ALT,STATE.NONE]
    function rec(i,acc){
      if(i===n){
        const ds=base.map((d,idx)=>({...d, state:acc[idx]}))
        const res=calcFor(ds)
        const core = ds.reduce((s,x)=> s + (x.state!==STATE.NONE? (sum(COST.E,x.E)+sum(COST.V,x.V)+(hasCrow(x.label)?sum(COST.C,x.C):0)) : 0), 0)
        combos.push({states:acc.slice(), score:res.score, core})
        return
      }
      for(const st of states){ rec(i+1, acc.concat(st)) }
    }
    rec(0,[])
    combos.sort((a,b)=> b.score - a.score)
    const top = combos.slice(0,60)
    renderLogTable(top)
    drawScoreChart(top)
  }
  function renderLogTable(rows){
    const wrap=document.getElementById('logTableWrap')
    if(!wrap) return
    let html='<table class="log-table"><thead><tr><th>#</th><th>Score</th><th>Core</th><th>States</th></tr></thead><tbody>'
    rows.forEach((r,i)=>{ html += `<tr><td>${i+1}</td><td>${r.score.toFixed(3)}×</td><td>${r.core}</td><td>${comboStateString(r.states)}</td></tr>` })
    html+='</tbody></table>'
    wrap.innerHTML=html
  }
  function drawScoreChart(rows){
    const svg=document.getElementById('lineChart')
    if(!svg) return
    const w=800,h=160,p=24
    svg.setAttribute('viewBox',`0 0 ${w} ${h}`)
    if(!rows.length){ svg.innerHTML=''; return }
    const xs=rows.map(r=>r.core), ys=rows.map(r=>r.score)
    const minX=Math.min(...xs), maxX=Math.max(...xs)
    const minY=Math.min(...ys), maxY=Math.max(...ys)
    const sx=x=> p + ((x-minX)/(maxX-minX||1))*(w-2*p)
    const sy=y=> (h-p) - ((y-minY)/(maxY-minY||1))*(h-2*p)
    const sorted=rows.slice().sort((a,b)=>a.core-b.core)
    const pts=sorted.map(r=>`${sx(r.core)},${sy(r.score)}`).join(' ')
    const axis=`<line x1="${p}" y1="${h-p}" x2="${w-p}" y2="${h-p}" stroke="#2b3a66"/><line x1="${p}" y1="${p}" x2="${p}" y2="${h-p}" stroke="#2b3a66"/>`
    svg.innerHTML = axis + `<polyline points="${pts}" fill="none" stroke="#88d8ff" stroke-width="2"/>`
  }

  // Tech parts
  const TECH_PARTS=[
    {name:'TB Drone', cost:2750},
    {name:'TB Soccer', cost:900},
    {name:'TB Drill', cost:3000},
    {name:'Molotov', cost:600}
  ]
  function renderTech(){
    if($partsGrid){
      $partsGrid.innerHTML=''
      TECH_PARTS.forEach(p=>{
        const wrap=document.createElement('div'); wrap.style.textAlign='center'
        const badge=document.createElement('div'); badge.className='badge'; badge.innerHTML=`<img alt="TECH" src="${techImg(p.name)}">`
        const cost=document.createElement('div'); cost.className='cost'; cost.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="#57e087" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l8 4v12l-8 4-8-4V6l8-4z"/></svg> ${p.cost}`
        wrap.appendChild(badge); wrap.appendChild(cost); $partsGrid.appendChild(wrap)
      })
    }
  }

  // Self tests
  function selfTest(){
    try{
      console.assert(document.getElementById('specGrid'), 'specGrid missing')
      console.assert(document.getElementById('grid'), 'grid missing')
      console.assert(document.getElementById('logTableWrap'), 'logTableWrap missing')
      console.assert(document.getElementById('lineChart'), 'lineChart missing')
      console.log('%cSelfTest: PASS','color:#0f0')
    }catch(e){ console.error('SelfTest: FAIL', e); toast('렌더 중 오류가 발생했습니다. 콘솔 확인') }
  }

  // Init
  selfTest(); render(); renderTech();
})();