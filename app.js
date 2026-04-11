/* ═══════════════════════════
   HOTEL DATA
═══════════════════════════ */
var HOTELS = [
  {id:0, name:'The Orange Hotel', loc:'Mumbai, India', price:78, rating:4.7, reviews:421, tag:'luxury', emoji:'🏛️', interest:'+12 interested',
   amenities:['🏊 Pool','📶 WiFi','🍳 Breakfast','🅿️ Parking','🏋️ Gym'],
   desc:'A stunning luxury property in the heart of Mumbai. The Orange Hotel blends Art Deco heritage with modern amenities. Panoramic sea views, a rooftop pool, and a Michelin-starred restaurant make every stay unforgettable.',
   dist:'7.9 KM', time:'15 MIN',
   reviewList:[{user:'Priya R',color:'#f97316',date:'Mar 2026',stars:5,text:'Absolutely stunning! The rooftop pool is to die for. Service was impeccable.'},
               {user:'James K',color:'#6366f1',date:'Feb 2026',stars:4,text:'Beautiful property, great location. Breakfast spread was incredible.'},
               {user:'Meena S',color:'#14b8a6',date:'Jan 2026',stars:5,text:'Best stay in Mumbai. Will definitely return!'}]},
  {id:1, name:'The Cube Hotel', loc:'Los Angeles, USA', price:76, rating:4.3, reviews:215, tag:'city', emoji:'🏢', interest:'+8 interested',
   amenities:['📶 WiFi','🅿️ Parking','☕ Coffee'],
   desc:'Minimalist design meets urban living at The Cube Hotel. Located steps from downtown LA, this boutique property is perfect for business travelers and city explorers alike.',
   dist:'3.2 KM', time:'8 MIN',
   reviewList:[{user:'Carlos M',color:'#f59e0b',date:'Mar 2026',stars:4,text:'Clean, modern, well-located. Good value for LA.'},
               {user:'Sofia L',color:'#8b5cf6',date:'Feb 2026',stars:4,text:'Stylish interiors, helpful staff. Parking was easy.'}]},
  {id:2, name:'Ocean View Suite', loc:'Maldives', price:320, rating:4.9, reviews:876, tag:'beach', emoji:'🌊', interest:'+34 interested',
   amenities:['🏊 Pool','🤿 Diving','🍹 Bar','🛥️ Speedboat','🌅 Sunset View'],
   desc:'Overwater bungalows perched above the crystal-clear Indian Ocean. Wake up to turquoise waters, enjoy a private plunge pool, and watch manta rays glide beneath your glass floor.',
   dist:'12.0 KM', time:'25 MIN',
   reviewList:[{user:'Tanaka Y',color:'#ec4899',date:'Mar 2026',stars:5,text:'Heaven on earth. The underwater room was surreal!'},
               {user:'Rachel T',color:'#0ea5e9',date:'Mar 2026',stars:5,text:'Worth every penny. Perfect honeymoon spot.'}]},
  {id:3, name:'Green Palace', loc:'Wayanad, Kerala', price:63, rating:4.1, reviews:134, tag:'mountain', emoji:'🌿', interest:'+5 interested',
   amenities:['🌿 Nature Trails','🍃 Spa','🍳 Breakfast','📶 WiFi'],
   desc:'Nestled in the misty hills of Wayanad, Green Palace is a forest retreat unlike any other. Wake to birdsong, trek through tea estates, and unwind with Ayurvedic treatments.',
   dist:'2.1 KM', time:'5 MIN',
   reviewList:[{user:'Ananya B',color:'#22c55e',date:'Feb 2026',stars:4,text:'So peaceful and green! The Ayurvedic spa was amazing.'},
               {user:'Rahul P',color:'#f97316',date:'Jan 2026',stars:4,text:'Perfect weekend getaway from the city noise.'}]},
  {id:4, name:'Skyline Tower', loc:'Dubai, UAE', price:245, rating:4.8, reviews:654, tag:'luxury', emoji:'🗼', interest:'+22 interested',
   amenities:['🏊 Infinity Pool','🍽️ Fine Dining','🛎️ Butler','🏋️ Gym','🚁 Helipad'],
   desc:'Stay among the clouds at Skyline Tower, Dubai\'s most celebrated luxury address. 80 floors of opulence with sweeping views of the Burj Khalifa, a sky-high infinity pool, and a 24-hour butler service.',
   dist:'5.6 KM', time:'12 MIN',
   reviewList:[{user:'Omar A',color:'#f59e0b',date:'Mar 2026',stars:5,text:'The infinity pool view is just insane. Best hotel I\'ve ever stayed in.'},
               {user:'Elena V',color:'#6366f1',date:'Mar 2026',stars:5,text:'Service is out of this world. The butler anticipated everything.'}]},
  {id:5, name:'Harbor Lights Inn', loc:'Goa, India', price:55, rating:4.0, reviews:98, tag:'beach', emoji:'⚓', interest:'+6 interested',
   amenities:['🏖️ Beach Access','🍹 Bar','🛵 Scooter Rental','📶 WiFi'],
   desc:'A charming, colourful Portuguese-style inn right on Goa\'s most beautiful stretch of beach. Sip on cold beers at the sunset bar and fall asleep to the sound of waves.',
   dist:'0.3 KM', time:'2 MIN',
   reviewList:[{user:'Arjun D',color:'#0ea5e9',date:'Feb 2026',stars:4,text:'Loved the vibe! Beach is literally outside your door.'},
               {user:'Nadia R',color:'#ec4899',date:'Jan 2026',stars:3,text:'Great location, rooms could be cleaner. Good price though.'}]},
  {id:6, name:'Alpine Nest', loc:'Manali, Himachal Pradesh', price:89, rating:4.5, reviews:307, tag:'mountain', emoji:'🏔️', interest:'+11 interested',
   amenities:['🔥 Fireplace','❄️ Snow View','🍵 Tea Service','🧘 Yoga Deck'],
   desc:'A cozy wooden cabin resort wrapped in snow and pine forests. Alpine Nest offers fire-lit evenings, fresh mountain air, and spectacular views of the Rohtang Pass from every room.',
   dist:'1.8 KM', time:'6 MIN',
   reviewList:[{user:'Vikram S',color:'#a855f7',date:'Feb 2026',stars:5,text:'Woke up to fresh snow on the mountains. Pure magic!'},
               {user:'Divya M',color:'#f97316',date:'Jan 2026',stars:4,text:'Fireplace room was so cozy. Loved the yoga deck.'}]},
  {id:7, name:'Metro Grand', loc:'New Delhi, India', price:112, rating:4.4, reviews:489, tag:'city', emoji:'🌆', interest:'+9 interested',
   amenities:['🍽️ Restaurant','🏋️ Gym','💼 Business Center','🚗 Airport Transfer','📶 WiFi'],
   desc:'The definitive business and leisure hotel in the capital. Metro Grand offers sleek modern rooms, a rooftop restaurant with views of India Gate, and seamless connectivity to the metro.',
   dist:'4.5 KM', time:'11 MIN',
   reviewList:[{user:'Simran K',color:'#14b8a6',date:'Mar 2026',stars:4,text:'Perfect base for exploring Delhi. Room service was quick.'},
               {user:'Ahmed F',color:'#6366f1',date:'Feb 2026',stars:4,text:'Great business facilities. The rooftop view at night is beautiful.'}]},
  {id:8, name:'Pebble Cove Resort', loc:'Andaman Islands', price:175, rating:4.6, reviews:265, tag:'beach', emoji:'🐠', interest:'+18 interested',
   amenities:['🤿 Snorkeling','🚤 Boat Trips','🏊 Pool','🌴 Beach Bar','🐠 Coral Reef'],
   desc:'Surrounded by translucent waters of the Andaman Sea, Pebble Cove offers a barefoot luxury experience. World-class snorkeling, bioluminescent night swims, and sunsets that last forever.',
   dist:'8.3 KM', time:'20 MIN',
   reviewList:[{user:'Leila A',color:'#0ea5e9',date:'Mar 2026',stars:5,text:'The bioluminescent swim was life-changing!'},
               {user:'Tom B',color:'#22c55e',date:'Feb 2026',stars:5,text:'Best beach resort in India, hands down.'}]},
  {id:9, name:'The Dune Retreat', loc:'Jaisalmer, Rajasthan', price:95, rating:4.3, reviews:182, tag:'budget', emoji:'🏜️', interest:'+7 interested',
   amenities:['🐪 Camel Safari','🌌 Stargazing','🪘 Folk Music','🍛 Rajasthani Cuisine'],
   desc:'Sleep under a billion stars in a luxury desert camp. The Dune Retreat offers authentic Rajasthani hospitality, camel safaris across golden dunes, and magical evenings with folk dancers.',
   dist:'18 KM', time:'35 MIN',
   reviewList:[{user:'Preethi N',color:'#f59e0b',date:'Feb 2026',stars:5,text:'The stargazing session was breathtaking. So quiet out there!'},
               {user:'Matt W',color:'#8b5cf6',date:'Jan 2026',stars:4,text:'Unique experience! Camel ride at sunset was unforgettable.'}]},
  {id:10, name:'Zen Garden Hotel', loc:'Kyoto, Japan', price:198, rating:4.7, reviews:531, tag:'luxury', emoji:'🌸', interest:'+15 interested',
   amenities:['🌸 Garden','♨️ Onsen','🍵 Tea Ceremony','🎋 Bamboo Forest','🧖 Spa'],
   desc:'A traditional ryokan nestled within a private bamboo garden in Kyoto\'s Higashiyama district. Futon beds, tatami rooms, an outdoor onsen, and the serene ritual of Japanese hospitality.',
   dist:'6.2 KM', time:'14 MIN',
   reviewList:[{user:'Yuki H',color:'#ec4899',date:'Mar 2026',stars:5,text:'The onsen under cherry blossoms is something I\'ll never forget.'},
               {user:'Claudia M',color:'#14b8a6',date:'Feb 2026',stars:5,text:'Authentic ryokan experience. Tea ceremony was a highlight!'}]},
  {id:11, name:'Budget Bay Hostel', loc:'Pondicherry, India', price:18, rating:3.8, reviews:72, tag:'budget', emoji:'🏠', interest:'+3 interested',
   amenities:['📶 WiFi','☕ Free Coffee','🛵 Rentals','🎲 Game Room'],
   desc:'The best budget stay on the French Riviera of India. Clean dorms and private rooms, free breakfast coffee, and the friendliest backpacker crowd you\'ll find.',
   dist:'0.8 KM', time:'3 MIN',
   reviewList:[{user:'Leo G',color:'#f97316',date:'Feb 2026',stars:4,text:'Great social vibe. Met so many cool travellers here.'},
               {user:'Isha V',color:'#6366f1',date:'Jan 2026',stars:3,text:'Good location, very affordable. Rooms are basic but clean.'}]}
];

