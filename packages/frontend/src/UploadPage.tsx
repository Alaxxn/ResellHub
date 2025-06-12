


export function UploadPage() {

  return (
    <div className="content">   

    <div className="form-container">
      <form
        action="/submit-listing"
        method="post"
        encType="multipart/form-data"
        className="upload-form"
      >
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          placeholder="What did you find?" 
          required />

        <label htmlFor="price">Amount Paid</label>
        <input 
          type="number" 
          id="price" 
          name="price" 
          min="0" 
          step="0.01"
          placeholder="e.g. 5.00" 
          required />

        <label htmlFor="category">Category</label>
          <select id="category" name="category" required>
            <option value="">Select category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="other">Other</option>
          </select>

        <label htmlFor="description">Description</label>
          <textarea id="description" 
          name="description" 
          rows={4} 
          placeholder="Describe your item" required />

        <label htmlFor="photos">Photos</label>
        <input type="file" id="photos" name="photos" multiple accept="image/*" />

        <button
          type="submit"
          style={{
            padding: "0.8em",
            backgroundColor: "#1877f2",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Post Listing
        </button>
      </form>
    </div>
    </div>
  );
}
