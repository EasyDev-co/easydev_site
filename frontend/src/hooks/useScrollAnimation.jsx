import { useEffect } from 'react'

const useScrollAnimation = (ref, threshold = 0.1, visible) => {
  // анимация при скроллинге
  const elements = ref.current

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold, // порог видимости элемента для срабатывания анимации
    }

    // наблюдение за каждым элементом
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visible)
          observer.unobserve(entry.target) // Остановить наблюдение за элементом после его появления
        }
      })
    }, options)

    // не срабатывает без задержки
    const timer = setTimeout(() => {
      elements.forEach((element) => {
        if (element && elements.length > 0) {
          observer.observe(element)
        }
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      elements.forEach((element) => {
        if (element && elements.length > 0) {
          observer.unobserve(element)
        }
      })
    }
  }, [threshold, elements, visible])
}

export default useScrollAnimation
