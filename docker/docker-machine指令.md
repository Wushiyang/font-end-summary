# docker-machine指令

### docker-machine ls [OPTIONS] [arg...]

列出当前所有docker机器



### docker-machine env <虚拟机名>

列出虚拟机环境变量，还可用于连接本地终端到指定虚拟机终端，激活虚拟机（复制最后一行到本地shell运行）



### docker-machine ip

列出当前激活的虚拟机的ip



### docker-machine create -d "virtualbox" default

使用virtualbox引擎创建default名字的虚拟机



### docker-machine rm default

删除default名字的虚拟机



