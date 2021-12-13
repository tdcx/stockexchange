// Generated by https://quicktype.io

export default interface yahooStock {
    defaultKeyStatistics: DefaultKeyStatistics;
    financialsTemplate:   FinancialsTemplate;
    price:                Price;
    financialData:        FinancialData;
    quoteType:            QuoteType;
    calendarEvents:       CalendarEvents;
    summaryDetail:        SummaryDetail;
    symbol:               string;
    pageViews:            PageViews;
    quoteData:            QuoteData;
    mktmData:             HammerfestPonies;
    timeSeries:           TimeSeries;
    meta:                 Meta;
    loading:              boolean;
    errorList:            any[];
}

export interface CalendarEvents {
    maxAge:         number;
    earnings:       Earnings;
    exDividendDate: PuneHedgehog;
    dividendDate:   PuneHedgehog;
}

export interface PuneHedgehog {
    raw: number;
    fmt: string;
}

export interface Earnings {
    earningsDate:    PuneHedgehog[];
    earningsAverage: PuneHedgehog;
    earningsLow:     PuneHedgehog;
    earningsHigh:    PuneHedgehog;
    revenueAverage:  LivingstoneSouthernWhiteFacedOwl;
    revenueLow:      LivingstoneSouthernWhiteFacedOwl;
    revenueHigh:     LivingstoneSouthernWhiteFacedOwl;
}

export interface LivingstoneSouthernWhiteFacedOwl {
    raw:     number;
    fmt:     string;
    longFmt: string;
}

export interface DefaultKeyStatistics {
    annualHoldingsTurnover:       HammerfestPonies;
    enterpriseToRevenue:          PuneHedgehog;
    beta3Year:                    HammerfestPonies;
    profitMargins:                PuneHedgehog;
    enterpriseToEbitda:           PuneHedgehog;
    "52WeekChange":               PuneHedgehog;
    morningStarRiskRating:        HammerfestPonies;
    forwardEps:                   PuneHedgehog;
    revenueQuarterlyGrowth:       HammerfestPonies;
    sharesOutstanding:            LivingstoneSouthernWhiteFacedOwl;
    fundInceptionDate:            HammerfestPonies;
    annualReportExpenseRatio:     HammerfestPonies;
    totalAssets:                  HammerfestPonies;
    bookValue:                    PuneHedgehog;
    sharesShort:                  LivingstoneSouthernWhiteFacedOwl;
    sharesPercentSharesOut:       PuneHedgehog;
    fundFamily:                   null;
    lastFiscalYearEnd:            PuneHedgehog;
    heldPercentInstitutions:      PuneHedgehog;
    netIncomeToCommon:            LivingstoneSouthernWhiteFacedOwl;
    trailingEps:                  PuneHedgehog;
    lastDividendValue:            PuneHedgehog;
    SandP52WeekChange:            PuneHedgehog;
    priceToBook:                  PuneHedgehog;
    heldPercentInsiders:          PuneHedgehog;
    nextFiscalYearEnd:            PuneHedgehog;
    yield:                        HammerfestPonies;
    mostRecentQuarter:            PuneHedgehog;
    shortRatio:                   PuneHedgehog;
    sharesShortPreviousMonthDate: PuneHedgehog;
    floatShares:                  LivingstoneSouthernWhiteFacedOwl;
    beta:                         PuneHedgehog;
    enterpriseValue:              LivingstoneSouthernWhiteFacedOwl;
    priceHint:                    LivingstoneSouthernWhiteFacedOwl;
    threeYearAverageReturn:       HammerfestPonies;
    lastSplitDate:                PuneHedgehog;
    lastSplitFactor:              string;
    legalType:                    null;
    lastDividendDate:             PuneHedgehog;
    morningStarOverallRating:     HammerfestPonies;
    earningsQuarterlyGrowth:      PuneHedgehog;
    priceToSalesTrailing12Months: HammerfestPonies;
    dateShortInterest:            PuneHedgehog;
    pegRatio:                     PuneHedgehog;
    ytdReturn:                    HammerfestPonies;
    forwardPE:                    PuneHedgehog;
    maxAge:                       number;
    lastCapGain:                  HammerfestPonies;
    shortPercentOfFloat:          PuneHedgehog;
    sharesShortPriorMonth:        LivingstoneSouthernWhiteFacedOwl;
    impliedSharesOutstanding:     HammerfestPonies;
    category:                     null;
    fiveYearAverageReturn:        HammerfestPonies;
}

