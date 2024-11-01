import { cookies } from "next/headers";
import prisma from "./prisma";

export async function getCart() {
    const localCartId= (await cookies()).get("localCartId")?.value
    const cart= localCartId?
    await prisma.cart.findUnique({
        where: {id: localCartId},
        include:{ items: {include: {product: true}}}
    })
}

export async function createCart() {
    const newCart= await prisma.cart.create({
        data:{}
    });

    (await cookies()).set("localCartId", newCart.id);
}