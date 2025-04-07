export const fetchProjectsPage= async () => {
    const res = await fetch('/api/projects', {
      headers: { 'Cache-Control': 'no-cache' }
    });
    return await res.json();
  };