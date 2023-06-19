const btnLive = 'See live';
const btnSource = 'See source';

const works = [
  {
    name: 'Book Store App',
    cat: ['Showcase', 'Full Stack Dev', 2023],
    description: [
      `Book Store App a project to showcase of React Redux. An app were you can add the book you are reading and show much
      you have advanced reading it. Data use using microservices or APIs.`,
      'Book Store App a project to showcase of React Redux. Store of books with added interactivity'],
    tags: ['React', 'Rest API', 'JSX', 'Redux'],
    snapshot: './images/snapshot-booklist.png',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [btnLive, btnSource],
    connectionsURL: ['https://bookstore-react-redux-kappa.vercel.app/', 'https://github.com/lordksix/bookstore-react-redux'],
  },
  {
    name: 'Meal App',
    cat: ['Showcase', 'Full Stack Dev', 2023],
    description: [
      `Meal App is a project to connect a REST API with your own App or Website, adding more interactivity. You can add comments, likes
       and reservations. Dinamically render from a REST API. Completely modular. Ready to Plug 'n' Play.`,
      'App that integrates different REST APIs to add user interactions to you data, no matter were it comes from.'],
    tags: ['REST API', 'Webpack', 'JavaScript'],
    snapshot: './images/snapshot-MealApp.png',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [btnLive, btnSource],
    connectionsURL: ['https://lordksix.github.io/Meals-API-template/', 'https://github.com/lordksix/Meals-API-template'],
  },
  {
    name: 'Producer App',
    cat: ['EPA TP', 'Full Stack Dev', 2023],
    description: [
      `Producer Web App is a project for a company that requires a company website where it can login to manage its data.
      Show information about the company and, also to showcase its past, current and future projects, sell tickets, show availability in events, with more function to be added.`,
      'Template solution for any small company that want to start having a internet presence.'],
    tags: ['Django', 'Python', 'JavaScript'],
    snapshot: './images/snapshot-producerApp.png',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [btnLive, btnSource],
    connectionsURL: ['https://github.com/lordksix/producerApp', 'https://github.com/lordksix/producerApp'],
  },
  {
    name: 'Minimalistic ToDo List',
    cat: ['lordksix', 'Full Stack Dev', 2023],
    description: [
      'Minimalistic TodoList App is a lightweight, minimalistic TodoList App using ES6, ESM and webpack.',
      'Minimalistic TodoList App is a lightweight, minimalistic TodoList App using ES6, ESM and webpack.'],
    tags: ['Webpack', 'CSS', 'HTML', 'JavaScript'],
    snapshot: './images/snapshot-toDoApp.png',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [btnLive, btnSource],
    connectionsURL: ['https://lordksix.github.io/Minimalistic-ToDoList-App/', 'https://github.com/lordksix/Minimalistic-ToDoList-App'],
  },
];

const bodyTag = document.querySelector('body');

function projectModal(e) {
  const docFragment = document.createDocumentFragment();
  const workCardInf = works[parseInt(e.target.dataset.workbtn, 10)];

  const projectOverlay = document.createElement('div');
  projectOverlay.classList.add('project-overlay-wrapper');

  const projectCtn = document.createElement('div');
  projectCtn.classList.add('project-overlay', 'work-card');

  const projecHeadingCtn = document.createElement('div');
  projecHeadingCtn.classList.add('work-title-container');

  const projectCloseBtn = document.createElement('span');
  projectCloseBtn.textContent = 'X';
  projectCloseBtn.classList.add('work-clase', 'work-title');

  const projectHeading = document.createElement('h2');
  projectHeading.textContent = workCardInf.name;
  projectHeading.classList.add('work-title');

  projecHeadingCtn.appendChild(projectHeading);
  projecHeadingCtn.appendChild(projectCloseBtn);
  docFragment.appendChild(projecHeadingCtn);

  const workCat = document.createElement('ul');
  workCat.classList.add('work-cat');
  for (let i = 0; i < workCardInf.cat.length; i += 1) {
    const catList = document.createElement('li');
    if (i === 0) catList.classList.add('cat-title');
    else catList.classList.add('cat-descrip');
    catList.textContent = workCardInf.cat[i];
    workCat.appendChild(catList);
  }
  docFragment.appendChild(workCat);

  const workImage = document.createElement('img');
  workImage.classList.add('work-image');
  workImage.src = workCardInf.snapshot;
  workImage.alt = `${workCardInf.name} Project, ${workCardInf.cat[2]}`;
  docFragment.appendChild(workImage);

  const workCardBody = document.createElement('div');
  workCardBody.classList.add('work-card-body');

  const workDescrip = document.createElement('p');
  workDescrip.classList.add('work-descrip');
  // eslint-disable-next-line prefer-destructuring
  workDescrip.textContent = workCardInf.description[0];
  workCardBody.appendChild(workDescrip);

  docFragment.appendChild(workCardBody);

  const workCardFooter = document.createElement('div');
  workCardFooter.classList.add('work-title-footer');

  const workCardLangs = document.createElement('ul');
  workCardLangs.classList.add('work-langs');
  workCardInf.tags.forEach((tag) => {
    const langList = document.createElement('li');
    langList.classList.add('work-lang');
    langList.textContent = tag;
    workCardLangs.appendChild(langList);
  });

  const workCardBtnsCtn = document.createElement('div');
  workCardBtnsCtn.classList.add('work-btns');
  for (let i = 0; i < 2; i += 1) {
    const workCardBtnsLink = document.createElement('a');
    workCardBtnsLink.href = workCardInf.connectionsURL[i];
    workCardBtnsLink.target = '_blank';
    const workCardBtns = document.createElement('button');
    workCardBtns.classList.add('work-btn');
    const workCardBtnsText = document.createElement('span');
    workCardBtnsText.textContent = workCardInf.connectionstext[i];
    workCardBtns.appendChild(workCardBtnsText);
    const workCardBtnsImg = document.createElement('img');
    workCardBtnsImg.src = workCardInf.connectionsBtn[i];
    workCardBtnsImg.alt = workCardInf.connectionstext[i];
    workCardBtnsImg.classList.add('work-image');
    workCardBtns.appendChild(workCardBtnsImg);

    workCardBtnsLink.append(workCardBtns);
    workCardBtnsCtn.appendChild(workCardBtnsLink);
  }

  workCardFooter.appendChild(workCardLangs);
  workCardFooter.appendChild(workCardBtnsCtn);
  workCardBody.appendChild(workCardFooter);
  docFragment.appendChild(workCardBody);

  projectCtn.appendChild(docFragment);
  projectOverlay.appendChild(projectCtn);
  bodyTag.appendChild(projectOverlay);

  const closeBtn = document.querySelector('.work-clase');
  closeBtn.addEventListener('click', () => bodyTag.removeChild(projectOverlay));
}

