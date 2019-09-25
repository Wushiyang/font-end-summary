# 基本指令

docker version	查看docker版本

docker search <image name>	查找镜像

docker pull  <image name>	拉取镜像

docker run <image name> <image command>	运行镜像指令

docker ps -l	查看最近运行的镜像

docker commit <container id> <new image name>	另存镜像

docker images 查看本地镜像

docker inspect <image id>	查看容器信息

docker push <image name>	发布镜像

docker login	docker登录

docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]	打tag

docker push [OPTIONS] NAME[:TAG]	上传