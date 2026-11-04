var article1 = {
    category: "COVER STORY",
    title: "가을 바다로 떠나는 휴식 여행",
    summary: "시민 여러분께 전하는 10월의 인사말과 거제의 가을 소식들.",
    thumbnail: "./images/a1_1.webp",
    headerGradient: "from-emerald-800 via-teal-700 to-slate-900",
    icon: "🌊",
    subtitle: "시민 여러분께 전하는 가을 소식과 아름다운 풍경.",
    content: `
        <div class="space-y-6 text-slate-700 leading-relaxed">
            <p>푸른 남해 바다가 한층 더 깊어지는 풍경입니다.</p>
            
            <!-- 💡 이미지 클릭 시 팝업이 뜨도록 onclick과 cursor-pointer 추가 -->
            <div class="my-6 text-center">
                <img src="./images/a1_1.webp" alt="거제 풍경 이미지" 
                     class="w-full h-auto object-cover rounded-xl cursor-pointer hover:opacity-95 transition"
                     onclick="openImageModal(this.src)">
                <p class="text-xs text-slate-500 mt-2">▲ 10월의 거제 풍경 (클릭하면 확대됩니다)</p>
            </div>

            <p>섬 전체가 가을빛으로 물들고 있습니다...</p>
        </div>
    `
};
