import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;
const app = new Vue(App);
app.$mount();

export default {
  config: {
    pages: ["^pages/me/main"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#EA5149",
      navigationBarTitleText: "宜居云",
      navigationBarTextStyle: "light"
    },
    tabBar: {
      selectedColor: "#EA5149",
      list: [
        {
          iconPath: "static/img/book.png",
          pagePath: "pages/books/main",
          text: "图书",
          selectedIconPath: "static/img/book-active.png"
        },
        {
          iconPath: "static/img/book.png",
          pagePath: "pages/comments/main",
          text: "评论",
          selectedIconPath: "static/img/todo-active.png"
        },
        {
          iconPath: "static/img/me.png",
          pagePath: "pages/me/main",
          text: "我",
          selectedIconPath: "static/img/me-active.png"
        }
      ]
    }
  }
};
