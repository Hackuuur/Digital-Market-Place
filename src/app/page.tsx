import { Wrapper } from "@/components/Wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    desc: "get Your Delivery to your email in seconds and Download them right away.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    desc: "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
  },
  {
    name: "For the planet",
    Icon: Leaf,
    desc: "We've pledged 1% of sales to the preservation and restoration of the natural enviroment.",
  },
];

export default function Home() {
  return (
    <>
      <Wrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl  ">
          <h1 className="text-3xl font-bold tracking-normal text-gray-800 sm:text-5xl">
            MarketPlace for High Quality
            <span className="text-black"> MiranXo.</span>
          </h1>
          <p className="mt-6 text-base max-w-prose text-muted-foreground ">
            Welcome to MiranXo. Every asset on your Platform is verified by our
            team to ensure our Highest Quality Standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={"/"} className={buttonVariants()}>
              Browse
            </Link>
            <Button variant="ghost">Our Quality Promise &rarr;</Button>
          </div>
        </div>
      </Wrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <Wrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-col-3 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) => (
             <div
             key={perk.name}
             className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
             <div className='md:flex-shrink-0 flex justify-center'>
               <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                 {<perk.Icon className='w-1/3 h-1/3' />}
               </div>
             </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">
                  {perk.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {perk.desc}
                </p>
              </div>
            </div>
          ))}
          </div>
        </Wrapper>
      </section>
    </>
  );
}
