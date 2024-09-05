import SvgOnboardBrain from "../components/images/OnboardBrain";
import SvgOnboardMeditation from "../components/images/OnboardMeditation";
import SvgOnboardNexabot from "../components/images/OnboardNexabot";

export const ONBOARDING_ARRAY = [
  {
    id: "1",
    title: "Meditasyon Yolculuğunu Dinlemek İç Sesinize",
    description:
      "Meditasyon dinlemek zihninizi sakinleştirmek, stresi azaltmak ve iç huzura kavuşmak için etkili bir yöntemdir.",
    image: <SvgOnboardBrain></SvgOnboardBrain>,
  },
  {
    id: "2",
    title: "Günlük Ruh Hali Takibi",
    description:
      "Kişinin belli bir zaman dilimi içerisinde günlük olarak yaşadığı duygu durumlarının kaydedilip analiz edilmesi sürecidir.",
    image: (
      <SvgOnboardMeditation style={{ marginBottom: 30 }}></SvgOnboardMeditation>
    ),
  },
  {
    id: "3",
    title: "Yapay Zeka ile NexaBot Destekli Kişisel Koç",
    description:
      "Meditasyon dinlemek zihninizi sakinleştirmek, stresi azaltmak ve iç huzura kavuşmak için etkili bir yöntemdir.",
    image: <SvgOnboardNexabot style={{ marginBottom: 40 }}></SvgOnboardNexabot>,
  },
];
