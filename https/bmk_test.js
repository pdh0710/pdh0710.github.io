// bmk[*][0] : folder header
//		bmk[*][0][0] : indent level,  bmk[*][0][2] : 1=expand / 0 = collapse,  bmk[*][0][3] : 1='Open All' button,
// bmk[*][>0] = bookmark
//		bmk[*][>0][0] = (-1:blank line, 0:new line, 1:same line)
var bmk = [
	[	[0, "Daily News", 1, 1],
		[0, "http://apod.nasa.gov/apod/astropix.html", "Astronomy Picture of the Day"],
		[0, "https://twitter.com/dailygalaxy", "The Daily Galaxy Twitter"],
		[0, "http://www.zdnet.co.kr/news/news_list.asp", "지디넷코리아 - 최신 뉴스"],
		[0, "http://www.techholic.co.kr/news/articleList.html?sc_section_code=S1N1&view_type=sm", "테크홀릭 - News Archives"],
		[0, "http://www.coolenjoy.net/bbs/board.php?bo_table=38", "쿨앤조이 뉴스/신제품"],
		[0, "http://www.parkoz.com/zboard/zboard.php?id=int_news", "파코즈 - 해외 하드웨어 뉴스"],
		[1, "http://www.parkoz.com/zboard/zboard.php?id=int_vganews", "해외 그래픽"],
		[1, "http://www.parkoz.com/zboard/zboard.php?id=dm_techinfo", "해외 미디어"],
		[1, "http://www.parkoz.com/zboard/zboard.php?id=mb_techinfo", "해외 모바일"],
//		[-2],
		[0, "http://www.dpreview.com/", "Digital Photography Review"],
		[0, "http://www.slrclub.com/bbs/zboard.php?id=newproduct_sony", "SLR클럽 Sony 신제품게시판"],
		[1, "http://www.slrclub.com/bbs/zboard.php?id=newproduct_nikon", "니콘 신제품"],
		[1, "http://www.slrclub.com/bbs/zboard.php?id=newproduct", "캐논 신제품"]
	],

	[	[1, "News Archive", 1, 0],
		[0, "http://www.yonhapnews.co.kr/it/2408000001.html", "연합뉴스 - IT/과학 전체기사"],
		[0, "http://news.danawa.com/News_List_List.php", "전체 기사 :: 행복쇼핑의 시작! 다나와"]
	],

	[	[0, "News0", 1, 1],
		[0, "http://apod.nasa.gov/apod/astropix.html", "Astronomy Picture of the Day"],
		[0, "https://twitter.com/dailygalaxy", "The Daily Galaxy Twitter"],
		[0, "http://www.zdnet.co.kr/news/news_list.asp", "지디넷코리아 - 최신 뉴스"],
		[0, "http://www.techholic.co.kr/news/articleList.html?sc_section_code=S1N1&view_type=sm", "테크홀릭 - News Archives"]
	],
	[	[1, "Archive1", 1, 0],
		[0, "http://www.yonhapnews.co.kr/it/2408000001.html", "연합뉴스 - IT/과학 전체기사"],
		[0, "http://news.danawa.com/News_List_List.php", "전체 기사 :: 행복쇼핑의 시작! 다나와"]
	],
	[	[2, "Archive2", 1, 0],
		[0, "http://www.yonhapnews.co.kr/it/2408000001.html", "연합뉴스 - IT/과학 전체기사"],
		[0, "http://news.danawa.com/News_List_List.php", "전체 기사 :: 행복쇼핑의 시작! 다나와"]
	],
	[	[3, "Archive3", 1, 0],
		[0, "http://www.yonhapnews.co.kr/it/2408000001.html", "연합뉴스 - IT/과학 전체기사"],
		[0, "http://news.danawa.com/News_List_List.php", "전체 기사 :: 행복쇼핑의 시작! 다나와"]
	],
	[	[4, "Archive4", 1, 0],
		[0, "http://www.yonhapnews.co.kr/it/2408000001.html", "연합뉴스 - IT/과학 전체기사"],
		[0, "http://news.danawa.com/News_List_List.php", "전체 기사 :: 행복쇼핑의 시작! 다나와"]
	],

	[	[0, 'Portal', 1, 0],
		[0,	"http://en.wikipedia.org/wiki/Main_Page", "Wikipedia, the free encyclopedia"],
		[1, "http://ko.wikipedia.org/wiki/%EC%9C%84%ED%82%A4%EB%B0%B1%EA%B3%BC:%EB%8C%80%EB%AC%B8", "위키백과, 우리 모두의 백과사전"],
		[0, "http://www.daum.net/", "Daum - 모으다 잇다 흔들다"],
		[1, "http://map.daum.net/", "지도 "],
		[1, "http://dic.daum.net/", "어학사전"],
		[0, "http://www.naver.com/", "네이버 :: 나의 경쟁력"],
		[1, "http://map.naver.com/", "지도 "],
		[1, "http://dic.naver.com/", "사전 "],
		[1, "http://translate.naver.com/#/ko/en", "번역 "],
		[1, "https://memo.naver.com/", "메모 "],
		[0, "https://www.google.com/", "Google"],
		[1, "https://gmail.com/", "Gmail "],
		[1, "https://www.google.co.kr/intl/ko/docs/about/", "Docs "],
		[1, "https://drive.google.com/drive/", "Drive "],
		[1, "https://translate.google.co.kr/?hl=ko&tab=wT", "번역 "],
		[1, "https://www.google.co.kr/maps/", "Maps "],
		[1, "https://play.google.com/store?hl=ko", "Play "],
		[1, "https://www.youtube.com/", "YouTube"],
		[-1],
		[0, "http://movie.naver.com/", "네이버 영화 : 영화와 처음 만나는 곳"],
		[0, "http://www.imdb.com/search/", "IMDB Advanced Search"],
		[0, "http://www.allmovie.com/", "AllMovie | Movie Search, Guide, Recommendations, and Reviews"],
		[0, "http://www.rottentomatoes.com/", "Rotten Tomatoes"],
		[0, "http://www.maniadb.com/?", "maniadb.com - all that music :: maniadb.com"],
		[0, "http://www.allmusic.com/", "AllMusic | Music Search, Recommendations, Videos and Reviews"]
	],
	[	[1, "SNS & BBS", 1, 0],
		[0, "https://twitter.com/login", "Twitter Login"],
		[0, "https://www.facebook.com/", "Facebook"],
		[0, "https://brunch.co.kr/", "카카오 브런치"],
		[0, "http://post.naver.com/navigator.nhn", "네이버 포스트"],
		[-1],
		[0, "https://namu.wiki/", "나무 위키"],
		[0, "http://windowsforum.kr/", "윈도우 포럼"],
		[0, "http://osmanias.com/", "OSMANIA - 오에스매니아"],
		[-1],
		[0, "http://pdh0710.dothome.co.kr/", "dothome"],
		[1, "http://pdh0710.woobi.co.kr/", "woobi"]
	],
	[	[2, 'Tip', 1, 1],
		[0, "http://news.softpedia.com/news/How-to-Install-and-Run-Android-Apps-in-a-Linux-OS-477407.shtml", "How to Install and Run Android Apps in a Linux OS - Softpedia"],
		[0, "http://superuser.com/questions/247651/how-does-one-install-an-extension-for-chrome-browser-from-the-local-file-system", "How does one install an extension for Chrome browser from the local file system? - Super User"],
		[0, "http://news.softpedia.com/news/How-to-Install-and-Run-Android-Apps-in-a-Linux-OS-477407.shtml", "How to Install and Run Android Apps in a Linux OS - Softpedia"],
		[1, "http://superuser.com/questions/247651/how-does-one-install-an-extension-for-chrome-browser-from-the-local-file-system", "How does one install an extension for Chrome browser from the local file system? - Super User"]
	]
];
