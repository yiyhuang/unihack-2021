<h1 align="centre">
🌐 Page Turners
</h1>

<p align="center">
  MongoDB, Nodejs
</p>

Page Turners is the idea of using Javascript /Node for swapping books web development.



#### **clone or download**

```terminal
$ git. clone https://github.com/yiyhuang/unihack-2021.git
$ npm i

```



#### **project structure**

```terminal 
package.json
server/
	 package.json
client/
	 package.json
...

```



## **Usage (run Page Turners on your machine)**



### **Prerequirements**

-<u>[MongoDB]</u>(https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)

-<u>[Node]</u>(https://nodejs.org/en/download/) ^10.0.0

-<u>[npm]</u>(https://nodejs.org/en/download/package-manager/)

You need client and server run concurrently in different terminal session, in order to make them talk to each other. Please make sure to start with server side.



#### Server-side usage(PORT:3000)

**Prepare**

Run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

```terminal
// in the root lever
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> ./server/src/.env

```

**Start**

```terminal
$ cd server // go to server folder
$ npm i // npm install packages
$ npm install bulma // To access some of the CSS framework used in this project
$ npm run dev // run it locally

```



####  Client-side usage(PORT:3000)

```terminal
$ cd client // go to client folder
$ npm i // npm install packages
$ npm install bulma // To access some of the CSS framework used in this project
$ npm run dev // run it locally

```



#### **Author**

[yiyhuang](https://github.com/yiyhuang)



#### **Source**

[Amazingandyyy](https://amazingandyyy.com)

https://bulma.io/documentation/components/card/

https://www.amazon.com/best-sellers-books-Amazon/zgbs/books

https://www.iconfinder.com/

https://www.w3schools.com/howto/howto_css_flip_card.asp

