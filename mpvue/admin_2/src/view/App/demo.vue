<template>
<div>

 <!--
        <input name="s" type="text" x-webkit-speech x-webkit-grammar="builtin:translate" />
        <input x-webkit-speech lang="zh-CN" />
        <input x-webkit-speech x-webkit-grammar="bUIltin:search" />
    -->
    <form action="http://www.google.com/search" >
        <input type="search" name="q" lang="zh-CN" x-webkit-speech x-webkit-grammar="builtin:search" onwebkitspeechchange="startSearch(event)"/>
    </form>
</div>
</template>

<script>
export default {
  created() {
       if (document.createElement("input").webkitSpeech === undefined) {
        alert("很遗憾，你的浏览器不支持语音识别。");
        }
    else{
        alert("尝试使用语言识别来输入内容吧");
        }

    //事件的触发（可使用下面的js调用完成）
    /*
    input.onwebkitspeechchange = function() {
            alert("aaa");
    */
           document.querySelector("input[name='s']").addEventListener("blur",function(){this.value=this.value;});

  },
  methods: {
    demo() {
      var recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.onresult = function(event) {
        console.log(event);
      };
      recognition.start();
    }
  }
};
</script>

<style>
</style>
