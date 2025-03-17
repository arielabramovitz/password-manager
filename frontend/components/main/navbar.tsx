import {
    Card
} from "@/components/ui/card"
import {Home} from "lucide-react"
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";


export default function Navbar() {
    const leftItems = [
        {title: "Home", ref: "/"},
        {title: "About", ref: "/about"},

    ]
    const rightItems = [
        {title: "Login", ref: "/login"},
        {title: "Sign up", ref: "/signup"}
    ]

    return (
        <nav className="flex border-black border-[1px] align-middle mt-2 px-4">
            <Link className="flex items-center navbar-logo-font text-2xl" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256">
                    <g fillOpacity="1" fill="#000000" fillRule="nonzero" stroke="line" strokeWidth="0.05" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{"mixBlendMode": "normal"}}><g transform="scale(5.33333,5.33333)"><path d="M29.17773,1.54688c-2.57209,-0.11457 -3.87345,1.28354 -4.61133,2.29297c-1.05224,-0.32272 -2.70741,-0.65409 -4.6582,0.38086c-1.72913,0.91663 -2.51753,2.19173 -2.98437,3.17578c-0.13975,-0.03279 -0.16024,0.00743 -0.30664,-0.06445c-0.50165,-0.24633 -1.01189,-0.52964 -1.00586,-2.28125c0.00161,-0.56163 -0.31062,-1.07711 -0.80912,-1.33582c-0.4985,-0.25871 -1.09975,-0.2173 -1.55807,0.10731c-2.86556,2.02956 -3.95801,4.94871 -3.47656,7.4668c0.36513,1.90971 1.56554,3.56264 3.25,4.52149c-0.4532,0.91225 -1.03974,2.17205 -1.60156,3.62891c-1.14137,2.95969 -2.24647,6.71969 -1.79297,10.23633c0.42239,3.2754 1.57006,6.14447 3.62891,8.30664c0.44019,0.46228 0.9275,0.88145 1.44531,1.27148c0.11816,0.77252 0.42237,2.17077 1.28125,3.61523c1.25676,2.11362 3.89819,4.26236 8.16211,4.17578c4.65157,-0.09425 8.44411,-4.30785 8.46289,-9.6543c0.64664,-0.76875 1.27802,-1.67096 1.82031,-2.73437c0.86657,0.08863 1.75249,0.07025 2.62305,-0.2168c1.27775,-0.42131 2.53628,-1.42491 3,-2.96094c0.59634,-1.97491 -0.0554,-3.36459 -0.74023,-4.3418c1.5645,-1.90695 4.42645,-6.35018 2.49219,-11.60937c-0.98574,-2.6785 -2.50102,-3.9554 -3.41406,-4.61719c0.07122,-0.35778 0.13348,-0.42022 0.15039,-0.94531c0.03612,-1.1217 -0.15001,-2.70749 -1.44141,-3.82813c-1.43112,-1.2411 -2.8381,-1.48288 -3.875,-1.53906c-0.08753,-0.31314 -0.0089,-0.34785 -0.19922,-0.70703c-0.56458,-1.06548 -1.90268,-2.25848 -3.8418,-2.34375zM29.04492,4.54492c0.94889,0.04173 1.1108,0.34918 1.32422,0.75195c0.21342,0.40277 0.24219,0.80664 0.24219,0.80664c0.01585,0.41286 0.20126,0.80091 0.51252,1.07261c0.31126,0.2717 0.72079,0.40301 1.13201,0.36294c0,0 1.7779,-0.08331 2.87109,0.86328c0.2816,0.24437 0.43178,0.79329 0.41016,1.46484c-0.02163,0.67155 -0.1875,1.22656 -0.1875,1.22656c-0.20988,0.67686 0.08252,1.40827 0.70117,1.75391c0,0 1.97008,1.09673 2.93359,3.71484c0.89392,2.43054 0.33554,4.66861 -0.49219,6.35352c-0.21182,-2.25468 -0.81913,-4.5568 -2.60547,-6.74609c-0.00065,0 -0.0013,0 -0.00195,0c-0.66524,-0.81463 -2.20804,-2.54687 -4.54102,-3.48242c-1.16649,-0.46778 -2.54234,-0.70034 -4.04297,-0.50586c-1.28659,0.16674 -2.6722,0.73693 -4.08789,1.65625c-0.73785,-0.64393 -1.56044,-1.09698 -2.4082,-1.21875c-1.10971,-0.15939 -2.18655,0.04298 -3.14063,0.35351c-0.67408,0.2194 -1.25822,0.49266 -1.78516,0.76367c-0.16975,-0.10014 -0.35758,-0.16584 -0.55273,-0.19336c-1.35726,-0.38121 -2.36169,-1.50049 -2.61328,-2.81641c-0.1579,-0.82585 0.10993,-1.74042 0.67773,-2.66602c0.51105,0.92115 1.18617,1.61222 1.9043,1.96484c1.3526,0.66417 2.66016,0.51367 2.66016,0.51367c0.59775,-0.05789 1.10337,-0.46669 1.28516,-1.03906c0,0 0.73427,-1.91859 2.07422,-2.62891c1.10459,-0.58602 3.23242,0.06445 3.23242,0.06445c0.71837,0.2914 1.54045,-0.01254 1.89648,-0.70117c0,0 0.96058,-1.76255 2.60156,-1.68945zM28.38086,14.07031c0.80477,0.01451 1.54037,0.20257 2.21875,0.47461c1.80902,0.72544 3.16762,2.1923 3.73633,2.88867c2.11529,2.59246 2.25872,5.23406 2.26758,8.23047c-0.07295,0.07524 -0.25781,0.28711 -0.25781,0.28711c-0.31179,0.29261 -0.4839,0.70437 -0.47308,1.13183c0.01082,0.42746 0.20353,0.82998 0.52972,1.10645c0,0 1.20649,0.98775 0.77344,2.42188c-0.15728,0.52098 -0.47261,0.78208 -1.06836,0.97852c-0.59575,0.19644 -1.42894,0.19375 -2.05273,0.01367c-0.74231,-0.2142 -1.52591,0.17041 -1.81055,0.88867c-0.59351,1.49497 -1.3849,2.6051 -2.16992,3.44922c-0.06754,0.06383 -0.129,0.13379 -0.18359,0.20898c-1.44762,1.47854 -2.81836,1.99414 -2.81836,1.99414c-0.77341,0.29718 -1.15948,1.16506 -0.8623,1.93848c0.29718,0.77341 1.16506,1.15948 1.93848,0.8623c0,0 0.33427,-0.15588 0.83789,-0.45508c-0.95649,2.17769 -2.88087,3.51365 -4.90625,3.55469c-3.32008,0.06742 -4.6762,-1.2841 -5.52344,-2.70898c-0.02054,-0.03454 -0.03502,-0.06896 -0.05469,-0.10352c1.05137,0.35834 2.18152,0.63114 3.4043,0.79883c0.53105,0.07299 1.06069,-0.14291 1.38939,-0.56634c0.3287,-0.42343 0.40651,-0.99007 0.20412,-1.48643c-0.20239,-0.49636 -0.65423,-0.84703 -1.1853,-0.91989c-3.17033,-0.43478 -5.35772,-1.5347 -6.89062,-3.14453c-1.5329,-1.60983 -2.46061,-3.80149 -2.82422,-6.62109c-0.3325,-2.57836 0.56011,-6.03738 1.61524,-8.77344c0.21838,-0.56629 0.43936,-1.0749 0.6543,-1.56641c1.14585,-0.58895 2.91607,-1.10245 4.45117,-1.42969c0.51836,-0.09912 0.87049,-0.58396 0.80439,-1.10755c-0.06609,-0.5236 -0.52766,-0.90572 -1.05439,-0.87291c-0.05655,0.00304 -0.11274,0.01088 -0.16797,0.02344c-0.87155,0.18578 -1.81782,0.41459 -2.74219,0.70313c0.06607,-0.12039 0.25195,-0.47851 0.25195,-0.47851c0.00396,-0.00648 0.00786,-0.01299 0.01172,-0.01953c0.004,-0.00908 0.0079,-0.01819 0.01172,-0.02734c0.01153,-0.01992 0.0226,-0.04011 0.0332,-0.06055c0.52275,-0.28599 1.14527,-0.59079 1.81445,-0.80859c0.76568,-0.24922 1.5583,-0.37306 2.23828,-0.27539c0.67998,0.09767 1.25623,0.36863 1.80469,1.06445c0.33587,0.42619 0.95034,0.50679 1.38477,0.18164c1.79366,-1.34307 3.32863,-1.79958 4.66992,-1.77539zM27.14258,15.04297c-0.03321,-0.001 -0.06646,-0.00035 -0.09961,0.00195c-0.51914,0.02729 -0.93081,0.44776 -0.94711,0.96736c-0.0163,0.5196 0.3682,0.96505 0.88461,1.02483c0,0 0.47661,0.06254 1.00977,0.45703c0.53316,0.3945 1.09089,1.03318 1.12109,2.57031c0.01079,0.55228 0.46725,0.99126 1.01953,0.98047c0.55228,-0.01079 0.99126,-0.46725 0.98047,-1.01953c-0.04079,-2.07587 -0.98255,-3.43642 -1.93164,-4.13867c-0.94909,-0.70225 -1.9375,-0.83399 -1.9375,-0.83399c-0.03302,-0.00492 -0.06626,-0.00817 -0.09961,-0.00976zM21.85352,19.0332c-0.3651,0.00264 -0.69975,0.20403 -0.87305,0.52539c-1.10244,1.97738 -2.27137,3.22664 -3.51367,4.27344c-0.36011,0.30309 -0.46015,0.81627 -0.24023,1.23242c0.64684,1.22442 1.37666,2.22152 2.16211,3.04297c0.24311,0.27336 0.61606,0.39217 0.97249,0.30981c0.35643,-0.08236 0.63945,-0.35276 0.73797,-0.70506c0.09853,-0.3523 -0.00316,-0.73029 -0.26515,-0.9856c-0.50745,-0.53071 -0.96923,-1.25831 -1.42578,-2.01172c1.15197,-1.06775 2.29011,-2.33929 3.31836,-4.18359c0.1782,-0.31038 0.17696,-0.69232 -0.00324,-1.00153c-0.18021,-0.30922 -0.51191,-0.49856 -0.8698,-0.49651zM17.02539,19.04883c-0.553,0 -1.00195,0.896 -1.00195,2c0,1.104 0.44895,2 1.00195,2c0.553,0 1.00195,-0.896 1.00195,-2c0,-1.104 -0.44895,-2 -1.00195,-2zM26.01367,21.05664c-0.3008,0.01341 -0.62998,0.04208 -0.99023,0.08789v0.73438c0,0 2.16152,-0.00078 3.60352,2.19922c0,0 1.89869,-3.2227 -2.61328,-3.02148zM26.09766,26.03906c-0.46179,0.00093 -0.8629,0.31793 -0.97053,0.76701c-0.10763,0.44908 0.10621,0.91346 0.51741,1.12362c0,0 0.18408,0.19841 0.23438,0.23047c-3.37851,1.58171 -6.92343,1.85301 -10.93555,0.44141c-0.33521,-0.11776 -0.70773,-0.04885 -0.97861,0.18105c-0.27089,0.22989 -0.39947,0.58625 -0.33779,0.93614c0.218,1.23322 1.04064,2.3602 2.17969,3.26758c1.13904,0.90737 2.64276,1.57598 4.31445,1.55859c4.12816,-0.04264 6.53661,-2.81927 6.95117,-3.31641c-0.03158,0.42075 0.0076,0.77902 -0.17773,1.32617c-0.17744,0.52316 0.10282,1.09111 0.62598,1.26855c0.52316,0.17744 1.09111,-0.10282 1.26855,-0.62598c0.79219,-2.33848 0.30711,-4.19517 -0.44336,-5.34766c-0.75047,-1.15248 -1.76953,-1.68945 -1.76953,-1.68945c-0.14688,-0.07971 -0.3114,-0.12134 -0.47852,-0.12109zM24.69141,30.71094c-0.96129,0.83421 -2.39387,1.8113 -4.58984,1.83398c-1.1163,0.01161 -2.21137,-0.45592 -3.04883,-1.12305c-0.11617,-0.09254 -0.09712,-0.18578 -0.20117,-0.28516c2.73755,0.53597 5.35994,0.36256 7.83984,-0.42578z"></path></g></g>
                </svg>

                <span className="ml-2 text-nowrap font-black ">PASS VAULT</span>
            </Link>
            <div className="flex w-full justify-center ml-[-5%]">
                {leftItems.map((item, ind) => (
                    <Link className="" key={ind} href={item.ref}>
                        <Button className="h-10" variant="ghost">{item.title}</Button>
                    </Link>
                ))}
            </div>
            <div className="flex ">
                {rightItems.map((item, ind) => (
                    <Link className="" key={ind} href={item.ref}>
                        <Button className="h-10" variant="ghost">{item.title}</Button>
                    </Link>
                ))}
            </div>
        </nav>
    )
}