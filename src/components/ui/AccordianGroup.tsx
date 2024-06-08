"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { COLOR_ITEMS, PRICE_ITEMS, SIZE_ITEMS } from "@/constants/ListSidebar";
import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Color</AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-4">
            {COLOR_ITEMS.map((item) => (
              <li key={item.id} className="flex items-center gap-2">
                <Checkbox />
                <p>{item.label}</p>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Size</AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-4">
            {SIZE_ITEMS.map((item) => (
              <li key={item.id} className="flex items-center gap-2">
                <Checkbox />
                <p>{item.label}</p>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Price</AccordionTrigger>
        <AccordionContent>
          <RadioGroup defaultValue="option-1">
            {PRICE_ITEMS.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <RadioGroupItem value={item.option} id={item.option} />
                <Label htmlFor={item.option}>{item.title}</Label>
              </li>
            ))}
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
