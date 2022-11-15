在这种情况下，HTML5 定义了 WebSocket 协议，能更好的节省服务器资源和带宽，并且能够更实时地进行通讯。

Websocket 使用 ws 或 wss 的统一资源标志符（URI），其中 wss 表示使用了 TLS 的 Websocket。

**如：**

> ws://echo.websocket.org
>
>  wss://echo.websocket.org

WebSocket 与 HTTP 和 HTTPS 使用相同的 TCP 端口，可以绕过大多数防火墙的限制。

默认情况下：

1）WebSocket 协议使用 80 端口；
2）若运行在 TLS 之上时，默认使用 443 端口。

WebSocket 本身是支持跨域的

