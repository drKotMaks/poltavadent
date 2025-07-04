import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter
  } from "@/components/ui/sheet"
import LoginBlock from '../LoginBlock/LoginBlock';
import { setting } from '@/lib/setting';
import LocalItem from '../LocalItem/LocalItem';


const BookingSection = ({children, params}) => {
  
  

  return (
    <Sheet>
    <SheetTrigger asChild>{children}</SheetTrigger>
    <SheetContent className="flex flex-col justify-between">
      <SheetHeader>
        <SheetTitle>Записатися на прийом: </SheetTitle>
        <SheetDescription>
          <LoginBlock params={params}/>
        </SheetDescription>
      </SheetHeader>
      <SheetFooter>
        <div className='bg-slate-100 items-center w-full flex flex-col p-1 rounded-lg justify-evenly h-[220px] p-2'>
         <a href="tel:+380954719933" className="text-gray-500 hover:underline">
           {setting.phone_primery}
         </a>
         <LocalItem latitude="50.4062575" longitude="30.6270358" />
         <div>{setting.schedulle}</div>
         </div>
      </SheetFooter>
    </SheetContent>
  </Sheet>
  
  );
};

export default BookingSection;
