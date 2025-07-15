const quizzes = {
  html: [
    { q: "What does HTML stand for?", a: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], correct: 0 },
    { q: "Which tag creates a hyperlink?", a: ["<link>", "<a>", "<href>"], correct: 1 },
    { q: "Which tag is used for inserting an image?", a: ["<img>", "<src>", "<picture>"], correct: 0 },
    { q: "What is the correct HTML tag for creating a checkbox?", a: ["<input type='checkbox'>", "<check>", "<checkbox>"], correct: 0 },
    { q: "Which doctype is used for HTML5?", a: ["<!DOCTYPE html>", "<html5>", "<!HTML5>"], correct: 0 }
  ],
  css: [
    { q: "Which property is used to change text color?", a: ["color", "text-color", "font-color"], correct: 0 },
    { q: "Which selector targets all `<p>` tags?", a: ["p", "#p", ".p"], correct: 0 },
    { q: "What does `display: none` do?", a: ["Hides element", "Deletes element", "Makes it transparent"], correct: 0 },
    { q: "Which property controls font size?", a: ["font-size", "text-size", "size"], correct: 0 },
    { q: "How to apply styles to a class?", a: [".classname", "#classname", "classname"], correct: 0 }
  ],
  js: [
    { q: "Which keyword declares a variable?", a: ["var", "set", "define"], correct: 0 },
    { q: "Which symbol is used for comments?", a: ["//", "##", "**"], correct: 0 },
    { q: "How to write an array?", a: ["[1,2,3]", "{1,2,3}", "(1,2,3)"], correct: 0 },
    { q: "What does `typeof 'hello'` return?", a: ["string", "text", "character"], correct: 0 },
    { q: "What triggers a function?", a: ["Calling it", "Naming it", "Typing it"], correct: 0 }
  ],
  java: [
    { q: "Which keyword is used to define a class in Java?", a: ["class", "define", "struct"], correct: 0 },
    { q: "What does JVM stand for?", a: ["Java Virtual Machine", "Java Verified Module", "Joint Virtual Memory"], correct: 0 },
    { q: "Which method is the entry point of a Java program?", a: ["main()", "start()", "init()"], correct: 0 },
    { q: "Which access modifier makes a variable accessible everywhere?", a: ["public", "private", "protected"], correct: 0 },
    { q: "What is the extension of a compiled Java class file?", a: [".class", ".java", ".exe"], correct: 0 }
  ],
  python: [
    { q: "Which symbol is used for comments in Python?", a: ["#", "//", "/*"], correct: 0 },
    { q: "Which keyword defines a function?", a: ["def", "func", "function"], correct: 0 },
    { q: "What data type is the value: `True`?", a: ["Boolean", "String", "Integer"], correct: 0 },
    { q: "How do you import a module?", a: ["import module", "use module", "load module"], correct: 0 },
    { q: "What does `len()` return?", a: ["Length of data", "Size of memory", "Number of variables"], correct: 0 }
  ],
  sql: [
    { q: "Which keyword is used to retrieve data from a database?", a: ["SELECT", "GET", "FETCH"], correct: 0 },
    { q: "What does `WHERE` clause do?", a: ["Filters rows", "Deletes table", "Sorts data"], correct: 0 },
    { q: "Which statement adds data to a table?", a: ["INSERT", "ADD", "APPEND"], correct: 0 },
    { q: "What is a primary key?", a: ["Unique identifier", "Foreign reference", "Hidden column"], correct: 0 },
    { q: "Which command removes a table?", a: ["DROP", "DELETE", "REMOVE"], correct: 0 }
  ],
  mongodb: [
    { q: "MongoDB is a ______ database.", a: ["NoSQL", "SQL", "Relational"], correct: 0 },
    { q: "Which function is used to insert documents?", a: ["insertOne()", "addOne()", "createEntry()"], correct: 0 },
    { q: "MongoDB stores data in which format?", a: ["BSON", "JSON", "XML"], correct: 0 },
    { q: "Which method finds multiple documents?", a: ["find()", "search()", "getMany()"], correct: 0 },
    { q: "Which command removes a document?", a: ["deleteOne()", "removeDoc()", "discard()"], correct: 0 }
  ],
  nextjs: [
    { q: "Next.js is built on top of which library?", a: ["React", "Vue", "Angular"], correct: 0 },
    { q: "Which feature improves SEO in Next.js?", a: ["Server-side rendering", "Single page apps", "DOM manipulation"], correct: 0 },
    { q: "Which folder auto-handles routing?", a: ["pages", "routes", "views"], correct: 0 },
    { q: "How to create dynamic routes?", a: ["[name].js", "{name}.js", "<name>.js"], correct: 0 },
    { q: "What command starts a Next.js dev server?", a: ["npm run dev", "next init", "serve next"], correct: 0 }
  ],
  nodejs: [
    { q: "Node.js runs on which environment?", a: ["Server-side", "Browser", "Database"], correct: 0 },
    { q: "Which module handles file system tasks?", a: ["fs", "file", "sys"], correct: 0 },
    { q: "What does `npm` stand for?", a: ["Node Package Manager", "New Project Maker", "Next Plugin Module"], correct: 0 },
    { q: "Which method creates a server?", a: ["http.createServer()", "server.init()", "net.create()"], correct: 0 },
    { q: "Which file is the entry point?", a: ["index.js", "server.js", "app.js"], correct: 0 }
  ],
  expressjs: [
    { q: "Express.js is a framework for ______.", a: ["Node.js", "React", "Python"], correct: 0 },
    { q: "Which method defines a route?", a: ["app.get()", "express.route()", "server.path()"], correct: 0 },
    { q: "What does `req.body` access?", a: ["Posted data", "Headers", "Cookies"], correct: 0 },
    { q: "What is middleware?", a: ["Function that runs before request handler", "Database layer", "Security module"], correct: 0 },
    { q: "How to start an Express server?", a: ["app.listen()", "server.start()", "express.run()"], correct: 0 }
  ]
};

