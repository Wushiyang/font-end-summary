# docker部署服务

### 一、初始化swarm集群

默认使用2376，但是会和守护进程端口冲突，使用2377

```shell
docker swarm init --advertise-addr 192.168.99.100:2377
```



### 二、服务部署

```shell
docker stack deploy -c docker-compose.yml getstartlab
```

可以使用 ***docker-machine ls env <本地虚拟机名>***,，然后复制最后一行输入到shell，使docker-machine的终端连接到虚拟机的终端，这样可以在本地运行上面的命令读取本地的docker-compose.yml文件做配置而不需到处复制放置docker-compose.yml文件



### 三、关闭服务

删除服务，服务名是通过***docker stack deploy***指令启动的服务

```shell
docker stack rm <服务名>
```

强制关闭集群

```shell
docker swarm leave --force
```



### 四、一些指令

**docker service ls**	

列出所有docker服务

**docker stack services <服务名>**

列出所有docker服务，服务名是你启动服务的名字，注意docker service ls显示的服务名多了_web

**docker service ps <服务名>**

列出服务下的任务(task)，服务名是docker service ls显示的服务名

**docker container ls -q**

静默模式下显示的容器返回的id是任务id