/* ═══════════════════════════
   STORAGE
═══════════════════════════ */
var DB='sf_users', SS='sf_session', SAVED_KEY='sf_saved', BOOKINGS_KEY='sf_bookings';
function getUsers(){try{return JSON.parse(localStorage.getItem(DB))||{};}catch(e){return{};}}
function saveUsers(u){localStorage.setItem(DB,JSON.stringify(u));}
function getSession(){try{return JSON.parse(localStorage.getItem(SS));}catch(e){return null;}}
function setSession(u){localStorage.setItem(SS,JSON.stringify(u));}
function clearSession(){localStorage.removeItem(SS);}
function getSaved(){try{return JSON.parse(localStorage.getItem(SAVED_KEY))||[];}catch(e){return[];}}
function setSaved(a){localStorage.setItem(SAVED_KEY,JSON.stringify(a));}
function getBookings(){try{return JSON.parse(localStorage.getItem(BOOKINGS_KEY))||[];}catch(e){return[];}}
function setBookings(a){localStorage.setItem(BOOKINGS_KEY,JSON.stringify(a));}

/* ═══════════════════════════
   STATE
═══════════════════════════ */
var currentHotelId = 0;
var prevScreen = 'screen-home';
var searchFilter = 'all';

/* ═══════════════════════════
   NAVIGATION
═══════════════════════════ */
function goTo(id){
  document.querySelectorAll('.screen').forEach(function(s){s.classList.remove('active');});
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}

