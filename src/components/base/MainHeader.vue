<template>
  <div>
    <nav class="bg-coal border-b border-gold fixed start-0 top-0 z-20 w-full border-b">
      <div class="mx-auto flex max-w-screen flex-wrap items-center justify-between px-5 py-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="@/assets/tavernsandtomes.png" class="h-7" alt="Taverns&Tomes Logo" />
          <span class="font-display md:text-gold self-center text-xl font-semibold whitespace-nowrap">Taverns&Tomes</span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="text-body rounded-base hover:bg-neutral-secondary-soft hover:text-heading focus:ring-neutral-tertiary inline-flex h-10 w-10 items-center justify-center p-2 text-sm focus:ring-2 focus:outline-none md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="uppercase mt-4 flex flex-col border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            <li>
              <a
                href="#"
                class="md:text-cream block px-3 py-2 text-white md:p-0"
                aria-current="page">Home</a>
            </li>
            <li>
              <a
                href="#"
                class="md:text-cream block px-3 py-2 text-white md:p-0"
                aria-current="page">About</a>
            </li>
            <li>
              <a
                href="#"
                class="md:text-cream block px-3 py-2 text-white md:p-0"
                aria-current="page">Credits</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>


<style scoped>

</style>