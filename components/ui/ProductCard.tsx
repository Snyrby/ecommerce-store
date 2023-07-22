"use client";

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import { Fragment } from "react";

import { Product } from "@/types";
import IconButton from "@/components/ui/IconButton";
import Currency from "@/components/ui/Currency";
import { useRouter } from "next/navigation";
import { Popover, Transition } from "@headlessui/react";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.imageUrl}
          alt="Image"
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    onMouseEnter={(
                      event: React.MouseEvent<HTMLButtonElement>
                    ) => event.currentTarget.click()}
                    onMouseLeave={(
                      event: React.MouseEvent<HTMLButtonElement>
                    ) => event.currentTarget.click()}
                  >
                    <IconButton
                      onClick={() => {
                        router.push("/");
                      }}
                      icon={<Expand size={20} className="text-gray-600" />}
                    />
                  </Popover.Button>
                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute bottom-[100%] z-10 bg-slate-400 rounded-xl p-1">
                      <div className="flex w-20">
                        <p className="">
                          test button
                        </p>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <div
              className="toolTip before:content-[attr(data-tip)]"
              data-tip="Add&nbsp;to&nbsp;cart"
            >
              <IconButton
                onClick={() => {}}
                icon={<ShoppingCart size={20} className="text-gray-600" />}
              />
            </div>
          </div>
        </div>
      </div>
      {/* DESCRIPTION */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* PRICE */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
