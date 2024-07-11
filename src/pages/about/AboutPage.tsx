import { FC } from 'react';
import SectionHeader from '../../components/ui/section-header';
import { teamMembers } from '../../constants/about-us';
import { MdLocationPin, MdOutlineCallEnd, MdOutlineMail } from 'react-icons/md';
import { FaPinterestP, FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const AboutPage: FC = () => {
    return (
        <div className='wrapper'>
            <SectionHeader title="About Us" />
            <div className='text-center font-medium my-5 text-gray-500'>
                At Campers Shop, our mission is to provide high-quality camping gear and accessories to outdoor enthusiasts. We are dedicated to ensuring that our customers have the best equipment for their adventures, promoting a love for the great outdoors and a commitment to sustainability.
            </div>

            <div>
                <h3 className='text-3xl font-medium border-b-2 border-primary inline-block'>Meet Our Team</h3>
                <div className='mb-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {
                        teamMembers.map((member, index) => (
                            <div key={index} className='flex flex-col items-center gap-5 my-5 px-4 py-4 bg-bgCol group'>
                                <div className='overflow-hidden w-full'>
                                    <img src={member.photo} className='w-full h-60 object-cover group-hover:scale-105 duration-300' alt={member.name} />
                                </div>
                                <div className=''>
                                    <h3 className='font-bold text-xl'>{member.name}</h3>
                                    <p>{member.role}</p>
                                    <hr className='border-2 my-2' />
                                    <p className='text-gray-700'>{member.bio}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className='flex items-center justify-center my-10'>
                <div className='max-w-sm w-full'>
                    <div className='my-3 text-lg'>
                        <div className='flex items-center justify-start gap-3'>
                            <MdOutlineCallEnd className="size-5" />
                            <span className='font-medium'>0175485784554</span>
                        </div>
                        <div className='flex items-center justify-start gap-3'>
                            <MdOutlineMail className="size-5" />
                            <span>contact@campgear.com</span>
                        </div>
                        <div className='flex items-center justify-start gap-3'>
                            <MdLocationPin className="size-5" />
                            <span>123 Adventure Lane, Outdoorsville, CA 90210</span>
                        </div>
                        <div className='flex items-center justify-center gap-3'>
                            <button><FaXTwitter className='size-5 text-gray-500' /></button>
                            <button><FaPinterestP className='size-5 text-gray-500' /></button>
                            <button><FaYoutube className='size-5 text-gray-500' /></button>
                            <button><FaInstagram className='size-5 text-gray-500' /></button>
                            <button><FaFacebookF className='size-5 text-gray-500' /></button>
                        </div>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.514610736281!2d-122.42180148481993!3d37.77492927975948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cabb0c4c3%3A0xf815c8911f6c7a2d!2s123%20Adventure%20Ln%2C%20San%20Francisco%2C%20CA%2094108!5e0!3m2!1sen!2sus!4v1629376856540!5m2!1sen!2sus"
                    width="100%"
                    height="200"
                    loading="lazy"
                ></iframe>

            </div>


        </div>
    );
};

export default AboutPage;