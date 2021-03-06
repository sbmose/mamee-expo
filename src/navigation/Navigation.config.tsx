// Stacks
import AppStack from './navigators/App.stack';
import AuthStack from './navigators/Auth.stack';
import DashboardStack from './navigators/Dashboard.stack';
import MeStack from './navigators/Me.stack';
import ChildStack from './navigators/Child.stack';
// Screens
import Child from "../screen/Child";
import Administration from "../screen/Administration";
import Loss from "../screen/Loss";
import Hospitals from "../screen/Hospitals";
import Names from "../screen/Names.screen";
import Photos from "../screen/Photos";
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
import RegistrationScreen from '../screen/Authentication/Registration.screen';
import StartRegistrationScreen from '../screen/Authentication/StartRegistration.screen';
import RegistrationEmailPassScreen from '../screen/Authentication/RegistrationEmailPass.screen';
import ConditionsScreen from '../screen/Authentication/Conditions.screen';
import EmailVerificationScreen from '../screen/Authentication/EmailVerification.screen';
import AboutMeScreen from '../screen/Authentication/AboutMe.screen';
import PickConditionScreen from '../screen/Authentication/PickCondition.screen';
import LastPeriodScreen from '../screen/Authentication/LastPeriod.screen';
import GDPRScreen from '../screen/Authentication/GDPR.screen';
import LoginMethodScreen from '../screen/Authentication/LoginMethod.screen';
import CreatePinScreen from '../screen/Authentication/CreatePin.screen';
import GratulationScreen from '../screen/Authentication/Gratulation.screen';
import EnableBiometricScreen from '../screen/Authentication/EnableBiometric.screen';
import AddChildScreen from '../screen/Authentication/AddChild.screen';
import MyChildrenScreen from '../screen/Authentication/MyChildren.screen';
import EventsCalendarScreen from '../screen/Me/EventsCalendar.screen';
import PeriodCalendarScreen from '../screen/Me/PeriodCalendar.screen';
import CalendarStack from './navigators/Calendar.stack';
import AddNewEventScreen from '../screen/Me/AddNewEvent.screen';
import CalculatePeriodScreen from '../screen/Me/CalculatePeriod.screen';
import BirthPlanScreen from '../screen/Me/BirthPlan.screen';
import BagScreen from '../screen/Me/Bag.screen';
import BagListScreen from '../screen/Me/BagList.screen';
import BagDetailStack from './navigators/BagDetail.stack';
import MeMenuScreen from '../screen/Me/MeMenu.screen';
import BuyListStack from './navigators/BuyList.stack';
import HospitalsListScreen from '../screen/Me/HospitalsList.screen';
import HospitalsListStack from './navigators/HospitalsList.stack';
import NamesListScreen from '../screen/Me/NamesList.screen';
import NamesListStack from './navigators/NamesList.stack';

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
        title: "Die??a",
        icon: "child",
        component: ChildStack
    }
}

export const AuthStackConfig = {
    LOGIN_SCREEN: {
        name: "LoginScreen",
        component: LoginScreen
    },
    REGISTRATION_SCREEN: {
        name: "RegistrationScreen",
        component: RegistrationScreen
    },
    START_REGISTRATION_SCREEN: {
        name: "StartRegistrationScreen",
        component: StartRegistrationScreen
    },
    REGISTRATION_EMAIL_PASS_SCREEN: {
        name: "RegistrationEmailPassScreen",
        component: RegistrationEmailPassScreen
    },
    CONDITIONS_SCREEN: {
        name: "ConditionsScreen",
        title: "Podmienky pou????vania aplik??cie",
        component: ConditionsScreen,
    },
    EMAIL_VERIFICATION_SCREEN: {
        name: "EmailVerificationScreen",
        component: EmailVerificationScreen,
    },
    ABOUT_ME_SCREEN: {
        name: "AboutMeScreen",
        component: AboutMeScreen,
    },
    PICK_CONDITION_SCREEN: {
        name: "PickConditionScreen",
        component: PickConditionScreen,
    },
    LAST_PERIOD_SCREEN: {
        name: "LastPeriodScreen",
        component: LastPeriodScreen,
    },
    GDPR_SCREEN: {
        name: "GDPRScreen",
        component: GDPRScreen,
    },
    ADD_CHILD: {
        name: "AddChildScreen",
        component: AddChildScreen,
    },
    MY_CHILDREN_SCREEN: {
        name: "MyChildrenScreen",
        component: MyChildrenScreen,
    },
    LOGIN_METHOD_SCREEN: {
        name: "LoginMethodScreen",
        component: LoginMethodScreen,
    },
    CREATE_PIN_SCREEN: {
        name: "CreatePinScreen",
        component: CreatePinScreen,
    },
    GRATULATION_SCREEN: {
        name: "GratulationScreen",
        component: GratulationScreen,
    },
    ENABLE_BIOMETRIC_SCREEN: {
        name: "EnableBiometricScreen",
        component: EnableBiometricScreen,
    },
}

