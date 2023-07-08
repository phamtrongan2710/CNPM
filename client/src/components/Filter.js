const Filter = () => {
    return (
        <div id="left" class="w-1/5 flex-none  text-left">
            <h3 class="text-3xl mb-[50px] font-medium">Filters</h3>

            <div class="w-95/100 mt-[45px]">
                <h4 class=" mb-4 !text-lg font-medium">Prices</h4>
                <div class="text-gray-400">
                    <p class="mb-[10px] hover:cursor-pointer hover:text-black ">
                        <a class="underline-hover-effect" href="">
                            $0-$50
                        </a>
                    </p>
                    <p class="mb-[10px] hover:cursor-pointer  hover:text-black">
                        <a class="underline-hover-effect" href="">
                            $50-$100
                        </a>
                    </p>
                    <p class="mb-[10px] hover:cursor-pointer   hover:text-black">
                        <a class="underline-hover-effect" href="">
                            $100-$150
                        </a>
                    </p>
                    <p class="mb-[10px] hover:cursor-pointer  hover:text-black">
                        <a class="underline-hover-effect" href="">
                            $150-$200
                        </a>
                    </p>

                    <p class="mb-[10px] hover:cursor-pointe hover:text-black">
                        <a class="underline-hover-effect" href="">
                            $300-$400
                        </a>
                    </p>
                </div>
            </div>

            <div class="w-95/100  mt-[45px]">
                <h4 class=" mb-4 !text-lg font-medium">Category</h4>
                <div class="text-gray-400">
                    <p class="mb-[10px] hover:underline hover:cursor-pointer transition ease-in-out hover:text-black">
                        <a href="">Shirt</a>
                    </p>

                    <p class="mb-[10px] hover:underline hover:cursor-pointer transition ease-in-out hover:text-black">
                        <a href="">Jeans</a>
                    </p>

                    <p class="mb-[10px] hover:underline hover:cursor-pointer transition ease-in-out hover:text-black">
                        <a href="">Dress</a>
                    </p>

                    <p class="mb-[10px] hover:underline hover:cursor-pointer transition ease-in-out hover:text-black">
                        <a href="">Hat</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Filter;
