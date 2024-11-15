var posts=["2024/10/28/linux/","2024/07/11/MY SQL/","2024/10/27/excel/","2024/07/13/数仓概念/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };