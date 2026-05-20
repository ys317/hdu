Page({
  data: {
    longitude: 120.3582,
    latitude: 30.3175,
    currentCategory: 0,
    categories: [
      { id: 0, name: '全部' },
      { id: 1, name: '地标校门' },
      { id: 2, name: '教学科研' },
      { id: 3, name: '生活文体' }
    ],
    allMarkers: [
      // 地标校门 (category 1)
      { id: 1, longitude: 120.3580, latitude: 30.3135, title: '南大门', desc: '学校主校门，气势恢宏。', category: 1 },
      { id: 2, longitude: 120.3582, latitude: 30.3175, title: '校图书馆', desc: '学校标志性建筑，造型如展开的书卷。', category: 1 },
      { id: 3, longitude: 120.3582, latitude: 30.3162, title: '问鼎广场', desc: '校园中心广场，立有代表学术高峰的问鼎石。', category: 1 },
      { id: 4, longitude: 120.3645, latitude: 30.3170, title: '东门', desc: '学校东侧正门，靠近文泽北路。', category: 1 },
      { id: 5, longitude: 120.3635, latitude: 30.3142, title: '东南门', desc: '连接交通便利的地铁文泽路站出入口。', category: 1 },
      { id: 6, longitude: 120.3615, latitude: 30.3145, title: '月雅湖', desc: '校园美景湖，湖畔常年树影婆娑、白鹭栖息。', category: 1 },

      // 教学科研 (category 2)
      { id: 7, longitude: 120.3538, latitude: 30.3142, title: '行政大楼', desc: '学校主要党政机关和行政办公服务场所。', category: 2 },
      { id: 8, longitude: 120.3598, latitude: 30.3156, title: '1教 · 倍仁楼', desc: '重要公共教学和实验大楼。', category: 2 },
      { id: 9, longitude: 120.3628, latitude: 30.3148, title: '科技馆', desc: '学术交流、重大科技成果展示以及展览场所。', category: 2 },
      { id: 10, longitude: 120.3570, latitude: 30.3195, title: '6教 · 信诚楼', desc: '计算机、软件学院等专业科研与教学大楼。', category: 2 },
      { id: 11, longitude: 120.3556, latitude: 30.3160, title: '2教 · 信义楼', desc: '理学院及电子信息类专业日常教学基地。', category: 2 },

      // 生活运动 (category 3)
      { id: 12, longitude: 120.3508, latitude: 30.3188, title: '体育馆', desc: '举办大型体育赛事、典礼及室内球类活动中心。', category: 3 },
      { id: 13, longitude: 120.3618, latitude: 30.3182, title: '学生活动中心', desc: '学生组织办公、社团沙龙及文艺演出集聚地。', category: 3 },
      { id: 14, longitude: 120.3592, latitude: 30.3228, title: '生活区美食城', desc: '汇聚一、三食堂及商业美食街，美食种类丰富。', category: 3 },
      { id: 15, longitude: 120.3525, latitude: 30.3144, title: '休读园', desc: '环境清幽的小花园，是师生清晨静读的好地方。', category: 3 }
    ],
    markers: [],
    filteredLocations: []
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 2 });
    }
  },

  onLoad() {
    this.updateMarkers(0);
  },

  switchCategory(e) {
    const catId = parseInt(e.currentTarget.dataset.id, 10);
    this.updateMarkers(catId);
  },

  updateMarkers(catId) {
    const filtered = catId === 0 
      ? this.data.allMarkers 
      : this.data.allMarkers.filter(m => m.category === catId);

    const mapMarkers = filtered.map(m => ({
      id: m.id,
      longitude: m.longitude,
      latitude: m.latitude,
      title: m.title,
      desc: m.desc,
      category: m.category,
      iconPath: '/images/marker.png',
      width: 28,
      height: 28,
      callout: {
        content: m.title,
        color: '#1e3a8a',
        fontSize: 11,
        borderRadius: 6,
        bgColor: '#ffffff',
        padding: 6,
        display: 'ALWAYS'
      }
    }));

    this.setData({
      currentCategory: catId,
      markers: mapMarkers,
      filteredLocations: mapMarkers
    });
  },

  onMarkerTap(e) {
    const marker = this.data.allMarkers.find(m => m.id === e.detail.markerId || m.id === e.markerId);
    if (marker) {
      wx.showModal({
        title: marker.title,
        content: marker.desc,
        showCancel: false,
        confirmColor: '#1e3a8a'
      });
    }
  },

  moveToMarker(e) {
    const m = e.currentTarget.dataset.marker;
    this.setData({
      longitude: m.longitude,
      latitude: m.latitude
    });
    // 可以通过 mapContext 使得地图平移缩放
    const mapCtx = wx.createMapContext('campusMap');
    mapCtx.moveToLocation({
      longitude: m.longitude,
      latitude: m.latitude
    });
  }
});
