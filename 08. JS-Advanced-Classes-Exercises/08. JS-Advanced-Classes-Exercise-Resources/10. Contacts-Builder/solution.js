class Contact {
    constructor(firstName, lastName, phone, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.phone = phone;
      this.email = email;
      this._online = false;
  
      // Create article element but don't append it yet
      this.articleElement = this._createContactElement();
    }
  
    get online() {
      return this._online;
    }
  
    set online(value) {
      this._online = value;
      if (this.articleElement) {
        const titleDiv = this.articleElement.querySelector('.title');
        if (value) {
          titleDiv.classList.add('online');
        } else {
          titleDiv.classList.remove('online');
        }
      }
    }
  
    _createContactElement() {
      const article = document.createElement('article');
  
      const titleDiv = document.createElement('div');
      titleDiv.className = 'title';
      titleDiv.textContent = `${this.firstName} ${this.lastName}`;
  
      const toggleButton = document.createElement('button');
      toggleButton.innerHTML = '&#8505;';
      toggleButton.addEventListener('click', () => {
        const infoDiv = article.querySelector('.info');
        infoDiv.style.display = infoDiv.style.display === 'none' ? 'block' : 'none';
      });
  
      titleDiv.appendChild(toggleButton);
      article.appendChild(titleDiv);
  
      const infoDiv = document.createElement('div');
      infoDiv.className = 'info';
      infoDiv.style.display = 'none'; // Initially hidden
  
      const phoneSpan = document.createElement('span');
      phoneSpan.innerHTML = `&phone; ${this.phone}`;
      infoDiv.appendChild(phoneSpan);
  
      const emailSpan = document.createElement('span');
      emailSpan.innerHTML = `&#9993; ${this.email}`;
      infoDiv.appendChild(emailSpan);
  
      article.appendChild(infoDiv);
  
      return article;
    }
  
    render(id) {
      const container = document.getElementById(id);
      if (container) {
        container.appendChild(this.articleElement);
      } else {
        console.error(`Container with id "${id}" not found.`);
      }
    }
  }
  
  // Пример за използване
  document.addEventListener('DOMContentLoaded', () => {
    const contact1 = new Contact('John', 'Doe', '123-456-789', 'john.doe@example.com');
    contact1.render('main');
    contact1.online = true;
  
    const contact2 = new Contact('Jane', 'Smith', '987-654-321', 'jane.smith@example.com');
    contact2.render('main');
  });