export interface HammerfestPonies {
}

export interface FinancialData {
    ebitdaMargins:           PuneHedgehog;
    profitMargins:           PuneHedgehog;
    grossMargins:            PuneHedgehog;
    operatingCashflow:       LivingstoneSouthernWhiteFacedOwl;
    revenueGrowth:           PuneHedgehog;
    operatingMargins:        PuneHedgehog;
    ebitda:                  LivingstoneSouthernWhiteFacedOwl;
    targetLowPrice:          PuneHedgehog;
    recommendationKey:       string;
    grossProfits:            LivingstoneSouthernWhiteFacedOwl;
    freeCashflow:            LivingstoneSouthernWhiteFacedOwl;
    targetMedianPrice:       PuneHedgehog;
    currentPrice:            PuneHedgehog;
    earningsGrowth:          PuneHedgehog;
    currentRatio:            PuneHedgehog;
    returnOnAssets:          PuneHedgehog;
    numberOfAnalystOpinions: LivingstoneSouthernWhiteFacedOwl;
    targetMeanPrice:         PuneHedgehog;
    debtToEquity:            PuneHedgehog;
    returnOnEquity:          PuneHedgehog;
    targetHighPrice:         PuneHedgehog;
    totalCash:               LivingstoneSouthernWhiteFacedOwl;
    totalDebt:               LivingstoneSouthernWhiteFacedOwl;
    totalRevenue:            LivingstoneSouthernWhiteFacedOwl;
    totalCashPerShare:       PuneHedgehog;
    financialCurrency:       string;
    maxAge:                  number;
    revenuePerShare:         PuneHedgehog;
    quickRatio:              PuneHedgehog;
    recommendationMean:      PuneHedgehog;
}

export interface FinancialsTemplate {
    code:   string;
    maxAge: number;
}

export interface Meta {
    symbol:   string;
    start:    number;
    end:      number;
    timeUnit: string;
}

export interface PageViews {
    shortTermTrend: string;
    midTermTrend:   string;
    longTermTrend:  string;
    maxAge:         number;
}

export interface Price {
    quoteSourceName:            string;
    regularMarketOpen:          PuneHedgehog;
    averageDailyVolume3Month:   LivingstoneSouthernWhiteFacedOwl;
    exchange:                   string;
    regularMarketTime:          number;
    volume24Hr:                 HammerfestPonies;
    regularMarketDayHigh:       PuneHedgehog;
    shortName:                  string;
    averageDailyVolume10Day:    LivingstoneSouthernWhiteFacedOwl;
    longName:                   string;
    regularMarketChange:        PuneHedgehog;
    currencySymbol:             string;
    regularMarketPreviousClose: PuneHedgehog;
    postMarketTime:             number;
    preMarketPrice:             HammerfestPonies;
    exchangeDataDelayedBy:      number;
    toCurrency:                 null;
    postMarketChange:           PuneHedgehog;
    postMarketPrice:            PuneHedgehog;
    exchangeName:               string;
    preMarketChange:            HammerfestPonies;
    circulatingSupply:          HammerfestPonies;
    regularMarketDayLow:        PuneHedgehog;
    priceHint:                  LivingstoneSouthernWhiteFacedOwl;
    currency:                   string;
    regularMarketPrice:         PuneHedgehog;
    regularMarketVolume:        LivingstoneSouthernWhiteFacedOwl;
    lastMarket:                 null;
    regularMarketSource:        string;
    openInterest:               HammerfestPonies;
    marketState:                string;
    underlyingSymbol:           null;
    marketCap:                  LivingstoneSouthernWhiteFacedOwl;
    quoteType:                  string;
    volumeAllCurrencies:        HammerfestPonies;
    postMarketSource:           string;
    strikePrice:                HammerfestPonies;
    symbol:                     string;
    postMarketChangePercent:    PuneHedgehog;
    preMarketSource:            string;
    maxAge:                     number;
    fromCurrency:               null;
    regularMarketChangePercent: PuneHedgehog;
}

