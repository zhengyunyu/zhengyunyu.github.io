(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{404:function(_,v,t){"use strict";t.r(v);var a=t(2),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"多路复用和多路分解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多路复用和多路分解"}},[_._v("#")]),_._v(" 多路复用和多路分解")]),_._v(" "),t("h3",{attrs:{id:"套接字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#套接字"}},[_._v("#")]),_._v(" 套接字")]),_._v(" "),t("h4",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[_._v("#")]),_._v(" 概念")]),_._v(" "),t("ul",[t("li",[_._v("一个进程有一个或多个套接字，套接字充当了从网络向进程传递数据,和从进程向网络传递数据的门户")]),_._v(" "),t("li",[_._v("运输层并没有直接把数据交给进程，而是交给套接字，套接字再交给进程")])]),_._v(" "),t("h4",{attrs:{id:"种类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#种类"}},[_._v("#")]),_._v(" 种类")]),_._v(" "),t("p",[_._v("套接字分为UDP套接字和TCP套接字")]),_._v(" "),t("h4",{attrs:{id:"说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[_._v("#")]),_._v(" 说明")]),_._v(" "),t("ol",[t("li",[_._v("一个主机有很多个套接字，所以每个套接字有一个属于自己的ID")]),_._v(" "),t("li",[_._v("每个套接字都会绑定一个对应的进程，用于传输数据")])]),_._v(" "),t("h3",{attrs:{id:"多路分解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多路分解"}},[_._v("#")]),_._v(" 多路分解")]),_._v(" "),t("ul",[t("li",[_._v("接收端，运输层检查报文段的几个字段，把该分组定位到某个套接字")]),_._v(" "),t("li",[_._v("也就是说，多路分解的意思就是，把运输层报文段交付到正确的套接字的工作就是多路分解")])]),_._v(" "),t("h3",{attrs:{id:"多路复用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多路复用"}},[_._v("#")]),_._v(" 多路复用")]),_._v(" "),t("ul",[t("li",[_._v("发送端，源主机从不同的套接字收集数据块，并为每个数据块封装好运输层的首部信息，从而生成了报文段，然后再交由网络层进行传输，这个过程就叫多路复用")]),_._v(" "),t("li",[_._v("要求报文段要有源端口和目标端口")])]),_._v(" "),t("h3",{attrs:{id:"udp和tcp的多路复用和多路分解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp和tcp的多路复用和多路分解"}},[_._v("#")]),_._v(" UDP和TCP的多路复用和多路分解")]),_._v(" "),t("h4",{attrs:{id:"udp中的多路分解和多路复用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp中的多路分解和多路复用"}},[_._v("#")]),_._v(" UDP中的多路分解和多路复用")]),_._v(" "),t("ul",[t("li",[_._v("由一个二元组标识，即目的端口和目的IP")]),_._v(" "),t("li",[_._v("来自不同源主机的对于同一个端口的请求，会被复用到同一个套接字")])]),_._v(" "),t("h4",{attrs:{id:"tcp中的多路分解和多路复用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp中的多路分解和多路复用"}},[_._v("#")]),_._v(" TCP中的多路分解和多路复用")]),_._v(" "),t("ul",[t("li",[_._v("由一个四元组标识，即目的端口和目的IP，源端口和源IP")]),_._v(" "),t("li",[_._v("来自不同源主机的对于同一个端口的请求，也不会被复用到同一个套接，必须要来自同一个主机")])]),_._v(" "),t("h2",{attrs:{id:"udp和tcp的应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp和tcp的应用场景"}},[_._v("#")]),_._v(" UDP和TCP的应用场景")]),_._v(" "),t("h3",{attrs:{id:"udp场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp场景"}},[_._v("#")]),_._v(" UDP场景")]),_._v(" "),t("h4",{attrs:{id:"无需连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无需连接"}},[_._v("#")]),_._v(" 无需连接")]),_._v(" "),t("p",[_._v("无需经过三次握手，UDP不必进行任何操作就可以进行数据传输")]),_._v(" "),t("p",[t("strong",[_._v("优点")])]),_._v(" "),t("p",[_._v("没有连接时延")]),_._v(" "),t("p",[t("strong",[_._v("例子")])]),_._v(" "),t("ol",[t("li",[t("p",[_._v("DNS用UDP，因为用TCP就会很慢")])]),_._v(" "),t("li",[t("p",[_._v("HTTP用TCP，因为HTTP需要经常传输文本或者图像等数据，所以需要TCP的稳定性，不允许数据丢失")])]),_._v(" "),t("li",[t("p",[_._v("谷歌的QUIC协议，基于UDP，实现了可靠性，兼容了UDP和TCP的优点")])])]),_._v(" "),t("h4",{attrs:{id:"无连接状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无连接状态"}},[_._v("#")]),_._v(" 无连接状态")]),_._v(" "),t("p",[t("strong",[_._v("概念")])]),_._v(" "),t("p",[_._v("TCP需要维护连接的状态，比如发送和接收缓存、拥塞控制参数等内容，UDP不需要维护这些状态")]),_._v(" "),t("h4",{attrs:{id:"发送速率不受限制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发送速率不受限制"}},[_._v("#")]),_._v(" 发送速率不受限制")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("UDP收到数据，马上就能打包发送给网络层进行传输")])]),_._v(" "),t("li",[t("p",[_._v("TCP收到数据，还要受流量控制和拥塞控制，而且TCP是可靠的，当分组丢失会重传，直到受到对方的确认，而不会管交付需要多少时间")])]),_._v(" "),t("li",[t("p",[_._v("UDP无需约束发送速率，且容忍一定程度的分组丢失，所以适用于交互性比较强的场景，比如实时应用")])])]),_._v(" "),t("h4",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("UDP比较快，但不可靠")])]),_._v(" "),t("li",[t("p",[_._v("UDP无需维护各种参数，支持更多用户连接")])]),_._v(" "),t("li",[t("p",[_._v("UDP报文首部更小，TCP更大，UDP数据包更小")])]),_._v(" "),t("li",[t("p",[_._v("UDP无需约束发送速率，且容忍一定程度的分组丢失，TCP不行")])])]),_._v(" "),t("h3",{attrs:{id:"tcp场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp场景"}},[_._v("#")]),_._v(" TCP场景")]),_._v(" "),t("h4",{attrs:{id:"需要对发送细节进行更精准的控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需要对发送细节进行更精准的控制"}},[_._v("#")]),_._v(" 需要对发送细节进行更精准的控制")]),_._v(" "),t("p",[_._v("TCP有流量控制和拥塞控制")]),_._v(" "),t("h4",{attrs:{id:"需要保证传输可靠性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需要保证传输可靠性"}},[_._v("#")]),_._v(" 需要保证传输可靠性")]),_._v(" "),t("p",[_._v("TCP提供了可靠性传输")]),_._v(" "),t("h4",{attrs:{id:"传输的数据量大"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传输的数据量大"}},[_._v("#")]),_._v(" 传输的数据量大")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("TCP和UDP传数据的数据量实际上差不多，但是大数据的情况下，可能会在IP层对数据进行切片，然而UDP是不可靠的，有可能会丢失，而且没有重传机制，而数据一旦不完整，在IP层不会重组，所以会丢失")])]),_._v(" "),t("li",[t("p",[_._v("而TCP保证了可靠性，所以使用TCP传输大数据的效果比较好，比如DNS在大数据包的情况下就会去选择TCP")])]),_._v(" "),t("li",[t("p",[_._v("在大数据包的情况下，TCP带来的额外开销就可以容忍")])])]),_._v(" "),t("h3",{attrs:{id:"总结-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结-2"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/webp/22799595/1644417502026-78388ed2-8e9b-47e0-bc77-b9dd46f3bbc1.webp",alt:"img"}})]),_._v(" "),t("h2",{attrs:{id:"udp和tcp的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp和tcp的区别"}},[_._v("#")]),_._v(" UDP和TCP的区别")]),_._v(" "),t("p",[t("strong",[_._v("TCP是面向连接的、可靠的、基于字节流的传输协议")])]),_._v(" "),t("p",[t("strong",[_._v("UDP是一个面向无连接的传输协议")])]),_._v(" "),t("h3",{attrs:{id:"tcp特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp特性"}},[_._v("#")]),_._v(" TCP特性")]),_._v(" "),t("p",[_._v("和UDP相比，TCP有三大核心特性")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("面向连接。所谓的连接，指的是客户端和服务器的连接，在双方互相通信之前，TCP需要三次握手建立连接，而UDP没有相应建立连接的过程")])]),_._v(" "),t("li",[t("p",[_._v("可靠性。TCP花了非常多功夫保证了连接的可靠，体现在了有状态和可控制上。TCP会精准记录哪些数据发送了，哪些数据被对方接收了，哪些没有被接收，而且保证了数据包按序到达，不出错，这是"),t("strong",[_._v("有状态。"),t("strong",[_._v("当意识到丢包了或网络环境不佳，TCP会根据具体情况调整自己的行为，控制自己的发送速度或重发，这是")]),_._v("可控制。")])])]),_._v(" "),t("li",[t("p",[_._v("面向字节流。UDP的数据传输是基于数据报的，即发送方的UDP对应用层交下来的报文，不合并，不拆分，只是在其上面加上首部后就交给了下面的网络层，也就是说无论应用层交给UDP多长的报文，它统统发送，一次发送一个。TCP发送报文时，是将应用层数据写入TCP缓冲区中，然后由TCP协议来控制发送这里面的数据，而发送的状态是按字节流的方式发送的，跟应用层写下来的报文长度没有任何关系，所以说是流。")])])]),_._v(" "),t("h2",{attrs:{id:"tcp三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手"}},[_._v("#")]),_._v(" TCP三次握手")]),_._v(" "),t("p",[_._v("TCP的三次握手，是为了确认双方的两样能力："),t("code",[_._v("发送能力")]),_._v("和"),t("code",[_._v("接收能力")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/webp/22799595/1644306604878-107b1ef1-77db-46ca-8568-62579b39d18d.webp",alt:"img"}})]),_._v(" "),t("p",[t("strong",[_._v("第一次握手")])]),_._v(" "),t("p",[_._v("客户端向服务端发送连接请求报文段。该报文段中的头部SYN=1，ACK=0，seq=x。请求发送后，客户端便进入了SYN-SENT状态。")]),_._v(" "),t("ul",[t("li",[_._v("SYN=1,ACK=0表示该报文段为连接请求报文")]),_._v(" "),t("li",[_._v("x为本次TCP通信的字节流初始序号，TCP规定，SYN=1的报文段不能有数据部分，但要消耗一个序号")])]),_._v(" "),t("p",[t("strong",[_._v("第二次握手")])]),_._v(" "),t("p",[_._v("服务端收到连接请求报文段后，如果同意连接，则会发送一个应答：SYN=1，ACK=1，seq=y，ack=x+1。该应答发送完成后便进入了SYN-RCVD状态")]),_._v(" "),t("ul",[t("li",[_._v("ack=x+1表示服务端希望下一个数据报发送序号从x+1开始")])]),_._v(" "),t("p",[t("strong",[_._v("第三次握手")])]),_._v(" "),t("p",[_._v("当客户端收到连接同意的应答后，还要向服务端发送一个确认报文段，表示：服务端发来的连接应答已经成功收到。该报文段的头部为：ACK=1，seq=x+1，ack=y+1。客户端发完这个报文后就进入了ESTABLISHED状态，服务端收到这个应答后也进入了ESTABLISHED状态，此时连接的建立完成")]),_._v(" "),t("h3",{attrs:{id:"为什么需要三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要三次握手"}},[_._v("#")]),_._v(" 为什么需要三次握手")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("TCP是全双工通信，需要确定双方是否能接收和发送数据，连接这个过程就可以对这个问题进行验证")])]),_._v(" "),t("li",[t("ol",[t("li",[_._v("第一次握手，接收方确定了自己的接收能力，以及发送方的发送能力")]),_._v(" "),t("li",[_._v("第二次握手，发送方确定了自己的发送能力和接收能力，以及接收方的发送和接收能力")])])]),_._v(" "),t("li",[t("ol",{attrs:{start:"3"}},[t("li",[_._v("第三次握手，接收方确认了自己的发送能力，以及发送方的接受能力")])])]),_._v(" "),t("li",[t("p",[_._v("建立连接是为了TCP的功能做准备（可靠性、拥塞控制、流量控制），也就是说在建立连接的过程中，两个端系统进行了沟通，确定了Socket、序列号以及窗口大小，发送方和接收方建立缓存等数据")])])]),_._v(" "),t("h3",{attrs:{id:"为什么不能是两次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么不能是两次握手"}},[_._v("#")]),_._v(" 为什么不能是两次握手")]),_._v(" "),t("p",[_._v("这是为了防止失效的连接请求报文段被服务端接收，从而产生错误。")]),_._v(" "),t("p",[_._v("若建立连接只需要两次握手，客户端并没有太大变化，仍然需要获得服务端的应答后才进入ESTABLISHED状态，而服务端在收到连接请求后就进入ESTABLISHED状态。此时如果网络拥塞，客户端发送的连接请求迟迟到不了服务端，客户端便超时重发请求，如果服务端正确接收并应答，双方便开始通信，通信结束后释放连接。")]),_._v(" "),t("p",[_._v("此时，如果那个失效的连接请求抵达了服务端，由于只有两次握手，服务端收到请求就会进入ESTABLISHED状态，等待发送数据或主动发送数据，但此时客户端已进入CLOSED状态，服务端将一直等待下去从而造成了连接资源的浪费。")]),_._v(" "),t("h3",{attrs:{id:"为什么不是四次"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么不是四次"}},[_._v("#")]),_._v(" 为什么不是四次")]),_._v(" "),t("p",[_._v("三次握手的目的是确认双方发送和接收能力，三次已经足够了，再多几次用处不大")]),_._v(" "),t("h3",{attrs:{id:"三次握手过程中可以携带数据吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三次握手过程中可以携带数据吗"}},[_._v("#")]),_._v(" 三次握手过程中可以携带数据吗")]),_._v(" "),t("p",[_._v("第三次握手的时候可以携带，前两次不能携带。")]),_._v(" "),t("p",[_._v("如果前两次握手可以携带数据，那么一旦有人想攻击服务器，那么只需要在第一次握手的SYN报文中放大量数据，那么服务器势必会消耗更多的"),t("strong",[_._v("时间")]),_._v("和"),t("strong",[_._v("内存空间")]),_._v("去处理这些数据，增大了服务器被攻击的风险。")]),_._v(" "),t("p",[_._v("第三次握手时，客户端已经处于"),t("code",[_._v("ESTABLISHED")]),_._v("状态，并且已经能够确认服务器的接收和发送能力，此时已经相对安全，可以携带数据。")]),_._v(" "),t("h2",{attrs:{id:"tcp四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp四次挥手"}},[_._v("#")]),_._v(" TCP四次挥手")]),_._v(" "),t("p",[_._v("TCP连接是双向的，因此在四次挥手中，前两次挥手用于断开一个方向的连接，后两次挥手用于断开另一个方向的连接。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/webp/22799595/1644308176930-0c157244-d1e9-4d98-96f5-9b61d89a3ea7.webp",alt:"img"}})]),_._v(" "),t("p",[t("strong",[_._v("第一次挥手")])]),_._v(" "),t("p",[_._v("若A认为数据发送完毕，则它需要向B发送连接释放请求。该请求只有报文头，头中携带的主要参数为：FIN=1，seq=u。此时，A将进入FIN-WAIT-1状态")]),_._v(" "),t("p",[t("strong",[_._v("第二次挥手")])]),_._v(" "),t("p",[_._v("B收到连接释放请求后，会通知相应的应用程序，告诉它A向B这个方向的连接已经释放。此时B进入CLOSE-WAIT状态，并向A发送连接释放的应答，其报文头包含：ACK=1，seq=v，ack=u+1")]),_._v(" "),t("p",[_._v("A收到该应答，进入FIN-WAIT-2状态，等待B发送释放连接的请求。")]),_._v(" "),t("p",[_._v("第二次挥手完成之后，A到B方向的连接已经释放，B不会再接收数据，A也不会再发送数据。但B到A方向的连接还在，B可以继续向A发送数据。")]),_._v(" "),t("p",[t("strong",[_._v("第三次挥手")])]),_._v(" "),t("p",[_._v("当B向A发完所有数据后，向A发送连接释放的请求，请求头：FIN=1，ACK=1，seq=w，ack=u+1")]),_._v(" "),t("p",[t("strong",[_._v("第四次挥手")])]),_._v(" "),t("p",[_._v("A收到释放请求后，向B发送确认应答，此时A进入TIME-WAIT状态，该状态会持续2MSL时间，若该时间段内没有B的重发请求的话，就进入CLOSED状态，当B收到确认应答后，也进入CLOSED状态。")]),_._v(" "),t("h3",{attrs:{id:"等待2msl的意义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#等待2msl的意义"}},[_._v("#")]),_._v(" 等待2MSL的意义")]),_._v(" "),t("p",[_._v("如果不等待，客户端直接跑路，当服务端还有要发送给客户端数据包停留在路上时，若客户端的端口此时刚好被新的应用占用，那么就接收到了无用的数据包，造成了数据包的婚礼。所以，最保险的方式就是等待服务器发来的数据包都死掉了才启动新的应用。")]),_._v(" "),t("h3",{attrs:{id:"为什么不是三次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么不是三次挥手"}},[_._v("#")]),_._v(" 为什么不是三次挥手")]),_._v(" "),t("p",[_._v("因为服务端在接收到"),t("code",[_._v("FIN")]),_._v("，往往不会立即返回"),t("code",[_._v("FIN")]),_._v("，必须等到服务器所有的报文都发送完毕了，才能发送"),t("code",[_._v("FIN")]),_._v("。因此先发一个"),t("code",[_._v("ACK")]),_._v("表示已经收到客户端的"),t("code",[_._v("FIN")]),_._v("，延迟一段时间才发"),t("code",[_._v("FIN")]),_._v("，这样就造成了四次挥手。")]),_._v(" "),t("p",[_._v("如果是三次挥手，则说明服务端将"),t("code",[_._v("ACK")]),_._v("和"),t("code",[_._v("FIN")]),_._v("的发送合并为一次挥手，这个时候长时间的延迟可能会导致客户端误以为"),t("code",[_._v("FIN")]),_._v("没有到达客户端，从而让客户端不断重发"),t("code",[_._v("FIN")])]),_._v(" "),t("h2",{attrs:{id:"半连接队列和syn-flood"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#半连接队列和syn-flood"}},[_._v("#")]),_._v(" 半连接队列和SYN Flood")]),_._v(" "),t("p",[_._v("三次握手前，服务端的状态从"),t("code",[_._v("CLOSED")]),_._v("变成"),t("code",[_._v("LISTEN")]),_._v("，同时在内部创建了两个队列："),t("strong",[_._v("半连接队列和全连接队列。")])]),_._v(" "),t("h3",{attrs:{id:"半连接队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#半连接队列"}},[_._v("#")]),_._v(" 半连接队列")]),_._v(" "),t("p",[_._v("当客户端发送"),t("code",[_._v("SYN")]),_._v("到服务端时，服务端收到以后回复"),t("code",[_._v("ACK")]),_._v("和"),t("code",[_._v("SYN")]),_._v("，状态由"),t("code",[_._v("LISTEN")]),_._v("变为"),t("code",[_._v("SYN_RCVD")]),_._v("，此时这个连接就被推入了"),t("strong",[_._v("SYN队列，"),t("strong",[_._v("也就是")]),_._v("半连接队列")])]),_._v(" "),t("h3",{attrs:{id:"全连接队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全连接队列"}},[_._v("#")]),_._v(" 全连接队列")]),_._v(" "),t("p",[_._v("当客户端返回"),t("code",[_._v("ACK")]),_._v("，服务端接收后，三次握手完成。这个时候连接等待被具体的应用取走，在被取走之前，它会被推入另一个TCP维护的队列，也就是"),t("strong",[_._v("全连接队列（Accept Queue）")])]),_._v(" "),t("h3",{attrs:{id:"syn-flood攻击原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syn-flood攻击原理"}},[_._v("#")]),_._v(" SYN Flood攻击原理")]),_._v(" "),t("p",[_._v("SYN Flood属于经典的DDOS估计，就是客户端在短时间内伪造大量不存在的IP地址，并向服务端疯狂发送"),t("code",[_._v("SYN")]),_._v("，对于服务端而言，会产生两个危险的后果：")]),_._v(" "),t("ol",[t("li",[_._v("处理大量的SYN包并返回对于ACK，势必由大量连接处于"),t("code",[_._v("SYN_RCVD")]),_._v("状态，从而占满整个半连接队列，无法处理正常请求")]),_._v(" "),t("li",[_._v("由于是不存在的IP，服务端长时间收不到客户端的"),t("code",[_._v("ACK")]),_._v("，会导致服务端不断重发数据，直到耗尽服务端的资源")])]),_._v(" "),t("h3",{attrs:{id:"如何应对syn-flood攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何应对syn-flood攻击"}},[_._v("#")]),_._v(" 如何应对SYN Flood攻击")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("增加SYN连接，也就是增加半连接队列的容量")])]),_._v(" "),t("li",[t("p",[_._v("减少SYN+ACK的重试次数，避免大量的超时重发")])]),_._v(" "),t("li",[t("p",[_._v("利用SYN Cookie攻击，在服务端接收到"),t("code",[_._v("SYN")]),_._v("后不立即分配连接资源，而是根据这个"),t("code",[_._v("SYN")]),_._v("计算出一个Cookie，连同第二次握手回复给客户端，在客户端回复"),t("code",[_._v("ACK")]),_._v("的时候带上这个"),t("code",[_._v("Cookie")]),_._v("值，服务端验证Cookie合法之后才分配连接资源")])])]),_._v(" "),t("h2",{attrs:{id:"tcp报文头部字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp报文头部字段"}},[_._v("#")]),_._v(" TCP报文头部字段")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/webp/22799595/1644312323296-9dcd634b-5048-463d-97ce-3e4c2d655038.webp",alt:"img"}})]),_._v(" "),t("p",[t("strong",[_._v("源端口、目标端口")])]),_._v(" "),t("p",[_._v("如何唯一标识一个连接，使用TCP连接的"),t("code",[_._v("四元组")]),_._v("——源IP 源端口 目标IP 目标端口")]),_._v(" "),t("p",[_._v("因为在IP层会处理好IP，所以TCP只要记录两者的端口即可。")]),_._v(" "),t("p",[t("strong",[_._v("序列号")])]),_._v(" "),t("p",[_._v("即"),t("code",[_._v("Sequence Number")]),_._v("，指的是本报文段第一个字节的序列号。")]),_._v(" "),t("p",[_._v("在通信中有两个作用：")]),_._v(" "),t("ol",[t("li",[_._v("在SYN报文中交换彼此的初始序列号")]),_._v(" "),t("li",[_._v("保证数据包按正确的顺序组装")])]),_._v(" "),t("p",[t("strong",[_._v("ISN")])]),_._v(" "),t("p",[_._v("即"),t("code",[_._v("Initial Sequence Number")]),_._v("，初始序列号。在三次握手过程中，双方交换的是彼此的ISN。")]),_._v(" "),t("p",[_._v("ISN是动态变化的，它并不是一个固定的值，每4ms就会加一，溢出则回到0。")]),_._v(" "),t("p",[_._v("这样是为了防止ISN被攻击者猜到，然后伪造源IP和源端口，接着就能伪造一个RST，强制去关闭连接。")]),_._v(" "),t("p",[t("strong",[_._v("确认号")])]),_._v(" "),t("p",[_._v("即ACK，用来告知对方下一个期望接收到的序列号，小于ACK的所有字节已经全部收到")]),_._v(" "),t("p",[t("strong",[_._v("标记位")])]),_._v(" "),t("p",[_._v("常见的标记位有"),t("code",[_._v("SYN")]),_._v("，"),t("code",[_._v("ACK")]),_._v("，"),t("code",[_._v("FIN")]),_._v("，"),t("code",[_._v("RST")]),_._v("，"),t("code",[_._v("PSH")])]),_._v(" "),t("p",[_._v("FIN：表示发送方准备断开连接")]),_._v(" "),t("p",[_._v("RST：即Reset，用来强制断开连接")]),_._v(" "),t("p",[_._v("PSH：即Push，告知对方这些数据包收到后应该马上交给上层应用，不能缓存")]),_._v(" "),t("p",[t("strong",[_._v("校验和")])]),_._v(" "),t("p",[_._v("占用两个字节，防止传输过程中数据包有损坏，如果遇到校验有差错的报文，TCP直接丢弃，等待重传")])])}),[],!1,null,null,null);v.default=s.exports}}]);