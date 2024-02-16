const url = location.href.split('/')
const nowPage = url[url.length-1]

const nav = document.querySelector("nav");

const pages = [
  { link: "01_BMI.html", name: "BMI計算機" },
  { link: "02_Leap-Year.html", name: "閏年計算機" },
  { link: "03_Multiplication-Table.html", name: "九九乘法表" },
  { link: "04_Temperature-Translate.html", name: "溫度轉換器" },
  { link: "05_Birthday.html", name: "年齡計算機" },
  { link: "06_Password-regex.html", name: "密碼驗證" },
  { link: "06_Password-regex-separate.html", name: "密碼驗證分項目" },
  { link: "07_alert.html", name: "彈跳視窗" },
  { link: "08_carousel.html", name: "輪播牆" },
  { link: "08_carousel-pagination.html", name: "輪播牆_pagination" },
  { link: "09_account-book.html", name: "記帳本" },
];

let navbar = "";
for (let i = 0; i < pages.length; i++) {
  const result = document.createElement("a");
  result.textContent = pages[i].name;
  result.href = pages[i].link;
  result.alt = pages[i].name;
  if(pages[i].link == nowPage){
    result.classList.add('active')
    const source = document.createElement('a')
    source.href = `https://github.com/Eddie110102/JavaScript_practice/blob/main/${pages[i].link}`
    source.textContent = '檢視原始碼'
    source.alt='檢視原始碼'
    source.classList.add('source')
    source.target = '_blank'
    nav.appendChild(source)
  }
  nav.appendChild(result);
}

