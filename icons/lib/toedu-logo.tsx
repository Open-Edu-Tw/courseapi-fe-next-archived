import * as React from 'react';

// TODO: logo 的 size 跟一些參數還需要調整
export function ToeduLogo(props?: React.ComponentPropsWithoutRef<'svg'>) {
	return (
    <svg width="400" height="120" xmlns="http://www.w3.org/2000/svg" 			{...props}
    >
      <path style={
        {
          fill:"#ffffff", stroke: "none"
        }
    } d="M0 0L0 120L400 120L400 0L0 0z"/>
    <path style={
        {
          fill:"#1da7cd", stroke: "none"
        }
    } d="M25 15.7292C12.5851 16.0956 7.05775 32.6219 17.108 40.3472C24.5205 46.0449 32.9698 39.8332 39.7215 48.0185C46.8871 56.7057 39.8304 73.4776 57 72.9421C73.8539 72.4165 65.4781 56.6791 71.8549 48.1852C78.1694 39.7744 87.4312 44.8647 94.9059 39.9907C102.108 35.2942 101.704 22.9477 94.8148 18.1481C87.8353 13.286 77.8807 16.4927 74.5332 24.0147C72.5149 28.5497 73.9818 33.5153 72.2577 37.9992C69.3908 45.4552 59.1745 47.7206 52 46.517C32.1194 43.1818 46.1966 15.1035 25 15.7292M53.0154 19.7431C41.6324 24.1704 48.1921 42.2852 59.9846 37.8372C71.4043 33.5298 64.6119 15.2327 53.0154 19.7431z"/>
    <path style={
        {
          fill:"#e9bf3b", stroke: "none"
        }
    } d="M347 24.7693C334.518 25.3258 335.816 44.4471 348 43.8472C360.315 43.241 359.525 24.2109 347 24.7693M377.001 24.7068C364.408 26.403 367.213 45.7159 379.999 43.7562C392.048 41.9094 389.156 23.0695 377.001 24.7068z"/>
    <path style={
        {
          fill:"#1da7cd", stroke: "none"
        }
    } d="M191 37.5293C174.154 41.3953 158.959 66.7559 172.684 81.6713C179.072 88.6127 190.3 89.2171 199 87.3302C216.276 83.5833 231.353 57.0343 216.671 42.3295C210.517 36.1671 199.106 35.6692 191 37.5293M137 49C135.634 59.5753 130.059 72.3546 131.318 82.9807C132.078 89.3975 140.923 89.1603 144.143 84.7716C150.535 76.059 146.588 61.6285 151.514 52.1481C155.175 45.1026 169.033 53.4279 169.793 43.0147C170.185 37.6458 164.836 38.0079 161 38L133 38C129.59 38.0015 125.067 37.3862 122.603 40.3179C114.542 49.9116 132.509 49 137 49z"/>
    <path style={
        {
          fill:"#939397", stroke: "none"
        }
    } d="M238 68C243.923 68 274.382 71.5903 269.381 59.1474C266.882 52.9296 246.694 56 241 56C243.591 39.4081 271.303 57.7326 276.238 44.892C277.814 40.7928 274.718 38.3889 270.995 38.0586C261.218 37.1911 242.144 34.9064 233.105 38.7423C225.381 42.0201 225.384 59.8517 224 67C223.109 71.6024 220.097 80.3055 223.028 84.5664C225.253 87.802 230.628 86.9987 234 87C243.859 87.0038 255.293 88.6076 264.981 86.7716C268.48 86.1086 271.493 82.933 270.164 79.1474C268.862 75.4406 264.125 76.0064 261 76C252.403 75.9823 237.448 79.8377 238 68M287.004 38.6528C276.59 41.9641 276.935 62.9128 275.197 72C274.462 75.8421 272.752 81.2963 275.603 84.6821C279.981 89.8812 302.883 88.0451 309 86.1998C324.277 81.5919 335.899 56.1582 323.775 43.108C317.01 35.8254 296.079 35.7671 287.004 38.6528z"/>
    <path style={
        {
          fill:"#e9bf3b", stroke: "none"
        }
    } d="M340.005 47.6157C330.54 49.8265 327.476 73.7798 332.009 80.9568C337.736 90.0235 353.925 89.4426 363 86.8295C375.864 83.1254 378.072 72.4929 380.65 61C381.785 55.9437 383.871 47.5579 375.995 47.4028C359.947 47.0866 371.085 80.0261 351.015 75.8866C337.704 73.1411 356.638 43.7303 340.005 47.6157z"/>
    <path style={
        {
          fill:"#ffffff", stroke: "none"
        }
    } d="M195 48.5478C179.228 51.9626 177.501 80.9013 197 75.5664C210.259 71.9387 211.742 44.9231 195 48.5478M289 75C292.657 75.8705 296.247 76.2582 300 75.6991C309.068 74.3481 318.739 62.126 312.258 53.1443C304.545 42.4551 293.631 50.8495 291.8 60C290.802 64.9899 289.942 70 289 75z"/>
    <path style={
        {
          fill:"#939397", stroke: "none"
        }
    } d="M21.0185 51.7423C9.35958 56.3687 17.4577 73.8159 28.9815 69.2577C40.7645 64.597 32.8122 47.0624 21.0185 51.7423M83.0941 51.7423C71.9614 56.3969 80.6164 73.9774 91.9059 68.9907C103.139 64.0292 94.7541 46.8672 83.0941 51.7423M52.0039 79.6528C36.6369 84.511 45.5499 108.036 60.9846 102.561C75.0715 97.5644 66.6972 75.0075 52.0039 79.6528M20.0548 83.0278C9.03206 88.9863 18.9979 105.735 29.9452 99.821C41.13 93.7787 31.0649 77.0761 20.0548 83.0278M83.0941 82.7423C71.9613 87.397 80.6164 104.977 91.9059 99.9907C103.139 95.0292 94.7541 77.8672 83.0941 82.7423z"/>
    </svg>
	);
}