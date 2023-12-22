<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <div class="bg-gray-100">
        <nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <img
                class="block h-8 w-auto lg:hidden"
                src="../assets/logo.svg"
                alt="Ilya Aizenberg"
              />
              <img
                class="hidden h-8 w-auto lg:block"
                src="../assets/logo.svg"
                alt="Ilya Aizenberg"
              />
            </div>
            <!-- Mobile menu button -->
            <div @click="showMenu = !showMenu" class="flex md:hidden">
              <button
                type="button"
                class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="flex-col md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
          >
            <ul class="">
              <li class="btn btn-ghost">
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li class="btn btn-ghost">
                <RouterLink to="/contact">Contact</RouterLink>
              </li>
              <li class="btn btn-ghost">
                <RouterLink to="/about">About</RouterLink>
              </li>
            </ul>
            <label class="swap swap-rotate">
              <!-- this hidden checkbox controls the state -->
              <input type="checkbox" class="theme-controller" value="dark" />

              <!-- sun icon -->
              <svg
                class="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                />
              </svg>

              <!-- moon icon -->
              <svg
                class="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                />
              </svg>
            </label>
            <div class="dropdown dropdown-bottom dropdown-end">
              <div tabindex="0" role="button" class="btn btn-ghost m-2 w-32">Language</div>
              <ul
                tabindex="0"
                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><a>English</a></li>
                <li><a>Hebrew</a></li>
                <li><a>Russian</a></li>
              </ul>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
