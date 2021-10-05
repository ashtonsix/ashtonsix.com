# ashtonsix.com

This is the repository for Ashton's website.

## Build and Deploy

Do the build locally on your computer:

```
cd packages/resume
npm run build
cd ../ashtonsix.com
npm run build
cd ../closenesslines
npm run build
cd ../pricepaid/web
npm run build
cd ../../salamander
npm run build
cd ../../
```

Then copy across `/build/`, `/server/` & `/nginx.conf` to a remote server

To set the remote server up create an Ubuntu instance, and then run this:

```sh
sudo apt update
sudo apt upgrade -y
sudo apt install -y nginx
sudo nginx -s stop

mkdir log
mkdir log/nginx
touch log/nginx/access.log
touch log/nginx/error.log

sudo nginx -c /home/ubuntu/nginx.conf
sudo nginx -s reload

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm install node
cd server/
npm install
npm start
```
