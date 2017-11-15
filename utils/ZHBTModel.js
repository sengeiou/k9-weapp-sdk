
/* - 自定义错误码 - */
let ZH_RealTek_Error_Code = {
  ZHCharactiristicNotFindCode: 100001,
  ZHDisConnectedErrorCode: 100002,
  ZHBatteryErrorCode: 100003,
  ZHMacAddressErrorCode: 100004,
  ZHUpdateFirmWareFaild: 100005,
  ZHBindErrorCode: 100006,
  ZHTimeOutErrorCode: 100007,
  ZHFirmWareUrlIsEmptyErrorCode: 100008
}

/* - 腾讯蓝牙接口错误码 - */
let BlueToolthErrorCode = [
  0, //正常
  10000, //未初始化蓝牙适配器
  10001, //当前蓝牙适配器不可用
  10002, //没有找到指定设备
  10003, //连接失败
  10004, //没有找到指定服务
  10005, //没有找到指定特征值
  10006, //当前连接已断开
  10007, //当前特征值不支持此操作
  10008, //其余所有系统上报的异常
  10009, //Android 系统特有，系统版本低于 4.3 不支持BLE
  10010, //没有找到指定描述符
  10011, //Android6.0以上系统因未打开定位导致搜寻蓝牙设备（startBluetoothDevicesDiscovery ）失败

]


module.exports = {
  ZH_RealTek_Error_Code: ZH_RealTek_Error_Code,
  BlueToolthErrorCode: BlueToolthErrorCode
}