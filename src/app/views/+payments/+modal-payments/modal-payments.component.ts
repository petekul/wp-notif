import {
    Component,
    OnInit,
  } from '@angular/core';
  import {BrowserModule} from '@angular/platform-browser';
  import {BrowserAnimationsModule} from '@angular/platform-browser-animations';
  import createNumberMask from 'text-mask-addons/dist/createNumberMask';

  console.log('`Modal Payments` component loaded asynchronously');
  
  @Component({
    selector: 'modal-payments',
    styleUrls: [ './modal-payments.component.scss' ],
    templateUrl: './modal-payments.component.html'
  })
  export class ModalPaymentsComponent implements OnInit {
  public config = {};
  public themes = {
    list: ['apple', 'intel', 'netflix', 'lego'],
    active: '',
    netflix: {
      logo: 'assets/img/payments/netflix/logo.png',
      theme: 'dark', // light, dark
      background: 'url(\'assets/img/payments/netflix/bg.jpg\')',
      container: {
        borderRadius: 0,
        borderColor: '#f3f4f3',
        borderWidth: 0,
        topBackground: '#f3f4f3',
        bottomBackground: '#f3f4f3',
  
        key: {
          color: '#111'
        },
        input: {
          color: '#111',
          background: '#f3f4f3'
        },
        item: {
          color: '#111',
          img: 'assets/img/payments/netflix/item.png',
          name: 'Netflix Premium',
          description: 'Ultra HD available'
        },
        button: {
          label: 'Pay',
          amount: 9.99,
          inactiveBackground: '',
          activeBackground: '',
          focusBorder: '',
          background: '#e50914',
          borderRadius: 0,
          color: '#fff'
        }
      }
    },
    intel: {
      logo: 'assets/img/payments/intel/logo.png',
      theme: 'light', // light, dark
      background: '#11447e',
      container: {
        borderRadius: 3,
        borderColor: '#11447e',
        borderWidth: 0,
        topBackground: '#1c70b5',
        bottomBackground: '#fff',
  
        key: {
          color: '#eee'
        },
        input: {
          color: '#fff',
          background: '#1566a7',
          textIndent: '.5rem'
        },
        item: {
          color: '#11447e',
          img: 'assets/img/payments/intel/item.png',
          name: 'Intel Core i7-7700K',
          description: '7th Gen processor'
        },
        button: {
          label: 'Pay',
          amount: 299,
          inactiveBackground: '',
          activeBackground: '',
          focusBorder: '',
          background: '#11457e',
          borderRadius: 10,
          color: '#fff'
        }
      }
    },
    apple: {
      logo: 'assets/img/payments/apple/logo.png',
      theme: 'dark', // light, dark
      background: '#f5f5f5',
      container: {
        borderRadius: 15,
        borderColor: '#eee',
        borderWidth: 1,
        topBackground: '#fff',
        bottomBackground: '#fff',
  
        key: {
          color: '#393939'
        },
        input: {
          color: '#393939',
          background: '#fff'
        },
        item: {
          color: '#393939',
          img: 'assets/img/payments/apple/item.jpg',
          name: 'Apple Watch',
          description: 'Series 1 Smart Watch'
        },
        button: {
          label: 'Pay',
          amount: 669,
          inactiveBackground: '',
          activeBackground: '',
          focusBorder: '',
          background: '#111',
          borderRadius: 30,
          color: '#fff'
        }
      }
    },
    lego: {
      logo: 'assets/img/payments/lego/logo.png',
      theme: 'dark', // light, dark
      background: 'url(\'assets/img/payments/lego/bg.jpg\')',
      container: {
        borderRadius: 30,
        borderColor: '#fff39d',
        borderWidth: 5,
        topBackground: '#fff39d',
        bottomBackground: '#fff39d',
  
        key: {
          color: '#393939'
        },
        input: {
          color: '#393939',
          background: '#fff9c7',
          textIndent: '.5rem'
        },
        item: {
          color: '#393939',
          img: 'assets/img/payments/lego/item.png',
          name: 'City Square',
          description: '2017 Lego set'
        },
        button: {
          label: 'Pay',
          amount: 16.99,
          inactiveBackground: '',
          activeBackground: '',
          focusBorder: '',
          background: '#111',
          borderRadius: 30,
          color: '#fff'
        }
      }
    }
  };

  public form = {
    formState: '',
    cardType: '',
    cardNumber: {
      model: '',
      mask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]
    },
    expiryDate: {
      model: '',
      mask: [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
    },
    securityCode: {
      model: '',
      mask: createNumberMask({
        prefix: '',
        suffix: ''
      })
    }
  }

  constructor() {}

  ngOnInit() {
    console.log('`Modal Payments` component');  
    this.switchTheme('apple');
  }

  switchTheme(theme) {
    this.themes.active = theme;
    this.config = this.themes[theme];
    console.log(this.config)
  }

  getCardType(number){
    this.form.cardType = '';

    var re = new RegExp("^4");
    if (number.match(re) != null)
      this.form.cardType = 'visa';

    if (/^5[1-5]/.test(number))
      this.form.cardType = 'mastercard';

    re = new RegExp("^3[47]");
    if (number.match(re) != null)
      this.form.cardType = 'amex';
  }

  onSubmit() {
    console.log("Form Submitted!");
    this.form.formState = 'loading';
    setTimeout(() => {  
      this.form.formState = '';
    }, 2000);
  }
}