function switchNav(tab){
  var map = {home:'screen-home', search:'screen-search', saved:'screen-saved', profile:'screen-profile'};
  if(tab==='saved') renderSaved();
  if(tab==='profile') renderProfile();
  if(tab==='search'){renderSearchResults();}
  goTo(map[tab]);
}

function goBackFromDetail(){
  goTo(prevScreen);
}

/* ═══════════════════════════
   BOOT
═══════════════════════════ */
window.addEventListener('DOMContentLoaded', function(){
  var s = getSession();
  if(s){ loadHome(s); goTo('screen-home'); }
  renderHomeCards();
  renderSearchResults();
});

/* ═══════════════════════════
   AUTH
═══════════════════════════ */
function showErr(id,show){var el=document.getElementById(id);if(el)el.classList.toggle('visible',show);}
function isEmail(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);}

function doSignup(){
  var name=document.getElementById('su-name').value.trim();
  var email=document.getElementById('su-email').value.trim().toLowerCase();
  var pass=document.getElementById('su-pass').value;
  var cpass=document.getElementById('su-cpass').value;
  var ok=true;
  showErr('su-name-err',!name); if(!name)ok=false;
  showErr('su-email-err',!isEmail(email)); if(!isEmail(email))ok=false;
  showErr('su-pass-err',pass.length<6); if(pass.length<6)ok=false;
  showErr('su-cpass-err',pass!==cpass); if(pass!==cpass)ok=false;
  if(!ok)return;
  var users=getUsers();
  if(users[email]){showToast('⚠️ Email already registered!');return;}
  users[email]={name:name,email:email,pass:pass};
  saveUsers(users);
  var user={name:name,email:email};
  setSession(user); loadHome(user);
  showToast('🎉 Welcome, '+name.split(' ')[0]+'!');
  renderHomeCards();
  goTo('screen-home');
}

