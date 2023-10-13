

const btn = document.getElementById("btn")

async function sendTelegramMessage() {
  const botToken = "6545481249:AAEvg7wstnXRdMOSAflAfV4UFyi5Dj3S5c4";
  const chatId = "6106730476";

  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const account = document.getElementById("account").value;
  const usermessage = document.getElementById("message").value;
  try {
      const response = await fetch(
          `https://api.telegram.org/bot${botToken}/sendMessage`,
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  chat_id: chatId,
                  text: `-----------------------\n Name: ${name}\n Phone: ${number}\n-----------------------\n Account: ${account}\n-----------------------\n Message: ${usermessage}`,
              }),
          }
      );
      if (response.status === 200) {
          alert("Xabaringiz yetkazildi!");
      } else {
          alert("Xabaringiz yetkazilmadi. Qaytadan urinib ko'ring");
      }
  } catch (error) {
      console.error("Xatolik:", error);
  }
}

btn.addEventListener('click', ()=>{
  sendTelegramMessage()
})