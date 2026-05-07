<template>
  <section class="flex items-center w-full min-h-80 p-6 sm:p-10 lg:p-20 mt-40 bg-black text-white">
    <div
      class="flex flex-col md:flex-row justify-between gap-10 lg:gap-0 w-full lg:w-[calc(50%+250px)]"
    >
      <div>
        <ul class="space-y-5 text-nowrap cursor-pointer">
          <li class="hover:text-[#EDB5BF]">Home</li>
          <li class="hover:text-[#EDB5BF]">Blogs</li>
          <li class="hover:text-[#EDB5BF]">About Us</li>
          <li class="hover:text-[#EDB5BF]">Contact Us</li>
          <li class="space-x-2">
            <button class="text-[13px] lg:text-[15px] mt-[1px] hover:text-[#EDB5BF]">
              <span class="pi pi-facebook"></span>
            </button>
            <button class="text-[13px] lg:text-[15px] mt-[1px] hover:text-[#EDB5BF]">
              <span class="pi pi-instagram"></span>
            </button>
          </li>
        </ul>
      </div>

      <div class="w-full md:w-[500px] space-y-6">
        <h2 class="font-footer-header text-[24px] lg:text-[35px] text-[#EDB5BF]">
          NO JUNK, JUST TRAVEL GEMS
        </h2>
        <p class="font-bold text-sm lg:text-lg tracking-wider">
          Get insider tips, behind-the-scenes stories, and let our emails remind you to keep
          exploring!
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <input
            id="emailAddress"
            type="email"
            placeholder="Your email address"
            class="w-full lg:w-80 p-3 text-black rounded-full"
          />
          <button class="w-full sm:w-36 p-3 bg-[#5b5a4f] rounded-full hover:opacity-90 font-bold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
