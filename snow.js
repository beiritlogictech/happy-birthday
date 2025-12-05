$(document).ready(function () {
    function createSnowflake() {
        const snowflake = $("<div class='snowflake'>❆</div>");

        const startLeft = Math.random() * $(window).width();
        const size = 40 + Math.random() * 80; 
        const duration = 4000 + Math.random() * 6000;
        const drift = (Math.random() - 0.5) * 100;

        snowflake.css({
            left: startLeft + "px",
            fontSize: size + "px",
            animationDuration: duration + "ms",
            transform: `translateX(${drift}px)`
        });

        $("body").append(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, duration);
    }

    setInterval(createSnowflake, 150);
});