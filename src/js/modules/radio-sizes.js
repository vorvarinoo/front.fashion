export const ititToltip = () => {
  const tooltipTemplate = document.getElementById( 'tooltip-template' );
  let tooltipTimeout; // Переменная для хранения таймера

  document.querySelectorAll( '[data-tooltip]' ).forEach( element => {
    // Обработчик события для мобильных устройств
    element.addEventListener( 'click', ( event ) => {
      const existingTooltip = document.querySelector( '.tooltip' );
      if ( existingTooltip ) {
        existingTooltip.remove();
      }

      // Клонируем шаблон
      const tooltipClone = tooltipTemplate.content.cloneNode( true );
      const tooltip = tooltipClone.querySelector( '.tooltip' );
      const tooltipInner = tooltipClone.querySelector( '.tooltip__inner' );

      // Устанавливаем текст подсказки
      tooltipInner.textContent = event.currentTarget.dataset.tooltip;

      // Добавляем подсказку в документ
      const parentElement = event.currentTarget.parentElement;
      parentElement.appendChild( tooltip );
      tooltip.style.display = 'block';
    } );

    // Обработчики для десктопа
    element.addEventListener( 'mouseover', ( event ) => {
      const existingTooltip = document.querySelector( '.tooltip' );
      if ( existingTooltip ) {
        existingTooltip.remove();
      }

      // Клонируем шаблон
      const tooltipClone = tooltipTemplate.content.cloneNode( true );
      const tooltip = tooltipClone.querySelector( '.tooltip' );
      const tooltipInner = tooltipClone.querySelector( '.tooltip__inner' );

      // Устанавливаем текст подсказки
      tooltipInner.textContent = event.currentTarget.dataset.tooltip;

      // Добавляем подсказку в документ
      const parentElement = event.currentTarget.parentElement;
      parentElement.appendChild( tooltip );
      tooltip.style.display = 'block';

      // Удаляем предыдущий таймер, если он существует
      clearTimeout( tooltipTimeout );

      // Устанавливаем таймер для удаления подсказки через 2 секунды
      tooltipTimeout = setTimeout( () => {
        const tooltip = document.querySelector( '.tooltip' );
        if ( tooltip ) {
          tooltip.remove();
        }
      }, 2000 ); // 2000 мс = 2 секунды
    } );

    // Закрытие подсказки при наведении вне элемента (только для десктопа)
    element.addEventListener( 'mouseout', () => {
      // Удаляем предыдущий таймер, если он существует
      clearTimeout( tooltipTimeout );
    } );
  } );

  // Закрытие подсказки при клике в любом месте (для мобильных устройств)
  document.addEventListener( 'click', ( event ) => {
    const tooltip = document.querySelector( '.tooltip' );
    if ( tooltip && !event.target.closest( '[data-tooltip]' ) ) {
      tooltip.remove();
    }
  } );
};
