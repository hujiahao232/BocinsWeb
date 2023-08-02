const contacts = [
    { name: "人力资源部中银研修中心", pinyin: "renliziyuanbuzhongyinyanxiuzhongxin", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000042&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "工会工作部", pinyin: "gonghuigongzuobu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000041&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "党委宣传部", pinyin: "dangweixuanchuanbu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000040&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "行长室", pinyin: "hangzhangshi", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000039&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "总行交流", pinyin: "zonghangjiaoliu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000038&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "信息科技运营中心", pinyin: "xinxikejiyunyingzhongxin", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000037&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "上海研修院", pinyin: "shanghaiyanxiuyuan", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000036&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "单证中心", pinyin: "danzhengzhongxin", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000035&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "风险管理部", pinyin: "fengxianguanlibu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000034&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "长三角金融研究院", pinyin: "changsanjiaojinrongyanjiuyuan", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000033&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "银行卡部", pinyin: "yinhangkabu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000032&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "金融机构部", pinyin: "jinrongjigoubu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000031&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "金融市场部", pinyin: "jinrongshichangbu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000030&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "财务管理部", pinyin: "caiwuguanlibu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000029&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "行政事业机构部", pinyin: "xingzhengshiyejigoubu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000028&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "纪委办公室", pinyin: "jiweibangongshi", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000027&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "私人银行部", pinyin: "sirenyinhangbu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000026&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "渠道与运营管理部", pinyin: "qudaoyuyunyingguanlibu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000025&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "消费金融部", pinyin: "xiaofeijinrongbu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000024&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "普惠金融事业部", pinyin: "puhuijinrongshiyebu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000023&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "支付清算部", pinyin: "zhifuqingsuanbu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000022&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "授信管理部", pinyin: "shouquanguanlibu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000021&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "投行资管部", pinyin: "touhangziguanbu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000020&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "托管业务部", pinyin: "tuoguanyewubu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000019&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "工会", pinyin: "gonghui", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000018&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "审计部上海分部", pinyin: "shenjibushanghaifenbu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000017&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "培训中心", pinyin: "peixunzhongxin", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000016&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "园区管理办公室", pinyin: "yuanquguanlibangongshi", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000015&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "后勤服务中心", pinyin: "houqinfuwuzhongxin", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000014&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "办公室", pinyin: "bangongshi", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000013&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "出纳管理部", pinyin: "chunaguanlibu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000012&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "内控与法律合规部", pinyin: "neikongyufalvheguibu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000011&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "党务工作部", pinyin: "dangweigongzuobu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000010&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "信息科技部", pinyin: "xinxikejibu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000009&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "人力资源部", pinyin: "renliziyuanbu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000008&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "交易银行部", pinyin: "jiaoyiyinhangbu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000007&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "个人数字金融部", pinyin: "gerenshuzijinrongbu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000006&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "业务运营中心", pinyin: "yewuyunyingzhongxin", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000005&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "战略客户部", pinyin: "zhanluekehubu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000004&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "公司金融部", pinyin: "gongsijinrongbu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000003&typeFlag=0&cusUserCode=U22091409054588" },
    { name: "安全保卫部", pinyin: "anquanbaoweibu", link: "https://che-mobile.bocins.com/#/login?userId=U22091409054588&qrCode=3120230727000002&typeFlag=0&cusUserCode=U22091409054588" },
];

// 将联系人按照拼音排序
contacts.sort((a, b) => a.pinyin.localeCompare(b.pinyin));

// 获取DOM元素
const searchInput = document.getElementById("searchInput");
const contactList = document.getElementById("contactList");

// 根据搜索词过滤联系人列表并渲染
function renderContacts(searchTerm) {
    const filteredContacts = contacts.filter(
        contact =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.pinyin.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const html = filteredContacts
        .map(contact => `<li onclick="window.location.href='${contact.link}'">${contact.name}</li>`)
        .join("");
    document.getElementById("contactList").innerHTML = html;}

// 监听搜索框输入事件
document.getElementById("searchInput").addEventListener("input", function() {
    renderContacts(this.value);
});


// 假设这是从后端获取的联系人列表数据（与之前保持一致）
// const contacts = [ ... ];

// 生成字母索引条的HTML内容
function generateIndexBar() {
    const letters = new Set(contacts.map(contact => contact.pinyin[0].toUpperCase())); // 获取联系人中出现的首字母并去重
    const sortedLetters = Array.from(letters).sort(); // 对字母进行排序

    return sortedLetters.map(letter => `<div class="index-item" data-letter="${letter}">${letter}</div>`).join("");
}

// 更新联系人列表显示
function renderContacts(searchTerm) {
    const filteredContacts = contacts.filter(
        contact =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.pinyin.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let currentLetter = "";
    let html = "";

    for (const contact of filteredContacts) {
        const firstLetter = contact.pinyin[0].toUpperCase();
        if (firstLetter !== currentLetter) {
            // 添加带背景颜色的字母标签
            html += `<li class="letter-label">${firstLetter}</li>`;
            currentLetter = firstLetter;
        }

        // 添加联系人
        html += `<li onclick="window.location.href='${contact.link}'">${contact.name}</li>`;
    }

    document.getElementById("contactList").innerHTML = html;
}

// 监听搜索框输入事件
document.getElementById("searchInput").addEventListener("input", function() {
    renderContacts(this.value);
});

// 初始页面加载时渲染全部联系人
renderContacts("");

// 生成字母索引条并添加事件监听
const indexBar = document.getElementById("indexBar");
indexBar.innerHTML = generateIndexBar();
indexBar.addEventListener("click", handleIndexItemClick);

// 处理字母索引点击事件
function handleIndexItemClick(event) {
    if (event.target.classList.contains("index-item")) {
        const targetLetter = event.target.getAttribute("data-letter");
        const targetContact = contacts.find(contact => contact.pinyin[0].toUpperCase() === targetLetter);
        if (targetContact) {
            // 滚动到对应的联系人位置
            const targetElement = document.querySelector(`[onclick="window.location.href='${targetContact.link}'"]`);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });

                // 显示闪烁效果
                targetElement.style.backgroundColor = "#BEBEBE"; // 设置为灰色背景
                setTimeout(() => {
                    targetElement.style.backgroundColor = ""; // 恢复原始背景颜色
                }, 500);
            }
        }
    }
}