function doSignin(){
  var email=document.getElementById('si-email').value.trim().toLowerCase();
  var pass=document.getElementById('si-pass').value;
  showErr('si-email-err',false); showErr('si-pass-err',false);
  if(!isEmail(email)){showErr('si-email-err',true);return;}
  var users=getUsers(); var user=users[email];
  if(!user||user.pass!==pass){showErr('si-pass-err',true);return;}
  var session={name:user.name,email:user.email};
  setSession(session); loadHome(session);
  showToast('👋 Welcome back, '+user.name.split(' ')[0]+'!');
  renderHomeCards();
  goTo('screen-home');
}

function loadHome(user){
  var first=user.name?user.name.split(' ')[0]:'there';
  var initial=first.charAt(0).toUpperCase();
  var el=document.getElementById('home-greeting'); if(el)el.textContent='Hey, '+first+'!';
  var av=document.getElementById('home-avatar'); if(av)av.textContent=initial;
}

function doLogout(){
  clearSession(); showToast('See you soon! 👋');
  setTimeout(function(){goTo('screen-splash');},700);
}

/* ═══════════════════════════
   HOME CARDS RENDER
═══════════════════════════ */
function renderHomeCards(){
  var bestMatch = [1,2,3,4,5,6];
  var topRated  = [0,4,2,7,10,8];
  renderRow('home-cards-row', bestMatch);
  renderRow('home-top-row', topRated);
  syncHeroFav();
}

