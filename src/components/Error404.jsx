
export function Error404(){
    return(
        <div class="p-40 justify-center text-center bg-white h-screen ">
            <img src="/img/img404.jpg" alt="" className="justify-center items-center h-96 mx-auto" />
            <p class="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>
                <div class="animate-bounce">
                    <svg class="mx-auto h-16 w-16 text-[#fe7e8d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                </div>
            <p class="mt-4 text-gray-600">Let's get you back <a href="/" class="text-blue-500">home</a>.</p>
      </div>

      
    );
}
export default Error404