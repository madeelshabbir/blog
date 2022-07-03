export const updatedContent = (content, status) => {
  if (status === 'pending')
  return 'The comment is awaiting for moderation';
  else if (status === 'rejected')
    return 'The comment has been rejected';
  else if (status === 'approved')
    return content;
  else
    return '';
}
