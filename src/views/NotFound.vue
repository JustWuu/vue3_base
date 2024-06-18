<script setup lang="ts"></script>

<template>
  <div
    class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"
  >
    <div class="flex flex-column align-items-center justify-content-center">
      <img src="@/assets/logo.svg" alt="logo" class="mb-4 w-6rem flex-shrink-0" />
      <div
        style="
          border-radius: 56px;
          padding: 0.3rem;
          background: linear-gradient(
            180deg,
            rgba(33, 150, 243, 0.4) 10%,
            rgba(33, 150, 243, 0) 30%
          );
        "
      >
        <div
          class="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center"
          style="border-radius: 53px"
        >
          <span class="text-blue-500 font-bold text-3xl">404</span>
          <h1 class="text-900 font-bold text-3xl lg:text-5xl mb-2">找不到該頁面</h1>
          <div class="text-600 mb-4">請求的網址不可使用</div>
          <div class="w-full flex align-items-center py-5 border-300 border-bottom-1">
            <span
              class="flex justify-content-center align-items-center bg-cyan-400 border-round"
              style="height: 3.5rem; width: 3.5rem"
            >
              <i class="text-50 pi pi-fw pi-question-circle text-2xl"></i>
            </span>
            <span class="ml-4 flex flex-column">
              <span class="text-900 lg:text-xl font-medium mb-0 block">為什麼會出現這個畫面？</span>
              <span class="text-600 lg:text-xl">請查看以下說明</span>
            </span>
          </div>
          <div class="w-full flex align-items-center py-5 border-300 border-bottom-1">
            <span
              class="flex justify-content-center align-items-center bg-orange-400 border-round"
              style="height: 3.5rem; width: 3.5rem"
            >
              <i class="pi pi-fw pi-table text-50 text-2xl"></i>
            </span>
            <span class="ml-4 flex flex-column">
              <span class="text-900 lg:text-xl font-medium mb-0">頁面不存在</span>
              <span class="text-600 lg:text-xl">該網址可能不存在任何頁面</span>
            </span>
          </div>
          <div class="w-full flex align-items-center mb-4 py-5 border-300 border-bottom-1">
            <span
              class="flex justify-content-center align-items-center bg-indigo-400 border-round"
              style="height: 3.5rem; width: 3.5rem"
            >
              <i class="pi pi-fw pi-unlock text-50 text-2xl"></i>
            </span>
            <span class="ml-4 flex flex-column">
              <span class="text-900 lg:text-xl font-medium mb-0">暫時關閉</span>
              <span class="text-600 lg:text-xl">頁面暫停訪問，請洽系統管理員</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
