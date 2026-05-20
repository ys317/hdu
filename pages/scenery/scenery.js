Page({
  data: {
    currentTab: 0,
    tabs: [
      { id: 0, name: '全部' },
      { id: 1, name: '建筑' },
      { id: 2, name: '风景' },
      { id: 3, name: '生活' }
    ],
    photos: [
      { id: 1, url: '/images/p1.jpg', desc: '图书馆阅览室', type: 1 },
      { id: 2, url: '/images/p2.jpg', desc: '行政大楼', type: 1 },
      { id: 3, url: '/images/p3.jpg', desc: '1教 · 倍仁楼', type: 1 },
      { id: 4, url: '/images/p4.jpg', desc: '月雅湖景区', type: 2 },
      { id: 5, url: '/images/p5.jpg', desc: '生活区宿舍楼', type: 3 },
      { id: 6, url: '/images/p6.jpg', desc: '生活区美食城', type: 3 }
    ],
    filteredPhotos: []
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 1 });
    }
  },
  onLoad() {
    this.setData({ filteredPhotos: this.data.photos });
  },
  switchTab(e) {
    const id = e.currentTarget.dataset.id;
    const filtered = id === 0 
      ? this.data.photos 
      : this.data.photos.filter(p => p.type === id);
    this.setData({ currentTab: id, filteredPhotos: filtered });
  },
  previewImage(e) {
    const url = e.currentTarget.dataset.url;
    const urls = this.data.filteredPhotos.map(p => p.url);
    wx.previewImage({ current: url, urls });
  }
});
