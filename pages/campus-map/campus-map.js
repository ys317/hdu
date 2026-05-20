Page({
  data: {
    longitude: 120.357,
    latitude: 30.317,
    markers: [
      { id: 1, longitude: 120.357, latitude: 30.317, title: '东门', desc: '学校正门入口', iconPath: '/images/marker.png', width: 30, height: 30 },
      { id: 2, longitude: 120.358, latitude: 30.318, title: '图书馆', desc: '校园文化地标' },
      { id: 3, longitude: 120.356, latitude: 30.316, title: '第一教学楼', desc: '主要教学场所' },
      { id: 4, longitude: 120.359, latitude: 30.319, title: '体育馆', desc: '体育活动中心' },
      { id: 5, longitude: 120.355, latitude: 30.315, title: '青山湖', desc: '校园风景湖' }
    ]
  },
  onMarkerTap(e) {
    const marker = this.data.markers.find(m => m.id === e.markerId);
    wx.showModal({ title: marker.title, content: marker.desc, showCancel: false });
  },
  moveToMarker(e) {
    const m = e.currentTarget.dataset.marker;
    this.setData({ longitude: m.longitude, latitude: m.latitude });
  }
});
