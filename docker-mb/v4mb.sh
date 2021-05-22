wget https://raw.githubusercontent.com/whany98/xixi/main/docker-mb/v4mb.tar.gz
tar -zxvf v4mb.tar.gz
rm -f v4mb.tar.gz
mv v4mb/panel panel
mv v4mb/diy.sh config/diy.sh
mv v4mb/auth.json config/auth.json
rm -rf v4mb
cd panel
npm i
pm2 start server.js
echo -e "端口5678，默认用户名admin，密码admin"