function renderRow(containerId, ids){
  var saved = getSaved();
  var container = document.getElementById(containerId);
  if(!container) return;
  var html = '';
  ids.forEach(function(id){
    var h = HOTELS[id];
    if(!h) return;
    var isSaved = saved.indexOf(id) !== -1;
    html += '<div class="hotel-card-sm" onclick="openDetail('+id+')">'
      +'<div class="hotel-card-sm-img '+getImgClass(id)+'">'
      + h.emoji
      +'<button class="sm-save-btn" id="sm-save-'+containerId+'-'+id+'" onclick="event.stopPropagation();toggleSave('+id+',\''+containerId+'\')">'
      +(isSaved?'❤️':'🤍')+'</button></div>'
      +'<div class="hotel-card-sm-body">'
      +'<div class="hotel-card-sm-name">'+h.name+'</div>'
      +'<div class="hotel-card-sm-row">'
      +'<div class="hotel-card-sm-price">$'+h.price+'<span style="font-size:10px;color:var(--grey)">/night</span></div>'
      +'<div class="hotel-card-sm-rating">★ '+h.rating+'</div>'
      +'</div></div></div>';
  });
  container.innerHTML = html;
}

function getImgClass(id){
  var classes=['img1','img2','img3','img4','img5','img6','img7','img8'];
  return classes[id % classes.length];
}

var currentHomeCat = 'all';
function filterCat(el, cat){
  currentHomeCat = cat;
  document.querySelectorAll('#screen-home .cat-pill').forEach(function(p){p.classList.remove('active');});
  el.classList.add('active');
  var ids;
  if(cat==='all')         ids=[1,2,3,4,5,6];
  else if(cat==='luxury') ids=HOTELS.filter(function(h){return h.tag==='luxury';}).map(function(h){return h.id;}).slice(0,6);
  else if(cat==='budget') ids=HOTELS.filter(function(h){return h.tag==='budget';}).map(function(h){return h.id;}).slice(0,6);
  else ids=HOTELS.filter(function(h){return h.tag===cat;}).map(function(h){return h.id;}).slice(0,6);
  if(ids.length===0) ids=[0,1,2];
  renderRow('home-cards-row', ids);
}

/* ═══════════════════════════
   DETAIL SCREEN
═══════════════════════════ */
function openDetail(id){
  currentHotelId = id;
  var active = document.querySelector('.screen.active');
  prevScreen = active ? active.id : 'screen-home';
  var h = HOTELS[id];
  if(!h) return;
  document.getElementById('d-name').textContent = h.name;
  document.getElementById('d-loc').textContent = '📍 '+h.loc;
  document.getElementById('d-price').textContent = '$'+h.price;
  document.getElementById('d-interest').textContent = h.interest;
  document.getElementById('d-rating').textContent = h.rating;
  document.getElementById('d-reviews-count').textContent = '('+h.reviews+' reviews)';
  document.getElementById('d-desc').textContent = h.desc;
  document.getElementById('d-stars').textContent = ratingToStars(h.rating);
  document.getElementById('map-hotel-name').textContent = h.name;
  document.getElementById('map-dist').textContent = h.dist;
  document.getElementById('map-time').textContent = h.time;

  var amHtml = '';
  h.amenities.forEach(function(a){ amHtml += '<div class="amenity-chip">'+a+'</div>'; });
  document.getElementById('d-amenities').innerHTML = amHtml;

  document.getElementById('d-reviews-title').textContent = 'Reviews ('+h.reviews+')';
  var revHtml = '';
  h.reviewList.forEach(function(r){
    revHtml += '<div class="review-card">'
      +'<div class="review-header"><div class="review-user">'
      +'<div class="review-avatar" style="background:'+r.color+';">'+r.user.charAt(0)+'</div>'
      +'<div><div class="review-name">'+r.user+'</div><div class="review-date">'+r.date+'</div></div>'
      +'</div><div class="review-stars">'+ratingToStars(r.stars)+'</div></div>'
      +'<div class="review-text">'+r.text+'</div></div>';
  });
  document.getElementById('d-reviews-list').innerHTML = revHtml;

  var saved = getSaved();
  var saveBtn = document.getElementById('detail-save-btn');
  if(saveBtn){ saveBtn.textContent = saved.indexOf(id)!==-1 ? '❤️' : '♡'; }

  document.getElementById('tab-details').style.display = '';
  document.getElementById('tab-reviews').style.display = 'none';
  document.querySelectorAll('.detail-tab').forEach(function(t,i){t.classList.toggle('active',i===0);});

  goTo('screen-detail');
}