export interface QuoteData {
    AAPL: Aapl;
    AMZN: Aapl;
    TSLA: Aapl;
    FB:   Aapl;
    GOOG: Aapl;
    NFLX: Aapl;
}

export interface Aapl {
    sourceInterval:                number;
    quoteSourceName:               string;
    regularMarketOpen:             PuneHedgehog;
    exchange:                      string;
    regularMarketTime:             PuneHedgehog;
    fiftyTwoWeekRange:             { [key: string]: string };
    sharesOutstanding:             LivingstoneSouthernWhiteFacedOwl;
    regularMarketDayHigh:          PuneHedgehog;
    shortName:                     string;
    longName:                      string;
    exchangeTimezoneName:          string;
    regularMarketChange:           PuneHedgehog;
    regularMarketPreviousClose:    PuneHedgehog;
    fiftyTwoWeekHighChange:        PuneHedgehog;
    exchangeTimezoneShortName:     string;
    fiftyTwoWeekLowChange:         PuneHedgehog;
    exchangeDataDelayedBy:         number;
    regularMarketDayLow:           PuneHedgehog;
    priceHint:                     number;
    currency:                      string;
    regularMarketPrice:            PuneHedgehog;
    regularMarketVolume:           LivingstoneSouthernWhiteFacedOwl;
    isLoading:                     boolean;
    triggerable:                   boolean;
    gmtOffSetMilliseconds:         number;
    firstTradeDateMilliseconds:    number;
    region:                        string;
    marketState:                   string;
    marketCap:                     LivingstoneSouthernWhiteFacedOwl;
    quoteType:                     string;
    invalid:                       boolean;
    symbol:                        string;
    language:                      string;
    fiftyTwoWeekLowChangePercent:  PuneHedgehog;
    regularMarketDayRange:         { [key: string]: string };
    messageBoardId:                string;
    fiftyTwoWeekHigh:              PuneHedgehog;
    fiftyTwoWeekHighChangePercent: PuneHedgehog;
    uuid:                          string;
    market:                        string;
    fiftyTwoWeekLow:               PuneHedgehog;
    regularMarketChangePercent:    PuneHedgehog;
    fullExchangeName:              string;
    tradeable:                     boolean;
}

export interface QuoteType {
    exchange:                  string;
    shortName:                 string;
    longName:                  string;
    exchangeTimezoneName:      string;
    exchangeTimezoneShortName: string;
    isEsgPopulated:            boolean;
    gmtOffSetMilliseconds:     string;
    quoteType:                 string;
    symbol:                    string;
    messageBoardId:            string;
    market:                    string;
}

