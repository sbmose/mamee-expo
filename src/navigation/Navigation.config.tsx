// Stacks
import AppStack from './navigators/App.stack';
import AuthStack from './navigators/Auth.stack';
import DashboardStack from './navigators/Dashboard.stack';
import MeStack from './navigators/Me.stack';
import ChildStack from './navigators/Child.stack';
// Screens
import Me from "../screen/Me";
import Child from "../screen/Child";
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
import Weight from "../screen/Weight";
import DetailPhoto from "../screen/DetailPhoto";
import BagPartner from "../screen/BagPartner";
import BagMother from "../screen/BagMother";
import BagChild from "../screen/BagChild";
import ProfileScreen from '../screen/Profile.screen';
import HealthInfoDetail from '../screen/HealthInfoDetail.screen';
import ChangePassword from "../screen/ChangePassword.screen";
import HealthInfo from '../screen/HealthInfo.screen';
import Food from "../screen/Food";
import Activities from '../screen/Activities';
import ChildAdministration from '../screen/ChildAdministration';
import ChildPhotos from '../screen/ChildPhotos';
import DetailChildPhoto from '../screen/DetailChildPhoto';
import Dashboard from '../screen/Dashboard';
import Gallery from '../screen/Gallery';
import LoginScreen from '../screen/Authentication/Login.screen';

export const RootStackConfig = {
    APP_STACK: {
        name: "AppStack",
        component: AppStack
    },
    AUTH_STACK: {
        name: "AuthStack",
        component: AuthStack
    }
}

export const AppTabsConfig = {
    DASHBOARD_STACK: {
        name: "DashboardStack",
        title: "Domov",
        icon: "dashboard",
        component: DashboardStack
    },
    ME_STACK: {
        name: "MeStack",
        title: "Ja",
        icon: "me",
        component: MeStack
    },
    CHILD_STACK: {
        name: "ChildStack",
        title: "Dieťa",
        icon: "child",
        component: ChildStack
    }
}

export const AuthStackConfig = {
    LOGIN_SCREEN: {
        name: "LoginScreen",
        component: LoginScreen
    }
}

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

export const ChildStackConfig = {
    CHILD_MENU_SCREEN: {
        name: "ChildMenuScreen",
        title: "Dieťa",
        icon: null,
        component: Child,
        menu: false
    },
    FOOD_SCREEN: {
        name: "FoodScreen",
        title: "Strava",
        icon: require('../../assets/stravakruh.png'),
        component: Food,
        menu: true
    },
    CHILD_PHOTOS_SCREEN: {
        name: "PhotoScreen",
        title: "Fotky",
        icon: require('../../assets/fotkykruh.png'),
        component: ChildPhotos,
        menu: true
    },
    CHILD_ADMINISTRATION_SCREEN: {
        name: "ChildAdministrationScreen",
        title: "Administratíva",
        icon: require('../../assets/administrativakruh.png'),
        component: ChildAdministration,
        menu: true
    },
    ACTIVITIES_SCREEN: {
        name: "ActivitiesScreen",
        title: "Aktivity",
        icon: require('../../assets/fotkykruh.png'),
        component: Activities,
        menu: true
    },
    DETAIL_CHILD_PHOTOS_SCREEN: {
        name: "DetailChildPhotoScreen",
        title: "",
        icon: null,
        component: DetailChildPhoto,
        menu: false
    },
}

export const DashboardStackConfig = {
    DASHBOARD_SCREEN: {
        name: "DashboardScreen",
        title: "",
        component: Dashboard
    },
    GALLERY_SCREEN: {
        name: "GalleryScreen",
        title: "Fotky",
        component: Gallery
    }
}