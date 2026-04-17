// Utility to manage document head meta tags
export const updateDocumentMeta = (title, description, additionalMeta = {}) => {
  // Update title
  document.title = title ? `${title} | KeenKeeper` : 'KeenKeeper';
  
  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = description || 'Keep your friendships alive with KeenKeeper - track interactions and maintain meaningful relationships.';
  
  // Update or create Open Graph tags
  const ogTags = {
    'og:title': title || 'KeenKeeper',
    'og:description': description || 'Keep your friendships alive with KeenKeeper',
    'og:type': 'website',
    ...additionalMeta,
  };
  
  Object.entries(ogTags).forEach(([property, content]) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      document.head.appendChild(tag);
    }
    tag.content = content;
  });
};

export default updateDocumentMeta;