function ratingToStars(r){
  var full = Math.floor(r);
  var s = '';
  for(var i=0;i<5;i++) s += i<full?'★':'☆';
  return s;
}

function switchDetailTab(btn, tabId){
  document.querySelectorAll('.detail-tab').forEach(function(t){t.classList.remove('active');});
  btn.classList.add('active');
  document.getElementById('tab-details').style.display = tabId==='tab-details'?'':'none';
  document.getElementById('tab-reviews').style.display = tabId==='tab-reviews'?'':'none';
}

/* ═══════════════════════════
   SAVE / UNSAVE
═══════════════════════════ */
function toggleSave(id, rowId){
  var saved = getSaved();
  var idx = saved.indexOf(id);
  if(idx===-1){ saved.push(id); showToast('❤️ Saved "'+HOTELS[id].name+'"'); }
  else { saved.splice(idx,1); showToast('Removed from saved'); }
  setSaved(saved);
  var btn = document.getElementById('sm-save-'+rowId+'-'+id);
  if(btn) btn.textContent = saved.indexOf(id)!==-1 ? '❤️' : '🤍';
  if(id===0) syncHeroFav();
  if(currentHotelId===id){
    var sb = document.getElementById('detail-save-btn');
    if(sb) sb.textContent = saved.indexOf(id)!==-1 ? '❤️' : '♡';
  }
}

function toggleSaveDetail(){
  var saved = getSaved();
  var id = currentHotelId;
  var idx = saved.indexOf(id);
  if(idx===-1){ saved.push(id); showToast('❤️ Saved "'+HOTELS[id].name+'"'); }
  else { saved.splice(idx,1); showToast('Removed from saved'); }
  setSaved(saved);
  var sb = document.getElementById('detail-save-btn');
  if(sb) sb.textContent = saved.indexOf(id)!==-1 ? '❤️' : '♡';
  renderHomeCards();
}

function toggleSaveHero(btn, id){
  toggleSave(id, 'hero');
  syncHeroFav();
}

function syncHeroFav(){
  var saved = getSaved();
  var btn = document.getElementById('fav-hero');
  if(btn){ btn.textContent = saved.indexOf(0)!==-1 ? '♥' : '♡'; btn.style.color = saved.indexOf(0)!==-1 ? '#ff4757':'white'; }
}

/* ═══════════════════════════
   SAVED SCREEN
═══════════════════════════ */
function renderSaved(){
  var saved = getSaved();
  var lbl = document.getElementById('saved-count-label');
  if(lbl) lbl.textContent = saved.length + (saved.length===1?' saved hotel':' saved hotels');
  var list = document.getElementById('saved-list');
  if(!list) return;
  if(saved.length===0){
    list.innerHTML='<div class="saved-empty"><div class="empty-icon">💔</div><p>No saved hotels yet.<br>Tap ❤️ on any hotel to save it here.</p></div>';
    return;
  }
  var html='';
  saved.forEach(function(id){
    var h=HOTELS[id]; if(!h)return;
    html+='<div class="saved-card" onclick="openDetail('+id+')">'
      +'<div class="saved-card-img '+getImgClass(id)+'">'+h.emoji+'</div>'
      +'<div class="saved-card-info">'
      +'<div class="saved-card-name">'+h.name+'</div>'
      +'<div class="saved-card-loc">📍 '+h.loc+'</div>'
      +'<div class="saved-card-row">'
      +'<div class="saved-card-price">$'+h.price+'<span style="font-size:10px;color:var(--grey)">/night</span></div>'
      +'<div class="saved-card-rating">★ '+h.rating+'</div>'
      +'</div></div>'
      +'<button class="saved-remove-btn" onclick="event.stopPropagation();removeSaved('+id+')">✕</button>'
      +'</div>';
  });
  list.innerHTML=html;
}

