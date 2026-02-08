let galleryData = [];

async function loadGalleryData() {
    try {
        const response = await fetch('gallery-data.json');
        galleryData = await response.json();
        renderGallery();
    } catch (error) {
        console.error('加载作品数据失败:', error);
        alert('加载作品数据失败，请刷新页面重试。');
    }
}

const tutorialData = [
    {
        id: 1,
        title: '认识编织工具',
        description: '了解编织所需的基本工具，包括钩针、毛线、剪刀等。',
        content: `
            <h3>编织工具介绍</h3>
            <p><strong>钩针：</strong>钩针是编织的主要工具，有不同的尺寸，通常用毫米表示。新手建议从2.5mm-4.0mm的钩针开始。</p>
            <p><strong>毛线：</strong>毛线有不同的材质和粗细。棉线适合夏天用品，羊毛线适合冬天用品。新手建议选择中等粗细的毛线。</p>
            <p><strong>剪刀：</strong>用于剪断毛线，选择锋利的小剪刀即可。</p>
            <p><strong>记号扣：</strong>用于标记每一行的开始，防止数错针数。</p>
        `
    },
    {
        id: 2,
        title: '基础针法学习',
        description: '学习最基础的编织针法，包括锁针、短针、长针等。',
        content: `
            <h3>基础针法详解</h3>
            <p><strong>锁针（ch）：</strong>最基础的针法，用于起针和连接。将线绕在钩针上，穿过线圈形成新的线圈。</p>
            <p><strong>短针（sc）：</strong>最常用的针法，用于制作紧密的织物。将钩针插入针目，钩线拉出，再次钩线穿过两个线圈。</p>
            <p><strong>中长针（hdc）：</strong>介于短针和长针之间的针法。绕线，插入针目钩线拉出，再次钩线穿过三个线圈。</p>
            <p><strong>长针（dc）：</strong>用于制作较松散的织物。绕线两次，插入针目钩线拉出，分两次穿过线圈。</p>
        `
    },
    {
        id: 3,
        title: '如何看懂图解',
        description: '学习如何阅读编织图解，这是制作作品的关键技能。',
        content: `
            <h3>图解阅读技巧</h3>
            <p><strong>符号图：</strong>用不同的符号代表不同的针法，通常会有图例说明。从右下角开始，按逆时针方向阅读。</p>
            <p><strong>文字图解：</strong>用文字描述每一行的针法。例如：第1行：起10针，从第2针开始钩短针。</p>
            <p><strong>数字标注：</strong>通常表示针数或行数，仔细阅读说明部分。</p>
            <p><strong>缩写说明：</strong>常见缩写：ch-锁针，sc-短针，dc-长针，slip-引拔针。</p>
        `
    },
    {
        id: 4,
        title: '常见问题解答',
        description: '新手常遇到的问题及解决方法。',
        content: `
            <h3>常见问题</h3>
            <p><strong>Q: 为什么我的针数总是不对？</strong><br>A: 记得在每行的开头和结尾数针，使用记号扣标记每行的开始。</p>
            <p><strong>Q: 如何选择合适的钩针？</strong><br>A: 根据毛线的标签推荐选择钩针尺寸，也可以根据个人手感调整。</p>
            <p><strong>Q: 织物为什么歪歪扭扭？</strong><br>A: 可能是每行的针数不一致，或者换针时没有正确处理。保持每行针数一致很重要。</p>
            <p><strong>Q: 如何收尾？</strong><br>A: 最后一行完成后，剪断毛线，将线头穿过最后一个线圈拉紧，藏好线头。</p>
        `
    }
];

