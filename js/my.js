var timer = {
           colors: ["black","#14ff00"],
           count: 0,
            go: function() {
                if(this.count > 1) {
                    this.count = 0;
                }
                document.getElementById("ui").style.color = this.colors[this.count];
                this.count++;
            }
        };
	window.onload = function() {
        setInterval(function() {
            timer.go();
        },1000);
    };