function removeSaved(id){
  var saved=getSaved();
  var idx=saved.indexOf(id);
  if(idx!==-1){saved.splice(idx,1);setSaved(saved);}
  showToast('Removed "'+HOTELS[id].name+'"');
  renderSaved();
  renderHomeCards();
}

/* ═══════════════════════════
   BOOKING
═══════════════════════════ */
function doBook(){
  var h = HOTELS[currentHotelId];
  if(!h) return;
  var bookings = getBookings();
  var already = bookings.filter(function(b){return b.id===h.id;});
  if(already.length>0){ showToast('📋 Already booked '+h.name+'!'); return; }
  var now = new Date();
  var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var dateStr = months[now.getMonth()]+' '+now.getDate()+', '+(now.getFullYear());
  var checkIn = new Date(now.getTime()+7*24*60*60*1000);
  var checkInStr = months[checkIn.getMonth()]+' '+checkIn.getDate();
  bookings.push({id:h.id, name:h.name, loc:h.loc, price:h.price, bookedOn:dateStr, checkIn:checkInStr, nights:3, status:'upcoming'});
  setBookings(bookings);
  showToast('🎉 Booked '+h.name+' for $'+h.price*3+'!');
  setTimeout(function(){goTo('screen-home');},1200);
}

/* ═══════════════════════════
   PROFILE
═══════════════════════════ */
function renderProfile(){
  var session = getSession();
  if(!session) return;
  var first = session.name.split(' ')[0];
  var initial = first.charAt(0).toUpperCase();
  var av = document.getElementById('profile-avatar-big'); if(av) av.textContent=initial;
  var nm = document.getElementById('profile-name'); if(nm) nm.textContent=session.name;
  var em = document.getElementById('profile-email'); if(em) em.textContent=session.email;
  var saved = getSaved();
  var bookings = getBookings();
  var ss = document.getElementById('stat-saved'); if(ss) ss.textContent=saved.length;
  var sb = document.getElementById('stat-bookings'); if(sb) sb.textContent=bookings.length;
  var sr = document.getElementById('stat-reviews'); if(sr) sr.textContent=Math.min(bookings.length*2,bookings.length+3);
  renderBookingHistory(bookings);
}

function renderBookingHistory(bookings){
  var list = document.getElementById('booking-history-list');
  if(!list) return;
  if(bookings.length===0){
    list.innerHTML='<div style="font-size:13px;color:var(--grey);padding:10px 0 18px;">No bookings yet. Start exploring!</div>';
    return;
  }
  var html='';
  bookings.slice().reverse().slice(0,4).forEach(function(b){
    html+='<div class="booking-card">'
      +'<div class="booking-header">'
      +'<div class="booking-hotel">'+b.name+'</div>'
      +'<div class="booking-status status-'+b.status+'">'+b.status.charAt(0).toUpperCase()+b.status.slice(1)+'</div>'
      +'</div>'
      +'<div class="booking-detail">'
      +'<span>📍 '+b.loc+'</span>'
      +'<span>🗓️ Check-in: '+b.checkIn+'</span>'
      +'<span>🌙 '+b.nights+' nights · $'+(b.price*b.nights)+'</span>'
      +'</div></div>';
  });
  list.innerHTML=html;
}

/* ═══════════════════════════
   SEARCH
═══════════════════════════ */
function doSearch(){
  var inp = document.getElementById('search-input');
  var clearBtn = document.getElementById('search-clear-btn');
  if(clearBtn) clearBtn.style.display = inp.value.length>0?'block':'none';
  renderSearchResults();
}

function clearSearch(){
  var inp = document.getElementById('search-input');
  if(inp) inp.value='';
  var clearBtn = document.getElementById('search-clear-btn');
  if(clearBtn) clearBtn.style.display='none';
  renderSearchResults();
}

