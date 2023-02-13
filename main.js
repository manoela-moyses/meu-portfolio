const btnMobile = document.getElementById("btn-mobile");

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
function toggleMenu(event) {
  if (event.type === 'touchstart') {
    event.preventDefault();
  }
  const nav = document.getElementById("nav");
  nav.classList.toggle("toggle-menu");
  const toggleMenu = nav.classList.contains("toggle-menu");
  event.currentTarget.setAttribute('aria-expanded', toggleMenu);
  if (toggleMenu) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");

  }
}

const aboutMeSection = document.querySelector(".about-me-section");
const projectsSection = document.querySelector(".main-section");
const contactSection = document.querySelector(".contact-section");

const btnAboutMe = document.querySelector(".about-me");
const btnProj = document.querySelector(".proj");
const btnContact = document.querySelector(".contact-me");

if (aboutMeSection) {
  btnAboutMe.style.color = "#da1381";
}

if (projectsSection) {
  btnProj.style.color = "#da1381";
}

if (contactSection) {
  btnContact.style.color = "#da1381";
}

let projects = {
  data: [
    {
      projectName: "Meu Portfólio",
      category: "Coding",
      description: "Site para apresentação dos meus projetos",
      tools: "HTML, CSS e JavaScript",
      image: "../../../assets/meu-portfolio.png",
      siteLink: "https://manoelamoyses.vercel.app/",
      githubLink: "https://github.com/manoela-moyses/meu-portfolio"
    },
    {
      projectName: "Meu Linktree",
      category: "Coding",
      description: "Árvore de links para a Bio do Instagram",
      tools: "HTML e CSS",
      image: "../../../assets/meu-linktree.png",
      siteLink: "https://manoela-moyses.github.io/meulinktree/",
      githubLink: "https://github.com/manoela-moyses/meulinktree"
    },
    {
      projectName: "Altemir W. dos Santos",
      category: "WordPress",
      subcategory: "Institutionals",
      description: "Site em WordPress feito para advogado / consultoria jurídica",
      tools: "",
      image: "../../assets/altemir.jpg",
      siteLink: "https://altemir.adv.br/",
      githubLink: ""
    },
    {
      projectName: "FocusTimer",
      category: "Coding",
      description: "Aplicação criada no Stage 05 do Programa Explorer da Rocketseat",
      tools: "HTML, CSS e JavaScript",
      image: "../../assets/focus-timer.png",
      siteLink: "https://manoela-moyses.github.io/projeto-imc/",
      githubLink: "https://github.com/manoela-moyses/FocusTimer-2.0"
    },
    {
      projectName: "RocketPay",
      category: "Coding",
      description: "Componente de cartão de crédito criado no evento Explorer Lab da Rocketseat",
      tools: "HTML, CSS e JavaScript",
      image: "../../assets/rocketpay.png",
      siteLink: "https://explorer-lab-beige.vercel.app/",
      githubLink: "https://github.com/manoela-moyses/explorer-lab"
    },
    {
      projectName: "Projeto IMC",
      category: "Coding",
      description: "Desafio 02 do Stage 05 do Programa Explorer da Rocketseat",
      tools: "HTML, CSS e JavaScript",
      image: "../../assets/imc.png",
      siteLink: "https://manoela-moyses.github.io/projeto-imc/",
      githubLink: "https://github.com/manoela-moyses/projeto-imc"
    },
    {
      projectName: "Recriando layout - Extra",
      category: "Coding",
      description: "Desafio intermediário do Stage 02 do Programa Explorer da Rocketseat",
      tools: "HTML e CSS",
      image: "../../assets/desafio-extra.png",
      siteLink: "https://stage02-extra.vercel.app/",
      githubLink: "https://github.com/manoela-moyses/stage02-extra"
    },
    {
      projectName: "Info+ Corsan",
      category: "WordPress",
      subcategory: "Blogs",
      description: "Este site é a plataforma de comunicação interna da Corsan®",
      tools: "",
      image: "../../assets/infomais.jpg",
      siteLink: "https://infomais.corsan.com.br/",
      githubLink: ""
    },
    {
      projectName: "Vet Care",
      category: "WordPress",
      subcategory: "Institutionals",
      description: "Site em WordPress feito para clínica veterinária / pet shop",
      tools: "",
      image: "../../assets/vet-care.png",
      siteLink: "http://vetcare.rf.gd",
      githubLink: ""
    },
    {
      projectName: "Móveis customizados",
      category: "Coding",
      description: "Desafio 01 do Stage 02 do Programa Explorer da Rocketseat",
      tools: "HTML e CSS",
      image: "../../assets/projeto-01.png",
      siteLink: "https://manoela-moyses.github.io/meuprojeto01/",
      githubLink: "https://github.com/manoela-moyses/meuprojeto01"
    },
    {
      projectName: "Treine me",
      category: "Coding",
      description: "Desafio 02 do Stage 02 do Programa Explorer da Rocketseat",
      tools: "HTML e CSS",
      image: "../../assets/treine-me.png",
      siteLink: "https://manoela-moyses.github.io/meuprojeto02/",
      githubLink: "https://github.com/manoela-moyses/meuprojeto02"
    },
    {
      projectName: "Macaron Shop",
      category: "WordPress",
      subcategory: "Ecommerce",
      description: "Site em WordPress feito para e-commerce de macarons",
      tools: "",
      image: "../../assets/macaron-shop.png",
      siteLink: "https://manoelamoyses.net/macaronshop/",
      githubLink: ""
    },
    {
      projectName: "Biscoito da Sorte",
      category: "Coding",
      description: "Jogo criado no Stage 05 do Programa Explorer da Rocketseat",
      tools: "HTML, CSS e JavaScript",
      image: "../../assets/biscoito-da-sorte.png",
      siteLink: "https://biscoito-da-sorte-gray.vercel.app/",
      githubLink: "https://github.com/manoela-moyses/biscoito-da-sorte"
    },
    {
      projectName: "Somos Fruki",
      category: "WordPress",
      subcategory: "Blogs",
      description: "Este site é a plataforma de comunicação interna da Fruki®",
      tools: "",
      image: "../../assets/somos-fruki.jpg",
      siteLink: "https://somosfruki.com.br/",
      githubLink: ""
    },
    {
      projectName: "Digital Fire",
      category: "WordPress",
      subcategory: "Institutionals",
      description: "Site em WordPress feito para agência digital",
      tools: "",
      image: "../../assets/digital-fire.png",
      siteLink: "https://manoelamoyses.net/digitalfire/",
      githubLink: ""
    },
    {
      projectName: "SPA Universe",
      category: "Coding",
      description: "SPA criada no Stage 06 do Programa Explorer da Rocketseat",
      tools: "HTML, CSS e JavaScript",
      image: "../../assets/spa-universe.png",
      siteLink: "https://spa-universe-tau.vercel.app/",
      githubLink: "https://github.com/manoela-moyses/spa-universe"
    },
    {
      projectName: "GitFav",
      category: "Coding",
      description: "Página de favoritos do GitHub criada no Stage 06 do Programa Explorer da Rocketseat",
      tools: "HTML, CSS e JavaScript",
      image: "../../assets/gitfav.png",
      siteLink: "https://gitfav-nine.vercel.app/",
      githubLink: "https://github.com/manoela-moyses/gitfav"
    },
    {
      projectName: "Infoproduto",
      category: "WordPress",
      subcategory: "Institutionals",
      description: "Site em WordPress feito para divulgação de infoproduto",
      tools: "",
      image: "../../assets/infoproduto.png",
      siteLink: "https://manoelamoyses.net/site-infoproduto/",
      githubLink: ""
    },
    {
      projectName: "Captura de E-mail",
      category: "WordPress",
      subcategory: "LandingPages",
      description: "Site em WordPress feito para captura de e-mail",
      tools: "",
      image: "../../assets/captura-de-email.png",
      siteLink: "https://manoelamoyses.net/captura-de-email/",
      githubLink: ""
    },
    {
      projectName: "Space Cream",
      category: "Coding",
      description: "Grid com animações criado no Stage 03 do Programa Explorer da Rocketseat",
      tools: "HTML e CSS",
      image: "../../assets/space-cream.png",
      siteLink: "https://manoela-moyses.github.io/space-cream/",
      githubLink: "https://github.com/manoela-moyses/space-cream"
    },
    {
      projectName: "10 Minutos Exercícios",
      category: "WordPress",
      subcategory: "Blogs",
      description: "Site em WordPress feito para apresentação de aplicativo",
      tools: "",
      image: "../../assets/10-minutos-exercicios.png",
      siteLink: "https://manoelamoyses.net/10minutosexercicios/",
      githubLink: ""
    },
    {
      projectName: "Jogo da adivinhação",
      category: "Coding",
      description: "Projeto criado no Stage 05 do Programa Explorer da Rocketseat",
      tools: "HTML, CSS e JavaScript",
      image: "../../assets/adivinhacao.png",
      siteLink: "https://manoela-moyses.github.io/jogo-adivinhacao/",
      githubLink: "https://github.com/manoela-moyses/jogo-adivinhacao"
    },
    {
      projectName: "Portfólio",
      category: "WordPress",
      subcategory: "Institutionals",
      description: "Site em WordPress feito para portfólio",
      tools: "",
      image: "../../assets/portfolio.png",
      siteLink: "https://manoelamoyses.net/portfolio/",
      githubLink: ""
    },
    {
      projectName: "Blog Fitness",
      category: "WordPress",
      subcategory: "Blogs",
      description: "Site em WordPress feito para administração de blog",
      tools: "",
      image: "../../assets/blog-fitness.png",
      siteLink: "https://manoelamoyses.net/blogfitness/",
      githubLink: ""
    },
    {
      projectName: "RocketLinks",
      category: "Coding",
      description: "Árvore de links criada no evento Maratona Explorer 2 da Rocketseat",
      tools: "HTML e CSS",
      image: "../../assets/rocket-links.png",
      siteLink: "https://manoela-moyses.github.io/maratona-explorer-2/",
      githubLink: "https://github.com/manoela-moyses/maratona-explorer-2"
    },
    {
      projectName: "RocketCoffe",
      category: "Coding",
      description: "Cardápio criado no evento Maratona Explorer 3 da Rocketseat",
      tools: "HTML e CSS",
      image: "../../assets/rocket-coffee.png",
      siteLink: "https://manoela-moyses.github.io/maratona-explorer-3/",
      githubLink: "https://github.com/manoela-moyses/maratona-explorer-3"
    },
    {
      projectName: "Gamecraft",
      category: "WordPress",
      subcategory: "LandingPages",
      description: "Site em WordPress feito para divulgação de curso on-line",
      tools: "",
      image: "../../assets/gamecraft.png",
      siteLink: "https://manoelamoyses.net/gamecraft/",
      githubLink: ""
    },
    {
      projectName: "Área Médica",
      category: "WordPress",
      subcategory: "Institutionals",
      description: "Site em WordPress feito para clínica médica",
      tools: "",
      image: "../../assets/clicnica-medica.jpg",
      siteLink: "https://manoelamoyses.net/clinicamedica/",
      githubLink: ""
    },
    {
      projectName: "Crie seu evento",
      category: "Coding",
      description: "Formulário criado no Stage 03 do Programa Explorer da Rocketseat",
      tools: "HTML e CSS",
      image: "../../assets/form.png",
      siteLink: "https://manoela-moyses.github.io/criando-formularios/",
      githubLink: "https://github.com/manoela-moyses/criando-formularios"
    },
    {
      projectName: "Responsividade",
      category: "Coding",
      description: "Desafio 02 do Stage 03 do Programa Explorer da Rocketseat",
      tools: "HTML e CSS",
      image: "../../assets/responsividade.png",
      siteLink: "https://manoela-moyses.github.io/responsividade/",
      githubLink: "https://github.com/manoela-moyses/responsividade"
    },
    {
      projectName: "Componente Trabalhos",
      category: "Coding",
      description: "Desafio 03 do Stage 03 do Programa Explorer da Rocketseat",
      tools: "HTML e CSS",
      image: "../../assets/trabalhos.png",
      siteLink: "https://manoela-moyses.github.io/componente-trabalhos/",
      githubLink: "https://github.com/manoela-moyses/componente-trabalhos"
    },
    {
      projectName: "Imobiliária",
      category: "WordPress",
      subcategory: "Institutionals",
      description: "Site em WordPress feito para imobiliária",
      tools: "",
      image: "../../assets/imobiliaria.jpg",
      siteLink: "https://manoelamoyses.net/imobiliaria/",
      githubLink: ""
    },
    {
      projectName: "Tech Club",
      category: "WordPress",
      subcategory: "Ecommerce",
      description: "Site em WordPress feito para e-commerce de tecnologia",
      tools: "",
      image: "../../assets/tech-club.png",
      siteLink: "https://manoelamoyses.net/techclub/",
      githubLink: ""
    },
    {
      projectName: "Rocket.sect",
      category: "Coding",
      description: "Desafio avançado do Stage 02 do Programa Explorer da Rocketseat",
      tools: "HTML e CSS",
      image: "../../assets/rocket-sect.png",
      siteLink: "https://manoela-moyses.github.io/meuprojeto03/",
      githubLink: "https://github.com/manoela-moyses/meuprojeto03"
    },
    {
      projectName: "Projeto Flexbox&Grid",
      category: "Coding",
      description: "Aplicação criada no Programa FullStack JavaScript Profissional da OneBitCode",
      tools: "HTML e CSS",
      image: "../../assets/flexbox-grid.png",
      siteLink: "https://manoela-moyses.github.io/exercicio-flexbox-grid/",
      githubLink: "https://github.com/manoela-moyses/exercicio-flexbox-grid"
    },
    {
      projectName: "Mega Sena",
      category: "Coding",
      description: "Aplicação criada no Minicamp Data&Dev da XPE",
      tools: "HTML, CSS e JavaScript (com LocalStorage)",
      image: "../../assets/megasena.png",
      siteLink: "https://manoela-moyses.github.io/megasena-xpe/",
      githubLink: "https://github.com/manoela-moyses/megasena-xpe"
    },
    {
      projectName: "Calculadora de IMC",
      category: "Coding",
      description: "Aplicação criada no Minicamp Data&Dev da XPE",
      tools: "HTML, CSS e JavaScript",
      image: "../../assets/calculadora-imc.png",
      siteLink: "https://manoela-moyses.github.io/calculadora-imc-xpe/",
      githubLink: "https://github.com/manoela-moyses/calculadora-imc-xpe"
    },
  ],
};