function loadQuiz(skill) {
  const quiz = quizzes[skill];
  let current = 0;
  let score = 0;

  document.getElementById('quiz-box').classList.remove('hidden');
  document.getElementById('result-box').classList.add('hidden');
  showQuestion();

  function showQuestion() {
    const qData = quiz[current];
    const quizBox = document.getElementById('quiz-box');
    quizBox.innerHTML = `<h3>Q${current + 1}: ${qData.q}</h3>`;
    qData.a.forEach((option, i) => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.onclick = () => {
        if (i === qData.correct) score++;
        current++;
        current < quiz.length ? showQuestion() : showResults();
      };
      quizBox.appendChild(btn);
    });
  }

  function showResults() {
    document.getElementById('quiz-box').classList.add('hidden');
    const resultBox = document.getElementById('result-box');
    resultBox.classList.remove('hidden');
    let percent = Math.round((score / quiz.length) * 100);
    let title = percent >= 80 ? "Mastermind ⚡" : percent >= 50 ? "Getting There 🚀" : "Needs Focus 🔍";
    resultBox.innerHTML = `<h2>Your Score: ${score}/${quiz.length} (${percent}%)</h2><h3>${title}</h3>`;
  }
}


function loadQuiz(skill) {
  const quiz = quizzes[skill];
  let current = 0;
  let score = 0;

  const quizArea = document.getElementById('quiz-area');
  quizArea.innerHTML = ''; // Clear previous content

  showQuestion();

  function showQuestion() {
    const qData = quiz[current];
    quizArea.innerHTML = `<h3>Q${current + 1}: ${qData.q}</h3>`;
    qData.a.forEach((option, i) => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.onclick = () => {
        if (i === qData.correct) score++;
        current++;
        current < quiz.length ? showQuestion() : showResults();
      };
      quizArea.appendChild(btn);
    });
  }

  function showResults() {
    quizArea.innerHTML = `<h2>Your Score: ${score}/${quiz.length}</h2>`;
    let percent = Math.round((score / quiz.length) * 100);
    let title = percent >= 80 ? "Mastermind ⚡" : percent >= 50 ? "Getting There 🚀" : "Needs Focus 🔍";
    quizArea.innerHTML += `<h3>${title}</h3>`;
    quizArea.innerHTML += `<button onclick="loadQuiz('${skill}')">Try Again</button>`;
  }
}

  setTimeout(() => {
    document.getElementById('splash-screen').style.display = 'none';
  }, 3000);









