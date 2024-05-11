const FAQs = () => {
    return (
        <div className="faq max-w-[1180px] mx-auto">
            <h2 className="text-xl md:text-3xl hover:animate-flash-2s font-semibold text-center mb-8">Frequently Asked Questions</h2>
            <div>
                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        How can I participate in Wisdom Forge?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Participating in Wisdom Forge is easy! Simply sign up for an account on our website or app to gain access to our community. From there, you can join discussion groups, contribute your knowledge and insights, and connect with like-minded individuals who share your interests in learning and personal growth.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    What makes Wisdom Forge different from other learning platforms?
                    </div>
                    <div className="collapse-content">
                        <p>
                        Wisdom Forge stands out for its emphasis on collaboration and the exchange of diverse perspectives. Unlike traditional learning platforms that focus solely on content delivery, Wisdom Forge fosters an interactive and dynamic learning environment where users can actively engage with each other to deepen their understanding of various topics. Additionally, our platform encourages critical thinking and creativity, empowering users to not only consume knowledge but also to contribute to its creation and evolution.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    Is Wisdom Forge suitable for all levels of learners?
                    </div>
                    <div className="collapse-content">
                        <p>
                        Absolutely! Wisdom Forge is designed to cater to learners of all levels, from beginners to experts. Whether you are just starting your learning journey or you are a seasoned professional looking to deepen your knowledge, you'll find valuable resources and opportunities for growth on our platform. Our diverse community welcomes learners from various backgrounds and skill levels, fostering a supportive environment where everyone can thrive and learn from each others experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;