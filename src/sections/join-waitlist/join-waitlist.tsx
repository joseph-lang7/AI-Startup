const JoinWaitList = () => {
    return (
        <section className="px-5">
        <div className="container mx-auto mt-14 pt-14 pb-32 border border-white/20 rounded-md relative overflow-hidden bg-gradient-to-b from-purple-700/40 via-purple-500/10 to-transparent max-w-[956px] lg:max-w-[1200px] w-full">
            <div className="absolute w-full h-full bg-cover bg-center -z-10" style={{ backgroundImage: "url('/images/waitlist-pattern.png')" }}></div>
            <div className="flex flex-col justify-center items-center">
                <div className="section-title max-w-[300px] md:max-w-[450px] text-center">AI-driven SEO for everyone.</div>
                <form className="flex flex-col items-center mt-9 gap-4 md:flex-row md:gap-0">
                    <input
                        className="border-white/20 w-[250px] border placeholder:text-white/40 px-5 py-2 bg-transparent rounded-md focus:border-white focus:outline-none focus:text-white"
                        placeholder="Your email"/>
                    <button
                        className="bg-white rounded-md text-black w-[250px] md:w-[120px] px-5 md:px-2 py-2 hover:text-white hover:bg-black border hover:border-white transition-all">Join
                        waitlist
                    </button>
                </form>
                <span className="text-white/40 mt-7">No credit card required • 7-day free trial</span>
            </div>
        </div>
        </section>
    )
}

export default JoinWaitList;