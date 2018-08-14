import {
    Component,
    OnInit,
  } from '@angular/core';
  import {BrowserModule} from '@angular/platform-browser';
  import {BrowserAnimationsModule} from '@angular/platform-browser-animations';
  import createNumberMask from 'text-mask-addons/dist/createNumberMask';

  console.log('`Inline Payments` component loaded asynchronously');
  
  @Component({
    selector: 'inline-payments',
    styleUrls: [ './inline-payments.component.scss' ],
    templateUrl: './inline-payments.component.html'
  })
  export class InlinePaymentsComponent implements OnInit {
    public edit = {
      active: ''
    };
    public config = {};
    public themes = {
      list: ['apple'],
      active: '',
      apple: {
        logo: 'assets/img/payments/apple/logo.png',
        theme: 'dark', // light, dark
        background: '#dce4e8',
        container: {
          borderRadius: 8,
          borderColor: '#2a586f',
          borderWidth: 0,
          topBackground: '#fff',
          bottomBackground: '#fff',
    
          key: {
            color: '#999'
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
            label: 'Authorize',
            amount: 669,
            inactiveBackground: '',
            activeBackground: '',
            focusBorder: '',
            background: '#2a586f',
            borderRadius: 0,
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
        mask: [/\d/, /\d/, '/', /\d/, /\d/]
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
      console.log('`Inline Payments` component');  
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

    editElement(el) {
      this.edit.active = el;
    }
  }