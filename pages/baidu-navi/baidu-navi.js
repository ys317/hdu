Page({
  data: {
    label: '',
    targetName: '',
    address: '',
    latitude: null,
    longitude: null,
    loading: true,
    error: ''
  },

  onLoad(options) {
    const label = decodeURIComponent(options.label || '目标地点');
    const targetName = decodeURIComponent(options.targetName || label);
    const address = decodeURIComponent(options.address || '杭州电子科技大学');
    const latitude = Number(options.lat);
    const longitude = Number(options.lng);

    this.setData({
      label,
      targetName,
      address,
      latitude,
      longitude
    });

    wx.setNavigationBarTitle({
      title: `${label}导航`
    });

    this.openLocation();
  },

  openLocation() {
    const { targetName, address, latitude, longitude } = this.data;

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      this.setData({
        loading: false,
        error: '定位参数无效'
      });
      return;
    }

    wx.openLocation({
      latitude,
      longitude,
      name: targetName,
      address,
      scale: 18,
      fail: () => {
        this.setData({
          loading: false,
          error: '当前设备无法直接打开地图，请重试。'
        });
        wx.showToast({
          title: '打开地图失败',
          icon: 'none'
        });
      }
    });
  },

  retryOpen() {
    this.setData({
      loading: true,
      error: ''
    });
    this.openLocation();
  }
});