for (let i of projects.data) {
  let card = document.createElement("div");
  card.classList.add("card", i.category, i.subcategory, "hide");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container-proj");

  let name = document.createElement("h3");
  name.classList.add("project-name");
  name.innerText = i.projectName;
  container.appendChild(name);

  let description = document.createElement("p");
  description.classList.add("project-description")
  description.innerText = i.description;
  container.appendChild(description);

  let tools = document.createElement("span");
  tools.classList.add("project-tools");
  tools.innerText = i.tools;
  container.appendChild(tools);

  let btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");

  let siteLink = document.createElement("a");
  siteLink.classList.add("btn1");
  siteLink.setAttribute("href", i.siteLink);
  siteLink.setAttribute("target", "_blank");
  siteLink.innerText = "Acesse";
  btnContainer.appendChild(siteLink);

  if (i.category == "Coding") {
    let githubLink = document.createElement("a");
    githubLink.classList.add("btn2");
    githubLink.setAttribute("href", i.githubLink);
    githubLink.setAttribute("target", "_blank");
    githubLink.innerText = "GitHub";
    btnContainer.appendChild(githubLink);
  }

  if (window.location.pathname === "/pages/projects/") {
    document.getElementById("projects").appendChild(card);
  }
  card.appendChild(container);
  card.appendChild(btnContainer);
};

