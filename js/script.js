// <!-- name:riya -->
// <!-- student id: 300363449 -->
// <!-- CSIS 3380 Assignment -->
(function() {
    "use strict";

    function Pagination() {
      
        const users =[
            {
                "name" : "iboya vat",
                "image" : "https://randomuser.me/api/portraits/thumb/women/67.jpg",
                "email" : "iboya.vat@gmail.com",
                "joined" : "07/15/16"
            },
            {
                "name" : "aapo niskanen",
                "image" : "https://randomuser.me/api/portraits/thumb/men/34.jpg",
                "email": "aapo.niskanen@gmail.com",
                "joined" : "07/15/17"
            },
            {
                "name" : "zilda moreira",
                "image" : "https://randomuser.me/api/portraits/thumb/women/38.jpg",
                "email": "zilda.moreira@gmail.com",
                "joined" : "08/15/18"
            },
            {
                "name" : "lilou le gall",
                "image" : "https://randomuser.me/api/portraits/thumb/women/23.jpg",
                "email":"liloule.gall@gmail.com",
                "joined" : "09/15/19"
            },
            {
                "name" : "lucy hall",
                "image" : "https://randomuser.me/api/portraits/thumb/women/24.jpg",
                "email":"lucy.hall@gmail.com",
                "joined" : "10/16/20"
            },
            {
                "name" : "sara alves",
                "image" : "https://randomuser.me/api/portraits/thumb/women/14.jpg",
                "email":"sala.alves@gmail.com",
                "joined" : "11/17/21"
            },
            {
                "name" : "ramon macrae",
                "image" : "https://randomuser.me/api/portraits/thumb/men/49.jpg",
                "email":"ramon.macrae@gmail.com",
                "joined" : "12/18/22"
            },
            {
                "name" : "connor taylor",
                "image" : "https://randomuser.me/api/portraits/thumb/men/15.jpg",
                "email":"connor.taylor@gmail.com","joined" : "13/19/23"
            },
            {
                "name" : "aymeric morel",
                "image" : "https://randomuser.me/api/portraits/thumb/men/11.jpg",
                "email":"aymeric.morel@gmail.com",
                "joined" : "14/20/23"
            },
            {
                "name" : "lorenz otto",
                "image" : "https://randomuser.me/api/portraits/thumb/men/49.jpg",
                "email":"lorenz.otto@gmail.com",
                "joined" : "15/21/22"
            },
            {
                "name" : "karl williamson",
                "image" : "https://randomuser.me/api/portraits/thumb/men/29.jpg",
                "email":"karl.williamson@gmail.com",
                 "joined" : "16/22/20"
            },
            {
                "name" : "ouassim heering",
                "image" : "https://randomuser.me/api/portraits/thumb/men/34.jpg",
                "email":"ouassim.heering@gmail.com",
                  "joined" : "17/23/19"
            },
            {
                "name" : "roberto molina",
                "image" : "https://randomuser.me/api/portraits/thumb/men/91.jpg",
                "email":"roberto.molina@gmail.com",
                "joined" : "18/24/18"
            },
            {
                "name" : "jordan hubert",
                "image" : "https://randomuser.me/api/portraits/thumb/men/28.jpg",
                "email":"jordan.hubert@gmail.com",
                 "joined" : "06/25/17"
            },
            {
                "name" : "melvin baker",
                "image" : "https://randomuser.me/api/portraits/thumb/men/29.jpg",
                "email":"melvin.baker@gmail.com",
                 "joined" : "09/26/16"
            },
            {
                "name" : "everett gordon",
                "image" : "https://randomuser.me/api/portraits/thumb/men/26.jpg",
                "email":"everett.gordon@gmail.com",
                 "joined" : "06/27/15"
            },
            {
                "name" : "aiden ma",
                "image" : "https://randomuser.me/api/portraits/thumb/men/82.jpg",
                "email":"aiden.ma@gmail.com",
                "joined" : "07/28/12"
            },
            {
                "name" : "florent gerard",
                "image" : "https://randomuser.me/api/portraits/thumb/men/62.jpg",
                "email":"florent.gerard@gmail.com",
                "joined" : "02/29/13"
            },
            {
                "name" : "amber chen",
                "image" : "https://randomuser.me/api/portraits/thumb/women/96.jpg",
                "email":"amber.chen@gmail.com",
                "joined" : "07/20/12"
            },
            {
                "name" : "alexandra davies",
                "image" : "https://randomuser.me/api/portraits/thumb/women/9.jpg",
                "email":"alexandra.davies@gmail.com",
                 "joined" : "05/20/11"
            },
            {
                "name" : "sergio cole",
                "image" : "https://randomuser.me/api/portraits/thumb/men/57.jpg",
                "email":"sergio.cole@gmail.com",
                 "joined" : "02/17/15"
            },
            {
                "name" : "edgar dixon",
                "image" : "https://randomuser.me/api/portraits/thumb/men/98.jpg",
                "email":"edgar.dixon@gmail.com",
                 "joined" : "06/30/11"
            },
            {
                "name" : "kirk myers",
                "image" : "https://randomuser.me/api/portraits/thumb/men/94.jpg",
                "email":"kirk.myers@gmail.com",
                "joined" : "09/31/15"
            },
            {
                "name" : "ani hesseling",
                "image" : "https://randomuser.me/api/portraits/thumb/women/28.jpg",
                "email":"ani.hesseling@gmail.com",
                "joined" : "08/14/16"
            },
            {
                "name" : "victoire bonnet",
                "image" : "https://randomuser.me/api/portraits/thumb/women/24.jpg",
                "email":"victorie.bonnet@gmail.com",
                "joined" : "05/13/16"
            },
            {
                "name" : "marcos morales",
                "image" : "https://randomuser.me/api/portraits/thumb/men/44.jpg",
                "email":"marcos.morales@gmail.com",
                 "joined" : "01/12/12"
            },
            {
                "name" : "nils neumann",
                "image" : "https://randomuser.me/api/portraits/thumb/men/75.jpg",
                "email":"nile.nemann!@gmail.com",
                 "joined" : "03/11/12"
            },
            {
                "name" : "emily harrison",
                "image" : "https://randomuser.me/api/portraits/thumb/women/86.jpg",
                "email":"emly.harrison@gmail.com",
                 "joined" : "07/18/15"
            },
            {
                "name" : "matthew fortin",
                "image" : "https://randomuser.me/api/portraits/thumb/men/41.jpg",
                "email":"matthew.fortin@gmail.com",
                "joined" : "03/18/15"
            },
            {
                "name" : "charlotte steward",
                "image" : "https://randomuser.me/api/portraits/thumb/women/32.jpg",
                "email":"charlotte.steward@gmail.com",
                 "joined" : "02/18/11"
            },
            {
                "name" : "marceau rodriguez",
                "image" : "https://randomuser.me/api/portraits/thumb/men/3.jpg",
                "email":"marceau.rodriguez@gmail.com",
                 "joined" : "07/13/14"
            },
            {
                "name" : "hudson anderson",
                "image" : "https://randomuser.me/api/portraits/thumb/men/91.jpg",
                "email":"hudson.anderson@gmail.com",
                 "joined" : "09/12/15"
            }
        ];

      const prevButton = document.getElementById('button_prev');
      const nextButton = document.getElementById('button_next');
      const clickPageNumber = document.querySelectorAll('.clickPageNumber');
      
      let current_page = 1;
      let records_per_page = 10;
      
      this.init = function() {
          changePage(1);
          pageNumbers();
          selectedPage();
          clickPage();
          addEventListeners();
     }
      
      let addEventListeners = function() {
          prevButton.addEventListener('click', prevPage);
          nextButton.addEventListener('click', nextPage);   
      }
            
      let selectedPage = function() {
          let page_number = document.getElementById('page_number').getElementsByClassName('clickPageNumber'); 
          for (let i = 0; i < page_number.length; i++) {
              if (i == current_page - 1) {
                  page_number[i].style.opacity = "1.0";
              } 
              else {
                  page_number[i].style.opacity = "0.5";
              }
          }   
      }  
      
      let checkButtonOpacity = function() {
        current_page == 1 ? prevButton.classList.add('opacity') : prevButton.classList.remove('opacity');
        current_page == numPages() ? nextButton.classList.add('opacity') : nextButton.classList.remove('opacity');
      }

      let changePage = function(page) {
          const listingTable = document.getElementById('contact-list');

          if (page < 1) {
              page = 1;
          } 
          if (page > (numPages() -1)) {
              page = numPages();
          }
       
          listingTable.innerHTML = "";

          for(var i = (page -1) * records_per_page; i < (page * records_per_page) && i < users.length; i++) {
              listingTable.innerHTML += "<li class=\"contact-item cf\"><div class=\"contact-details\"><img class=\"avatar\" src="+users[i].image+"><h3>"+users[i].name+"</h3><span class=\"email\">"+users[i].email+"</span></div> <div class=\"joined-details\"> <span class=\"date\">"+users[i].joined+"</span> </div> </li>";
          }
          checkButtonOpacity();
          selectedPage();
      }

      const id=document.getElementById('hello');
      id.innerHTML-""
    

      let prevPage = function() {
          if(current_page > 1) {
              current_page--;
              changePage(current_page);
          }
      }

      let nextPage = function() {
          if(current_page < numPages()) {
              current_page++;
              changePage(current_page);
          } 
      }

      let clickPage = function() {
          document.addEventListener('click', function(e) {
              if(e.target.nodeName == "SPAN" && e.target.classList.contains("clickPageNumber")) {
                  current_page = e.target.textContent;
                  changePage(current_page);
              }
          });
      }

      let pageNumbers = function() {
          let pageNumber = document.getElementById('page_number');
              pageNumber.innerHTML = "";

          for(let i = 1; i < numPages() + 1; i++) {
              pageNumber.innerHTML += "<span class='clickPageNumber'>" + i + "</span>";
          }
      }

      let numPages = function() {
          return Math.ceil(users.length / records_per_page);  
      }
   }
  let pagination = new Pagination();
  pagination.init();
})();
