import FormSubmitButton from "@/components/FormSubmitButton";
import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Product- Flomazon",
};

async function addProduct(formdata: FormData) {
  "use server";

  const name = formdata.get("name")?.toString();
  const description = formdata.get("description")?.toString();
  const imageURL = formdata.get("imageURL")?.toString();
  const price = Number(formdata.get("price") || 0);

  if (!name || !description || !imageURL || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageURL, price },
  });

  redirect("/");
}

export default function AddProductPage() {
  return (
    <div>
      <h1 className="text-lg mb-3 text-gray-600">Add Products</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          placeholder="Name"
          className="input-bordered text-gray-700 input mb-3 w-full"
          type="text"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea-bordered text-gray-700 textarea mb-3 w-full"
        />
        <input
          required
          name="imageURL"
          placeholder="ImageUrl"
          className="input-bordered text-gray-700 input mb-3 w-full"
          type="url"
        />
        <input
          required
          name="price"
          placeholder="price"
          className="input-bordered text-gray-700 input mb-3 w-full"
          type="number"
        />
        <FormSubmitButton className="btn-block" type="submit">
          Add Products
        </FormSubmitButton>
      </form>
    </div>
  );
}
