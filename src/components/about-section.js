/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function AboutSection() {
    return(
        <section id="skills_feature" className="about-section">
            
            <div className="headliner">
                <h1 id="about-headline">Let's see what's <br></br> possible!</h1>
                <svg className="scroll-decor" stroke="black" viewBox="0 0 18 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 0V90" />
                <path d="M1 82L6 90"  strokeLinecap="round"/>
                <path d="M11 82L6 90" strokeLinecap="round"/>
                <path d="M9.891 19.55C9.979 19.4913 10.0633 19.462 10.144 19.462C10.232 19.4693 10.3017 19.517 10.353 19.605C10.4043 19.6637 10.4263 19.7297 10.419 19.803C10.4117 19.8837 10.375 19.957 10.309 20.023C10.0523 20.221 9.84333 20.4593 9.682 20.738C9.528 21.024 9.451 21.3613 9.451 21.75C9.451 21.9553 9.484 22.157 9.55 22.355C9.62333 22.5603 9.72967 22.729 9.869 22.861C10.0157 22.993 10.199 23.059 10.419 23.059C10.6463 23.059 10.8297 22.993 10.969 22.861C11.1083 22.729 11.2183 22.5567 11.299 22.344C11.3797 22.1387 11.4493 21.9187 11.508 21.684C11.574 21.4347 11.6473 21.1927 11.728 20.958C11.816 20.7233 11.9223 20.5143 12.047 20.331C12.179 20.155 12.3367 20.012 12.52 19.902C12.7033 19.792 12.927 19.737 13.191 19.737C13.499 19.737 13.7703 19.8213 14.005 19.99C14.2397 20.1587 14.423 20.386 14.555 20.672C14.687 20.9653 14.753 21.2953 14.753 21.662C14.753 21.8453 14.7273 22.0433 14.676 22.256C14.632 22.4687 14.555 22.6777 14.445 22.883C14.335 23.0883 14.1847 23.2717 13.994 23.433C13.928 23.499 13.851 23.532 13.763 23.532C13.6823 23.532 13.609 23.4953 13.543 23.422C13.499 23.3633 13.477 23.2937 13.477 23.213C13.477 23.1397 13.5063 23.0773 13.565 23.026C13.763 22.85 13.9133 22.641 14.016 22.399C14.1187 22.157 14.17 21.8967 14.17 21.618C14.17 21.4053 14.1333 21.2037 14.06 21.013C13.994 20.8297 13.8913 20.6757 13.752 20.551C13.6127 20.4263 13.4293 20.364 13.202 20.364C12.9893 20.3787 12.817 20.452 12.685 20.584C12.553 20.7233 12.443 20.903 12.355 21.123C12.267 21.3503 12.1863 21.6033 12.113 21.882C12.0543 22.1167 11.9847 22.3403 11.904 22.553C11.8233 22.773 11.7207 22.9637 11.596 23.125C11.4787 23.2937 11.3283 23.4257 11.145 23.521C10.9617 23.6237 10.7307 23.675 10.452 23.675C10.1293 23.675 9.85067 23.5833 9.616 23.4C9.38133 23.224 9.20167 22.9857 9.077 22.685C8.95233 22.3843 8.89 22.0507 8.89 21.684C8.89 21.288 8.967 20.903 9.121 20.529C9.275 20.1623 9.53167 19.836 9.891 19.55ZM14.753 27.5003C14.753 27.8523 14.7127 28.1749 14.632 28.4683C14.5587 28.7616 14.456 28.9963 14.324 29.1723C14.192 29.3556 14.049 29.4473 13.895 29.4473C13.8217 29.4473 13.7483 29.4216 13.675 29.3703C13.609 29.3189 13.576 29.2493 13.576 29.1613C13.576 29.0733 13.598 28.9999 13.642 28.9413C13.686 28.8899 13.7373 28.8349 13.796 28.7763C13.8547 28.7249 13.9097 28.6479 13.961 28.5453C14.005 28.4499 14.0453 28.3143 14.082 28.1383C14.1187 27.9623 14.137 27.7606 14.137 27.5333C14.137 27.1226 14.0343 26.7523 13.829 26.4223C13.6237 26.0923 13.345 25.8319 12.993 25.6413C12.6483 25.4506 12.2597 25.3553 11.827 25.3553C11.387 25.3553 10.991 25.4469 10.639 25.6303C10.287 25.8136 10.0083 26.0666 9.803 26.3893C9.605 26.7119 9.506 27.0896 9.506 27.5223C9.506 27.8156 9.53167 28.0429 9.583 28.2043C9.63433 28.3656 9.693 28.5049 9.759 28.6223C9.83967 28.7616 9.91667 28.8606 9.99 28.9193C10.0707 28.9853 10.111 29.0696 10.111 29.1723C10.111 29.2676 10.0817 29.3373 10.023 29.3813C9.97167 29.4326 9.902 29.4583 9.814 29.4583C9.69667 29.4583 9.56467 29.3703 9.418 29.1943C9.27867 29.0256 9.154 28.7909 9.044 28.4903C8.94133 28.1896 8.89 27.8449 8.89 27.4563C8.89 26.9063 9.01833 26.4223 9.275 26.0043C9.53167 25.5936 9.88 25.2709 10.32 25.0363C10.7673 24.8089 11.2697 24.6953 11.827 24.6953C12.3623 24.6953 12.85 24.8126 13.29 25.0473C13.73 25.2819 14.082 25.6083 14.346 26.0263C14.6173 26.4516 14.753 26.9429 14.753 27.5003ZM9 31.0486C9 30.9459 9.033 30.8653 9.099 30.8066C9.165 30.7479 9.242 30.7186 9.33 30.7186H14.258C14.346 30.7186 14.423 30.7479 14.489 30.8066C14.555 30.8726 14.588 30.9533 14.588 31.0486C14.588 31.1439 14.555 31.2209 14.489 31.2796C14.423 31.3456 14.346 31.3786 14.258 31.3786H12.608L12.575 31.2136C12.8317 31.2356 13.0847 31.2979 13.334 31.4006C13.5907 31.5106 13.8253 31.6573 14.038 31.8406C14.2507 32.0239 14.423 32.2403 14.555 32.4896C14.687 32.7463 14.753 33.0323 14.753 33.3476C14.753 33.4796 14.7237 33.6079 14.665 33.7326C14.6137 33.8573 14.5257 33.9196 14.401 33.9196C14.291 33.9196 14.2067 33.8903 14.148 33.8316C14.0893 33.7729 14.06 33.7033 14.06 33.6226C14.06 33.5566 14.0783 33.4833 14.115 33.4026C14.1517 33.3293 14.17 33.2303 14.17 33.1056C14.17 32.9003 14.1077 32.6949 13.983 32.4896C13.8657 32.2843 13.7043 32.0973 13.499 31.9286C13.2937 31.7599 13.0627 31.6243 12.806 31.5216C12.5567 31.4263 12.3037 31.3786 12.047 31.3786H9.33C9.242 31.3786 9.165 31.3456 9.099 31.2796C9.033 31.2136 9 31.1366 9 31.0486ZM11.816 39.94C11.2587 39.94 10.7563 39.819 10.309 39.577C9.869 39.335 9.52067 39.005 9.264 38.587C9.01467 38.169 8.89 37.6923 8.89 37.157C8.89 36.6363 9.01467 36.1633 9.264 35.738C9.52067 35.32 9.869 34.9863 10.309 34.737C10.7563 34.495 11.2587 34.374 11.816 34.374C12.3807 34.374 12.883 34.495 13.323 34.737C13.763 34.9863 14.1113 35.32 14.368 35.738C14.6247 36.1633 14.753 36.6363 14.753 37.157C14.753 37.6923 14.6247 38.169 14.368 38.587C14.1113 39.005 13.763 39.335 13.323 39.577C12.883 39.819 12.3807 39.94 11.816 39.94ZM11.816 39.28C12.2633 39.28 12.6593 39.1883 13.004 39.005C13.356 38.8216 13.631 38.5686 13.829 38.246C14.0343 37.9306 14.137 37.5676 14.137 37.157C14.137 36.761 14.0343 36.4016 13.829 36.079C13.631 35.7563 13.356 35.4996 13.004 35.309C12.6593 35.1256 12.2633 35.034 11.816 35.034C11.3687 35.034 10.9727 35.1256 10.628 35.309C10.2833 35.4996 10.0083 35.7563 9.803 36.079C9.605 36.4016 9.506 36.761 9.506 37.157C9.506 37.5676 9.605 37.9306 9.803 38.246C10.0083 38.5686 10.2833 38.8216 10.628 39.005C10.9727 39.1883 11.3687 39.28 11.816 39.28ZM9.33 42.0686C9.242 42.0686 9.165 42.0356 9.099 41.9696C9.033 41.9036 9 41.8266 9 41.7386C9 41.6433 9.033 41.5626 9.099 41.4966C9.165 41.438 9.242 41.4086 9.33 41.4086H16.81C16.898 41.4086 16.975 41.4416 17.041 41.5076C17.107 41.5736 17.14 41.6506 17.14 41.7386C17.14 41.834 17.107 41.911 17.041 41.9696C16.975 42.0356 16.898 42.0686 16.81 42.0686H9.33ZM9.33 44.6038C9.242 44.6038 9.165 44.5708 9.099 44.5048C9.033 44.4388 9 44.3618 9 44.2738C9 44.1785 9.033 44.0978 9.099 44.0318C9.165 43.9731 9.242 43.9438 9.33 43.9438H16.81C16.898 43.9438 16.975 43.9768 17.041 44.0428C17.107 44.1088 17.14 44.1858 17.14 44.2738C17.14 44.3691 17.107 44.4461 17.041 44.5048C16.975 44.5708 16.898 44.6038 16.81 44.6038H9.33ZM14.665 51.9838C14.665 52.4458 14.566 52.8198 14.368 53.1058C14.17 53.3918 13.9023 53.6008 13.565 53.7328C13.2277 53.8721 12.8537 53.9418 12.443 53.9418H9.33C9.242 53.9418 9.165 53.9088 9.099 53.8428C9.033 53.7768 9 53.6998 9 53.6118C9 53.5091 9.033 53.4284 9.099 53.3698C9.165 53.3111 9.242 53.2818 9.33 53.2818H12.443C12.7437 53.2818 13.015 53.2341 13.257 53.1388C13.499 53.0508 13.6897 52.9041 13.829 52.6988C13.9757 52.4934 14.049 52.2184 14.049 51.8738C14.049 51.5658 13.9757 51.2724 13.829 50.9938C13.6897 50.7224 13.499 50.5024 13.257 50.3338C13.015 50.1651 12.7437 50.0808 12.443 50.0808H9.33C9.242 50.0808 9.165 50.0478 9.099 49.9818C9.033 49.9158 9 49.8388 9 49.7508C9 49.6481 9.033 49.5674 9.099 49.5088C9.165 49.4501 9.242 49.4208 9.33 49.4208H16.81C16.898 49.4208 16.975 49.4501 17.041 49.5088C17.107 49.5748 17.14 49.6554 17.14 49.7508C17.14 49.8461 17.107 49.9231 17.041 49.9818C16.975 50.0478 16.898 50.0808 16.81 50.0808H13.246L12.861 49.8278C13.0883 49.8424 13.3083 49.9121 13.521 50.0368C13.741 50.1688 13.9353 50.3374 14.104 50.5428C14.28 50.7481 14.4157 50.9754 14.511 51.2248C14.6137 51.4741 14.665 51.7271 14.665 51.9838ZM8.89 58.2137C8.89 57.649 9.011 57.1504 9.253 56.7177C9.495 56.285 9.83233 55.9477 10.265 55.7057C10.6977 55.4637 11.2037 55.3427 11.783 55.3427C12.4063 55.3427 12.938 55.4637 13.378 55.7057C13.818 55.955 14.1553 56.274 14.39 56.6627C14.632 57.0587 14.753 57.4767 14.753 57.9167C14.753 58.2394 14.6943 58.551 14.577 58.8517C14.467 59.1597 14.2983 59.431 14.071 59.6657C13.851 59.9077 13.5797 60.0984 13.257 60.2377C12.9343 60.3844 12.5603 60.465 12.135 60.4797C12.047 60.4724 11.97 60.4357 11.904 60.3697C11.8453 60.3037 11.816 60.2267 11.816 60.1387V55.7277L12.41 55.5957V59.9297L12.278 59.7867H12.498C12.8427 59.7574 13.136 59.6474 13.378 59.4567C13.62 59.266 13.8033 59.035 13.928 58.7637C14.0527 58.4924 14.115 58.21 14.115 57.9167C14.115 57.6967 14.071 57.4694 13.983 57.2347C13.895 57.0074 13.7557 56.7984 13.565 56.6077C13.3817 56.4244 13.1433 56.274 12.85 56.1567C12.564 56.0394 12.223 55.9807 11.827 55.9807C11.3943 55.9807 11.002 56.0687 10.65 56.2447C10.298 56.4207 10.0193 56.6737 9.814 57.0037C9.60867 57.341 9.506 57.7407 9.506 58.2027C9.506 58.4594 9.54267 58.6904 9.616 58.8957C9.68933 59.101 9.78467 59.2807 9.902 59.4347C10.0267 59.5887 10.155 59.717 10.287 59.8197C10.353 59.9004 10.386 59.981 10.386 60.0617C10.386 60.135 10.3567 60.1974 10.298 60.2487C10.2393 60.3074 10.1733 60.3367 10.1 60.3367C10.012 60.3367 9.935 60.3 9.869 60.2267C9.605 60.0067 9.374 59.7207 9.176 59.3687C8.98533 59.0167 8.89 58.6317 8.89 58.2137ZM9 62.2224C9 62.1198 9.033 62.0391 9.099 61.9804C9.165 61.9218 9.242 61.8924 9.33 61.8924H14.258C14.346 61.8924 14.423 61.9218 14.489 61.9804C14.555 62.0464 14.588 62.1271 14.588 62.2224C14.588 62.3178 14.555 62.3948 14.489 62.4534C14.423 62.5194 14.346 62.5524 14.258 62.5524H12.608L12.575 62.3874C12.8317 62.4094 13.0847 62.4718 13.334 62.5744C13.5907 62.6844 13.8253 62.8311 14.038 63.0144C14.2507 63.1978 14.423 63.4141 14.555 63.6634C14.687 63.9201 14.753 64.2061 14.753 64.5214C14.753 64.6534 14.7237 64.7818 14.665 64.9064C14.6137 65.0311 14.5257 65.0934 14.401 65.0934C14.291 65.0934 14.2067 65.0641 14.148 65.0054C14.0893 64.9468 14.06 64.8771 14.06 64.7964C14.06 64.7304 14.0783 64.6571 14.115 64.5764C14.1517 64.5031 14.17 64.4041 14.17 64.2794C14.17 64.0741 14.1077 63.8688 13.983 63.6634C13.8657 63.4581 13.7043 63.2711 13.499 63.1024C13.2937 62.9338 13.0627 62.7981 12.806 62.6954C12.5567 62.6001 12.3037 62.5524 12.047 62.5524H9.33C9.242 62.5524 9.165 62.5194 9.099 62.4534C9.033 62.3874 9 62.3104 9 62.2224ZM8.89 68.4188C8.89 67.8541 9.011 67.3555 9.253 66.9228C9.495 66.4901 9.83233 66.1528 10.265 65.9108C10.6977 65.6688 11.2037 65.5478 11.783 65.5478C12.4063 65.5478 12.938 65.6688 13.378 65.9108C13.818 66.1601 14.1553 66.4791 14.39 66.8678C14.632 67.2638 14.753 67.6818 14.753 68.1218C14.753 68.4445 14.6943 68.7561 14.577 69.0568C14.467 69.3648 14.2983 69.6361 14.071 69.8708C13.851 70.1128 13.5797 70.3035 13.257 70.4428C12.9343 70.5895 12.5603 70.6701 12.135 70.6848C12.047 70.6775 11.97 70.6408 11.904 70.5748C11.8453 70.5088 11.816 70.4318 11.816 70.3438V65.9328L12.41 65.8008V70.1348L12.278 69.9918H12.498C12.8427 69.9625 13.136 69.8525 13.378 69.6618C13.62 69.4711 13.8033 69.2401 13.928 68.9688C14.0527 68.6975 14.115 68.4151 14.115 68.1218C14.115 67.9018 14.071 67.6745 13.983 67.4398C13.895 67.2125 13.7557 67.0035 13.565 66.8128C13.3817 66.6295 13.1433 66.4791 12.85 66.3618C12.564 66.2445 12.223 66.1858 11.827 66.1858C11.3943 66.1858 11.002 66.2738 10.65 66.4498C10.298 66.6258 10.0193 66.8788 9.814 67.2088C9.60867 67.5461 9.506 67.9458 9.506 68.4078C9.506 68.6645 9.54267 68.8955 9.616 69.1008C9.68933 69.3061 9.78467 69.4858 9.902 69.6398C10.0267 69.7938 10.155 69.9221 10.287 70.0248C10.353 70.1055 10.386 70.1861 10.386 70.2668C10.386 70.3401 10.3567 70.4025 10.298 70.4538C10.2393 70.5125 10.1733 70.5418 10.1 70.5418C10.012 70.5418 9.935 70.5051 9.869 70.4318C9.605 70.2118 9.374 69.9258 9.176 69.5738C8.98533 69.2218 8.89 68.8368 8.89 68.4188Z" fill="black"/>
                </svg>
            </div>
        <p id="skill-descript">Although I am <span className="textdecor">beginner</span> padawon , I can confidently show these skill sets through my work! Here is what I work with.</p>
        </section>
    )
}