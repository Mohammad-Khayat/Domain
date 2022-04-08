<template>
  <section class="main-hero pt-20 overflow-hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.com/svgjs"
      class="hero-bg h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 1440 560"
    >
      <g mask='url("#SvgjsMask1001")' fill="none">
        <rect width="1440" height="560" x="0" y="0" fill="rgba(20, 93, 160, 1)"></rect>
        <path
          d="M0,536.002C98.671,539.564,169.227,445.949,252.234,392.484C335.142,339.083,444.181,311.243,486.927,222.372C529.81,133.216,502.772,26.471,473.78,-68.119C447.743,-153.07,395.196,-225.402,330.892,-286.719C271.056,-343.776,194.365,-371.593,119.262,-406.168C30.6,-446.985,-58.123,-543.116,-149.067,-507.675C-242.148,-471.402,-221.741,-324.317,-286.333,-248.109C-349.774,-173.26,-499.116,-170.83,-516.428,-74.251C-533.555,21.294,-411.089,81.823,-360.301,164.544C-317.267,234.636,-298.062,315.649,-240.797,374.687C-172.14,445.47,-98.546,532.445,0,536.002"
          fill="#104a80"
        ></path>
        <path
          d="M1440 970.623C1533.055 976.802 1638.506 1041.049 1713.688 985.867 1789.84 929.973 1760.97 808.886 1784.871 717.4970000000001 1803.982 644.423 1838.829 577.994 1840.108 502.473 1841.563 416.549 1840.142 326.03499999999997 1792.712 254.373 1742.696 178.80399999999997 1663.837 117.5 1574.656 101.404 1488.127 85.78699999999998 1410.587 147.88400000000001 1325.5 170.04899999999998 1236.904 193.128 1130.469 171.197 1064.2060000000001 234.373 997.233 298.226 1002.3399999999999 403.68100000000004 985.0989999999999 494.595 967.02 589.926 921.435 690.155 960.967 778.767 1000.547 867.4870000000001 1098.53 914.887 1188.715 951.0070000000001 1268.321 982.89 1354.435 964.941 1440 970.623"
          fill="#1870c0"
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1001">
          <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>
    <div class="container m-auto h-full">
      <div class="grid grid-cols-1 md:grid-cols-2 h-full">
        <div
          class="hero-svg md:order-2 h-full w-full flex justify-center md:justify-end items-center"
        >
          <home-hero-svg></home-hero-svg>
        </div>
        <div class="flex flex-col md:order-1 md:justify-center text-center md:text-left">
          <h1 class="text-white text-2xl md:text-5xl my-2">
            Great Thigs Start With Greate Domain
          </h1>
          <p class="text-light">
            You'll Also Get Free Email Forwarding, DNS Management, Transfer Lock, Free SSL
            & More! It All Starts With A Great Domain. Stand Out With A Domain Name That's
            Perfectly You.
          </p>
          <ui-button icon="search" class="m-auto md:my-5 md:mx-0">
            Find Your Domain
          </ui-button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-hero {
  height: 100vh;
  .hero-bg {
    position: absolute;
    z-index: -1;
    top: 0;
  }
}
</style>
