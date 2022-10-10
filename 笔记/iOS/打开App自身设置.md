打开App自身设置

            let url = URL.init(string: UIApplication.openSettingsURLString)!
            if UIApplication.shared.canOpenURL(url) {
                UIApplication.shared.open(url, options: [:], completionHandler: nil)
            }
// 需要 提前获取通知权限或定位权限

