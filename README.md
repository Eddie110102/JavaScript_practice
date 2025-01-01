## [靜態頁面](https://Eddie110102.github.io/JavaScript_practice/01_BMI.html)

## 1. 讓使用者可以輸入自己的體重及身高，根據算出來的 BMI 值顯示下列訊息 [(JS 解答)](./01_bmi.html) [(JQ 解答)](./01_bmi-jQuery.html)

> - 公式
>   - BMI = 體重(公斤)/身高(公尺)的平方

> - 判斷標準
>   - BMI ＜ 18.5：過輕
>   - 18.5≦BMI ＜ 24：正常
>   - 24≦BMI ＜ 27：過重
>   - 27≦BMI ＜ 30：輕度肥胖
>   - 30≦BMI ＜ 35：中度肥胖
>   - BMI≧35：重度肥胖

## 2. 輸入西元年，判斷是否是閏年 [(JS 解答)](./02_leap-year.html) [(JQ 解答)](./02_leap-year-jQuery.html)

> - 標準
>   - 西元除以 400 可整除，為閏年
>   - 西元除以 4 可整除但除以 100 不可整除，為閏年
>   - 西元除以 4 不可整除，為平年
>   - 西元除以 100 可整除但除以 400 不可整除，為平年

## 3. 請畫出九九乘法表 [(JS 解答)](./03_multiplication-table.html) [(JQ 解答)](./03_multiplication-table-jQuery.html)

![99乘法表](./images/99table.JPG)

## 4. 請設計一個 function，傳入攝氏溫度可以轉成華氏溫度，傳入華氏溫度可以轉成攝氏溫度 [(JS 解答)](./04_temperature-translate.html) [(JQ 解答)](./04_temperature-translate-jQuery.html)

> - 公式
>   - 華氏要換算成攝氏時，要先減 32 後，再乘以 5/9
>   - 攝氏要換算成華氏時，要先乘以 9/5，再加上 32。

## 5. 讓使用者輸入生日計算目前幾歲 [(JS 解答)](./05_birthday.html) [(JQ 解答)](./05_birthday-jQuery.html)

## 6. 驗證使用者輸入的密碼，條件如下 [(JS 解答)](./06_password-regex.html) [(JQ 解答)](./06_password-regex-jQuery.html)

## 6-1. 條件分開顯示 [(JS 解答)](./06_password-regex-separate.html) [(JQ 解答)](./06_password-regex-separate-jQuery.html)

> - 條件
>   - 8 位數以上
>   - 至少包含一個大寫字母
>   - 小寫字母
>   - 數字
>   - 符號

## 7. 請使用以下 HTML 結構與預設 CSS 選擇器 ，透過 JavaScript 實作 alert 元件，並且可以點擊「 × 」將其 alert 元件關閉。 [(JS 解答)](./07_alert.html) [(JQ 解答)](./07_alert-jQuery.html)

> &lt;div class="alert alert-question"><br> > &emsp;&lt;p>確認是否執行動作訊息。&lt;/p><br> > &emsp;&lt;button class="close">×&lt;/button><br> > &lt;/div>
>
> <hr>
> &lt;div class="alert alert-success"><br>
> &emsp;&lt;p>成功訊息。&lt;/p><br>
> &emsp;&lt;button class="close">×&lt;/button><br>
> &lt;/div>
> <hr>
> &lt;div class="alert alert-error"><br>
> &emsp;&lt;p>錯誤訊息。&lt;/p><br>
> &emsp;&lt;button class="close">×&lt;/button><br>
> &lt;/div>
> <hr>
> &lt;div class="alert alert-warning"><br>
> &emsp;&lt;p>警示訊息。&lt;/p><br>
> &emsp;&lt;button class="close">×&lt;/button><br>
> &lt;/div>
> <hr>

![提示框](./images/alert.jpg)

## 8. Carousel 元件 [(JS 解答)](./08_carousel.html) [(JQ 解答)](./08_carousel-jQuery.html)

## 8-1. Carousel 元件包含分頁按鈕 [(JS 解答)](./08_carousel-pagination.html) [(JQ 解答)](./08_carousel-pagination-jQuery.html)

> 1. 請自行設計一個寬度 600px、高度 300px 的輪播牆。
> 2. 請勿使用 Bootstrap 或是其他套件。
> 3. Carousel 要有點擊切換圖片的功能，並使用下方 data 的圖片呈現在輪播牆中。
> 4. 輪播牆可增加自動播放圖片功能。

![輪播牆](./images/carousel.jpg)

## 9. 記帳本 [(JS 解答)](./09_account-book.html) [(JQ 解答)](./09_account-book-jQuery.html)

> 1. 請設計一個記帳本。
> 2. 可以讓使用者透過單行控制項輸入記帳內容。
> 3. 點擊「 新增 」可以將內容新增到畫面的記帳本區域中。
> 4. 點擊「 刪除 」可以將單筆資料移除。
> 5. 備註：至少要有紀錄日期、支出項目與金額。

![記帳本](./images/accountBook.jpg)
