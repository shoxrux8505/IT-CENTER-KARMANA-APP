<template>
  <div class="Chat-content" id="form">
    <h1>KURSGA YOZILISH</h1>
    <div class="form-content">
      <div class="img-content"  data-aos="zoom-out-right">
        <img src="./component/mes.png" alt="">
      </div>
      <form id="telegramForm" @submit.prevent="submitHandler"  data-aos="zoom-out-left">

        <label for="name">Ismingiz:</label>
        <input type="text" placeholder="Abdullayev Shoxrux" id="name" name="name" required
          v-model="formData.name"><br><br>
        <label for="number">Telefon raqamingiz:</label>
        <input type="tel" placeholder="+998(93)962-13-61" id="number" name="number" required
          v-model="formData.phone"><br><br>
        <label for="account">Telegram Akkauntingiz:</label>
        <input type="text" placeholder="@lndwix" id="account" name="account" required v-model="formData.account"><br><br>
        <label for="message">Qo'shimcha Savolar:</label>
        <textarea cols="30" rows="5" id="message" name="message" required v-model="formData.message"></textarea><br><br>
        <p v-if="response">{{ response }}</p>
        <button type="submit">Xabarni yuborish</button>
        <!-- <div v-if="loading">
          <LoadingSpinner />
        </div> -->
      </form>
    </div>
  </div>
</template>
  
<script>
import LoadingSpinner from "../components/LoadingSpinner.vue";
import axios from 'axios';
export default {
  name: 'FormValidation',
  components: {
    LoadingSpinner,
  },
  data: () => ({
    formData: {
      name: '',
      phone: '',
      account: '',
      message: '',
      response: null
    }
  }),
  methods: {
    async submitHandler() {
      if (this.formData.name && this.formData.phone && this.formData.account && this.formData.message) {
        const botToken = import.meta.env.VITE_BOT_TOKEN;
        const chatId = import.meta.env.VITE_CHAT_ID;

        const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const data = {
          chat_id: chatId,
          text: `Name: ${this.formData.name} \n Phone: ${this.formData.phone} \n Account: ${this.formData.account} \n Message: ${this.formData.message}`
        };


        try {
          await axios.post(apiUrl, data);
          this.message = '';
          console.log('Message sent successfully');
        } catch (error) {
          console.error('Error sending message:', error);

        }
      }
    }


  }
}
</script>
  
<style>
:root {

  --text-color: #6f6f6f;
  --text-color2: #89cc29;
  --bg-color: #323232;
  --dark-bg: #242526;
  --icon-bg: #E7F5FB;
  --h1-size: 50px;
  --outline-color: #a9df5eb7;

}

@media screen and (max-width: 390px) {
  .Chat-content .form-content {
    flex-direction: column;
    row-gap: 20px;
  }

  .Chat-content .form-content form {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .Chat-content .form-content form input {
    width: 300px;
    transform: scale(0.9);
  }
}

.form-group {
  margin-bottom: 1rem;
}

h1 {
  text-align: center;
  font-weight: 700;
}

.error {
  color: red;
}

.Chat-content {
  width: 100%;
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url('./component/vector-6.png') no-repeat;
  background-size: contain;

}

.Chat-content .form-content {
  display: flex;
  align-items: center;
  justify-content: space-around;

}

.Chat-content .form-content .img-content img {
  width: 700px;
  filter: drop-shadow(0 0 5px var(--text-color2));
}

.Chat-content .form-content form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.Chat-content .form-content form input {
  padding: 5px 15px;
  font-size: 20px;
  outline: 0;
  /* transition: 0.5s ease; */
  border: 2px solid var(--outline-color);
  border-radius: 7px;
  cursor: pointer;
}

.Chat-content .form-content form input:hover {
  box-shadow: 0 0 2px var(--text-color2);
}

.Chat-content .form-content form input:focus {
  outline: 4px dashed var(--outline-color);
}

.Chat-content .form-content form label {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-color);
  transition: 0.5s ease;
  cursor: pointer;
}

.Chat-content .form-content form label:hover {
  color: var(--text-color2);
}

.Chat-content .form-content form textarea {
  font-size: 20px;
  border: 2px solid var(--text-color2);
  resize: none;
  border-radius: 7px;
  outline: 0;
}

.Chat-content .form-content form textarea:hover {
  box-shadow: 0 0 2px var(--text-color2);
}

.Chat-content .form-content form textarea:focus {
  outline: 4px dashed var(--outline-color);
}

.Chat-content .form-content form button {
  padding: 10px 100px;
  background: #FFF;
  border: 2px solid var(--text-color2);
  color: var(--text-color2);
  font-size: 20px;
  transition: 0.5s ease;
  border-radius: 15px;

}

.Chat-content .form-content form button:hover {
  background: var(--text-color2);
  color: #FFF;
}

.Chat-content .form-content form button:active {
  transform: scale(0.9);

}
</style>