<script setup>
import Nav from "@/components/Nav.vue";
</script>

<template>
  <Nav></Nav>
  <RouterView />
  <footer class="" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="flex">
          <img class="h-7" src="./assets/logo.svg" alt="Ilya Aizenberg" />
          <span class="text-lg pl-2 font-bold">Ilya Aizenberg</span>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div></div>
            <div></div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6">
                {{ $t("footer.social") }}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="#" class="text-sm leading-6"
                    ><i class="fa-brands fa-facebook"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6"
                    ><i class="fa-brands fa-instagram"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6"
                    ><i class="fa-brands fa-x-twitter"></i
                  ></a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6">
                {{ $t("footer.main") }}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li class="text-sm leading-6 no-underline">
                  <RouterLink :to="Tr.i18nRoute({ name: 'home' })">{{
                    $t("nav.home")
                  }}</RouterLink>
                </li>

                <li class="text-sm leading-6 no-underline">
                  <RouterLink :to="Tr.i18nRoute({ name: 'about' })">{{
                    $t("nav.about")
                  }}</RouterLink>
                </li>

                <li class="text-sm leading-6 no-underline">
                  <RouterLink :to="Tr.i18nRoute({ name: 'contact' })">{{
                    $t("nav.contact")
                  }}</RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Tr from "@/i18n/translation";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  setup() {
    const { t, locale } = useI18n();
    const currentLocale = ref("en"); // or dynamically set based on user preference or browser settings

    const supportedLocales = Tr.supportedLocales;

    const toggleLanguage = () => {
      currentLocale.value = currentLocale.value === "en" ? "he" : "en";

      // Implement the additional logic to actually switch the language in your app here.
      // This might involve interacting with a global state, updating the i18n locale, etc.
    };

    const router = useRouter();

    const switchLanguage = async (event) => {
      const newLocale = event.target.value;

      await Tr.switchLanguage(newLocale);

      try {
        await router.replace({ params: { locale: newLocale } });
      } catch (e) {
        console.log(e);
        router.push("/");
      }
    };

    return {
      currentLocale,
      toggleLanguage,
      Tr,
      t,
      locale,
      supportedLocales,
      switchLanguage,
    };
  },
};
</script>
