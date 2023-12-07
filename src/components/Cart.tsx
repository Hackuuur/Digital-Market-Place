import { ShoppingCart } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { formatePrice } from "@/lib/utils";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

const Cart = () => {
  const fee = 2;
  const ItemCount = 1;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2 ">
        <ShoppingCart className="w-6 h-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart(0)</SheetTitle>
        </SheetHeader>
        {ItemCount > 0 ? (
          <>
            <div className="flex flex-col w-full pr-6 ">cart items</div>
            <div className="space-y-4 pr-6 ">
              <Separator />
              <div className="space-y-1.5 text-sm ">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>free</span>
                </div>
                <div className="flex">
                  <div className="flex-1">Transaction Fee</div>
                  <span>{formatePrice(fee)}</span>
                </div>
                <div className="flex">
                  <div className="flex-1">Total </div>
                  <span>{formatePrice(fee)}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <Link href="/" className={buttonVariants({className:'w-full'})} >
                    Continue CheckOut
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className=" flex flex-col h-full w-full items-center justify-center space-y-1 ">
            <div
              aria-hidden="true"
              className="relative mb-4 h-60 w-60 text-muted-foreground"
            >
              <Image
                src={"/hippo-empty-cart.png"}
                alt="Empty Cart Image"
                fill
              />
            </div>
            <div className="text-xl font-semibold">Your cart is Empty</div>
            <SheetTrigger asChild>
              <Link href="/">
                <Button variant="ghost">Check Out</Button>
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
