const quotes = [
  {
    quote: "Người tốt thì nhiều, mà người biết điều thì ít."
  },
  {
    quote: "Sống chết có nhau, ốm đâu kệ cụ mày."
  },
  {
    quote:
      "Vạn sự khởi đầu nan. Gian nan nản."
  },
  {
    quote:
      "Dân thường chơi đẹp đè bẹp dân chơi."
  },
  {
    quote:
      "You've baked a really lovely cake, but then you've used dog shit for frosting.🤔🤔"
  },
  {
    quote:
      "Người yêu là phù du, thầy u mới là vĩnh cửu."
  },
  {
    quote: "Cứ tự nhiên nhưng đừng quên mình là khách."
  },
  {
    quote: "Tiền không phải là tất kả, vì trên thế giới này còn vàng và kim cương."
  },
  {
    quote: "Sai thì sửa, mà chửa thì đẻ."
  },
  {
    quote: "Tôi cưỡng lại được mọi thứ, trừ…cám dỗ. 😱"
  },
  {
    quote: "Trông bạn quen quen, hình như tớ…chưa gặp bao giờ.😍"
  },
  {
    quote: "Chưa phê đâu nhưng còn lâu…mới tỉnh."
  },
  {
    quote: "Thanh niên muốn hư hỏng thì phải có tiền."
  },
  {
    quote: "Đừng bao giờ bán rẻ anh em nếu…chưa được giá."
  },
  {
    quote: "Đang đi trên đường, bỗng thấy bất thường. Úp mặt vào tường. Lại thấy…bình thường"
  },
  {
    quote: "Gái đẹp muốn có tiền thì phải hư hỏng."
  }
];

const button = document.getElementById("button-click");
const quote = document.getElementById("quote");

button.addEventListener("click", displayquote);

function displayquote() {
  let number = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[number].quote;
}
window.addEventListener("load", function() {
  let number = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[number].quote;
});
