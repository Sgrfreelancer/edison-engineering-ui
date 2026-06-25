
export interface CalculatorResultCard {
  title: string;
  icon?: string;
  bgClass: string;
  textClass: string;
}

export interface SolarCalculatorData {
  badge: string;

  hero: {
    title: string;
    highlight: string;
    description: string;
  };

  buttons: {
    quoteText: string;
    quoteRoute: string;
    callText: string;
    phone: string;
  };

 
  calculator: {
    title: string;
    description: string;


    billRange: {
      min: number;
      max: number;
      step: number;
    };

    resultCards: {
      annualSavings: CalculatorResultCard;
      co2Offset: CalculatorResultCard;
      paybackYears: CalculatorResultCard;
      recommendedKW: CalculatorResultCard;
    };

    buttonText: string;
  };
}