export interface SummaryDetail {
    previousClose:                PuneHedgehog;
    regularMarketOpen:            PuneHedgehog;
    twoHundredDayAverage:         PuneHedgehog;
    trailingAnnualDividendYield:  PuneHedgehog;
    payoutRatio:                  PuneHedgehog;
    volume24Hr:                   HammerfestPonies;
    regularMarketDayHigh:         PuneHedgehog;
    navPrice:                     HammerfestPonies;
    averageDailyVolume10Day:      LivingstoneSouthernWhiteFacedOwl;
    totalAssets:                  HammerfestPonies;
    regularMarketPreviousClose:   PuneHedgehog;
    fiftyDayAverage:              PuneHedgehog;
    trailingAnnualDividendRate:   PuneHedgehog;
    open:                         PuneHedgehog;
    toCurrency:                   null;
    averageVolume10days:          LivingstoneSouthernWhiteFacedOwl;
    expireDate:                   HammerfestPonies;
    yield:                        HammerfestPonies;
    algorithm:                    null;
    dividendRate:                 PuneHedgehog;
    exDividendDate:               PuneHedgehog;
    beta:                         PuneHedgehog;
    circulatingSupply:            HammerfestPonies;
    startDate:                    HammerfestPonies;
    regularMarketDayLow:          PuneHedgehog;
    priceHint:                    LivingstoneSouthernWhiteFacedOwl;
    currency:                     string;
    trailingPE:                   PuneHedgehog;
    regularMarketVolume:          LivingstoneSouthernWhiteFacedOwl;
    lastMarket:                   null;
    maxSupply:                    HammerfestPonies;
    openInterest:                 HammerfestPonies;
    marketCap:                    LivingstoneSouthernWhiteFacedOwl;
    volumeAllCurrencies:          HammerfestPonies;
    strikePrice:                  HammerfestPonies;
    averageVolume:                LivingstoneSouthernWhiteFacedOwl;
    priceToSalesTrailing12Months: PuneHedgehog;
    dayLow:                       PuneHedgehog;
    ask:                          PuneHedgehog;
    ytdReturn:                    HammerfestPonies;
    askSize:                      LivingstoneSouthernWhiteFacedOwl;
    volume:                       LivingstoneSouthernWhiteFacedOwl;
    fiftyTwoWeekHigh:             PuneHedgehog;
    forwardPE:                    PuneHedgehog;
    maxAge:                       number;
    fromCurrency:                 null;
    fiveYearAvgDividendYield:     PuneHedgehog;
    fiftyTwoWeekLow:              PuneHedgehog;
    bid:                          PuneHedgehog;
    tradeable:                    boolean;
    dividendYield:                PuneHedgehog;
    bidSize:                      LivingstoneSouthernWhiteFacedOwl;
    dayHigh:                      PuneHedgehog;
}

export interface TimeSeries {
    quarterlyPeRatio:                      QuarterlyEnterpriseValue[];
    quarterlyForwardPeRatio:               QuarterlyEnterpriseValue[];
    trailingEnterprisesValueEBITDARatio:   QuarterlyEnterpriseValue[];
    quarterlyPegRatio:                     QuarterlyEnterpriseValue[];
    trailingForwardPeRatio:                QuarterlyEnterpriseValue[];
    trailingMarketCap:                     QuarterlyEnterpriseValue[];
    quarterlyPsRatio:                      QuarterlyEnterpriseValue[];
    quarterlyMarketCap:                    QuarterlyEnterpriseValue[];
    trailingEnterpriseValue:               QuarterlyEnterpriseValue[];
    quarterlyEnterprisesValueRevenueRatio: QuarterlyEnterpriseValue[];
    quarterlyEnterprisesValueEBITDARatio:  QuarterlyEnterpriseValue[];
    trailingPegRatio:                      QuarterlyEnterpriseValue[];
    trailingPeRatio:                       QuarterlyEnterpriseValue[];
    quarterlyEnterpriseValue:              QuarterlyEnterpriseValue[];
    trailingEnterprisesValueRevenueRatio:  QuarterlyEnterpriseValue[];
    trailingPbRatio:                       QuarterlyEnterpriseValue[];
    quarterlyPbRatio:                      QuarterlyEnterpriseValue[];
    trailingPsRatio:                       QuarterlyEnterpriseValue[];
    timestamp:                             number[];
}

export interface QuarterlyEnterpriseValue {
    dataId:        number;
    asOfDate:      string;
    periodType:    PeriodType;
    reportedValue: PuneHedgehog;
}

export enum PeriodType {
    The3M = "3M",
    Ttm = "TTM",
}


