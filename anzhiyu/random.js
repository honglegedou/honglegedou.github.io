var posts=["2024/07/13/数仓概念/","2024/07/11/MY SQL/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };