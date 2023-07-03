import { create } from "zustand";
import { FormData } from "../types/types";
import plans from "../constants/Plans";
import addOns from "../constants/AddOns";

const useFormStore = create<FormData>()((set) => ({
  currentStep: 1,
  setCurrentStep: (stepNo: number) => {
    set({currentStep: stepNo})
  }, 

  personalInfo: {
    name: "",
    email: "",
    phone: "",
    setPersonalFields: (field, value) => {
      set((state) => ({
        personalInfo: {
          ...state.personalInfo,
          [field]: value,
        },
      }));
    },
  },

  isMonthly: true,
  toggleIsMonthly: () => {
    set((state) => ({
      isMonthly: !state.isMonthly,
    }));
  },

  selectPlan: {
    plans: plans,
    selectedPlan: null,
    setSelectedPlan(plan) {
        set((state) => ({
          selectPlan: {
            ...state.selectPlan,
            selectedPlan: plan
          }
        }))
    },
  },

  selectAddons: {
    addOns: addOns,
    selectedAddOns: [],
    toggleSelectedAddOns: (addOn) => {
      set((state) => ({
        selectAddons: {
          ...state.selectAddons,
          selectedAddOns: state.selectAddons.selectedAddOns.includes(addOn)
            ? state.selectAddons.selectedAddOns.filter((item) => item !== addOn)
            : [...state.selectAddons.selectedAddOns, addOn],
        },
      }));
    },
  },

  isShowThankYou: false,
  setIsShowThankYou() {
      set((state) => ({
        ...state,
        isShowThankYou: true
      }))
  },
  
}));

export default useFormStore;
