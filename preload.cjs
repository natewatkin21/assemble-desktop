const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
 // Existing methods
 updateLastVisitedUrl: (url) => ipcRenderer.send('update-last-visited-url', url),
 onUpdateAvailable: (callback) => ipcRenderer.on('update-available', callback),
 onDownloadProgress: (callback) => ipcRenderer.on('download-progress', callback),
 onUpdateDownloaded: (callback) => ipcRenderer.on('update-downloaded', callback),
 onUpdateError: (callback) => ipcRenderer.on('update-error', callback),
 startDownload: () => ipcRenderer.send('start-download'),
 quitAndInstall: () => ipcRenderer.send('quit-and-install'),
 navigateBack: () => ipcRenderer.send('nav-back'),
 onShowNavigation: (callback) => ipcRenderer.on('show-navigation', callback),
 onHideNavigation: (callback) => ipcRenderer.on('hide-navigation', callback),
 
 // Notification methods
 getNotificationPermission: () => ipcRenderer.invoke('get-notification-permission'),
 requestNotificationPermission: () => ipcRenderer.invoke('request-notification-permission'),
 showNotification: (type, data) => ipcRenderer.invoke('show-notification', { type, data }),
 getNotificationsEnabled: () => ipcRenderer.invoke('get-notifications-enabled'),
 setNotificationsEnabled: (enabled) => ipcRenderer.invoke('set-notifications-enabled', enabled),
 checkNotificationStatus: () => ipcRenderer.invoke('check-notification-status'),
 testNotification: (data) => ipcRenderer.invoke('show-notification', data),
 sendWebNotification: (notificationData) => ipcRenderer.invoke('show-notification', notificationData),
 
 // Firebase Push Notification methods
 registerFCMToken: (deviceId) => ipcRenderer.invoke('register-fcm-token', deviceId),
 unregisterFCMToken: (deviceId) => ipcRenderer.invoke('unregister-fcm-token', deviceId),
 setAuthToken: (token) => ipcRenderer.invoke('set-auth-token', token),
 registerFCM: (authToken) => ipcRenderer.invoke('register-fcm', authToken),
 testFCM: () => ipcRenderer.invoke('test-fcm')
});

contextBridge.exposeInMainWorld('debugLog', {
 log: (message) => ipcRenderer.send('debug-log', message)
});