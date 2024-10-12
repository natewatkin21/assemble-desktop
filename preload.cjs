const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  updateLastVisitedUrl: (url) => ipcRenderer.send('update-last-visited-url', url),
  onUpdateAvailable: (callback) => ipcRenderer.on('update-available', callback),
  onDownloadProgress: (callback) => ipcRenderer.on('download-progress', callback),
  onUpdateDownloaded: (callback) => ipcRenderer.on('update-downloaded', callback),
  onUpdateError: (callback) => ipcRenderer.on('update-error', callback),
  startDownload: () => ipcRenderer.send('start-download'),
  quitAndInstall: () => ipcRenderer.send('quit-and-install'),
});