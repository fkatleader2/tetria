var tetria = {
    modules: {},
    curPage: "welcome",
    debug: true,
    /**
     * Call on page load.
     */
    init() {
        this.components.init();
    },

    /** 
     * Change the content shown to the content specified. Affects navbar and content-area.
     */
    changeContent(newContent) {
        newContent = newContent.toLowerCase();
        var prevEle = $("#content-area #content-" + this.curPage)[0];
        var curEle = $("#content-area #content-" + newContent)[0];
        if (prevEle == null || curEle == null) { console.log("Error trying to change content"); if (this.debug) {console.trace()} return;}
        prevEle.classList.toggle("hide");
        curEle.classList.toggle("hide");
        this.curPage = newContent;
    },

    components: {
        init() {
            this.hamburger.init();
            this.navbar.init();
            this.url.init();
            this.profbar.init();
        },

        url: {
            init() {
                // TODO
            },
        },

        navbar: {
            init() {
                if(window.width <= 768)
                {$(".navbar ul li").on("mouseenter", function (e) {
                    var arr = e.target.id.split("-");
                    var name = arr[arr.length - 1];
                    var activeEle = $("#navbar-" + name)[0];
                    $("#navbar-title")[0].innerHTML = name.substring(0, 1).toUpperCase() + name.substring(1);
                    tetria.changeContent(name);
                })}
                else{$(".navbar ul li").on("click", function (e) {
                    var arr = e.target.id.split("-");
                    var name = arr[arr.length - 1];
                    var activeEle = $("#navbar-" + name)[0];
                    $("#navbar-title")[0].innerHTML = name.substring(0, 1).toUpperCase() + name.substring(1);
                    tetria.changeContent(name);
                })};
            },
        },

        profbar: {
            init() {
                this.play();
            },
            play() {
                $("#play-tetria").on("click", function(e) {
                    window.location.href = '../game/index.html';
                });
            }
        },

        hamburger: {
            init() {
                // on change
                $(".hamburger").on("click", function(e) {
                    e.currentTarget.classList.toggle("change");
                });
                // navbar hamburger show navbar
                $("#navbar-hamburger").on("click", function(e) {
                    $(".navbar ul")[0].classList.toggle("mobile-hide");
                });

                $(".navbar ul").on("click", function(e) {
                    $(".navbar ul")[0].classList.add("mobile-hide");
                    $("#navbar-hamburger")[0].classList.remove("change");
                });
            },
        }
    },

    utils: {

    }
};

$(document).ready(function(e) {
    tetria.init();
});