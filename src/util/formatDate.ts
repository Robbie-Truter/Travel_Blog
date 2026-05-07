export const formatDate = (date?: string) => {
  if (date && typeof date === 'string') {
    const formatted = new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

    return formatted;
  }
};
