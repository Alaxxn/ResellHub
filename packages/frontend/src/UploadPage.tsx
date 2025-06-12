import React, { useActionState, useState } from "react";
import { useNavigate } from "react-router";
import type { IApiPostData } from "../../backend/src/shared/ApiPostData";

interface UploadPageProps {
  addPost: React.Dispatch<React.SetStateAction<IApiPostData[]>>;
  user: string;
}

export function UploadPage(props: UploadPageProps) {
  const titleInputId = React.useId();
  const priceInputId = React.useId();
  const categoryInputId = React.useId();
  const descriptionInputId = React.useId();
  const imageInputId = React.useId();
  const navigate = useNavigate();

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const [result, submitAction, isPending] = useActionState(
    async (_prevState: unknown, formData: FormData) => {
      console.log("Appending files:", selectedFiles.length);
      for (const file of selectedFiles) {
        formData.append("photos", file);
      }

      // Add text fields manually in case they're not present
      formData.append("username", props.user);

      const response = await fetch("/api/post", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        return { success: false, error: "Failed to upload post." };
      }

      const resJson = await response.json();
      const newPost: IApiPostData = {
        id: resJson.insertedId,
        username: props.user,
        title: formData.get("title") as string,
        price: parseFloat(formData.get("price") as string),
        category: formData.get("category") as "electronics" | "clothing" | "other",
        description: formData.get("description") as string,
        images: [], // You can later replace with URLs from backend
      };

      props.addPost(prev => [...prev, newPost]);
      navigate("/");
      return { success: true };
    },
    null
  );

  function handleFileSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files) return;
    setSelectedFiles(Array.from(files));
  }
  return (
    <div className="content">
      <div className="form-container">
        <form
          action={submitAction}
          method="post"
          encType="multipart/form-data"
          className="upload-form"
        >
          <label htmlFor={titleInputId}>Title</label>
          <input
            type="text"
            id={titleInputId}
            name="title"
            placeholder="What did you find?"
            required
            disabled={isPending}
          />

          <label htmlFor={priceInputId}>Amount Paid</label>
          <input
            type="number"
            id={priceInputId}
            name="price"
            min="0"
            step="0.01"
            placeholder="e.g. 5.00"
            required
            disabled={isPending}
          />

          <label htmlFor={categoryInputId}>Category</label>
          <select
            id={categoryInputId}
            name="category"
            required
            disabled={isPending}
          >
            <option value="">Select category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor={descriptionInputId}>Description</label>
          <textarea
            id={descriptionInputId}
            name="description"
            rows={4}
            placeholder="Describe your item"
            required
            disabled={isPending}
          />

          <label htmlFor={imageInputId}>Photos</label>
          <input
            type="file"
            id={imageInputId}
            name="photos"
            onChange={handleFileSelected}
            multiple
            accept="image/*"
            disabled={isPending}
          />

          <button
            type="submit"
            style={{
              padding: "0.8em",
              backgroundColor: "#1877f2",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            disabled={isPending}
          >
            Post Listing
          </button>
        </form>

        {result?.error ? <div> Error occured</div> : <div/>}
      </div>
    </div>
  );
}
