# docker部署集群

### 一、部署多台服务器

这里用多台虚拟机模仿多台服务器

#### 添加虚拟机

default是主机

```shell
docker-machine create --driver virtual default
docker-machine create --driver virtual worker1
```

#### 查看虚拟机状态

添加后使用

```shell
docker-machine ls
```

查看虚拟机的状态，看下active下哪个虚拟机有星号，就是激活的，可以在本地shell直连激活的虚拟机的终端

#### 激活虚拟机

```shell
docker-machine env <虚拟机名字>
```

复制最后一句输入到shell，用来激活当前虚拟机的终端



### 二、登录集群主机

```shell
docker swarm init --advertise-addr <default ip>
```

注意不要使用2376端口，会和守护进程冲突，使用2377吧



### 三、其他服务器连接集群主机

复制运行 ***docker swarm init*** 后显示的连接命令，类似以下结构

```shell
docker swarm join \
--token <token> \
<ip>:2377
```

连接成功后会显示

```shell
This node joined a swarm as a worker.
```

可使用

```
docker node ls
```

在主机终端里来查看集群节点状态



### 四、在集群开启服务

以下和《docker部署服务》部署服务相同，无须赘述

```
docker stack deploy -c docker-compose.yml getstartedlab
```



注意，布置在集群的服务，在集群的任何一个服务器ip都可访问，主机挂掉后，则全部挂掉，子机挂掉仍可访问其他主机和其他子机

