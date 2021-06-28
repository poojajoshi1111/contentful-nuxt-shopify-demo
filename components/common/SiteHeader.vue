<template>
  <header class="border fixed bg-green-200 w-full p-2 flex">
    <nav>
      <ul role="menu" class="flex justify-between">
        <li>
          <nuxt-link
            no-prefetch
            to="/"
            role="menuitem"
            class="text-xs leading-normal font-normal"
          >
            <img src="~/assets/images/icons/home.jpg" width="30" height="30" />
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="w-full text-center">
      <nuxt-link to="/blogs" no-prefetch>Blogs</nuxt-link>
    </div>
    <div class="inline-flex justify-end items-center w-auto">
      <div class="flex items-center">
        <span class="ml-3 first:ml-0 inline-block w-8 h-8 w-6 h-6">
          <nuxt-link
            to="/profile"
            title="Profile"
            class="inline-block text-sm focus:outline-none h-full"
            no-prefetch
          >
            <icon-user />
          </nuxt-link>
        </span>
        <span class="ml-2 first:ml-0 inline-block w-8 h-8 w-6 h-6">
          <nuxt-link
            to="/cart"
            title="Cart"
            class="inline-block text-sm focus:outline-none h-full relative"
            no-prefetch
          >
            <icon-cart />
          </nuxt-link>
        </span>
      </div>
    </div>
  </header>
</template>
