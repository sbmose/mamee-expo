import React from 'react';
import Svg, {
    Circle,
    G,
    Path,
    SvgXml
} from 'react-native-svg';

export default function TabBarIcons({ name, color, width, height }: any) {
    switch (name) {
        case "dashboard":
            return (<SvgXml
                xml={
                    `<svg width=${width}  height=${height} viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M10.0232 0.668945C10.3999 0.230234 10.8811 0 11.4281 0C12.5334 0 13.3993 0.950469 13.3993 2.16383C13.3993 3.44036 12.4148 4.29883 11.2395 5.32368L11.2344 5.32812C11.1957 5.36191 11.1567 5.39587 11.1176 5.43004L11.116 5.43145L11.1157 5.43173C10.8851 5.63303 10.6467 5.84123 10.3941 6.06777C10.2877 6.1632 10.1555 6.21094 10.0232 6.21094C9.89097 6.21094 9.75876 6.1632 9.65233 6.06777C9.39974 5.84129 9.16138 5.63311 8.93089 5.43179L8.92897 5.43012C7.60431 4.27332 6.64721 3.4375 6.64721 2.16383C6.64721 0.950469 7.51306 0 8.61837 0C9.16535 0 9.64656 0.230234 10.0232 0.668945ZM10.3648 4.55393L10.387 4.53449C11.5526 3.51672 12.2666 2.89148 12.2666 2.16383C12.2666 1.6709 11.9786 1.17188 11.4281 1.17188C10.82 1.17188 10.5849 1.9473 10.5686 2.00375C10.5027 2.26051 10.2801 2.43938 10.0232 2.43938C9.76635 2.43938 9.54372 2.26051 9.47787 2.00375C9.46156 1.9473 9.22643 1.17188 8.61833 1.17188C8.06781 1.17188 7.77979 1.6709 7.77979 2.16383C7.77979 2.86211 8.39 3.42602 9.65943 4.53461C9.77824 4.63832 9.89909 4.74387 10.0232 4.85305C10.1396 4.75064 10.2531 4.65146 10.3648 4.55393ZM19.1219 16.4844C18.8091 16.4844 18.5556 16.7467 18.5556 17.0703V17.6562H17.423V17.0703C17.423 16.7467 17.1694 16.4844 16.8566 16.4844C16.5439 16.4844 16.2903 16.7467 16.2903 17.0703V17.6562H15.12V15.1724C15.7894 15.4176 16.5517 15.211 17.0126 14.6137C17.6007 13.8539 17.479 12.7477 16.7492 12.1446L11.0842 7.41644C10.4595 6.89969 9.58691 6.89969 8.96035 7.41805L3.29944 12.1428C2.56566 12.7491 2.44658 13.8548 3.03362 14.6134C3.50943 15.229 4.28289 15.4099 4.92648 15.1739V17.6562H3.75611V17.0703C3.75611 16.7467 3.50256 16.4844 3.1898 16.4844C2.87705 16.4844 2.6235 16.7467 2.6235 17.0703V17.6562H1.49089V17.0703C1.49089 16.7467 1.23733 16.4844 0.924582 16.4844C0.61183 16.4844 0.358276 16.7467 0.358276 17.0703V19.4141C0.358276 19.7377 0.61183 20 0.924582 20C1.23733 20 1.49089 19.7377 1.49089 19.4141V18.8281H2.6235V19.4141C2.6235 19.7377 2.87705 20 3.1898 20C3.50256 20 3.75611 19.7377 3.75611 19.4141V18.8281H4.92648V19.4141C4.92648 19.7377 5.18003 20 5.49278 20H14.5537C14.8664 20 15.12 19.7377 15.12 19.4141V18.8281H16.2903V19.4141C16.2903 19.7377 16.5439 20 16.8566 20C17.1694 20 17.423 19.7377 17.423 19.4141V18.8281H18.5556V19.4141C18.5556 19.7377 18.8091 20 19.1219 20C19.4346 20 19.6882 19.7377 19.6882 19.4141V17.0703C19.6882 16.7467 19.4346 16.4844 19.1219 16.4844ZM13.9874 18.8281H11.7221V15.8984C11.7221 15.5748 11.4686 15.3125 11.1558 15.3125H8.89061C8.57786 15.3125 8.32431 15.5748 8.32431 15.8984V18.8281H6.05909V14.3602L10.0232 11.0794L13.9874 14.3603V18.8281ZM9.66947 9.87148C9.87625 9.70031 10.1701 9.70031 10.3769 9.87148L15.3327 13.973C15.5773 14.1757 15.9334 14.1341 16.128 13.8819C16.3247 13.6277 16.284 13.26 16.0402 13.0585L10.375 8.33016C10.1684 8.15937 9.87757 8.15969 9.66951 8.3318L4.00838 13.0567C3.75585 13.2655 3.7267 13.6342 3.91792 13.8812C4.11341 14.1341 4.46905 14.1759 4.71332 13.9734L9.66947 9.87148ZM9.45692 18.8281H10.5895V16.4844H9.45692V18.8281Z" />
                </svg>`
                }
                width={width || 25}
                height={height || 25} />
            );
        case "me":
            return (<SvgXml
                xml={
                    `<svg width=${width}  height=${height} viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M22.5469 10.5469V19.7819C23.484 20.7374 24 21.9852 24 23.2969C24 23.6852 23.6852 24 23.2969 24H0.703125C0.314812 24 0 23.6852 0 23.2969C0 21.9852 0.516047 20.7375 1.45312 19.782V10.5469C1.45312 4.71712 6.17105 0 12 0C17.8297 0 22.5469 4.71797 22.5469 10.5469ZM9.89062 11.9531C9.89062 12.3414 9.57582 12.6562 9.1875 12.6562C8.79918 12.6562 8.48438 12.3414 8.48438 11.9531C8.48438 11.5648 8.79918 11.25 9.1875 11.25C9.57582 11.25 9.89062 11.5648 9.89062 11.9531ZM14.3433 15.9778C14.6325 15.7187 15.0771 15.743 15.3361 16.0323C15.5953 16.3215 15.5709 16.766 15.2817 17.0252C14.3777 17.8352 13.2122 18.2814 12 18.2814C10.7879 18.2814 9.62237 17.8352 8.71834 17.0252C8.42912 16.766 8.40474 16.3215 8.66387 16.0323C8.92299 15.743 9.3676 15.7187 9.65673 15.9778C10.3025 16.5565 11.1347 16.8751 12 16.8751C12.8653 16.8751 13.6975 16.5565 14.3433 15.9778ZM14.8125 12.6562C15.2008 12.6562 15.5156 12.3414 15.5156 11.9531C15.5156 11.5648 15.2008 11.25 14.8125 11.25C14.4242 11.25 14.1094 11.5648 14.1094 11.9531C14.1094 12.3414 14.4242 12.6562 14.8125 12.6562ZM19.7344 12.6562V10.5469V9.84375C20.5098 9.84375 21.1406 10.4746 21.1406 11.25C21.1406 12.0254 20.5098 12.6562 19.7344 12.6562ZM21.1406 18.7658V13.684C20.7266 13.9241 20.2465 14.0624 19.7344 14.0624H19.7021C19.5577 15.6565 18.9281 17.1127 17.9618 18.2811H19.0312C19.7695 18.2811 20.4862 18.4485 21.1406 18.7658ZM16.7002 2.71025C18.8573 4.00893 20.4375 6.17235 20.9566 8.71738C20.5868 8.53818 20.1721 8.43758 19.7344 8.43758H19.4407C18.9407 6.67471 17.8241 5.12816 16.2693 4.09789C16.4491 3.64893 16.5936 3.185 16.7002 2.71025ZM18.3281 13.3595V10.547C18.3281 8.47355 17.3135 6.54867 15.6404 5.3707C13.9806 8.16164 10.9895 9.84384 7.78125 9.84384H5.71102C5.68528 10.0768 5.67188 10.3118 5.67188 10.547V13.3595C5.67188 16.8488 8.51067 19.6876 12 19.6876C15.4893 19.6876 18.3281 16.8488 18.3281 13.3595ZM12 1.40625C13.1997 1.40625 14.346 1.63903 15.3966 2.06105C14.7441 5.76009 11.5667 8.4375 7.78127 8.4375H4.26564C3.82792 8.4375 3.41327 8.53809 3.04347 8.7173C3.89327 4.55086 7.58627 1.40625 12 1.40625ZM4.26562 10.5469V9.84375C3.49022 9.84375 2.85938 10.4746 2.85938 11.25C2.85938 12.0254 3.49022 12.6562 4.26562 12.6562V10.5469ZM2.85938 13.684C3.27342 13.9241 3.75352 14.0624 4.26562 14.0624H4.29792C4.4423 15.6565 5.07188 17.1127 6.03816 18.2811H4.96875C4.23052 18.2811 3.51384 18.4485 2.85938 18.7658V13.684ZM4.96873 19.6875C3.27434 19.6875 1.81062 20.9601 1.47729 22.5938H22.5227C22.1893 20.9601 20.7256 19.6875 19.0312 19.6875H16.4418C15.184 20.573 13.6517 21.0938 12 21.0938C10.3482 21.0938 8.816 20.573 7.5582 19.6875H4.96873Z" />
                    </svg>`
                }
                width={width || 25}
                height={height || 25} />
            );
        case "child":
            return (
                <SvgXml
                    xml={
                        `<svg width=${width}  height=${height}  viewBox="0 0 27 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" fill=${color} d="M22.9037 10.2704H22.9335C24.6058 10.2704 26.0353 11.6219 26.0353 13.3214C26.0353 15.0207 24.6061 16.3725 22.9335 16.3725H22.8908C22.5102 19.8001 19.5961 22.4745 16.0687 22.4745H15.1747C14.8599 23.3622 14.012 24 13.0177 24C12.0233 24 11.1755 23.3622 10.8606 22.4745H9.96665C6.43922 22.4745 3.52514 19.8001 3.14448 16.3725H3.10186C1.4295 16.3725 0 15.0211 0 13.3214C0 11.6222 1.42915 10.2704 3.10186 10.2704H3.13166C3.31905 7.84864 4.39356 5.56852 6.15288 3.87912V2.62449C6.15288 0.970637 7.66588 -0.27316 9.291 0.0518745L13.0177 0.797186L16.7444 0.0518745C18.3661 -0.272448 19.8824 0.967179 19.8824 2.62449V3.87917C21.6417 5.56857 22.7162 7.84864 22.9037 10.2704ZM8.44114 13.3216C8.8624 13.3216 9.20389 12.9801 9.20389 12.5589C9.20389 12.1376 8.8624 11.7961 8.44114 11.7961C8.01988 11.7961 7.67839 12.1376 7.67839 12.5589C7.67839 12.9801 8.01988 13.3216 8.44114 13.3216ZM17.5942 13.3216C18.0154 13.3216 18.3569 12.9801 18.3569 12.5589C18.3569 12.1376 18.0154 11.7961 17.5942 11.7961C17.1729 11.7961 16.8314 12.1376 16.8314 12.5589C16.8314 12.9801 17.1729 13.3216 17.5942 13.3216ZM3.10186 14.847C2.24738 14.847 1.52551 14.1484 1.52551 13.3215C1.52551 12.4945 2.24738 11.796 3.10186 11.796V14.847ZM17.0435 1.54772L14.8819 1.9801C15.1509 2.39413 15.3059 2.88544 15.3059 3.40569C15.3059 3.92594 15.1509 4.41725 14.8819 4.83128L17.0435 5.26361C17.6825 5.39144 18.2994 4.93822 18.3617 4.29349C18.3525 4.21924 18.362 2.62448 18.362 2.62448C18.362 1.94487 17.7306 1.41033 17.0435 1.54772ZM13.0177 2.36091C13.466 2.50507 13.7804 2.92586 13.7804 3.40563C13.7804 3.8854 13.466 4.30614 13.0177 4.45035C12.5693 4.30619 12.2549 3.8854 12.2549 3.40563C12.2549 2.92591 12.5693 2.50512 13.0177 2.36091ZM8.9918 1.54774C8.31035 1.41141 7.67839 1.9339 7.67839 2.62449V4.07022C7.6911 4.1441 7.69293 4.21921 7.68383 4.2933C7.74581 4.93676 8.35144 5.39176 8.9918 5.26357L11.1534 4.83124C10.8844 4.41722 10.7294 3.9259 10.7294 3.40565C10.7294 2.88541 10.8844 2.39409 11.1534 1.98007L8.9918 1.54774ZM13.0177 22.4745C12.5971 22.4745 12.2549 22.1323 12.2549 21.7118C12.2549 21.2912 12.5971 20.949 13.0177 20.949C13.4382 20.949 13.7804 21.2912 13.7804 21.7118C13.7804 22.1323 13.4382 22.4745 13.0177 22.4745ZM13.0177 19.4235C13.761 19.4235 14.4225 19.78 14.8407 20.3308C15.1365 20.0686 15.3059 19.7498 15.3059 19.4235C15.3059 18.5966 14.2581 17.898 13.0177 17.898C11.7773 17.898 10.7294 18.5966 10.7294 19.4235C10.7294 19.7498 10.8988 20.0686 11.1946 20.3308C11.6129 19.78 12.2743 19.4235 13.0177 19.4235ZM21.408 15.6097C21.408 18.466 19.1535 20.8055 16.3305 20.9425C16.653 20.4895 16.8314 19.9684 16.8314 19.4235C16.8314 17.8467 15.2785 16.3725 13.0177 16.3725C10.7343 16.3725 9.20389 17.8628 9.20389 19.4235C9.20389 19.9684 9.38228 20.4894 9.70487 20.9425C6.88192 20.8055 4.62737 18.466 4.62737 15.6097V11.0332C4.62737 9.05069 5.33261 7.14167 6.59202 5.63976C7.18011 6.52201 8.2382 6.97 9.29095 6.75948L13.0177 6.01417L16.7444 6.75948C17.8014 6.97092 18.8579 6.51804 19.4433 5.63981C20.7027 7.14172 21.408 9.05069 21.408 11.0332V15.6097ZM24.5098 13.3215C24.5098 12.4945 23.7879 11.796 22.9335 11.796V14.847C23.7879 14.847 24.5098 14.1484 24.5098 13.3215Z" />
                        </svg>`
                    }
                    width={width || 25}
                    height={height || 25} />
            );
        default:
            return null;
    };
}