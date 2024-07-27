var posts=["2024/07/11/MY SQL/","2024/07/13/数仓概念/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };