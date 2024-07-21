const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment-text').value.trim();
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment) {
      const response = await fetch(`/api/posts/${post_id}/comment`, {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to add comment.');
      }
    }
  };
  
  document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);