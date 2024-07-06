const Contact = () => {
    return (
        <div className="items-center">
            <div className="m-5 p-5 text-center font-bold text-6xl">
                <h1 className="py-8">This is Contact Page...</h1>
                <h2>Call me on 8347250619.</h2>
                <h1 className="py-8">🤙📲📞</h1>
            </div>
            <div className="m-5 mx-auto p-5 w-6/12 text-center font-bold text-2xl bg-green-200">
                <form>
                    <input
                        type="text"
                        className="border-black p-2 m-2 border-4 text-center rounded-lg"
                        placeholder="First name"
                    />
                    <input
                        type="text"
                        className="border-black p-2 m-2 border-4 text-center rounded-lg"
                        placeholder="Last name"
                    />
                    <button
                        className="border-solid border-black bg-white p-2 border-4 rounded-lg" 
                    >Submit</button>
                </form>
            </div>
        </div>
    )
};

export default Contact;