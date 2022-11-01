# 常见错误码及定义



统一格式：A-BB-CCC
 A:错误级别，如1代表系统级错误，2代表服务级错误；
 B:项目或模块名称，一般公司不会超过99个项目；
 C:具体错误编号，自增即可，一个项目999种错误应该够用；



# **授权／令牌请求接口返回码**

描述应用发起授权请求或令牌请求时，开放平台的返回码。

| 错误码 | 错误描述                                   | Error Description         |
| ------ | ------------------------------------------ | ------------------------- |
| 10000  | 非法的请求参数                             | Invalid request           |
| 10001  | 用户认证失败                               | Invalid client            |
| 10002  | 非法的授权信息                             | Invalid grant             |
| 10003  | 应用没有被授权，无法使用所指定的grant_type | Unauthorized client       |
| 10004  | grant_type字段超过定义范围                 | Unsupported grant_type    |
| 10005  | scope信息无效或超出范围                    | Invalid scope             |
| 10006  | 提供的更新令牌已过期                       | Expired token             |
| 10007  | redirect_uri字段与注册应用时所填写的不匹配 | Redirect_uri mismatch     |
| 10008  | response_type参数值超过定义范围            | Unsupported response type |
| 10009  | 用户或授权服务器拒绝授予数据访问权限       | Access denied             |





# **API通用返回码**

描述API接口的共性返回码，API自定义的接口返回码请参阅对应API接口文档描述。



| 错误码 | 错误描述                     | Error Description                           |
| ------ | ---------------------------- | ------------------------------------------- |
| 0      | 成功                         | Success                                     |
| 1      | 未知错误                     | Unknown error                               |
| 2      | 服务暂不可用                 | Service temporarily unavailable             |
| 3      | 未知的方法                   | Unsupported openapi method                  |
| 4      | 接口调用次数已达到设定的上限 | Open api request limit reached              |
| 5      | 请求来自未经授权的IP地址     | Unauthorized client IP address              |
| 6      | 无权限访问该用户数据         | No permission to access user data           |
| 7      | 来自该refer的请求无访问权限  | Invalid parameter                           |
| 100    | 请求参数无效                 | Unsupported response type                   |
| 101    | api key无效                  | Invalid API key                             |
| 104    | 无效签名                     | Incorrect signature                         |
| 105    | 请求参数过多                 | Too many parameters                         |
| 106    | 未知的签名方法               | Unsupported signature method                |
| 107    | timestamp参数无效            | Invalid/Used timestamp parameter            |
| 109    | 无效的用户资料字段名         | Invalid user info field                     |
| 110    | 无效的access token           | Access token invalid or no longer valid     |
| 111    | access token过期             | Access token expired                        |
| 210    | 获取未授权的字段             | Unsupported permission                      |
| 211    | 请求参数无效                 | Unsupported response type                   |
| 212    | 没有权限获取用户的email      | No permission to access user email          |
| 800    | 未知的存储操作错误           | Unknown data store API error                |
| 801    | 无效的操作方法               | Invalid operation                           |
| 802    | 数据存储空间已超过设定的上限 | Data store allowable quota was exceeded     |
| 803    | 指定的对象不存在             | Specified object cannot be found            |
| 804    | 指定的对象已存在             | Specified object already exists             |
| 805    | 数据库操作出错，请重试       | A database error occurred. Please try again |
| 900    | 访问的应用不存在             | No such application exists                  |



 

​    