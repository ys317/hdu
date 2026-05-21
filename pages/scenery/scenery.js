Page({
  data: {
    currentTab: 0,
    currentBuildingTab: 'all',
    tabs: [
      { id: 0, name: '全部' },
      { id: 1, name: '建筑' },
      { id: 2, name: '风景' },
      { id: 3, name: '生活' }
    ],
    buildingTabs: [
      { id: 'all', name: '全部建筑' },
      { id: 'library', name: '图书馆阅览室' },
      { id: 'teaching', name: '教学楼' }
    ],
    photos: [
      { id: 1, url: '/images/scenery/library-reading-01.jpg', desc: '图书馆自习室 · 沉浸空间', type: 1, building: 'library' },
      { id: 2, url: '/images/scenery/library-reading-02.jpg', desc: '图书馆阅览室 · 阅览空间', type: 1, building: 'library' },
      { id: 3, url: '/images/scenery/teaching-building-01.jpg', desc: '教学楼 · 走廊空间', type: 1, building: 'teaching' },
      { id: 4, url: '/images/scenery/teaching-building-02.jpg', desc: '教学楼 · 外立面视角', type: 1, building: 'teaching' },
      { id: 5, url: '/images/scenery/teaching-building-03.jpg', desc: '教学楼 · 室内细节', type: 1, building: 'teaching' },
      { id: 6, url: '/images/scenery/teaching-building-04.jpg', desc: '教学楼 · 入口场景', type: 1, building: 'teaching' },
      { id: 7, url: '/images/scenery/yueya-lake-01.jpg', desc: '月雅湖景区 · 湖畔步道', type: 2, building: '' },
      { id: 8, url: '/images/scenery/yueya-lake-02.jpg', desc: '月雅湖景区 · 湖面景致', type: 2, building: '' },
      { id: 9, url: '/images/scenery/dormitory-01.jpg', desc: '生活区宿舍楼 · 组团立面', type: 3, building: '' },
      { id: 10, url: '/images/scenery/dormitory-02.jpg', desc: '生活区宿舍楼 · 生活配套', type: 3, building: '' },
      { id: 11, url: '/images/scenery/dormitory-03.jpg', desc: '生活区宿舍楼 · 居住空间', type: 3, building: '' },
      { id: 12, url: '/images/scenery/food-court-01.jpg', desc: '生活区美食城 · 用餐空间', type: 3, building: '' },
      { id: 13, url: '/images/scenery/food-court-02.jpg', desc: '生活区美食城 · 餐饮街区', type: 3, building: '' },
      { id: 14, url: '/images/scenery/food-court-03.jpg', desc: '生活区美食城 · 日常补给', type: 3, building: '' },
      { id: 15, url: '/images/scenery/food-court-04.jpg', desc: '生活区美食城 · 就餐休憩区域', type: 3, building: '' },
      { id: 16, url: '/images/scenery/food-court-05.jpg', desc: '生活区美食城 · 晚间氛围', type: 3, building: '' }
    ],
    filteredPhotos: []
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 1 });
    }
  },
  onLoad() {
    this.refreshPhotos();
  },
  switchTab(e) {
    const id = e.currentTarget.dataset.id;
    const nextState = { currentTab: id };
    if (id !== 1) {
      nextState.currentBuildingTab = 'all';
    }
    this.setData(nextState, () => {
      this.refreshPhotos();
    });
  },
  switchBuildingTab(e) {
    const id = e.currentTarget.dataset.id;
    this.setData({ currentBuildingTab: id }, () => {
      this.refreshPhotos();
    });
  },
  refreshPhotos() {
    const { currentTab, currentBuildingTab, photos } = this.data;
    const filtered = photos.filter(photo => {
      if (currentTab === 0) {
        return true;
      }
      if (photo.type !== currentTab) {
        return false;
      }
      if (currentTab === 1 && currentBuildingTab !== 'all') {
        return photo.building === currentBuildingTab;
      }
      return true;
    });
    this.setData({ filteredPhotos: filtered });
  },
  previewImage(e) {
    const url = e.currentTarget.dataset.url;
    const urls = this.data.filteredPhotos.map(p => p.url);
    wx.previewImage({
      current: url,
      urls,
      fail() {
        wx.showToast({
          title: '图片加载失败',
          icon: 'none'
        });
      }
    });
  }
});