function renderworks() {
  const docFragmentSd = document.createDocumentFragment();
  const docFragment = document.createDocumentFragment();
  const docFragementFinal = document.createDocumentFragment();

  const projectOverlay = document.createElement('ul');
  projectOverlay.classList.add('works');
  const introSection = document.querySelector('#intro');
  const workSection = document.createElement('section');
  workSection.classList.add('scroll', 'modal-bg');
  workSection.setAttribute('id', 'works');

  for (let i = 0; i < works.length; i += 1) {
    const workCardInf = works[i];
    const projectCtn = document.createElement('li');
    projectCtn.classList.add('work');

    const workImage = document.createElement('img');
    workImage.classList.add('work-image');
    workImage.src = workCardInf.snapshot;
    workImage.alt = `${workCardInf.name} Project, ${workCardInf.cat[2]}`;
    docFragmentSd.appendChild(workImage);

    const workCard = document.createElement('div');
    workCard.classList.add('work-card');

    const projectHeading = document.createElement('h2');
    projectHeading.textContent = workCardInf.name;
    projectHeading.classList.add('work-title');
    docFragment.appendChild(projectHeading);

    const workCat = document.createElement('ul');
    workCat.classList.add('work-cat');
    for (let i = 0; i < workCardInf.cat.length; i += 1) {
      const catList = document.createElement('li');
      if (i === 0) catList.classList.add('cat-title');
      else catList.classList.add('cat-descrip');
      catList.textContent = workCardInf.cat[i];
      workCat.appendChild(catList);
    }
    docFragment.appendChild(workCat);

    const workDescrip = document.createElement('p');
    workDescrip.classList.add('work-descrip');
    // eslint-disable-next-line prefer-destructuring
    workDescrip.textContent = workCardInf.description[1];
    docFragment.appendChild(workDescrip);

    const workCardLangs = document.createElement('ul');
    workCardLangs.classList.add('work-langs');
    workCardInf.tags.forEach((tag) => {
      const langList = document.createElement('li');
      langList.classList.add('work-lang');
      langList.textContent = tag;
      workCardLangs.appendChild(langList);
    });
    docFragment.appendChild(workCardLangs);

    const workCardBtnsCtn = document.createElement('div');
    workCardBtnsCtn.classList.add('work-btns');
    const workCardBtns = document.createElement('button');
    workCardBtns.classList.add('work-btn');
    workCardBtns.textContent = 'See project';
    workCardBtns.setAttribute('data-workBtn', `${i}`);
    workCardBtnsCtn.append(workCardBtns);
    docFragment.appendChild(workCardBtnsCtn);
    workCard.append(docFragment);
    docFragmentSd.appendChild(workCard);
    projectCtn.appendChild(docFragmentSd);
    docFragementFinal.appendChild(projectCtn);
  }

  projectOverlay.appendChild(docFragementFinal);
  workSection.appendChild(projectOverlay);
  introSection.parentNode.insertBefore(workSection, introSection.nextSibling);
  const projectBtns = document.querySelectorAll('.work .work-btn');
  projectBtns.forEach((btn) => btn.addEventListener('click', projectModal));
}

window.addEventListener('load', renderworks);