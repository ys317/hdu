Component({
  data: {
    selected: 0,
    color: '#72829a',
    selectedColor: '#0c8cff',
    list: [
      {
        pagePath: '/pages/index/index',
        text: '首页',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath fill='%23999999' d='M512 128L128 448v448h256V640h256v256h256V448z'/%3E%3C/svg%3E",
        iconActive: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath fill='%231e3a8a' d='M512 128L128 448v448h256V640h256v256h256V448z'/%3E%3C/svg%3E"
      },
      {
        pagePath: '/pages/scenery/scenery',
        text: '风光',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath fill='%23999999' d='M896 128H128c-35 0-64 29-64 64v640c0 35 29 64 64 64h768c35 0 64-29 64-64V192c0-35-29-64-64-64zM320 320c44 0 80 36 80 80s-36 80-80 80-80-36-80-80 36-80 80-80zm576 512H128l192-256 128 160 192-224 256 320z'/%3E%3C/svg%3E",
        iconActive: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath fill='%231e3a8a' d='M896 128H128c-35 0-64 29-64 64v640c0 35 29 64 64 64h768c35 0 64-29 64-64V192c0-35-29-64-64-64zM320 320c44 0 80 36 80 80s-36 80-80 80-80-36-80-80 36-80 80-80zm576 512H128l192-256 128 160 192-224 256 320z'/%3E%3C/svg%3E"
      },
      {
        pagePath: '/pages/campus-map/campus-map',
        text: '地图',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath fill='%23999999' d='M512 64C335 64 192 207 192 384c0 240 320 576 320 576s320-336 320-576c0-177-143-320-320-320zm0 448c-71 0-128-57-128-128s57-128 128-128 128 57 128 128-57 128-128 128z'/%3E%3C/svg%3E",
        iconActive: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath fill='%231e3a8a' d='M512 64C335 64 192 207 192 384c0 240 320 576 320 576s320-336 320-576c0-177-143-320-320-320zm0 448c-71 0-128-57-128-128s57-128 128-128 128 57 128 128-57 128-128 128z'/%3E%3C/svg%3E"
      },
      {
        pagePath: '/pages/history/history',
        text: '校史',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath fill='%23999999' d='M832 128H256c-71 0-128 57-128 128v640c0 35 29 64 64 64h640c18 0 32-14 32-32s-14-32-32-32H256c-35 0-64-29-64-64s29-64 64-64h576c35 0 64-29 64-64V192c0-35-29-64-64-64zM320 256h448c18 0 32 14 32 32s-14 32-32 32H320c-18 0-32-14-32-32s14-32 32-32zm0 128h448c18 0 32 14 32 32s-14 32-32 32H320c-18 0-32-14-32-32s14-32 32-32z'/%3E%3C/svg%3E",
        iconActive: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath fill='%231e3a8a' d='M832 128H256c-71 0-128 57-128 128v640c0 35 29 64 64 64h640c18 0 32-14 32-32s-14-32-32-32H256c-35 0-64-29-64-64s29-64 64-64h576c35 0 64-29 64-64V192c0-35-29-64-64-64zM320 256h448c18 0 32 14 32 32s-14 32-32 32H320c-18 0-32-14-32-32s14-32 32-32zm0 128h448c18 0 32 14 32 32s-14 32-32 32H320c-18 0-32-14-32-32s14-32 32-32z'/%3E%3C/svg%3E"
      }
    ]
  },
  methods: {
    switchTab(e) {
      const { path, index } = e.currentTarget.dataset;
      wx.switchTab({ url: path });
      this.setData({ selected: index });
    }
  }
});
