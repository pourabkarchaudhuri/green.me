/* eslint import/order:0 */
/* SCREENS */
import * as Act from "../../screens/Act/translations";
import * as Budget from "../../screens/Budget/translations";
import * as Emissions from "../../screens/Emissions/translations";
import * as Settings from "../../screens/Settings/translations";
import * as MonthlyBudget from "../../screens/MonthlyBudget/translations";
import * as ComingSoon from "../../screens/ComingSoon/translations";
import * as AddEmission from "../../screens/AddEmission/translations";
import * as EmissionItem from "../../screens/EmissionItem/translations";
import * as Intro from "../../screens/Intro/translations";
import * as About from "../../screens/About/translations";
import * as SupportUs from "../../screens/SupportUs/translations";
import * as MyLocation from "../../screens/MyLocation/translations";
import * as ActDetail from "../../screens/ActDetail/translations";
import * as Notifications from "../../screens/Notifications/translations";
import * as InfoModal from "../../screens/InfoModal/translations";
import * as Periodicity from "../../screens/Periodicity/translations";
import * as CategorySelection from "../../screens/CategorySelection/translations";
import * as SubCategorySelection from "../../screens/SubCategorySelection/translations";
import * as BarCodeScan from "../../screens/BarCodeScan/translations";
import * as MonthlyEmissions from "../../screens/MonthlyEmissions/translations";
import * as Languages from "../../screens/Languages/translations";
import * as Faq from "../../screens/Faq/translations";
import * as RecurringEmissions from "../../screens/RecurringEmissions/translations";

/* COMPONENTS */
import * as NoEmission from "components/NoEmission/translations";
import * as PermissionsRequest from "components/PermissionsRequest/translations";
import * as OpenFoodFacts from "components/OpenFoodFacts/translations";

/* UTILS */
import * as UI from "utils/ui/translations";

const en = {
  ...Act.en,
  ...Budget.en,
  ...Emissions.en,
  ...Settings.en,
  ...MonthlyBudget.en,
  ...ComingSoon.en,
  ...AddEmission.en,
  ...EmissionItem.en,
  ...Intro.en,
  ...About.en,
  ...SupportUs.en,
  ...MyLocation.en,
  ...ActDetail.en,
  ...Notifications.en,
  ...InfoModal.en,
  ...CategorySelection.en,
  ...SubCategorySelection.en,
  ...BarCodeScan.en,
  ...MonthlyEmissions.en,
  ...Languages.en,
  ...Faq.en,
  ...RecurringEmissions.en,
  ...NoEmission.en,
  ...PermissionsRequest.en,
  ...OpenFoodFacts.en,
  ...Periodicity.en,
  ...UI.en,
};

export interface TranslationKeys
  extends UI.TranslationKeys,
    MonthlyBudget.TranslationKeys,
    NoEmission.TranslationKeys,
    PermissionsRequest.TranslationKeys,
    OpenFoodFacts.TranslationKeys,
    Act.TranslationKeys,
    Budget.TranslationKeys,
    Emissions.TranslationKeys,
    ComingSoon.TranslationKeys,
    InfoModal.TranslationKeys,
    AddEmission.TranslationKeys,
    EmissionItem.TranslationKeys,
    Settings.TranslationKeys,
    Intro.TranslationKeys,
    About.TranslationKeys,
    Notifications.TranslationKeys,
    MyLocation.TranslationKeys,
    SupportUs.TranslationKeys,
    CategorySelection.TranslationKeys,
    SubCategorySelection.TranslationKeys,
    BarCodeScan.TranslationKeys,
    MonthlyEmissions.TranslationKeys,
    ActDetail.TranslationKeys,
    Languages.TranslationKeys,
    Periodicity.TranslationKeys,
    Faq.TranslationKeys,
    RecurringEmissions.TranslationKeys {}

export { en };
