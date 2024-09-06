import SvgOnboardtrnexa from "../../assets/images/newResult1/Onboardtrnexa";
import SvgOnboardBrain from "../components/images/OnboardBrain";
import SvgOnboardMeditation from "../components/images/OnboardMeditation";
import SvgOnboardNexabot from "../components/images/OnboardNexabot";

export const ONBOARDING_ARRAY = [
  {
    id: "1",
    title: "Meditasyon Dinleyerek Kendinizi Rahatlatın",
    description:
      "Meditasyon dinlemek zihninizi sakinleştirmek, stresi azaltmak ve iç huzura kavuşmak için etkili bir yöntemdir.",
    image: <SvgOnboardBrain></SvgOnboardBrain>,
  },
  {
    id: "2",
    title: "Günlük Mod Takibinizi Yapın",
    description:
      "Günlük olarak yaşadığınız duygu durumlarını kaydedin, kendinizi analiz edin.",
    image: (
      <SvgOnboardMeditation style={{ marginBottom: 30 }}></SvgOnboardMeditation>
    ),
  },
  {
    id: "3",
    title: "Nexabot, Sizin Mental Arkadaşınız",
    description:
      "Nexabot, seni anlar, seni duygusal olarak analiz eder ve sana uygun bir duygu durumuna bürünerek iç dünyanda sana bir arkadaş olur.",
    image: <SvgOnboardtrnexa style={{ marginBottom: 40 }}></SvgOnboardtrnexa>,
  },
];
