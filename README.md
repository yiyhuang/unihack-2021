<h1 align="center">
📖 Page Turners 🔄
</h1>


<p align="center">
 React.js, Nodejs, MongoDB, JSON
</p>

​	<img width="300" alt="logo" src="https://user-images.githubusercontent.com/56028891/110229467-c93f7f80-7f5d-11eb-8727-ac522a3d147e.png">

Page Turners is a web app that provides a new way for book exchange. Unlike traditional book exchange services, our swipe and match system allows our user to find your book match more efficiently, instead of browsing through loads of books and asking the owners one by one. It provides an environmentally-friendly, straightforward and easy way to replace the books you don’t need with the ones you would like to read for free.



#### **Contributors**

[Yiyang (Olivia) Huang](https://github.com/yiyhuang)

[Shiyuan (Tenthy) Tan](https://github.com/TenthyTan)

[Jingwei (Allan) Zhang](https://github.com/allanz0303)

[Zhen (Alex) Gu](https://github.com/CTRL-C-AND-CTRL-V)



#### <b>Screenshots</b>

<img width="500" alt="homepage" src="https://user-images.githubusercontent.com/56028891/110228762-b9bd3800-7f57-11eb-9230-d744271234f7.png">
<img width="500" alt="my_books" src="https://user-images.githubusercontent.com/56028891/110228765-bde95580-7f57-11eb-842b-770d5195476f.png">
<img width="500" alt="my_matches1" src="https://user-images.githubusercontent.com/56028891/110228770-c5106380-7f57-11eb-8a7a-8761da87c70a.png">
<img width="500" alt="my_matches2" src="https://user-images.githubusercontent.com/56028891/110228775-cb9edb00-7f57-11eb-880b-2e2a660651ae.png">





#### **clone or download**

```terminal
$ git. clone https://github.com/yiyhuang/unihack-2021.git
$ npm i
$	npm install bulma			// To access CSS framework used in this project

```



#### **project structure**

```terminal 
package.json
server/
	 package.json
	 .env (to create .env, check [prepare your secret session])
client/
	 package.json
...

```



## Usage



### **Prerequirements**

-[MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)

-[Node](https://nodejs.org/en/download/) ^10.0.0

-[npm](https://nodejs.org/en/download/package-manager/)

You need client and server run concurrently in different terminal session, in order to make them talk to each other. 



####  Client-side usage(PORT:3000)

```terminal
$ cd client // go to client folder
$ npm i // npm install packages
$ npm run dev // run it locally
```



#### Server-side usage(PORT:3000)

**Prepare your secret** 

Run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

```terminal
// in the root level
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> ./server/src/.env
```

**Start**

```terminal
$ cd server // go to server folder
$ npm i // npm install packages
$ npm run dev // run it locally
```

