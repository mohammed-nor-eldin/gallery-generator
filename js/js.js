

        // اختيار جميع الصور
        const images = document.querySelectorAll('img');
        
        // دالة تبديل الألوان
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }

        // إضافة حدث النقر لكل الصور
        images.forEach(img => {
            img.addEventListener('click', toggleDarkMode);
        });
