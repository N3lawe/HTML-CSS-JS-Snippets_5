var toggle_button = document.querySelector(".toggle_button");

// فتح القائمة عند مرور الماوس فوق الزر
toggle_button.addEventListener("mouseenter", function() {
    toggle_button.classList.add("active");
});

// إغلاق القائمة عند مغادرة الماوس الزر بأكمله
toggle_button.addEventListener("mouseleave", function() {
    toggle_button.classList.remove("active");
});
