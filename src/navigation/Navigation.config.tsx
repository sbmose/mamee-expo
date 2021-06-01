import Me from "../screen/Me";
import Administration from "../screen/Administration";
import Loss from "../screen/Loss";
import Hospitals from "../screen/Hospitals";
import Names from "../screen/Names";
import BuyList from "../screen/BuyList";
import Bag from "../screen/Bag";
import Plan from "../screen/Plan";
import PSMCalendar from "../screen/PSMCalendar";
import Photos from "../screen/Photos";
import Calendar from "../screen/Calendar";
import Health from "../screen/Health";
import Weight from "../screen/Weight";
import DetailPhoto from "../screen/DetailPhoto";
import BagPartner from "../screen/BagPartner";
import BagMother from "../screen/BagMother";
import BagChild from "../screen/BagChild";
import ProfileScreen from '../screen/me/Profile.screen';
import HealthInfoDetail from '../screen/me/HealthInfoDetail.screen';
import ChangePassword from "../screen/me/ChangePassword.screen";
import HealthInfo from '../screen/me/HealthInfo.screen';

export const MeStackConfig = {
    PROFILE_SCREEN: {
        name: "ProfileScreen",
        title: "Môj Profil",
        icon: require('../../assets/kruh_profil.png'),
        component: ProfileScreen,
        menu: true
    },
    HEALTH_SCREEN: {
        name: "HealthScreen",
        title: "Zdravotné informácie",
        icon: require('../../assets/zdrav_info-kruh.png'),
        component: HealthInfo,
        menu: true
    },
    CALENDAR_SCREEN: {
        name: "CalendarScreen",
        title: "Kalendár",
        icon: require('../../assets/kalendarkruh.png'),
        component: Calendar,
        menu: true
    },
    PHOTOS_SCREEN: {
        name: "PhotosScreen",
        title: "Fotky",
        icon: require('../../assets/fotkykruh.png'),
        component: Photos,
        menu: true
    },
    WEIGHT_SCREEN: {
        name: "WeigntScreen",
        title: "Váha",
        icon: require('../../assets/vahakruh.png'),
        component: Weight,
        menu: true
    },
    PMS_CALENDAR_SCREEN: {
        name: "PmsCalendarScreen",
        title: "PSM kalendár",
        icon: require('../../assets/kalendarkruh.png'),
        component: PSMCalendar,
        menu: true
    },
    PLAN_SCREEN: {
        name: "PlanScreen",
        title: "Pôrodný plán",
        icon: require('../../assets/porodnyplankruh.png'),
        component: Plan,
        menu: true
    },
    BAG_SCREEN: {
        name: "BagScreen",
        title: "Taška do pôrodnice",
        icon: require('../../assets/kalendarkruh.png'),
        component: Bag,
        menu: true
    },
    BUY_LIST_SCREEN: {
        name: "BuyListScreen",
        title: "Nákupný zoznam",
        icon: require('../../assets/nakupnyzoznamkruh.png'),
        component: BuyList,
        menu: true
    },
    NAMES_SCREEN: {
        name: "NamesScreen",
        title: "Zoznam mien",
        icon: require('../../assets/zoznammienkruh.png'),
        component: Names,
        menu: true
    },
    HOSPITALS_SCREEN: {
        name: "HospitalsScreen",
        title: "Zoznam pôrodníc",
        icon: require('../../assets/zoznamporodnickruh.png'),
        component: Hospitals,
        menu: true
    },
    LOSS_SCREEN: {
        name: "LossScreen",
        title: "Strata tehotenstva",
        icon: require('../../assets/stratatehkruh.png'),
        component: Loss,
        menu: true
    },
    ADMINISTRATION_SCREEN: {
        name: "AdministrationScreen",
        title: "Administratíva",
        icon: require('../../assets/administrativakruh.png'),
        component: Administration,
        menu: true
    },
    HEALTH_INFO_SCREEN: {
        name: "HealthInfoScreen",
        title: "Zdravotné informácie",
        icon: null,
        component: HealthInfo,
        menu: false
    },
    HEALTH_INFO_DETAIL_SCREEN: {
        name: "HealthInfoDetailScreen",
        title: "",
        icon: null,
        component: HealthInfoDetail,
        menu: false
    },
    CHANGE_PASSWORD_SCREEN: {
        name: "ChangePasswordScreen",
        title: "",
        icon: null,
        component: ChangePassword,
        menu: false
    },
    ME_MENU_SCREEN: {
        name: "MeMenuScreen",
        title: "Ja",
        icon: null,
        component: Me,
        menu: false
    },
    DETAIL_PHOTO_SCREEN: {
        name: "DetailPhotoScreen",
        title: "",
        icon: null,
        component: DetailPhoto,
        menu: false
    },
    BAG_MOTHER_SCREEN: {
        name: "BagMotherScreen",
        title: "",
        icon: null,
        component: BagMother,
        menu: false
    },
    BAG_CHILD_SCREEN: {
        name: "BagChildScreen",
        title: "",
        icon: null,
        component: BagChild,
        menu: false
    },
    BAG_PARTNER_SCREEN: {
        name: "BagPartnerScreen",
        title: "",
        icon: null,
        component: BagPartner,
        menu: false
    },
}
