// bmk[*][0] : folder header
//		bmk[*][0][0] : indent level,  bmk[*][0][2] : 1=expand / 0 = collapse,  bmk[*][0][3] : 1='Open All' button,
// bmk[*][>0] = bookmark
//		bmk[*][>0][0] = (-1:blank line, 0:new line, 1:same line)
var bmk = [
	[	[0, "Daily News", 1, 1],
		[0, "https://apod.nasa.gov/apod/astropix.html", "Astronomy Picture of the Day"],
//		[0, "https://twitter.com/dailygalaxy", "The Daily Galaxy Twitter"],
		[0, "https://www.sciencetimes.co.kr/?cat=36", "Sciencetimes 한국- 뉴스"],
		[0, "https://www.dpreview.com/", "Digital Photography Review"],
//		[0, "https://www.zdnet.co.kr/news/?lstcode=0000&page=1", "지디넷코리아 - 최신 뉴스"],
		[0, "https://www.boannews.com/media/list.asp?mkind=1", "보안 뉴스 - Security"],
		[0, "https://www.itworld.co.kr/news/", "IT World 한국 : 뉴스"],
//		[0, "https://www.clien.net/service/board/news", "클리앙 새로운 소식"],
//		[0, "https://www.coolenjoy.net/bbs/board.php?bo_table=38", "쿨앤 뉴스/신제품"],
		[0, "https://quasarzone.com/bbs/qn_hardware", "퀘이사존 하드웨어 뉴스"],
//		[1, "https://quasarzone.com/bbs/qn_partner", "파트너"],
		[1, "https://quasarzone.com/bbs/qn_mobile", "모바일"]
	],
	[	[1, 'News Archive', 1, 1],
		[0, "https://www.yna.co.kr/industry/all?site=navi_industry_depth02", "연합뉴스 - 산업 전체기사"],
		[0, "http://news.danawa.com/News_List_List.php", "전체 기사 :: 행복쇼핑의 시작! 다나와"],
		[0, "http://www.slrclub.com/bbs/zboard.php?id=newproduct_sony", "SLR클럽 Sony 신제품게시판"],
		[1, "http://www.slrclub.com/bbs/zboard.php?id=newproduct_nikon", "니콘 신제품"],
		[1, "http://www.slrclub.com/bbs/zboard.php?id=newproduct", "캐논 신제품"]
	],
	[	[0, 'Portal', 1, 0],
		[0,	"https://en.wikipedia.org/wiki/Main_Page", "Wikipedia, the free encyclopedia"],
		[1, "https://ko.wikipedia.org/wiki/%EC%9C%84%ED%82%A4%EB%B0%B1%EA%B3%BC:%EB%8C%80%EB%AC%B8", "위키백과, 우리 모두의 백과사전"],
		[0, "https://www.daum.net/", "Daum - 모으다 잇다 흔들다"],
		[1, "https://map.daum.net/", "지도 "],
		[1, "https://dic.daum.net/", "어학사전"],
		[0, "https://www.naver.com/", "네이버 :: 나의 경쟁력"],
		[1, "https://map.naver.com/", "지도 "],
		[1, "https://dict.naver.com/", "사전 "],
		[1, "https://papago.naver.com/", "번역 "],
		[1, "https://memo.naver.com/", "메모 "],
		[-1],
		[0, "https://movie.naver.com/", "네이버 영화 : 영화와 처음 만나는 곳"],
		[0, "https://www.imdb.com/search/", "IMDB Advanced Search"],
		[0, "https://www.allmovie.com/", "AllMovie | Movie Search, Guide, Recommendations, and Reviews"],
		[0, "https://www.rottentomatoes.com/", "Rotten Tomatoes"],
		[0, "http://www.maniadb.com/", "maniadb.com - all that music :: maniadb.com"],
		[0, "https://www.allmusic.com/", "AllMusic | Music Search, Recommendations, Videos and Reviews"],
		[0, "https://www.what-song.com/", "WhatSong Soundtracks"]
	],
	[	[1, "Google", 1, 0],
		[0, "https://www.google.com/", "Google"],
		[0, "https://mail.google.com/mail/u/0/#all", "Gmail "],
		[0, "https://keep.google.com/", "Keep "],
		[0, "https://docs.google.com/document/u/0/", "Docs "],
		[1, "https://docs.google.com/spreadsheets/u/0/", "Sheets "],
		[1, "https://docs.google.com/presentation/u/0/", "Slides "],
		[0, "https://drive.google.com/drive/", "Drive "],
		[0, "https://translate.google.co.kr/?hl=ko&tab=wT", "번역 "],
		[0, "https://www.google.co.kr/maps/", "Maps "],
		[0, "https://play.google.com/store?hl=ko", "Play "],
		[0, "https://www.youtube.com/", "YouTube"]
	],
	[	[1, "SNS & BBS", 1, 0],
		[0, "https://twitter.com/login", "Twitter"],
		[0, "https://www.facebook.com/", "Facebook"],
		[0, "https://brunch.co.kr/", "카카오 브런치"],
		[0, "https://www.blogger.com/", "Blogger.com"],
		[-1],
		[0, "https://namu.wiki/", "나무 위키"],
		[0, "https://windowsforum.kr/", "윈도우 포럼"],
		[0, "http://osmanias.com/", "OSMANIA - 오에스매니아"],
		[0, "https://extmovie.com/", "익무"]
	],
	[	[0, "My Web", 1, 0],
		[0, "https://pdh0710.github.io/", "GitHub Page"],
		[1, "https://pdh0710.github.io/https/", "HTTPS"],
		[-1],
		[0, "https://lime-worlds.duckdns.org/", "LimeLite Worlds"],
		[1, "https://lime-worlds.duckdns.org/tosee/", "To See"],
		[0, "https://worlds2see.ddnsfree.com/", "Worlds2See"],
		[1, "https://worlds2see.ddnsfree.com/limelite/", "Limelite"],
		[1, "https://worlds2see.ddnsfree.com/media", "Media"],
		[1, "https://worlds2see.ddnsfree.com/upload", "Upload"],
		[0, "https://pdh0710.ddnsfree.com/", "pdh0710.ddnsfree.com"],
		[0, "https://pdh0710.freeddns.org/", "pdh0710.freeddns.org"],
		[1, "https://pdh0710.freeddns.org/myip.php", "My IP address (plain text)"],
		[0, "https://glimelite.wordpress.com/", "glimelite@wordpress.com"],
		[-1],
		[0, "https://pdh0710.github.io/https/wmap.html", "날씨 정보"],
		[1, "https://pdh0710.github.io/https/color_test.html", "모니터 색조정"],
		[1, "https://pdh0710.github.io/https/colors.html", "Color Bars"],
		[1, "https://pdh0710.github.io/https/colors_fine.html", "Color Bars Fine"],
		[1, "https://pdh0710.github.io/https/colors_uhd.html", "Color Bars Ultra Fine"],
		[1, "https://pdh0710.github.io/https/colors_rotate.html", "불량화소 검사"]
	],
	[	[1, 'Service Provider', 1, 0],
		[0, "https://www.duckdns.org/", "Duck DNS"],
		[0, "https://www.dynu.com/", "Dynu DNS"],
		[0, "https://letsencrypt.org/", "Let's Encrypt"],
		[-1],
		[0, "https://pages.github.com/", "GitHub Pages"],
		[0, "https://nextcloud.com/", "NextCloud"],
		[1, "https://help.nextcloud.com/", "Forums"],
		[0, "https://wordpress.org/", "WordPress.ORG"],
		[1, "https://wordpress.com/", "WordPress.com"]
	],
	[	[0, 'Util', 1, 0],
		[0, "https://www.openstreetmap.org/", "OpenStreetMap"],
		[1, "https://wiki.openstreetmap.org/wiki/Develop", "Develop"],
		[1, "https://wiki.openstreetmap.org/wiki/Overpass_API", "Overpass API"],
		[0, "https://stellarium-web.org/", "Stellarium Web"],
		[0, "https://www.weather.go.kr/w/index.do", "기상청 날씨누리"],
		[0, "https://m.airkorea.or.kr/main", "우리동네 대기정보"],
		[0, "https://www.jma.go.jp/bosai/map.html#5/31.691/128.826/&elem=ir&contents=himawari&lang=en", "일본기상청 위성영상"],
		[1, "https://himawari8.nict.go.jp/en/himawari8-image.htm", "Himawari-8 위성영상"],
		[0, "https://www.gps-coordinates.net/my-location", "My Location Now"],
		[-1],
		[0, "https://speller.cs.pusan.ac.kr/", "한국어 맞춤법/문법 검사기"],
		[0, "https://translators.to/?source=ko&target=en&text=", "번역기들"],
		[0, "https://www.gingersoftware.com/grammarcheck", "Ginger Grammar Checker"],
		[0, "https://www.wolframalpha.com/", "Wolfram|Alpha: Computational Knowledge Engine"],
		[0, "https://www.desmos.com/calculator", "Desmos Graphing Calculator"],
		[0, "https://get.adobe.com/kr/flashplayer/about/", "Check Adobe Flash player version"],
		[0, "https://robinlinus.github.io/socialmedia-leak/", "Your Social Media Fingerprint"],
		[0, "https://speed.nia.or.kr/index.asp", "NIA 인터넷 속도 측정"],
		[0, "https://www.speedtest.net/", "Speedtest : 인터넷 속도 측정"],
		[1, "https://speed.cloudflare.com/", "Cloudflare Speed Test"],
		[1, "https://fast.com/", "Fast.com : Netflix 계열 속도 측정"],
		[-1],
		[0, "https://tinyurl.com/", "TinyURL.com - shorten that long URL into a tiny URL"],
		[0, "https://mxtoolbox.com/", "MX Lookup Tool - Check your DNS MX Records online"],
		[0, "https://xn--c79as89aj0e29b77z.xn--3e0b707e/", "KISA - Whois Search"],
		[0, "https://www.ipaddress.com/", "What Is My IP Address?"],
		[0, "https://macvendors.com/", "Find MAC Address Vendors"]
	],
	[	[1, "Program", 1, 0],
		[0, "https://www.cpuid.com/", "CPU-Z & HWmonitor"],
		[0, "https://www.virtualbox.org/", "Oracle VM VirtualBox"],
		[0, "https://remiz.co.kr/", "Remiz"],
		[0, "https://notepad-plus-plus.org/", "Notepad++ Home"],
		[0, "https://www.faststone.org/", "FastStone Image Viewer"],
		[0, "https://www.sumatrapdfreader.org/", "Sumatra Free PDF Reader"],
		[-1],
		[0, "https://github.com/Nevcairiel/LAVFilters/releases", "LAV Filters - releases"],
		[0, "https://tv.kakao.com/guide/potplayer", "카카오TV 팟플레이어"],
		[0, "https://www.aimp.ru/", "AIMP"],
		[0, "https://www.foobar2000.org/", "foobar2000"],
		[-1],
		[0, "https://www.freefilesync.org/", "FreeFileSync"],
		[0, "https://winmerge.org/", "WinMerge - File & Forder compare"],
		[0, "http://www.voidtools.com/", "voidtools : Everything"],
		[0, "https://www.chiark.greenend.org.uk/~sgtatham/putty/", "PuTTY"],
		[1, "https://github.com/iPuTTY/iPuTTY", "한국어 PuTTY"],
		[0, "https://winscp.net/eng/index.php", "WinSCP"],
		[0, "http://www.uvnc.com/", "UltraVNC VNC Official"],
		[0, "https://github.com/ValdikSS/GoodbyeDPI", "GoodbyeDPI"],
		[1, "https://github.com/ValdikSS/GoodbyeDPI/releases", "Releases"],
		[0, "https://www.nirsoft.net/", "NirSoft : small freeware utilities"],
		[-1],
		[0, "https://forum.xda-developers.com/", "xda developers : android custom rom"]
	],
	[	[1, "Torrent", 0, 0],
		[0, "https://bunco.co/", "번코"],
		[0, "https://xn--sm2bu1n2xfsllblbca.net/", "토렌트다이아 주소"],
		[0, "https://bunyuc.com/", "번역 포럼"],
		[0, "https://jamak.tv/", "자막나라"],
		[0, "http://www.jamack.net/", "자막넷"],
		[0, "https://www.xn--sm2bu7og7f0sjbmb.com/", "토렌트온리"],
		[1, "https://torrentonly.com/smi", "자막"],
		[0, "https://thepiratebay.org/", "The Pirate Bay"],
		[0, "https://rarbg.to", "RARBG Rarbg Torrents"],
		[0, "https://torrenthaja26.com/", "토렌트하자"]
	],
	[	[2, 'Daily', 1, 1],
		[0, "http://www.cineast.co.kr/bbs/board.php?bo_table=psd_caption", "씨네스트 - 자막자료실"],
		[0, "https://torrentdia56.com/bbs/board.php?bo_table=torrent_movieov", "토렌트다이아 - 해외영화"],
		[0, "https://rarbgunblocked.org/torrents.php?search=&category%5B%5D=47&category%5B%5D=52&category%5B%5D=42&category%5B%5D=46", "RARBG Rarbg Torrents, Films"]
	],
	[	[0, "Develope", 1, 0],
		[0, "https://github.com/", "GitHub"],
		[0, "https://stackoverflow.com/", "StackOverflow"],
		[0, "https://www.w3schools.com/", "w3schools"],
		[0, "https://www.phpschool.com/", "PHPschool"],
		[0, "http://happycgi.com/", "Happy CGI - 각종 소스 코드"],
		[0, "http://www.hackerschool.org/", "해커스쿨"],
		[0, "https://caniuse.com/", "Can I Use"],
		[1, "https://html5test.com/", "HTML5test"],
		[1, "https://www.koreahtml5.kr/main.do", "Korea HTML5"],
		[-1],
		[0, "https://code.visualstudio.com/", "VisualStudio Code"],
		[1, "https://marketplace.visualstudio.com/VSCode", "VScode extensions"],
		[-1],
		[0, "https://nodejs.org/", "Node.js"],
		[1, "https://www.npmjs.com/", "npm"],
		[0, "https://www.python.org/", "Python"],
		[1, "https://pypi.org/", "PyPI"],
		[1, "https://www.anaconda.com/", "Anaconda"],
		[0, "https://www.rust-lang.org/", "Rust"],
		[1, "https://crates.io/", "crate registry"],
		[0, "https://www.php.net/", "PHP"],
		[0, "https://www.lua.org/", "Lua"],
		[0, "http://lesscss.org/", "{less}"],
 		[0, "https://www.typescriptlang.org/", "TypeScript"],
		[0, "https://www.pcre.org/", "PCRE - Perl Compatible Regular Expressions"],
		[0, "https://www.zlib.net/", "zlib"],
		[-1],
		[0, "https://mariadb.org/", "MariaDB"],
		[0, "https://www.mysql.com/", "MySQL"],
		[0, "https://www.postgresql.org/", "PostgreSQL"],
		[0, "https://www.sqlite.org/index.html", "SQLite"],
		[0, "https://redis.io", "Redis"],
		[1, "https://redislabs.com/community/oss-projects/", "Community Projects"],
		[0, "https://www.mongodb.com/", "Mongodb.com"],
		[0, "https://www.couchbase.com/", "Couchbase"],
		[-1],
		[0, "https://nginx.org/", "Nginx"],
		[1, "https://forum.nginx.org/", "Forum"],
		[0, "https://httpd.apache.org/", "Apache HTTPd"],
		[1, "https://www.apachelounge.com/", "Apache Lounge"],
		[-1],
		[0, "https://www.openssh.com/", "OpenSSH"],
		[-1],
		[0, "https://www.data.go.kr/index.do", "한국 공공데이터포털"],
		[0, "https://www.iana.org/time-zones", "IANA Time Zone Database"],
		[0, "https://www.naturalearthdata.com/", "Natural Earth"],
		[0, "https://www.geonames.org/", "GeoNames"],
		[1, "http://www.geonames.org/export/web-services.html", "Services"],
		[0, "https://www.maxmind.com/en/free-world-cities-database", "MaxMind Free World Cities Database"]
	],
	[	[1, "Security", 1, 0],
		[0, "https://www.openssl.org/", "OpenSSL"],
		[0, "https://www.libressl.org/", "LibreSSL"],
		[0, "https://www.snort.org/", "Snort"],
		[0, "https://suricata-ids.org/", "Suricata"],
		[0, "http://ossec.github.io/", "OSSEC"],
		[0, "http://netfilter.org/", "netfilter"],
		[1, "http://netfilter.org/projects/nftables/", "nftables"],
		[0, "https://www.clamav.net/", "ClamAV"],
		[0, "https://cisofy.com/documentation/lynis/get-started/", "Get Started with Lynis"],
		[0, "http://www.chkrootkit.org/", "chkRootKit"]
	],
	[	[1, "Astro", 1, 0],
		[0, "http://www.moshier.net/", "Astronomy and numerical software source codes - moshier.net"],
		[1, "https://naif.jpl.nasa.gov/pub/naif/generic_kernels/spk/planets/", "planet data"],
		[0, "https://ssd.jpl.nasa.gov/?planet_eph_export", "JPL Planetary and Lunar Ephemerides"],
		[1, "https://en.wikipedia.org/wiki/Jet_Propulsion_Laboratory_Development_Ephemeris", "WiKi - JPL Ephemeris"],
		[1, "ftp://ssd.jpl.nasa.gov/pub/eph/planets/bsp", "planet data"],
		[0, "https://www.projectpluto.com/jpl_eph.htm", "C source code for JPL DE ephemerides"],
		[1, "https://github.com/Bill-Gray/jpl_eph", "Github"],
		[0, "http://www.astro.com/swisseph/swephinfo_e.htm", "SWISS EPHEMERIS"]
	],
//	[	[1, 'Tip', 1, 0],
//		[0, "http://news.softpedia.com/news/How-to-Install-and-Run-Android-Apps-in-a-Linux-OS-477407.shtml", "How to Install and Run Android Apps in a Linux OS - Softpedia"],
//		[0, "http://superuser.com/questions/247651/how-does-one-install-an-extension-for-chrome-browser-from-the-local-file-system", "How does one install an extension for Chrome browser from the local file system? - Super User"]
//	],
	[	[0, "Shop", 0, 0],
		[0, "http://www.danawa.com/", "행복쇼핑의 시작! 다나와 (가격비교)"],
		[1, "http://dmall.danawa.com/", "장터"],
		[0, "http://www.enuri.com/", "에누리(가격비교) eNuri.com"],
		[0, "https://shopping.naver.com/", "네이버 지식쇼핑"],
		[1, "https://order.pay.naver.com/home", "네이버 페이"],
		[-1],
		[0, "https://memberssl.auction.co.kr/authenticate/?url=http%3a%2f%2fmember.auction.co.kr%2fMyauction%2fdefault.aspx%3ffrm%3dhometab", "옥션"],
		[1, "https://signinssl.gmarket.co.kr/LogIn/LogIn?URL=http://myg.gmarket.co.kr/", "G마켓"],
		[1, "https://ssl.g9.co.kr/Member/CustomerService/AllLogin?redirectUrl=http%3a%2f%2fwww.g9.co.kr%2fMember%2fMyPage", "G9"],
		[1, "https://member.ssg.com/member/login.ssg?retURL=https%3A%2F%2Fwww.ssg.com%2Fmyssg%2Fmain.ssg%3Fgnb%3Dmyssg", "SSG"],
		[1, "https://www.mysmilepay.com/", "스마일페이"],
		[0, "https://login.11st.co.kr/login/Login.tmall?returnURL=http%3A%2F%2Fbuy.11st.co.kr%2Forder%2FmyTmall.tmall%3Fmethod%3DgetMyTmallMain", "11번가"],
		[0, "https://www.interpark.com/member/login.do?_method=initial&entrJoin=N&imfsUserPath=%2Fmypage%2Fcommon%2FMyPage.do", "인터파크"],
		[0, "http://www.gsshop.com/customer/login/loginEnterGeneral.gs?returnurl=http://www.gsshop.com/mygsshop/myShopping.gs", "GS SHOP"],
		[1, "http://www.akmall.com/", "AK몰"],
		[1, "https://www.hyundaihmall.com/", "H몰"],
		[0, "https://login.tmon.co.kr/user/loginform?message=login_required&return_url=%2Fuser%2FbuyInfo", "티몬"],
		[1, "https://login.coupang.com/login/login.pang?rtnUrl=https%3A%2F%2Fmc.coupang.com%2Fssr%2Fdesktop%2Forder%2Flist", "쿠팡"],
		[1, "https://front.wemakeprice.com/user/login?returnUrl=%2Fmypage%2Forders&type=GENERAL", "위메프"],
		[-1],
		[0, "https://m.cultureland.co.kr/mmb/loginMain.do", "컬쳐랜드"],
		[1, "https://www.payco.com/", "페이코"],
		[-1],
		[0, "http://www.yes24.com/", "YES24 - 대한민국 대표 인터넷서점"],
		[0, "http://www.kyobobook.co.kr/index.laf", "인터넷 교보문고"],
		[0, "http://www.ypbooks.co.kr/kor_index.yp", "▒ 인터넷 영풍문고 - 대한민국 최초 인터넷 서점"],
		[0, "http://www.bugs.co.kr/", "음악은 역시, 벅스!"],
		[0, "http://www.genie.co.kr/", "지니 뮤직"],
		[-1],
		[0, "http://www.ppomppu.co.kr/", "뽐뿌 "],
		[0, "http://www.wassada.com/", "와싸다닷컴"],
		[0, "http://cafe.naver.com/joonggonara", "중고나라 - 네이버카페"],
		[1, "http://cafe.daum.net/vmffotl", "다음카페"],
		[-1],
		[0, "http://www.okcashbag.com/", "OK캐쉬백"]
	],
	[	[1, "할인 정보", 1, 1],
	[0, "https://quasarzone.com/bbs/qb_saleinfo", "퀘이사존"],
	[1, "https://www.coolenjoy.net/bbs/jirum", "쿨앤"],
	[0, "https://quasarzone.com/bbs/qb_saleinfo?_method=post&type=&page=1&category=&popularity=&kind=subject&keyword=%EB%AC%B8%ED%99%94%EC%83%81%ED%92%88%EA%B6%8C&sort=num%2C+reply&direction=DESC", "Q존"],
	[1, "http://browse.auction.co.kr/search?keyword=%EC%BB%AC%EC%B3%90%EB%9E%9C%EB%93%9C+5%EB%A7%8C%EC%9B%90&s=4", "옥션"],
	[1, "https://browse.gmarket.co.kr/search?keyword=%ec%bb%ac%ec%b3%90%eb%9e%9c%eb%93%9c+5%eb%a7%8c%ec%9b%90&s=1", "G마켓"],
	[1, "https://search.tmon.co.kr/search/?keyword=%EC%BB%AC%EC%B3%90%EB%9E%9C%EB%93%9C%205%EB%A7%8C%EC%9B%90&thr=hs&sortType=LOW_PRICE", "T몬"]
],
	[	[1, "Foreign", 1, 0],
		[0, "https://www.amazon.com/", "Amazone"],
		[1, "http://camelcamelcamel.com/", "camelcamelcamel, Amazone Price Tracker"],
		[0, "https://www.newegg.com/global/kr-en/", "Newegg"],
		[0, "http://www.ebay.com/", "Ebay"],
		[0, "https://www.paypal.com", "PayPal"],
		[0, "https://www.aliexpress.com", "AliExpress"],
		[1, "https://ko.aliexpress.com/", "한국어"],
		[1, "https://intl.alipay.com/", "Alipay"],
		[1, "https://www.alibaba.com/", "Alibaba"],
		[-1],
		[0, "https://www.qoo10.com/", "Qoo10-Global – 글로벌 구매, 공동구매"],
		[0, "http://post.malltail.com/", "몰테일 - 해외직구"],
		[1, "http://www.taillist.com/", "테일리스트 - 몰테일 쇼핑"],
		[0, "https://www.ohmyzip.com/", "오마이집"],
		[0, "https://www.gobaesong.com/", "고배송"]
	]
];
