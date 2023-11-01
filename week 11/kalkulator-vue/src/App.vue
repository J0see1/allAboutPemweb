<template>
  <div>
    <h1>SIMPLE CALCULATOR</h1>
    <input type="text" name="kotak-1" v-model="input1" />
    <input type="text" name="kotak-2" v-model="input2" /> <br>
    <button type="button" value="+" @click="calculate('+')">+</button>
    <button type="button" value="-" @click="calculate('-')">-</button>
    <button type="button" value="*" @click="calculate('*')">*</button>
    <button type="button" value="/" @click="calculate('/')">/</button>
    <h2>{{ result }}</h2>

    <br /><br /><br /><br />
    <h1>SEMI COMPLEX CALCULATOR</h1>
    <input type="text" v-model="screen"><br>
    <input type="button" value="1" @click="display('1')" />
    <input type="button" value="2" @click="display('2')" />
    <input type="button" value="3" @click="display('3')" />
    <input type="button" value="4" @click="display('4')" />
    <input type="button" value="5" @click="display('5')" /><br>
    <input type="button" value="6" @click="display('6')" />
    <input type="button" value="7" @click="display('7')" />
    <input type="button" value="8" @click="display('8')" />
    <input type="button" value="9" @click="display('9')" />
    <input type="button" value="0" @click="display('0')" /><br>
    <input type="button" value="+" @click="display('+')" />
    <input type="button" value="-" @click="display('-')" />
    <input type="button" value="*" @click="display('*')" />
    <input type="button" value="/" @click="display('/')" />
    <input type="button" value="=" @click="calculated()" />
    <input type="button" value="AC" @click="clearDisplay()" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      result: '',
      screen: '',
    };
  },
  methods: {
    calculate(operator) {
      let x = parseFloat(this.input1);
      let y = parseFloat(this.input2);

      let result;

      switch (operator) {
        case "+":
          result = x + y;
          break;
        case "-":
          result = x - y;
          break;
        case "*":
          result = x * y;
          break;
        case "/":
          result = x / y;
          break;
      }
      this.result = result;
    },
    display(value) {
      this.screen += value;
    },
    clearDisplay() {
      this.screen = '';
    },
    calculated() {
      let a = this.screen;
      let b = eval(a);
      this.screen = b;
    },
  },
};
</script>


