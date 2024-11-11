import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const faqs = [
  {
    question: "Welke soorten teambuilding activiteiten bieden jullie aan?",
    answer: "Wij bieden een breed scala aan activiteiten, waaronder: avontuurlijke activiteiten, creatieve workshops, sportieve uitdagingen en meer."
  },
  {
    question: "Hoe werken jullie de teambuilding activiteiten naar de behoeften van ons bedrijf?",
    answer: "We beginnen met een uitgebreide analyse van uw team en doelstellingen. Op basis daarvan stellen we een programma samen dat perfect aansluit bij uw wensen."
  },
  {
    question: "Wat is de ideale groepsgrootte voor een teambuilding evenement?",
    answer: "We kunnen activiteiten organiseren voor groepen van 5 tot 500 personen. De ideale groepsgrootte hangt af van uw doelstellingen en de gekozen activiteit."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Veel Gestelde Vragen</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}