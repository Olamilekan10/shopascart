import React from 'react';
import '../App.css';

function Header() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-white bg-white container">
        <a href="/">
        <svg class="logo_svg" width="150" viewBox="0 0 140 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.19082 6.87946C5.1069 16.7758 4.92367 25.8699 4.44531 32.5471C15.3259 35.2102 21.1235 33.273 28.7619 33.0023C27.4052 25.4075 25.3407 19.4951 26.226 6.57556C19.2143 7.13152 12.2026 7.52184 5.19082 6.87946Z" fill="#E72529"></path><path d="M5.21999 6.81763L2.3862 10.0065C2.83659 18.9205 1.50781 24.9366 0 30.6619L4.7738 32.6365C5.46616 26.3899 5.32209 17.1028 5.22139 6.81763H5.21999Z" fill="#C02327"></path><path d="M20.9934 24.915C21.6354 24.915 22.1557 24.3461 22.1557 23.6461C22.1557 22.9461 21.6354 22.3772 20.9934 22.3772C20.3514 22.3772 19.8311 22.9461 19.8311 23.6461C19.8311 24.3461 20.3514 24.915 20.9934 24.915Z" fill="white"></path><path d="M13.6332 21.3229L11.0693 16.0931L13.9535 15.3082L15.155 18.7073H22.3485V21.3229H13.6332Z" fill="white"></path><path d="M14.0168 24.915C14.6588 24.915 15.1792 24.3461 15.1792 23.6461C15.1792 22.9461 14.6588 22.3772 14.0168 22.3772C13.3748 22.3772 12.8545 22.9461 12.8545 23.6461C12.8545 24.3461 13.3748 24.915 14.0168 24.915Z" fill="white"></path><path d="M8.62207 8.02891C9.22212 4.84871 9.40116 0.501873 14.7093 0.00928844C20.0244 -0.17219 20.6804 4.22218 21.7504 7.51183L19.8258 7.69475C19.1516 5.28512 19.3964 1.36749 14.7093 1.68004C10.6516 2.14382 11.1971 5.61927 10.6516 8.04475L8.62207 8.02891Z" fill="#E72529"></path><path d="M6.77246 8.0448C7.34733 4.98847 7.51938 0.938332 12.6107 0.478876C17.7076 0.30892 18.337 4.40515 19.3637 7.47156L17.5174 7.64151C16.8698 5.39464 17.1061 1.7449 12.6093 2.03584C8.71667 2.46793 9.23979 5.70718 8.71807 7.84315L6.77246 8.0448Z" fill="#E72529"></path><path d="M37.2053 28.3229C36.4416 28.3229 35.752 28.2465 35.1352 28.0938C34.5254 27.9412 33.9127 27.7194 33.2959 27.4299L33.5505 24.8704C34.1435 25.232 34.7268 25.5258 35.2975 25.7519C35.8751 25.9694 36.4808 26.0774 37.113 26.0774C37.6837 26.0774 38.1187 25.9809 38.4194 25.7879C38.7201 25.5949 38.8712 25.2896 38.8712 24.8704C38.8712 24.5565 38.79 24.2986 38.6278 24.0984C38.4739 23.8968 38.239 23.7168 37.9228 23.5554C37.6067 23.3941 37.2137 23.2213 36.7437 23.0369C36.0346 22.7633 35.4289 22.4651 34.9282 22.1439C34.4345 21.8228 34.0568 21.4353 33.7952 20.9845C33.5407 20.5265 33.4134 19.9619 33.4134 19.295C33.4134 18.6282 33.5868 17.9915 33.9337 17.4601C34.2806 16.9286 34.7743 16.5152 35.4136 16.2171C36.0542 15.919 36.8137 15.7706 37.6921 15.7706C38.425 15.7706 39.0796 15.8556 39.6586 16.0241C40.2447 16.1926 40.7846 16.4231 41.2784 16.7126L41.0238 19.272C40.5077 18.8932 39.9873 18.5835 39.4628 18.343C38.9383 18.0938 38.3634 17.9685 37.7396 17.9685C37.2459 17.9685 36.864 18.0736 36.5941 18.2825C36.3241 18.4913 36.1898 18.7895 36.1898 19.1755C36.1898 19.6421 36.3787 19.9921 36.7563 20.2255C37.134 20.4588 37.7396 20.744 38.5718 21.0824C39.1117 21.2999 39.5775 21.5246 39.972 21.7579C40.3734 21.9913 40.7049 22.2491 40.9664 22.53C41.228 22.8108 41.421 23.1334 41.5441 23.495C41.6756 23.8493 41.7413 24.2598 41.7413 24.7264C41.7413 25.4912 41.5637 26.1422 41.2098 26.6823C40.8629 27.2138 40.3496 27.62 39.6712 27.9008C38.9999 28.1831 38.1788 28.3229 37.2081 28.3229H37.2053ZM43.7457 28.163V10.0583H46.6368V17.8562L45.9892 17.3247C46.4746 16.9704 47.0019 16.6449 47.5726 16.3467C48.1432 16.0486 48.8244 15.9002 49.6175 15.9002C50.6344 15.9002 51.4624 16.1379 52.1016 16.6117C52.7408 17.0784 53.2108 17.7309 53.5115 18.5677C53.8122 19.3958 53.9619 20.358 53.9619 21.4526V28.163H51.0707V21.6686C51.0707 20.5423 50.8987 19.7098 50.5532 19.1697C50.2077 18.6296 49.6455 18.3617 48.865 18.3617C48.1992 18.3617 47.6509 18.5273 47.2229 18.8572C46.8019 19.1784 46.4298 19.6177 46.1081 20.1722L46.6368 18.5547V28.163H43.7457ZM61.694 28.3229C60.4365 28.3229 59.3651 28.0377 58.4783 27.4659C57.5916 26.8941 56.9132 26.1336 56.4432 25.1844C55.9802 24.2353 55.7494 23.1968 55.7494 22.0705C55.7494 20.9442 55.9802 19.8899 56.4432 18.9321C56.9132 17.9743 57.5916 17.2095 58.4783 16.6391C59.3651 16.0601 60.4365 15.7706 61.694 15.7706C62.9514 15.7706 64.0228 16.0601 64.9096 16.6391C65.7964 17.2109 66.4706 17.9743 66.9336 18.9321C67.4035 19.8899 67.6385 20.9355 67.6385 22.0705C67.6385 23.2055 67.4035 24.2353 66.9336 25.1844C66.4706 26.1336 65.7964 26.8941 64.9096 27.4659C64.0228 28.0377 62.9514 28.3229 61.694 28.3229ZM61.694 25.8599C62.6577 25.8599 63.3976 25.5099 63.9151 24.8099C64.4397 24.1013 64.7012 23.1882 64.7012 22.0705C64.7012 20.9528 64.4397 20.0152 63.9151 19.3065C63.399 18.5907 62.6577 18.2321 61.694 18.2321C60.7303 18.2321 59.9973 18.5907 59.4728 19.3065C58.9483 20.0152 58.6867 20.9355 58.6867 22.0705C58.6867 23.2055 58.9483 24.1028 59.4728 24.8099C59.9973 25.5099 60.7373 25.8599 61.694 25.8599ZM69.5771 33.9962V16.0918H71.9088L72.4683 18.0952L71.6053 17.7813C72.141 17.2109 72.7242 16.7558 73.3537 16.4173C73.9831 16.0716 74.7524 15.8988 75.6629 15.8988C76.8057 15.8988 77.7652 16.184 78.5429 16.7558C79.3206 17.3261 79.9066 18.0866 80.3039 19.0358C80.7081 19.9849 80.9095 21.0219 80.9095 22.1483C80.9095 23.2746 80.7081 24.3116 80.3039 25.2608C79.908 26.2099 79.3206 26.9704 78.5429 27.5408C77.7652 28.1111 76.8057 28.3977 75.6629 28.3977C74.7538 28.3977 74.0153 28.2696 73.4474 28.0117C72.8795 27.7539 72.3046 27.3434 71.7214 26.7817L72.4683 26.1782V33.9962H69.5771ZM75.2335 25.8599C76.0895 25.8599 76.7525 25.5099 77.2225 24.8099C77.7009 24.1013 77.94 23.1882 77.94 22.0705C77.94 20.9528 77.7009 20.031 77.2225 19.331C76.7525 18.631 76.0895 18.2811 75.2335 18.2811C74.5705 18.2811 74.0264 18.4424 73.6026 18.7636C73.1788 19.0847 72.8669 19.5327 72.6655 20.103C72.4655 20.6662 72.3648 21.3215 72.3648 22.0705C72.3648 22.8195 72.4655 23.4791 72.6655 24.0495C72.8655 24.6126 73.1788 25.0548 73.6026 25.3774C74.0264 25.6986 74.5705 25.8599 75.2335 25.8599ZM85.4413 28.3632C84.8371 28.3632 84.2846 28.2249 83.7853 27.9484C83.2859 27.6646 82.8901 27.2585 82.595 26.7299C82.2998 26.2013 82.153 25.5618 82.153 24.8128C82.153 24.1416 82.2998 23.5699 82.595 23.0974C82.8971 22.6164 83.2901 22.2174 83.7741 21.902C84.265 21.5779 84.7951 21.3259 85.3616 21.1444C85.9365 20.9557 86.4988 20.8174 87.0513 20.7296C87.6107 20.6432 88.1017 20.5913 88.5255 20.5755C88.4947 19.8971 88.3283 19.4045 88.0262 19.0963C87.724 18.788 87.2093 18.6354 86.4834 18.6354C85.977 18.6354 85.4819 18.7103 84.9979 18.86C84.521 19.0026 83.9811 19.2273 83.3768 19.5341L83.1279 17.1432C83.8076 16.7961 84.4888 16.5354 85.1686 16.3626C85.8568 16.1883 86.5519 16.1019 87.2555 16.1019C88.1017 16.1019 88.8318 16.2603 89.4445 16.5757C90.0571 16.8912 90.5299 17.3996 90.8614 18.1025C91.1943 18.7967 91.3607 19.7156 91.3607 20.8592V24.0538C91.3607 24.6458 91.3873 25.075 91.4404 25.3443C91.4936 25.605 91.5915 25.7706 91.7356 25.8412C91.8796 25.9118 92.0866 25.9478 92.3594 25.9478H92.7216L92.4727 28.3617H91.4516C91.0278 28.3617 90.6502 28.3027 90.3173 28.1846C89.9928 28.0737 89.713 27.9167 89.478 27.7107C89.243 27.5062 89.0542 27.2657 88.9116 26.9891C88.5409 27.4227 88.0387 27.7626 87.4037 28.0074C86.7757 28.2436 86.1225 28.3617 85.4413 28.3617V28.3632ZM86.503 26.0284C86.7575 26.0284 87.0736 25.9608 87.4513 25.8239C87.8289 25.6785 88.1688 25.4581 88.4696 25.1599V22.4075C87.9296 22.432 87.3897 22.5242 86.8498 22.6855C86.3099 22.8468 85.8596 23.0845 85.4959 23.397C85.1322 23.7096 84.9518 24.1056 84.9518 24.5795C84.9518 25.0534 85.0749 25.4365 85.3224 25.6785C85.5686 25.9118 85.9631 26.0284 86.5016 26.0284H86.503ZM97.6801 28.3214C96.9164 28.3214 96.2268 28.2451 95.61 28.0924C95.0001 27.9397 94.3875 27.7179 93.7707 27.4284L94.0252 24.869C94.6183 25.2305 95.2016 25.5243 95.7722 25.7505C96.3499 25.968 96.9555 26.076 97.5878 26.076C98.1584 26.076 98.5934 25.9795 98.8942 25.7865C99.1949 25.5935 99.346 25.2881 99.346 24.869C99.346 24.555 99.2648 24.2972 99.1026 24.097C98.9487 23.8954 98.7137 23.7153 98.3976 23.554C98.0815 23.3927 97.6885 23.2199 97.2185 23.0355C96.5094 22.7618 95.9037 22.4637 95.403 22.1425C94.9092 21.8213 94.5316 21.4339 94.27 20.9831C94.0155 20.525 93.8882 19.9604 93.8882 19.2936C93.8882 18.6267 94.0616 17.9901 94.4085 17.4586C94.7554 16.9272 95.2491 16.5138 95.8883 16.2157C96.5289 15.9175 97.2884 15.7692 98.1668 15.7692C98.8998 15.7692 99.5544 15.8541 100.133 16.0227C100.719 16.1912 101.259 16.4216 101.753 16.7111L101.499 19.2705C100.982 18.8917 100.462 18.5821 99.9376 18.3415C99.4131 18.0924 98.8382 17.9671 98.2144 17.9671C97.7206 17.9671 97.3388 18.0722 97.0689 18.2811C96.7989 18.4899 96.6646 18.788 96.6646 19.174C96.6646 19.6407 96.8534 19.9907 97.2311 20.224C97.6087 20.4574 98.2144 20.7425 99.0466 21.081C99.5865 21.2985 100.052 21.5232 100.447 21.7565C100.848 21.9898 101.18 22.2476 101.441 22.5285C101.703 22.8094 101.896 23.132 102.019 23.4935C102.15 23.8478 102.216 24.2583 102.216 24.725C102.216 25.4898 102.038 26.1408 101.685 26.6809C101.338 27.2124 100.824 27.6185 100.146 27.8994C99.4746 28.1817 98.6536 28.3214 97.6829 28.3214H97.6801ZM109.544 28.3214C108.218 28.3214 107.103 28.0391 106.201 27.476C105.306 26.9042 104.627 26.148 104.166 25.206C103.711 24.2569 103.483 23.2098 103.483 22.0676C103.483 20.9254 103.711 19.8668 104.166 18.9177C104.621 17.9599 105.303 17.1951 106.214 16.6247C107.124 16.0529 108.264 15.7677 109.638 15.7677C110.285 15.7677 110.871 15.8441 111.396 15.9967C111.92 16.1422 112.368 16.3222 112.737 16.5397L112.506 18.9537C112.151 18.7607 111.751 18.5994 111.304 18.4712C110.864 18.343 110.401 18.2782 109.916 18.2782C108.805 18.2782 107.945 18.6282 107.337 19.3281C106.727 20.0281 106.423 20.9413 106.423 22.0676C106.423 23.1939 106.735 24.0394 107.361 24.7711C107.986 25.4955 108.829 25.857 109.894 25.857C110.348 25.857 110.796 25.7894 111.235 25.6525C111.683 25.5071 112.113 25.3112 112.53 25.0606L112.785 27.5955C112.383 27.813 111.898 27.9858 111.327 28.114C110.765 28.2508 110.171 28.3185 109.547 28.3185L109.544 28.3214ZM117.249 28.3617C116.645 28.3617 116.093 28.2235 115.593 27.9469C115.094 27.6632 114.698 27.257 114.403 26.7284C114.108 26.1998 113.961 25.5603 113.961 24.8114C113.961 24.1402 114.108 23.5684 114.403 23.096C114.705 22.6149 115.098 22.216 115.582 21.9005C116.073 21.5765 116.603 21.3244 117.17 21.1429C117.745 20.9543 118.307 20.816 118.859 20.7281C119.419 20.6417 119.91 20.5899 120.334 20.574C120.303 19.8956 120.136 19.403 119.834 19.0948C119.532 18.7866 119.017 18.6339 118.292 18.6339C117.785 18.6339 117.29 18.7088 116.806 18.8586C116.329 19.0012 115.789 19.2259 115.185 19.5327L114.936 17.1418C115.616 16.7947 116.297 16.534 116.977 16.3611C117.665 16.1868 118.36 16.1004 119.064 16.1004C119.91 16.1004 120.64 16.2589 121.253 16.5743C121.865 16.8897 122.338 17.3981 122.67 18.101C123.002 18.7952 123.169 19.7142 123.169 20.8578V24.0524C123.169 24.6443 123.195 25.0735 123.249 25.3429C123.302 25.6036 123.4 25.7692 123.544 25.8398C123.688 25.9103 123.895 25.9463 124.168 25.9463H124.53L124.281 28.3603H123.26C122.836 28.3603 122.458 28.3013 122.125 28.1831C121.801 28.0722 121.521 27.9152 121.286 27.7093C121.051 27.5048 120.862 27.2642 120.72 26.9877C120.349 27.4212 119.847 27.7611 119.212 28.006C118.585 28.2422 117.931 28.3603 117.251 28.3603L117.249 28.3617ZM118.311 26.027C118.566 26.027 118.882 25.9593 119.259 25.8225C119.637 25.677 119.977 25.4566 120.278 25.1585V22.4061C119.738 22.4306 119.198 22.5227 118.658 22.6841C118.118 22.8454 117.668 23.083 117.304 23.3956C116.94 23.7081 116.76 24.1042 116.76 24.5781C116.76 25.0519 116.883 25.435 117.131 25.677C117.377 25.9103 117.771 26.027 118.31 26.027H118.311ZM126.253 28.1601V16.0903H128.958L129.028 17.3693C129.323 17.0309 129.74 16.6938 130.276 16.3554C130.811 16.0169 131.399 15.8484 132.037 15.8484C132.223 15.8484 132.395 15.8642 132.55 15.8973L132.34 18.8428C132.17 18.7938 131.998 18.7621 131.827 18.7463C131.663 18.7304 131.501 18.7218 131.337 18.7218C130.848 18.7218 130.4 18.8384 129.996 19.0718C129.592 19.3051 129.308 19.5903 129.144 19.9288V28.1601H126.253ZM137.668 28.3617C136.938 28.3617 136.342 28.212 135.885 27.9124C135.426 27.6041 135.087 27.2138 134.87 26.7414C134.652 26.2675 134.545 25.775 134.545 25.2622V18.5057H132.889L133.144 16.0918H134.543V13.4877L137.434 13.1795V16.0903H139.941V18.5043H137.434V24.0538C137.434 24.653 137.469 25.0879 137.539 25.3558C137.609 25.6165 137.769 25.7822 138.018 25.8527C138.267 25.9161 138.662 25.9478 139.207 25.9478H140L139.744 28.3617H137.668Z" fill="black"></path>
        </svg>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse align-center mt-2 ml-2" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto align-center">
            <li class="nav-item">
                <a class="nav-link" href="/">Stores</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/">Locations</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="/">Become a Shopper</a>
            </li>   
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <a class="nav-link text-dark" href="/">Sign in</a>
            <button class="btn btn-danger rounded-pill my-2 my-sm-0">Sign up</button>
            </form>
        </div>
    </nav>
    </>
  )
}

export default Header;