const patternsData = [
    {
        id: 1,
        title: '简单花朵杯垫',
        description: '适合新手的第一个作品，只需掌握基础针法即可完成。',
        difficulty: 1,
        materials: '棉线（两种颜色）、3.0mm钩针',
        content: `
            <h3>简单花朵杯垫图解</h3>
            <p><strong>材料：</strong>棉线两种颜色（粉色和绿色）、3.0mm钩针</p>
            <p><strong>制作步骤：</strong></p>
            <p>1. 用粉色线起6针锁针，圈成环</p>
            <p>2. 第1圈：在环里钩12个短针</p>
            <p>3. 第2圈：每针加针，共24针</p>
            <p>4. 第3圈：隔一针加一针，共36针</p>
            <p>5. 换绿色线，钩一圈短针作为边缘</p>
            <p>6. 收尾，藏好线头</p>
            <p><strong>小贴士：</strong>保持每圈针数准确，花朵会更圆整。</p>
        `
    },
    {
        id: 2,
        title: '可爱小挂件',
        description: '小巧可爱的挂件，可以挂在包包或钥匙上。',
        difficulty: 1,
        materials: '毛线、2.5mm钩针、填充棉',
        content: `
            <h3>可爱小挂件图解</h3>
            <p><strong>材料：</strong>毛线、2.5mm钩针、填充棉、钥匙扣环</p>
            <p><strong>制作步骤：</strong></p>
            <p>1. 起6针锁针，圈成环</p>
            <p>2. 第1圈：钩6个短针</p>
            <p>3. 第2圈：每针加针，共12针</p>
            <p>4. 第3圈：隔一针加一针，共18针</p>
            <p>5. 第4-6圈：不加不减钩18针</p>
            <p>6. 填入填充棉</p>
            <p>7. 第7圈：隔两针减一针，共12针</p>
            <p>8. 收尾，留长线缝合</p>
            <p>9. 缝上钥匙扣环</p>
        `
    },
    {
        id: 3,
        title: '小花朵发圈',
        description: '用花朵装饰的发圈，简单又实用。',
        difficulty: 2,
        materials: '毛线、3.0mm钩针、橡皮筋',
        content: `
            <h3>小花朵发圈图解</h3>
            <p><strong>材料：</strong>毛线、3.0mm钩针、橡皮筋</p>
            <p><strong>花朵部分：</strong></p>
            <p>1. 起5针锁针，圈成环</p>
            <p>2. 第1圈：钩10个短针</p>
            <p>3. 第2圈：钩5个花瓣（每个花瓣：3锁针，在下一针钩短针）</p>
            <p>4. 收尾，留线缝合</p>
            <p><strong>组装：</strong></p>
            <p>5. 将花朵缝在橡皮筋上</p>
            <p>6. 可以缝多个花朵增加层次感</p>
        `
    },
    {
        id: 4,
        title: '迷你小钱包',
        description: '可以放零钱的小钱包，实用又可爱。',
        difficulty: 2,
        materials: '毛线、3.0mm钩针、纽扣',
        content: `
            <h3>迷你小钱包图解</h3>
            <p><strong>材料：</strong>毛线、3.0mm钩针、纽扣</p>
            <p><strong>钱包主体：</strong></p>
            <p>1. 起20针锁针</p>
            <p>2. 第1行：从第2针开始钩19个短针</p>
            <p>3. 第2-15行：不加不减钩19个短针</p>
            <p>4. 第16行：钩7个短针，7个锁针（扣眼），5个短针</p>
            <p>5. 第17-30行：不加不减钩19个短针</p>
            <p>6. 对折，缝合两侧</p>
            <p>7. 在合适位置缝上纽扣</p>
        `
    }
];

function renderGallery(filter = 'all') {
    const galleryGrid = document.getElementById('galleryGrid');
    
    let filteredData = galleryData;
    if (filter !== 'all') {
        filteredData = galleryData.filter(item => item.tags.includes(filter));
    }
    
    galleryGrid.innerHTML = filteredData.map(item => `
        <div class="card" onclick="openModal('gallery', ${item.id})">
            <div class="card-image">
                <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-description">${item.description}</p>
                <div>
                    ${item.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderTutorial() {
    const tutorialGrid = document.getElementById('tutorialGrid');
    tutorialGrid.innerHTML = tutorialData.map(item => `
        <div class="card" onclick="openModal('tutorial', ${item.id})">
            <div class="card-image">📚</div>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-description">${item.description}</p>
            </div>
        </div>
    `).join('');
}

function renderPatterns() {
    const patternsGrid = document.getElementById('patternsGrid');
    patternsGrid.innerHTML = patternsData.map(item => `
        <div class="card" onclick="openModal('pattern', ${item.id})">
            <div class="card-image">🧵</div>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-description">${item.description}</p>
                <div class="pattern-difficulty">
                    ${Array(5).fill(0).map((_, i) => 
                        `<span class="star">${i < item.difficulty ? '★' : '☆'}</span>`
                    ).join('')}
                </div>
                <p><small>材料：${item.materials}</small></p>
            </div>
        </div>
    `).join('');
}

function openModal(type, id) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    let content = '';
    if (type === 'gallery') {
        const item = galleryData.find(d => d.id === id);
        content = `
            <img src="${item.image}" alt="${item.title}" style="width: 100%; max-height: 400px; object-fit: contain; border-radius: 10px; margin-bottom: 1rem;">
            <h2>${item.title}</h2>
            <p style="margin: 1rem 0;">${item.description}</p>
            <div>
                ${item.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
            </div>
        `;
    } else if (type === 'tutorial') {
        const item = tutorialData.find(d => d.id === id);
        content = `
            <h2>${item.title}</h2>
            <div style="margin-top: 1rem;">${item.content}</div>
        `;
    } else if (type === 'pattern') {
        const item = patternsData.find(d => d.id === id);
        content = `
            <h2>${item.title}</h2>
            <div style="margin-top: 1rem;">${item.content}</div>
        `;
    }
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    loadGalleryData();
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            renderGallery(filter);
        });
    });
    
    const categoryCards = document.querySelectorAll('.category-card');
    const basicsCard = document.querySelector('.basics-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const link = config.feishuLinks[category];
            
            if (link) {
                window.open(link, '_blank');
            } else {
                alert('请先在config.js中设置该类别的飞书链接！\n\n找到config.feishuLinks对象，填入对应的飞书文档分享链接。');
            }
        });
    });
    
    if (basicsCard) {
        basicsCard.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const link = config.feishuLinks[category];
            
            if (link) {
                window.open(link, '_blank');
            } else {
                alert('请先在config.js中设置钩针基础知识的飞书链接！\n\n找到config.feishuLinks.basics，填入对应的飞书文档分享链接。');
            }
        });
    }
});