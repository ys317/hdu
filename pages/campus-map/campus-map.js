Page({
  data: {
    mapImage: '/images/map/hdu-map.jpg',
    navTargets: [
      { id: 'south-gate', name: '南大门', navName: '杭州电子科技大学南大门', desc: '学校主校门', lat: 30.3135, lng: 120.3580 },
      { id: 'library', name: '校图书馆', navName: '杭州电子科技大学图书馆', desc: '校园核心地标', lat: 30.3175, lng: 120.3582 },
      { id: 'question-square', name: '问鼎广场', navName: '杭州电子科技大学问鼎广场', desc: '校园中心广场', lat: 30.3162, lng: 120.3582 },
      { id: 'building-1', name: '1教·倍仁楼', navName: '杭州电子科技大学1教·倍仁楼', desc: '公共教学大楼', lat: 30.3156, lng: 120.3598 },
      { id: 'building-6', name: '6教·信诚楼', navName: '杭州电子科技大学6教·信诚楼', desc: '科研教学大楼', lat: 30.3195, lng: 120.3570 },
      { id: 'gym', name: '体育馆', navName: '杭州电子科技大学体育馆', desc: '体育活动中心', lat: 30.3188, lng: 120.3508 },
      { id: 'lake', name: '月雅湖', navName: '杭州电子科技大学月雅湖', desc: '校园景观湖', lat: 30.3145, lng: 120.3615 },
      { id: 'food-court', name: '生活区美食城', navName: '杭州电子科技大学生活区美食城', desc: '生活配套中心', lat: 30.3228, lng: 120.3592 }
    ]
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 2 });
    }
  },

  previewMap() {
    wx.previewImage({
      current: this.data.mapImage,
      urls: [this.data.mapImage],
      fail() {
        wx.showToast({
          title: '地图加载失败',
          icon: 'none'
        });
      }
    });
  },

  goToBaiduNavigation(e) {
    const { name, navName, desc, lat, lng } = e.currentTarget.dataset;
    const latitude = Number(lat);
    const longitude = Number(lng);

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      wx.showToast({
        title: '定位信息无效',
        icon: 'none'
      });
      return;
    }

    wx.openLocation({
      latitude,
      longitude,
      name: navName || name,
      address: desc || '杭州电子科技大学',
      scale: 18,
      fail: () => {
        wx.navigateTo({
          url: `/pages/baidu-navi/baidu-navi?label=${encodeURIComponent(name)}&targetName=${encodeURIComponent(navName || name)}&address=${encodeURIComponent(desc || '杭州电子科技大学')}&lat=${latitude}&lng=${longitude}`
        });
      }
    });
  }
});
