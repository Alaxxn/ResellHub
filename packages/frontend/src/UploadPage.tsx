import React, { useActionState, useState} from "react";
import {useNavigate } from "react-router";
import type { PostData } from "./MockAppData.ts";

function readAsDataURL(file : File): Promise<string> {
    return new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.onload = () => resolve(fr.result as string);
        fr.onerror = (err) => reject(err);
    });
}

interface UploadPageProps {
  addPost: React.Dispatch<React.SetStateAction<PostData[]>>;
  user: string;
}

export function UploadPage(props : UploadPageProps) {

  const titleInputId = React.useId();
  const priceInputId = React.useId();
  const categoryInputId = React.useId();
  const descriptionInputId = React.useId();
  const imageInputId = React.useId();
  const navigate = useNavigate();

  const [imgDataArray, setImgDataArray] = useState<string[]>([]);

  const [result, submitAction, isPending] = useActionState(
  async (_prevState: unknown, formData: FormData) => {
    const newPost = {
      id: Math.random().toString(36).slice(2),
      username: props.user,
      title: formData.get("title") as string,
      price: parseFloat(formData.get("price") as string),
      category: formData.get("category") as "electronics" | "clothing" | "other",
      description: formData.get("description") as string,
      images: imgDataArray
    };

    props.addPost((prev) => [...prev, newPost]);
    navigate("/");
    return { success: true };
  },
  null
);


  async function handleFileSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files) return;

    const dataUrls: string[] = [];
    for (const file of Array.from(files)) {
      const dataUrl = await readAsDataURL(file);
      dataUrls.push(dataUrl);
    }
    setImgDataArray(dataUrls);
  }

  console.log(result);

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
          disabled={isPending} />

        <label htmlFor={priceInputId}>Amount Paid</label>
        <input 
          type="number" 
          id={priceInputId} 
          name="price" 
          min="0" 
          step="0.01"
          placeholder="e.g. 5.00" 
          required
          disabled={isPending} />

        <label htmlFor={categoryInputId}>Category</label>
          <select id={categoryInputId} name="category" required disabled={isPending}> 
            <option value="">Select category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="other">Other</option>
          </select>

        <label htmlFor={descriptionInputId}>Description</label>
          <textarea id={descriptionInputId} 
          name="description" 
          rows={4} 
          placeholder="Describe your item" 
          required
          disabled={isPending} />

        <label htmlFor={imageInputId}>Photos</label>
        <input 
        type="file" 
        id={imageInputId} 
        name="photos"
        onChange={handleFileSelected}
        multiple accept="image/*"
        disabled={isPending} />

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
