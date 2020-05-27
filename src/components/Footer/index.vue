<template>
  <footer class="footer">
    <ul class="contact-list">
      <li class="contact-list__item list-item__footer">
        <a href="">
          Руководитель
        </a>
      </li>
      <li class="contact-list__item list-item__footer">
        <a href="">
          Менеджер
        </a>
      </li>
      <li class="contact-list__item list-item__footer">
        <a href=""> Технический Директор</a>
      </li>
    </ul>
    <ul class="other-list__company">
      <li class="other-list__item list-item__footer">
        <a href="">
          Вакансии
        </a>
      </li>
      <li class="other-list__item list-item__footer">
        <a href="">
          О нас
        </a>
      </li>
      <li class="other-list__item list-item__footer">
        <a href="">
          Поддержка
        </a>
      </li>
      <li class="other-list__item list-item__footer">
        <a href="">
          Новости
        </a>
      </li>
      <li class="other-list__item list-item__footer">
        <a href="">
          Партнёрам
        </a>
      </li>
    </ul>
    <div class="wrap-logo">
      <img src="../../assets/logoMaks.png" alt="" class="logo" />
    </div>
    <div class="motto-wrap">
      <p>
        ~Наши цели совпадают~
      </p>
    </div>
  </footer>
</template>
<style scoped>
footer {
  padding: 67px 60px 20px;
  display: flex;
  position: relative;
  background-color: #f5f5f0;
}
.wrap-logo {
  position: absolute;
  right: 40px;
  top: 60px;
}

.contact-list {
  margin-right: 150px;
}
.list-item__footer {
  margin-bottom: 15px;
}
.motto-wrap {
  position: absolute;
  left: 20px;
  bottom: 10px;
}
</style>
