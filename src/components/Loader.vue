<template>
  <div class="spinner-block">
    <div class="spinner spinner-1"></div>
  </div>
</template>

<style lang="scss" scoped>
$bg-color: #fff;
$basic-dark-color: #212121;
$border-width: 4px;
$basic-spinner-dimensions: 30px;
$main-spinner-dimensions: $basic-spinner-dimensions - $border-width * 0.5;
$small-spinner-dimensions: $main-spinner-dimensions * 0.7;

/* COMMON STYLES: YOU DON'T NEED THEM */

/* spinner style */
.spinner {
  width: 2rem;
  height: $basic-spinner-dimensions;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-width: 4px;
    border-style: solid;
    border-radius: 50%;
  }
}

/* spinner-1 styles */
.spinner.spinner-1 {
  position: relative;
  left: 50%;
  top: 1.5rem;

  @keyframes rotate-animation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes anti-rotate-animation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }

  &:before {
    width: $main-spinner-dimensions;
    height: $main-spinner-dimensions;
    border-bottom-color: #6d1896;
    border-right-color: #6d1896;
    border-top-color: rgba(#6d1896, 0);
    border-left-color: rgba(#6d1896, 0);
    top: 0px;
    left: 0px;
    animation: rotate-animation 1s linear 0s infinite;
  }

  &:after {
    width: $small-spinner-dimensions;
    height: $small-spinner-dimensions;
    border-bottom-color: #6d1896;
    border-right-color: #6d1896;
    border-top-color: rgba(#6d1896, 0);
    border-left-color: rgba(#6d1896, 0);
    top: ($main-spinner-dimensions - $small-spinner-dimensions) / 2;
    left: ($main-spinner-dimensions - $small-spinner-dimensions) / 2;
    animation: anti-rotate-animation 0.85s linear 0s infinite;
  }
}
</style>