function setFilter(el, filter){
  searchFilter = filter;
  document.querySelectorAll('#screen-search .filter-chip').forEach(function(c){c.classList.remove('active');});
  el.classList.add('active');
  renderSearchResults();
}

function renderSearchResults(){
  var query = '';
  var inp = document.getElementById('search-input');
  if(inp) query = inp.value.trim().toLowerCase();

  var results = HOTELS.filter(function(h){
    var matchFilter = searchFilter==='all' || h.tag===searchFilter;
    var matchQuery = !query || h.name.toLowerCase().indexOf(query)!==-1 || h.loc.toLowerCase().indexOf(query)!==-1;
    return matchFilter && matchQuery;
  });

  var lbl = document.getElementById('search-label');
  if(lbl) lbl.textContent = (query || searchFilter!=='all') ? 'Found '+results.length+' hotel'+(results.length!==1?'s':'') : 'All Hotels ('+HOTELS.length+')';

  var container = document.getElementById('search-results');
  if(!container) return;

  if(results.length===0){
    container.innerHTML='<div class="no-results"><div class="no-icon">🔍</div><p>No hotels found.<br>Try a different search or filter.</p></div>';
    return;
  }

  var saved = getSaved();
  var html='';
  results.forEach(function(h){
    var isSaved = saved.indexOf(h.id)!==-1;
    html+='<div class="search-result-card" onclick="openDetail('+h.id+')">'
      +'<div class="search-result-img '+getImgClass(h.id)+'">'+h.emoji+'</div>'
      +'<div class="search-result-info">'
      +'<div class="search-result-name">'+h.name+'</div>'
      +'<div class="search-result-loc">📍 '+h.loc+'</div>'
      +'<div class="search-result-row">'
      +'<div class="search-result-price">$'+h.price+'<span style="font-size:10px;color:var(--grey)">/night</span></div>'
      +'<div style="display:flex;align-items:center;gap:8px;">'
      +'<div class="search-result-rating">★ '+h.rating+'</div>'
      +'<button class="sm-save-btn" id="sr-save-'+h.id+'" style="position:static;width:26px;height:26px;" onclick="event.stopPropagation();toggleSaveSearch('+h.id+')">'+(isSaved?'❤️':'🤍')+'</button>'
      +'</div></div></div></div>';
  });
  container.innerHTML=html;
}

function toggleSaveSearch(id){
  var saved=getSaved();
  var idx=saved.indexOf(id);
  if(idx===-1){saved.push(id);showToast('❤️ Saved "'+HOTELS[id].name+'"');}
  else{saved.splice(idx,1);showToast('Removed from saved');}
  setSaved(saved);
  var btn=document.getElementById('sr-save-'+id);
  if(btn) btn.textContent=saved.indexOf(id)!==-1?'❤️':'🤍';
  renderHomeCards();
}

/* ═══════════════════════════
   UI HELPERS
═══════════════════════════ */
function togglePass(id,btn){
  var inp=document.getElementById(id);
  if(inp.type==='password'){inp.type='text';btn.textContent='🙈';}
  else{inp.type='password';btn.textContent='👁️';}
}

function showToast(msg){
  var t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show');
  clearTimeout(t._t); t._t=setTimeout(function(){t.classList.remove('show');},2800);
}

/* ═══════════════════════════
   SWIPE GESTURES
═══════════════════════════ */
var sx=0;
document.querySelector('.phone').addEventListener('touchstart',function(e){sx=e.touches[0].clientX;},{passive:true});
document.querySelector('.phone').addEventListener('touchend',function(e){
  var diff=sx-e.changedTouches[0].clientX; if(Math.abs(diff)<65)return;
  var active=document.querySelector('.screen.active');
  if(!active)return;
  var id=active.id;
  if(diff>0){
    if(id==='screen-home')goTo('screen-search');
    else if(id==='screen-detail')goTo('screen-map');
  } else {
    if(id==='screen-map')goTo('screen-detail');
    else if(id==='screen-detail')goTo(prevScreen);
  }
},{passive:true});