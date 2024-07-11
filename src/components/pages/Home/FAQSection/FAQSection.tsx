import { FC } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../ui/accordion';
import { faqQuestions } from '../../../../constants/home';
import SectionHeader from '../../../ui/section-header';

const FAQSection: FC = () => {
    return (
        <div className='wrapper'>
            {/*  section header  */}
            <SectionHeader title="Frequently Asked Questions" />
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