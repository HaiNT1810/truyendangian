///Loại truyện
export const constBaseType = {
    title: "Loại truyện",
    data: [
        {
            code: "truyenchu",
            name: "Truyện chữ"
        },
        {
            code: "truyentranh",
            name: "Truyện tranh"
        },
        {
            code: "truyenaudio",
            name: "Truyện audio"
        }
    ]
}
///Thể loại truyện
export const constType = {
    title: "Thể loại truyện",
    data: [
        {
            code: "thanthoai",
            name: "Thần thoại",
            description: "Thần thoại là loại hình tự sự dân gian thường kể về các vị thần, xuất hiện từ thời công xã nguyên thủy nhằm giải thích các hiện tượng tự nhiên, thể hiện khát vọng chinh phục tự nhiên của con người."
        },
        {
            code: "suthi",
            name: "Sử thi",
            description: "Sử thi là những tác phẩm tự sự dân gian có quy mô lớn, sử dụng ngôn ngữ có vần, nhịp, xây dựng những hình tượng nghệ thuật hoành tráng, hào hùng để kể về một hay nhiều biến cố lớn lao diễn ra trong đời sống cộng đồng của nhân dân thời cổ đại. Nhân vật của sử thi mang cốt cách của cộng đồng, tượng trưng cho sức mạnh, niềm tin của cộng đồng."
        },
        {
            code: "truyenthuyet",
            name: "Truyền thuyết",
            description: `Truyền thuyết là loại truyện dân gian kể về những sự kiện và nhân vật có liên quan đến lịch sử, thường có yếu tố tưởng tượng kì ảo. Truyện thể hiện cách đánh giá và thái độ của nhân dân đối với nhân vật và sự kiện lịch sử được kể đến.
        Nhân vật của truyền thuyết chủ yếu là người hoặc bán thần (thần nhưng có khát khao, ước mong, nguyện vọng giống con người, hay còn gọi là ‘’nửa thần nửa người’’). Cốt truyện thường xoay quanh nhiều nhân vật, thậm chí có thể xây dựng thành 2 hệ thống nhân vật đối lập nhau. Ngôn ngữ cô đọng, ít miêu tả, chủ yếu là thuật lại hành động của nhân vật, kể những hoàn cảnh xuất thân của nhân vật.`
        },
        {
            code: "cotich",
            name: "Cổ tích",
            description: `Truyện cổ tích là những sáng tác tự sự dân gian, chủ yếu sử dụng yếu tố tưởng tượng kì ảo để thể hiện cái nhìn hiện thực của người dân với đời sống, bộc lộ quan niệm về đạo đức cũng như về công lí xã hội và ước mơ một cuộc sống tốt đẹp hơn.[10]
        Trong mỗi truyện cổ tích đều có những yếu tố của thực tế, nhưng những yếu tố ấy lại được hư cấu và kì ảo để xây dựng nên một thế giới khác với thế giới hiện tại - thế giới cổ tích, mà trong thế giới ấy, mọi điều đều có thể xảy ra.`
        },
        {
            code: "ngungon",
            name: "Ngụ ngôn",
            description: `Loại truyện được kể, bằng văn xuôi hoặc văn vần, mượn chuyện của đồ vật, con vật,... hoặc về chính con người để nói bóng gió,kín đáo chuyện con người, nhằm khuyên nhủ, răn dạy con người ta một bài học nào đó trong cuộc sống.
        Một phần lớn của truyện ngụ ngôn bắt nguồn từ truyện loài vật do sự gần gũi giữa con người với tự nhiên nên con người đã "gán" cho con vật tính cách của con người. Kết cấu truyện ngụ ngôn thường ngắn, ít tình tiết. Phần truyện kể thì nổi lên, phần ý nghĩa thì lắng đọng, người đọc tự rút ra.`
        },
        {
            code: "cuoi",
            name: "Truyện cười",
            description: "Được xây dựng trên cơ sở mâu thuẫn trong cuộc sống, làm bật lên tiếng cười nhằm mục đích mua vui giải trí và phê phán thói hư tật xấu."
        },
        {
            code: "tucngu",
            name: "Tục ngữ",
            description: "Những câu nói ngắn gọn, hàm xúc, có vần, hình ảnh, nhịp điệu, thể hiện kinh nghiệm của nhân dân được đúc kết qua thực tiễn đời sống hằng ngày."
        },
        {
            code: "caudo",
            name: "Câu đố",
            description: "Những câu nói, câu văn có vần dùng để mô tả một vật, một khái niệm, một hiện tượng,… buộc người đọc, người nghe đưa ra đáp án hoặc lời giải thích nhằm mục đích giải trí, rèn luyện suy nghĩ và cung cấp những tri thức về đời sống."
        },
        {
            code: "cadao",
            name: "Ca dao",
            description: "Những bài thơ trữ tình dân gian thường là những câu hát có vần, có điệu nhằm diễn tả thế giới nội tâm của con người."
        },
        {
            code: "ve",
            name: "Vè",
            description: "Tác phẩm tự sự dân gian có lời thơ mộc mạc kể về những sự kiện diễn ra trong xã hội nhằm thông báo & bình luận."
        },
    ]
}

export const demoTruyens = [
    {
        ID: 1,
        Title: "Tấm cám",
        Description: "Truyện kể về Tấm, và Cám",
        Author: "Sưu tầm",
        Image: null,
        Score: 9.8
    },
    {
        ID: 2,
        Title: "Demon Slayer",
        Description: "Demon Slayer Truyện nhật",
        Author: "Sưu tầm",
        Image: require("@app/assets/images/comics/comic_2.png"),
        Score: 9.3
    },
    {
        ID: 3,
        Title: "Truyện cười",
        Description: "Truyện cười Truyện cười Truyện cười",
        Author: "Sưu tầm",
        Image: require("@app/assets/images/comics/comic_3.png"),
        Score: 9.2
    },
    {
        ID: 4,
        Title: "Truyện vui",
        Description: "Truyện vuiTruyện vuiTruyện vui",
        Author: "Sưu tầm",
        Image: require("@app/assets/images/comics/comic_1.png"),
        Score: 9.0
    }
]

export const demoBanner = {
    ID: 1,
    Title: "Demon Slayer: Kimetsu no Yaiba",
    Description: "Câu chuyện kể về Kamado Tanjirou, một cậu bé tốt bụng kiếm sống qua ngày bằng nghề bán than",
    Author: "Sưu tầm",
    Image: require("@app/assets/images/comics/banner.png"),
    Score: 9.8
}