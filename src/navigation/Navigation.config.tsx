// Stacks
import AppStack from './navigators/App.stack';
import AuthStack from './navigators/Auth.stack';
import DashboardStack from './navigators/Dashboard.stack';
import MeStack from './navigators/Me.stack';
import ChildStack from './navigators/Child.stack';
// Screens
import Me from "../screen/Me/Me.screen";
import Child from "../screen/Child";
import Administration from "../screen/Administration";
import Loss from "../screen/Loss";
import Hospitals from "../screen/Hospitals";
import Names from "../screen/Names";
import BuyList from "../screen/BuyList";
import Bag from "../screen/Bag";
import PSMCalendar from "../screen/PSMCalendar";
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
        title: "Podmienky používania aplikácie",
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
    MENSES_CALENDAR_SCREEN: {
        name: "PeriodCalendarScreen",
        title: "Menštruácia",
        component: PeriodCalendarScreen
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
        menu: false
    },
    BIRTH_PLAN_SCREEN: {
        name: "BirthPlanScreen",
        title: "Pôrodný plán",
        icon: require('../../assets/porodnyplankruh.png'),
        component: BirthPlanScreen,
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
    ADD_NEW_EVENT_SCREEN: {
        name: "AddNewEventScreen",
        title: "Nová udalosť",
        component: AddNewEventScreen,
        menu: false
    },
    CALCULATE_PERIOD_SCREEN: {
        name: "CalculatePeriodScreen",
        title: "Výpočet cyklu",
        component: CalculatePeriodScreen,
        menu: false
    }
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