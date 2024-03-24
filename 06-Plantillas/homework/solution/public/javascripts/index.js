function selectPost(idPosts) {
  window.location.href = `/update/${idPosts}`;
}

async function updatePost(idPosts) {
  let data = {};
  const title = document.getElementById("title").value;
  const contents = document.getElementById("contents").value;
  data = {
    title: title,
    contents: contents,
  };
  const response = await fetch(`http://localhost:3000/post/${idPosts}`, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  window.location.href = `/`;
}

async function deletePost(idPosts){
    const response = await fetch(`http://localhost:3000/post/${idPosts}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      });
    window.location.href = `/`;

}
