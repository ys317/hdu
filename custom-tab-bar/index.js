Component({
  data: {
    selected: 0,
    color: '#72829a',
    selectedColor: '#0c8cff',
    list: [
      {
        pagePath: '/pages/index/index',
        text: '首页',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath fill='%2372829a' d='M512 85.3L128 416v437.3h256V618.7h256V853.3h256V416L512 85.3zm320 682.7H682.7V533.3H341.3v234.7H192V448l320-277.3L832 448v320z'/%3E%3Crect fill='%2372829a' x='480' y='298.7' width='64' height='64' rx='32'/%3E%3C/svg%3E",
        iconActive: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cdefs%3E%3ClinearGradient id='homeGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2320d5ff'/%3E%3Cstop offset='100%25' stop-color='%230c8cff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23homeGrad)' opacity='0.15' d='M512 85.3L128 416v437.3h768V416L512 85.3z'/%3E%3Cpath fill='url(%23homeGrad)' d='M512 85.3L128 416v437.3h256V618.7h256V853.3h256V416L512 85.3zm320 682.7H682.7V533.3H341.3v234.7H192V448l320-277.3L832 448v320z'/%3E%3C/svg%3E"
      },
      {
        pagePath: '/pages/scenery/scenery',
        text: '风光',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath fill='%2372829a' d='M853.3 170.7H170.7C123.7 170.7 85.3 209.1 85.3 256v512C85.3 814.9 123.7 853.3 170.7 853.3h682.7c47 0 85.3-38.4 85.3-85.3V256c0-46.9-38.3-85.3-85.3-85.3zm0 597.3H170.7V256h682.7v512z'/%3E%3Ccircle fill='%2372829a' cx='341.3' cy='384' r='85.3'/%3E%3Cpath fill='%2372829a' d='M213.3 704h597.3L640 448l-170.7 213.3-106.7-128L213.3 704z'/%3E%3C/svg%3E",
        iconActive: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cdefs%3E%3ClinearGradient id='sceneryGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2320d5ff'/%3E%3Cstop offset='100%25' stop-color='%230c8cff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23sceneryGrad)' opacity='0.15' d='M170.7 170.7h682.7c47 0 85.3 38.4 85.3 85.3v512c0 47-38.4 85.3-85.3 85.3H170.7C123.7 853.3 85.3 814.9 85.3 768V256c0-47 38.4-85.3 85.3-85.3z'/%3E%3Cpath fill='url(%23sceneryGrad)' d='M853.3 170.7H170.7C123.7 170.7 85.3 209.1 85.3 256v512C85.3 814.9 123.7 853.3 170.7 853.3h682.7c47 0 85.3-38.4 85.3-85.3V256c0-46.9-38.3-85.3-85.3-85.3zm0 597.3H170.7V256h682.7v512z'/%3E%3Ccircle fill='url(%23sceneryGrad)' cx='341.3' cy='384' r='85.3'/%3E%3Cpath fill='url(%23sceneryGrad)' d='M213.3 704h597.3L640 448l-170.7 213.3-106.7-128L213.3 704z'/%3E%3C/svg%3E"
      },
      {
        pagePath: '/pages/campus-map/campus-map',
        text: '地图',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath fill='%2372829a' d='M512 85.3C322.1 85.3 170.7 236.8 170.7 426.7c0 234.7 341.3 512 341.3 512s341.3-277.3 341.3-512C853.3 236.8 701.9 85.3 512 85.3zm0 512c-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128-57.3 128-128 128z'/%3E%3C/svg%3E",
        iconActive: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cdefs%3E%3ClinearGradient id='mapGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2320d5ff'/%3E%3Cstop offset='100%25' stop-color='%230c8cff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23mapGrad)' opacity='0.15' d='M512 85.3C322.1 85.3 170.7 236.8 170.7 426.7c0 234.7 341.3 512 341.3 512s341.3-277.3 341.3-512C853.3 236.8 701.9 85.3 512 85.3z'/%3E%3Cpath fill='url(%23mapGrad)' d='M512 85.3C322.1 85.3 170.7 236.8 170.7 426.7c0 234.7 341.3 512 341.3 512s341.3-277.3 341.3-512C853.3 236.8 701.9 85.3 512 85.3zm0 512c-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128-57.3 128-128 128z'/%3E%3C/svg%3E"
      },
      {
        pagePath: '/pages/history/history',
        text: '校史',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath fill='%2372829a' d='M768 128H256c-70.7 0-128 57.3-128 128v512c0 70.7 57.3 128 128 128h512c70.7 0 128-57.3 128-128V256c0-70.7-57.3-128-128-128zm64 640c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v512z'/%3E%3Cpath fill='%2372829a' d='M298.7 298.7h426.7v64H298.7zm0 170.7h426.7v64H298.7zm0 170.7h298.7v64H298.7z'/%3E%3C/svg%3E",
        iconActive: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cdefs%3E%3ClinearGradient id='historyGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2320d5ff'/%3E%3Cstop offset='100%25' stop-color='%230c8cff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23historyGrad)' opacity='0.15' d='M256 128h512c70.7 0 128 57.3 128 128v512c0 70.7-57.3 128-128 128H256c-70.7 0-128-57.3-128-128V256c0-70.7 57.3-128 128-128z'/%3E%3Cpath fill='url(%23historyGrad)' d='M768 128H256c-70.7 0-128 57.3-128 128v512c0 70.7 57.3 128 128 128h512c70.7 0 128-57.3 128-128V256c0-70.7-57.3-128-128-128zm64 640c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v512z'/%3E%3Cpath fill='url(%23historyGrad)' d='M298.7 298.7h426.7v64H298.7zm0 170.7h426.7v64H298.7zm0 170.7h298.7v64H298.7z'/%3E%3C/svg%3E"
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
