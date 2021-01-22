# Angular Demo
以login頁做展示

## 專案起點: 
* \src\app\app.component.html
* \src\app\app.component.ts

## 專案做法:
### 加入美化套件
* ng add @angular/material

### 將使用到的模組一個一個import
檔案位置在 \src\app\app.module.ts
```typescript
...
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  ...
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  ...
})
export class AppModule { }

```

### 設定html
* 為了demo方便css是寫在tag裡，component.ts的css通常會定義在component.css
* 利用雙向綁定綁定username, password，html有變動component的值也會變動。
* 利用事件綁定綁定登入的function

### 設定component
* 登入function只判定帳號密碼一樣就代表成功，並做對應的跳轉。

## 結果 
* 路由轉換的內容會嵌在<router-outlet></router-outlet>
* 因為路由設定的關係，當我們訪問http://127.0.0.1:4200 時會自動導轉到http://127.0.0.1:4200/login 
![](https://i.imgur.com/G3mYuZG.png)
