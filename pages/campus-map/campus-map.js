Page({
  data: {
    // Current active tab: 0 for hand-drawn map, 1 for live electronic map
    currentTab: 1, 
    mapImage: '/images/map/hdu-map.jpg',
    
    // Coordinates (GCJ02) and metadata for campus landmarks
    navTargets: [
      { id: 'south-gate', name: '南大门', category: 'landmark', navName: '杭州电子科技大学南大门', desc: '学校主校门，气势恢宏。', lat: 30.3103, lng: 120.34332 },
      { id: 'library', name: '校图书馆', category: 'teaching', navName: '杭州电子科技大学图书馆', desc: '校园核心地标，集阅读、自习与学术交流于一体。', lat: 30.31528, lng: 120.34337 },
      { id: 'question-square', name: '问鼎广场', category: 'landmark', navName: '杭州电子科技大学问鼎广场', desc: '校园中心广场，矗立着学校标志性“问鼎”雕塑。', lat: 30.31316, lng: 120.34331 },
      { id: 'building-7', name: '7教·信博楼', category: 'teaching', navName: '杭州电子科技大学7教·信博楼', desc: '学校标志性的第七教学楼（信博楼），配备先进的计算机教学实验室与多媒体教室。', lat: 30.31452, lng: 120.34445 },
      { id: 'building-6', name: '6教·信诚楼', category: 'teaching', navName: '杭州电子科技大学6教·信诚楼', desc: '主要的科研与实验教学楼，充满科技研究氛围。', lat: 30.31432, lng: 120.34209 },
      { id: 'gym', name: '体育馆', category: 'sports', navName: '杭州电子科技大学体育馆', desc: '学校体育运动中心，形似飞碟，承办多项大型赛事活动。', lat: 30.31504, lng: 120.34007 },
      { id: 'lake', name: '月雅湖', category: 'landmark', navName: '杭州电子科技大学月雅湖', desc: '风景如画的校园内湖，绿树环绕，是漫步休闲的好去处。', lat: 30.31048, lng: 120.34422 },
      { id: 'canteen-3', name: '三餐厅', category: 'living', navName: '杭州电子科技大学三餐厅', desc: '生活区核心食堂之一，提供各色风味小吃与丰富餐饮选择。', lat: 30.31641, lng: 120.34456 },
      { id: 'dormitory-4', name: '神秘的寝室四号楼', category: 'living', navName: '杭州电子科技大学神秘的寝室四号楼', desc: '充满神秘色彩的学生宿舍四号楼，有着许多校园传说。据说有传奇人物余胡在其中出没。', lat: 30.31628, lng: 120.3424 }
    ],

    // Search and Category UI States
    searchQuery: '',
    selectedCategory: 'all',
    categories: [
      { id: 'all', name: '全部' },
      { id: 'teaching', name: '教学' },
      { id: 'living', name: '生活' },
      { id: 'sports', name: '运动' },
      { id: 'landmark', name: '地标' }
    ],

    // Map configuration
    mapCenter: {
      lat: 30.31528,
      lng: 120.34337
    },
    mapScale: 16,
    userLocation: null,
    filteredMarkers: [],
    selectedLandmark: null
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 2 });
    }
  },

  onLoad() {
    this.initUserLocation();
    this.updateMarkers();
  },

  // Switch between Plane Map and Live Map tabs
  switchViewTab(e) {
    const tab = parseInt(e.currentTarget.dataset.tab, 10);
    this.setData({
      currentTab: tab,
      selectedLandmark: null
    }, () => {
      if (tab === 1) {
        this.initUserLocation();
        this.updateMarkers();
      }
    });
  },

  // Toggle image full screen preview (for Plane Map)
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

  // Try to retrieve the user's real-time GCJ02 coordinates
  initUserLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        const { latitude, longitude } = res;
        this.setData({
          userLocation: { lat: latitude, lng: longitude }
        }, () => {
          this.calculateDistances();
        });
      },
      fail: (err) => {
        console.warn('获取定位授权失败，已启用默认展示位置', err);
      }
    });
  },

  // Pan map back to user coordinates
  moveToUserLocation() {
    const mapCtx = wx.createMapContext('campusMap');
    mapCtx.moveToLocation({
      success: () => {
        // Recheck coordinates to calculate updated distances
        wx.getLocation({
          type: 'gcj02',
          success: (res) => {
            this.setData({
              userLocation: { lat: res.latitude, lng: res.longitude }
            }, () => {
              this.calculateDistances();
              wx.showToast({
                title: '已定位到当前位置',
                icon: 'none'
              });
            });
          }
        });
      },
      fail: () => {
        wx.showModal({
          title: '定位提示',
          content: '请检查您的手机定位服务或微信定位授权是否开启',
          showCancel: false
        });
      }
    });
  },

  // Calculate straight-line distances using Haversine formula
  getDistance(lat1, lng1, lat2, lng2) {
    const radLat1 = lat1 * Math.PI / 180.0;
    const radLat2 = lat2 * Math.PI / 180.0;
    const a = radLat1 - radLat2;
    const b = (lng1 * Math.PI / 180.0) - (lng2 * Math.PI / 180.0);
    let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
      Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137; // Earth's radius in kilometers
    s = Math.round(s * 10000) / 10000;
    return s;
  },

  calculateDistances() {
    const { userLocation, navTargets, selectedLandmark } = this.data;
    if (!userLocation) return;

    const updatedTargets = navTargets.map(item => {
      const d = this.getDistance(userLocation.lat, userLocation.lng, item.lat, item.lng);
      let distanceText = '';
      if (d < 1) {
        distanceText = `${Math.round(d * 1000)}米`;
      } else {
        distanceText = `${d.toFixed(2)}公里`;
      }
      return { ...item, distance: d, distanceText };
    });

    let updatedSelected = null;
    if (selectedLandmark) {
      const found = updatedTargets.find(t => t.id === selectedLandmark.id);
      if (found) {
        updatedSelected = found;
      }
    }

    this.setData({
      navTargets: updatedTargets,
      selectedLandmark: updatedSelected || selectedLandmark
    }, () => {
      this.updateMarkers();
    });
  },

  // Filter landmarks and format them as Map Component Markers
  updateMarkers() {
    const { navTargets, searchQuery, selectedCategory } = this.data;
    const query = searchQuery.trim().toLowerCase();

    const filtered = navTargets.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = !query || item.name.toLowerCase().includes(query) || (item.desc && item.desc.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });

    const markers = filtered.map((item, index) => {
      return {
        id: index,
        latitude: item.lat,
        longitude: item.lng,
        title: item.name,
        iconPath: '/images/marker.png',
        width: 32,
        height: 32,
        customData: item, // Bind original object for lookup on click
        callout: {
          content: item.name,
          color: '#ffffff',
          fontSize: 12,
          borderRadius: 8,
          bgColor: '#0c8cff',
          padding: 6,
          display: 'BYCLICK' // Shown when clicked
        }
      };
    });

    this.setData({
      filteredMarkers: markers
    });
  },

  // Search input handler
  onSearchInput(e) {
    const val = e.detail.value;
    this.setData({
      searchQuery: val
    }, () => {
      this.updateMarkers();
    });
  },

  // Clear search input
  onClearSearch() {
    this.setData({
      searchQuery: ''
    }, () => {
      this.updateMarkers();
    });
  },

  // Category filter select handler
  onCategorySelect(e) {
    const categoryId = e.currentTarget.dataset.id;
    this.setData({
      selectedCategory: categoryId,
      selectedLandmark: null // Close detail card when changing categories
    }, () => {
      this.updateMarkers();
    });
  },

  // Marker tap handler
  onMarkerTap(e) {
    const markerId = e.detail.markerId;
    const marker = this.data.filteredMarkers.find(m => m.id === markerId);
    if (marker && marker.customData) {
      const landmark = marker.customData;
      const categoryObj = this.data.categories.find(c => c.id === landmark.category);
      landmark.categoryName = categoryObj ? categoryObj.name + '地标' : '校园地标';

      this.setData({
        selectedLandmark: landmark,
        mapCenter: {
          lat: landmark.lat,
          lng: landmark.lng
        },
        mapScale: 17
      });
    }
  },

  // Close details drawer
  closeDrawer() {
    this.setData({
      selectedLandmark: null
    });
  },

}
);
