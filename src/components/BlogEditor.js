import React, { useState } from 'react';
import { saveDraft, publishBlog } from '../api/BlogApi';
import './BlogEditor.css'; 

const BlogEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const cleanTags = (input) => {
    return input
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);
  };

  const handleSaveDraft = async () => {
    try {
      const response = await saveDraft({
        title: title.trim(),
        content: content.trim(),
        tags: cleanTags(tags),
        status: 'draft',
      });
      alert('Draft saved ✅');
      console.log(response.data);
    } catch (err) {
      alert('Error saving draft');
      console.error(err);
    }
  };

  const handlePublish = async () => {
    try {
      const response = await publishBlog({
        title: title.trim(),
        content: content.trim(),
        tags: cleanTags(tags),
        status: 'published',
      });
      alert('Blog published 🚀');
      console.log(response.data);
    } catch (err) {
      alert('Error publishing blog');
      console.error(err);
    }
  };

  return (
    <div className="editor-container">
      <h1 className="editor-title">Create Blog</h1>

      <label className="editor-label">Title</label>
      <input
        type="text"
        className="editor-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter blog title"
      />

      <label className="editor-label">Content</label>
      <textarea
        className="editor-textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your blog content here..."
      />

      <label className="editor-label">Tags (comma separated)</label>
      <input
        type="text"
        className="editor-input"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="e.g. react, blog"
      />

      <div className="editor-buttons">
        <button className="btn draft-btn" onClick={handleSaveDraft}>Save as Draft</button>
        <button className="btn publish-btn" onClick={handlePublish}>Publish</button>
      </div>
    </div>
  );
};

export default BlogEditor;
