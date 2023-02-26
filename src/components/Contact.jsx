const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen bg-[#090909] flex justify-center items-center p-4">
            <form action="https://getform.io/f/741d6c6c-8964-4e20-ad59-e59e59b4d76e" method="POST" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#66FCF1] text-[#9c9d9e]">Contact</p>
                    <p className="text-[#9c9d9e] pt-4 text-lg">
                        Submit the form below or contact me to <span className="border-b border-[#66FCF1] pb-1">precupeduard99@gmail.com</span>
                    </p>
                </div>
                <input className="bg-[#C5C6C7] placeholder:text-[#2c3541] text-[#2c3541] p-2" type="text" placeholder="Name" name="name" required/>
                <input className="my-4 p-2 bg-[#C5C6C7] placeholder:text-[#2c3541] text-[#2c3541]" type="email" placeholder="Email" name="email" required/>
                <textarea className="bg-[#C5C6C7] p-2 placeholder:text-[#2c3541] text-[#2c3541]" name="message" rows="6" placeholder="Write your message..." required></textarea>
                <button className="text-white border-2 border-white bg-[#2c3541] hover:bg-[#50bdb7] hover:border-[#50bdb7] duration-300 px-8 sm:px-16 py-1 sm:py-3 my-6 mx-auto">Submit</button>
            </form>
        </div>
    );
}
 
export default Contact;
