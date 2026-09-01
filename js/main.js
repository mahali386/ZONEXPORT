/* ============================================================
   ZONEXPORT — main.js
   ============================================================ */
(function () {
    'use strict';

    var APK = 'https://github.com/mahali386/ZONEXPORT/releases/download/V1/ZONEXPORT.apk';

    /* ---------- Header scroll state ---------- */
    var header = document.getElementById('siteHeader');
    var backTop = document.getElementById('backTop');
    function onScroll() {
        var y = window.scrollY;
        header.classList.toggle('scrolled', y > 20);
        backTop.classList.toggle('show', y > 500);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Mobile drawer ---------- */
    var hamburger = document.getElementById('hamburger');
    var drawer = document.getElementById('mobileDrawer');
    var overlay = document.getElementById('drawerOverlay');
    var drawerClose = document.getElementById('drawerClose');

    function openDrawer() {
        drawer.classList.add('open');
        overlay.classList.add('show');
        hamburger.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }
    function closeDrawer() {
        drawer.classList.remove('open');
        overlay.classList.remove('show');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
    hamburger.addEventListener('click', function () {
        drawer.classList.contains('open') ? closeDrawer() : openDrawer();
    });
    drawerClose.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
    document.querySelectorAll('.drawer-link, .drawer-cta').forEach(function (a) {
        a.addEventListener('click', closeDrawer);
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeDrawer();
    });

    /* ---------- Drawer language accordion ---------- */
    var langToggle = document.getElementById('drawerLangToggle');
    var langList = document.getElementById('drawerLangList');
    langToggle.addEventListener('click', function () {
        var open = langList.classList.toggle('open');
        langToggle.classList.toggle('open', open);
        langToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    /* ---------- Desktop language dropdown ---------- */
    var langBtn = document.getElementById('langBtnDesktop');
    var langMenu = document.getElementById('langMenuDesktop');
    if (langBtn) {
        langBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            var open = langMenu.classList.toggle('open');
            langBtn.classList.toggle('open', open);
            langBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        document.addEventListener('click', function () {
            langMenu.classList.remove('open');
            langBtn.classList.remove('open');
        });
    }

    /* ---------- Active nav link on scroll ---------- */
    var navLinks = document.querySelectorAll('.desktop-nav .nav-link');
    var sections = ['home', 'tournaments', 'features', 'leaderboard', 'about'];
    function setActiveNav() {
        var pos = window.scrollY + 120;
        var current = 'home';
        sections.forEach(function (id) {
            var el = document.getElementById(id);
            if (el && el.offsetTop <= pos) current = id;
        });
        navLinks.forEach(function (l) {
            l.classList.toggle('active', l.getAttribute('href') === '#' + current);
        });
    }
    window.addEventListener('scroll', setActiveNav, { passive: true });

    /* ---------- Feature tabs ---------- */
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            var name = tab.getAttribute('data-tab');
            tabs.forEach(function (t) {
                var on = t === tab;
                t.classList.toggle('active', on);
                t.setAttribute('aria-selected', on ? 'true' : 'false');
            });
            document.querySelectorAll('.tab-panel').forEach(function (p) {
                var on = p.id === 'panel-' + name;
                p.classList.toggle('active', on);
                p.hidden = !on;
            });
        });
    });

    /* ---------- Tournaments data ---------- */
    var tournaments = [
        {
            group: 'CS Headshot² (Skill On)',
            banner: 'images/tournament-1.png',
            badges: [['Duo', 'duo'], ['Clash Squad', 'squad']],
            title: 'CS Headshot – Skill & Loadout On',
            joined: 0, max: 4,
            date: '31/08/2026', time: '10:30 PM',
            win: '80%', kill: '0%', entry: 25
        },
        {
            group: 'CS M1887 Headshot',
            banner: 'images/tournament-1.png',
            badges: [['Duo', 'duo'], ['Clash Squad', 'squad']],
            title: 'CS M1887 Headshot – Skills & Loadout Off',
            joined: 0, max: 4,
            date: '31/08/2026', time: '09:30 PM',
            win: '80%', kill: '0%', entry: 25
        },
        {
            group: 'CS 1-Gun HS',
            banner: 'images/tournament-1.png',
            badges: [['Duo', 'duo'], ['Clash Squad', 'squad']],
            title: 'CS 1-Gun HS – Single Weapon Challenge',
            joined: 1, max: 4,
            date: '01/09/2026', time: '08:00 PM',
            win: '75%', kill: '5%', entry: 25
        },
        {
            group: 'Battle Royale',
            banner: 'images/tournament-2.png',
            badges: [['Solo', 'solo'], ['Bermuda', 'mode']],
            title: 'Battle Royale – Esports Mode Match #962',
            joined: 9, max: 48,
            date: '02/09/2026', time: '08:00 AM',
            win: '60%', kill: '10%', entry: 30
        },
        {
            group: 'Clash Squad',
            banner: 'images/tournament-1.png',
            badges: [['Squad', 'squad'], ['Clash Squad', 'mode']],
            title: 'Clash Squad 4v4 – Pro Arena',
            joined: 6, max: 8,
            date: '02/09/2026', time: '09:00 PM',
            win: '70%', kill: '8%', entry: 40
        },
        {
            group: 'Lone Wolf',
            banner: 'images/tournament-2.png',
            badges: [['Solo', 'solo'], ['Lone Wolf', 'mode']],
            title: 'Lone Wolf 1v1 – Sniper Only',
            joined: 1, max: 2,
            date: '03/09/2026', time: '07:30 PM',
            win: '85%', kill: '0%', entry: 20
        }
    ];

    function esc(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    function tournamentCard(t) {
        var pct = Math.round((t.joined / t.max) * 100);
        var badges = t.badges.map(function (b) {
            return '<span class="badge ' + b[1] + '">' + esc(b[0]) + '</span>';
        }).join('');
        return '' +
            '<article class="tour-card reveal">' +
                '<img class="tour-banner" src="' + t.banner + '" alt="' + esc(t.title) + ' tournament banner" loading="lazy">' +
                '<div class="tour-body">' +
                    '<div class="tour-badges">' + badges + '</div>' +
                    '<h4 class="tour-title"><i class="fa-solid fa-link"></i> ' + esc(t.title) + '</h4>' +
                    '<div class="tour-progress">' +
                        '<div class="bar"><span style="width:' + pct + '%"></span></div>' +
                        '<span class="count">' + t.joined + '/' + t.max + '</span>' +
                    '</div>' +
                    '<div class="tour-stats">' +
                        '<span class="date">' + esc(t.date) + ' ' + esc(t.time) + '</span>' +
                        '<span class="win">WIN ' + esc(t.win) + '</span>' +
                        '<span class="kill">PER KILL ' + esc(t.kill) + '</span>' +
                    '</div>' +
                    '<a class="tour-join" href="' + APK + '"><i class="fa-solid fa-coins"></i> ' + t.entry + ' JOIN <i class="fa-solid fa-chevron-right" style="color:#fff"></i></a>' +
                '</div>' +
            '</article>';
    }

    var groupsHost = document.getElementById('tournamentGroups');
    if (groupsHost) {
        // group by group name preserving order
        var order = [];
        var byGroup = {};
        tournaments.forEach(function (t) {
            if (!byGroup[t.group]) { byGroup[t.group] = []; order.push(t.group); }
            byGroup[t.group].push(t);
        });
        var html = order.map(function (g) {
            var cards = byGroup[g].map(tournamentCard).join('');
            return '<div class="tour-group">' +
                       '<h3 class="tour-group-title">' + esc(g) + '</h3>' +
                       '<div class="tour-cards">' + cards + '</div>' +
                   '</div>';
        }).join('');
        groupsHost.innerHTML = html;
    }

    /* ---------- Leaderboard data ---------- */
    var players = [
        { u: 'arif143', w: 5750 },
        { u: 'abhiQ', w: 5060 },
        { u: 'akash90', w: 3775 },
        { u: 'mauryaji90', w: 3660 },
        { u: 'theved', w: 3295 },
        { u: 'anuragchauhan65', w: 3190 },
        { u: 'rohutsharma', w: 2975 },
        { u: 'theved!', w: 2950 },
        { u: 'SK WARRIOR', w: 2375 },
        { u: 'Nayanpaul', w: 2175 }
    ];
    var lbHost = document.getElementById('leaderboardTable');
    if (lbHost) {
        var rows = '<div class="lb-head"><span>Place</span><span>User</span><span style="text-align:right">Wins</span></div>';
        players.forEach(function (p, i) {
            var rank = i + 1;
            var topClass = rank <= 3 ? ' top' + rank : '';
            var icon = rank <= 3 ? '<i class="fa-solid fa-crown"></i>' : '<i class="fa-solid fa-user"></i>';
            rows += '<div class="lb-row' + topClass + '">' +
                        '<span class="lb-place">#' + rank + '</span>' +
                        '<span class="lb-user">' + icon + ' ' + esc(p.u) + '</span>' +
                        '<span class="lb-wins">' + p.w.toLocaleString() + '</span>' +
                    '</div>';
        });
        lbHost.innerHTML = rows;
    }

    /* ---------- Scroll reveal ---------- */
    function initReveal() {
        var els = document.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window)) {
            els.forEach(function (e) { e.classList.add('in'); });
            return;
        }
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) {
                    en.target.classList.add('in');
                    io.unobserve(en.target);
                }
            });
        }, { threshold: 0.12 });
        els.forEach(function (e) { io.observe(e); });
    }
    initReveal();

    /* ---------- Animated counters ---------- */
    var counters = document.querySelectorAll('[data-count]');
    var counted = false;
    function runCounters() {
        if (counted) return;
        var hero = document.querySelector('.hero-stats');
        if (!hero) return;
        var rect = hero.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            counted = true;
            counters.forEach(function (el) {
                var target = parseInt(el.getAttribute('data-count'), 10);
                var start = 0, dur = 1400, t0 = null;
                function step(ts) {
                    if (!t0) t0 = ts;
                    var prog = Math.min((ts - t0) / dur, 1);
                    el.textContent = Math.floor(start + (target - start) * prog);
                    if (prog < 1) requestAnimationFrame(step);
                }
                requestAnimationFrame(step);
            });
        }
    }
    window.addEventListener('scroll', runCounters, { passive: true });
    runCounters();

    /* ---------- Floating particles ---------- */
    var pHost = document.getElementById('heroParticles');
    if (pHost && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        var count = window.innerWidth < 600 ? 14 : 26;
        for (var i = 0; i < count; i++) {
            var s = document.createElement('i');
            var size = 2 + Math.random() * 4;
            s.style.left = Math.random() * 100 + '%';
            s.style.top = 50 + Math.random() * 55 + '%';
            s.style.width = s.style.height = size + 'px';
            s.style.background = Math.random() > 0.5 ? '#00e5ff' : '#9d4dff';
            s.style.animationDuration = (4 + Math.random() * 6) + 's';
            s.style.animationDelay = (Math.random() * 5) + 's';
            pHost.appendChild(s);
        }
    }
})();
