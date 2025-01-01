const url = location.href.split("/");
const nowPage = url[url.length - 1];

const nav = document.querySelector("nav");
// 新增按鈕
const btnBox = document.createElement("div");
btnBox.classList.add("btnBox");
const jsBtn = document.createElement("div");
jsBtn.textContent = "JS寫法";
const jqBtn = document.createElement("div");
jqBtn.textContent = "JQ寫法";

btnBox.appendChild(jsBtn);
btnBox.appendChild(jqBtn);
nav.append(btnBox);

jsBtn.addEventListener("click", function () {
  this.classList.add("active");
  jqBtn.classList.remove("active");
  nav.lastChild.innerHTML = "";
  changeLink("js");
});

jqBtn.addEventListener("click", function () {
  this.classList.add("active");
  jsBtn.classList.remove("active");
  nav.lastChild.innerHTML = "";
  changeLink("jq");
});

const navBox = document.createElement("div");
navBox.classList.add("navBox");

const pages_javascript = [
  { link: "01_bmi.html", name: "1、BMI計算機" },
  { link: "02_leap-year.html", name: "2、閏年計算機" },
  { link: "03_multiplication-table.html", name: "3、九九乘法表" },
  { link: "04_temperature-translate.html", name: "4、溫度轉換器" },
  { link: "05_birthday.html", name: "5、年齡計算機" },
  { link: "06_password-regex.html", name: "6、密碼驗證" },
  { link: "06_password-regex-separate.html", name: "6-1、密碼驗證分項目" },
  { link: "07_alert.html", name: "7、彈跳視窗" },
  { link: "08_carousel.html", name: "8、輪播牆" },
  { link: "08_carousel-pagination.html", name: "8-1、輪播牆_pagination" },
  { link: "09_account-book.html", name: "9、記帳本" },
];

const pages_jQuery = [
  { link: "01_bmi-jQuery.html", name: "1、BMI計算機" },
  { link: "02_leap-year-jQuery.html", name: "2、閏年計算機" },
  { link: "03_multiplication-table-jQuery.html", name: "3、九九乘法表" },
  { link: "04_temperature-translate-jQuery.html", name: "4、溫度轉換器" },
  { link: "05_birthday-jQuery.html", name: "5、年齡計算機" },
  { link: "06_password-regex-jQuery.html", name: "6、密碼驗證" },
  {
    link: "06_password-regex-separate-jQuery.html",
    name: "6-1、密碼驗證分項目",
  },
  { link: "07_alert-jQuery.html", name: "7、彈跳視窗" },
  { link: "08_carousel-jQuery.html", name: "8、輪播牆" },
  {
    link: "08_carousel-pagination-jQuery.html",
    name: "8-1、輪播牆_pagination",
  },
  { link: "09_account-book-jQuery.html", name: "9、記帳本" },
];

function changeLink(type) {
  const data = type == "js" ? pages_javascript : pages_jQuery;
  for (let i = 0; i < data.length; i++) {
    const result = document.createElement("a");
    result.textContent = data[i].name;
    result.href = data[i].link;
    result.alt = data[i].name;

    if (data[i].link == nowPage) {
      console.log("now", nowPage);

      result.classList.add("active");
      const source = document.createElement("a");
      source.href = `https://github.com/Eddie110102/JavaScript_practice/blob/main/${data[i].link}`;
      source.textContent = "檢視原始碼";
      source.alt = "檢視原始碼";
      source.classList.add("source");
      source.target = "_blank";
      navBox.appendChild(source);
    }
    navBox.appendChild(result);
  }
  nav.append(navBox);
}

// 預設js
if (!nowPage.includes("jQuery")) {
  jsBtn.classList.add("active");
  changeLink("js");
} else {
  jqBtn.classList.add("active");
  changeLink("jq");
}
