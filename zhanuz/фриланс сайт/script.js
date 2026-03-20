// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Обработчик для кнопки Cookie
  const cookieBtn = document.getElementById('cookieBtn');
  const cookieNotice = document.querySelector('.cookie-notice');
  
  if (cookieBtn) {
    cookieBtn.addEventListener('click', function() {
      // Показываем уведомление (можно заменить на любое действие)
      alert('Спасибо! Вы согласились с использованием cookie.');
      
      // Или можно скрыть уведомление:
      // cookieNotice.style.display = 'none';
      
      // Сохраняем в localStorage отметку о согласии
      localStorage.setItem('cookieAccepted', 'true');
    });
  }
  
  // 2. Проверяем, соглашался ли пользователь ранее
  if (localStorage.getItem('cookieAccepted') === 'true') {
    // Если да, можно немного изменить внешний вид уведомления
    const cookieText = document.querySelector('.cookie-text');
    if (cookieText) {
      cookieText.innerHTML = '<i class="fas fa-check-circle" style="color: #28a745;"></i> Спасибо! Вы уже приняли условия cookie.';
    }
  }
  
  // 3. Обработчики для кнопок "Разместить заказ" и "Найти работу"
  const orderButtons = document.querySelectorAll('.order-btn');
  
  orderButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const buttonText = this.textContent;
      
      if (buttonText.includes('Разместить')) {
        alert('Функция "Разместить заказ" в разработке. Спасибо за интерес!');
      } else if (buttonText.includes('Найти работу')) {
        alert('Функция "Найти работу" в разработке. Спасибо за интерес!');
      }
    });
  });
  
  // 4. Добавляем небольшую анимацию при наведении на карточки сообщений
  const messageCards = document.querySelectorAll('.message-card');
  
  messageCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.01)';
      this.style.transition = 'transform 0.2s ease';
      this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.06)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = '0 5px 12px rgba(0,0,0,0.02)';
    });
  });
  
  // 5. Делаем категории интерактивными
  const categoryItems = document.querySelectorAll('.cat-item');
  
  categoryItems.forEach(item => {
    item.addEventListener('click', function() {
      const categoryName = this.querySelector('span')?.textContent || 'категория';
      alert(`Вы выбрали категорию: ${categoryName}`);
    });
    
    // Добавляем стиль указателя мыши
    item.style.cursor = 'pointer';
  });
  
  // 6. Интерактив для пункта "Соглашаюсь с условиями"
  const agreementLine = document.querySelector('.agreement-line');
  if (agreementLine) {
    agreementLine.addEventListener('click', function(e) {
      // Не срабатывает при клике на защищенный значок (можно убрать проверку)
      const icon = this.querySelector('.far.fa-check-square');
      if (icon) {
        // Меняем иконку с пустого квадрата на отмеченный
        if (icon.classList.contains('fa-check-square')) {
          icon.classList.remove('fa-check-square');
          icon.classList.add('fa-check-square'); // оставляем как есть, но можно поменять стиль
          // На самом деле для демонстрации лучше переключать класс
          icon.style.color = '#28a745';
        }
      }
      alert('Согласие отмечено (демонстрация)');
    });
    agreementLine.style.cursor = 'pointer';
  }
  
  console.log('Сайт успешно загружен в стиле FL.ru');
});