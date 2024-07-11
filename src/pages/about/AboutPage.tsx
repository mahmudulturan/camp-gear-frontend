import { FC } from 'react';
import SectionHeader from '../../components/ui/section-header';
import { teamMembers } from '../../constants/about-us';

const AboutPage: FC = () => {
    return (
        <div className='wrapper'>
            <SectionHeader title="About Us" />

            <div className='my-10 grid grid-cols-3 gap-6'>
                {
                    teamMembers.map((member, index) => (
                        <div key={index} className='flex flex-col items-center gap-5 my-5'>
                            <img src={member.photo} className='w-full h-60 object-cover' alt={member.name} />
                            <div className='w-5/6'>
                                <h3 className='font-bold text-xl'>{member.name}</h3>
                                <p>{member.role}</p>
                                <p>{member.bio}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.514610736281!2d-122.42180148481993!3d37.77492927975948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cabb0c4c3%3A0xf815c8911f6c7a2d!2s123%20Adventure%20Ln%2C%20San%20Francisco%2C%20CA%2094108!5e0!3m2!1sen!2sus!4v1629376856540!5m2!1sen!2sus"
                width="100%"
                height="350"
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default AboutPage;