function filterProject(value) {
  let elements = document.querySelectorAll(".card");
  let secondaryFilter = document.querySelector(".secondary-buttons");
  let allBtn = document.querySelector("#all-btn");
  let wpBtn = document.querySelector("#wp-btn");
  let codingBtn = document.querySelector("#cod-btn");
  let blogBtn = document.querySelector("#blog-btn");
  let institucionalsBtn = document.querySelector("#inst-btn");
  let landingBtn = document.querySelector("#land-btn");
  let ecommerceBtn = document.querySelector("#ecom-btn");

  elements.forEach((element) => {
    if (value == "todos") {
      element.classList.remove("hide");
      secondaryFilter.classList.add("hide");
      allBtn.style.backgroundColor = "#7562e0";
      codingBtn.style.backgroundColor = "transparent";
      wpBtn.style.backgroundColor = "transparent";
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }

      if (value == "Coding") {
        secondaryFilter.classList.add("hide");
        allBtn.style.backgroundColor = "transparent";
        codingBtn.style.backgroundColor = "#7562e0";
        wpBtn.style.backgroundColor = "transparent";
      }

      if (value == "WordPress") {
        secondaryFilter.classList.remove("hide");
        secondaryFilter.classList.add('active-bar');
        allBtn.style.backgroundColor = "transparent";
        codingBtn.style.backgroundColor = "transparent";
        wpBtn.style.backgroundColor = "#7562e0";
        blogBtn.style.backgroundColor = "transparent";
        institucionalsBtn.style.backgroundColor = "transparent";
        landingBtn.style.backgroundColor = "transparent";
        ecommerceBtn.style.backgroundColor = "transparent";
      };

      if (value == "Blogs") {
        allBtn.style.backgroundColor = "transparent";
        codingBtn.style.backgroundColor = "transparent";
        wpBtn.style.backgroundColor = "#7562e0";
        blogBtn.style.backgroundColor = "#7562e0";
        institucionalsBtn.style.backgroundColor = "transparent";
        landingBtn.style.backgroundColor = "transparent";
        ecommerceBtn.style.backgroundColor = "transparent";
      }

      if (value == "Institutionals") {
        allBtn.style.backgroundColor = "transparent";
        codingBtn.style.backgroundColor = "transparent";
        wpBtn.style.backgroundColor = "#7562e0";
        blogBtn.style.backgroundColor = "transparent";
        institucionalsBtn.style.backgroundColor = "#7562e0";
        landingBtn.style.backgroundColor = "transparent";
        ecommerceBtn.style.backgroundColor = "transparent";
      }

      if (value == "LandingPages") {
        allBtn.style.backgroundColor = "transparent";
        codingBtn.style.backgroundColor = "transparent";
        wpBtn.style.backgroundColor = "#7562e0";
        blogBtn.style.backgroundColor = "transparent";
        institucionalsBtn.style.backgroundColor = "transparent";
        landingBtn.style.backgroundColor = "#7562e0";
        ecommerceBtn.style.backgroundColor = "transparent";
      }

      if (value == "Ecommerce") {
        allBtn.style.backgroundColor = "transparent";
        codingBtn.style.backgroundColor = "transparent";
        wpBtn.style.backgroundColor = "#7562e0";
        blogBtn.style.backgroundColor = "transparent";
        institucionalsBtn.style.backgroundColor = "transparent";
        landingBtn.style.backgroundColor = "transparent";
        ecommerceBtn.style.backgroundColor = "#7562e0";
      }

      if (secondaryFilter.classList.contains('active-bar')) {
        wpBtn.style.backgroundColor = "#7562e0";
        wpBtn.style.color = "white";
      }

      if (secondaryFilter.classList.contains('hide')) {
        secondaryFilter.classList.remove('active-bar')
      }

      if (!secondaryFilter.classList.contains('active-bar')) {
        wpBtn.style.backgroundColor = "transparent";
        wpBtn.style.color = "white"
      }
    }
  });
};

window.onload = () => {
  filterProject("todos");
};