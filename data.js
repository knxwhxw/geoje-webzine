// data.js
var articles = [
    {
        category: "COVER STORY",
        title: "가을 바다로 떠나는 휴식 여행",
        subtitle: "푸른 바다와 가을빛이 머무는 10월의 함께거제",
        headerGradient: "from-emerald-700 to-teal-900",
        icon: "🌊",
        content: `
            <div class="space-y-6 text-slate-700 leading-relaxed">
                <div class="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-xl font-medium text-emerald-900">
                    "시민 여러분, 안녕하십니까! 기분 좋은 선선한 가을바람이 넘쳐나는 10월입니다."
                </div>
                <p>푸른 남해 바다가 한층 더 깊어지는 10월, 거제는 섬 전체가 가을빛으로 물들고 있습니다. 거제 시정소식지 <b>&lt;함께거제&gt;</b> 이번 호에서는 가을의 정취를 만끽할 수 있는 다채로운 문화 축제 소식과 소상공인 및 청년들을 위한 알찬 지원 정책을 함께 담았습니다.</p>
                <div class="w-full h-56 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-xl flex flex-col items-center justify-center p-6 text-center border border-emerald-200">
                    <span class="text-4xl mb-2">🍁</span>
                    <h4 class="font-bold text-emerald-900 text-lg">2026년 10월 거제시 주요 시정 목표</h4>
                    <p class="text-xs text-emerald-700 mt-1">시민이 행복한 문화도시 • 지속가능한 침체 극복 경제 선도</p>
                </div>
                <p>시민 여러분의 가정에 늘 행복과 평안이 가득하시길 기원하며, 소식지 속 다양한 거제의 이야기와 함께 따뜻한 가을날을 만끽하시길 진심으로 바랍니다.</p>
            </div>
        `
    },
    {
        category: "01 INTERVIEW",
        title: "낮과 밤, 금속과 빛의 반전 예술",
        subtitle: "거제 출신 금속 공예 장인 이숙 작가가 전하는 빛 이야기",
        headerGradient: "from-slate-800 to-zinc-900",
        icon: "✨",
        content: `
            <div class="space-y-6 text-slate-700 leading-relaxed">
                <div class="w-full h-60 bg-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-500 shadow-inner">
                    <span class="text-4xl mb-2">⚒️</span>
                    <span class="font-bold text-slate-800">[ 이숙 작가 작업실 및 대표 금속 조형물 ]</span>
                    <span class="text-xs text-slate-400 mt-1">투과하는 빛에 따라 형태가 변하는 반전 미학 작품</span>
                </div>
                <p>차갑고 단단하게 느껴지는 차가운 금속 소재에 섬세한 펀칭 기법으로 온기와 빛을 불어넣는 금속 공예가 이숙 작가. 그녀의 작업실은 조명이 켜지는 순간 또 다른 우주로 변신합니다.</p>
                <h3 class="font-bold text-slate-900 text-lg border-b border-slate-200 pb-2">Q. 금속이라는 차가운 소재에 빛을 결합하시게 된 계기는?</h3>
                <p>"거제의 낮과 밤 바다는 전혀 다른 얼굴을 가지고 있습니다. 낮에는 일렁이는 햇살을 품고, 밤에는 달빛과 어선의 불빛을 비추죠. 제 금속 작품도 낮에는 묵묵한 조형물로, 조명이 켜진 밤에는 빛을 뿜어내는 입체 예술로 반전 매력을 선사하고 싶었습니다."</p>
            </div>
        `
    },
    {
        category: "02 TOURISM",
        title: "거제 섬꽃축제 & 가을 바다 드라이브 코스",
        subtitle: "국화 향기와 드넓은 오션뷰를 함께 즐기는 10월 여행",
        headerGradient: "from-blue-600 to-cyan-800",
        icon: "🌺",
        content: `
            <div class="space-y-6 text-slate-700 leading-relaxed">
                <div class="space-y-4">
                    <div class="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                        <span class="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-bold rounded">추천 명소 1</span>
                        <h3 class="font-bold text-slate-900 text-lg">제18회 거제 섬꽃축제 현장</h3>
                        <p class="text-xs sm:text-sm text-slate-600">거제시 농업개발원에서 개최되는 이번 섬꽃축제는 수만 송이 국화 조형물과 곤충체험관, 다채로운 공연이 연출되는 최고의 가을 가족 나들이 코스입니다.</p>
                    </div>
                    <div class="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                        <span class="px-2 py-0.5 bg-cyan-100 text-cyan-800 text-xs font-bold rounded">추천 명소 2</span>
                        <h3 class="font-bold text-slate-900 text-lg">여차-홍포 해안도로 드라이브</h3>
                        <p class="text-xs sm:text-sm text-slate-600">점점 수많은 섬들이 남해 바다 위로 펼쳐지는 환상의 드라이브 코스. 가을 노을빛이 물들 때 방문하시면 평생 잊지 못할 장관을 감상하실 수 있습니다.</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        category: "03 LIFE",
        title: "알아두면 유용한 10월 거제 지원 혜택",
        subtitle: "소상공인 맞춤형 지원부터 청년 자격증 수강료 지원까지",
        headerGradient: "from-indigo-700 to-purple-900",
        icon: "💡",
        content: `
            <div class="space-y-6 text-slate-700 leading-relaxed">
                <div class="border border-indigo-200 rounded-xl p-5 bg-indigo-50/50 space-y-3">
                    <span class="px-2 py-1 bg-indigo-600 text-white font-bold text-xs rounded">지원 정책 01</span>
                    <h3 class="font-bold text-slate-900 text-lg">소상공인 융자이자 및 경영안정자금</h3>
                    <p class="text-xs sm:text-sm text-slate-600">관내 소상공인의 사업장 임차료 및 시설 개선 비용에 대해 융자 이자를 지원합니다.</p>
                </div>
            </div>
        `
    },
    {
        category: "04 CULTURE",
        title: "10월 거제 문화 행사 한눈에 보기",
        subtitle: "가을밤을 수놓는 음악회와 예술 전시 일정",
        headerGradient: "from-rose-600 to-pink-800",
        icon: "📅",
        content: `
            <div class="space-y-4 text-slate-700">
                <div class="p-4 bg-white border border-slate-200 rounded-xl flex items-center gap-4 shadow-sm">
                    <div class="w-14 h-14 bg-rose-600 text-white rounded-lg flex flex-col items-center justify-center font-bold flex-shrink-0">
                        <span class="text-[10px]">10월</span>
                        <span class="text-base">12일</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 text-base">제18회 거제 섬꽃축제 개막식</h4>
                        <p class="text-xs text-slate-500 mt-0.5">거제시 농업개발원 / 국화조형물 전시 및 축하공연</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        category: "05 READER",
        title: "시민이 만들어가는 함께거제",
        subtitle: "소식지 독자분들이 전해주는 정겨운 목소리",
        headerGradient: "from-teal-600 to-emerald-800",
        icon: "💬",
        content: `
            <div class="space-y-6 text-slate-700">
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div class="flex justify-between items-center text-xs font-bold text-emerald-800">
                        <span>고현동 김민지 독자</span>
                        <span>⭐⭐⭐⭐⭐</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">"스마트폰 썸네일 목차 카드 형태로 웹진이 변경되니 원하는 코너를 바로 찾아 읽을 수 있어서 훨씬 편리해졌어요!"</p>
                </div>
            </div>
        `
    },
    {
        category: "06 EVENT",
        title: "숨은그림찾기 퀴즈 이벤트",
        subtitle: "몽돌이와 함께 그림 속 거제 특산물 3가지를 찾아보세요!",
        headerGradient: "from-amber-500 to-orange-700",
        icon: "🧩",
        content: `
            <div class="space-y-6 text-slate-700 text-center sm:text-left">
                <div class="w-full h-64 bg-amber-100 rounded-2xl border-2 border-dashed border-amber-300 flex flex-col items-center justify-center p-6 space-y-3">
                    <span class="text-5xl">🎨</span>
                    <h4 class="font-extrabold text-amber-900 text-lg">[ 10월 숨은그림찾기 일러스트 ]</h4>
                    <p class="text-xs text-amber-800 max-w-sm">그림 속에 숨겨진 <b>유자🍊, 몽돌이🪨, 멸치상자🐟</b>를 찾아 아래 정답을 선택해주세요!</p>
                </div>
            </div>
        `
    }
];
