import { FC } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../../components/ui/accordion';
import { faqQuestions } from '../../../../constants/home';
import SectionHeader from '../../../../components/ui/section-header';

const FAQSection: FC = () => {
    return (
        <div className='wrapper'>
            {/*  section header  */}
            <div className='my-10'>
                <SectionHeader title="Frequently Asked Questions" />
                <p className='text-textGray text-center my-4'>Helpful Hints & Clarifications</p>
            </div>
            {/*  faq questions  */}
            <div>
                <Accordion type="single" collapsible className="w-full">
                    {
                        faqQuestions.map((question, index) => {
                            return (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger >{question.question}</AccordionTrigger>
                                    <AccordionContent>
                                        {question.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    );
};

export default FAQSection;