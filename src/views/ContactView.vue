<template>
  <main>
    <h1>{{ $t("contact.header") }}</h1>
    <p>{{ $t("contact.created_by", { company: "Lokalise" }) }}</p>
    <p>{{ $t("contact.num_visits", 1) }}</p>
    <p>{{ $d(new Date(), "longFormat") }}</p>
  </main>
</template>
