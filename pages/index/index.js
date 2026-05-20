Page({
  data: {
    banners: [
      { id: 1, url: '/images/campus1.jpg', title: '下沙校区·东门' },
      { id: 2, url: '/images/campus2.jpg', title: '图书馆' },
      { id: 3, url: '/images/campus3.jpg', title: '樱花大道' },
      { id: 4, url: '/images/campus4.jpg', title: '青山湖校区' }
    ],
    news: [
      { id: 1, title: '杭电学子在国际大赛中再创佳绩', date: '2024-03-15', cover: '/images/news1.jpg' },
      { id: 2, title: '校园樱花季正式开启', date: '2024-03-10', cover: '/images/news2.jpg' },
      { id: 3, title: '新一届迎新晚会精彩纷呈', date: '2024-03-05', cover: '/images/news3.jpg' }
    ]
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 0 });
    }
  },
  goToPage(e) {
    wx.switchTab({ url: e.currentTarget.dataset.url });
  },
  goToDetail(e) {
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}`
    });
  }
});
