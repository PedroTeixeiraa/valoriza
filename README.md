<p align="center" >
<img src="https://i.imgur.com/SbhNaFr.png" />
</p>
<h1 align="center">NLW - Valoriza</h1>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 👨‍💻 About the project

<p>This project was developed on the Next Level Week #06 event by <a href="https://rocketseat.com.br/" rel="nofollow">Rocketseat</a> 🚀 💜</p>

<p>Valoriza is an application that allows people to receive and send feedback to teammates</p>

## 🚀 Technologies

<ul>
  <li><a href="https://nodejs.org/en/" rel="nofollow">Node.js</a></li>
  <li><a href="https://www.typescriptlang.org/" rel="nofollow">TypeScript</a></li>
  <li><a href="https://expressjs.com/pt-br/" rel="nofollow">Express</a></li>
  <li><a href="https://typeorm.io/#/" rel="nofollow">TypeORM</a></li>
</li>
</ul>

## 🛣️ Routes
<pre>
  POST - /users
  POST - /tags
  POST - /login
  POST - /compliments

  GET - /users/compliments/send
  GET - /users/compliments/receive
  GET - /tags
  GET - /users
</pre>

<pre>
To test the api in Insominia -> <a href="https://github.com/PedroTeixeiraa/valoriza/Insomnia_nlw-06.json" rel="nofollow">Insominia</a>
</pre>

## 💻 Getting started

<ul>
  <li><a href="https://nodejs.org/en/" rel="nofollow">Node.js</a></li>
  <li><a href="https://classic.yarnpkg.com/" rel="nofollow">Yarn</a></li>
</ul>  
<pre>$ git clone https://github.com/PedroTeixeiraa/valoriza.git</pre>

<p><strong>Follow the steps below</strong></p>

```bash
# Install the dependencies
$ yarn 
# Use the script to run the migrations
$ yarn typeorm migration:run
# To finish, run the api service
$ yarn dev
# Well done, project is started
```
## 🚧 Building 🚧
- Send email when user receives compliment 📭
- Custom errors 🐞
- Put into production 💻
- Mysql/Postgres database 📊
- environment variables 5️⃣4️⃣

## 📝 License
<p>This project is licensed under the MIT License - see the <a href="https://github.com/PedroTeixeiraa/valoriza/blob/main/LICENSE">LICENSE</a> file for details.</p>

<hr> </hr>
<p> Made with 💜  by Pedro Teixeira 👋 <a href="https://www.linkedin.com/in/pedro-teixeira-alves/" rel="nofollow">See my linkedin</a> </p>


