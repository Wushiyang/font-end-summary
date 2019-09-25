# docker常用指令

#### docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

**-i	STDIN模式**

开启输入模式，使用当前终端。常和-t一起使用，使用伪终端和容器终端交互

**-t	开启伪终端**

开启伪终端连接容器终端，镜像参数必须有可开启终端，常和-i一起使用使伪终端输入可以进到容器终端

**-d	后台运行**

-d	以后台模式运行，默认是前台模式

**-p	映射宿主和容器端口** 

-p	宿主随意端口映射容器80端口

-p 80:3000	表示映射宿主80端口到容器3000端口

**-v	映射宿主和容器目录**

-v /data:/data	表示映射宿主/data目录到容器/data目录

**-a	连接容器**

-a	连接以-d模式开启的容器

**-c	设置容器CPU权重**



#### docker ps [OPTIONS]

**-a	显示所有容器，包括未运行**

**-l	列出最近创建容器**

**-n	列出最近创建n个容器**

**-q	静默模式，只显示容器编号**



#### docker stats [OPTIONS] [CONTAINER...]

**-a	显示所有容器状态**



#### docker pull [OPTIONS] NAME[:TAG|@DIGEST]

**-a	拉取所有tag镜像**



#### docker port CONTAINER [PRIVATE_PORT[/PROTO]]

**列出所指定容器的端口映射**



#### docker logs [OPTIONS] CONTAINER

查看容器日志

**-f	跟踪日志输出**

**-t	显示时间戳**



#### docker top CONTAINER [ps OPTIONS]

查看容器中运行的进程信息，支持ps命令参数



#### docker inspect [OPTIONS] NAME|ID [NAME|ID...]

获取容器、镜像的元数据

**-f	以制定模板输出**



#### docker stop [OPTIONS] CONTAINER [CONTAINER...]

停止一个或多个容器

-**t	多少秒之后停止**



#### docker start [OPTIONS] CONTAINER [CONTAINER...]

开启容器

**-a	前台开启，连接STDOUT和STDERR**

**-i	连接容器STDIN**



#### docker restart [OPTIONS] CONTAINER [CONTAINER...]

**-t	多少秒后杀掉重启**



#### docker rm [OPTIONS] CONTAINER [CONTAINER...]

**-f	强制删除正运行容器**

**-l	移除和容器的网络连接**

**-v	删除容易并删除容器挂载的数据卷**