export const CalendarTabStack = {
    EVENTS_CALENDAR_SCREEN: {
        name: "EventsCalendarScreen",
        title: "Udalosti",
        component: EventsCalendarScreen,
    },
    PERIOD_CALENDAR_SCREEN: {
        name: "PeriodCalendarScreen",
        title: "Men??tru??cia",
        component: PeriodCalendarScreen
    }
}

export const BagDetailTabStack = {
    BAG_LIST_TAB_ONE_SCREEN: {
        name: "BagListTabOneScreen",
        component: BagListScreen
    },
    BAG_LIST_TAB_TWO_SCREEN: {
        name: "BagListTabTwoScreen",
        component: BagListScreen
    }
}

export const BuyListTabStack = {
    BUY_LIST_TAB_ONE_SCREEN: {
        name: "BuyListTabOneScreen",
        title: "Die??a",
        component: BagListScreen
    },
    BUY_LIST_TAB_TWO_SCREEN: {
        name: "BuyListTabTwoScreen",
        title: "Matka",
        component: BagListScreen
    }
}

export const NamesListTabStack = {
    NAMES_LIST_TAB_ONE_SCREEN: {
        name: "NamesListTabOneScreen",
        title: "Diev??at??",
        component: NamesListScreen
    },
    NAMES_LIST_TAB_TWO_SCREEN: {
        name: "NamesListTabTwoScreen",
        title: "Chlapci",
        component: NamesListScreen
    }
}

export const HospitalsListTabStack = {
    HOSPITALS_LIST_TAB_ONE_SCREEN: {
        name: "HospitalsListTabOneScreen",
        title: "Kraje",
        component: HospitalsListScreen
    },
    HOSPITALS_LIST_TAB_TWO_SCREEN: {
        name: "HospitalsListTabTwoScreen",
        title: "Najbli????ie",
        component: HospitalsListScreen
    },
    HOSPITALS_LIST_TAB_THREE_SCREEN: {
        name: "HospitalsListTabThreeScreen",
        title: "Ob????ben??",
        component: HospitalsListScreen
    },
}

export const MeStackConfig = {
    PROFILE_SCREEN: {
        name: "ProfileScreen",
        title: "M??j Profil",
        icon: require('../../assets/kruh_profil.png'),
        component: ProfileScreen,
        menu: true
    },
    HEALTH_SCREEN: {
        name: "HealthScreen",
        title: "Zdravotn?? inform??cie",
        icon: require('../../assets/zdrav_info-kruh.png'),
        component: HealthInfo,
        menu: true
    },
    CALENDAR_SCREEN: {
        name: "CalendarScreen",
        title: "Kalend??r",
        icon: require('../../assets/kalendarkruh.png'),
        component: CalendarStack,
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
        title: "V??ha",
        icon: require('../../assets/vahakruh.png'),
        component: Weight,
        menu: true
    },
    PMS_CALENDAR_SCREEN: {
        name: "PMSCalendarScreen",
        title: "PSM kalend??r",
        icon: require('../../assets/kalendarkruh.png'),
        component: PeriodCalendarScreen,
        menu: true
    },
    BIRTH_PLAN_SCREEN: {
        name: "BirthPlanScreen",
        title: "P??rodn?? pl??n",
        icon: require('../../assets/porodnyplankruh.png'),
        component: BirthPlanScreen,
        menu: true
    },
    BAG_SCREEN: {
        name: "BagScreen",
        title: "Ta??ka do p??rodnice",
        icon: require('../../assets/kalendarkruh.png'),
        component: BagScreen,
        menu: true
    },
    BAG_DETAIL_LIST_SCREEN: {
        name: "BagDetailListScreen",
        component: BagDetailStack,
        menu: false
    },
    BUY_LIST_SCREEN: {
        name: "BuyListScreen",
        title: "N??kupn?? zoznam",
        icon: require('../../assets/nakupnyzoznamkruh.png'),
        component: BuyListStack,
        menu: true
    },
    NAMES_SCREEN: {
        name: "NamesScreen",
        title: "Zoznam mien",
        icon: require('../../assets/zoznammienkruh.png'),
        component: NamesListStack,
        menu: true
    },
    HOSPITALS_SCREEN: {
        name: "HospitalsListStack",
        title: "Zoznam p??rodn??c",
        icon: require('../../assets/zoznamporodnickruh.png'),
        component: HospitalsListStack,
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
        title: "Administrat??va",
        icon: require('../../assets/administrativakruh.png'),
        component: Administration,
        menu: true
    },
    HEALTH_INFO_SCREEN: {
        name: "HealthInfoScreen",
        title: "Zdravotn?? inform??cie",
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
        component: MeMenuScreen,
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
    ADD_NEW_EVENT_SCREEN: {
        name: "AddNewEventScreen",
        title: "Nov?? udalos??",
        component: AddNewEventScreen,
        menu: false
    },
    CALCULATE_PERIOD_SCREEN: {
        name: "CalculatePeriodScreen",
        title: "V??po??et cyklu",
        component: CalculatePeriodScreen,
        menu: false
    }
}

export const ChildStackConfig = {
    CHILD_MENU_SCREEN: {
        name: "ChildMenuScreen",
        title: "Die??a",
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
        title: "Administrat??va",
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
    }
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